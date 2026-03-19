import React, { useRef, useState, useEffect, useId } from 'react';
import { ChevronDown, Check, Search, Loader2 } from 'lucide-react';
import { InputSize, inputSizeConfig, getInputBorderClass, InputState, LabelPosition } from './InputField';

export interface DropdownOption {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
  group?: string;
}

export interface DropdownSelectProps {
  options: DropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  inputSize?: InputSize;
  label?: string;
  labelPosition?: LabelPosition;
  labelWidth?: string;
  hint?: string;
  errorText?: string;
  successText?: string;
  searchable?: boolean;
  loading?: boolean;
  disabled?: boolean;
  forceState?: InputState;
  className?: string;
  dropdownWidth?: string;
}

export function DropdownSelect({
  options,
  value: controlledValue,
  defaultValue = '',
  onChange,
  placeholder = '선택하세요',
  inputSize = 'md',
  label,
  labelPosition = 'top',
  labelWidth = 'w-24',
  hint,
  errorText,
  successText,
  searchable = false,
  loading = false,
  disabled,
  forceState,
  className = '',
  dropdownWidth,
}: DropdownSelectProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const uid = useId();

  const selectedValue = controlledValue !== undefined ? controlledValue : internalValue;
  const selectedOption = options.find((o) => o.value === selectedValue);

  const isDisabled = disabled || forceState === 'disabled';
  const isLoading  = loading   || forceState === 'loading';

  // State
  const effectiveState: InputState = (() => {
    if (forceState) return forceState;
    if (isDisabled) return 'disabled';
    if (isLoading)  return 'loading';
    if (errorText)  return 'error';
    if (successText) return 'success';
    if (open)       return 'focus';
    if (focused)    return 'hover';
    return 'default';
  })();

  const s = inputSizeConfig[inputSize];
  const borderCls = getInputBorderClass(effectiveState);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (open && searchable) searchRef.current?.focus();
  }, [open, searchable]);

  // Flip up when not enough space below
  useEffect(() => {
    if (!open || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const dropdownHeight = 260; // max-h-[240px] + padding
    setDropUp(spaceBelow < dropdownHeight && spaceAbove > spaceBelow);
  }, [open]);

  const handleSelect = (opt: DropdownOption) => {
    if (opt.disabled) return;
    const next = opt.value;
    setInternalValue(next);
    onChange?.(next);
    setOpen(false);
    setSearch('');
  };

  // Filter + group
  const filtered = options.filter((o) =>
    !search || o.label.toLowerCase().includes(search.toLowerCase())
  );
  const groups = Array.from(new Set(options.filter((o) => o.group).map((o) => o.group)));
  const ungrouped = filtered.filter((o) => !o.group);
  const grouped = groups.map((g) => ({
    group: g!,
    items: filtered.filter((o) => o.group === g),
  }));

  // ─── Trigger ────────────────────────────────────────────────────
  const trigger = (
    <div
      ref={containerRef}
      className="relative flex-1 min-w-0"
    >
      <button
        type="button"
        id={uid}
        disabled={isDisabled}
        onClick={() => !isDisabled && !isLoading && setOpen(!open)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={[
          'w-full flex items-center text-left border rounded-[4px] outline-none transition-all',
          s.height, s.text, s.px,
          'pr-9 font-normal',
          borderCls,
          isDisabled
            ? 'bg-slate-50 text-slate-400 cursor-not-allowed'
            : 'bg-white text-slate-800 cursor-pointer',
          !selectedOption ? 'text-slate-300' : '',
        ].join(' ')}
      >
        <span className="flex items-center gap-2 flex-1 min-w-0 truncate">
          {selectedOption?.icon && (
            <span className="shrink-0 text-slate-400">{selectedOption.icon}</span>
          )}
          {selectedOption ? (
            <span className="truncate">{selectedOption.label}</span>
          ) : (
            <span className="text-slate-300">{placeholder}</span>
          )}
        </span>
      </button>

      {/* Chevron / spinner */}
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
        {isLoading
          ? <Loader2 size={s.spinnerSize} className="animate-spin" />
          : <ChevronDown size={s.spinnerSize} className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
        }
      </span>

      {/* Dropdown */}
      {open && (
        <div
          className={[
            `absolute z-50 bg-white border border-slate-200 rounded-[6px] shadow-lg overflow-hidden`,
            dropdownWidth ?? 'w-full min-w-[180px]',
            dropUp ? 'bottom-full mb-1' : 'top-full mt-1',
          ].join(' ')}
        >
          {/* Search */}
          {searchable && (
            <div className="p-2 border-b border-slate-100">
              <div className="relative flex items-center h-8">
                <Search size={13} className="absolute left-2.5 text-slate-400 pointer-events-none" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="검색..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-full pl-8 pr-3 text-sm border border-slate-200 rounded-[4px] outline-none focus:border-[#FF6B2B]"
                />
              </div>
            </div>
          )}

          {/* Options */}
          <ul className="py-1 max-h-[240px] overflow-y-auto" role="listbox">
            {/* Ungrouped */}
            {ungrouped.map((opt) => (
              <OptionItem key={opt.value} opt={opt} selected={selectedValue === opt.value} onSelect={handleSelect} inputSize={inputSize} />
            ))}
            {/* Grouped */}
            {grouped.map(({ group, items }) => items.length > 0 && (
              <li key={group}>
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  {group}
                </div>
                <ul>
                  {items.map((opt) => (
                    <OptionItem key={opt.value} opt={opt} selected={selectedValue === opt.value} onSelect={handleSelect} inputSize={inputSize} />
                  ))}
                </ul>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className={`px-3 py-6 text-center text-slate-400 ${s.text}`}>검색 결과 없음</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );

  // ─── Label & helper ─────────────────────────────────────────────
  const labelCls = 'text-xs font-medium text-slate-500';
  const labelEl = label ? (
    <label htmlFor={uid} className={[
      labelCls, 'select-none shrink-0',
      labelPosition === 'top' ? 'mb-1 block' : '',
      labelPosition === 'bottom' ? 'mt-1 block' : '',
      (labelPosition === 'left' || labelPosition === 'right') ? labelWidth : '',
    ].join(' ')}>
      {label}
    </label>
  ) : null;

  const helperEl = (
    <>
      {hint && !errorText && !successText && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
      {errorText   && <p className="mt-1 text-xs text-red-500">{errorText}</p>}
      {successText && <p className="mt-1 text-xs text-emerald-600">{successText}</p>}
    </>
  );

  if (labelPosition === 'left') {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center gap-3">{labelEl}<div className="flex-1 min-w-0">{trigger}{helperEl}</div></div>
      </div>
    );
  }
  if (labelPosition === 'right') {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center gap-3"><div className="flex-1 min-w-0">{trigger}{helperEl}</div>{labelEl}</div>
      </div>
    );
  }
  if (labelPosition === 'bottom') {
    return <div className={`w-full ${className}`}>{trigger}{labelEl}{helperEl}</div>;
  }
  return <div className={`w-full ${className}`}>{labelEl}{trigger}{helperEl}</div>;
}

// ─── OptionItem ─────────────────────────────────────────────────
function OptionItem({
  opt,
  selected,
  onSelect,
  inputSize = 'md',
}: {
  opt: DropdownOption;
  selected: boolean;
  onSelect: (opt: DropdownOption) => void;
  inputSize?: InputSize;
}) {
  const s = inputSizeConfig[inputSize];
  return (
    <li
      role="option"
      aria-selected={selected}
      onClick={() => onSelect(opt)}
      className={[
        `flex items-center gap-2.5 px-3 py-2 ${s.text} cursor-pointer transition-colors`,
        opt.disabled
          ? 'opacity-40 cursor-not-allowed'
          : selected
          ? 'bg-[#FF6B2B]/8 text-[#FF6B2B]'
          : 'text-slate-700 hover:bg-slate-50',
      ].join(' ')}
    >
      {/* Left icon */}
      {opt.icon && (
        <span className={`shrink-0 ${selected ? 'text-[#FF6B2B]' : 'text-slate-400'}`}>
          {opt.icon}
        </span>
      )}
      {/* Label + description */}
      <span className="flex-1 min-w-0">
        <span className="block truncate">{opt.label}</span>
        {opt.description && (
          <span className="block text-[11px] text-slate-400 mt-0.5 truncate">{opt.description}</span>
        )}
      </span>
      {/* Badge */}
      {opt.badge && <span className="shrink-0">{opt.badge}</span>}
      {/* Check */}
      {selected && <Check size={13} className="shrink-0 text-[#FF6B2B]" />}
    </li>
  );
}