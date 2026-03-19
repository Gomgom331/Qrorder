import { useState } from 'react';
import {
  Folder, File, Building2, Users, Tag, QrCode, ShoppingBag, Settings,
  ChevronRight, ChevronDown, ChevronUp, Link2, Check,
} from 'lucide-react';
import { TreeView, TreeNode } from '../components/ui/TreeView';
import { TreeTable, TreeTableColumn, TreeTableNode } from '../components/ui/TreeTable';
import { Toggle } from '../components/ui/Toggle';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
        <p className="text-sm font-medium text-slate-800">{title}</p>
        {desc && <p className="text-xs text-slate-400 mt-0.5">{desc}</p>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// TreeView sample data
// ═══════════════════════════════════════════════════════════════════
const FILE_TREE: TreeNode[] = [
  {
    id: 'src', label: 'src', icon: <Folder size={14} />,
    children: [
      {
        id: 'app', label: 'app', icon: <Folder size={14} />,
        children: [
          {
            id: 'components', label: 'components', icon: <Folder size={14} />,
            children: [
              {
                id: 'layout', label: 'layout', icon: <Folder size={14} />,
                children: [
                  { id: 'header',  label: 'Header.tsx',  icon: <File size={13} /> },
                  { id: 'sidebar', label: 'Sidebar.tsx', icon: <File size={13} /> },
                  { id: 'layout',  label: 'Layout.tsx',  icon: <File size={13} /> },
                ],
              },
              {
                id: 'ui', label: 'ui', icon: <Folder size={14} />,
                children: [
                  { id: 'button',  label: 'Button.tsx',     icon: <File size={13} /> },
                  { id: 'input',   label: 'InputField.tsx', icon: <File size={13} /> },
                  { id: 'modal',   label: 'Modal.tsx',      icon: <File size={13} /> },
                  { id: 'toggle',  label: 'Toggle.tsx',     icon: <File size={13} /> },
                  { id: 'tree',    label: 'TreeView.tsx',   icon: <File size={13} /> },
                  { id: 'treetbl', label: 'TreeTable.tsx',  icon: <File size={13} /> },
                ],
              },
            ],
          },
          {
            id: 'pages', label: 'pages', icon: <Folder size={14} />,
            children: [
              { id: 'dash',  label: 'Dashboard.tsx',    icon: <File size={13} /> },
              { id: 'menu',  label: 'MenuRegister.tsx', icon: <File size={13} /> },
              { id: 'order', label: 'Orders.tsx',       icon: <File size={13} /> },
            ],
          },
          { id: 'routes', label: 'routes.tsx', icon: <File size={13} /> },
        ],
      },
      {
        id: 'styles', label: 'styles', icon: <Folder size={14} />,
        children: [
          { id: 'theme', label: 'theme.css', icon: <File size={13} /> },
          { id: 'fonts', label: 'fonts.css', icon: <File size={13} /> },
        ],
      },
    ],
  },
  { id: 'public', label: 'public', icon: <Folder size={14} />,
    children: [{ id: 'fav', label: 'favicon.ico', icon: <File size={13} /> }] },
  { id: 'pkg', label: 'package.json', icon: <File size={13} /> },
];

const MENU_TREE: TreeNode[] = [
  {
    id: 'm1', label: '메인 메뉴', badge: 5, icon: <Tag size={14} />,
    children: [
      {
        id: 'm1-1', label: '버거', badge: 3, icon: <Tag size={13} />,
        children: [
          { id: 'm1-1-1', label: '스마트버거',    icon: <File size={13} /> },
          { id: 'm1-1-2', label: '더블 치즈버거', icon: <File size={13} /> },
          { id: 'm1-1-3', label: '베이컨버거',    icon: <File size={13} /> },
        ],
      },
      {
        id: 'm1-2', label: '세트 메뉴', badge: 2, icon: <Tag size={13} />,
        children: [
          { id: 'm1-2-1', label: '버거 세트 A', icon: <File size={13} /> },
          { id: 'm1-2-2', label: '버거 세트 B', icon: <File size={13} /> },
        ],
      },
    ],
  },
  {
    id: 'm2', label: '사이드', badge: 4, icon: <ShoppingBag size={14} />,
    children: [
      {
        id: 'm2-1', label: '감자류', badge: 2, icon: <Tag size={13} />,
        children: [
          { id: 'm2-1-1', label: '감자튀김 S', icon: <File size={13} /> },
          { id: 'm2-1-2', label: '감자튀김 L', icon: <File size={13} /> },
        ],
      },
      {
        id: 'm2-2', label: '샐러드', badge: 2, icon: <Tag size={13} />,
        children: [
          { id: 'm2-2-1', label: '그린 샐러드', icon: <File size={13} />, disabled: true },
          { id: 'm2-2-2', label: '시저 샐러드', icon: <File size={13} />, disabled: true },
        ],
      },
    ],
  },
  {
    id: 'm3', label: '음료 · 디저트', badge: 6, icon: <QrCode size={14} />,
    children: [
      {
        id: 'm3-1', label: '탄산음료', badge: 3, icon: <Tag size={13} />,
        children: [
          { id: 'm3-1-1', label: '콜라 M',  icon: <File size={13} /> },
          { id: 'm3-1-2', label: '콜라 L',  icon: <File size={13} /> },
          { id: 'm3-1-3', label: '사이다',  icon: <File size={13} /> },
        ],
      },
    ],
  },
];

const ORG_TREE: TreeNode[] = [
  {
    id: 'ceo', label: 'CEO', icon: <Users size={14} />, badge: '대표',
    children: [
      {
        id: 'dev', label: '개발본부', icon: <Settings size={14} />,
        children: [
          { id: 'fe', label: '프론트엔드팀', icon: <Users size={13} />, badge: 4 },
          { id: 'be', label: '백엔드팀',     icon: <Users size={13} />, badge: 3 },
          { id: 'qa', label: 'QA팀',         icon: <Users size={13} />, badge: 2 },
        ],
      },
      {
        id: 'biz', label: '사업본부', icon: <Building2 size={14} />,
        children: [
          { id: 'sales', label: '영업팀',     icon: <Users size={13} />, badge: 5 },
          { id: 'mkt',   label: '마케팅팀',   icon: <Users size={13} />, badge: 3 },
        ],
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════
// TreeTable: 메뉴 분류 데이터 타입
// ═══════════════════════════════════════════════════════════════════
interface MenuCategoryRow extends TreeTableNode {
  id: string;
  parentId?: string;
  name: string;
  code: string;
  active: boolean;
  sortOrder: number;
  price?: number;
  children?: MenuCategoryRow[];
}

const INITIAL_MENU_TABLE: MenuCategoryRow[] = [
  {
    id: 'c1', name: '메인 메뉴', code: 'CAT-001', active: true, sortOrder: 1,
    children: [
      {
        id: 'c1-1', parentId: 'c1', name: '버거', code: 'SUB-001', active: true, sortOrder: 1,
        children: [
          { id: 'c1-1-1', parentId: 'c1-1', name: '스마트버거',    code: 'MENU-001', active: true,  sortOrder: 1, price: 8900 },
          { id: 'c1-1-2', parentId: 'c1-1', name: '더블 치즈버거', code: 'MENU-002', active: true,  sortOrder: 2, price: 10900 },
          { id: 'c1-1-3', parentId: 'c1-1', name: '베이컨버거',    code: 'MENU-003', active: false, sortOrder: 3, price: 9500 },
        ],
      },
      {
        id: 'c1-2', parentId: 'c1', name: '세트 메뉴', code: 'SUB-002', active: true, sortOrder: 2,
        children: [
          { id: 'c1-2-1', parentId: 'c1-2', name: '버거 세트 A', code: 'MENU-004', active: true, sortOrder: 1, price: 12900 },
          { id: 'c1-2-2', parentId: 'c1-2', name: '버거 세트 B', code: 'MENU-005', active: true, sortOrder: 2, price: 14900 },
        ],
      },
    ],
  },
  {
    id: 'c2', name: '사이드', code: 'CAT-002', active: true, sortOrder: 2,
    children: [
      {
        id: 'c2-1', parentId: 'c2', name: '감자류', code: 'SUB-003', active: true, sortOrder: 1,
        children: [
          { id: 'c2-1-1', parentId: 'c2-1', name: '감자튀김 S', code: 'MENU-006', active: true, sortOrder: 1, price: 2900 },
          { id: 'c2-1-2', parentId: 'c2-1', name: '감자튀김 L', code: 'MENU-007', active: true, sortOrder: 2, price: 3900 },
        ],
      },
    ],
  },
  {
    id: 'c3', name: '음료 · 디저트', code: 'CAT-003', active: true, sortOrder: 3,
    children: [
      {
        id: 'c3-1', parentId: 'c3', name: '탄산음료', code: 'SUB-005', active: true, sortOrder: 1,
        children: [
          { id: 'c3-1-1', parentId: 'c3-1', name: '콜라 M',  code: 'MENU-010', active: true, sortOrder: 1, price: 1900 },
          { id: 'c3-1-2', parentId: 'c3-1', name: '사이다',  code: 'MENU-012', active: true, sortOrder: 2, price: 1900 },
        ],
      },
    ],
  },
];

const depthLabel = ['대분류', '중분류', '메뉴'];
const depthColor = [
  'bg-orange-100 text-orange-700',
  'bg-blue-100 text-blue-700',
  'bg-slate-100 text-slate-500',
];

function buildColumns(
  onChange: (id: string, field: keyof MenuCategoryRow, val: unknown) => void,
): TreeTableColumn<MenuCategoryRow>[] {
  return [
    {
      key: 'name',
      header: '이름',
      width: '240px',
      render: (row, { depth }) => (
        <input
          value={row.name}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => onChange(row.id, 'name', e.target.value)}
          className={[
            'w-full bg-transparent outline-none text-sm text-slate-800 border-b border-transparent',
            'hover:border-slate-200 focus:border-[#FF6B2B] transition-colors py-0.5 placeholder:text-slate-300',
            depth === 0 ? 'font-semibold' : '',
          ].join(' ')}
          placeholder={`${depthLabel[depth] ?? '항목'}명 입력`}
        />
      ),
    },
    {
      key: 'code',
      header: '코드',
      width: '110px',
      render: (row) => (
        <input
          value={row.code}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => onChange(row.id, 'code', e.target.value)}
          className="w-full bg-transparent outline-none text-xs font-mono text-slate-400 border-b border-transparent hover:border-slate-200 focus:border-[#FF6B2B] transition-colors py-0.5"
          placeholder="코드"
        />
      ),
    },
    {
      key: 'depth',
      header: '분류',
      width: '72px',
      render: (_, { depth }) => (
        <span className={`text-[11px] font-medium px-1.5 py-0.5 rounded-[3px] ${depthColor[depth] ?? depthColor[2]}`}>
          {depthLabel[depth] ?? '기타'}
        </span>
      ),
    },
    {
      key: 'price',
      header: '가격',
      width: '90px',
      align: 'right',
      render: (row, { depth }) =>
        depth === 2 ? (
          <input
            type="number"
            value={row.price ?? ''}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => onChange(row.id, 'price', Number(e.target.value))}
            className="w-full bg-transparent outline-none text-sm text-right text-slate-700 border-b border-transparent hover:border-slate-200 focus:border-[#FF6B2B] transition-colors py-0.5"
            placeholder="0"
          />
        ) : (
          <span className="text-xs text-slate-200">—</span>
        ),
    },
    {
      key: 'active',
      header: '상태',
      width: '60px',
      align: 'center',
      render: (row) => (
        <Toggle
          size="sm"
          checked={row.active}
          onChange={(v) => onChange(row.id, 'active', v)}
        />
      ),
    },
  ];
}

let _idSeq = 1000;
function nextId() { return `new-${++_idSeq}`; }

// ═══════════════════════════════════════════════════════════════════
// ── 인라인 편집 트리 테이블 (시스템 메뉴 관리 패턴) ──────────────
// ═══════════════════════════════════════════════════════════════════

interface SysMenuRow {
  id: string;
  parentId: string | null;
  depth: number;
  order: number;
  menuCode: string;
  menuName: string;
  menuUrl: string;
  isNew: boolean;
  collapsed: boolean;
}

let _sysUid = 500;
const genSysId = () => `sg${++_sysUid}`;

/** └ / ├ / │ 형태의 CSS 커넥터 */
function SysTreeConnector({ row, rows }: { row: SysMenuRow; rows: SysMenuRow[] }) {
  if (row.depth === 1) return null;

  const buildChain = (r: SysMenuRow): SysMenuRow[] => {
    if (!r.parentId) return [];
    const parent = rows.find((x) => x.id === r.parentId);
    if (!parent) return [];
    return [...buildChain(parent), parent];
  };

  const ancestors = buildChain(row);

  const segments: ('line' | 'empty')[] = ancestors.map((anc) => {
    if (anc.depth === 1) return 'empty';
    const sibs = rows.filter((r) => r.parentId === anc.parentId).sort((a, b) => a.order - b.order);
    return sibs[sibs.length - 1]?.id === anc.id ? 'empty' : 'line';
  });

  const siblings = rows.filter((r) => r.parentId === row.parentId).sort((a, b) => a.order - b.order);
  const isLast = siblings[siblings.length - 1]?.id === row.id;
  const SEG = 16;

  return (
    <div className="flex shrink-0 self-stretch">
      {segments.map((seg, i) => (
        <div key={i} className="relative shrink-0 self-stretch" style={{ width: SEG }}>
          {seg === 'line' && (
            <div className="absolute bg-slate-300" style={{ left: SEG / 2 - 1, top: 0, bottom: 0, width: 1 }} />
          )}
        </div>
      ))}
      <div className="relative shrink-0 self-stretch" style={{ width: SEG }}>
        <div className="absolute bg-slate-300"
          style={{ left: SEG / 2 - 1, top: 0, bottom: isLast ? '50%' : 0, width: 1 }} />
        <div className="absolute bg-slate-300"
          style={{ left: SEG / 2, right: 0, top: '50%', height: 1 }} />
      </div>
    </div>
  );
}

const DEMO_INIT: SysMenuRow[] = [
  { id: 's01', parentId: null,  depth: 1, order: 0, menuCode: 'SYS',         menuName: '시스템 관리',  menuUrl: '',                      isNew: false, collapsed: false },
  { id: 's02', parentId: null,  depth: 1, order: 1, menuCode: 'ORD',         menuName: '주문 관리',    menuUrl: '',                      isNew: false, collapsed: false },
  { id: 's03', parentId: 's01', depth: 2, order: 0, menuCode: 'SYS-BIZ',     menuName: '사업장 관리',  menuUrl: '',                      isNew: false, collapsed: false },
  { id: 's04', parentId: 's01', depth: 2, order: 1, menuCode: 'SYS-COD',     menuName: '코드 관리',    menuUrl: '/system/codes',         isNew: false, collapsed: false },
  { id: 's05', parentId: 's03', depth: 3, order: 0, menuCode: 'SYS-BIZ-LST', menuName: '사업장 조회',  menuUrl: '/system/business',      isNew: false, collapsed: false },
  { id: 's06', parentId: 's03', depth: 3, order: 1, menuCode: 'SYS-BIZ-REG', menuName: '사업장 등록',  menuUrl: '/system/business/new',  isNew: false, collapsed: false },
  { id: 's07', parentId: 's02', depth: 2, order: 0, menuCode: 'ORD-RT',      menuName: '실시간 주문',  menuUrl: '/orders/realtime',      isNew: false, collapsed: false },
];

function InlineTreeTableDemo() {
  const [rows, setRows] = useState<SysMenuRow[]>(DEMO_INIT);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [savedMsg, setSavedMsg] = useState(false);

  const findRow  = (id: string) => rows.find((r) => r.id === id)!;
  const getSibs  = (row: SysMenuRow) =>
    rows.filter((r) => r.parentId === row.parentId).sort((a, b) => a.order - b.order);
  const hasKids  = (id: string) => rows.some((r) => r.parentId === id);

  const getVisible = (): SysMenuRow[] => {
    const result: SysMenuRow[] = [];
    const traverse = (parentId: string | null) => {
      rows.filter((r) => r.parentId === parentId).sort((a, b) => a.order - b.order)
        .forEach((r) => { result.push(r); if (!r.collapsed) traverse(r.id); });
    };
    traverse(null);
    return result;
  };

  const toggleCollapse = (id: string) =>
    setRows((p) => p.map((r) => r.id === id ? { ...r, collapsed: !r.collapsed } : r));

  const addSiblingRow = () => {
    if (!selectedId) {
      const maxOrder = Math.max(-1, ...rows.filter((r) => !r.parentId).map((r) => r.order)) + 1;
      const nr: SysMenuRow = { id: genSysId(), parentId: null, depth: 1, order: maxOrder, menuCode: '', menuName: '', menuUrl: '', isNew: true, collapsed: false };
      setRows((p) => [...p, nr]); setSelectedId(nr.id); return;
    }
    const sel = findRow(selectedId);
    const newOrder = sel.order + 1;
    const updated = rows.map((r) =>
      r.parentId === sel.parentId && r.order >= newOrder ? { ...r, order: r.order + 1 } : r
    );
    const nr: SysMenuRow = { id: genSysId(), parentId: sel.parentId, depth: sel.depth, order: newOrder, menuCode: '', menuName: '', menuUrl: '', isNew: true, collapsed: false };
    setRows([...updated, nr]); setSelectedId(nr.id);
  };

  const addChildRow = () => {
    if (!selectedId) return;
    const sel = findRow(selectedId);
    if (sel.menuUrl || sel.depth >= 5) return;
    const siblings = rows.filter((r) => r.parentId === sel.id);
    const maxOrder = siblings.length > 0 ? Math.max(...siblings.map((r) => r.order)) + 1 : 0;
    const nr: SysMenuRow = { id: genSysId(), parentId: sel.id, depth: sel.depth + 1, order: maxOrder, menuCode: '', menuName: '', menuUrl: '', isNew: true, collapsed: false };
    setRows((p) => [...p.map((r) => r.id === sel.id ? { ...r, collapsed: false } : r), nr]);
    setSelectedId(nr.id);
  };

  const deleteRow = () => {
    if (!selectedId) return;
    const toDelete = new Set<string>();
    const collect = (id: string) => { toDelete.add(id); rows.filter((r) => r.parentId === id).forEach((r) => collect(r.id)); };
    collect(selectedId);
    setRows((p) => p.filter((r) => !toDelete.has(r.id))); setSelectedId(null);
  };

  const moveRow = (dir: 'up' | 'down') => {
    if (!selectedId) return;
    const sel = findRow(selectedId);
    const siblings = getSibs(sel);
    const idx = siblings.findIndex((s) => s.id === selectedId);
    const targetIdx = dir === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= siblings.length) return;
    const target = siblings[targetIdx];
    setRows((p) => p.map((r) =>
      r.id === sel.id ? { ...r, order: target.order } : r.id === target.id ? { ...r, order: sel.order } : r
    ));
  };

  const updateRow = (id: string, field: 'menuCode' | 'menuName' | 'menuUrl', value: string) =>
    setRows((p) => p.map((r) => r.id === id ? { ...r, [field]: value } : r));

  const handleSave = () => {
    setRows((p) => p.map((r) => ({ ...r, isNew: false })));
    setSelectedId(null);
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  const visible = getVisible();
  const sel = selectedId ? findRow(selectedId) : null;
  const canAddChild  = !!(sel && !sel.menuUrl && sel.depth < 5);
  const canMoveUp    = !!(sel && getSibs(sel).findIndex((s) => s.id === sel.id) > 0);
  const canMoveDown  = !!(sel && (() => { const s = getSibs(sel); return s.findIndex((x) => x.id === sel.id) < s.length - 1; })());

  return (
    <div className="border border-slate-200 rounded-[6px] overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-white flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-800">메뉴 목록</span>
          {rows.length > 0 && (
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
              {rows.length}건
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {/* ↑↓ 순서 이동 */}
          <Button variant="icon" size="sm" disabled={!canMoveUp} onClick={() => moveRow('up')}
            title="위로 이동 (같은 depth 형제)">
            <ChevronUp size={14} />
          </Button>
          <Button variant="icon" size="sm" disabled={!canMoveDown} onClick={() => moveRow('down')}
            title="아래로 이동 (같은 depth 형제)">
            <ChevronDown size={14} />
          </Button>

          {/* 행추가 */}
          <Button size="sm" variant="ghost" onClick={addSiblingRow}>
            <span className="text-base leading-none mr-0.5">+</span> 행추가
          </Button>

          {/* 하위추가 */}
          <Button size="sm" variant="ghost" onClick={addChildRow} disabled={!canAddChild}
            title={!sel ? '행을 선택하세요' : sel.menuUrl ? '메뉴주소가 있으면 하위 추가 불가' : sel.depth >= 5 ? '최대 5depth' : '하위 행 추가'}>
            <span className="text-base leading-none mr-0.5">+</span> 하위추가
          </Button>

          {/* 행삭제 */}
          <Button size="sm" variant="ghost" onClick={deleteRow} disabled={!selectedId}
            className="text-red-500 hover:bg-red-50 hover:text-red-600 disabled:text-slate-300 disabled:hover:bg-transparent">
            <span className="text-base leading-none mr-0.5">−</span> 행삭제
          </Button>

          {/* 저장 */}
          <Button size="sm" variant="outline" onClick={handleSave}>
            {savedMsg ? <><Check size={12} className="mr-1" />저장완료</> : '저장'}
          </Button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3 px-4 py-1.5 bg-slate-50 border-b border-slate-100 flex-wrap">
        <span className="flex items-center gap-1.5 text-xs text-slate-500">
          <Link2 size={11} className="text-[#FF6B2B]" /> 링크 설정됨 (하위 추가 불가)
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-500">
          <span className="w-3 h-3 rounded-sm bg-amber-100 border border-amber-200" /> 신규 행
        </span>
        {selectedId && (
          <span className="ml-auto text-xs text-[#FF6B2B] font-medium">
            선택됨: {sel?.menuName || sel?.menuCode || '신규 행'}
          </span>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm table-fixed">
          <colgroup>
            <col style={{ width: '40%' }} />
            <col style={{ width: '28%' }} />
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
              <th className="text-left px-3 py-2 text-xs font-medium text-slate-500">메뉴주소</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visible.map((row) => {
              const isSelected = row.id === selectedId;
              const kids = hasKids(row.id);
              const hasUrl = !!row.menuUrl;
              return (
                <tr key={row.id}
                  onClick={() => setSelectedId(row.id === selectedId ? null : row.id)}
                  className={[
                    'cursor-pointer transition-colors',
                    row.depth === 1 && !row.isNew && !isSelected ? 'bg-slate-50/70' : '',
                    row.isNew ? 'bg-amber-50 hover:bg-amber-100/50' : 'hover:bg-slate-50',
                    isSelected ? 'bg-[#FF6B2B]/5' : '',
                    row.depth === 1 ? 'border-t-2 border-t-slate-200 first:border-t-0' : '',
                  ].filter(Boolean).join(' ')}
                >
                  {/* 메뉴코드 */}
                  <td className={[
                    'py-1.5 pr-2 transition-colors',
                    isSelected ? 'border-l-2 border-l-[#FF6B2B] pl-[5px]' : 'pl-2',
                  ].join(' ')}>
                    <div className="flex items-stretch min-w-0">
                      <SysTreeConnector row={row} rows={rows} />
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleCollapse(row.id); }}
                        className={[
                          'shrink-0 w-[18px] flex items-center justify-center rounded transition-colors self-center',
                          kids
                            ? 'text-slate-400 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10'
                            : 'pointer-events-none opacity-0',
                        ].join(' ')}
                        tabIndex={-1}
                      >
                        {kids ? (row.collapsed ? <ChevronRight size={13} /> : <ChevronDown size={13} />) : null}
                      </button>
                      <div className="flex-1 min-w-0 ml-0.5">
                        <InputField inputSize="sm" value={row.menuCode} readOnly={!row.isNew}
                          onChange={(e) => updateRow(row.id, 'menuCode', e.target.value)}
                          onClick={(e) => e.stopPropagation()} placeholder="MENU_CODE" />
                      </div>
                    </div>
                  </td>

                  {/* 메뉴명 */}
                  <td className="px-2 py-1.5">
                    <InputField inputSize="sm" value={row.menuName}
                      onChange={(e) => updateRow(row.id, 'menuName', e.target.value)}
                      onClick={(e) => e.stopPropagation()} placeholder="메뉴명" />
                  </td>

                  {/* 메뉴주소 */}
                  <td className="px-2 py-1.5">
                    <InputField inputSize="sm" value={row.menuUrl}
                      onChange={(e) => updateRow(row.id, 'menuUrl', e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      placeholder="/path/to/page"
                      leftIcon={hasUrl ? <Link2 size={12} className="text-[#FF6B2B]" /> : undefined} />
                  </td>
                </tr>
              );
            })}
            {visible.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-10 text-center text-sm text-slate-400">
                  등록된 메뉴가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export function TreeGuide() {
  // TreeView state
  const [sel1, setSel1] = useState('');
  const [sel2, setSel2] = useState('m1-1-1');
  const [exp2, setExp2] = useState<string[]>(['m1', 'm2', 'm3']);

  // TreeTable state
  const [menuData, setMenuData] = useState<MenuCategoryRow[]>(INITIAL_MENU_TABLE);

  interface CodeRow extends TreeTableNode {
    code: string; name: string; desc: string; active: boolean;
    children?: CodeRow[];
  }
  const [codeData, setCodeData] = useState<CodeRow[]>([
    {
      id: 'g1', code: 'ORDER_STATUS', name: '주문 상태', desc: '주문 진행 상태', active: true,
      children: [
        { id: 'g1-1', parentId: 'g1', code: 'WAITING',   name: '대기중',   desc: '주문 접수 전', active: true },
        { id: 'g1-2', parentId: 'g1', code: 'PREPARING', name: '준비중',   desc: '조리 진행',   active: true },
        { id: 'g1-3', parentId: 'g1', code: 'DONE',      name: '완료',     desc: '픽업 가능',   active: true },
        { id: 'g1-4', parentId: 'g1', code: 'CANCEL',    name: '취소됨',   desc: '주문 취소',   active: false },
      ],
    },
    {
      id: 'g2', code: 'PAY_TYPE', name: '결제 수단', desc: '결제 방식 코드', active: true,
      children: [
        { id: 'g2-1', parentId: 'g2', code: 'CARD',   name: '카드',      desc: '신용·체크카드', active: true },
        { id: 'g2-2', parentId: 'g2', code: 'CASH',   name: '현금',      desc: '현금 결제',    active: true },
        { id: 'g2-3', parentId: 'g2', code: 'KAKAO',  name: '카카오페이', desc: '간편결제',     active: true },
      ],
    },
    {
      id: 'g3', code: 'MENU_STATUS', name: '메뉴 상태', desc: '메뉴 판매 상태', active: true,
      children: [
        { id: 'g3-1', parentId: 'g3', code: 'SALE',     name: '판매중',   desc: '정상 판매',   active: true },
        { id: 'g3-2', parentId: 'g3', code: 'SOLDOUT',  name: '품절',     desc: '재고 없음',   active: true },
        { id: 'g3-3', parentId: 'g3', code: 'HIDDEN',   name: '숨김',     desc: '앱에서 숨김', active: false },
      ],
    },
  ]);

  const updateMenuField = (id: string, field: keyof MenuCategoryRow, val: unknown) => {
    const patch = (nodes: MenuCategoryRow[]): MenuCategoryRow[] =>
      nodes.map((n) => n.id === id
        ? { ...n, [field]: val }
        : { ...n, children: n.children ? patch(n.children) : undefined }
      );
    setMenuData(patch(menuData));
  };
  const menuColumns = buildColumns(updateMenuField);

  const updateCodeField = (id: string, field: keyof CodeRow, val: unknown) => {
    const patch = (nodes: CodeRow[]): CodeRow[] =>
      nodes.map((n) => n.id === id
        ? { ...n, [field]: val }
        : { ...n, children: n.children ? patch(n.children) : undefined }
      );
    setCodeData(patch(codeData));
  };

  const codeColumns: TreeTableColumn<CodeRow>[] = [
    {
      key: 'code', header: '코드', width: '150px',
      render: (row) => (
        <input value={row.code} onClick={(e) => e.stopPropagation()}
          onChange={(e) => updateCodeField(row.id, 'code', e.target.value)}
          className="w-full bg-transparent outline-none text-xs font-mono text-slate-700 border-b border-transparent hover:border-slate-200 focus:border-[#FF6B2B] transition-colors py-0.5" />
      ),
    },
    {
      key: 'name', header: '이름', width: '120px',
      render: (row) => (
        <input value={row.name} onClick={(e) => e.stopPropagation()}
          onChange={(e) => updateCodeField(row.id, 'name', e.target.value)}
          className="w-full bg-transparent outline-none text-sm text-slate-800 border-b border-transparent hover:border-slate-200 focus:border-[#FF6B2B] transition-colors py-0.5" />
      ),
    },
    {
      key: 'desc', header: '설명',
      render: (row) => (
        <input value={row.desc} onClick={(e) => e.stopPropagation()}
          onChange={(e) => updateCodeField(row.id, 'desc', e.target.value)}
          className="w-full bg-transparent outline-none text-sm text-slate-500 border-b border-transparent hover:border-slate-200 focus:border-[#FF6B2B] transition-colors py-0.5" placeholder="설명 입력" />
      ),
    },
    {
      key: 'active', header: '사용', width: '56px', align: 'center',
      render: (row) => (
        <Toggle size="sm" checked={row.active} onChange={(v) => updateCodeField(row.id, 'active', v)} />
      ),
    },
  ];

  return (
    <div className="p-5 lg:p-6 space-y-4">
      <div>
        <h2 className="text-slate-800">트리 구조</h2>
        <p className="text-sm text-slate-400 mt-1">
          InlineTreeTable (시스템 메뉴 관리) · TreeTable (인라인 편집) · TreeView (네비게이션/분류) 세 가지 트리 컴포넌트
        </p>
      </div>

      {/* ════ INLINE EDIT TREE TABLE ════ */}
      <div className="bg-amber-50 border border-amber-200 rounded-[4px] px-4 py-2">
        <p className="text-sm font-medium text-amber-800">인라인 편집 트리 테이블 — 시스템 메뉴 관리 패턴</p>
        <p className="text-xs text-amber-600 mt-0.5">
          행 클릭 선택 · ↑↓ 형제 이동 · 행추가 / 하위추가 / 행삭제 · CSS 커넥터(└ ├ │) · depth-1 구분선 · 신규행 amber 배경
        </p>
      </div>

      {/* ── 행 상태 ── */}
      <Section title="행(Row) 상태" desc="row에 적용되는 7가지 시각 상태 — 클릭·hover·신규·depth-1 조합">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 rounded-[4px] overflow-hidden">
            <colgroup><col style={{ width: '18%' }} /><col style={{ width: '36%' }} /><col /></colgroup>
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-3 py-2 text-xs font-medium text-slate-500">상태</th>
                <th className="text-left px-3 py-2 text-xs font-medium text-slate-500">시각 표현</th>
                <th className="text-left px-3 py-2 text-xs font-medium text-slate-500">적용 클래스 / 조건</th>
              </tr>
            </thead>
            <tbody>

              {/* default */}
              <tr className="border-b border-slate-100 cursor-default hover:bg-slate-50 transition-colors">
                <td className="pl-3 py-2.5">
                  <span className="text-[11px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-[3px]">default</span>
                </td>
                <td className="px-3 py-2 text-xs text-slate-600">배경 없음 · depth 2~5 기존 행</td>
                <td className="px-3 py-2 text-xs font-mono text-slate-400">cursor-pointer transition-colors</td>
              </tr>

              {/* hover */}
              <tr className="border-b border-slate-100 bg-slate-50 cursor-default">
                <td className="pl-3 py-2.5">
                  <span className="text-[11px] font-mono bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded-[3px]">:hover</span>
                </td>
                <td className="px-3 py-2 text-xs text-slate-600">연한 슬레이트 배경 (시뮬레이션)</td>
                <td className="px-3 py-2 text-xs font-mono text-slate-400">hover:bg-slate-50</td>
              </tr>

              {/* selected */}
              <tr className="border-b border-slate-100 bg-[#FF6B2B]/5 cursor-default">
                <td className="border-l-2 border-l-[#FF6B2B] pl-[5px] py-2.5">
                  <span className="text-[11px] font-mono bg-[#FF6B2B]/10 text-[#FF6B2B] px-1.5 py-0.5 rounded-[3px]">selected</span>
                </td>
                <td className="px-3 py-2 text-xs text-slate-600">주황 5% 배경 + 좌측 2px border · row 클릭으로 토글</td>
                <td className="px-3 py-2 text-xs font-mono text-slate-400">bg-[#FF6B2B]/5 + border-l-2 border-l-[#FF6B2B]</td>
              </tr>

              {/* new */}
              <tr className="border-b border-slate-100 bg-amber-50 hover:bg-amber-100/50 cursor-default">
                <td className="pl-3 py-2.5">
                  <span className="text-[11px] font-mono bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-[3px]">new</span>
                </td>
                <td className="px-3 py-2 text-xs text-slate-600">연한 앰버 배경 · 행추가/하위추가 후 미저장 행 · 저장 시 해제</td>
                <td className="px-3 py-2 text-xs font-mono text-slate-400">bg-amber-50 hover:bg-amber-100/50</td>
              </tr>

              {/* new + selected */}
              <tr className="border-b border-slate-100 bg-amber-50 cursor-default" style={{ background: 'color-mix(in srgb, #FFF7ED 60%, #FF6B2B10)' }}>
                <td className="border-l-2 border-l-[#FF6B2B] pl-[5px] py-2.5">
                  <span className="text-[11px] font-mono bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-[3px]">new + selected</span>
                </td>
                <td className="px-3 py-2 text-xs text-slate-600">신규 행이 선택된 상태 · amber bg + 주황 left border 동시 적용</td>
                <td className="px-3 py-2 text-xs font-mono text-slate-400">bg-amber-50 + bg-[#FF6B2B]/5 + border-l-2 border-l-[#FF6B2B]</td>
              </tr>

              {/* depth-1 */}
              <tr className="border-b-2 border-b-slate-200 border-t-2 border-t-slate-200 bg-slate-50/70 cursor-default hover:bg-slate-50 transition-colors">
                <td className="pl-3 py-2.5">
                  <span className="text-[11px] font-mono bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded-[3px]">depth-1</span>
                </td>
                <td className="px-3 py-2 text-xs text-slate-600">최상위 카테고리 · 슬레이트 배경 + 상단 2px 구분선 · 그룹 시각 분리</td>
                <td className="px-3 py-2 text-xs font-mono text-slate-400">bg-slate-50/70 border-t-2 border-t-slate-200</td>
              </tr>

              {/* depth-1 selected */}
              <tr className="border-t-2 border-t-slate-200 bg-[#FF6B2B]/5 cursor-default">
                <td className="border-l-2 border-l-[#FF6B2B] pl-[5px] py-2.5">
                  <span className="text-[11px] font-mono bg-[#FF6B2B]/10 text-[#FF6B2B] px-1.5 py-0.5 rounded-[3px]">depth-1 selected</span>
                </td>
                <td className="px-3 py-2 text-xs text-slate-600">최상위 행 선택 · selected bg가 depth-1 bg를 override</td>
                <td className="px-3 py-2 text-xs font-mono text-slate-400">bg-[#FF6B2B]/5 override · border-l-2 border-l-[#FF6B2B]</td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* 행 선택 규칙 */}
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-5 mb-3">행 선택 · 해제 규칙</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            ['클릭 → 선택', 'setSelectedId(id) · 재클릭 시 setSelectedId(null) 해제'],
            ['저장 시 해제', '저장 버튼 클릭 → isNew=false 처리 + setSelectedId(null)'],
            ['자식 포함 삭제', '행삭제 시 선택 row + 모든 자손 row를 재귀적으로 Set에 수집 후 filter'],
            ['expand 자동', '하위추가 시 부모 collapsed=true면 자동으로 collapsed=false'],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-2 p-2.5 bg-slate-50 rounded-[4px] border border-slate-100">
              <span className="font-mono text-[#FF6B2B] shrink-0 text-[11px] mt-0.5 whitespace-nowrap">{title}</span>
              <span className="text-slate-500 text-[11px]">{desc}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 툴바 버튼 상태 ── */}
      <Section title="툴바 버튼 상태" desc="5종 버튼의 enabled / disabled / hover / active / focus 조건">

        {/* 활성화 조건 표 */}
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">활성화 조건</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs border border-slate-200 rounded-[4px] overflow-hidden">
            <colgroup>
              <col style={{ width: '13%' }} />
              <col style={{ width: '14%' }} />
              <col />
              <col style={{ width: '30%' }} />
            </colgroup>
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-3 py-2 font-medium text-slate-500">버튼</th>
                <th className="text-left px-3 py-2 font-medium text-slate-500">variant</th>
                <th className="text-left px-3 py-2 font-medium text-slate-500">enabled 조건</th>
                <th className="text-left px-3 py-2 font-medium text-slate-500">disabled 조건</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ['↑ 위로', 'icon', '선택됨 + 형제 중 첫 번째가 아닐 때', '미선택 · 형제 중 첫 번째 · 단독 행'],
                ['↓ 아래로', 'icon', '선택됨 + 형제 중 마지막이 아닐 때', '미선택 · 형제 중 마지막 · 단독 행'],
                ['+ 행추가', 'ghost', '항상 enabled · 미선택 시 최상위(depth 1) 추가', '—'],
                ['+ 하위추가', 'ghost', '선택됨 + menuUrl 없음 + depth < 5', '미선택 · menuUrl 있음 · depth ≥ 5'],
                ['− 행삭제', 'ghost (red)', '선택됨', '미선택 시'],
                ['저장', 'outline', '항상 enabled', '—'],
              ].map(([btn, variant, en, dis]) => (
                <tr key={String(btn)} className="hover:bg-slate-50 transition-colors">
                  <td className="px-3 py-2 font-mono text-slate-700">{btn}</td>
                  <td className="px-3 py-2">
                    <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-[3px] font-mono">{variant}</span>
                  </td>
                  <td className="px-3 py-2 text-slate-600">{en}</td>
                  <td className="px-3 py-2 text-slate-400">{dis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 시각 상태 시뮬레이션 */}
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">시각 상태 시뮬레이션</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* ↑↓ icon */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-700">
              ↑↓ 순서 이동{' '}
              <code className="text-[10px] bg-slate-100 text-slate-500 px-1 py-0.5 rounded">variant=&quot;icon&quot;</code>
            </p>
            <div className="flex flex-col gap-2 p-3 bg-slate-50 rounded-[4px] border border-slate-200">
              <div className="flex items-center gap-2">
                <Button variant="icon" size="sm"><ChevronUp size={14} /></Button>
                <span className="text-xs text-slate-500">enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="icon" size="sm" disabled><ChevronUp size={14} /></Button>
                <span className="text-xs text-slate-400">disabled</span>
              </div>
              <div className="border-t border-slate-200 pt-2 space-y-1">
                <p className="text-[10px] text-slate-400"><code className="bg-slate-200 px-1 rounded">hover</code> → bg-slate-100</p>
                <p className="text-[10px] text-slate-400"><code className="bg-slate-200 px-1 rounded">active</code> → bg-slate-200</p>
                <p className="text-[10px] text-slate-400"><code className="bg-slate-200 px-1 rounded">focus</code> → ring-2 ring-slate-400/30</p>
                <p className="text-[10px] text-slate-400"><code className="bg-slate-200 px-1 rounded">disabled</code> → opacity-40 pointer-events-none</p>
              </div>
            </div>
          </div>

          {/* ghost 행추가/하위추가 */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-700">
              행추가 / 하위추가{' '}
              <code className="text-[10px] bg-slate-100 text-slate-500 px-1 py-0.5 rounded">variant=&quot;ghost&quot;</code>
            </p>
            <div className="flex flex-col gap-2 p-3 bg-slate-50 rounded-[4px] border border-slate-200">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <span className="text-base leading-none mr-0.5">+</span> 행추가
                </Button>
                <span className="text-xs text-slate-500">항상 enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <span className="text-base leading-none mr-0.5">+</span> 하위추가
                </Button>
                <span className="text-xs text-slate-500">enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" disabled>
                  <span className="text-base leading-none mr-0.5">+</span> 하위추가
                </Button>
                <span className="text-xs text-slate-400">disabled</span>
              </div>
              <div className="border-t border-slate-200 pt-2 space-y-1">
                <p className="text-[10px] text-slate-400"><code className="bg-slate-200 px-1 rounded">hover</code> → bg-slate-100 text-slate-700</p>
                <p className="text-[10px] text-slate-400"><code className="bg-slate-200 px-1 rounded">active</code> → bg-slate-200</p>
                <p className="text-[10px] text-slate-400"><code className="bg-slate-200 px-1 rounded">disabled</code> → opacity-40 cursor-not-allowed</p>
              </div>
            </div>
          </div>

          {/* ghost-red 행삭제 + outline 저장 */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-700">행삭제 / 저장</p>
            <div className="flex flex-col gap-2 p-3 bg-slate-50 rounded-[4px] border border-slate-200">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50 hover:text-red-600">
                  <span className="text-base leading-none mr-0.5">−</span> 행삭제
                </Button>
                <span className="text-xs text-slate-500">enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" disabled className="text-slate-300 hover:bg-transparent">
                  <span className="text-base leading-none mr-0.5">−</span> 행삭제
                </Button>
                <span className="text-xs text-slate-400">disabled</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">저장</Button>
                <span className="text-xs text-slate-500">기본</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Check size={12} className="mr-1" />저장완료
                </Button>
                <span className="text-xs text-slate-500">2초 후 복원</span>
              </div>
              <div className="border-t border-slate-200 pt-2 space-y-1">
                <p className="text-[10px] text-slate-400"><code className="bg-slate-200 px-1 rounded">행삭제 hover</code> → bg-red-50 text-red-600</p>
                <p className="text-[10px] text-slate-400"><code className="bg-slate-200 px-1 rounded">행삭제 disabled</code> → text-slate-300 hover:bg-transparent</p>
                <p className="text-[10px] text-slate-400"><code className="bg-slate-200 px-1 rounded">저장 hover</code> → bg-slate-50</p>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* ── 입력 필드 & 커넥터 상태 ── */}
      <Section title="입력 필드 · 트리 커넥터 상태" desc="셀 내 InputField 상태 · readOnly vs editable · CSS 커넥터 렌더 조건">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* InputField */}
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">InputField 상태</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-xs border border-slate-200 rounded-[4px] overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-2.5 py-2 font-medium text-slate-500 w-24">상태</th>
                    <th className="text-left px-2.5 py-2 font-medium text-slate-500 w-28">컬럼</th>
                    <th className="text-left px-2.5 py-2 font-medium text-slate-500">조건 / 동작</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['readOnly', '메뉴코드', '기존 행(isNew=false) · bg-slate-50 · cursor default · 수정 불가'],
                    ['editable', '메뉴코드', '신규 행(isNew=true) · 일반 InputField · 저장 후 readOnly 전환'],
                    ['editable', '메뉴명', '모든 행 항상 편집 가능'],
                    ['editable', '메뉴주소', '모든 행 항상 편집 가능 · 값 입력 시 Link2 아이콘 표시'],
                    ['focus', '편집 가능 필드', 'border-[#FF6B2B] + ring-1 ring-[#FF6B2B]/20'],
                    ['hover', '편집 가능 필드', 'border-slate-300 transition-colors'],
                    ['e.stopPropagation', '모든 InputField', '클릭 시 row 선택 이벤트 전파 차단'],
                  ].map(([state, col, cond]) => (
                    <tr key={String(state) + String(col)} className="hover:bg-slate-50">
                      <td className="px-2.5 py-2 font-mono text-[11px] text-slate-700">{state}</td>
                      <td className="px-2.5 py-2 text-slate-600">{col}</td>
                      <td className="px-2.5 py-2 text-slate-400">{cond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">미리보기</p>
            <div className="space-y-2 p-3 bg-slate-50 rounded-[4px] border border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-36"><InputField inputSize="sm" value="SYS-BIZ" readOnly /></div>
                <span className="text-xs text-slate-400">readOnly (기존 행 메뉴코드)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-36"><InputField inputSize="sm" value="" placeholder="MENU_CODE" /></div>
                <span className="text-xs text-slate-400">editable (신규 행 메뉴코드)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-48">
                  <InputField inputSize="sm" value="/system/business"
                    leftIcon={<Link2 size={12} className="text-[#FF6B2B]" />} readOnly />
                </div>
                <span className="text-xs text-slate-400">menuUrl 있음 → Link2 아이콘</span>
              </div>
            </div>
          </div>

          {/* TreeConnector */}
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">CSS 트리 커넥터 렌더 조건</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-xs border border-slate-200 rounded-[4px] overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-2.5 py-2 font-medium text-slate-500 w-28">기호</th>
                    <th className="text-left px-2.5 py-2 font-medium text-slate-500">렌더 조건</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['없음', 'depth === 1 → SysTreeConnector null 반환'],
                    ['└ (isLast)', '형제 중 마지막 row · 수직선 bottom: 50% 까지'],
                    ['├ (mid)', '형제 중 마지막이 아닌 row · 수직선 끝까지'],
                    ['│ 조상선', '조상이 형제 중 마지막 아닐 때 · 빈 div에 수직선'],
                    ['gap (빈칸)', '조상이 형제 중 마지막일 때 · 선 없는 공백 유지'],
                    ['depth-1 조상', '항상 empty 처리 → 수직선 생략'],
                  ].map(([sym, cond]) => (
                    <tr key={String(sym)} className="hover:bg-slate-50">
                      <td className="px-2.5 py-2 font-mono text-slate-700">{sym}</td>
                      <td className="px-2.5 py-2 text-slate-500">{cond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">접기/펼치기 버튼 상태</p>
            <div className="p-3 bg-slate-50 rounded-[4px] border border-slate-200 space-y-1.5 text-xs text-slate-600">
              <p>
                <code className="bg-slate-200 px-1 rounded text-[10px]">hasChildren=true</code>
                {' '}→ ChevronDown(펼침) / ChevronRight(접힘) 렌더
              </p>
              <p>
                <code className="bg-slate-200 px-1 rounded text-[10px]">hasChildren=false</code>
                {' '}→ opacity-0 pointer-events-none (레이아웃 공간 유지)
              </p>
              <p>
                <code className="bg-slate-200 px-1 rounded text-[10px]">hover</code>
                {' '}→ text-[#FF6B2B] bg-[#FF6B2B]/10
              </p>
              <p>
                <code className="bg-slate-200 px-1 rounded text-[10px]">e.stopPropagation()</code>
                {' '}→ 클릭 시 row 선택 이벤트 전파 차단
              </p>
              <p>
                <code className="bg-slate-200 px-1 rounded text-[10px]">tabIndex={-1}</code>
                {' '}→ 키보드 포커스 제외
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 인터랙티브 데모 ── */}
      <Section title="인터랙티브 데모" desc="모든 상태를 직접 확인 — 행 클릭·추가·하위추가·삭제·순서이동·저장">
        <InlineTreeTableDemo />
        <div className="mt-4 p-3 bg-amber-50 rounded-[4px] border border-amber-100 text-xs text-slate-600 space-y-1.5">
          <p className="font-medium text-amber-800 mb-1">조작 가이드</p>
          <p>• <strong>행 클릭</strong> → 선택 (주황 left border + 연한 주황 배경) · 재클릭 → 해제 · Legend에 선택된 메뉴명 표시</p>
          <p>• <strong>+ 행추가</strong> → 선택 행 바로 아래 형제 추가 · 미선택 시 최상위(depth-1)에 추가 · 추가된 행 자동 선택 · amber 배경</p>
          <p>• <strong>+ 하위추가</strong> → 선택 행의 직계 자식 추가 · menuUrl 있으면 비활성 · depth 5면 비활성 · 부모 자동 펼침</p>
          <p>• <strong>− 행삭제</strong> → 선택 행 + 모든 자손 재귀 삭제 · 미선택 시 비활성 · 삭제 후 선택 해제</p>
          <p>• <strong>↑ ↓</strong> → 같은 depth 형제끼리 순서 교환 · 경계(첫째/마지막)에서 자동 비활성</p>
          <p>• <strong>▶ / ▼</strong> → depth 1+ 행의 자식 접기/펼치기 · e.stopPropagation()으로 행 선택과 독립</p>
          <p>• <strong>저장</strong> → 모든 amber(신규) 행 isNew=false 처리 → 메뉴코드 readOnly 전환 · 선택 해제 · 2초 후 "저장완료" 초기화</p>
        </div>
      </Section>

      {/* ════ TREE TABLE ════ */}
      <div className="bg-[#FF6B2B]/5 border border-[#FF6B2B]/20 rounded-[4px] px-4 py-2 mt-2">
        <p className="text-sm font-medium text-[#FF6B2B]">TreeTable — 테이블 리스트 형식 트리</p>
        <p className="text-xs text-slate-500 mt-0.5">행 hover 시 ↑↓ 이동 · 하위추가 · 삭제 버튼 표시. 인라인 편집 가능</p>
      </div>

      <Section title="메뉴 분류 관리 (3depth)" desc="대분류 → 중분류 → 메뉴 · 인라인 편집 · 행 이동 · 하위 추가">
        <TreeTable<MenuCategoryRow>
          columns={menuColumns}
          data={menuData}
          onChange={setMenuData}
          addableDepths={[0, 1]}
          addLabel={(d) => d === 0 ? '중분류' : '메뉴'}
          maxDepth={2}
          createRow={(parentId, depth) => ({
            id: nextId(),
            parentId,
            name: '',
            code: ['CAT', 'SUB', 'MENU'][depth] + '-NEW',
            active: true,
            sortOrder: 99,
            ...(depth === 2 ? { price: 0 } : { children: [] }),
          })}
        />
      </Section>

      <Section title="공통코드 관리 (2depth)" desc="코드 그룹 → 코드 항목 · 행 추가·삭제·이동">
        <TreeTable<CodeRow>
          columns={codeColumns}
          data={codeData}
          onChange={setCodeData}
          addableDepths={[0]}
          addLabel={() => '코드 추가'}
          maxDepth={1}
          createRow={(parentId, depth) => ({
            id: nextId(),
            parentId,
            code: depth === 0 ? 'GRP_NEW' : 'CODE_NEW',
            name: '',
            desc: '',
            active: true,
            ...(depth === 0 ? { children: [] } : {}),
          })}
        />
      </Section>

      {/* ════ TREE VIEW ════ */}
      <div className="bg-slate-800/5 border border-slate-200 rounded-[4px] px-4 py-2 mt-2">
        <p className="text-sm font-medium text-slate-700">TreeView — 네비게이션 · 분류 트리 (읽기/선택용)</p>
      </div>

      <Section title="파일 시스템 트리 (3depth+)" desc="아이콘 · 클릭 선택 · depth별 자동 펼침">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-medium text-slate-500 mb-3">defaultExpandDepth=1</p>
            <div className="border border-slate-200 rounded-[4px] p-2">
              <TreeView nodes={FILE_TREE} defaultExpandDepth={1} selected={sel1} onSelect={setSel1} />
            </div>
            {sel1 && <p className="text-xs text-slate-400 mt-2">선택: <code className="text-[#FF6B2B]">{sel1}</code></p>}
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 mb-3">전체 펼침 (defaultExpandDepth=99)</p>
            <div className="border border-slate-200 rounded-[4px] p-2">
              <TreeView nodes={FILE_TREE} defaultExpandDepth={99} selected={sel1} onSelect={setSel1} />
            </div>
          </div>
        </div>
      </Section>

      <Section title="메뉴 카테고리 트리" desc="배지(badge) · 비활성(disabled) · 컨트롤드 펼침">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-medium text-slate-500 mb-3">아이콘 + 배지 + 선택</p>
            <div className="border border-slate-200 rounded-[4px] p-2">
              <TreeView nodes={MENU_TREE} defaultExpandDepth={99} selected={sel2} onSelect={setSel2} />
            </div>
            {sel2 && <p className="text-xs text-slate-400 mt-2">선택: <code className="text-[#FF6B2B]">{sel2}</code></p>}
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 mb-3">컨트롤드 펼침 버튼 제어</p>
            <div className="flex gap-1.5 mb-2">
              <Button variant="ghost" size="sm" onClick={() => setExp2(MENU_TREE.map((n) => n.id))}>1depth</Button>
              <Button variant="ghost" size="sm" onClick={() => {
                const ids: string[] = [];
                const walk = (ns: TreeNode[]) => ns.forEach((n) => { if (n.children?.length) { ids.push(n.id); walk(n.children); } });
                walk(MENU_TREE); setExp2(ids);
              }}>전체 펼치기</Button>
              <Button variant="ghost" size="sm" onClick={() => setExp2([])}>전체 접기</Button>
            </div>
            <div className="border border-slate-200 rounded-[4px] p-2">
              <TreeView nodes={MENU_TREE} expanded={exp2} onExpandChange={setExp2} selected={sel2} onSelect={setSel2} />
            </div>
          </div>
        </div>
      </Section>

      <Section title="조직도 · 사이드 패널 패턴" desc="배지로 인원 수 표시 · 필터 패널에 활용">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-medium text-slate-500 mb-3">조직도 (3depth)</p>
            <div className="border border-slate-200 rounded-[4px] p-2">
              <TreeView nodes={ORG_TREE} defaultExpandDepth={99} indent={16} />
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 mb-3">사이드바 패널 패턴</p>
            <div className="flex gap-3">
              <div className="w-48 shrink-0 bg-slate-50 border border-slate-200 rounded-[6px] p-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">카테고리</p>
                <TreeView nodes={MENU_TREE} defaultExpandDepth={1} selected={sel2} onSelect={setSel2} dense />
              </div>
              <div className="flex-1 border border-slate-200 rounded-[6px] p-4 bg-white">
                <p className="text-sm text-slate-500 mb-1">선택</p>
                <p className="text-sm font-medium text-[#FF6B2B]">{sel2 || '(없음)'}</p>
                <p className="text-xs text-slate-400 mt-3">선택한 카테고리의 메뉴 목록이 표시됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
