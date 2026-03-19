import React, { useState, useCallback } from 'react';
import {
  ChevronRight, ChevronDown, Plus, Trash2,
  ChevronUp, ChevronDown as ArrowDown, GripVertical,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────
export interface TreeTableColumn<T> {
  key: string;
  header: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render: (row: T, ctx: {
    depth: number;
    isExpanded: boolean;
    hasChildren: boolean;
    toggleExpand: () => void;
    isSelected: boolean;
  }) => React.ReactNode;
}

export interface TreeTableNode {
  id: string;
  parentId?: string;
  children?: TreeTableNode[];
  [key: string]: unknown;
}

export interface TreeTableProps<T extends TreeTableNode> {
  columns: TreeTableColumn<T>[];
  data: T[];
  onChange: (data: T[]) => void;
  /** Which depth levels are addable */
  addableDepths?: number[];
  /** Label for add button per depth */
  addLabel?: (depth: number) => string;
  /** Factory for new row at given depth */
  createRow: (parentId: string | undefined, depth: number) => T;
  /** Max depth allowed (0-indexed) */
  maxDepth?: number;
  /** Default expanded node ids */
  defaultExpanded?: string[];
  /** Row height */
  rowHeight?: 'sm' | 'md';
  /** Show drag grip column */
  showGrip?: boolean;
  className?: string;
}

// ─── Flattened row type ──────────────────────────────────────────
interface FlatRow<T extends TreeTableNode> {
  node: T;
  depth: number;
  /** sibling index within parent's children */
  index: number;
  /** total siblings count */
  siblingCount: number;
}

// ─── Tree utils ──────────────────────────────────────────────────
function flattenVisible<T extends TreeTableNode>(
  nodes: T[],
  expanded: Set<string>,
  depth = 0,
): FlatRow<T>[] {
  const result: FlatRow<T>[] = [];
  nodes.forEach((node, i) => {
    result.push({ node, depth, index: i, siblingCount: nodes.length });
    if ((node.children?.length ?? 0) > 0 && expanded.has(node.id)) {
      result.push(...flattenVisible(node.children as T[], expanded, depth + 1));
    }
  });
  return result;
}

function removeNode<T extends TreeTableNode>(nodes: T[], id: string): T[] {
  return nodes
    .filter((n) => n.id !== id)
    .map((n) => ({
      ...n,
      children: n.children ? removeNode(n.children as T[], id) : undefined,
    }));
}

function insertChildAt<T extends TreeTableNode>(nodes: T[], parentId: string, newNode: T): T[] {
  return nodes.map((n) => {
    if (n.id === parentId) {
      return { ...n, children: [...(n.children ?? []), newNode] };
    }
    if (n.children?.length) {
      return { ...n, children: insertChildAt(n.children as T[], parentId, newNode) };
    }
    return n;
  });
}

function swapSiblings<T extends TreeTableNode>(
  nodes: T[],
  id: string,
  direction: 'up' | 'down',
): T[] {
  const idx = nodes.findIndex((n) => n.id === id);
  if (idx !== -1) {
    const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= nodes.length) return nodes;
    const next = [...nodes];
    [next[idx], next[swapIdx]] = [next[swapIdx], next[idx]];
    return next;
  }
  return nodes.map((n) => ({
    ...n,
    children: n.children ? swapSiblings(n.children as T[], id, direction) : undefined,
  }));
}

function getDepthOf<T extends TreeTableNode>(nodes: T[], id: string, depth = 0): number {
  for (const n of nodes) {
    if (n.id === id) return depth;
    if (n.children?.length) {
      const d = getDepthOf(n.children as T[], id, depth + 1);
      if (d !== -1) return d;
    }
  }
  return -1;
}

const INDENT_PX = 20;

// ─── TreeTable ───────────────────────────────────────────────────
export function TreeTable<T extends TreeTableNode>({
  columns,
  data,
  onChange,
  addableDepths = [0, 1],
  addLabel = (d) => d === 0 ? '하위 추가' : '항목 추가',
  createRow,
  maxDepth = 2,
  defaultExpanded,
  rowHeight = 'md',
  showGrip = true,
  className = '',
}: TreeTableProps<T>) {
  const initExpanded = useCallback((): Set<string> => {
    if (defaultExpanded) return new Set(defaultExpanded);
    const ids: string[] = [];
    const walk = (ns: T[]) => ns.forEach((n) => {
      if (n.children?.length) { ids.push(n.id); walk(n.children as T[]); }
    });
    walk(data);
    return new Set(ids);
  }, []);

  const [expanded, setExpanded] = useState<Set<string>>(initExpanded);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleAdd = (parentId: string | undefined, depth: number) => {
    const newNode = createRow(parentId, depth);
    if (parentId === undefined) {
      onChange([...data, newNode]);
    } else {
      onChange(insertChildAt(data, parentId, newNode));
      setExpanded((prev) => new Set([...prev, parentId]));
    }
    setSelected(newNode.id);
  };

  const handleDelete = (id: string) => {
    onChange(removeNode(data, id));
    if (selected === id) setSelected(null);
  };

  const handleMove = (id: string, dir: 'up' | 'down') => {
    onChange(swapSiblings(data, id, dir));
  };

  const rowPy = rowHeight === 'sm' ? 'py-1.5' : 'py-2.5';

  // Flatten only visible rows (respecting expanded state)
  const flatRows = flattenVisible(data, expanded);

  return (
    <div className={`border border-slate-200 rounded-[6px] overflow-hidden ${className}`}>
      <table className="w-full">
        {/* Header */}
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {showGrip && <th className="w-6 pl-2" />}
            {columns.map((col, i) => (
              <th
                key={col.key}
                style={{ width: col.width }}
                className={[
                  'py-2.5 text-xs font-medium text-slate-500',
                  i === 0 ? 'pl-3 text-left' : 'px-3',
                  col.align === 'right' ? 'text-right'
                    : col.align === 'center' ? 'text-center'
                    : 'text-left',
                ].join(' ')}
              >
                {col.header}
              </th>
            ))}
            <th className="w-[160px] pr-3 text-right text-xs font-medium text-slate-500">
              액션
            </th>
          </tr>
        </thead>

        {/* Body — flat rows, no Fragment wrappers */}
        <tbody>
          {flatRows.length > 0
            ? flatRows.map(({ node, depth, index, siblingCount }) => {
                const isExpanded = expanded.has(node.id);
                const hasChildren = (node.children?.length ?? 0) > 0;
                const isSelected = selected === node.id;
                const canUp   = index > 0;
                const canDown = index < siblingCount - 1;
                const canAdd  = depth < maxDepth && addableDepths.includes(depth);

                return (
                  <tr
                    key={node.id}
                    onClick={() => setSelected(node.id)}
                    className={[
                      'group border-b border-slate-100 last:border-0 transition-colors cursor-pointer',
                      isSelected ? 'bg-[#FF6B2B]/5' : 'hover:bg-slate-50/70',
                    ].join(' ')}
                  >
                    {/* Grip */}
                    {showGrip && (
                      <td className="pl-2 pr-0 w-6 shrink-0">
                        <GripVertical
                          size={13}
                          className="text-slate-200 group-hover:text-slate-300 cursor-grab"
                        />
                      </td>
                    )}

                    {/* Data columns */}
                    {columns.map((col, ci) => (
                      <td
                        key={col.key}
                        style={{ width: col.width }}
                        className={[
                          'text-sm',
                          rowPy,
                          ci === 0 ? 'pl-3' : 'px-3',
                          col.align === 'right' ? 'text-right'
                            : col.align === 'center' ? 'text-center'
                            : 'text-left',
                        ].join(' ')}
                      >
                        {ci === 0 ? (
                          <div
                            className="flex items-center gap-1"
                            style={{ paddingLeft: `${depth * INDENT_PX}px` }}
                          >
                            {/* Expand toggle */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (hasChildren) toggleExpand(node.id);
                              }}
                              className={[
                                'shrink-0 flex items-center justify-center w-5 h-5 rounded-[3px] transition-colors',
                                hasChildren
                                  ? 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                                  : 'text-transparent cursor-default',
                              ].join(' ')}
                            >
                              {isExpanded
                                ? <ChevronDown size={13} />
                                : <ChevronRight size={13} />}
                            </button>
                            <div className="flex-1 min-w-0">
                              {col.render(node, {
                                depth, isExpanded, hasChildren,
                                toggleExpand: () => toggleExpand(node.id),
                                isSelected,
                              })}
                            </div>
                          </div>
                        ) : (
                          col.render(node, {
                            depth, isExpanded, hasChildren,
                            toggleExpand: () => toggleExpand(node.id),
                            isSelected,
                          })
                        )}
                      </td>
                    ))}

                    {/* Action column */}
                    <td className="px-2 pr-3 w-[160px] shrink-0">
                      <div className="flex items-center gap-0.5 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => { e.stopPropagation(); handleMove(node.id, 'up'); }}
                          disabled={!canUp}
                          className={[
                            'flex items-center justify-center w-6 h-6 rounded-[3px] transition-colors text-slate-400',
                            canUp ? 'hover:bg-slate-100 hover:text-slate-700' : 'opacity-30 cursor-not-allowed',
                          ].join(' ')}
                          title="위로 이동"
                        >
                          <ChevronUp size={13} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleMove(node.id, 'down'); }}
                          disabled={!canDown}
                          className={[
                            'flex items-center justify-center w-6 h-6 rounded-[3px] transition-colors text-slate-400',
                            canDown ? 'hover:bg-slate-100 hover:text-slate-700' : 'opacity-30 cursor-not-allowed',
                          ].join(' ')}
                          title="아래로 이동"
                        >
                          <ArrowDown size={13} />
                        </button>
                        {canAdd && (
                          <button
                            onClick={(e) => { e.stopPropagation(); handleAdd(node.id, depth + 1); }}
                            className="flex items-center gap-0.5 px-1.5 h-6 text-[11px] text-[#FF6B2B] hover:bg-[#FF6B2B]/10 rounded-[3px] transition-colors whitespace-nowrap"
                            title={addLabel(depth)}
                          >
                            <Plus size={10} /> {addLabel(depth)}
                          </button>
                        )}
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDelete(node.id); }}
                          className="flex items-center justify-center w-6 h-6 text-slate-300 hover:text-red-400 hover:bg-red-50 rounded-[3px] transition-colors"
                          title="삭제"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            : (
              <tr>
                <td
                  colSpan={columns.length + (showGrip ? 2 : 1)}
                  className="py-12 text-center text-sm text-slate-400"
                >
                  항목이 없습니다. 아래 버튼으로 추가하세요.
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

      {/* Footer */}
      <div className="border-t border-slate-100 px-3 py-2 flex items-center gap-2 bg-white">
        <button
          onClick={() => handleAdd(undefined, 0)}
          className="flex items-center gap-1 text-xs text-[#FF6B2B] hover:bg-[#FF6B2B]/10 px-2 py-1.5 rounded-[3px] transition-colors"
        >
          <Plus size={12} /> 행 추가
        </button>
        {selected && (
          <>
            {addableDepths.includes(getDepthOf(data, selected)) &&
              getDepthOf(data, selected) < maxDepth && (
              <button
                onClick={() => handleAdd(selected, getDepthOf(data, selected) + 1)}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10 px-2 py-1.5 rounded-[3px] transition-colors"
              >
                <Plus size={12} /> 선택 항목에 하위 추가
              </button>
            )}
            <button
              onClick={() => handleDelete(selected)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-red-500 hover:bg-red-50 px-2 py-1.5 rounded-[3px] transition-colors"
            >
              <Trash2 size={12} /> 선택 행 삭제
            </button>
            <span className="text-xs text-slate-300 ml-2">선택: {selected}</span>
          </>
        )}
      </div>
    </div>
  );
}
