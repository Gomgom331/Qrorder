import React from 'react';
import { X } from 'lucide-react';

export type TagColor =
  | 'gray' | 'orange' | 'green' | 'red' | 'amber' | 'blue' | 'purple' | 'teal' | 'pink' | 'dark';
export type TagVariant = 'soft' | 'filled' | 'outline';
export type TagSize = 'sm' | 'md' | 'lg';

// ─── Color config ─────────────────────────────────────────────────
const colorMap: Record<TagColor, Record<TagVariant, string> & { dot: string }> = {
  gray:   { soft: 'bg-slate-100 text-slate-600',      filled: 'bg-slate-500 text-white',       outline: 'border border-slate-300 text-slate-600',       dot: 'bg-slate-400' },
  orange: { soft: 'bg-orange-100 text-orange-700',    filled: 'bg-[#FF6B2B] text-white',        outline: 'border border-orange-400 text-orange-600',     dot: 'bg-[#FF6B2B]' },
  green:  { soft: 'bg-emerald-100 text-emerald-700',  filled: 'bg-emerald-500 text-white',      outline: 'border border-emerald-400 text-emerald-600',   dot: 'bg-emerald-500' },
  red:    { soft: 'bg-red-100 text-red-700',          filled: 'bg-red-500 text-white',          outline: 'border border-red-400 text-red-600',           dot: 'bg-red-500' },
  amber:  { soft: 'bg-amber-100 text-amber-700',      filled: 'bg-amber-500 text-white',        outline: 'border border-amber-400 text-amber-600',       dot: 'bg-amber-500' },
  blue:   { soft: 'bg-blue-100 text-blue-700',        filled: 'bg-blue-500 text-white',         outline: 'border border-blue-400 text-blue-600',         dot: 'bg-blue-500' },
  purple: { soft: 'bg-purple-100 text-purple-700',    filled: 'bg-purple-500 text-white',       outline: 'border border-purple-400 text-purple-600',     dot: 'bg-purple-500' },
  teal:   { soft: 'bg-teal-100 text-teal-700',        filled: 'bg-teal-500 text-white',         outline: 'border border-teal-400 text-teal-600',         dot: 'bg-teal-500' },
  pink:   { soft: 'bg-pink-100 text-pink-700',        filled: 'bg-pink-500 text-white',         outline: 'border border-pink-400 text-pink-600',         dot: 'bg-pink-500' },
  dark:   { soft: 'bg-slate-800 text-white',          filled: 'bg-slate-900 text-white',        outline: 'border border-slate-700 text-slate-700',       dot: 'bg-slate-800' },
};

const sizeMap: Record<TagSize, string> = {
  sm: 'text-xs px-1.5 py-0.5 gap-1',
  md: 'text-xs px-2.5 py-1 gap-1.5',
  lg: 'text-sm px-3 py-1.5 gap-2',
};

const dotSizeMap: Record<TagSize, string> = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2 h-2',
};

const iconSizeMap: Record<TagSize, number> = { sm: 10, md: 12, lg: 13 };

// ─── Component ───────────────────────────────────────────────────
export interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
  variant?: TagVariant;
  size?: TagSize;
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export function Tag({
  children,
  color = 'gray',
  variant = 'soft',
  size = 'md',
  dot = false,
  removable = false,
  onRemove,
  icon,
  className = '',
}: TagProps) {
  const colorCls = colorMap[color][variant];
  const sizeCls = sizeMap[size];
  const dotCls = colorMap[color].dot;
  const dotSize = dotSizeMap[size];
  const iconSize = iconSizeMap[size];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-[3px] whitespace-nowrap ${colorCls} ${sizeCls} ${className}`}
    >
      {dot && (
        <span className={`shrink-0 rounded-full ${dotSize} ${dotCls} opacity-80`} />
      )}
      {icon && (
        <span className="shrink-0 flex items-center" style={{ fontSize: iconSize }}>
          {icon}
        </span>
      )}
      <span className="leading-none">{children}</span>
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity ml-0.5 -mr-0.5 rounded-[2px] hover:bg-black/10"
        >
          <X size={iconSize} />
        </button>
      )}
    </span>
  );
}
