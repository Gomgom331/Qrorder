import React from 'react';
import { Minus } from 'lucide-react';

export type CheckboxSize = 'sm' | 'md' | 'lg';

// ─── Size config (aligned with Button SM/MD/LG) ──────────────────
const sizeConfig: Record<CheckboxSize, {
  box: string;        // checkbox box size
  icon: number;       // checkmark icon px
  text: string;       // label font size
  gap: string;        // gap between box and label
  focusRing: string;  // focus ring size
}> = {
  sm: { box: 'w-3.5 h-3.5', icon: 10, text: 'text-xs font-medium', gap: 'gap-1.5', focusRing: 'ring-2 ring-offset-1' },
  md: { box: 'w-4 h-4',     icon: 11, text: 'text-xs font-medium', gap: 'gap-2',   focusRing: 'ring-2 ring-offset-1' },
  lg: { box: 'w-[18px] h-[18px]', icon: 12, text: 'text-xs font-medium', gap: 'gap-2.5', focusRing: 'ring-2 ring-offset-1' },
};

export interface CheckboxFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: CheckboxSize;
  label?: string;
  hint?: string;
  indeterminate?: boolean;
  /** Force visual state for guide demos */
  forceState?: 'default' | 'hover' | 'focus' | 'checked' | 'indeterminate' | 'disabled';
}

export function CheckboxField({
  size = 'md',
  label,
  hint,
  indeterminate = false,
  forceState,
  disabled,
  checked,
  onChange,
  className = '',
  id,
  ...props
}: CheckboxFieldProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const inputId = id ?? React.useId();

  // Apply indeterminate via ref
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate =
        indeterminate || forceState === 'indeterminate';
    }
  }, [indeterminate, forceState]);

  const isDisabled = disabled || forceState === 'disabled';
  const isChecked  = forceState === 'checked' || forceState === 'indeterminate'
    ? true
    : checked;

  const s = sizeConfig[size];

  return (
    <label
      htmlFor={inputId}
      className={[
        'inline-flex items-start select-none',
        s.gap,
        isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        className,
      ].join(' ')}
    >
      {/* Hidden native input for accessibility */}
      <input
        {...props}
        ref={inputRef}
        id={inputId}
        type="checkbox"
        className="sr-only peer"
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
      />
      {/* Visual checkbox */}
      <span
        className={[
          'relative shrink-0 rounded-[3px] border transition-all mt-[1px]',
          s.box,
          // State-based styles
          forceState === 'focus'
            ? `border-[#FF6B2B] ${s.focusRing} ring-[#FF6B2B]/30 bg-white`
            : forceState === 'hover'
            ? 'border-slate-400 bg-white'
            : (isChecked)
            ? 'border-[#FF6B2B] bg-[#FF6B2B]'
            : 'border-slate-300 bg-white',
          // Peer (real checkbox) focus
          'peer-focus-visible:ring-2 peer-focus-visible:ring-[#FF6B2B]/30 peer-focus-visible:border-[#FF6B2B]',
          // Peer checked
          'peer-checked:border-[#FF6B2B] peer-checked:bg-[#FF6B2B]',
        ].join(' ')}
      >
        {/* Checkmark */}
        {(isChecked && !(indeterminate || forceState === 'indeterminate')) && (
          <svg
            viewBox="0 0 12 12"
            className="absolute inset-0 m-auto w-full h-full p-[2px]"
            fill="none"
          >
            <polyline
              points="2,6 5,9 10,3"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {/* Indeterminate dash */}
        {(indeterminate || forceState === 'indeterminate') && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="block bg-white rounded-full h-[2px] w-[55%]" />
          </span>
        )}
      </span>

      {/* Label + hint */}
      {(label || hint) && (
        <span className="flex flex-col">
          {label && (
            <span className={`${s.text} text-slate-700 leading-snug`}>{label}</span>
          )}
          {hint && (
            <span className="text-xs text-slate-400 mt-0.5">{hint}</span>
          )}
        </span>
      )}
    </label>
  );
}

// ─── Checkbox Group ───────────────────────────────────────────────
export interface CheckboxGroupProps {
  label?: string;
  direction?: 'row' | 'col';
  children: React.ReactNode;
  className?: string;
}

export function CheckboxGroup({ label, direction = 'col', children, className = '' }: CheckboxGroupProps) {
  return (
    <div className={className}>
      {label && <p className="text-sm text-slate-600 mb-2">{label}</p>}
      <div className={`flex ${direction === 'col' ? 'flex-col gap-2.5' : 'flex-wrap gap-4'}`}>
        {children}
      </div>
    </div>
  );
}