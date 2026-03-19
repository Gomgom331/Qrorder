import { useState, useMemo } from 'react';
import {
  Plus, Pencil, Trash2, Search, X, ImagePlus, Flame, Star, Zap, Ban,
  ChevronUp, ChevronDown, ArrowUpDown, Clock, Gift,
  Percent, Scissors, CheckCircle2, AlertCircle, Timer, Tag as TagIcon,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { InputField } from '../../components/ui/InputField';
import { DropdownSelect } from '../../components/ui/DropdownSelect';
import { Modal, ModalBtn } from '../../components/ui/Modal';
import { Tag } from '../../components/ui/Tag';
import { Toggle } from '../../components/ui/Toggle';
import { Pagination } from '../../components/ui/Pagination';
import { CheckboxField } from '../../components/ui/CheckboxField';

// ─── Types ────────────────────────────────────────────────────────
type MenuBadge = 'popular' | 'recommended' | 'limited';
type MenuStatus = 'active' | 'inactive' | 'soldout';
type DiscountType = 'percent' | 'amount';
type SaleType = 'discount' | 'set';
type ModalTab = 'basic' | 'timesale';
type BaseDiscountType = 'none' | 'percent' | 'amount';

const DAYS_OF_WEEK = ['월', '화', '수', '목', '금', '토', '일'];
const CATEGORIES = ['전체', '한식', '일식', '중식', '양식', '디저트', '음료'];
const PLATFORMS = ['네이버', '카카오', '구글', '배달의민족', '쿠팡이츠', '직접 방문'];
const STATUS_FILTER_OPTIONS = [
  { value: '전체', label: '전체 상태' },
  { value: 'active', label: '판매 중' },
  { value: 'inactive', label: '비활성' },
  { value: 'soldout', label: '품절' },
];

// ─── Interfaces ───────────────────────────────────────────────────
interface TimeSale {
  id: string;
  label: string;
  saleType: SaleType;
  discountType?: DiscountType;
  discountValue?: number;
  setDescription?: string;
  setPrice?: number;
  startTime: string;
  endTime: string;
  days: string[];
  active: boolean;
}

interface ReviewEvent {
  id: string;
  title: string;
  description: string;
  reward: string;
  platform: string;
  startDate: string;
  endDate: string;
  active: boolean;
}

interface Menu {
  id: string;
  name: string;
  category: string;
  price: number;
  status: MenuStatus;
  stock: number;
  description: string;
  image?: string;
  options?: string[];
  badges: MenuBadge[];
  limitedQty?: number;
  sortIndex: number;
  timeSales: TimeSale[];
  reviewEvents: ReviewEvent[];
  isEvent?: boolean;
  baseDiscountType?: BaseDiscountType; // 기본 할인 유형
  baseDiscountValue?: number;          // 할인율(%) 또는 할인가(원)
}

// ─── Badge config ─────────────────────────────────────────────────
const BADGE_CONFIG: Record<MenuBadge, { label: string; icon: React.ElementType; color: 'red' | 'amber' | 'purple' }> = {
  popular:     { label: '인기',     icon: Flame, color: 'red' },
  recommended: { label: '추천',     icon: Star,  color: 'amber' },
  limited:     { label: '한정수량', icon: Zap,   color: 'purple' },
};

// ─── Helpers ──────────────────────────────────────────────────────
function getTimeSaleStatus(ts: TimeSale): 'live' | 'closed' | 'upcoming' {
  const now = new Date();
  const todayLabel = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];
  if (!ts.days.includes(todayLabel)) return 'upcoming';
  const [sh, sm] = ts.startTime.split(':').map(Number);
  const [eh, em] = ts.endTime.split(':').map(Number);
  const nowMins = now.getHours() * 60 + now.getMinutes();
  if (nowMins < sh * 60 + sm) return 'upcoming';
  if (nowMins >= eh * 60 + em) return 'closed';
  return 'live';
}

function MenuBadgeChip({ badge }: { badge: MenuBadge }) {
  const cfg = BADGE_CONFIG[badge];
  const Icon = cfg.icon;
  return (
    <Tag color={cfg.color} variant="soft" size="sm" icon={<Icon size={10} />}>
      {cfg.label}
    </Tag>
  );
}

function TimeSaleStatusBadge({ ts }: { ts: TimeSale }) {
  const s = getTimeSaleStatus(ts);
  if (s === 'live') return <Tag color="green" variant="soft" size="sm" dot>진행중</Tag>;
  if (s === 'closed') return <Tag color="gray" variant="soft" size="sm" icon={<Ban size={9} />}>마감</Tag>;
  return <Tag color="blue" variant="soft" size="sm" icon={<Timer size={9} />}>예정</Tag>;
}

// ─── Mock data ────────────────────────────────────────────────────
const MOCK_DATA: Menu[] = [
  {
    id: 'event-1',
    name: '영수증 인증 이벤트',
    category: '이벤트',
    price: 0,
    status: 'active',
    stock: 999,
    description: 'SNS 영수증 인증 시 다음 방문 음료 1잔 무료',
    options: [],
    badges: [],
    sortIndex: -1,
    timeSales: [],
    reviewEvents: [],
    isEvent: true,
  },
  {
    id: '1', name: '불고기 정식', category: '한식', price: 12000, status: 'active', stock: 999,
    description: '푸짐한 불고기와 반찬', options: ['맵기 조절', '밥 양'], badges: ['popular', 'recommended'],
    sortIndex: 0,
    timeSales: [{ id: 'ts1', label: '런치 특가', saleType: 'discount', discountType: 'percent', discountValue: 20, startTime: '11:00', endTime: '14:00', days: ['월','화','수','목','금'], active: true }],
    reviewEvents: [],
  },
  { id: '2', name: '김치찌개', category: '한식', price: 8000, status: 'active', stock: 999, description: '얼큰한 김치찌개', options: ['맵기 조절'], badges: ['popular'], sortIndex: 1, timeSales: [], reviewEvents: [] },
  { id: '3', name: '된장찌개', category: '한식', price: 8000, status: 'active', stock: 999, description: '구수한 된장찌개', options: [], badges: [], sortIndex: 2, timeSales: [], reviewEvents: [] },
  { id: '4', name: '비빔밥', category: '한식', price: 9000, status: 'active', stock: 30, description: '고소한 참기름 비빔밥', options: ['맵기 조절'], badges: ['recommended', 'limited'], limitedQty: 30, sortIndex: 3,
    timeSales: [{ id: 'ts2', label: '디너 세트', saleType: 'set', setDescription: '비빔밥 + 국 + 후식', setPrice: 12000, startTime: '17:00', endTime: '21:00', days: ['금','토','일'], active: true }],
    reviewEvents: [] },
  { id: '5', name: '제육볶음', category: '한식', price: 11000, status: 'active', stock: 15, description: '매콤한 제육볶음', options: ['맵기 조절', '밥 양'], badges: ['limited'], limitedQty: 15, sortIndex: 4, timeSales: [], reviewEvents: [] },
  { id: '6', name: '돈까스', category: '일식', price: 10000, status: 'active', stock: 30, description: '바삭한 돈까스', options: ['소스 선택'], badges: ['popular'], sortIndex: 5, timeSales: [], reviewEvents: [] },
  { id: '7', name: '우동', category: '일식', price: 7000, status: 'soldout', stock: 0, description: '따뜻한 우동', options: [], badges: [], sortIndex: 6, timeSales: [], reviewEvents: [] },
  { id: '8', name: '카레라이스', category: '일식', price: 8500, status: 'active', stock: 999, description: '고소한 카레라이스', options: ['맵기 조절'], badges: ['recommended'], sortIndex: 7, timeSales: [], reviewEvents: [] },
];

// ─── ModalTabBtn ──────────────────────────────────────────────────
function ModalTabBtn({ active, onClick, icon: Icon, label, count }: {
  active: boolean; onClick: () => void;
  icon: React.ElementType; label: string; count?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
        active ? 'border-[#FF6B2B] text-[#FF6B2B]' : 'border-transparent text-slate-500 hover:text-slate-700'
      }`}
    >
      <Icon size={13} />
      {label}
      {count !== undefined && count > 0 && (
        <span className={`ml-0.5 px-1 py-0.5 rounded-full text-[10px] font-semibold ${
          active ? 'bg-orange-100 text-[#FF6B2B]' : 'bg-slate-100 text-slate-500'
        }`}>{count}</span>
      )}
    </button>
  );
}

// ─── TimeSale Editor ──────────────────────────────────────────────
function TimeSaleEditor({ sales, onChange }: { sales: TimeSale[]; onChange: (v: TimeSale[]) => void }) {
  const blankForm = (): Omit<TimeSale, 'id'> => ({
    label: '', saleType: 'discount', discountType: 'percent', discountValue: 10,
    setDescription: '', setPrice: 0, startTime: '11:00', endTime: '14:00',
    days: ['월','화','수','목','금'], active: true,
  });

  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState<Omit<TimeSale, 'id'>>(blankForm());
  const [editingId, setEditingId] = useState<string | null>(null);

  const toggleDay = (d: string) => {
    const cur = form.days;
    setForm({ ...form, days: cur.includes(d) ? cur.filter((x) => x !== d) : [...cur, d] });
  };

  const handleSave = () => {
    if (!form.label || form.days.length === 0) return;
    if (editingId) {
      onChange(sales.map((s) => s.id === editingId ? { ...form, id: editingId } : s));
      setEditingId(null);
    } else {
      onChange([...sales, { ...form, id: String(Date.now()) }]);
    }
    setForm(blankForm());
    setAdding(false);
  };

  const handleEdit = (ts: TimeSale) => { setForm({ ...ts }); setEditingId(ts.id); setAdding(true); };
  const handleDelete = (id: string) => onChange(sales.filter((s) => s.id !== id));

  return (
    <div className="space-y-3">
      {sales.length > 0 && (
        <div className="space-y-2">
          {sales.map((ts) => (
            <div key={ts.id} className={`border rounded-[6px] p-3 ${ts.active ? 'border-slate-200' : 'border-slate-100 opacity-60'}`}>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-sm font-medium text-slate-800">{ts.label}</span>
                    <TimeSaleStatusBadge ts={ts} />
                    {ts.saleType === 'discount' ? (
                      <Tag color="red" variant="soft" size="sm" icon={<Percent size={9} />}>
                        {ts.discountType === 'percent' ? `${ts.discountValue}% 할인` : `₩${(ts.discountValue ?? 0).toLocaleString()} 할인`}
                      </Tag>
                    ) : (
                      <Tag color="blue" variant="soft" size="sm" icon={<Scissors size={9} />}>
                        세트 ₩{(ts.setPrice ?? 0).toLocaleString()}
                      </Tag>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
                    <span className="flex items-center gap-1"><Clock size={11} />{ts.startTime}~{ts.endTime}</span>
                    <span>{ts.days.join('·')}</span>
                  </div>
                  {ts.saleType === 'set' && ts.setDescription && (
                    <p className="text-xs text-slate-400 mt-1">{ts.setDescription}</p>
                  )}
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Toggle size="sm" checked={ts.active} onChange={(v) => onChange(sales.map((s) => s.id === ts.id ? { ...s, active: v } : s))} />
                  <Button variant="icon" size="sm" onClick={() => handleEdit(ts)} iconOnly={<Pencil size={13} />}
                    className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50" />
                  <Button variant="icon" size="sm" onClick={() => handleDelete(ts.id)} iconOnly={<Trash2 size={13} />}
                    className="text-slate-400 hover:text-red-500 hover:bg-red-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {adding ? (
        <div className="border border-[#FF6B2B]/30 bg-orange-50/40 rounded-[6px] p-4 space-y-3">
          <p className="text-xs font-semibold text-slate-700">{editingId ? '시간 판매 수정' : '시간 한정 판매 추가'}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <InputField label="행사 이름" inputSize="sm" placeholder="예: 런치 특가, 해피아워"
              value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} />
            <DropdownSelect label="판매 유형" size="sm"
              options={[{ value: 'discount', label: '할인 판매' }, { value: 'set', label: '세트 판매' }]}
              value={form.saleType} onChange={(v) => setForm({ ...form, saleType: v as SaleType })} />
          </div>
          {form.saleType === 'discount' ? (
            <div className="grid grid-cols-2 gap-3">
              <DropdownSelect label="할인 방식" size="sm"
                options={[{ value: 'percent', label: '% 할인' }, { value: 'amount', label: '금액 할인' }]}
                value={form.discountType ?? 'percent'} onChange={(v) => setForm({ ...form, discountType: v as DiscountType })} />
              <InputField label={form.discountType === 'percent' ? '할인율 (%)' : '할인금액 (원)'} inputSize="sm" type="number"
                value={form.discountValue ?? ''} suffix={form.discountType === 'percent' ? '%' : '원'}
                onChange={(e) => setForm({ ...form, discountValue: Number(e.target.value) })} />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <InputField label="세트 설명" inputSize="sm" placeholder="예: 메인+국+후식"
                value={form.setDescription ?? ''} onChange={(e) => setForm({ ...form, setDescription: e.target.value })} />
              <InputField label="세트 가격" inputSize="sm" type="number" suffix="원"
                value={form.setPrice ?? ''} onChange={(e) => setForm({ ...form, setPrice: Number(e.target.value) })} />
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            <InputField label="시작 시간" inputSize="sm" type="time" value={form.startTime}
              onChange={(e) => setForm({ ...form, startTime: e.target.value })} />
            <InputField label="종료 시간" inputSize="sm" type="time" value={form.endTime}
              onChange={(e) => setForm({ ...form, endTime: e.target.value })} />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1.5">적용 요일</label>
            <div className="flex gap-1.5 flex-wrap">
              {DAYS_OF_WEEK.map((d) => (
                <button key={d} type="button" onClick={() => toggleDay(d)}
                  className={`w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                    form.days.includes(d) ? 'bg-[#FF6B2B] text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'
                  }`}>
                  {d}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <Button size="sm" variant="primary" onClick={handleSave} disabled={!form.label || form.days.length === 0}>
              {editingId ? '수정 완료' : '추가'}
            </Button>
            <Button size="sm" variant="outline" onClick={() => { setAdding(false); setEditingId(null); setForm(blankForm()); }}>취소</Button>
          </div>
        </div>
      ) : (
        <Button size="sm" variant="outline" leftIcon={<Plus size={13} />} onClick={() => setAdding(true)}>
          시간 한정 판매 추가
        </Button>
      )}

      {sales.length === 0 && !adding && (
        <div className="text-center py-8 bg-slate-50 rounded-[6px] border border-dashed border-slate-200">
          <Clock size={28} className="mx-auto text-slate-300 mb-2" />
          <p className="text-xs text-slate-400">등록된 시간 한정 판매가 없습니다</p>
          <p className="text-xs text-slate-300 mt-0.5">런치 특가, 해피아워, 세트 할인 등을 등록해보세요</p>
        </div>
      )}
    </div>
  );
}

// ─── ReviewEvent Editor ───────────────────────────────────────────
function ReviewEventEditor({ events, onChange }: { events: ReviewEvent[]; onChange: (v: ReviewEvent[]) => void }) {
  const blankForm = (): Omit<ReviewEvent, 'id'> => ({
    title: '', description: '', reward: '', platform: '네이버', startDate: '', endDate: '', active: true,
  });

  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState<Omit<ReviewEvent, 'id'>>(blankForm());
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSave = () => {
    if (!form.title || !form.reward) return;
    if (editingId) {
      onChange(events.map((e) => e.id === editingId ? { ...form, id: editingId } : e));
      setEditingId(null);
    } else {
      onChange([...events, { ...form, id: String(Date.now()) }]);
    }
    setForm(blankForm());
    setAdding(false);
  };

  const handleEdit = (ev: ReviewEvent) => { setForm({ ...ev }); setEditingId(ev.id); setAdding(true); };
  const handleDelete = (id: string) => onChange(events.filter((e) => e.id !== id));

  const getEventStatus = (ev: ReviewEvent) => {
    if (!ev.startDate || !ev.endDate) return 'ongoing';
    const now = new Date().toISOString().slice(0, 10);
    if (now < ev.startDate) return 'upcoming';
    if (now > ev.endDate) return 'ended';
    return 'ongoing';
  };

  return (
    <div className="space-y-3">
      {events.length > 0 && (
        <div className="space-y-2">
          {events.map((ev) => {
            const status = getEventStatus(ev);
            return (
              <div key={ev.id} className={`border rounded-[6px] p-3 ${ev.active ? 'border-slate-200' : 'border-slate-100 opacity-60'}`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-sm font-medium text-slate-800">{ev.title}</span>
                      {status === 'ongoing' && <Tag color="green" variant="soft" size="sm" dot>진행중</Tag>}
                      {status === 'upcoming' && <Tag color="blue" variant="soft" size="sm" icon={<Timer size={9} />}>예정</Tag>}
                      {status === 'ended' && <Tag color="gray" variant="soft" size="sm" icon={<Ban size={9} />}>종료</Tag>}
                      <Tag variant="soft" color="blue" size="sm">{ev.platform}</Tag>
                    </div>
                    {ev.description && <p className="text-xs text-slate-500 mb-0.5">{ev.description}</p>}
                    <div className="flex items-center gap-1.5 text-xs">
                      <Gift size={11} className="text-[#FF6B2B]" />
                      <span className="text-[#FF6B2B] font-medium">{ev.reward}</span>
                      {ev.startDate && ev.endDate && (
                        <span className="text-slate-400">· {ev.startDate} ~ {ev.endDate}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Toggle size="sm" checked={ev.active} onChange={(v) => onChange(events.map((e) => e.id === ev.id ? { ...e, active: v } : e))} />
                    <Button variant="icon" size="sm" onClick={() => handleEdit(ev)} iconOnly={<Pencil size={13} />}
                      className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50" />
                    <Button variant="icon" size="sm" onClick={() => handleDelete(ev.id)} iconOnly={<Trash2 size={13} />}
                      className="text-slate-400 hover:text-red-500 hover:bg-red-50" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {adding ? (
        <div className="border border-blue-200 bg-blue-50/30 rounded-[6px] p-4 space-y-3">
          <p className="text-xs font-semibold text-slate-700">{editingId ? '이벤트 수정' : '리뷰 이벤트 추가'}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <InputField label="이벤트명" inputSize="sm" required placeholder="예: 리뷰 작성 이벤트"
              value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <DropdownSelect label="플랫폼" size="sm"
              options={PLATFORMS.map((p) => ({ value: p, label: p }))}
              value={form.platform} onChange={(v) => setForm({ ...form, platform: v })} />
          </div>
          <InputField label="이벤트 설명" inputSize="sm" placeholder="예: 영수증 리뷰 사진 첨부 시"
            value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <InputField label="혜택 (리워드)" inputSize="sm" required placeholder="예: 음료 1잔 무료, 10% 할인 쿠폰"
            value={form.reward} onChange={(e) => setForm({ ...form, reward: e.target.value })} />
          <div className="grid grid-cols-2 gap-3">
            <InputField label="시작일" inputSize="sm" type="date" value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
            <InputField label="종료일" inputSize="sm" type="date" value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
          </div>
          <div className="flex gap-2 pt-1">
            <Button size="sm" variant="primary" onClick={handleSave} disabled={!form.title || !form.reward}>
              {editingId ? '수정 완료' : '추가'}
            </Button>
            <Button size="sm" variant="outline" onClick={() => { setAdding(false); setEditingId(null); setForm(blankForm()); }}>취소</Button>
          </div>
        </div>
      ) : (
        <Button size="sm" variant="outline" leftIcon={<Plus size={13} />} onClick={() => setAdding(true)}>
          리뷰 이벤트 추가
        </Button>
      )}

      {events.length === 0 && !adding && (
        <div className="text-center py-8 bg-slate-50 rounded-[6px] border border-dashed border-slate-200">
          <Gift size={28} className="mx-auto text-slate-300 mb-2" />
          <p className="text-xs text-slate-400">등록된 리뷰 이벤트가 없습니다</p>
          <p className="text-xs text-slate-300 mt-0.5">네이버, 카카오 등 플랫폼 리뷰 이벤트를 메뉴별로 관리하세요</p>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────
export function ClientMenuManagement() {
  const [data, setData] = useState<Menu[]>(MOCK_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedStatus, setSelectedStatus] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMode, setSortMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Menu | null>(null);
  const [formData, setFormData] = useState<Partial<Menu>>({});
  const [activeTab, setActiveTab] = useState<ModalTab>('basic');
  // 단건 삭제
  const [deleteTarget, setDeleteTarget] = useState<Menu | null>(null);
  // 다건 선택 & 삭제
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);

  const itemsPerPage = 10;

  const filtered = useMemo(() => {
    return data
      .filter((item) => {
        const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchCategory = selectedCategory === '전체' || item.category === selectedCategory;
        const matchStatus = selectedStatus === '전체' || item.status === selectedStatus;
        return matchSearch && matchCategory && matchStatus;
      })
      .sort((a, b) => a.sortIndex - b.sortIndex);
  }, [data, searchTerm, selectedCategory, selectedStatus]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedData = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // ── Checkbox helpers ──
  const pageIds = paginatedData.map((i) => i.id);
  const allPageSelected = pageIds.length > 0 && pageIds.every((id) => selectedIds.has(id));
  const somePageSelected = pageIds.some((id) => selectedIds.has(id));

  const toggleSelectAll = () => {
    if (allPageSelected) {
      setSelectedIds((prev) => { const next = new Set(prev); pageIds.forEach((id) => next.delete(id)); return next; });
    } else {
      setSelectedIds((prev) => { const next = new Set(prev); pageIds.forEach((id) => next.add(id)); return next; });
    }
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  // ── Handlers ──
  const handleAdd = () => {
    setEditingItem(null);
    setFormData({ status: 'active', stock: 999, badges: [], limitedQty: 0, timeSales: [], reviewEvents: [], sortIndex: data.length });
    setActiveTab('basic');
    setModalOpen(true);
  };

  const handleEdit = (item: Menu) => {
    setEditingItem(item);
    setFormData({ ...item });
    setActiveTab('basic');
    setModalOpen(true);
  };

  const handleSave = () => {
    if (editingItem) {
      setData(data.map((item) => item.id === editingItem.id ? { ...item, ...formData } as Menu : item));
    } else {
      setData([...data, {
        id: String(Date.now()),
        name: formData.name || '',
        category: formData.category || '한식',
        price: formData.price || 0,
        status: formData.status || 'active',
        stock: formData.stock || 999,
        description: formData.description || '',
        options: formData.options || [],
        badges: formData.badges || [],
        limitedQty: formData.limitedQty || 0,
        sortIndex: formData.sortIndex ?? data.length,
        timeSales: formData.timeSales || [],
        reviewEvents: formData.reviewEvents || [],
      }]);
    }
    setModalOpen(false);
  };

  // 단건 삭제
  const handleDeleteConfirm = (item: Menu) => setDeleteTarget(item);
  const doDelete = () => {
    if (!deleteTarget) return;
    setData(data.filter((item) => item.id !== deleteTarget.id));
    setSelectedIds((prev) => { const next = new Set(prev); next.delete(deleteTarget.id); return next; });
    setDeleteTarget(null);
  };

  // 다건 삭제
  const doBulkDelete = () => {
    setData(data.filter((item) => !selectedIds.has(item.id)));
    setSelectedIds(new Set());
    setBulkDeleteOpen(false);
  };

  const handleToggleStatus = (id: string) => {
    setData(data.map((item) =>
      item.id === id ? { ...item, status: item.status === 'active' ? 'inactive' : 'active' } : item
    ));
  };

  const toggleBadge = (badge: MenuBadge) => {
    const current = formData.badges || [];
    setFormData({ ...formData, badges: current.includes(badge) ? current.filter((b) => b !== badge) : [...current, badge] });
  };

  const moveItem = (id: string, dir: 'up' | 'down') => {
    const sorted = [...data].sort((a, b) => a.sortIndex - b.sortIndex);
    const idx = sorted.findIndex((i) => i.id === id);
    const target = dir === 'up' ? idx - 1 : idx + 1;
    if (target < 0 || target >= sorted.length) return;
    const updated = data.map((item) => {
      if (item.id === sorted[idx].id) return { ...item, sortIndex: sorted[target].sortIndex };
      if (item.id === sorted[target].id) return { ...item, sortIndex: sorted[idx].sortIndex };
      return item;
    });
    setData(updated);
  };

  const hasFilter = searchTerm || selectedCategory !== '전체' || selectedStatus !== '전체';

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">메뉴 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">메뉴 등록 · 관리</span>
      </nav>

      {/* Search card */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <InputField inputSize="md" placeholder="메뉴명 또는 설명으로 검색"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} icon={Search} />
          </div>
          <div className="w-full sm:w-[150px]">
            <DropdownSelect size="md" options={CATEGORIES.map((c) => ({ value: c, label: c }))}
              value={selectedCategory} onChange={(val) => setSelectedCategory(val)} placeholder="카테고리" />
          </div>
          <div className="w-full sm:w-[140px]">
            <DropdownSelect size="md" options={STATUS_FILTER_OPTIONS}
              value={selectedStatus} onChange={(val) => setSelectedStatus(val)} placeholder="상태" />
          </div>
          {hasFilter && (
            <Button variant="outline" size="md" leftIcon={<X size={14} />}
              onClick={() => { setSearchTerm(''); setSelectedCategory('전체'); setSelectedStatus('전체'); }}>
              초기화
            </Button>
          )}
        </div>
      </div>

      {/* Table card */}
      <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
        {/* Table header */}
        <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-slate-800">메뉴 목록</h3>
            <span className="text-xs text-slate-400">총 {filtered.length}개</span>
            {selectedIds.size > 0 && (
              <span className="inline-flex items-center gap-1 text-xs text-[#FF6B2B] font-medium bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                {selectedIds.size}개 선택됨
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {!sortMode ? (
              <Button variant="outline" size="sm" leftIcon={<ArrowUpDown size={13} />} onClick={() => setSortMode(true)}>
                순서 편집
              </Button>
            ) : (
              <Button variant="primary" size="sm" leftIcon={<CheckCircle2 size={13} />} onClick={() => setSortMode(false)}>
                완료
              </Button>
            )}
            <Button variant="primary" size="sm" onClick={handleAdd} leftIcon={<Plus size={13} />}>
              메뉴 추가
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={selectedIds.size === 0}
              onClick={() => setBulkDeleteOpen(true)}
            >
              {selectedIds.size > 0 ? `삭제 (${selectedIds.size})` : '삭제'}
            </Button>
          </div>
        </div>

        {sortMode && (
          <div className="bg-orange-50 border-b border-orange-100 px-4 py-2 flex items-center gap-2">
            <ArrowUpDown size={13} className="text-[#FF6B2B]" />
            <span className="text-xs text-orange-700">순서 편집 모드 — ▲▼ 버튼으로 순서를 변경하고 [완료] 버튼으로 저장하세요.</span>
          </div>
        )}

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {/* 전체선택 체크박스 */}
                <th className="px-3 py-2.5 w-9">
                  <CheckboxField
                    size="sm"
                    checked={allPageSelected}
                    indeterminate={somePageSelected && !allPageSelected}
                    onChange={() => toggleSelectAll()}
                  />
                </th>
                {sortMode && <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-16">순서</th>}
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">메뉴명</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">카테고리</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">표기</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">행사</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">가격</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">재고/한정</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">판매</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={sortMode ? 10 : 9} className="px-3 py-12 text-center text-slate-400">검색 결과가 없습니다</td>
                </tr>
              ) : (
                paginatedData.map((item, idx) => {
                  const hasTimeSale = item.timeSales.some((ts) => ts.active);
                  const activeSale = item.timeSales.find((ts) => ts.active && getTimeSaleStatus(ts) === 'live');
                  const isSelected = selectedIds.has(item.id);
                  return (
                    <tr
                      key={item.id}
                      className={`transition-colors ${
                        isSelected ? 'bg-[#FF6B2B]/5' :
                        item.status === 'soldout' ? 'bg-slate-50/60' :
                        sortMode ? 'hover:bg-orange-50/30' : 'hover:bg-slate-50'
                      }`}
                    >
                      {/* 행 체크박스 */}
                      <td className="px-3 py-2.5">
                        <CheckboxField
                          size="sm"
                          checked={isSelected}
                          onChange={() => toggleSelectOne(item.id)}
                        />
                      </td>
                      {/* 순서 편집 */}
                      {sortMode && (
                        <td className="px-2 py-2.5 text-center">
                          <div className="flex flex-col items-center gap-0.5">
                            <button onClick={() => moveItem(item.id, 'up')} disabled={idx === 0}
                              className="p-0.5 rounded text-slate-300 hover:text-[#FF6B2B] hover:bg-orange-50 disabled:opacity-20 disabled:cursor-not-allowed">
                              <ChevronUp size={14} />
                            </button>
                            <span className="text-[10px] text-slate-400 font-medium">{item.sortIndex + 1}</span>
                            <button onClick={() => moveItem(item.id, 'down')} disabled={idx === paginatedData.length - 1}
                              className="p-0.5 rounded text-slate-300 hover:text-[#FF6B2B] hover:bg-orange-50 disabled:opacity-20 disabled:cursor-not-allowed">
                              <ChevronDown size={14} />
                            </button>
                          </div>
                        </td>
                      )}
                      <td className="px-3 py-2.5">
                        <div className={`font-medium flex items-center gap-1.5 ${item.status === 'soldout' ? 'text-slate-400' : item.isEvent ? 'text-violet-700' : 'text-slate-800'}`}>
                          {item.isEvent && (
                            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-violet-50 text-violet-600 text-[10px] rounded-[3px] font-medium border border-violet-100 shrink-0">
                              <Gift size={9} />이벤트
                            </span>
                          )}
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{item.description}</div>
                      </td>
                      <td className="px-3 py-2.5">
                        <Tag variant="outline" color="gray" size="sm">{item.category}</Tag>
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex flex-wrap gap-1">
                          {item.isEvent
                            ? <Tag color="purple" variant="soft" size="sm" icon={<Gift size={10} />}>이벤트 메뉴</Tag>
                            : item.badges.length === 0
                              ? <span className="text-xs text-slate-300">-</span>
                              : item.badges.map((b) => <MenuBadgeChip key={b} badge={b} />)}
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex flex-col gap-1 items-start">
                          {activeSale && (
                            <Tag color="green" variant="soft" size="sm" icon={<Clock size={9} />}>{activeSale.label}</Tag>
                          )}
                          {!activeSale && hasTimeSale && (
                            <Tag color="gray" variant="soft" size="sm" icon={<Clock size={9} />}>시간판매</Tag>
                          )}
                          {!hasTimeSale && <span className="text-xs text-slate-300">-</span>}
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        {item.isEvent
                          ? <span className="text-xs text-slate-400">무료</span>
                          : (
                            <>
                              <span className="font-medium text-slate-700">₩{item.price.toLocaleString()}</span>
                              {activeSale && activeSale.saleType === 'discount' && activeSale.discountValue && (
                                <div className="text-[10px] text-emerald-600 font-medium">
                                  {activeSale.discountType === 'percent'
                                    ? `→ ₩${Math.round(item.price * (1 - activeSale.discountValue / 100)).toLocaleString()}`
                                    : `→ ₩${(item.price - activeSale.discountValue).toLocaleString()}`}
                                </div>
                              )}
                              {!activeSale && item.baseDiscountType && item.baseDiscountType !== 'none' && item.baseDiscountValue && (() => {
                                const sp = item.baseDiscountType === 'percent'
                                  ? Math.round(item.price * (1 - item.baseDiscountValue / 100))
                                  : item.baseDiscountValue;
                                const rate = Math.round((1 - sp / item.price) * 100);
                                return (
                                  <div className="flex items-center gap-1 mt-0.5">
                                    <span className="text-[10px] font-bold text-red-500 bg-red-50 border border-red-100 px-1 py-0.5 rounded-[2px] leading-none">-{rate}%</span>
                                    <span className="text-[10px] font-medium text-slate-600">₩{sp.toLocaleString()}</span>
                                  </div>
                                );
                              })()}
                            </>
                          )}
                      </td>
                      <td className="px-3 py-2.5">
                        {item.badges.includes('limited') && item.limitedQty ? (
                          <div>
                            <span className={`text-xs font-medium ${item.stock === 0 ? 'text-red-500' : item.stock < 5 ? 'text-amber-500' : 'text-purple-600'}`}>
                              {item.stock} / {item.limitedQty}
                            </span>
                            <div className="w-full bg-slate-100 rounded-full h-1 mt-1">
                              <div className={`h-1 rounded-full ${item.stock === 0 ? 'bg-red-400' : item.stock < 5 ? 'bg-amber-400' : 'bg-purple-400'}`}
                                style={{ width: `${Math.min(100, (item.stock / item.limitedQty) * 100)}%` }} />
                            </div>
                          </div>
                        ) : <span className="text-xs text-slate-400">무제한</span>}
                      </td>
                      {/* 판매 토글 */}
                      <td className="px-3 py-2.5 text-center">
                        <Toggle size="sm" checked={item.status === 'active'} onChange={() => handleToggleStatus(item.id)} />
                      </td>
                      {/* 관리 — 수정 버튼만 */}
                      <td className="px-3 py-2.5 text-center">
                        <Button
                          variant="icon"
                          size="sm"
                          onClick={() => handleEdit(item)}
                          iconOnly={<Pencil size={13} />}
                          className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50"
                        />
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-slate-100">
          {paginatedData.length === 0 ? (
            <div className="px-4 py-12 text-center text-slate-400">검색 결과가 없습니다</div>
          ) : (
            paginatedData.map((item, idx) => {
              const activeSale = item.timeSales.find((ts) => ts.active && getTimeSaleStatus(ts) === 'live');
              const isSelected = selectedIds.has(item.id);
              return (
                <div
                  key={item.id}
                  className={`px-4 py-3.5 transition-colors ${
                    isSelected ? 'bg-[#FF6B2B]/5' :
                    item.status === 'soldout' ? 'bg-slate-50/60' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* 체크박스 */}
                    <div className="mt-1 shrink-0">
                      <CheckboxField
                        size="sm"
                        checked={isSelected}
                        onChange={() => toggleSelectOne(item.id)}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            {sortMode && (
                              <div className="flex items-center gap-0.5">
                                <button onClick={() => moveItem(item.id, 'up')} disabled={idx === 0}
                                  className="p-0.5 rounded text-slate-300 hover:text-[#FF6B2B] disabled:opacity-20">
                                  <ChevronUp size={13} />
                                </button>
                                <button onClick={() => moveItem(item.id, 'down')} disabled={idx === paginatedData.length - 1}
                                  className="p-0.5 rounded text-slate-300 hover:text-[#FF6B2B] disabled:opacity-20">
                                  <ChevronDown size={13} />
                                </button>
                              </div>
                            )}
                            <span className={`font-medium text-sm ${item.status === 'soldout' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                              {item.name}
                            </span>
                            <Tag variant="outline" color="gray" size="sm">{item.category}</Tag>
                          </div>
                          {item.badges.length > 0 && (
                            <div className="flex gap-1 flex-wrap mb-1.5">
                              {item.badges.map((b) => <MenuBadgeChip key={b} badge={b} />)}
                            </div>
                          )}
                          {activeSale && (
                            <div className="mb-1">
                              <Tag color="green" variant="soft" size="sm" icon={<Clock size={9} />}>{activeSale.label} 진행중</Tag>
                            </div>
                          )}
                          <div className="text-xs text-slate-700 font-medium">₩{item.price.toLocaleString()}</div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          {item.status !== 'soldout' && (
                            <Toggle size="sm" checked={item.status === 'active'} onChange={() => handleToggleStatus(item.id)} />
                          )}
                          <div className="flex items-center gap-0.5">
                            <Button variant="icon" size="sm" onClick={() => handleEdit(item)} iconOnly={<Pencil size={13} />}
                              className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {totalPages > 1 && (
          <div className="px-4 md:px-5 py-4 border-t border-slate-200">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        )}
      </div>

      {/* ── Add/Edit Modal ── */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        size="xl"
        title={editingItem ? `메뉴 수정 — ${editingItem.name}` : '메뉴 추가'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setModalOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handleSave}>{editingItem ? '수정' : '추가'}</ModalBtn>
          </>
        }
      >
        <div className="flex border-b border-slate-200 -mx-6 px-6 mb-5 overflow-x-auto">
          <ModalTabBtn active={activeTab === 'basic'} onClick={() => setActiveTab('basic')} icon={TagIcon} label="기본 정보" />
          <ModalTabBtn active={activeTab === 'timesale'} onClick={() => setActiveTab('timesale')} icon={Clock} label="시간 한정 판매"
            count={(formData.timeSales ?? []).length} />
        </div>

        {activeTab === 'basic' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="메뉴명" required value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="메뉴명을 입력하세요" />
              <DropdownSelect label="카테고리" required
                options={CATEGORIES.filter((c) => c !== '전체').map((c) => ({ value: c, label: c }))}
                value={formData.category || '한식'} onChange={(val) => setFormData({ ...formData, category: val })} />
            </div>
            <InputField label="설명" value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="메뉴 설명을 입력하세요" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="가격" type="number" required value={formData.price || ''}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })} placeholder="0" suffix="원" />
              <DropdownSelect label="판매 상태" required
                options={[{ value: 'active', label: '판매 중' }, { value: 'inactive', label: '비활성' }, { value: 'soldout', label: '품절' }]}
                value={formData.status || 'active'} onChange={(val) => setFormData({ ...formData, status: val as MenuStatus })} />
            </div>

            {/* ── 기본 할인 설정 ── */}
            <div className="border border-slate-200 rounded-[4px] p-3.5 space-y-3 bg-slate-50/50">
              <div className="flex items-center gap-1.5">
                <Percent size={12} className="text-red-400" />
                <p className="text-xs font-semibold text-slate-600">기본 할인 설정</p>
                <span className="text-[10px] text-slate-400">시간 한정 외 항시 적용 할인</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <DropdownSelect
                  label="할인 유형"
                  inputSize="md"
                  value={formData.baseDiscountType ?? 'none'}
                  onChange={(v) => setFormData({ ...formData, baseDiscountType: v as BaseDiscountType, baseDiscountValue: undefined })}
                  options={[
                    { value: 'none',    label: '할인 없음' },
                    { value: 'percent', label: '할인율 (%)' },
                    { value: 'amount',  label: '할인가 (원)' },
                  ]}
                />
                {(formData.baseDiscountType === 'percent' || formData.baseDiscountType === 'amount') && (
                  <InputField
                    label={formData.baseDiscountType === 'percent' ? '할인율 *' : '할인가 *'}
                    inputSize="md"
                    type="number"
                    value={formData.baseDiscountValue ?? ''}
                    suffix={formData.baseDiscountType === 'percent' ? '%' : '원'}
                    placeholder={formData.baseDiscountType === 'percent' ? '예: 20' : '판매 최종가'}
                    onChange={(e) => setFormData({ ...formData, baseDiscountValue: Number(e.target.value) || undefined })}
                  />
                )}
              </div>
              {/* 미리보기 */}
              {(() => {
                const price = formData.price || 0;
                const type = formData.baseDiscountType;
                const val = formData.baseDiscountValue;
                if (!type || type === 'none' || !val || !price) return null;
                const salePrice = type === 'percent' ? Math.round(price * (1 - val / 100)) : val;
                const rate = Math.round((1 - salePrice / price) * 100);
                if (salePrice >= price || salePrice <= 0) {
                  return <p className="text-xs text-red-500">할인가는 정가(₩{price.toLocaleString()})보다 낮아야 합니다.</p>;
                }
                return (
                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="text-xs text-slate-400">적용가 미리보기</span>
                    <span className="text-[11px] font-bold text-red-500 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded-[3px]">-{rate}%</span>
                    <span className="text-xs font-semibold text-slate-800">₩{salePrice.toLocaleString()}</span>
                    <span className="text-xs text-slate-400 line-through">₩{price.toLocaleString()}</span>
                  </div>
                );
              })()}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-2">표기 항목</label>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(BADGE_CONFIG) as [MenuBadge, typeof BADGE_CONFIG[MenuBadge]][]).map(([key, cfg]) => {
                  const Icon = cfg.icon;
                  const active = (formData.badges || []).includes(key);
                  return (
                    <button key={key} type="button" onClick={() => toggleBadge(key)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs border transition-all ${
                        active ? 'border-[#FF6B2B] bg-orange-50 text-[#FF6B2B]' : 'border-slate-200 text-slate-500 hover:border-slate-300'
                      }`}>
                      <Icon size={13} />{cfg.label}{active && <span className="text-xs">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {(formData.badges || []).includes('limited') && (
              <div className="bg-purple-50 border border-purple-100 rounded-[6px] p-3.5">
                <label className="block text-xs font-medium text-purple-700 mb-2">한정수량 설정</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <InputField label="일일 한정 수량" type="number" inputSize="sm" value={formData.limitedQty || ''}
                    onChange={(e) => setFormData({ ...formData, limitedQty: Number(e.target.value) })}
                    placeholder="예: 30" suffix="개" helperText="0이면 무제한" />
                  <InputField label="현재 남은 재고" type="number" inputSize="sm" value={formData.stock || ''}
                    onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })} placeholder="0" suffix="개" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">메뉴 이미지</label>
              <div className="border-2 border-dashed border-slate-200 rounded-[6px] p-5 text-center hover:border-[#FF6B2B] hover:bg-orange-50/30 transition-colors cursor-pointer">
                <ImagePlus size={28} className="mx-auto text-slate-300 mb-1.5" />
                <p className="text-sm text-slate-500">이미지를 업로드하려면 클릭하세요</p>
                <p className="text-xs text-slate-400 mt-0.5">JPG, PNG (최대 2MB)</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'timesale' && (
          <div>
            <div className="mb-4 bg-amber-50 border border-amber-100 rounded-[6px] px-3.5 py-3 flex items-start gap-2.5">
              <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-700 leading-relaxed">
                시간이 지난 행사는 <strong>자동으로 마감</strong> 상태로 표기됩니다. 메뉴는 사라지지 않으며 행사 표기만 변경됩니다.
                할인 판매·세트 메뉴 모두 가능하며 여러 개 등록할 수 있습니다.
              </p>
            </div>
            <TimeSaleEditor
              sales={formData.timeSales ?? []}
              onChange={(v) => setFormData({ ...formData, timeSales: v })}
            />
          </div>
        )}


      </Modal>

      {/* ── 단건 삭제 확인 모달 ── */}
      <Modal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        size="sm"
        title="메뉴 삭제"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDeleteTarget(null)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={doDelete}>삭제</ModalBtn>
          </>
        }
      >
        {deleteTarget && (
          <div className="flex items-start gap-2.5">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-slate-700">
                <strong>"{deleteTarget.name}"</strong> 메뉴를 삭제하시겠습니까?
              </p>
              <p className="text-xs text-slate-500 mt-1">이 작업은 되돌릴 수 없습니다.</p>
            </div>
          </div>
        )}
      </Modal>

      {/* ── 다건 삭제 확인 모달 ── */}
      <Modal
        open={bulkDeleteOpen}
        onClose={() => setBulkDeleteOpen(false)}
        size="sm"
        title="선택 메뉴 삭제"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setBulkDeleteOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={doBulkDelete}>삭제</ModalBtn>
          </>
        }
      >
        <div className="flex items-start gap-2.5">
          <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-700">
              선택한 <strong>{selectedIds.size}개</strong> 메뉴를 모두 삭제하시겠습니까?
            </p>
            <p className="text-xs text-slate-500 mt-1">이 작업은 되돌릴 수 없습니다.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}