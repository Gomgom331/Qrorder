import React from 'react';
import { Loader2 } from 'lucide-react';

export type ToggleSize = 'sm' | 'md' | 'lg';

// Track · thumb sizes — aligned with Button/Input SM(h-7) / MD(h-9) / LG(h-11)
const sizeConfig: Record<ToggleSize, {
  track: string; trackW: string; trackH: string;
  thumb: string; thumbSize: string;
  translateOn: string;
  text: string; gap: string;
  spinnerSize: number;
}> = {
  sm: {
    track: 'rounded-full',
    trackW: 'w-7', trackH: 'h-[18px]',
    thumb: 'w-[14px] h-[14px]',
    translateOn: 'translate-x-[14px]',
    text: 'text-xs font-medium', gap: 'gap-1.5', spinnerSize: 9,
  },
  md: {
    track: 'rounded-full',
    trackW: 'w-9', trackH: 'h-5',
    thumb: 'w-4 h-4',
    translateOn: 'translate-x-4',
    text: 'text-xs font-medium', gap: 'gap-2', spinnerSize: 11,
  },
  lg: {
    track: 'rounded-full',
    trackW: 'w-11', trackH: 'h-6',
    thumb: 'w-5 h-5',
    translateOn: 'translate-x-5',
    text: 'text-xs font-medium', gap: 'gap-2.5', spinnerSize: 13,
  },
};

export interface ToggleProps {
  size?: ToggleSize;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
  label?: string;
  labelPosition?: 'left' | 'right';
  hint?: string;
  /** Forces visual state (demo/guide only) */
  forceState?: 'on' | 'off' | 'disabled' | 'loading';
  className?: string;
}

export function Toggle({
  size = 'md',
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  loading = false,
  label,
  labelPosition = 'right',
  hint,
  forceState,
  className = '',
}: ToggleProps) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const s = sizeConfig[size];

  const isDisabled = disabled || forceState === 'disabled';
  const isLoading  = loading   || forceState === 'loading';
  const isOn = forceState === 'on'
    ? true
    : forceState === 'off' || forceState === 'disabled'
    ? false
    : forceState === 'loading'
    ? false
    : (checked !== undefined ? checked : internal);

  const handleClick = () => {
    if (isDisabled || isLoading) return;
    const next = !isOn;
    if (checked === undefined) setInternal(next);
    onChange?.(next);
  };

  const trackBg = isOn
    ? isDisabled ? 'bg-[#FF6B2B]/40' : 'bg-[#FF6B2B]'
    : isDisabled ? 'bg-slate-200'    : 'bg-slate-200 hover:bg-slate-300';

  const trackEl = (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={handleClick}
      disabled={isDisabled}
      className={[
        'relative shrink-0 flex items-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B2B]/40 focus-visible:ring-offset-1',
        s.track, s.trackW, s.trackH,
        trackBg,
        isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
      ].join(' ')}
    >
      {/* Thumb */}
      <span
        className={[
          'absolute left-[2px] rounded-full bg-white shadow-sm transition-transform duration-200 flex items-center justify-center',
          s.thumb,
          isOn ? s.translateOn : 'translate-x-0',
        ].join(' ')}
      >
        {isLoading && <Loader2 size={s.spinnerSize} className="text-slate-400 animate-spin" />}
      </span>
    </button>
  );

  if (!label && !hint) return <span className={className}>{trackEl}</span>;

  return (
    <label
      className={[
        'inline-flex items-start select-none',
        s.gap,
        isDisabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
        className,
      ].join(' ')}
      onClick={handleClick}
    >
      {labelPosition === 'left' && (
        <span className="flex flex-col">
          {label && <span className={`${s.text} text-slate-700 leading-snug`}>{label}</span>}
          {hint  && <span className="text-xs text-slate-400 mt-0.5">{hint}</span>}
        </span>
      )}
      {trackEl}
      {labelPosition === 'right' && (
        <span className="flex flex-col">
          {label && <span className={`${s.text} text-slate-700 leading-snug`}>{label}</span>}
          {hint  && <span className="text-xs text-slate-400 mt-0.5">{hint}</span>}
        </span>
      )}
    </label>
  );
}