import React, { useState } from 'react';
import { X, AlertCircle, Info, Lightbulb, CheckCircle2 } from 'lucide-react';

export type FormAlertType = 'error' | 'info' | 'guide' | 'success';

const alertConfig: Record<
  FormAlertType,
  { icon: React.ElementType; bg: string; border: string; iconColor: string; titleColor: string; textColor: string; label: string }
> = {
  error: {
    icon: AlertCircle,
    bg: 'bg-red-50',
    border: 'border-red-200',
    iconColor: 'text-red-500',
    titleColor: 'text-red-700',
    textColor: 'text-red-600',
    label: '오류',
  },
  info: {
    icon: Info,
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconColor: 'text-blue-500',
    titleColor: 'text-blue-700',
    textColor: 'text-blue-600',
    label: '안내',
  },
  guide: {
    icon: Lightbulb,
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconColor: 'text-amber-500',
    titleColor: 'text-amber-700',
    textColor: 'text-amber-600',
    label: '가이드',
  },
  success: {
    icon: CheckCircle2,
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconColor: 'text-emerald-500',
    titleColor: 'text-emerald-700',
    textColor: 'text-emerald-600',
    label: '성공',
  },
};

// ─── Props ───────────────────────────────────────────────────────
export interface FormAlertProps {
  type?: FormAlertType;
  title?: string;
  description?: string | React.ReactNode;
  /** List of error messages (for field-level errors) */
  errors?: string[];
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export function FormAlert({
  type = 'error',
  title,
  description,
  errors,
  dismissible = true,
  onDismiss,
  className = '',
}: FormAlertProps) {
  const cfg = alertConfig[type];
  const Icon = cfg.icon;

  return (
    <div
      className={`rounded-[4px] border ${cfg.bg} ${cfg.border} px-4 py-3 flex gap-3 ${className}`}
      role="alert"
    >
      {/* Icon */}
      <span className={`shrink-0 mt-0.5 ${cfg.iconColor}`}>
        <Icon size={16} />
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <p className={`text-sm font-medium ${cfg.titleColor}`}>{title}</p>
        )}
        {description && (
          <p className={`text-sm mt-0.5 ${cfg.textColor} ${title ? 'mt-1' : ''}`}>
            {description}
          </p>
        )}
        {errors && errors.length > 0 && (
          <ul className={`text-sm mt-1 space-y-0.5 list-disc list-inside ${cfg.textColor}`}>
            {errors.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Dismiss button */}
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className={`shrink-0 mt-0.5 ${cfg.iconColor} opacity-60 hover:opacity-100 transition-opacity p-0.5 rounded-[3px] hover:bg-black/5`}
          aria-label="닫기"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}

// ─── Controlled dismissible wrapper ─────────────────────────────
export function DismissibleFormAlert(props: Omit<FormAlertProps, 'onDismiss'> & { defaultShow?: boolean }) {
  const [visible, setVisible] = useState(props.defaultShow ?? true);
  if (!visible) return null;
  return <FormAlert {...props} dismissible onDismiss={() => setVisible(false)} />;
}
