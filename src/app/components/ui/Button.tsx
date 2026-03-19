import React from 'react';
import { Loader2, ExternalLink } from 'lucide-react';

export type ButtonVariant =
  | 'primary' | 'secondary' | 'outline' | 'ghost'
  | 'danger' | 'text' | 'icon' | 'icon-text' | 'toggle' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

// ─── Size config ─────────────────────────────────────────────────
export const btnSizeMap: Record<ButtonSize, { cls: string; icon: number; iconSquare: string }> = {
  sm: { cls: 'h-7  px-2.5 text-xs  gap-1.5 rounded-[3px]', icon: 13, iconSquare: 'h-7  w-7  rounded-[3px]' },
  md: { cls: 'h-9  px-3.5 text-sm  gap-2   rounded-[4px]', icon: 15, iconSquare: 'h-9  w-9  rounded-[4px]' },
  lg: { cls: 'h-11 px-5   text-sm  gap-2.5 rounded-[4px]', icon: 17, iconSquare: 'h-11 w-11 rounded-[4px]' },
};

// ─── Variant config ──────────────────────────────────────────────
const variantBase: Record<ButtonVariant, string> = {
  primary:   'bg-[#FF6B2B] text-white hover:bg-[#E85D20] active:bg-[#D15118] focus-visible:ring-2 focus-visible:ring-[#FF6B2B]/40 focus-visible:outline-none',
  secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 active:bg-slate-300 focus-visible:ring-2 focus-visible:ring-slate-400/30 focus-visible:outline-none',
  outline:   'border border-slate-300 text-slate-700 bg-transparent hover:bg-slate-50 active:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-400/30 focus-visible:outline-none',
  ghost:     'text-slate-600 bg-transparent hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-2 focus-visible:ring-slate-400/30 focus-visible:outline-none',
  danger:    'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-500/40 focus-visible:outline-none',
  text:      'text-slate-600 bg-transparent hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-slate-400/30 focus-visible:outline-none px-0',
  link:      'text-[#FF6B2B] bg-transparent hover:underline focus-visible:ring-2 focus-visible:ring-[#FF6B2B]/30 focus-visible:outline-none px-0',
  icon:      'text-slate-500 bg-transparent hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-2 focus-visible:ring-slate-400/30 focus-visible:outline-none',
  'icon-text': 'bg-slate-100 text-slate-700 hover:bg-slate-200 active:bg-slate-300 focus-visible:ring-2 focus-visible:ring-slate-400/30 focus-visible:outline-none',
  toggle:    'border border-slate-300 text-slate-600 bg-transparent hover:bg-slate-50 active:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#FF6B2B]/30 focus-visible:outline-none',
};

const disabledCls = 'opacity-40 cursor-not-allowed pointer-events-none';
const selectedToggleCls = 'bg-[#FF6B2B] text-white border-[#FF6B2B] hover:bg-[#E85D20]';

// ─── Props ───────────────────────────────────────────────────────
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  selected?: boolean;      // for toggle
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** icon-only content override (used for `icon` variant) */
  iconOnly?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  selected = false,
  leftIcon,
  rightIcon,
  iconOnly,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const sc = btnSizeMap[size];
  const isDisabled = disabled || loading;
  const isIcon = variant === 'icon';

  const base = variantBase[variant];
  const sizeCls = isIcon ? sc.iconSquare : sc.cls;
  const selectedCls = (variant === 'toggle' && selected) ? selectedToggleCls : '';
  const disabledClass = isDisabled ? disabledCls : '';

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={[
        'inline-flex items-center justify-center font-medium transition-colors select-none shrink-0',
        base,
        sizeCls,
        selectedCls,
        disabledClass,
        className,
      ].join(' ')}
    >
      {loading ? (
        <>
          <Loader2 size={sc.icon} className="animate-spin shrink-0" />
          {!isIcon && children && <span>{children}</span>}
        </>
      ) : isIcon ? (
        iconOnly ?? children
      ) : (
        <>
          {leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>}
          {children && <span>{children}</span>}
          {rightIcon && <span className="shrink-0 flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}

// ─── LinkButton ───────────────────────────────────────────────────
// <a> 태그 기반 버튼. target="_blank" 시 ExternalLink 아이콘 자동 표시
export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Exclude<ButtonVariant, 'icon' | 'toggle'>;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** href 없이 외관만 볼 때 */
  disabled?: boolean;
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  disabled = false,
  children,
  className = '',
  target,
  href,
  ...props
}: LinkButtonProps) {
  const sc = btnSizeMap[size];
  const base = variantBase[variant];
  const sizeCls = sc.cls;
  const showExternal = target === '_blank';

  const cls = [
    'inline-flex items-center justify-center font-medium transition-colors select-none shrink-0 no-underline',
    base,
    sizeCls,
    disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : '',
    className,
  ].join(' ');

  return (
    <a
      {...props}
      href={disabled ? undefined : href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={cls}
    >
      {leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {showExternal && !rightIcon && (
        <span className="shrink-0 flex items-center opacity-70">
          <ExternalLink size={sc.icon - 2} />
        </span>
      )}
      {rightIcon && <span className="shrink-0 flex items-center">{rightIcon}</span>}
    </a>
  );
}