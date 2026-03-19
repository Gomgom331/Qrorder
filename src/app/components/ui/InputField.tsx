import React from 'react';
import { Loader2, Eye, EyeOff } from 'lucide-react';

export type InputSize = 'sm' | 'md' | 'lg';
export type LabelPosition = 'top' | 'bottom' | 'left' | 'right';
export type InputState =
  | 'default' | 'hover' | 'focus' | 'filled'
  | 'disabled' | 'readonly' | 'error' | 'success' | 'loading';

// ─── Size config ─────────────────────────────────────────────────
export const inputSizeConfig: Record<InputSize, { height: string; text: string; px: string; spinnerSize: number }> = {
  sm: { height: 'h-[30px]', text: 'text-xs', px: 'px-2',  spinnerSize: 12 },
  md: { height: 'h-9',      text: 'text-sm', px: 'px-3',  spinnerSize: 14 },
  lg: { height: 'h-11',     text: 'text-sm', px: 'px-4',  spinnerSize: 16 },
};

// ─── Border / ring by state ──────────────────────────────────────
export function getInputBorderClass(state: InputState): string {
  switch (state) {
    case 'hover':   return 'border-slate-400';
    case 'focus':   return 'border-[#FF6B2B] ring-2 ring-[#FF6B2B]/20';
    case 'error':   return 'border-red-400 ring-2 ring-red-400/20';
    case 'success': return 'border-emerald-400 ring-2 ring-emerald-400/20';
    default:        return 'border-slate-200';
  }
}

// ─── Label size by input size ─────────────────────────────────────
const labelTextCls: Record<InputSize, string> = {
  sm: 'text-xs font-medium',
  md: 'text-xs font-medium',
  lg: 'text-xs font-medium',
};

// ─── Props ───────────────────────────────────────────────────────
export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  inputSize?: InputSize;
  /** Forces visual state (for guide/demo use) */
  forceState?: InputState;
  label?: string;
  required?: boolean;
  labelPosition?: LabelPosition;
  /** Fixed label width for left/right positions */
  labelWidth?: string;
  hint?: string;
  /** Alias for hint — avoids passing helperText to DOM */
  helperText?: string;
  errorText?: string;
  successText?: string;
  /** Optional left icon — special cases only */
  leftIcon?: React.ReactNode;
  /** Optional right icon — special cases only */
  rightIcon?: React.ReactNode;
  loading?: boolean;
  showPasswordToggle?: boolean;
}

export function InputField({
  inputSize = 'md',
  forceState,
  label,
  required,
  labelPosition = 'top',
  labelWidth = 'w-24',
  hint,
  helperText,
  errorText,
  successText,
  leftIcon,
  rightIcon,
  loading = false,
  showPasswordToggle = false,
  disabled,
  readOnly,
  className = '',
  type,
  id,
  ...props
}: InputFieldProps) {
  // helperText is an alias for hint
  const resolvedHint = hint ?? helperText;
  const [showPw, setShowPw] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const inputId = id ?? React.useId();

  // Effective state
  const effectiveState: InputState = (() => {
    if (forceState) return forceState;
    if (disabled) return 'disabled';
    if (readOnly) return 'readonly';
    if (loading) return 'loading';
    if (errorText) return 'error';
    if (successText) return 'success';
    if (focused) return 'focus';
    if (hovered) return 'hover';
    return 'default';
  })();

  const s = inputSizeConfig[inputSize];
  const borderCls = getInputBorderClass(effectiveState);
  const isDisabled = disabled || forceState === 'disabled';
  const isReadOnly = readOnly || forceState === 'readonly';

  // Right adornment — ONLY loading spinner and password toggle
  // Error/success are indicated by border color only
  let rightAdornment: React.ReactNode = rightIcon;
  if (loading || forceState === 'loading') {
    rightAdornment = <Loader2 size={s.spinnerSize} className="text-slate-400 animate-spin" />;
  } else if (showPasswordToggle) {
    rightAdornment = (
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setShowPw(!showPw)}
        className="text-slate-400 hover:text-slate-600 transition-colors"
      >
        {showPw ? <EyeOff size={s.spinnerSize} /> : <Eye size={s.spinnerSize} />}
      </button>
    );
  }

  const hasLeft = !!leftIcon;
  const hasRight = !!rightAdornment;

  // ─── Input element ────────────────────────────────────────────
  const labelEl = label ? (
    <label
      htmlFor={inputId}
      className={[
        labelTextCls[inputSize],
        'text-slate-500 select-none shrink-0',
        labelPosition === 'top' ? 'mb-1' : '',
        labelPosition === 'bottom' ? 'mt-1' : '',
        (labelPosition === 'left' || labelPosition === 'right') ? labelWidth : '',
      ].join(' ')}
    >
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
  ) : null;

  const inputEl = (
    <div className={`relative flex items-center ${s.height} flex-1 min-w-0`}>
      {hasLeft && (
        <span className="absolute left-3 flex items-center text-slate-400 pointer-events-none z-10">
          {leftIcon}
        </span>
      )}
      <input
        {...props}
        id={inputId}
        type={showPasswordToggle && showPw ? 'text' : (type ?? 'text')}
        disabled={isDisabled}
        readOnly={isReadOnly}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        onMouseEnter={(e) => { setHovered(true); props.onMouseEnter?.(e); }}
        onMouseLeave={(e) => { setHovered(false); props.onMouseLeave?.(e); }}
        className={[
          'w-full h-full rounded-[4px] border outline-none transition-all',
          s.text, s.px,
          borderCls,
          hasLeft  ? (inputSize === 'lg' ? 'pl-11' : 'pl-9') : '',
          hasRight ? (inputSize === 'lg' ? 'pr-11' : 'pr-9') : '',
          isDisabled
            ? 'bg-slate-50 text-slate-400 cursor-not-allowed'
            : isReadOnly
            ? 'bg-slate-50 text-slate-600 cursor-default'
            : 'bg-white text-slate-800 placeholder:text-slate-300',
        ].join(' ')}
      />
      {hasRight && (
        <span className="absolute right-3 flex items-center text-slate-400 z-10">
          {rightAdornment}
        </span>
      )}
    </div>
  );

  const helperEl = (
    <>
      {resolvedHint && !errorText && !successText && (
        <p className="mt-1 text-xs text-slate-400">{resolvedHint}</p>
      )}
      {errorText && (
        <p className="mt-1 text-xs text-red-500">{errorText}</p>
      )}
      {successText && (
        <p className="mt-1 text-xs text-emerald-600">{successText}</p>
      )}
    </>
  );

  // ─── Layout by labelPosition ──────────────────────────────────
  if (labelPosition === 'left') {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center gap-3">
          {labelEl}
          <div className="flex-1 min-w-0">
            {inputEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  if (labelPosition === 'right') {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            {inputEl}
            {helperEl}
          </div>
          {labelEl}
        </div>
      </div>
    );
  }

  if (labelPosition === 'bottom') {
    return (
      <div className={`w-full ${className}`}>
        {inputEl}
        {labelEl}
        {helperEl}
      </div>
    );
  }

  // default: top
  return (
    <div className={`w-full ${className}`}>
      {labelEl}
      {inputEl}
      {helperEl}
    </div>
  );
}