import { useState } from 'react';
import { MousePointerClick, Search, RotateCcw } from 'lucide-react';
import { Modal, ModalBtn } from '../../components/ui/Modal';
import { InputField } from '../../components/ui/InputField';
import { Button } from '../../components/ui/Button';
import { CheckboxField } from '../../components/ui/CheckboxField';
import { InlineEditTable, useInlineTable, InlineRow } from '../../components/ui/InlineEditTable';

// ─── Types ───────────────────────────────────────────────────────

interface MenuRow { id: string; name: string; usable: boolean; }

interface OptionGroupRow extends InlineRow {
  id: string;
  name: string;
  required: string;
  usable: string;
  isNew?: boolean;
}

interface OptionItemRow extends InlineRow {
  id: string;
  name: string;
  price: string;
  defaultUse: string;
  usable: string;
  isNew?: boolean;
}

// ─── Seed data ───────────────────────────────────────────────────

const INITIAL_MENUS: MenuRow[] = [
  { id: 'm1', name: '불고기 정식', usable: true },
  { id: 'm2', name: '김치찌개',   usable: true },
  { id: 'm3', name: '된장찌개',   usable: true },
  { id: 'm4', name: '비빔밥',     usable: true },
  { id: 'm5', name: '제육볶음',   usable: true },
  { id: 'm6', name: '돈까스',     usable: true },
  { id: 'm7', name: '우동',       usable: false },
];

const INITIAL_GROUPS: Record<string, OptionGroupRow[]> = {
  m1: [
    { id: 'og1', name: '맵기 조절', required: '선택', usable: 'Y' },
    { id: 'og2', name: '밥 양',     required: '필수', usable: 'Y' },
  ],
  m2: [{ id: 'og3', name: '맵기 조절', required: '선택', usable: 'Y' }],
  m3: [],
  m4: [
    { id: 'og4', name: '맵기 조절', required: '선택', usable: 'Y' },
    { id: 'og5', name: '추가 토핑', required: '선택', usable: 'N' },
  ],
  m5: [
    { id: 'og6', name: '맵기 조절', required: '필수', usable: 'Y' },
    { id: 'og7', name: '밥 양',     required: '선택', usable: 'Y' },
  ],
  m6: [{ id: 'og8', name: '소스 선택', required: '필수', usable: 'Y' }],
  m7: [],
};

const INITIAL_ITEMS: Record<string, OptionItemRow[]> = {
  og1: [
    { id: 'oi1', name: '순한맛',      price: '0',   defaultUse: 'Y',  usable: 'Y' },
    { id: 'oi2', name: '보통맛',      price: '0',   defaultUse: 'N', usable: 'Y' },
    { id: 'oi3', name: '매운맛',      price: '0',   defaultUse: 'N', usable: 'Y' },
    { id: 'oi4', name: '아주 매운맛', price: '500', defaultUse: 'N', usable: 'Y' },
  ],
  og2: [
    { id: 'oi5', name: '소', price: '-500', defaultUse: 'N', usable: 'Y' },
    { id: 'oi6', name: '중', price: '0',    defaultUse: 'Y',  usable: 'Y' },
    { id: 'oi7', name: '대', price: '500',  defaultUse: 'N', usable: 'Y' },
  ],
  og3: [
    { id: 'oi8',  name: '순한맛', price: '0', defaultUse: 'Y',  usable: 'Y' },
    { id: 'oi9',  name: '보통맛', price: '0', defaultUse: 'N', usable: 'Y' },
    { id: 'oi10', name: '매운맛', price: '0', defaultUse: 'N', usable: 'Y' },
  ],
  og4: [
    { id: 'oi11', name: '순한맛', price: '0', defaultUse: 'N', usable: 'Y' },
    { id: 'oi12', name: '매운맛', price: '0', defaultUse: 'Y',  usable: 'Y' },
  ],
  og5: [
    { id: 'oi13', name: '치즈 추가',   price: '1000', defaultUse: 'N', usable: 'Y' },
    { id: 'oi14', name: '베이컨 추가', price: '1500', defaultUse: 'N', usable: 'Y' },
  ],
  og6: [
    { id: 'oi15', name: '순한맛',      price: '0',   defaultUse: 'N', usable: 'Y' },
    { id: 'oi16', name: '매운맛',      price: '0',   defaultUse: 'N', usable: 'Y' },
    { id: 'oi17', name: '아주 매운맛', price: '500', defaultUse: 'N', usable: 'Y' },
  ],
  og7: [
    { id: 'oi18', name: '소', price: '-500', defaultUse: 'N', usable: 'Y' },
    { id: 'oi19', name: '중', price: '0',    defaultUse: 'Y',  usable: 'Y' },
    { id: 'oi20', name: '대', price: '500',  defaultUse: 'N', usable: 'Y' },
  ],
  og8: [
    { id: 'oi21', name: '데미글라스', price: '0', defaultUse: 'Y',  usable: 'Y' },
    { id: 'oi22', name: '타르타르',   price: '0', defaultUse: 'N', usable: 'Y' },
    { id: 'oi23', name: '칠리',       price: '0', defaultUse: 'N', usable: 'Y' },
  ],
};

// ─── 컬럼 정의 ───────────────────────────────────────────────────

const YN_OPTIONS = [{ value: 'Y', label: '사용' }, { value: 'N', label: '미사용' }];

const GROUP_COLUMNS = [
  { key: 'name'     as const, label: '옵션 그룹 명', type: 'input'  as const, placeholder: '그룹명 입력' },
  { key: 'required' as const, label: '필수 선택',    type: 'select' as const, className: 'w-[130px]',
    options: [{ value: '선택', label: '선택' }, { value: '필수', label: '필수' }] },
  { key: 'usable'   as const, label: '사용 여부',    type: 'select' as const, className: 'w-[120px]', options: YN_OPTIONS },
];
const GROUP_DEFAULTS = { name: '', required: '선택', usable: 'Y' };

const ITEM_COLUMNS = [
  { key: 'name'       as const, label: '옵션 명',         type: 'input'    as const, placeholder: '옵션명 입력' },
  { key: 'price'      as const, label: '옵션 가격',        type: 'input'    as const, className: 'w-[130px]', placeholder: '0' },
  { key: 'defaultUse' as const, label: '기본선택 사용여부', type: 'select' as const, className: 'w-[150px]', options: YN_OPTIONS },
  { key: 'usable'     as const, label: '사용 여부',        type: 'select'   as const, className: 'w-[120px]', options: YN_OPTIONS },
];
const ITEM_DEFAULTS = { name: '', price: '0', defaultUse: 'N', usable: 'Y' };

// ─── 메뉴 모달 타입 ───────────────────────────────────────────────

interface MenuModalState { open: boolean; mode: 'new' | 'edit'; targetId: string | null; name: string; usable: boolean; }
const MENU_MODAL_INIT: MenuModalState = { open: false, mode: 'new', targetId: null, name: '', usable: true };

// ─── Page ────────────────────────────────────────────────────────

export function ClientOptionManagement() {
  const [searchInput, setSearchInput]         = useState('');
  const [searchQuery, setSearchQuery]         = useState('');
  const [menus, setMenus]                     = useState<MenuRow[]>(INITIAL_MENUS);
  const [groups, setGroups]                   = useState<Record<string, OptionGroupRow[]>>(INITIAL_GROUPS);
  const [items, setItems]                     = useState<Record<string, OptionItemRow[]>>(INITIAL_ITEMS);
  const [selectedMenuId, setSelectedMenuId]   = useState<string | null>(null);
  const [checkedMenuIds, setCheckedMenuIds]   = useState<Set<string>>(new Set());

  const {
    selectedId: selectedGroupId,
    setSelectedId: setSelectedGroupId,
    savedMsg: groupSaved,
    handleSave: handleGroupSave,
  } = useInlineTable<OptionGroupRow>([]);

  const {
    selectedId: selectedItemId,
    setSelectedId: setSelectedItemId,
    savedMsg: itemSaved,
    handleSave: handleItemSave,
  } = useInlineTable<OptionItemRow>([]);

  const [deleteOpen, setDeleteOpen]   = useState(false);
  const [deleteMode, setDeleteMode]   = useState<'checked' | 'single'>('checked');
  const [menuModal, setMenuModal]     = useState<MenuModalState>(MENU_MODAL_INIT);
  const [menuNameError, setMenuNameError] = useState<string | undefined>();
  const [editingGroupId, setEditingGroupId]   = useState<string | null>(null);
  const [editingItemId, setEditingItemId]     = useState<string | null>(null);

  const filteredMenus = menus.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedGroups: OptionGroupRow[] = selectedMenuId ? (groups[selectedMenuId] ?? []) : [];
  const selectedItems: OptionItemRow[]   = selectedGroupId ? (items[String(selectedGroupId)] ?? []) : [];

  const selectedMenuName  = menus.find((m) => m.id === selectedMenuId)?.name;
  const selectedGroupName = selectedGroups.find((g) => g.id === selectedGroupId)?.name;

  // ── 메뉴 체크박스 ──
  const handleMenuCheck = (id: string) =>
    setCheckedMenuIds((prev) => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  const handleAllCheck = () =>
    setCheckedMenuIds(checkedMenuIds.size === menus.length ? new Set() : new Set(menus.map((m) => m.id)));

  // ── 메뉴 선택 ──
  const handleMenuRowClick = (id: string) => {
    setSelectedMenuId((prev) => (prev === id ? null : id));
    setSelectedGroupId(null);
    setSelectedItemId(null);
  };

  // ── 메뉴 모달 ──
  const openNewMenu = () => setMenuModal({ open: true, mode: 'new', targetId: null, name: '', usable: true });
  const openEditMenu = (m: MenuRow, e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuModal({ open: true, mode: 'edit', targetId: m.id, name: m.name, usable: m.usable });
  };
  const closeMenuModal = () => { setMenuModal(MENU_MODAL_INIT); setMenuNameError(undefined); };

  const handleMenuModalSave = () => {
    if (!menuModal.name.trim()) { setMenuNameError('메뉴명을 입력해 주세요.'); return; }
    if (menuModal.mode === 'new') {
      const newId = `m_${Date.now()}`;
      setMenus((prev) => [...prev, { id: newId, name: menuModal.name, usable: menuModal.usable }]);
      setGroups((prev) => ({ ...prev, [newId]: [] }));
      setSelectedMenuId(newId);
    } else if (menuModal.targetId) {
      setMenus((prev) => prev.map((m) => m.id === menuModal.targetId ? { ...m, name: menuModal.name, usable: menuModal.usable } : m));
    }
    closeMenuModal();
  };

  // ── 메뉴 삭제 ──
  const canDelete = checkedMenuIds.size > 0 || selectedMenuId !== null;
  const openDelete = () => { setDeleteMode(checkedMenuIds.size > 0 ? 'checked' : 'single'); setDeleteOpen(true); };
  const handleDelete = () => {
    if (deleteMode === 'checked') {
      setMenus((prev) => prev.filter((m) => !checkedMenuIds.has(m.id)));
      if (selectedMenuId && checkedMenuIds.has(selectedMenuId)) setSelectedMenuId(null);
      setCheckedMenuIds(new Set());
    } else {
      setMenus((prev) => prev.filter((m) => m.id !== selectedMenuId));
      setSelectedMenuId(null);
    }
    setSelectedGroupId(null);
    setSelectedItemId(null);
    setDeleteOpen(false);
  };

  const deleteLabel =
    deleteMode === 'single'
      ? `"${menus.find((m) => m.id === selectedMenuId)?.name}" 메뉴`
      : `선택한 ${checkedMenuIds.size}개 메뉴`;

  // ── 그룹/항목 변경 ──
  const handleGroupsChange = (rows: OptionGroupRow[]) => {
    if (!selectedMenuId) return;
    setGroups((prev) => ({ ...prev, [selectedMenuId]: rows }));
  };

  const handleItemsChange = (rows: OptionItemRow[]) => {
    if (!selectedGroupId) return;
    setItems((prev) => ({ ...prev, [String(selectedGroupId)]: rows }));
  };

  // ── 그룹 행 선택 시 항목 패널 초기화 ──
  const handleGroupSelect = (id: string | number | null) => {
    setSelectedGroupId(id);
    setSelectedItemId(null);
  };

  // ── 수정 모달 열기 ──
  const handleEditGroup = (id: string | number) => setEditingGroupId(String(id));
  const handleEditItem  = (id: string | number) => setEditingItemId(String(id));

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col px-5 lg:px-6 pt-5 lg:pt-6 pb-4 gap-3">

      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
        <span>메뉴 관리</span><span>/</span><span>메뉴 정보 관리</span><span>/</span>
        <span className="text-slate-700 font-medium">옵션 관리</span>
      </nav>

      {/* 검색 영역 */}
      <div className="bg-white rounded-[6px] border border-slate-200 px-4 py-3 shrink-0 flex items-center gap-2">
        <div className="flex-1 max-w-xs relative flex items-center">
          <Search size={16} className="absolute left-3 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="메뉴명 검색"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') setSearchQuery(searchInput); }}
            className="w-full pl-9 pr-3 h-10 text-sm border border-slate-200 rounded-[4px] bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#FF6B2B] focus:ring-1 focus:ring-[#FF6B2B]/30 transition-colors"
          />
        </div>
        <Button
          variant="outline"
          size="md"
          leftIcon={<RotateCcw size={14} />}
          onClick={() => { setSearchInput(''); setSearchQuery(''); }}
        >
          초기화
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={() => setSearchQuery(searchInput)}
        >
          조회
        </Button>
      </div>

      {/* ── 1/3 · 2/3 그리드, 전체 높이 채움 ── */}
      <div className="flex gap-4 flex-1 min-h-0">

        {/* ① 왼쪽 1/3 : 메뉴 목록 (전체 높이) */}
        <div className="w-1/3 shrink-0 bg-white rounded-[6px] border border-slate-200 flex flex-col overflow-hidden">
          {/* 헤더 */}
          <div className="flex items-center gap-2 px-4 h-[44px] border-b border-slate-100 shrink-0">
            <span className="text-sm font-medium text-slate-800">메뉴 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
              {filteredMenus.length}건
            </span>
          </div>
          {/* 목록 (메뉴명만) */}
          <div className="flex-1 overflow-y-auto">
            {filteredMenus.map((menu) => {
              const isSelected = selectedMenuId === menu.id;
              return (
                <button
                  key={menu.id}
                  onClick={() => handleMenuRowClick(menu.id)}
                  className={[
                    'w-full text-left px-4 py-2.5 text-sm border-b border-slate-100 last:border-b-0 transition-colors border-l-2',
                    isSelected
                      ? 'bg-[#FF6B2B]/5 border-l-[#FF6B2B] text-[#FF6B2B] font-medium'
                      : 'border-l-transparent hover:bg-slate-50 text-slate-700',
                  ].join(' ')}
                >
                  {menu.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ② 오른쪽 2/3 : 옵션 그룹(위 50%) + 옵션 항목(아래 50%) */}
        <div className="flex-1 min-w-0 flex flex-col gap-4">

          {/* 옵션 그룹 — 위 50% */}
          <div className="flex-1 min-h-0">
            {selectedMenuId ? (
              <InlineEditTable<OptionGroupRow>
                title="옵션 그룹"
                badge={selectedMenuName}
                columns={GROUP_COLUMNS}
                rows={selectedGroups}
                selectedId={selectedGroupId}
                onSelect={handleGroupSelect}
                onChange={handleGroupsChange}
                newRowDefaults={GROUP_DEFAULTS}
                onSave={handleGroupSave}
                savedMsg={groupSaved}
                emptyText="옵션 그룹이 없습니다. 행추가로 등록하세요."
                onEditRow={handleEditGroup}
                scrollable
                className="h-full"
              />
            ) : (
              <div className="h-full bg-white rounded-[6px] border border-slate-200 flex flex-col">
                <div className="px-4 h-[44px] flex items-center border-b border-slate-100 shrink-0">
                  <span className="text-sm font-medium text-slate-800">옵션 그룹</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-3 select-none">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <MousePointerClick size={22} className="text-slate-300" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-500 font-medium">메뉴를 선택해주세요</p>
                    <p className="text-xs text-slate-400 mt-0.5">왼쪽 목록에서 메뉴를 클릭하면 옵션 그룹이 표시됩니다.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 옵션 항목 — 아래 50% */}
          <div className="flex-1 min-h-0">
            {selectedGroupId ? (
              <InlineEditTable<OptionItemRow>
                title="옵션 항목"
                badge={selectedGroupName}
                columns={ITEM_COLUMNS}
                rows={selectedItems}
                selectedId={selectedItemId}
                onSelect={setSelectedItemId}
                onChange={handleItemsChange}
                newRowDefaults={ITEM_DEFAULTS}
                onSave={handleItemSave}
                savedMsg={itemSaved}
                emptyText="옵션 항목이 없습니다. 행추가로 등록하세요."
                onEditRow={handleEditItem}
                scrollable
                className="h-full"
              />
            ) : (
              <div className="h-full bg-white rounded-[6px] border border-slate-200 flex flex-col">
                <div className="px-4 h-[44px] flex items-center border-b border-slate-100 shrink-0">
                  <span className="text-sm font-medium text-slate-800">옵션 항목</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-3 select-none">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <MousePointerClick size={22} className="text-slate-300" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-500 font-medium">옵션 그룹을 선택해주세요</p>
                    <p className="text-xs text-slate-400 mt-0.5">옵션 그룹 행을 클릭하면 옵션 항목이 표시됩니다.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── 삭제 확인 모달 ── */}
      <Modal
        open={deleteOpen} onClose={() => setDeleteOpen(false)} size="sm"
        footer={<><ModalBtn variant="outline" onClick={() => setDeleteOpen(false)}>취소</ModalBtn><ModalBtn variant="danger" onClick={handleDelete}>삭제</ModalBtn></>}
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl text-red-400">−</span>
          </div>
          <p className="font-medium text-slate-800">{deleteLabel}를 삭제하시겠습니까?</p>
          <p className="text-sm text-slate-500">삭제된 데이터는 복구할 수 없습니다.</p>
        </div>
      </Modal>

      {/* ── 메뉴 신규/수정 모달 ── */}
      <Modal
        open={menuModal.open} onClose={closeMenuModal} size="sm"
        title={menuModal.mode === 'new' ? '메뉴 신규 등록' : '메뉴 수정'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={closeMenuModal}>닫기</ModalBtn>
            <ModalBtn variant="primary" onClick={handleMenuModalSave} disabled={!menuModal.name.trim()}>저장</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">메뉴명 <span className="text-red-400">*</span></label>
            <InputField
              inputSize="md"
              value={menuModal.name}
              onChange={(e) => { setMenuModal((p) => ({ ...p, name: e.target.value })); setMenuNameError(undefined); }}
              placeholder="예: 불고기 정식"
              errorText={menuNameError}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-2">사용여부 <span className="text-red-400">*</span></label>
            <CheckboxField size="md" label="사용" checked={menuModal.usable} onChange={(e) => setMenuModal((p) => ({ ...p, usable: e.target.checked }))} />
          </div>
        </div>
      </Modal>

    </div>
  );
}
