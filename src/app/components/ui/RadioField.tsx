import React from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';

// ─── Size config (aligned with Button SM/MD/LG) ──────────────────
const sizeConfig: Record<RadioSize, {
  box: string;
  dot: string;
  text: string;
  gap: string;
}> = {
  sm: { box: 'w-3.5 h-3.5', dot: 'w-[5px] h-[5px]', text: 'text-xs font-medium', gap: 'gap-1.5' },
  md: { box: 'w-4 h-4',     dot: 'w-[6px] h-[6px]', text: 'text-xs font-medium', gap: 'gap-2'   },
  lg: { box: 'w-[18px] h-[18px]', dot: 'w-[7px] h-[7px]', text: 'text-xs font-medium', gap: 'gap-2.5' },
};

export interface RadioFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: RadioSize;
  label?: string;
  hint?: string;
  /** Force visual state for guide demos */
  forceState?: 'default' | 'hover' | 'focus' | 'checked' | 'disabled';
}

export function RadioField({
  size = 'md',
  label,
  hint,
  forceState,
  disabled,
  checked,
  onChange,
  className = '',
  id,
  ...props
}: RadioFieldProps) {
  const inputId = id ?? React.useId();
  const isDisabled = disabled || forceState === 'disabled';
  const isChecked  = forceState === 'checked' ? true : checked;

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
      {/* Hidden native input */}
      <input
        {...props}
        id={inputId}
        type="radio"
        className="sr-only peer"
        disabled={isDisabled}
        checked={isChecked}
        onChange={onChange}
      />

      {/* Visual radio */}
      <span
        className={[
          'relative shrink-0 rounded-full border transition-all mt-[1px]',
          s.box,
          forceState === 'focus'
            ? 'border-[#FF6B2B] ring-2 ring-offset-1 ring-[#FF6B2B]/30'
            : forceState === 'hover'
            ? 'border-slate-400'
            : isChecked
            ? 'border-[#FF6B2B] bg-white'
            : 'border-slate-300 bg-white',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-[#FF6B2B]/30 peer-focus-visible:border-[#FF6B2B]',
        ].join(' ')}
      >
        {/* Inner dot */}
        {isChecked && (
          <span
            className={[
              'absolute inset-0 m-auto rounded-full bg-[#FF6B2B]',
              s.dot,
            ].join(' ')}
          />
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

// ─── Radio Group ─────────────────────────────────────────────────
export interface RadioGroupProps {
  label?: string;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  direction?: 'row' | 'col';
  size?: RadioSize;
  options: { value: string; label: string; hint?: string; disabled?: boolean }[];
  className?: string;
}

export function RadioGroup({
  label,
  name,
  value,
  onChange,
  direction = 'col',
  size = 'md',
  options,
  className = '',
}: RadioGroupProps) {
  return (
    <div className={className}>
      {label && <p className="text-sm text-slate-600 mb-2">{label}</p>}
      <div className={`flex ${direction === 'col' ? 'flex-col gap-2.5' : 'flex-wrap gap-4'}`}>
        {options.map((opt) => (
          <RadioField
            key={opt.value}
            size={size}
            name={name}
            value={opt.value}
            label={opt.label}
            hint={opt.hint}
            disabled={opt.disabled}
            checked={value === opt.value}
            onChange={() => onChange?.(opt.value)}
          />
        ))}
      </div>
    </div>
  );
}