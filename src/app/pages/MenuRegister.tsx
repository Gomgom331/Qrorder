import React, { useState } from 'react';
import {
  ChevronRight, ChevronDown, Plus, Pencil, Trash2, GripVertical,
  Search, X, ChevronUp,
} from 'lucide-react';
import { Tag } from '../components/ui/Tag';
import { Toggle } from '../components/ui/Toggle';
import { Button } from '../components/ui/Button';
import { Pagination } from '../components/ui/Pagination';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { InputField } from '../components/ui/InputField';
import { DropdownSelect } from '../components/ui/DropdownSelect';

// ─── Types ───────────────────────────────────────────────────────
interface MenuNode {
  id: string;
  level: 1 | 2 | 3;
  name: string;
  code: string;
  status: 'active' | 'inactive';
  sortOrder: number;
  price?: number;
  unit?: string;
  stock?: number;
  discountType?: 'none' | 'rate' | 'price'; // level 3
  discountValue?: number;                    // % 또는 할인가(원)
  updatedAt: string;
  parentId?: string;
  children?: MenuNode[];
}

// ─── Mock data ────────────────────────────────────────────────────
const INITIAL_DATA: MenuNode[] = [
  {
    id: '1', level: 1, name: '메인 메뉴', code: 'CAT-001', status: 'active', sortOrder: 1, updatedAt: '2026-03-10',
    children: [
      {
        id: '1-1', level: 2, name: '버거', code: 'SUB-001', status: 'active', sortOrder: 1, updatedAt: '2026-03-10', parentId: '1',
        children: [
          { id: '1-1-1', level: 3, name: '스마트버거', code: 'MENU-001', status: 'active', price: 8900, unit: '개', stock: 999, sortOrder: 1, updatedAt: '2026-03-10', parentId: '1-1', discountType: 'rate', discountValue: 15 },
          { id: '1-1-2', level: 3, name: '더블 치즈버거', code: 'MENU-002', status: 'active', price: 10900, unit: '개', stock: 999, sortOrder: 2, updatedAt: '2026-03-11', parentId: '1-1', discountType: 'price', discountValue: 9500 },
          { id: '1-1-3', level: 3, name: '베이컨 머쉬룸버거', code: 'MENU-003', status: 'inactive', price: 9500, unit: '개', stock: 0, sortOrder: 3, updatedAt: '2026-03-12', parentId: '1-1', discountType: 'none' },
        ],
      },
      {
        id: '1-2', level: 2, name: '세트 메뉴', code: 'SUB-002', status: 'active', sortOrder: 2, updatedAt: '2026-03-10', parentId: '1',
        children: [
          { id: '1-2-1', level: 3, name: '버거 세트 A', code: 'MENU-004', status: 'active', price: 12900, unit: '세트', stock: 999, sortOrder: 1, updatedAt: '2026-03-10', parentId: '1-2', discountType: 'rate', discountValue: 10 },
          { id: '1-2-2', level: 3, name: '버거 세트 B', code: 'MENU-005', status: 'active', price: 14900, unit: '세트', stock: 999, sortOrder: 2, updatedAt: '2026-03-10', parentId: '1-2', discountType: 'none' },
        ],
      },
    ],
  },
  {
    id: '2', level: 1, name: '사이드', code: 'CAT-002', status: 'active', sortOrder: 2, updatedAt: '2026-03-10',
    children: [
      {
        id: '2-1', level: 2, name: '감자류', code: 'SUB-003', status: 'active', sortOrder: 1, updatedAt: '2026-03-10', parentId: '2',
        children: [
          { id: '2-1-1', level: 3, name: '감자튀김 (S)', code: 'MENU-006', status: 'active', price: 2900, unit: '개', stock: 50, sortOrder: 1, updatedAt: '2026-03-10', parentId: '2-1', discountType: 'none' },
          { id: '2-1-2', level: 3, name: '감자튀김 (L)', code: 'MENU-007', status: 'active', price: 3900, unit: '개', stock: 50, sortOrder: 2, updatedAt: '2026-03-10', parentId: '2-1', discountType: 'price', discountValue: 3200 },
          { id: '2-1-3', level: 3, name: '어니언링', code: 'MENU-008', status: 'inactive', price: 3500, unit: '개', stock: 0, sortOrder: 3, updatedAt: '2026-03-12', parentId: '2-1', discountType: 'none' },
        ],
      },
      {
        id: '2-2', level: 2, name: '샐러드', code: 'SUB-004', status: 'inactive', sortOrder: 2, updatedAt: '2026-03-10', parentId: '2',
        children: [
          { id: '2-2-1', level: 3, name: '그린 샐러드', code: 'MENU-009', status: 'inactive', price: 5900, unit: '개', stock: 0, sortOrder: 1, updatedAt: '2026-03-10', parentId: '2-2', discountType: 'none' },
        ],
      },
    ],
  },
  {
    id: '3', level: 1, name: '음료 · 디저트', code: 'CAT-003', status: 'active', sortOrder: 3, updatedAt: '2026-03-10',
    children: [
      {
        id: '3-1', level: 2, name: '탄산음료', code: 'SUB-005', status: 'active', sortOrder: 1, updatedAt: '2026-03-10', parentId: '3',
        children: [
          { id: '3-1-1', level: 3, name: '콜라 (M)', code: 'MENU-010', status: 'active', price: 1900, unit: '잔', stock: 200, sortOrder: 1, updatedAt: '2026-03-10', parentId: '3-1', discountType: 'none' },
          { id: '3-1-2', level: 3, name: '콜라 (L)', code: 'MENU-011', status: 'active', price: 2500, unit: '잔', stock: 200, sortOrder: 2, updatedAt: '2026-03-10', parentId: '3-1', discountType: 'none' },
          { id: '3-1-3', level: 3, name: '사이다', code: 'MENU-012', status: 'active', price: 1900, unit: '잔', stock: 200, sortOrder: 3, updatedAt: '2026-03-10', parentId: '3-1', discountType: 'none' },
          { id: '3-1-4', level: 3, name: '제로콜라', code: 'MENU-013', status: 'active', price: 1900, unit: '잔', stock: 150, sortOrder: 4, updatedAt: '2026-03-13', parentId: '3-1', discountType: 'none' },
        ],
      },
      {
        id: '3-2', level: 2, name: '커피', code: 'SUB-006', status: 'active', sortOrder: 2, updatedAt: '2026-03-10', parentId: '3',
        children: [
          { id: '3-2-1', level: 3, name: '아메리카노', code: 'MENU-014', status: 'active', price: 3500, unit: '잔', stock: 100, sortOrder: 1, updatedAt: '2026-03-10', parentId: '3-2', discountType: 'rate', discountValue: 20 },
          { id: '3-2-2', level: 3, name: '카페라떼', code: 'MENU-015', status: 'active', price: 4000, unit: '잔', stock: 80, sortOrder: 2, updatedAt: '2026-03-10', parentId: '3-2', discountType: 'none' },
        ],
      },
      {
        id: '3-3', level: 2, name: '디저트', code: 'SUB-007', status: 'active', sortOrder: 3, updatedAt: '2026-03-10', parentId: '3',
        children: [
          { id: '3-3-1', level: 3, name: '소프트아이스크림', code: 'MENU-016', status: 'active', price: 1500, unit: '개', stock: 99, sortOrder: 1, updatedAt: '2026-03-14', parentId: '3-3', discountType: 'none' },
        ],
      },
    ],
  },
];

// ─── Level config ─────────────────────────────────────────────────
const levelConfig = {
  1: { label: '대분류', badge: { color: 'orange' as const, variant: 'soft' as const }, indent: 0, rowBg: 'bg-slate-50', textWeight: 'font-semibold' },
  2: { label: '중분류', badge: { color: 'blue' as const,   variant: 'soft' as const }, indent: 24, rowBg: 'bg-white', textWeight: '' },
  3: { label: '메뉴',   badge: { color: 'gray' as const,   variant: 'soft' as const }, indent: 48, rowBg: 'bg-white', textWeight: '' },
};

// ─── Helpers ─────────────────────────────────────────────────────
function fmtPrice(n?: number) {
  return n !== undefined ? `₩${n.toLocaleString()}` : '—';
}
function newId() {
  return `new-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
}

/** 할인 적용가 계산 */
function calcSalePrice(price: number | undefined, type?: string, value?: number): number | null {
  if (!price || !type || type === 'none' || value === undefined || value <= 0) return null;
  if (type === 'rate') return Math.round(price * (1 - value / 100));
  if (type === 'price') return value;
  return null;
}

/** 할인율 계산 (표시용) */
function calcDiscountRate(price: number | undefined, salePrice: number | null): number | null {
  if (!price || !salePrice) return null;
  return Math.round((1 - salePrice / price) * 100);
}

// ─── Row component ────────────────────────────────────────────────
interface RowProps {
  node: MenuNode;
  expanded: Set<string>;
  onToggleExpand: (id: string) => void;
  onStatusChange: (id: string, level: 1|2|3, status: 'active'|'inactive', parentId?: string) => void;
  onAddChild: (parentId: string, parentLevel: 1|2) => void;
  onEdit: (node: MenuNode) => void;
  onDelete: (id: string, level: 1|2|3, parentId?: string) => void;
  depth?: number;
}

function MenuRow({ node, expanded, onToggleExpand, onStatusChange, onAddChild, onEdit, onDelete, depth = 0 }: RowProps) {
  const cfg = levelConfig[node.level];
  const isExpanded = expanded.has(node.id);
  const hasChildren = (node.children?.length ?? 0) > 0;

  return (
    <>
      <tr className={`${cfg.rowBg} border-b border-slate-100 hover:bg-orange-50/30 group transition-colors`}>
        {/* 이름 */}
        <td className="py-2.5 pl-4 pr-2">
          <div className="flex items-center" style={{ paddingLeft: `${cfg.indent}px` }}>
            {/* Expand toggle */}
            {node.level < 3 ? (
              <button
                onClick={() => onToggleExpand(node.id)}
                className="mr-1.5 text-slate-400 hover:text-slate-700 p-0.5 rounded transition-colors shrink-0"
              >
                {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
            ) : (
              <span className="mr-1.5 w-5 shrink-0" />
            )}
            {/* Drag handle */}
            <GripVertical size={14} className="text-slate-200 group-hover:text-slate-300 mr-1.5 shrink-0 cursor-grab" />
            <span className={`text-sm text-slate-800 ${cfg.textWeight} truncate`}>{node.name}</span>
          </div>
        </td>
        {/* 코드 */}
        <td className="py-2.5 px-3">
          <span className="text-xs font-mono text-slate-400">{node.code}</span>
        </td>
        {/* 분류 */}
        <td className="py-2.5 px-3">
          <Tag color={cfg.badge.color} variant={cfg.badge.variant} size="sm">{cfg.label}</Tag>
        </td>
        {/* 가격 */}
        <td className="py-2.5 px-3 text-right">
          {node.level === 3
            ? <span className="text-sm text-slate-700">{fmtPrice(node.price)}</span>
            : <span className="text-xs text-slate-300">—</span>
          }
        </td>
        {/* 할인 */}
        <td className="py-2.5 px-3">
          {node.level === 3 && node.discountType && node.discountType !== 'none' ? (() => {
            const salePrice = calcSalePrice(node.price, node.discountType, node.discountValue);
            const rate = calcDiscountRate(node.price, salePrice);
            return (
              <div className="flex flex-col gap-0.5 items-start">
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-red-500 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded-[3px] leading-none whitespace-nowrap">
                  -{rate}%
                </span>
                <span className="text-xs font-medium text-slate-700 tabular-nums">{fmtPrice(salePrice ?? undefined)}</span>
              </div>
            );
          })() : (
            <span className="text-xs text-slate-300">—</span>
          )}
        </td>
        {/* 재고 */}
        <td className="py-2.5 px-3 text-center">
          {node.level === 3 ? (
            <span className={`text-xs ${(node.stock ?? 0) === 0 ? 'text-red-400' : 'text-slate-600'}`}>
              {node.stock === 999 ? '∞' : node.stock}
            </span>
          ) : <span className="text-xs text-slate-300">—</span>}
        </td>
        {/* 순서 */}
        <td className="py-2.5 px-3 text-center">
          <span className="text-xs text-slate-400">{node.sortOrder}</span>
        </td>
        {/* 상태 */}
        <td className="py-2.5 px-3">
          <Toggle
            size="sm"
            checked={node.status === 'active'}
            onChange={(checked) =>
              onStatusChange(node.id, node.level, checked ? 'active' : 'inactive', node.parentId)
            }
          />
        </td>
        {/* 수정일 */}
        <td className="py-2.5 px-3">
          <span className="text-xs text-slate-400">{node.updatedAt}</span>
        </td>
        {/* 액션 */}
        <td className="py-2.5 px-3 pr-4">
          <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
            {node.level < 3 && (
              <button
                onClick={() => onAddChild(node.id, node.level as 1 | 2)}
                className="flex items-center gap-0.5 px-1.5 py-1 text-xs text-[#FF6B2B] hover:bg-[#FF6B2B]/10 rounded-[3px] transition-colors whitespace-nowrap"
                title={node.level === 1 ? '중분류 추가' : '메뉴 추가'}
              >
                <Plus size={11} />
                {node.level === 1 ? '중분류' : '메뉴'}
              </button>
            )}
            <button
              onClick={() => onEdit(node)}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-[3px] transition-colors"
              title="수정"
            >
              <Pencil size={13} />
            </button>
            <button
              onClick={() => onDelete(node.id, node.level, node.parentId)}
              className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-[3px] transition-colors"
              title="삭제"
            >
              <Trash2 size={13} />
            </button>
          </div>
        </td>
      </tr>

      {/* Children */}
      {isExpanded && node.children?.map((child) => (
        <MenuRow
          key={child.id}
          node={child}
          expanded={expanded}
          onToggleExpand={onToggleExpand}
          onStatusChange={onStatusChange}
          onAddChild={onAddChild}
          onEdit={onEdit}
          onDelete={onDelete}
          depth={depth + 1}
        />
      ))}
    </>
  );
}

// ─── Edit modal content ──────────────────────────────────────────
function EditForm({ node, onClose, onSave }: {
  node: Partial<MenuNode> & { level: 1|2|3 };
  onClose: () => void;
  onSave: (data: Partial<MenuNode>) => void;
}) {
  const [name, setName] = useState(node.name ?? '');
  const [code, setCode] = useState(node.code ?? '');
  const [price, setPrice] = useState(String(node.price ?? ''));
  const [stock, setStock] = useState(String(node.stock ?? ''));
  const [unit, setUnit] = useState(node.unit ?? '개');
  const [status, setStatus] = useState<'active'|'inactive'>(node.status ?? 'active');
  const [discountType, setDiscountType] = useState<'none'|'rate'|'price'>(node.discountType ?? 'none');
  const [discountValue, setDiscountValue] = useState(String(node.discountValue ?? ''));

  const priceNum = Number(price) || 0;
  const discountValueNum = Number(discountValue) || 0;
  const previewSalePrice = calcSalePrice(priceNum || undefined, discountType, discountValueNum || undefined);
  const previewRate = calcDiscountRate(priceNum || undefined, previewSalePrice);

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag color={levelConfig[node.level].badge.color} variant="soft" size="sm">
            {levelConfig[node.level].label}
          </Tag>
          <span className="text-xs text-slate-400">{node.id?.startsWith('new') ? '신규 등록' : '수정'}</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <InputField inputSize="md" label="이름 *" value={name} onChange={(e) => setName(e.target.value)} placeholder={`${levelConfig[node.level].label}명`} className="col-span-2" />
          <InputField inputSize="md" label="코드" value={code} onChange={(e) => setCode(e.target.value)} placeholder="예: CAT-001" />
          {node.level === 3 && (
            <>
              <InputField inputSize="md" label="가격 *" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0" />
              <InputField inputSize="md" label="재고" type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="999 = 무한" />
              <DropdownSelect inputSize="md" label="단위" value={unit} onChange={setUnit} options={[
                { value: '개', label: '개' },
                { value: '잔', label: '잔' },
                { value: '세트', label: '세트' },
                { value: '접시', label: '접시' },
              ]} />
            </>
          )}
        </div>

        {/* ── 할인 설정 (메뉴 level 3만) ── */}
        {node.level === 3 && (
          <div className="border border-slate-200 rounded-[4px] p-3 space-y-3 bg-slate-50/50">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">할인 설정</p>

            <div className="grid grid-cols-2 gap-3">
              <DropdownSelect
                inputSize="md"
                label="할인 유형"
                value={discountType}
                onChange={(v) => { setDiscountType(v as 'none'|'rate'|'price'); setDiscountValue(''); }}
                options={[
                  { value: 'none',  label: '할인 없음' },
                  { value: 'rate',  label: '할인율 (%)' },
                  { value: 'price', label: '할인가 (원)' },
                ]}
              />

              {discountType === 'rate' && (
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-500">할인율 *</label>
                  <div className="flex items-center h-9 border border-slate-200 rounded-[4px] overflow-hidden focus-within:border-[#FF6B2B] transition-colors">
                    <input
                      type="number"
                      value={discountValue}
                      onChange={(e) => {
                        const v = Math.min(99, Math.max(1, Number(e.target.value)));
                        setDiscountValue(String(isNaN(v) ? '' : v));
                      }}
                      placeholder="예: 20"
                      className="flex-1 h-full px-3 text-sm outline-none bg-white text-slate-800 min-w-0"
                    />
                    <span className="px-2.5 text-xs font-semibold text-slate-400 bg-slate-50 border-l border-slate-200 h-full flex items-center">%</span>
                  </div>
                </div>
              )}

              {discountType === 'price' && (
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-500">할인가 *</label>
                  <div className="flex items-center h-9 border border-slate-200 rounded-[4px] overflow-hidden focus-within:border-[#FF6B2B] transition-colors">
                    <input
                      type="number"
                      value={discountValue}
                      onChange={(e) => setDiscountValue(e.target.value)}
                      placeholder="판매 최종가"
                      className="flex-1 h-full px-3 text-sm outline-none bg-white text-slate-800 min-w-0"
                    />
                    <span className="px-2.5 text-xs font-semibold text-slate-400 bg-slate-50 border-l border-slate-200 h-full flex items-center">원</span>
                  </div>
                </div>
              )}
            </div>

            {/* Preview */}
            {discountType !== 'none' && previewSalePrice !== null && (
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs text-slate-400">적용가 미리보기</span>
                <span className="text-xs font-bold text-red-500 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded-[3px]">
                  -{previewRate}%
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  {fmtPrice(previewSalePrice)}
                </span>
                {priceNum > 0 && (
                  <span className="text-xs text-slate-400 line-through">{fmtPrice(priceNum)}</span>
                )}
              </div>
            )}
            {discountType !== 'none' && priceNum <= 0 && (
              <p className="text-xs text-amber-500">가격을 먼저 입력하면 미리보기가 표시됩니다.</p>
            )}
            {discountType === 'price' && discountValueNum > 0 && priceNum > 0 && discountValueNum >= priceNum && (
              <p className="text-xs text-red-500">할인가는 정가보다 낮아야 합니다.</p>
            )}
          </div>
        )}

        <div className="flex items-center gap-3 pt-1">
          <span className="text-xs font-medium text-slate-500">상태</span>
          <Toggle size="md" checked={status === 'active'} onChange={(c) => setStatus(c ? 'active' : 'inactive')} />
          <span className="text-xs text-slate-500">{status === 'active' ? '판매중' : '판매중지'}</span>
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <ModalBtn variant="outline" onClick={onClose}>취소</ModalBtn>
        <ModalBtn variant="primary" onClick={() => onSave({
          name, code,
          price: price ? Number(price) : undefined,
          stock: stock ? Number(stock) : undefined,
          unit, status,
          discountType: node.level === 3 ? discountType : undefined,
          discountValue: node.level === 3 && discountType !== 'none' && discountValue ? Number(discountValue) : undefined,
        })}>
          저장
        </ModalBtn>
      </div>
    </>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export function MenuRegister() {
  const [data, setData] = useState<MenuNode[]>(INITIAL_DATA);
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['1', '2', '3', '1-1', '1-2', '2-1', '3-1', '3-2', '3-3']));
  const [search, setSearch] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  // Modal
  const [editTarget, setEditTarget] = useState<(Partial<MenuNode> & { level: 1|2|3 }) | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Delete confirm
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; level: 1|2|3; parentId?: string } | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // Add category modal
  const [addCatOpen, setAddCatOpen] = useState(false);

  // ── Expand/collapse ──────────────────────────────────────────
  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };
  const expandAll = () => {
    const ids: string[] = [];
    const collect = (nodes: MenuNode[]) => nodes.forEach((n) => { if (n.children?.length) { ids.push(n.id); collect(n.children); } });
    collect(data);
    setExpanded(new Set(ids));
  };
  const collapseAll = () => setExpanded(new Set());

  // ── Status change ─────────────────────────────────────────────
  const handleStatusChange = (id: string, level: 1|2|3, status: 'active'|'inactive', parentId?: string) => {
    const updateNode = (nodes: MenuNode[]): MenuNode[] =>
      nodes.map((n) => n.id === id ? { ...n, status } : { ...n, children: n.children ? updateNode(n.children) : undefined });
    setData(updateNode(data));
  };

  // ── Add child ─────────────────────────────────────────────────
  const handleAddChild = (parentId: string, parentLevel: 1|2) => {
    const childLevel = (parentLevel + 1) as 2|3;
    const code = childLevel === 2 ? `SUB-NEW` : `MENU-NEW`;
    const newNode: MenuNode = {
      id: newId(), level: childLevel, name: '', code, status: 'active',
      sortOrder: 99, updatedAt: new Date().toISOString().slice(0,10), parentId,
      ...(childLevel === 3 ? { price: 0, unit: '개', stock: 999 } : { children: [] }),
    };
    setEditTarget(newNode);
    setModalOpen(true);
  };

  // ── Edit ─────────────────────────────────────────────────────
  const handleEdit = (node: MenuNode) => {
    setEditTarget(node);
    setModalOpen(true);
  };

  // ── Delete ───────────────────────────────────────────────────
  const handleDelete = (id: string, level: 1|2|3, parentId?: string) => {
    setDeleteTarget({ id, level, parentId });
    setDeleteOpen(true);
  };
  const confirmDelete = () => {
    if (!deleteTarget) return;
    const remove = (nodes: MenuNode[]): MenuNode[] =>
      nodes.filter((n) => n.id !== deleteTarget.id).map((n) => ({ ...n, children: n.children ? remove(n.children) : undefined }));
    setData(remove(data));
    setDeleteOpen(false);
    setDeleteTarget(null);
  };

  // ── Save ─────────────────────────────────────────────────────
  const handleSave = (updates: Partial<MenuNode>) => {
    if (!editTarget) return;
    const isNew = editTarget.id?.startsWith('new');
    if (isNew) {
      // Insert into parent
      const insertInto = (nodes: MenuNode[]): MenuNode[] =>
        nodes.map((n) => {
          if (n.id === editTarget.parentId) {
            return { ...n, children: [...(n.children ?? []), { ...editTarget, ...updates, id: newId() } as MenuNode] };
          }
          return { ...n, children: n.children ? insertInto(n.children) : undefined };
        });
      // Level 1 — insert at root
      if (editTarget.level === 1) {
        setData([...data, { ...editTarget, ...updates, id: newId() } as MenuNode]);
      } else {
        setData(insertInto(data));
      }
    } else {
      const update = (nodes: MenuNode[]): MenuNode[] =>
        nodes.map((n) => n.id === editTarget.id ? { ...n, ...updates } : { ...n, children: n.children ? update(n.children) : undefined });
      setData(update(data));
    }
    setModalOpen(false);
    setEditTarget(null);
  };

  // ── Stats ─────────────────────────────────────────────────────
  const countAll = (nodes: MenuNode[]): { cat1: number; cat2: number; menus: number; active: number } => {
    let cat1 = 0, cat2 = 0, menus = 0, active = 0;
    const walk = (n: MenuNode) => {
      if (n.level === 1) { cat1++; if (n.status === 'active') active++; }
      else if (n.level === 2) { cat2++; }
      else { menus++; if (n.status === 'active') active++; }
      n.children?.forEach(walk);
    };
    nodes.forEach(walk);
    return { cat1, cat2, menus, active };
  };
  const stats = countAll(data);

  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <nav className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>메뉴 관리</span><span>/</span>
            <span className="text-slate-700 font-medium">메뉴 등록 · 관리</span>
          </nav>
          <p className="text-sm text-slate-400 mt-1">대분류 → 중분류 → 메뉴 3단계 계층 구조로 관리합니다.</p>
        </div>
        <Button variant="primary" size="md" leftIcon={<Plus size={15} />} onClick={() => { setEditTarget({ level: 1, status: 'active', sortOrder: data.length + 1 }); setAddCatOpen(true); setModalOpen(true); }}>
          대분류 추가
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: '대분류', value: stats.cat1, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: '중분류', value: stats.cat2, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: '전체 메뉴', value: stats.menus, color: 'text-slate-700', bg: 'bg-slate-50' },
          { label: '판매 중', value: stats.active, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ].map((s) => (
          <div key={s.label} className={`${s.bg} rounded-[6px] border border-slate-200 px-4 py-3`}>
            <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative h-9 flex-1 min-w-[180px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="이름, 코드 검색"
              className="w-full h-full pl-9 pr-3 text-sm border border-slate-200 rounded-[4px] outline-none focus:border-[#FF6B2B] transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X size={13} />
              </button>
            )}
          </div>
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="h-9 border border-slate-200 rounded-[4px] text-sm px-3 text-slate-600 outline-none focus:border-[#FF6B2B] bg-white"
          >
            <option value="">전체 분류</option>
            <option value="1">대분류</option>
            <option value="2">중분류</option>
            <option value="3">메뉴</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="h-9 border border-slate-200 rounded-[4px] text-sm px-3 text-slate-600 outline-none focus:border-[#FF6B2B] bg-white"
          >
            <option value="">전체 상태</option>
            <option value="active">판매중</option>
            <option value="inactive">판매중지</option>
          </select>
          <div className="flex items-center gap-1 ml-auto">
            <Button variant="ghost" size="sm" onClick={expandAll}>전체 펼치기</Button>
            <Button variant="ghost" size="sm" onClick={collapseAll}>전체 접기</Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px]">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-2.5 pl-4 pr-2 text-xs font-medium text-slate-500 w-[260px]">이름</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium text-slate-500 w-[100px]">코드</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium text-slate-500 w-[72px]">분류</th>
                <th className="text-right py-2.5 px-3 text-xs font-medium text-slate-500 w-[90px]">가격</th>
                <th className="text-center py-2.5 px-3 text-xs font-medium text-slate-500 w-[60px]">할인</th>
                <th className="text-center py-2.5 px-3 text-xs font-medium text-slate-500 w-[60px]">재고</th>
                <th className="text-center py-2.5 px-3 text-xs font-medium text-slate-500 w-[48px]">순서</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium text-slate-500 w-[64px]">상태</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium text-slate-500 w-[90px]">수정일</th>
                <th className="text-left py-2.5 px-3 pr-4 text-xs font-medium text-slate-500">액션</th>
              </tr>
            </thead>
            <tbody>
              {data.map((node) => (
                <MenuRow
                  key={node.id}
                  node={node}
                  expanded={expanded}
                  onToggleExpand={toggleExpand}
                  onStatusChange={handleStatusChange}
                  onAddChild={handleAddChild}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
          {/* Add row at bottom */}
          <div className="flex gap-1">
            <button
              onClick={() => { setEditTarget({ level: 1, status: 'active', sortOrder: data.length + 1 }); setModalOpen(true); }}
              className="flex items-center gap-1 text-xs text-[#FF6B2B] hover:bg-[#FF6B2B]/10 px-2 py-1.5 rounded-[3px] transition-colors"
            >
              <Plus size={12} /> 대분류 추가
            </button>
          </div>
          <Pagination
            page={page}
            totalPages={10}
            onChange={setPage}
            totalCount={stats.cat1 + stats.cat2 + stats.menus}
            pageSize={pageSize}
            onPageSizeChange={setPageSize}
            size="sm"
            showFirstLast
          />
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => { setModalOpen(false); setEditTarget(null); }}
        size="md"
        title={editTarget
          ? `${levelConfig[editTarget.level ?? 1].label} ${editTarget.id?.startsWith('new') ? '추가' : '수정'}`
          : ''}
      >
        {editTarget && (
          <EditForm
            node={editTarget}
            onClose={() => { setModalOpen(false); setEditTarget(null); }}
            onSave={handleSave}
          />
        )}
      </Modal>

      {/* Delete confirm */}
      <Modal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        size="sm"
        title="항목 삭제"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDeleteOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={confirmDelete}>삭제</ModalBtn>
          </>
        }
      >
        <p className="text-sm text-slate-600">이 항목을 삭제하면 하위 항목도 함께 삭제됩니다. 계속하시겠습니까?</p>
      </Modal>
    </div>
  );
}