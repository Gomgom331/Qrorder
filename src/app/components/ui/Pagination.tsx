import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export type PaginationSize = 'sm' | 'md';

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  totalCount?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageSizeChange?: (size: number) => void;
  size?: PaginationSize;
  showFirstLast?: boolean;
  siblingCount?: number;
  className?: string;
}

// ─── Page range calculator ────────────────────────────────────────
function calcRange(page: number, total: number, sibling = 1): (number | '...')[] {
  const left  = page - sibling;
  const right = page + sibling;
  const pages: number[] = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= left && i <= right)) {
      pages.push(i);
    }
  }

  const result: (number | '...')[] = [];
  let prev: number | undefined;
  for (const p of pages) {
    if (prev !== undefined && p - prev > 1) result.push('...');
    result.push(p);
    prev = p;
  }
  return result;
}

// ─── Size config ─────────────────────────────────────────────────
const sizeMap: Record<PaginationSize, {
  btn: string;
  text: string;
  select: string;
  iconSize: number;
}> = {
  sm: { btn: 'h-7 min-w-[28px] px-1 text-xs', text: 'text-xs', select: 'h-7 text-xs px-2', iconSize: 13 },
  md: { btn: 'h-9 min-w-[36px] px-1.5 text-sm', text: 'text-sm', select: 'h-9 text-sm px-2', iconSize: 15 },
};

// ─── Component ───────────────────────────────────────────────────
export function Pagination({
  page,
  totalPages,
  onChange,
  totalCount,
  pageSize,
  pageSizeOptions = [10, 20, 50, 100],
  onPageSizeChange,
  size = 'md',
  showFirstLast = false,
  siblingCount = 1,
  className = '',
}: PaginationProps) {
  const s = sizeMap[size];
  const range = calcRange(page, totalPages, siblingCount);

  // ── 숫자 버튼 ────────────────────────────────────────────────────
  const numBtn = (p: number | '...', idx: number) => {
    if (p === '...') {
      return (
        <span
          key={`e${idx}`}
          className={`inline-flex items-center justify-center text-slate-400 pointer-events-none ${s.btn}`}
        >
          ···
        </span>
      );
    }
    const active = p === page;
    return (
      <button
        key={p}
        onClick={() => onChange(p)}
        className={[
          'inline-flex items-center justify-center rounded-[4px] transition-all shrink-0 font-medium',
          s.btn,
          active
            // 활성: 주황 배경 (테두리 없음)
            ? 'bg-[#FF6B2B] text-white'
            // 비활성: 기본 테두리 없음, hover 시 배경만
            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100',
        ].join(' ')}
      >
        {p}
      </button>
    );
  };

  // ── 이전/다음 버튼 ────────────────────────────────────────────────
  const navBtn = (
    icon: React.ReactNode,
    target: number,
    disabled: boolean,
  ) => (
    <button
      onClick={() => !disabled && onChange(target)}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center rounded-[4px] transition-all shrink-0',
        s.btn,
        disabled
          ? 'text-slate-300 cursor-not-allowed'
          : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100',
      ].join(' ')}
    >
      {icon}
    </button>
  );

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {/* 총 건수 */}
      {totalCount !== undefined && (
        <span className={`${s.text} text-slate-400 mr-1`}>
          총 <strong className="text-slate-700">{totalCount.toLocaleString()}</strong>건
        </span>
      )}

      <div className="flex items-center gap-0.5">
        {showFirstLast && navBtn(<ChevronsLeft size={s.iconSize} />, 1, page === 1)}
        {navBtn(<ChevronLeft size={s.iconSize} />, page - 1, page === 1)}
        {range.map((p, i) => numBtn(p, i))}
        {navBtn(<ChevronRight size={s.iconSize} />, page + 1, page === totalPages)}
        {showFirstLast && navBtn(<ChevronsRight size={s.iconSize} />, totalPages, page === totalPages)}
      </div>

      {/* 페이지 크기 셀렉트 */}
      {onPageSizeChange && (
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className={[
            'border border-slate-200 rounded-[4px] text-slate-500 outline-none focus:border-[#FF6B2B] bg-white transition-colors',
            s.select,
          ].join(' ')}
        >
          {pageSizeOptions.map((o) => (
            <option key={o} value={o}>{o}개씩</option>
          ))}
        </select>
      )}
    </div>
  );
}
