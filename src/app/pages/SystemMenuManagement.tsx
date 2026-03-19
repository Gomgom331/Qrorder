import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronRight, Link2 } from 'lucide-react';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';
import { ValidationModal } from '../components/ui/Modal';

// ─── Types ───────────────────────────────────────────────────────
interface MenuRow {
  id: string;
  parentId: string | null;
  depth: number;      // 1–5
  order: number;      // among siblings (0-indexed)
  menuCode: string;
  menuName: string;
  menuUrl: string;
  isNew: boolean;     // amber background
  collapsed: boolean; // children hidden
}

// ─── ID generator ────────────────────────────────────────────────
let _uid = 200;
const genId = () => `mr${++_uid}`;

// ─── Tree connector (ㄴ / └ / ├ shape) ───────────────────────────
function TreeConnector({ row, rows }: { row: MenuRow; rows: MenuRow[] }) {
  if (row.depth === 1) return null;

  // Build ancestor chain from root → immediate parent
  const buildChain = (r: MenuRow): MenuRow[] => {
    if (!r.parentId) return [];
    const parent = rows.find((x) => x.id === r.parentId);
    if (!parent) return [];
    return [...buildChain(parent), parent];
  };

  const ancestors = buildChain(row); // [depth-1 ancestor, ..., immediate parent]

  // For each ancestor, determine if it still has siblings below it
  // → if yes: draw │ (vertical line continues), if no: draw empty gap
  // depth 1 ancestors never draw │ — top-level groups have no connecting line
  const segments: ('line' | 'empty')[] = ancestors.map((anc) => {
    if (anc.depth === 1) return 'empty';
    const sibs = rows
      .filter((r) => r.parentId === anc.parentId)
      .sort((a, b) => a.order - b.order);
    const isLast = sibs[sibs.length - 1]?.id === anc.id;
    return isLast ? 'empty' : 'line';
  });

  // Is current row the last sibling? → └ (no bottom line) vs ├ (continues down)
  const siblings = rows
    .filter((r) => r.parentId === row.parentId)
    .sort((a, b) => a.order - b.order);
  const isLast = siblings[siblings.length - 1]?.id === row.id;

  const SEG = 16; // px per level

  return (
    <div className="flex shrink-0 self-stretch">
      {/* Ancestor vertical line segments */}
      {segments.map((seg, i) => (
        <div key={i} className="relative shrink-0 self-stretch" style={{ width: SEG }}>
          {seg === 'line' && (
            <div
              className="absolute bg-slate-300"
              style={{ left: SEG / 2 - 1, top: 0, bottom: 0, width: 1 }}
            />
          )}
        </div>
      ))}

      {/* Branch: └ (last) or ├ (middle) */}
      <div className="relative shrink-0 self-stretch" style={{ width: SEG }}>
        {/* Vertical line — full height if middle, half height (top→center) if last */}
        <div
          className="absolute bg-slate-300"
          style={{
            left: SEG / 2 - 1,
            top: 0,
            bottom: isLast ? '50%' : 0,
            width: 1,
          }}
        />
        {/* Horizontal arm → right */}
        <div
          className="absolute bg-slate-300"
          style={{ left: SEG / 2, right: 0, top: '50%', height: 1 }}
        />
      </div>
    </div>
  );
}

// ─── Initial sample data (5 depths) ──────────────────────────────
const INIT: MenuRow[] = [
  // ── Depth 1 ──
  { id: 'r01', parentId: null,  depth: 1, order: 0, menuCode: 'SYS',                   menuName: '시스템 관리',    menuUrl: '',                            isNew: false, collapsed: false },
  { id: 'r02', parentId: null,  depth: 1, order: 1, menuCode: 'ORD',                   menuName: '주문 관리',      menuUrl: '',                            isNew: false, collapsed: false },
  // ── Depth 2 under SYS ──
  { id: 'r03', parentId: 'r01', depth: 2, order: 0, menuCode: 'SYS-BIZ',               menuName: '사업장 관리',    menuUrl: '',                            isNew: false, collapsed: false },
  { id: 'r04', parentId: 'r01', depth: 2, order: 1, menuCode: 'SYS-COD',               menuName: '코드 관리',      menuUrl: '',                            isNew: false, collapsed: false },
  { id: 'r05', parentId: 'r01', depth: 2, order: 2, menuCode: 'SYS-RUL',               menuName: '규칙 관리',      menuUrl: '/system/rules',               isNew: false, collapsed: false },
  // ── Depth 2 under ORD ──
  { id: 'r06', parentId: 'r02', depth: 2, order: 0, menuCode: 'ORD-RT',                menuName: '실시간 주문',    menuUrl: '/orders/realtime',            isNew: false, collapsed: false },
  { id: 'r07', parentId: 'r02', depth: 2, order: 1, menuCode: 'ORD-HIS',               menuName: '주문 내역',      menuUrl: '/orders/history',             isNew: false, collapsed: false },
  // ── Depth 3 under SYS-BIZ ──
  { id: 'r08', parentId: 'r03', depth: 3, order: 0, menuCode: 'SYS-BIZ-SRCH',          menuName: '사업장 조회',    menuUrl: '/system/business',            isNew: false, collapsed: false },
  { id: 'r09', parentId: 'r03', depth: 3, order: 1, menuCode: 'SYS-BIZ-REG',           menuName: '사업장 등록',    menuUrl: '/system/business/new',        isNew: false, collapsed: false },
  // ── Depth 3 under SYS-COD ──
  { id: 'r10', parentId: 'r04', depth: 3, order: 0, menuCode: 'SYS-COD-CMN',           menuName: '공통코드 관리',  menuUrl: '',                            isNew: false, collapsed: false },
  // ── Depth 4 under SYS-COD-CMN ──
  { id: 'r11', parentId: 'r10', depth: 4, order: 0, menuCode: 'SYS-COD-CMN-LST',       menuName: '코드 목록',      menuUrl: '/system/common-codes',        isNew: false, collapsed: false },
  { id: 'r12', parentId: 'r10', depth: 4, order: 1, menuCode: 'SYS-COD-CMN-DTL',       menuName: '코드 상세',      menuUrl: '',                            isNew: false, collapsed: false },
  // ── Depth 5 under SYS-COD-CMN-DTL ──
  { id: 'r13', parentId: 'r12', depth: 5, order: 0, menuCode: 'SYS-COD-CMN-DTL-VIEW',  menuName: '상세 조회',      menuUrl: '/system/common-codes/detail', isNew: false, collapsed: false },
  { id: 'r14', parentId: 'r12', depth: 5, order: 1, menuCode: 'SYS-COD-CMN-DTL-EDIT',  menuName: '상세 수정',      menuUrl: '/system/common-codes/edit',   isNew: false, collapsed: false },
];

// ─── Component ───────────────────────────────────────────────────
export function SystemMenuManagement() {
  const [rows, setRows] = useState<MenuRow[]>(INIT);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [searchApplied, setSearchApplied] = useState('');
  const [validOpen, setValidOpen] = useState(false);
  const [validMsg, setValidMsg] = useState('');
  const [validFields, setValidFields] = useState<string[]>([]);

  // ─── Helpers ─────────────────────────────────────────────────
  const findRow = (id: string) => rows.find(r => r.id === id)!;

  const getSiblings = (row: MenuRow) =>
    rows.filter(r => r.parentId === row.parentId).sort((a, b) => a.order - b.order);

  const hasChildren = (id: string) => rows.some(r => r.parentId === id);

  const canHaveChildren = (row: MenuRow) =>
    row.depth < 5 && !row.menuUrl;

  // ─── Visible rows (pre-order, respect collapsed) ──────────────
  const getVisible = (): MenuRow[] => {
    const result: MenuRow[] = [];
    const traverse = (parentId: string | null) => {
      const children = rows
        .filter(r => r.parentId === parentId)
        .sort((a, b) => a.order - b.order);
      for (const row of children) {
        result.push(row);
        if (!row.collapsed) traverse(row.id);
      }
    };
    traverse(null);
    return result;
  };

  const visible = getVisible();
  const q = searchApplied.toLowerCase();
  const displayed = q
    ? visible.filter(r =>
        r.menuCode.toLowerCase().includes(q) ||
        r.menuName.toLowerCase().includes(q) ||
        r.menuUrl.toLowerCase().includes(q)
      )
    : visible;

  // ─── Expand all ancestors of visible search results ───────────
  // (When searching, auto-expand so results are visible — handled
  //  by the filter operating on the already-flattened `visible` list)

  // ─── Toggle collapse ─────────────────────────────────────────
  const toggleCollapse = (id: string) =>
    setRows(prev => prev.map(r => r.id === id ? { ...r, collapsed: !r.collapsed } : r));

  // ─── Open alert ──────────────────────────────────────────────
  const showAlert = (msg: string, fields: string[] = []) => {
    setValidMsg(msg);
    setValidFields(fields);
    setValidOpen(true);
  };

  // ─── Add sibling row (+ 행추가) ───────────────────────────────
  const addSiblingRow = () => {
    if (!selectedId) {
      // No selection → add root-level row
      const maxOrder = Math.max(-1, ...rows.filter(r => !r.parentId).map(r => r.order)) + 1;
      const nr: MenuRow = { id: genId(), parentId: null, depth: 1, order: maxOrder, menuCode: '', menuName: '', menuUrl: '', isNew: true, collapsed: false };
      setRows(prev => [...prev, nr]);
      setSelectedId(nr.id);
      return;
    }

    const sel = findRow(selectedId);
    const newOrder = sel.order + 1;

    // Shift sibling orders after selected
    const updated = rows.map(r =>
      r.parentId === sel.parentId && r.order >= newOrder ? { ...r, order: r.order + 1 } : r
    );
    const nr: MenuRow = {
      id: genId(), parentId: sel.parentId, depth: sel.depth,
      order: newOrder, menuCode: '', menuName: '', menuUrl: '',
      isNew: true, collapsed: false,
    };
    setRows([...updated, nr]);
    setSelectedId(nr.id);
  };

  // ─── Add child row (+ 하위추가) ───────────────────────────────
  const addChildRow = () => {
    if (!selectedId) {
      showAlert('행을 먼저 선택해 주세요.');
      return;
    }
    const sel = findRow(selectedId);
    if (sel.menuUrl) {
      showAlert('메뉴주소가 설정된 항목에는 하위 메뉴를 추가할 수 없습니다.', [`${sel.menuName} (${sel.menuUrl})`]);
      return;
    }
    if (sel.depth >= 5) {
      showAlert('최대 5depth까지만 추가할 수 있습니다.');
      return;
    }
    const siblings = rows.filter(r => r.parentId === sel.id);
    const maxOrder = siblings.length > 0 ? Math.max(...siblings.map(r => r.order)) + 1 : 0;
    const nr: MenuRow = {
      id: genId(), parentId: sel.id, depth: sel.depth + 1,
      order: maxOrder, menuCode: '', menuName: '', menuUrl: '',
      isNew: true, collapsed: false,
    };
    // Expand parent so the new child is visible
    setRows(prev => [...prev.map(r => r.id === sel.id ? { ...r, collapsed: false } : r), nr]);
    setSelectedId(nr.id);
  };

  // ─── Delete row (+ descendants) ──────────────────────────────
  const deleteRow = () => {
    if (!selectedId) return;
    const toDelete = new Set<string>();
    const collect = (id: string) => {
      toDelete.add(id);
      rows.filter(r => r.parentId === id).forEach(r => collect(r.id));
    };
    collect(selectedId);
    setRows(prev => prev.filter(r => !toDelete.has(r.id)));
    setSelectedId(null);
  };

  // ─── Move among siblings (↑/↓) ───────────────────────────────
  const moveRow = (dir: 'up' | 'down') => {
    if (!selectedId) return;
    const sel = findRow(selectedId);
    const siblings = getSiblings(sel);
    const idx = siblings.findIndex(s => s.id === selectedId);
    const targetIdx = dir === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= siblings.length) return;
    const target = siblings[targetIdx];
    setRows(prev =>
      prev.map(r => {
        if (r.id === sel.id) return { ...r, order: target.order };
        if (r.id === target.id) return { ...r, order: sel.order };
        return r;
      })
    );
  };

  // ─── Update field ─────────────────────────────────────────────
  const updateRow = (id: string, field: 'menuCode' | 'menuName' | 'menuUrl', value: string) =>
    setRows(prev => prev.map(r => r.id === id ? { ...r, [field]: value } : r));

  // ─── Save ─────────────────────────────────────────────────────
  const handleSave = () => {
    const errs: string[] = [];
    // URL-lock validation: nodes with URL should not have children
    rows.forEach(sel => {
      if (sel.menuUrl && hasChildren(sel.id)) {
        errs.push(`[${sel.menuCode}] 메뉴주소가 있는 항목에 하위 메뉴가 존재합니다`);
      }
      if (!sel.menuCode.trim()) errs.push(`[${sel.menuName || '?'}] 메뉴코드 필수`);
      if (!sel.menuName.trim()) errs.push(`[${sel.menuCode || '?'}] 메뉴명 필수`);
    });
    if (errs.length > 0) {
      showAlert('저장할 수 없습니다. 아래 항목을 확인해 주세요.', errs);
      return;
    }
    setRows(prev => prev.map(r => ({ ...r, isNew: false })));
    setSelectedId(null);
  };

  // ─── Search ───────────────────────────────────────────────────
  const handleSearch = () => setSearchApplied(search);
  const handleReset  = () => { setSearch(''); setSearchApplied(''); };

  const sel = selectedId ? findRow(selectedId) : null;

  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>시스템</span>
        <span>/</span>
        <span>시스템 관리</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">메뉴 관리</span>
      </nav>

      {/* Search card */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <InputField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="메뉴코드, 메뉴명으로 검색"
              leftIcon={<Search size={14} />}
            />
          </div>
          <Button variant="outline" size="md" onClick={handleReset}>초기화</Button>
          <Button variant="primary" size="md" leftIcon={<Search size={15} />} onClick={handleSearch}>조회</Button>
        </div>
      </div>

      {/* Tree table */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 flex-wrap gap-2">
          <span className="text-sm font-medium text-slate-800">메뉴 목록</span>

          <div className="flex items-center gap-1">
            {/* ↑↓ sibling move */}
            <Button
              variant="icon"
              size="sm"
              disabled={!selectedId}
              onClick={() => moveRow('up')}
              title="위로 이동 (같은 depth 형제끼리)"
            >
              <ChevronUp size={14} />
            </Button>
            <Button
              variant="icon"
              size="sm"
              disabled={!selectedId}
              onClick={() => moveRow('down')}
              title="아래로 이동 (같은 depth 형제끼리)"
            >
              <ChevronDown size={14} />
            </Button>

            {/* + 행추가 (sibling) */}
            <Button size="sm" variant="ghost" onClick={addSiblingRow}>
              <span className="text-base leading-none mr-0.5">+</span> 행추가
            </Button>

            {/* + 하위추가 (child) */}
            <Button
              size="sm"
              variant="ghost"
              onClick={addChildRow}
              disabled={!sel || !!sel.menuUrl || sel.depth >= 5}
              title={
                !sel ? '행을 선택하세요' :
                sel.menuUrl ? '메뉴주소가 있으면 하위 추가 불가' :
                sel.depth >= 5 ? '최대 5depth' : '하위 행 추가'
              }
            >
              <span className="text-base leading-none mr-0.5">+</span> 하위추가
            </Button>

            {/* − 행삭제 */}
            <Button
              size="sm"
              variant="ghost"
              onClick={deleteRow}
              disabled={!selectedId}
              className="text-red-500 hover:bg-red-50 hover:text-red-600 disabled:text-slate-300 disabled:hover:bg-transparent"
            >
              <span className="text-base leading-none mr-0.5">−</span> 행삭제
            </Button>

            {/* 저장 */}
            <Button size="sm" variant="outline" onClick={handleSave}>
              저장
            </Button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 border-b border-slate-100 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link2 size={11} className="text-[#FF6B2B]" />
            링크 설정됨 (하위 추가 불가)
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="w-3 h-3 rounded-sm bg-amber-100 border border-amber-200" />
            신규 행
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm table-fixed">
            <colgroup>
              <col style={{ width: '38%' }} />
              <col style={{ width: '27%' }} />
              <col />
            </colgroup>
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-3 py-2 text-xs font-medium text-slate-500">
                  메뉴코드 <span className="text-red-400">*</span>
                </th>
                <th className="text-left px-3 py-2 text-xs font-medium text-slate-500">
                  메뉴 명 <span className="text-red-400">*</span>
                </th>
                <th className="text-left px-3 py-2 text-xs font-medium text-slate-500">
                  메뉴주소
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {displayed.map((row) => {
                const isSelected = row.id === selectedId;
                const kids = hasChildren(row.id);
                const hasUrl = !!row.menuUrl;

                return (
                  <tr
                    key={row.id}
                    onClick={() => setSelectedId(row.id === selectedId ? null : row.id)}
                    className={[
                      'cursor-pointer transition-colors',
                      row.depth === 1 && !row.isNew && !isSelected ? 'bg-slate-50/70' : '',
                      row.isNew ? 'bg-amber-50 hover:bg-amber-100/50' : 'hover:bg-slate-50',
                      isSelected ? 'bg-[#FF6B2B]/5' : '',
                      row.depth === 1 ? 'border-t-2 border-t-slate-200 first:border-t-0' : '',
                    ].filter(Boolean).join(' ')}
                  >
                    {/* ── 메뉴코드 ── */}
                    <td
                      className={[
                        'py-1.5 pr-2 transition-colors',
                        isSelected ? 'border-l-2 border-l-[#FF6B2B] pl-[5px]' : 'pl-2',
                      ].join(' ')}
                    >
                      <div className="flex items-stretch min-w-0">
                        {/* ㄴ Tree connector */}
                        <TreeConnector row={row} rows={rows} />

                        {/* Collapse toggle — all depths */}
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleCollapse(row.id); }}
                          className={[
                            'shrink-0 w-[18px] flex items-center justify-center rounded transition-colors self-center',
                            kids
                              ? row.depth === 1
                                ? 'text-slate-500 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10'
                                : 'text-slate-400 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10'
                              : 'pointer-events-none opacity-0',
                          ].join(' ')}
                          tabIndex={-1}
                        >
                          {kids
                            ? row.collapsed
                              ? <ChevronRight size={13} />
                              : <ChevronDown size={13} />
                            : null}
                        </button>

                        {/* Input */}
                        <div className="flex-1 min-w-0 ml-0.5">
                          <InputField
                            inputSize="sm"
                            value={row.menuCode}
                            readOnly={!row.isNew}
                            onChange={(e) => updateRow(row.id, 'menuCode', e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            placeholder="MENU_CODE"
                            className={row.depth === 1 && !row.isNew ? 'font-medium' : ''}
                          />
                        </div>
                      </div>
                    </td>

                    {/* ── 메뉴명 ── */}
                    <td className="px-2 py-1.5">
                      <InputField
                        inputSize="sm"
                        value={row.menuName}
                        onChange={(e) => updateRow(row.id, 'menuName', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="메뉴명"
                      />
                    </td>

                    {/* ── 메뉴주소 ── */}
                    <td className="px-2 py-1.5">
                      <InputField
                        inputSize="sm"
                        value={row.menuUrl}
                        onChange={(e) => updateRow(row.id, 'menuUrl', e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder={canHaveChildren(row) ? '/path (입력 시 하위 추가 불가)' : '/path/to/page'}
                        leftIcon={hasUrl ? <Link2 size={12} className="text-[#FF6B2B]" /> : undefined}
                      />
                    </td>
                  </tr>
                );
              })}

              {displayed.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-4 py-10 text-center text-sm text-slate-400">
                    {searchApplied ? `"${searchApplied}" 검색 결과가 없습니다.` : '등록된 메뉴가 없습니다.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Validation / alert modal */}
      <ValidationModal
        open={validOpen}
        onClose={() => setValidOpen(false)}
        message={validMsg || '필수 항목을 모두 입력해 주세요.'}
        fields={validFields}
      />
    </div>
  );
}