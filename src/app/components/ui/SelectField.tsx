import React from 'react';
import { ChevronDown, Loader2 } from 'lucide-react';
import { InputSize, LabelPosition, InputState, inputSizeConfig, getInputBorderClass } from './InputField';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectFieldProps {
  inputSize?: InputSize;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  labelPosition?: LabelPosition;
  labelWidth?: string;
  hint?: string;
  errorText?: string;
  successText?: string;
  loading?: boolean;
  /** Force visual state for demos */
  forceState?: InputState;
  className?: string;
  id?: string;
}

export function SelectField({
  inputSize = 'md',
  options,
  value,
  defaultValue,
  onChange,
  placeholder = '선택하세요',
  disabled,
  label,
  labelPosition = 'top',
  labelWidth = 'w-24',
  hint,
  errorText,
  successText,
  loading = false,
  forceState,
  className = '',
  id,
}: SelectFieldProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const [focused, setFocused] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const inputId = id ?? React.useId();

  const selectedValue = value !== undefined ? value : internalValue;

  const effectiveState: InputState = (() => {
    if (forceState) return forceState;
    if (disabled) return 'disabled';
    if (loading) return 'loading';
    if (errorText) return 'error';
    if (successText) return 'success';
    if (focused) return 'focus';
    if (hovered) return 'hover';
    return 'default';
  })();

  const isDisabled = disabled || forceState === 'disabled';
  const s = inputSizeConfig[inputSize];
  const borderCls = getInputBorderClass(effectiveState);
  const labelTextCls = 'text-xs font-medium';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e.target.value);
  };

  const labelEl = label ? (
    <label
      htmlFor={inputId}
      className={[
        labelTextCls,
        'text-slate-500 select-none shrink-0',
        labelPosition === 'top' ? 'mb-1' : '',
        labelPosition === 'bottom' ? 'mt-1' : '',
        (labelPosition === 'left' || labelPosition === 'right') ? labelWidth : '',
      ].join(' ')}
    >
      {label}
    </label>
  ) : null;

  const selectEl = (
    <div
      className={`relative flex items-center ${s.height} flex-1 min-w-0`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <select
        id={inputId}
        value={selectedValue}
        onChange={handleChange}
        disabled={isDisabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={[
          'w-full h-full rounded-[4px] border outline-none transition-all appearance-none',
          s.text, s.px,
          'pr-9', // space for chevron
          borderCls,
          isDisabled
            ? 'bg-slate-50 text-slate-400 cursor-not-allowed'
            : 'bg-white text-slate-800 cursor-pointer',
          !selectedValue ? 'text-slate-300' : '',
        ].join(' ')}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Right icon */}
      <span className="absolute right-3 flex items-center pointer-events-none text-slate-400">
        {loading || forceState === 'loading'
          ? <Loader2 size={s.spinnerSize} className="animate-spin" />
          : <ChevronDown size={s.spinnerSize} />
        }
      </span>
    </div>
  );

  const helperEl = (
    <>
      {hint && !errorText && !successText && (
        <p className="mt-1 text-xs text-slate-400">{hint}</p>
      )}
      {errorText && <p className="mt-1 text-xs text-red-500">{errorText}</p>}
      {successText && <p className="mt-1 text-xs text-emerald-600">{successText}</p>}
    </>
  );

  if (labelPosition === 'left') {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center gap-3">
          {labelEl}
          <div className="flex-1 min-w-0">{selectEl}{helperEl}</div>
        </div>
      </div>
    );
  }
  if (labelPosition === 'right') {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">{selectEl}{helperEl}</div>
          {labelEl}
        </div>
      </div>
    );
  }
  if (labelPosition === 'bottom') {
    return (
      <div className={`w-full ${className}`}>
        {selectEl}{labelEl}{helperEl}
      </div>
    );
  }
  return (
    <div className={`w-full ${className}`}>
      {labelEl}{selectEl}{helperEl}
    </div>
  );
}