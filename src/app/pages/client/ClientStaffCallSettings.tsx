import { useState } from 'react';
import {
  Bell, Plus, Trash2, GripVertical, ChevronUp, ChevronDown,
  Pencil, Check, X, Eye, Smartphone, AlertCircle, Sparkles,
  Droplets, ScrollText, UtensilsCrossed, Wind, ReceiptText,
  Package, ShoppingBag, Zap, Coffee, Bug, Volume2,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { InputField } from '../../components/ui/InputField';
import { Modal, ModalBtn } from '../../components/ui/Modal';
import { Tag } from '../../components/ui/Tag';
import { Toggle } from '../../components/ui/Toggle';

// ─── Types ────────────────────────────────────────────────────────
interface CallItem {
  id: string;
  label: string;
  icon: string;   // icon key
  enabled: boolean;
  isDefault: boolean;
  sortIndex: number;
}

// ─── Icon map ─────────────────────────────────────────────────────
type IconKey = keyof typeof ICON_MAP;
const ICON_MAP = {
  droplets:    { Icon: Droplets,       label: '물/음료' },
  scroll:      { Icon: ScrollText,     label: '냅킨/휴지' },
  utensils:    { Icon: UtensilsCrossed,label: '반찬/소스' },
  wind:        { Icon: Wind,           label: '앞치마' },
  receipt:     { Icon: ReceiptText,    label: '계산서' },
  package:     { Icon: Package,        label: '포장용기' },
  bag:         { Icon: ShoppingBag,    label: '포장봉투' },
  zap:         { Icon: Zap,           label: '긴급' },
  coffee:      { Icon: Coffee,         label: '음료' },
  bug:         { Icon: Bug,            label: '기타문의' },
  bell:        { Icon: Bell,           label: '직원호출' },
  volume:      { Icon: Volume2,        label: '소음' },
} as const;

// ─── Default items ─────────────────────────────────────────────────
const DEFAULT_ITEMS: CallItem[] = [
  { id: '1', label: '물 주세요',        icon: 'droplets',  enabled: true,  isDefault: true, sortIndex: 0 },
  { id: '2', label: '냅킨/휴지',        icon: 'scroll',    enabled: true,  isDefault: true, sortIndex: 1 },
  { id: '3', label: '반찬 리필',        icon: 'utensils',  enabled: true,  isDefault: true, sortIndex: 2 },
  { id: '4', label: '앞치마 주세요',    icon: 'wind',      enabled: false, isDefault: true, sortIndex: 3 },
  { id: '5', label: '계산서 주세요',    icon: 'receipt',   enabled: true,  isDefault: true, sortIndex: 4 },
  { id: '6', label: '포장 용기',        icon: 'package',   enabled: false, isDefault: true, sortIndex: 5 },
  { id: '7', label: '직원 호출',        icon: 'bell',      enabled: true,  isDefault: true, sortIndex: 6 },
];

// ─── Recommended custom items ─────────────────────────────────────
const RECOMMENDED_EXTRAS = [
  { label: '소스 더 주세요', icon: 'utensils' },
  { label: '포장봉투',       icon: 'bag' },
  { label: '긴급 도움 요청', icon: 'zap' },
  { label: '음료 추가',      icon: 'coffee' },
  { label: '기타 문의',      icon: 'bug' },
  { label: '소음 신고',      icon: 'volume' },
];

// ─── Preview component ─────────────────────────────────────────────
function PhonePreview({ items, featureOn }: { items: CallItem[]; featureOn: boolean }) {
  const visibleItems = items.filter((i) => i.enabled).sort((a, b) => a.sortIndex - b.sortIndex);

  return (
    <div className="flex flex-col items-center">
      {/* Phone frame */}
      <div className="w-[220px] bg-slate-900 rounded-[24px] p-3 shadow-2xl">
        <div className="bg-white rounded-[16px] overflow-hidden">
          {/* Status bar */}
          <div className="bg-slate-800 px-4 py-1 flex justify-between items-center">
            <span className="text-white text-[9px]">9:41</span>
            <div className="w-10 h-2.5 bg-slate-700 rounded-full mx-auto" />
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-slate-600" />
              <div className="w-2 h-2 rounded-full bg-slate-600" />
            </div>
          </div>

          {!featureOn ? (
            <div className="p-4 text-center py-8">
              <Bell size={28} className="mx-auto text-slate-300 mb-2" />
              <p className="text-[11px] text-slate-400">직원 호출 기능 비활성</p>
            </div>
          ) : (
            <div className="p-3">
              {/* Header */}
              <div className="text-center mb-3">
                <div className="text-[13px] font-bold text-slate-800">직원 호출</div>
                <div className="text-[10px] text-slate-400 mt-0.5">필요한 항목을 선택해 주세요</div>
              </div>

              {/* Items */}
              <div className="grid grid-cols-2 gap-1.5">
                {visibleItems.length === 0 ? (
                  <div className="col-span-2 text-center py-4">
                    <p className="text-[10px] text-slate-400">활성화된 항목 없음</p>
                  </div>
                ) : (
                  visibleItems.map((item) => {
                    const iconCfg = ICON_MAP[item.icon as IconKey];
                    const Icon = iconCfg?.Icon ?? Bell;
                    return (
                      <div
                        key={item.id}
                        className="flex flex-col items-center gap-1 bg-slate-50 border border-slate-200 rounded-[8px] px-2 py-2.5"
                      >
                        <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center">
                          <Icon size={13} className="text-[#FF6B2B]" />
                        </div>
                        <span className="text-[10px] text-slate-700 font-medium text-center leading-tight">
                          {item.label}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              <button className="mt-3 w-full py-2 rounded-[8px] bg-[#FF6B2B] text-white text-[11px] font-semibold">
                호출하기
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
        <Eye size={12} />
        고객 화면 미리보기
      </div>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────
export function ClientStaffCallSettings() {
  const [featureEnabled, setFeatureEnabled] = useState(true);
  const [items, setItems] = useState<CallItem[]>(DEFAULT_ITEMS);
  const [customInput, setCustomInput] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<string>('bell');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingLabel, setEditingLabel] = useState('');
  const [iconPickerOpen, setIconPickerOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<CallItem | null>(null);

  const sortedItems = [...items].sort((a, b) => a.sortIndex - b.sortIndex);

  // ── Toggle item enabled ──
  const toggleItem = (id: string) => {
    setItems(items.map((i) => i.id === id ? { ...i, enabled: !i.enabled } : i));
  };

  // ── Move up/down ──
  const move = (id: string, dir: 'up' | 'down') => {
    const sorted = [...items].sort((a, b) => a.sortIndex - b.sortIndex);
    const idx = sorted.findIndex((i) => i.id === id);
    const target = dir === 'up' ? idx - 1 : idx + 1;
    if (target < 0 || target >= sorted.length) return;
    const updated = sorted.map((item, i) => {
      if (i === idx) return { ...item, sortIndex: sorted[target].sortIndex };
      if (i === target) return { ...item, sortIndex: sorted[idx].sortIndex };
      return item;
    });
    setItems(updated);
  };

  // ── Add custom item ──
  const handleAddCustom = () => {
    const label = customInput.trim();
    if (!label) return;
    const newItem: CallItem = {
      id: String(Date.now()),
      label,
      icon: selectedIcon,
      enabled: true,
      isDefault: false,
      sortIndex: items.length,
    };
    setItems([...items, newItem]);
    setCustomInput('');
    setSelectedIcon('bell');
  };

  // ── Add recommended extra ──
  const handleAddRecommended = (label: string, icon: string) => {
    const exists = items.some((i) => i.label === label);
    if (exists) return;
    const newItem: CallItem = {
      id: String(Date.now()),
      label,
      icon,
      enabled: true,
      isDefault: false,
      sortIndex: items.length,
    };
    setItems([...items, newItem]);
  };

  // ── Inline edit ──
  const startEdit = (item: CallItem) => { setEditingId(item.id); setEditingLabel(item.label); };
  const saveEdit = () => {
    if (!editingLabel.trim()) { setEditingId(null); return; }
    setItems(items.map((i) => i.id === editingId ? { ...i, label: editingLabel.trim() } : i));
    setEditingId(null);
  };

  // ── Delete ──
  const handleDelete = (item: CallItem) => {
    if (item.isDefault) { setDeleteConfirm(item); return; }
    setItems(items.filter((i) => i.id !== item.id));
  };
  const confirmDelete = () => {
    if (!deleteConfirm) return;
    setItems(items.filter((i) => i.id !== deleteConfirm.id));
    setDeleteConfirm(null);
  };

  const activeCount = items.filter((i) => i.enabled).length;

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">매장 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">직원 호출 설정</span>
      </nav>

      {/* Master toggle */}
      <div className="bg-white border border-slate-200 rounded-[6px] p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-[8px] ${featureEnabled ? 'bg-orange-100' : 'bg-slate-100'}`}>
            <Bell size={20} className={featureEnabled ? 'text-[#FF6B2B]' : 'text-slate-400'} />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-800">직원 호출 기능</div>
            <div className="text-xs text-slate-500 mt-0.5">
              {featureEnabled
                ? `고객 QR 주문 화면에 직원 호출 버튼이 표시됩니다 · 활성 ${activeCount}개`
                : '현재 고객 화면에 직원 호출 버튼이 숨겨져 있습니다'}
            </div>
          </div>
        </div>
        <Toggle
          size="lg"
          checked={featureEnabled}
          onChange={setFeatureEnabled}
          label={featureEnabled ? '사용 중' : '미사용'}
        />
      </div>

      {/* Body: 2-col */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] gap-5">

        {/* ── Left: settings ── */}
        <div className={`space-y-4 ${!featureEnabled ? 'opacity-50 pointer-events-none' : ''}`}>

          {/* 호출 항목 목록 */}
          <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-slate-800">호출 항목 관리</h3>
                <span className="text-xs text-slate-400">활성 {activeCount} / 전체 {items.length}</span>
              </div>
              <p className="text-xs text-slate-400">토글로 노출 여부를 제어합니다</p>
            </div>

            <div className="divide-y divide-slate-100">
              {sortedItems.map((item, idx) => {
                const iconCfg = ICON_MAP[item.icon as IconKey];
                const Icon = iconCfg?.Icon ?? Bell;
                return (
                  <div key={item.id} className={`flex items-center gap-3 px-4 py-3 transition-colors ${item.enabled ? 'hover:bg-slate-50' : 'opacity-50 bg-slate-50/40'}`}>
                    {/* Grip */}
                    <GripVertical size={14} className="text-slate-200 hover:text-slate-400 shrink-0 cursor-grab" />

                    {/* Icon */}
                    <div className={`w-8 h-8 rounded-[6px] flex items-center justify-center shrink-0 ${item.enabled ? 'bg-orange-100' : 'bg-slate-100'}`}>
                      <Icon size={15} className={item.enabled ? 'text-[#FF6B2B]' : 'text-slate-400'} />
                    </div>

                    {/* Label */}
                    <div className="flex-1 min-w-0">
                      {editingId === item.id ? (
                        <div className="flex items-center gap-1.5">
                          <input
                            value={editingLabel}
                            onChange={(e) => setEditingLabel(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') saveEdit(); if (e.key === 'Escape') setEditingId(null); }}
                            autoFocus
                            className="flex-1 px-2 py-1 text-sm border border-[#FF6B2B] rounded-[4px] focus:outline-none ring-2 ring-[#FF6B2B]/20"
                          />
                          <Button variant="icon" size="sm" onClick={saveEdit} iconOnly={<Check size={13} />} className="text-emerald-500 hover:bg-emerald-50" />
                          <Button variant="icon" size="sm" onClick={() => setEditingId(null)} iconOnly={<X size={13} />} className="text-slate-400 hover:bg-slate-100" />
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${item.enabled ? 'text-slate-800' : 'text-slate-400'}`}>
                            {item.label}
                          </span>
                          {item.isDefault && (
                            <Tag color="gray" variant="soft" size="sm">기본</Tag>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    {editingId !== item.id && (
                      <div className="flex items-center gap-1 shrink-0">
                        <Button
                          variant="icon"
                          size="sm"
                          onClick={() => move(item.id, 'up')}
                          disabled={idx === 0}
                          iconOnly={<ChevronUp size={13} />}
                          className="text-slate-200 hover:text-[#FF6B2B] hover:bg-orange-50 disabled:opacity-20 disabled:cursor-not-allowed"
                        />
                        <Button
                          variant="icon"
                          size="sm"
                          onClick={() => move(item.id, 'down')}
                          disabled={idx === sortedItems.length - 1}
                          iconOnly={<ChevronDown size={13} />}
                          className="text-slate-200 hover:text-[#FF6B2B] hover:bg-orange-50 disabled:opacity-20 disabled:cursor-not-allowed"
                        />
                        <Button
                          variant="icon"
                          size="sm"
                          onClick={() => startEdit(item)}
                          iconOnly={<Pencil size={13} />}
                          className="text-slate-300 hover:text-slate-600 hover:bg-slate-100"
                        />
                        <Toggle size="sm" checked={item.enabled} onChange={() => toggleItem(item.id)} />
                        <Button
                          variant="icon"
                          size="sm"
                          onClick={() => handleDelete(item)}
                          iconOnly={<Trash2 size={13} />}
                          className="text-slate-200 hover:text-red-500 hover:bg-red-50"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 추천 추가 항목 */}
          <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-blue-50/50">
              <Sparkles size={13} className="text-blue-500" />
              <h3 className="text-sm font-semibold text-slate-700">추천 추가 항목</h3>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {RECOMMENDED_EXTRAS.map((extra) => {
                  const alreadyExists = items.some((i) => i.label === extra.label);
                  const iconCfg = ICON_MAP[extra.icon as IconKey];
                  const Icon = iconCfg?.Icon ?? Bell;
                  return (
                    <button
                      key={extra.label}
                      onClick={() => handleAddRecommended(extra.label, extra.icon)}
                      disabled={alreadyExists}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[4px] text-xs font-medium border transition-all ${
                        alreadyExists
                          ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-[#FF6B2B] hover:text-[#FF6B2B] hover:bg-orange-50'
                      }`}
                    >
                      <Icon size={11} />
                      {extra.label}
                      {alreadyExists ? <Check size={10} /> : <Plus size={10} />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 직접 입력 */}
          <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100">
              <Plus size={13} className="text-slate-500" />
              <h3 className="text-sm font-semibold text-slate-700">항목 직접 추가</h3>
            </div>
            <div className="p-4 space-y-3">
              {/* Icon select */}
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-2">아이콘 선택</label>
                <div className="flex flex-wrap gap-2">
                  {(Object.entries(ICON_MAP) as [string, { Icon: React.ElementType; label: string }][]).map(([key, cfg]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedIcon(key)}
                      className={`flex flex-col items-center gap-0.5 p-2 rounded-[6px] border transition-all ${
                        selectedIcon === key
                          ? 'bg-orange-50 border-[#FF6B2B] text-[#FF6B2B]'
                          : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300'
                      }`}
                    >
                      <cfg.Icon size={15} />
                      <span className="text-[9px]">{cfg.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Label input */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <InputField
                    inputSize="md"
                    placeholder="항목 이름 입력 (예: 이쑤시개)"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleAddCustom(); }}
                  />
                </div>
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleAddCustom}
                  disabled={!customInput.trim()}
                  leftIcon={<Plus size={14} />}
                >
                  추가
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: phone preview ── */}
        <div className="flex justify-center xl:justify-start">
          <div className="sticky top-6">
            <PhonePreview items={items} featureOn={featureEnabled} />
          </div>
        </div>
      </div>

      {/* Delete confirm */}
      <Modal
        open={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        size="sm"
        title="기본 항목 삭제"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDeleteConfirm(null)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={confirmDelete}>삭제</ModalBtn>
          </>
        }
      >
        {deleteConfirm && (
          <div className="flex items-start gap-2.5">
            <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-slate-700">
                <strong>"{deleteConfirm.label}"</strong>는 기본 제공 항목입니다.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                삭제하면 고객 화면에서 영구적으로 제거됩니다.
                숨기려면 토글로 비활성화를 권장합니다.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}