import { useState } from 'react';
import { Plus, Pencil, Trash2, Star, Gift, Receipt, AlertCircle, X, ToggleLeft, Calendar, ChevronDown } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { InputField } from '../../components/ui/InputField';
import { DropdownSelect } from '../../components/ui/DropdownSelect';
import { Modal, ModalBtn } from '../../components/ui/Modal';
import { Tag } from '../../components/ui/Tag';
import { Toggle } from '../../components/ui/Toggle';
import { CheckboxField } from '../../components/ui/CheckboxField';

// ─── Types ───────────────────────────────────────────────────────
type EventType = 'review' | 'receipt';
type RewardType = 'discount' | 'coupon' | 'point' | 'freeitem';
type EventStatus = 'active' | 'inactive' | 'scheduled' | 'ended';

interface ReviewEvent {
  id: string;
  type: EventType;
  title: string;
  description: string;
  rewardType: RewardType;
  rewardValue: string;
  startDate: string;
  endDate: string;
  status: EventStatus;
  participantCount: number;
  condition: string;
}

// ─── Mock data ───────────────────────────────────────────────────
const MOCK_EVENTS: ReviewEvent[] = [
  {
    id: '1',
    type: 'review',
    title: '리뷰 작성 시 음료 무료 쿠폰',
    description: '주문 후 리뷰를 작성하시면 다음 방문 시 음료 1잔을 무료로 드립니다.',
    rewardType: 'coupon',
    rewardValue: '음료 1잔 무료',
    startDate: '2026-03-01',
    endDate: '2026-03-31',
    status: 'active',
    participantCount: 128,
    condition: '별점 4점 이상 + 텍스트 20자 이상',
  },
  {
    id: '2',
    type: 'receipt',
    title: '영수증 인증 이벤트 – 5% 할인',
    description: 'SNS에 영수증을 인증하고 다음 주문 시 5% 할인 혜택을 받으세요.',
    rewardType: 'discount',
    rewardValue: '5%',
    startDate: '2026-03-10',
    endDate: '2026-04-10',
    status: 'active',
    participantCount: 54,
    condition: 'SNS 업로드 후 직원 확인',
  },
  {
    id: '3',
    type: 'review',
    title: '포토 리뷰 포인트 적립',
    description: '사진이 포함된 리뷰 작성 시 500포인트를 적립해드립니다.',
    rewardType: 'point',
    rewardValue: '500P',
    startDate: '2026-04-01',
    endDate: '2026-04-30',
    status: 'scheduled',
    participantCount: 0,
    condition: '사진 1장 이상 포함',
  },
  {
    id: '4',
    type: 'receipt',
    title: '영수증 재방문 쿠폰',
    description: '영수증 지참 재방문 고객께 사이드 메뉴를 서비스로 드립니다.',
    rewardType: 'freeitem',
    rewardValue: '사이드 메뉴 1개',
    startDate: '2026-01-01',
    endDate: '2026-02-28',
    status: 'ended',
    participantCount: 312,
    condition: '당일 영수증 지참',
  },
];

const EVENT_TYPE_OPTIONS = [
  { value: 'review', label: '리뷰 이벤트' },
  { value: 'receipt', label: '영수증 이벤트' },
];

const REWARD_TYPE_OPTIONS = [
  { value: 'discount', label: '할인 (%)' },
  { value: 'coupon', label: '쿠폰 지급' },
  { value: 'point', label: '포인트 적립' },
  { value: 'freeitem', label: '무료 메뉴' },
];

const STATUS_OPTIONS = [
  { value: '전체', label: '전체 상태' },
  { value: 'active', label: '진행 중' },
  { value: 'scheduled', label: '예정' },
  { value: 'inactive', label: '비활성' },
  { value: 'ended', label: '종료' },
];

// ─── Helpers ─────────────────────────────────────────────────────
function statusTag(status: EventStatus) {
  if (status === 'active')    return <Tag variant="success" size="sm">진행 중</Tag>;
  if (status === 'scheduled') return <Tag variant="info" size="sm">예정</Tag>;
  if (status === 'inactive')  return <Tag variant="warning" size="sm">비활성</Tag>;
  return <Tag variant="default" size="sm">종료</Tag>;
}

function typeTag(type: EventType) {
  if (type === 'review')  return <Tag color="purple" variant="soft" size="sm" icon={<Star size={10} />}>리뷰</Tag>;
  return <Tag color="blue" variant="soft" size="sm" icon={<Receipt size={10} />}>영수증</Tag>;
}

function rewardLabel(type: RewardType) {
  if (type === 'discount')  return { icon: <span className="text-[10px]">%</span>,   color: 'text-emerald-600 bg-emerald-50' };
  if (type === 'coupon')    return { icon: <Gift size={10} />,                        color: 'text-violet-600 bg-violet-50' };
  if (type === 'point')     return { icon: <span className="text-[10px]">P</span>,   color: 'text-blue-600 bg-blue-50' };
  return                           { icon: <Star size={10} />,                        color: 'text-amber-600 bg-amber-50' };
}

// ─── Main ────────────────────────────────────────────────────────
export function ClientReviewEvent() {
  const [events, setEvents] = useState<ReviewEvent[]>(MOCK_EVENTS);
  const [filterStatus, setFilterStatus] = useState('전체');
  const [filterType, setFilterType] = useState('전체');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<ReviewEvent | null>(null);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<ReviewEvent | null>(null);
  const [formData, setFormData] = useState<Partial<ReviewEvent>>({});

  // Filter
  const filtered = events.filter((e) => {
    const matchStatus = filterStatus === '전체' || e.status === filterStatus;
    const matchType = filterType === '전체' || e.type === filterType;
    return matchStatus && matchType;
  });

  // Checkbox helpers
  const allSelected = filtered.length > 0 && filtered.every((e) => selectedIds.has(e.id));
  const someSelected = filtered.some((e) => selectedIds.has(e.id));
  const toggleAll = () => {
    if (allSelected) {
      setSelectedIds((prev) => { const next = new Set(prev); filtered.forEach((e) => next.delete(e.id)); return next; });
    } else {
      setSelectedIds((prev) => { const next = new Set(prev); filtered.forEach((e) => next.add(e.id)); return next; });
    }
  };
  const toggleOne = (id: string) => {
    setSelectedIds((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  // Handlers
  const handleAdd = () => {
    setEditingEvent(null);
    setFormData({ type: 'review', rewardType: 'coupon', status: 'active', startDate: '', endDate: '' });
    setModalOpen(true);
  };
  const handleEdit = (ev: ReviewEvent) => {
    setEditingEvent(ev);
    setFormData(ev);
    setModalOpen(true);
  };
  const handleSave = () => {
    if (editingEvent) {
      setEvents(events.map((e) => e.id === editingEvent.id ? { ...e, ...formData } as ReviewEvent : e));
    } else {
      setEvents([...events, {
        id: String(Date.now()),
        type: formData.type || 'review',
        title: formData.title || '',
        description: formData.description || '',
        rewardType: formData.rewardType || 'coupon',
        rewardValue: formData.rewardValue || '',
        startDate: formData.startDate || '',
        endDate: formData.endDate || '',
        status: formData.status || 'active',
        participantCount: 0,
        condition: formData.condition || '',
      }]);
    }
    setModalOpen(false);
  };
  const handleToggleStatus = (id: string) => {
    setEvents(events.map((e) => e.id === id
      ? { ...e, status: e.status === 'active' ? 'inactive' : 'active' }
      : e
    ));
  };
  const doDelete = () => {
    if (!deleteTarget) return;
    setEvents(events.filter((e) => e.id !== deleteTarget.id));
    setSelectedIds((prev) => { const next = new Set(prev); next.delete(deleteTarget.id); return next; });
    setDeleteTarget(null);
  };
  const doBulkDelete = () => {
    setEvents(events.filter((e) => !selectedIds.has(e.id)));
    setSelectedIds(new Set());
    setBulkDeleteOpen(false);
  };

  const activeCount = events.filter((e) => e.status === 'active').length;
  const totalParticipants = events.reduce((s, e) => s + e.participantCount, 0);

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">이벤트 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">리뷰 · 영수증 이벤트</span>
      </nav>

      {/* KPI Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-emerald-50 rounded-[4px]"><ToggleLeft size={14} className="text-emerald-500" /></div>
            <span className="text-xs text-slate-500">진행 중 이벤트</span>
          </div>
          <div className="text-xl font-bold text-slate-800">{activeCount}개</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-purple-50 rounded-[4px]"><Star size={14} className="text-purple-500" /></div>
            <span className="text-xs text-slate-500">리뷰 이벤트</span>
          </div>
          <div className="text-xl font-bold text-slate-800">{events.filter((e) => e.type === 'review').length}개</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-50 rounded-[4px]"><Receipt size={14} className="text-blue-500" /></div>
            <span className="text-xs text-slate-500">영수증 이벤트</span>
          </div>
          <div className="text-xl font-bold text-slate-800">{events.filter((e) => e.type === 'receipt').length}개</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-orange-50 rounded-[4px]"><Gift size={14} className="text-[#FF6B2B]" /></div>
            <span className="text-xs text-slate-500">총 참여자</span>
          </div>
          <div className="text-xl font-bold text-slate-800">{totalParticipants.toLocaleString()}명</div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="w-full sm:w-[160px]">
            <DropdownSelect
              size="md"
              options={[{ value: '전체', label: '전체 유형' }, ...EVENT_TYPE_OPTIONS]}
              value={filterType}
              onChange={setFilterType}
              placeholder="유형"
            />
          </div>
          <div className="w-full sm:w-[160px]">
            <DropdownSelect
              size="md"
              options={STATUS_OPTIONS}
              value={filterStatus}
              onChange={setFilterStatus}
              placeholder="상태"
            />
          </div>
          {(filterType !== '전체' || filterStatus !== '전체') && (
            <Button variant="outline" size="md" leftIcon={<X size={14} />}
              onClick={() => { setFilterType('전체'); setFilterStatus('전체'); }}>
              초기화
            </Button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
        {/* Table header */}
        <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-slate-800">이벤트 목록</h3>
            <span className="text-xs text-slate-400">총 {filtered.length}개</span>
            {selectedIds.size > 0 && (
              <span className="inline-flex items-center gap-1 text-xs text-[#FF6B2B] font-medium bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                {selectedIds.size}개 선택됨
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm" onClick={handleAdd} leftIcon={<Plus size={13} />}>이벤트 추가</Button>
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

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-3 py-2.5 w-9">
                  <CheckboxField size="sm" checked={allSelected} indeterminate={someSelected && !allSelected} onChange={toggleAll} />
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">유형</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">이벤트명</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">혜택</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">참여 조건</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">기간</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">참여자</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">상태</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">활성</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr><td colSpan={10} className="px-3 py-12 text-center text-slate-400">등록된 이벤트가 없습니다</td></tr>
              ) : (
                filtered.map((ev) => {
                  const rl = rewardLabel(ev.rewardType);
                  const isSelected = selectedIds.has(ev.id);
                  return (
                    <tr key={ev.id} className={`transition-colors ${isSelected ? 'bg-[#FF6B2B]/5' : 'hover:bg-slate-50'}`}>
                      <td className="px-3 py-2.5">
                        <CheckboxField size="sm" checked={isSelected} onChange={() => toggleOne(ev.id)} />
                      </td>
                      <td className="px-3 py-2.5">{typeTag(ev.type)}</td>
                      <td className="px-3 py-2.5">
                        <div className="font-medium text-slate-800 truncate max-w-[180px]">{ev.title}</div>
                        <div className="text-xs text-slate-400 truncate max-w-[180px] mt-0.5">{ev.description}</div>
                      </td>
                      <td className="px-3 py-2.5">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-xs font-medium ${rl.color}`}>
                          {rl.icon}{ev.rewardValue}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-xs text-slate-500 max-w-[140px]">{ev.condition}</td>
                      <td className="px-3 py-2.5 text-xs text-slate-500 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Calendar size={11} className="text-slate-400" />
                          {ev.startDate} ~ {ev.endDate}
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-center text-sm font-medium text-slate-700">{ev.participantCount.toLocaleString()}명</td>
                      <td className="px-3 py-2.5 text-center">{statusTag(ev.status)}</td>
                      <td className="px-3 py-2.5 text-center">
                        <div className="flex justify-center">
                          <Toggle
                            size="sm"
                            checked={ev.status === 'active'}
                            onChange={() => ev.status !== 'ended' && handleToggleStatus(ev.id)}
                          />
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Button variant="icon" size="sm" onClick={() => handleEdit(ev)} iconOnly={<Pencil size={13} />} className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50" />
                          <Button variant="icon" size="sm" onClick={() => setDeleteTarget(ev)} iconOnly={<Trash2 size={13} />} className="text-slate-400 hover:text-red-500 hover:bg-red-50" />
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <div className="px-4 py-12 text-center text-slate-400">등록된 이벤트가 없습니다</div>
          ) : (
            filtered.map((ev) => {
              const rl = rewardLabel(ev.rewardType);
              const isSelected = selectedIds.has(ev.id);
              return (
                <div key={ev.id} className={`px-4 py-3.5 ${isSelected ? 'bg-[#FF6B2B]/5' : ''}`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <CheckboxField size="sm" checked={isSelected} onChange={() => toggleOne(ev.id)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            {typeTag(ev.type)}
                            {statusTag(ev.status)}
                          </div>
                          <div className="font-medium text-slate-800 text-sm mb-0.5">{ev.title}</div>
                          <div className="text-xs text-slate-400">{ev.description}</div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <Toggle size="sm" checked={ev.status === 'active'} onChange={() => ev.status !== 'ended' && handleToggleStatus(ev.id)} />
                          <Button variant="icon" size="sm" onClick={() => handleEdit(ev)} iconOnly={<Pencil size={13} />} className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50" />
                          <Button variant="icon" size="sm" onClick={() => setDeleteTarget(ev)} iconOnly={<Trash2 size={13} />} className="text-slate-400 hover:text-red-500 hover:bg-red-50" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap text-xs text-slate-500">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] font-medium ${rl.color}`}>
                          {rl.icon}{ev.rewardValue}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={10} />{ev.startDate} ~ {ev.endDate}
                        </span>
                        <span>{ev.participantCount}명 참여</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ─── Add/Edit Modal ─── */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        size="md"
        title={editingEvent ? '이벤트 수정' : '이벤트 추가'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setModalOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handleSave}>{editingEvent ? '수정' : '추가'}</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <DropdownSelect
              label="이벤트 유형"
              required
              options={EVENT_TYPE_OPTIONS}
              value={formData.type || 'review'}
              onChange={(val) => setFormData({ ...formData, type: val as EventType })}
            />
            <DropdownSelect
              label="상태"
              required
              options={STATUS_OPTIONS.filter((o) => o.value !== '전체')}
              value={formData.status || 'active'}
              onChange={(val) => setFormData({ ...formData, status: val as EventStatus })}
            />
          </div>
          <InputField
            label="이벤트명"
            required
            value={formData.title || ''}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="예) 리뷰 작성 시 음료 무료 쿠폰"
          />
          <InputField
            label="설명"
            value={formData.description || ''}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="고객에게 표시될 이벤트 안내 문구"
          />
          <div className="grid grid-cols-2 gap-4">
            <DropdownSelect
              label="혜택 유형"
              required
              options={REWARD_TYPE_OPTIONS}
              value={formData.rewardType || 'coupon'}
              onChange={(val) => setFormData({ ...formData, rewardType: val as RewardType })}
            />
            <InputField
              label="혜택 내용"
              required
              value={formData.rewardValue || ''}
              onChange={(e) => setFormData({ ...formData, rewardValue: e.target.value })}
              placeholder="예) 10%, 500P, 음료 1잔"
            />
          </div>
          <InputField
            label="참여 조건"
            value={formData.condition || ''}
            onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            placeholder="예) 별점 4점 이상 + 텍스트 20자 이상"
          />
          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="시작일"
              type="date"
              required
              value={formData.startDate || ''}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
            <InputField
              label="종료일"
              type="date"
              required
              value={formData.endDate || ''}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            />
          </div>
        </div>
      </Modal>

      {/* ─── 단건 삭제 ─── */}
      <Modal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        size="sm"
        title="이벤트 삭제"
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
              <p className="text-sm text-slate-700"><strong>"{deleteTarget.title}"</strong> 이벤트를 삭제하시겠습니까?</p>
              <p className="text-xs text-slate-500 mt-1">이 작업은 되돌릴 수 없습니다.</p>
            </div>
          </div>
        )}
      </Modal>

      {/* ─── 다건 삭제 ─── */}
      <Modal
        open={bulkDeleteOpen}
        onClose={() => setBulkDeleteOpen(false)}
        size="sm"
        title="선택 이벤트 삭제"
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
            <p className="text-sm text-slate-700">선택한 <strong>{selectedIds.size}개</strong> 이벤트를 모두 삭제하시겠습니까?</p>
            <p className="text-xs text-slate-500 mt-1">이 작업은 되돌릴 수 없습니다.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
