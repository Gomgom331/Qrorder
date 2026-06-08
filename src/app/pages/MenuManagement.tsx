import { useState } from 'react';
import { Plus, Pencil, ChevronUp, ChevronDown, Check, RotateCcw, Search, MousePointerClick } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { CheckboxField } from '../components/ui/CheckboxField';
import { SelectField } from '../components/ui/SelectField';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { InlineEditTable, useInlineTable, InlineRow } from '../components/ui/InlineEditTable';

// ─── Types ────────────────────────────────────────────────────────

interface Category {
  id: string;
  name: string;
  isActive: boolean;
}

interface MenuItem extends InlineRow {
  id: string;
  name: string;
  price: string;
  description: string;
  hasOption: '있음' | '없음';
  isActive: '사용' | '미사용';
  isNew?: boolean;
}

// ─── Seed data ────────────────────────────────────────────────────

const INITIAL_CATEGORIES: Category[] = [
  { id: 'c1', name: '음식',    isActive: true  },
  { id: 'c2', name: '음료수',  isActive: true  },
  { id: 'c3', name: '리뷰',   isActive: false },
];

const INITIAL_MENUS: Record<string, MenuItem[]> = {
  c1: [
    { id: 'm1', name: '쌀국수',     price: '12900', description: '고수 음선있음', hasOption: '있음', isActive: '사용' },
    { id: 'm2', name: '분짜',       price: '13500', description: '땅콩 토핑',    hasOption: '있음', isActive: '사용' },
    { id: 'm3', name: '스프링롤',   price: '8900',  description: '4개입',        hasOption: '없음', isActive: '사용' },
  ],
  c2: [
    { id: 'm4', name: '아이스티',   price: '3500',  description: '레몬향',       hasOption: '없음', isActive: '사용'  },
    { id: 'm5', name: '생과일주스', price: '5500',  description: '오렌지/망고',  hasOption: '있음', isActive: '사용'  },
  ],
  c3: [],
};

// ─── 메뉴 컬럼 정의 ───────────────────────────────────────────────

const MENU_COLUMNS = [
  { key: 'name'        as const, label: '메뉴 명',      type: 'input'  as const, placeholder: '메뉴명' },
  { key: 'price'       as const, label: '메뉴 가격',    type: 'input'  as const, placeholder: '0', className: 'w-[120px]' },
  { key: 'description' as const, label: '메뉴 설명',    type: 'input'  as const, placeholder: '설명' },
  { key: 'hasOption'   as const, label: '상세 옵션',    type: 'select' as const, className: 'w-[100px]',
    options: [{ value: '있음', label: '있음' }, { value: '없음', label: '없음' }] },
  { key: 'isActive'    as const, label: '음선 사용 여부', type: 'select' as const, className: 'w-[120px]',
    options: [{ value: '사용', label: '사용' }, { value: '미사용', label: '미사용' }] },
];

const MENU_DEFAULTS: Omit<MenuItem, 'id' | 'isNew'> = {
  name: '', price: '', description: '', hasOption: '없음', isActive: '사용',
};

// ─── Page ─────────────────────────────────────────────────────────

export function MenuManagement() {
  const [categories, setCategories]       = useState<Category[]>(INITIAL_CATEGORIES);
  const [menuMap, setMenuMap]             = useState<Record<string, MenuItem[]>>(INITIAL_MENUS);
  const [selectedCatId, setSelectedCatId] = useState<string | null>(null);
  const [checkedCatIds, setCheckedCatIds] = useState<Set<string>>(new Set());

  const [search, setSearch]               = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');

  // 인라인 메뉴 테이블 상태
  const {
    selectedId: selectedMenuId,
    setSelectedId: setSelectedMenuId,
    savedMsg,
    handleSave,
  } = useInlineTable<MenuItem>([]);

  // 모달 상태
  const [catModal, setCatModal] = useState<{
    open: boolean; mode: 'new' | 'edit'; targetId: string | null;
    name: string; isActive: boolean;
  }>({ open: false, mode: 'new', targetId: null, name: '', isActive: true });
  const [deleteOpen, setDeleteOpen] = useState(false);

  const selectedMenus: MenuItem[] = selectedCatId ? (menuMap[selectedCatId] ?? []) : [];
  const selectedCat = categories.find((c) => c.id === selectedCatId);

  /* ── 검색 필터 ── */
  const filteredCats = categories.filter((c) =>
    appliedSearch ? c.name.includes(appliedSearch) : true
  );

  /* ── 카테고리 체크박스 ── */
  const handleCatCheck = (id: string) =>
    setCheckedCatIds((prev) => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  const allChecked = checkedCatIds.size === filteredCats.length && filteredCats.length > 0;
  const toggleAll  = () =>
    setCheckedCatIds(allChecked ? new Set() : new Set(filteredCats.map((c) => c.id)));

  /* ── 카테고리 모달 ── */
  const openNewCat  = () => setCatModal({ open: true, mode: 'new', targetId: null, name: '', isActive: true });
  const openEditCat = (cat: Category, e: React.MouseEvent) => {
    e.stopPropagation();
    setCatModal({ open: true, mode: 'edit', targetId: cat.id, name: cat.name, isActive: cat.isActive });
  };
  const closeCatModal = () => setCatModal({ open: false, mode: 'new', targetId: null, name: '', isActive: true });

  const saveCat = () => {
    if (!catModal.name.trim()) return;
    if (catModal.mode === 'new') {
      const newId = `c_${Date.now()}`;
      setCategories((prev) => [...prev, { id: newId, name: catModal.name, isActive: catModal.isActive }]);
      setMenuMap((prev) => ({ ...prev, [newId]: [] }));
      setSelectedCatId(newId);
    } else if (catModal.targetId) {
      setCategories((prev) =>
        prev.map((c) => c.id === catModal.targetId ? { ...c, name: catModal.name, isActive: catModal.isActive } : c)
      );
    }
    closeCatModal();
  };

  /* ── 카테고리 삭제 ── */
  const handleDelete = () => {
    const ids = checkedCatIds.size > 0
      ? checkedCatIds
      : selectedCatId ? new Set([selectedCatId]) : new Set<string>();
    setCategories((prev) => prev.filter((c) => !ids.has(c.id)));
    if (selectedCatId && ids.has(selectedCatId)) setSelectedCatId(null);
    setCheckedCatIds(new Set());
    setDeleteOpen(false);
  };

  /* ── 메뉴 변경 ── */
  const handleMenuChange = (rows: MenuItem[]) => {
    if (!selectedCatId) return;
    setMenuMap((prev) => ({ ...prev, [selectedCatId]: rows }));
  };

  return (
    <div className="p-5 lg:p-6 flex flex-col gap-4 h-full">

      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>메뉴</span><span>/</span>
        <span>메뉴 정보 관리</span><span>/</span>
        <span className="text-slate-700 font-medium">메뉴 관리</span>
      </nav>

      {/* 검색 */}
      <div className="bg-white rounded-[6px] border border-slate-200 px-4 py-[17px]">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <InputField
              inputSize="md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && setAppliedSearch(search)}
              placeholder="카테고리를 입력해주세요"
              leftIcon={<Search size={14} className="text-slate-400" />}
            />
          </div>
          <Button variant="outline" size="md" leftIcon={<RotateCcw size={14} />}
            onClick={() => { setSearch(''); setAppliedSearch(''); }}>
            초기화
          </Button>
          <Button variant="primary" size="md" leftIcon={<Search size={14} />}
            onClick={() => setAppliedSearch(search)}>
            조회
          </Button>
        </div>
      </div>

      {/* 두 패널 */}
      <div className="flex gap-4 flex-1 min-h-0">

        {/* ── 왼쪽: 카테고리 관리 ── */}
        <div className="w-[360px] shrink-0 bg-white border border-slate-200 rounded-[6px] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 h-[44px] border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-800">카테고리 관리</span>
              {filteredCats.length > 0 && (
                <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
                  {filteredCats.length}건
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <Button variant="primary" size="sm" leftIcon={<Plus size={13} />} onClick={openNewCat}>신규</Button>
              <Button
                variant="outline" size="sm"
                disabled={checkedCatIds.size === 0 && !selectedCatId}
                onClick={() => setDeleteOpen(true)}
                className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 disabled:border-slate-200 disabled:text-slate-300"
              >삭제</Button>
            </div>
          </div>

          {/* 고정 헤더 */}
          <table className="w-full text-sm shrink-0">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-10 px-3 py-2.5">
                  <CheckboxField size="sm" checked={allChecked}
                    indeterminate={checkedCatIds.size > 0 && !allChecked}
                    onChange={toggleAll} />
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">카테고리명</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[100px]">사용 여부</th>
                <th className="w-10 px-3 py-2.5" />
              </tr>
            </thead>
          </table>

          {/* 스크롤 바디 */}
          <div className="subtle-box flex-1 min-h-0" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
            <table className="w-full text-sm">
              <colgroup>
                <col className="w-10" />
                <col />
                <col className="w-[100px]" />
                <col className="w-10" />
              </colgroup>
              <tbody className="divide-y divide-slate-100">
                {filteredCats.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-10 text-center text-slate-400 text-sm">
                      카테고리가 없습니다.
                    </td>
                  </tr>
                ) : (
                  filteredCats.map((cat) => {
                    const isSelected = selectedCatId === cat.id;
                    const isChecked  = checkedCatIds.has(cat.id);
                    return (
                      <tr
                        key={cat.id}
                        onClick={() => { setSelectedCatId(isSelected ? null : cat.id); setSelectedMenuId(null); }}
                        className={[
                          'cursor-pointer transition-colors',
                          isSelected ? 'bg-[#FF6B2B]/5 border-l-2 border-l-[#FF6B2B]' : 'hover:bg-slate-50',
                        ].join(' ')}
                      >
                        <td className="px-3 py-2.5" onClick={(e) => e.stopPropagation()}>
                          <CheckboxField size="sm" checked={isChecked}
                            onChange={() => handleCatCheck(cat.id)} />
                        </td>
                        <td className="px-3 py-2.5 text-sm text-slate-700">{cat.name}</td>
                        <td className="px-3 py-2.5 text-center">
                          <span className={`text-xs px-2 py-0.5 rounded-[3px] ${cat.isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                            {cat.isActive ? '사용' : '미사용'}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-center">
                          <button
                            onClick={(e) => openEditCat(cat, e)}
                            className="w-6 h-6 flex items-center justify-center rounded-[4px] text-slate-300 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/8 transition-colors"
                          >
                            <Pencil size={12} />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 오른쪽: 메뉴 관리 ── */}
        <div className="flex-1 min-w-0 flex flex-col">
          {selectedCatId ? (
            <InlineEditTable<MenuItem>
              title="메뉴 관리"
              badge={selectedCat?.name}
              columns={MENU_COLUMNS}
              rows={selectedMenus}
              selectedId={selectedMenuId}
              onSelect={setSelectedMenuId}
              onChange={handleMenuChange}
              newRowDefaults={MENU_DEFAULTS}
              onSave={handleSave}
              savedMsg={savedMsg}
              emptyText="메뉴가 없습니다. 행추가로 등록하세요."
            />
          ) : (
            <div className="flex-1 bg-white border border-slate-200 rounded-[6px] flex flex-col overflow-hidden">
              <div className="px-4 h-[44px] border-b border-slate-100 flex items-center shrink-0">
                <span className="text-sm font-medium text-slate-800">메뉴 관리</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-3 select-none py-14">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <MousePointerClick size={22} className="text-slate-300" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-500 font-medium">카테고리를 선택해주세요</p>
                  <p className="text-xs text-slate-400 mt-0.5">왼쪽 목록에서 카테고리를 클릭하면 메뉴가 표시됩니다.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── 카테고리 신규/수정 모달 ── */}
      <Modal
        open={catModal.open} onClose={closeCatModal} size="sm"
        title={catModal.mode === 'new' ? '카테고리 신규 등록' : '카테고리 수정'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={closeCatModal}>닫기</ModalBtn>
            <ModalBtn variant="primary" onClick={saveCat} disabled={!catModal.name.trim()}>저장</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">
              카테고리명 <span className="text-red-400">*</span>
            </label>
            {catModal.mode === 'edit' ? (
              <div className="px-3 py-2 text-sm bg-slate-100 text-slate-400 rounded-[4px] border border-slate-200 select-none">
                {catModal.name}
              </div>
            ) : (
              <InputField
                inputSize="md"
                value={catModal.name}
                onChange={(e) => setCatModal((p) => ({ ...p, name: e.target.value }))}
                placeholder="예: 음식"
              />
            )}
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-2">사용 여부</label>
            <CheckboxField
              size="md" label="사용"
              checked={catModal.isActive}
              onChange={(e) => setCatModal((p) => ({ ...p, isActive: e.target.checked }))}
            />
          </div>
        </div>
      </Modal>

      {/* ── 삭제 확인 모달 ── */}
      <Modal
        open={deleteOpen} onClose={() => setDeleteOpen(false)} size="sm"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDeleteOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={handleDelete}>삭제</ModalBtn>
          </>
        }
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl text-red-400">−</span>
          </div>
          <p className="font-medium text-slate-800">선택한 카테고리를 삭제하시겠습니까?</p>
          <p className="text-sm text-slate-500">삭제된 데이터는 복구할 수 없습니다.</p>
        </div>
      </Modal>
    </div>
  );
}
