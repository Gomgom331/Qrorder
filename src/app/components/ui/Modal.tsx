import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ScrollBox } from './ScrollBox';

// ─── Size variants ───────────────────────────────────────────────
const sizeClass = {
  sm: 'w-full max-w-[360px]',   // Alert / Confirm
  md: 'w-full max-w-[480px]',   // Login / Password
  lg: 'w-full max-w-[640px]',   // Form / Register
  xl: 'w-full max-w-[900px]',   // Detail / Edit
};

export type ModalSize = keyof typeof sizeClass;

interface ModalProps {
  open: boolean;
  onClose: () => void;
  size?: ModalSize;
  title?: string;
  /** If true, clicking backdrop does NOT close */
  persistent?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({
  open,
  onClose,
  size = 'md',
  title,
  persistent = false,
  children,
  footer,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !persistent) onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, persistent, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={!persistent ? onClose : undefined}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`relative bg-white rounded-[8px] shadow-xl flex flex-col max-h-[90vh] ${sizeClass[size]}`}
        style={{ animation: 'modalIn 0.15s ease-out' }}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
            <h3 className="text-slate-800">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-[4px] transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Body */}
        <ScrollBox variant="subtle" className="flex-1 px-5 py-4">
          {children}
        </ScrollBox>

        {/* Footer */}
        {footer && (
          <div className="shrink-0 border-t border-slate-100 px-5 py-3 flex justify-end gap-2">
            {footer}
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ─── Convenience button components ──────────────────────────────
interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
}

export function ModalBtn({ variant = 'outline', className = '', ...props }: BtnProps) {
  const v = {
    primary:   'bg-[#FF6B2B] text-white hover:bg-[#E85D20] disabled:opacity-50',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    outline:   'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400',
    danger:    'bg-red-500 text-white hover:bg-red-600',
    ghost:     'bg-transparent text-slate-500 hover:bg-slate-100',
  }[variant];

  return (
    <button
      {...props}
      className={`px-4 py-2 text-sm rounded-[4px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${v} ${className}`}
    />
  );
}

// ─── ResultModal ─────────────────────────────────────────────────
export type ResultType = 'saved' | 'deleted' | 'updated' | 'warning' | 'error';

interface ResultModalProps {
  open: boolean;
  onClose: () => void;
  type: ResultType;
  message?: string;
  subMessage?: string;
}

const resultConfig: Record<ResultType, {
  defaultMessage: string;
}> = {
  saved:   { defaultMessage: '저장되었습니다.' },
  deleted: { defaultMessage: '삭제되었습니다.' },
  updated: { defaultMessage: '수정되었습니다.' },
  warning: { defaultMessage: '체크박스 선택이 필요합니다.' },
  error:   { defaultMessage: '오류가 발생했습니다.' },
};

export function ResultModal({
  open,
  onClose,
  type,
  message,
  subMessage,
}: ResultModalProps) {
  const cfg = resultConfig[type];

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} />

      {/* Panel — SM size, same as Alert/Confirm modal */}
      <div
        className="relative bg-white rounded-[8px] shadow-xl w-full max-w-[360px] flex flex-col"
        style={{ animation: 'modalIn 0.15s ease-out' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 shrink-0">
          <h3 className="text-slate-800">알림</h3>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-[4px] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 pb-5">
          <p className="text-sm text-slate-600">
            {message ?? cfg.defaultMessage}
          </p>
          {subMessage && (
            <p className="text-sm text-slate-400 mt-1.5">{subMessage}</p>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-slate-100 px-5 py-3 flex justify-end gap-2">
          <ModalBtn variant="primary" onClick={onClose}>확인</ModalBtn>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ─── ValidationModal ─────────────────────────────────────────────
interface ValidationModalProps {
  open: boolean;
  onClose: () => void;
  /** 미입력 필드명 목록. 없으면 기본 메시지만 표시 */
  fields?: string[];
  /** 커스텀 안내 메시지 (기본: '필수 항목을 모두 입력해 주세요.') */
  message?: string;
}

export function ValidationModal({
  open,
  onClose,
  fields = [],
  message,
}: ValidationModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} />

      {/* Panel */}
      <div
        className="relative bg-white rounded-[8px] shadow-xl w-full max-w-[360px] flex flex-col"
        style={{ animation: 'modalIn 0.15s ease-out' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 shrink-0">
          <h3 className="text-slate-800">입력 오류</h3>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-[4px] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 pb-5 space-y-3">
          {/* 메시지 */}
          <p className="text-sm text-slate-600">
            {message ?? '필수 항목을 모두 입력해 주세요.'}
          </p>

          {/* 미입력 필드 목록 */}
          {fields.length > 0 && (
            <ul className="space-y-1">
              {fields.map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-xs text-amber-700">
                  <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-slate-100 px-5 py-3 flex justify-end">
          <ModalBtn variant="primary" onClick={onClose}>확인</ModalBtn>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ─── ResetModal ──────────────────────────────────────────────────
interface ResetModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  /** 확인 메시지 (기본: '초기화하시겠습니까?') */
  message?: string;
  /** 보조 메시지 (기본: 초기 비밀번호 안내) */
  subMessage?: string;
}

export function ResetModal({
  open,
  onClose,
  onConfirm,
  message = '초기화하시겠습니까?',
  subMessage = '비밀번호가 초기화됩니다.',
}: ResetModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} />

      {/* Panel */}
      <div
        className="relative bg-white rounded-[8px] shadow-xl w-full max-w-[360px] flex flex-col"
        style={{ animation: 'modalIn 0.15s ease-out' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 shrink-0">
          <h3 className="text-slate-800">알림</h3>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-[4px] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 pb-5 space-y-1.5">
          <p className="text-sm text-slate-600">{message}</p>
          {subMessage && (
            <p className="text-sm text-slate-400">{subMessage}</p>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-slate-100 px-5 py-3 flex justify-end gap-2">
          <ModalBtn variant="primary" onClick={onConfirm}>확인</ModalBtn>
          <ModalBtn variant="outline" onClick={onClose}>닫기</ModalBtn>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}