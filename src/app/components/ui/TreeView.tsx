import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export interface TreeNode {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: number | string;
  disabled?: boolean;
  children?: TreeNode[];
}

export interface TreeViewProps {
  nodes: TreeNode[];
  /** Initially expanded node ids */
  defaultExpanded?: string[];
  /** Controlled expanded ids */
  expanded?: string[];
  onExpandChange?: (ids: string[]) => void;
  /** Selected node id */
  selected?: string;
  onSelect?: (id: string) => void;
  /** Max depth to auto-expand. -1 = none */
  defaultExpandDepth?: number;
  indent?: number;         // px per level
  dense?: boolean;
  className?: string;
}

// ─── Collect all expandable ids up to depth ───────────────────────
function collectIds(nodes: TreeNode[], depth: number, maxDepth: number, cur: string[]): string[] {
  if (depth > maxDepth) return cur;
  nodes.forEach((n) => {
    if (n.children?.length) {
      cur.push(n.id);
      collectIds(n.children, depth + 1, maxDepth, cur);
    }
  });
  return cur;
}

// ─── Single node ─────────────────────────────────────────────────
interface NodeProps {
  node: TreeNode;
  depth: number;
  indent: number;
  expandedSet: Set<string>;
  onToggle: (id: string) => void;
  selected?: string;
  onSelect?: (id: string) => void;
  dense?: boolean;
}

function TreeNodeRow({ node, depth, indent, expandedSet, onToggle, selected, onSelect, dense }: NodeProps) {
  const hasChildren = !!node.children?.length;
  const isExpanded = expandedSet.has(node.id);
  const isSelected = selected === node.id;
  const py = dense ? 'py-1' : 'py-1.5';

  return (
    <>
      <div
        className={[
          `flex items-center gap-1.5 rounded-[4px] cursor-pointer select-none group transition-colors ${py} pr-2`,
          node.disabled ? 'opacity-40 cursor-not-allowed' : '',
          isSelected
            ? 'bg-[#FF6B2B]/10 text-[#FF6B2B]'
            : 'text-slate-700 hover:bg-slate-100',
        ].join(' ')}
        style={{ paddingLeft: `${depth * indent + 6}px` }}
        onClick={() => {
          if (node.disabled) return;
          if (hasChildren) onToggle(node.id);
          onSelect?.(node.id);
        }}
      >
        {/* Expand icon */}
        <span className={`shrink-0 text-slate-400 transition-transform duration-150 ${!hasChildren ? 'invisible' : ''}`}>
          {isExpanded
            ? <ChevronDown size={14} />
            : <ChevronRight size={14} />}
        </span>

        {/* Node icon */}
        {node.icon && (
          <span className={`shrink-0 ${isSelected ? 'text-[#FF6B2B]' : 'text-slate-400'}`}>
            {node.icon}
          </span>
        )}

        {/* Label */}
        <span className={`flex-1 text-sm truncate ${isSelected ? 'font-medium' : ''}`}>
          {node.label}
        </span>

        {/* Badge */}
        {node.badge !== undefined && (
          <span className={[
            'shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full leading-none',
            isSelected ? 'bg-[#FF6B2B]/20 text-[#FF6B2B]' : 'bg-slate-200 text-slate-500',
          ].join(' ')}>
            {node.badge}
          </span>
        )}
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="relative">
          {/* Vertical guide line */}
          <div
            className="absolute top-0 bottom-0 border-l border-slate-200"
            style={{ left: `${depth * indent + 14}px` }}
          />
          {node.children!.map((child) => (
            <TreeNodeRow
              key={child.id}
              node={child}
              depth={depth + 1}
              indent={indent}
              expandedSet={expandedSet}
              onToggle={onToggle}
              selected={selected}
              onSelect={onSelect}
              dense={dense}
            />
          ))}
        </div>
      )}
    </>
  );
}

// ─── TreeView ─────────────────────────────────────────────────────
export function TreeView({
  nodes,
  defaultExpanded,
  expanded: controlledExpanded,
  onExpandChange,
  selected,
  onSelect,
  defaultExpandDepth = -1,
  indent = 14,
  dense = false,
  className = '',
}: TreeViewProps) {
  const initIds = defaultExpanded
    ?? (defaultExpandDepth >= 0 ? collectIds(nodes, 0, defaultExpandDepth, []) : []);
  const [internalExpanded, setInternalExpanded] = useState<string[]>(initIds);

  const expandedArr = controlledExpanded ?? internalExpanded;
  const expandedSet = new Set(expandedArr);

  const toggleNode = (id: string) => {
    const next = expandedSet.has(id)
      ? expandedArr.filter((x) => x !== id)
      : [...expandedArr, id];
    setInternalExpanded(next);
    onExpandChange?.(next);
  };

  return (
    <div className={`select-none ${className}`}>
      {nodes.map((node) => (
        <TreeNodeRow
          key={node.id}
          node={node}
          depth={0}
          indent={indent}
          expandedSet={expandedSet}
          onToggle={toggleNode}
          selected={selected}
          onSelect={onSelect}
          dense={dense}
        />
      ))}
    </div>
  );
}
