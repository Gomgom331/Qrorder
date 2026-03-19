import { useState } from 'react';
import {
  Flame, Star, Zap, Ban, Clock, Gift,
  Eye, Search, X, ChevronDown, ChevronRight, Receipt,
} from 'lucide-react';
import { InputField } from '../../components/ui/InputField';
import { DropdownSelect } from '../../components/ui/DropdownSelect';
import { Button } from '../../components/ui/Button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

// ─── Types (mirrors ClientMenuManagement) ─────────────────────────
type MenuBadge = 'popular' | 'recommended' | 'limited';
type MenuStatus = 'active' | 'inactive' | 'soldout';
type SaleType = 'discount' | 'set';
type DiscountType = 'percent' | 'amount';
type BaseDiscountType = 'none' | 'percent' | 'amount';

interface TimeSale {
  id: string; label: string; saleType: SaleType;
  discountType?: DiscountType; discountValue?: number;
  setDescription?: string; setPrice?: number;
  startTime: string; endTime: string; days: string[]; active: boolean;
}
interface ReviewEvent {
  id: string; title: string; description: string; reward: string;
  platform: string; startDate: string; endDate: string; active: boolean;
}
interface MenuItem {
  id: string; name: string; category: string; price: number;
  status: MenuStatus; stock: number; description: string;
  imageUrl?: string; badges: MenuBadge[]; limitedQty?: number;
  remaining?: number; sortIndex: number;
  timeSales: TimeSale[]; reviewEvents: ReviewEvent[];
  isEvent?: boolean;
  baseDiscountType?: BaseDiscountType;
  baseDiscountValue?: number;
}
interface CategoryGroup { name: string; items: MenuItem[] }

// ─── Badge / status helpers ────────────────────────────────────────
const BADGE_CONFIG: Record<MenuBadge, { label: string; icon: React.ElementType; cls: string }> = {
  popular:     { label: '인기',     icon: Flame, cls: 'bg-red-50 text-red-500 border border-red-100' },
  recommended: { label: '추천',     icon: Star,  cls: 'bg-amber-50 text-amber-500 border border-amber-100' },
  limited:     { label: '한정수량', icon: Zap,   cls: 'bg-purple-50 text-purple-500 border border-purple-100' },
};

function getTimeSaleStatus(ts: TimeSale): 'live' | 'closed' | 'upcoming' {
  const now = new Date();
  const todayLabel = ['일','월','화','수','목','금','토'][now.getDay()];
  if (!ts.days.includes(todayLabel)) return 'upcoming';
  const [sh, sm] = ts.startTime.split(':').map(Number);
  const [eh, em] = ts.endTime.split(':').map(Number);
  const nowMins = now.getHours() * 60 + now.getMinutes();
  if (nowMins < sh * 60 + sm) return 'upcoming';
  if (nowMins >= eh * 60 + em) return 'closed';
  return 'live';
}

// ─── Mock data ─────────────────────────────────────────────────────
const MOCK_ITEMS: MenuItem[] = [
  { id:'event-1', name:'영수증 인증 이벤트', category:'이벤트', price:0, status:'active', stock:999,
    description:'SNS 영수증 인증 시 다음 방문 음료 1잔 무료',
    badges:[], sortIndex:-1, timeSales:[], reviewEvents:[], isEvent:true },
  { id:'1', name:'불고기 정식', category:'한식', price:12000, status:'active', stock:999,
    description:'부드럽고 달콤한 불고기와 제철 반찬으로 구성된 한 상 정식',
    imageUrl:'https://images.unsplash.com/photo-1718777791262-c66d11baaa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
    badges:['popular','recommended'], sortIndex:0,
    timeSales:[{ id:'ts1', label:'런치 특가', saleType:'discount', discountType:'percent', discountValue:20,
      startTime:'11:00', endTime:'14:00', days:['월','화','수','목','금'], active:true }],
    reviewEvents:[] },
  { id:'2', name:'김치찌개', category:'한식', price:8000, status:'active', stock:999,
    description:'묵은지로 깊은 맛을 낸 얼큰한 김치찌개',
    imageUrl:'https://images.unsplash.com/photo-1760228865341-675704c22a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
    badges:['popular'], sortIndex:1, timeSales:[], reviewEvents:[],
    baseDiscountType:'percent', baseDiscountValue:15 },
  { id:'3', name:'된장찌개', category:'한식', price:8000, status:'active', stock:999,
    description:'구수하고 진한 된장찌개, 국산 콩으로 만든 재래 된장 사용',
    imageUrl:'https://images.unsplash.com/photo-1747228469031-c5fc60b9d9f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
    badges:[], sortIndex:2, timeSales:[], reviewEvents:[] },
  { id:'4', name:'비빔밥', category:'한식', price:9000, status:'active', stock:18,
    description:'싱싱한 나물과 계란 후라이, 고소한 참기름 비빔밥',
    imageUrl:'https://images.unsplash.com/photo-1718777791262-c66d11baaa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
    badges:['recommended','limited'], limitedQty:30, remaining:18, sortIndex:3,
    timeSales:[{ id:'ts2', label:'디너 세트', saleType:'set', setDescription:'비빔밥 + 국 + 후식',
      setPrice:12000, startTime:'17:00', endTime:'21:00', days:['금','토','일'], active:true }],
    reviewEvents:[] },
  { id:'5', name:'제육볶음', category:'한식', price:11000, status:'active', stock:9,
    description:'매콤달콤한 양념에 볶은 두툼한 돼지고기',
    imageUrl:'https://images.unsplash.com/photo-1578829855016-5f9ed21219b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
    badges:['limited'], limitedQty:15, remaining:9, sortIndex:4, timeSales:[], reviewEvents:[],
    baseDiscountType:'amount', baseDiscountValue:9500 },
  { id:'6', name:'돈까스', category:'일식', price:10000, status:'active', stock:30,
    description:'바삭한 빵가루로 튀긴 황금빛 돈까스',
    imageUrl:'https://images.unsplash.com/photo-1734775373504-ff24ea8419b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
    badges:['popular'], sortIndex:5, timeSales:[], reviewEvents:[] },
  { id:'7', name:'우동', category:'일식', price:7000, status:'soldout', stock:0,
    description:'따뜻한 가쓰오 육수에 쫄깃한 우동 면',
    imageUrl:'https://images.unsplash.com/photo-1761984336917-615bc6f7d4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
    badges:[], sortIndex:6, timeSales:[], reviewEvents:[] },
  { id:'8', name:'카레라이스', category:'일식', price:8500, status:'active', stock:999,
    description:'야채와 고기를 듬뿍 넣은 진한 카레',
    imageUrl:'https://images.unsplash.com/photo-1706145779556-f2c642db2699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
    badges:['recommended'], sortIndex:7, timeSales:[], reviewEvents:[],
    baseDiscountType:'percent', baseDiscountValue:10 },
  { id:'9', name:'콜라', category:'음료', price:2500, status:'active', stock:999,
    description:'시원한 코카콜라 (L)',
    imageUrl:'https://images.unsplash.com/photo-1745053787007-1c09226aeff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
    badges:[], sortIndex:8, timeSales:[], reviewEvents:[] },
  { id:'10', name:'사이다', category:'음료', price:2500, status:'active', stock:999,
    description:'상큼한 칠성사이다 (L)',
    imageUrl:'https://images.unsplash.com/photo-1745053787007-1c09226aeff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80',
    badges:[], sortIndex:9, timeSales:[], reviewEvents:[] },
];

const CAT_ORDER = ['이벤트', '한식', '일식', '음료'];
const CATEGORIES_FILTER = ['전체', '이벤트', '한식', '일식', '음료'];

// ─── Build groups ─────────────────────────────────────────────────
function buildGroups(items: MenuItem[], catOrder: string[]): CategoryGroup[] {
  const map = new Map<string, MenuItem[]>();
  items.forEach((item) => {
    const arr = map.get(item.category) ?? [];
    map.set(item.category, [...arr, item]);
  });
  const result: CategoryGroup[] = [];
  catOrder.forEach((cat) => {
    if (map.has(cat)) {
      result.push({ name: cat, items: (map.get(cat) ?? []).sort((a, b) => a.sortIndex - b.sortIndex) });
    }
  });
  // leftover categories
  map.forEach((items, cat) => {
    if (!catOrder.includes(cat)) result.push({ name: cat, items: items.sort((a, b) => a.sortIndex - b.sortIndex) });
  });
  return result;
}

// ─── Sub: Event pills ─────────────────────────────────────────────
function EventPills({ item }: { item: MenuItem }) {
  const activeSale = item.timeSales.find((ts) => ts.active);
  if (!activeSale) return null;

  return (
    <div className="flex flex-wrap gap-1 mt-1">
      {activeSale && (() => {
        const status = getTimeSaleStatus(activeSale);
        const statusCls = status === 'live'
          ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
          : status === 'closed'
          ? 'bg-slate-100 text-slate-500'
          : 'bg-blue-50 text-blue-500 border border-blue-100';
        const statusLabel = status === 'live' ? '진행중' : status === 'closed' ? '마감' : '예정';
        return (
          <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[3px] text-[10px] font-medium ${statusCls}`}>
            <Clock size={9} />
            {activeSale.label} {statusLabel}
            {status === 'live' && activeSale.saleType === 'discount' && activeSale.discountValue && (
              <span className="ml-0.5">
                {activeSale.discountType === 'percent'
                  ? `(${activeSale.discountValue}% ↓)`
                  : `(₩${activeSale.discountValue.toLocaleString()} ↓)`}
              </span>
            )}
            {status === 'live' && activeSale.saleType === 'set' && activeSale.setPrice && (
              <span className="ml-0.5">→ ₩{activeSale.setPrice.toLocaleString()}</span>
            )}
          </span>
        );
      })()}
    </div>
  );
}

// ─── Sub: List Row ────────────────────────────────────────────────
function MenuRow({ item }: { item: MenuItem }) {
  const isSoldOut = item.status === 'soldout';
  const activeSale = item.timeSales.find((ts) => ts.active && getTimeSaleStatus(ts) === 'live');

  // 타임세일 우선, 없으면 기본 할인 적용
  const discountedPrice = activeSale
    ? activeSale.saleType === 'set'
      ? activeSale.setPrice
      : activeSale.discountType === 'percent'
        ? Math.round(item.price * (1 - (activeSale.discountValue ?? 0) / 100))
        : item.price - (activeSale.discountValue ?? 0)
    : item.baseDiscountType && item.baseDiscountType !== 'none' && item.baseDiscountValue
      ? item.baseDiscountType === 'percent'
        ? Math.round(item.price * (1 - item.baseDiscountValue / 100))
        : item.baseDiscountValue
      : null;

  const discountRate = discountedPrice && discountedPrice < item.price
    ? Math.round((1 - discountedPrice / item.price) * 100)
    : null;

  // 기본 할인 여부 (타임세일 아닌 경우)
  const isBaseDiscount = !activeSale && discountedPrice !== null && discountedPrice < item.price;

  if (item.isEvent) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 last:border-0 bg-violet-50/50 hover:bg-violet-50 transition-colors">
        <div className="w-12 h-12 rounded-[6px] bg-violet-100 flex items-center justify-center shrink-0">
          <Receipt size={20} className="text-violet-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-violet-100 text-violet-600 text-[10px] rounded-[3px] font-medium border border-violet-200">
              <Gift size={9} />이벤트
            </span>
            <span className="text-sm font-medium text-violet-800">{item.name}</span>
          </div>
          <p className="text-xs text-violet-400 truncate mt-0.5 leading-snug">{item.description}</p>
        </div>
        <div className="shrink-0 text-right">
          <span className="text-sm font-semibold text-violet-400">무료</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 px-4 py-3 border-b border-slate-100 last:border-0 transition-colors group
      ${isSoldOut ? 'opacity-60 bg-slate-50/50' : 'hover:bg-slate-50'}`}>

      {/* Thumbnail */}
      <div className={`w-12 h-12 rounded-[6px] overflow-hidden shrink-0 bg-slate-100 ${isSoldOut ? 'grayscale' : ''}`}>
        {item.imageUrl
          ? <ImageWithFallback src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
          : <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-[10px]">No img</div>
        }
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`text-sm font-medium ${isSoldOut ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
            {item.name}
          </span>
          {isSoldOut && (
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[3px] text-[10px] font-medium bg-slate-100 text-slate-500">
              <Ban size={9} />품절
            </span>
          )}
          {item.badges.map((b) => {
            const cfg = BADGE_CONFIG[b];
            const Icon = cfg.icon;
            return (
              <span key={b} className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[3px] text-[10px] font-medium ${cfg.cls}`}>
                <Icon size={9} />{cfg.label}
              </span>
            );
          })}
        </div>
        <p className="text-xs text-slate-400 truncate mt-0.5 leading-snug">{item.description}</p>
        {/* Limited stock bar */}
        {item.badges.includes('limited') && item.remaining != null && item.limitedQty && !isSoldOut && (
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-14 h-1 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-400 rounded-full"
                style={{ width: `${Math.min(100, (item.remaining / item.limitedQty) * 100)}%` }} />
            </div>
            <span className="text-[10px] text-purple-500">잔여 {item.remaining}/{item.limitedQty}</span>
          </div>
        )}
        {/* Event pills */}
        <EventPills item={item} />
      </div>

      {/* Price */}
      <div className="shrink-0 text-right">
        {discountedPrice && discountedPrice < item.price ? (
          <div>
            <div className="flex items-center justify-end gap-1 mb-0.5">
              <span className="text-[10px] font-bold text-red-500 bg-red-50 border border-red-100 px-1 py-0.5 rounded-[2px] leading-none">
                -{discountRate}%
              </span>
              {isBaseDiscount && (
                <span className="text-[10px] text-slate-400 font-medium">상시할인</span>
              )}
            </div>
            <div className="text-[11px] text-slate-400 line-through">₩{item.price.toLocaleString()}</div>
            <div className={`text-sm font-semibold ${isBaseDiscount ? 'text-[#FF6B2B]' : 'text-emerald-600'}`}>
              ₩{discountedPrice.toLocaleString()}
            </div>
          </div>
        ) : (
          <span className={`text-sm font-semibold ${isSoldOut ? 'text-slate-400' : 'text-slate-800'}`}>
            ₩{item.price.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Sub: Category Section ────────────────────────────────────────
function CategorySection({ group }: { group: CategoryGroup }) {
  const [collapsed, setCollapsed] = useState(false);
  const activeCount = group.items.filter((i) => i.status === 'active').length;
  const soldoutCount = group.items.filter((i) => i.status === 'soldout').length;

  return (
    <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-between px-4 py-2.5 border-b border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          {collapsed ? <ChevronRight size={14} className="text-slate-400" /> : <ChevronDown size={14} className="text-slate-400" />}
          <h3 className="text-sm font-semibold text-slate-700">{group.name}</h3>
          <span className="text-xs text-slate-400">{group.items.length}개</span>
          {activeCount > 0 && (
            <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-1.5 py-0.5 rounded-full">
              판매중 {activeCount}
            </span>
          )}
          {soldoutCount > 0 && (
            <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full">
              품절 {soldoutCount}
            </span>
          )}
        </div>
      </button>
      {!collapsed && (
        <div>
          {group.items.map((item) => <MenuRow key={item.id} item={item} />)}
        </div>
      )}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────
export function ClientMenuBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filtered = MOCK_ITEMS.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCategory === '전체' || item.category === selectedCategory;
    return matchSearch && matchCat;
  });

  const groups = buildGroups(filtered, CAT_ORDER);

  const menuItems = MOCK_ITEMS.filter((i) => !i.isEvent);
  const totalActive = menuItems.filter((i) => i.status === 'active').length;
  const totalSoldout = menuItems.filter((i) => i.status === 'soldout').length;
  const totalTimeSale = menuItems.filter((i) => i.timeSales.some((ts) => ts.active)).length;

  const hasFilter = searchTerm || selectedCategory !== '전체';

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">메뉴 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">메뉴판 보기</span>
      </nav>

      {/* KPI */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: '전체 메뉴', value: menuItems.length, dot: 'bg-slate-300' },
          { label: '판매 중', value: totalActive, dot: 'bg-emerald-400' },
          { label: '품절', value: totalSoldout, dot: 'bg-red-300' },
          { label: '시간한정 판매', value: totalTimeSale, dot: 'bg-amber-400' },
        ].map(({ label, value, dot }) => (
          <div key={label} className="bg-white border border-slate-200 rounded-[6px] px-4 py-3 flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full shrink-0 ${dot}`} />
            <div>
              <div className="text-[11px] text-slate-400">{label}</div>
              <div className="text-lg font-bold text-slate-800">{value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white border border-slate-200 rounded-[6px] p-3.5">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <InputField inputSize="md" placeholder="메뉴명 또는 설명으로 검색"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} icon={Search} />
          </div>
          <div className="w-full sm:w-[150px]">
            <DropdownSelect size="md" options={CATEGORIES_FILTER.map((c) => ({ value: c, label: c }))}
              value={selectedCategory} onChange={setSelectedCategory} placeholder="카테고리" />
          </div>
          {hasFilter && (
            <Button variant="outline" size="md" leftIcon={<X size={14} />}
              onClick={() => { setSearchTerm(''); setSelectedCategory('전체'); }}>
              초기화
            </Button>
          )}
        </div>
      </div>

      {/* Category groups */}
      {groups.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-[6px] py-16 text-center">
          <Eye size={36} className="mx-auto text-slate-200 mb-3" />
          <p className="text-sm text-slate-400">검색 결과가 없습니다</p>
        </div>
      ) : (
        <div className="space-y-4">
          {groups.map((group) => (
            <CategorySection key={group.name} group={group} />
          ))}
        </div>
      )}

      <p className="text-center text-xs text-slate-400 pb-2">
        메뉴판 순서 변경은 <strong>메뉴 등록 · 관리</strong>의 [순서 편집] 또는 <strong>메뉴판 보기 · 순서</strong> 페이지에서 설정하세요
      </p>
    </div>
  );
}