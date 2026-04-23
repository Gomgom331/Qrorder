import { useState, useRef } from 'react';
import {
  Paperclip, FileText, X, Upload,
  File, Image, FileCode, FileSpreadsheet,
  Download, CheckCircle2, Info, AlertTriangle,
} from 'lucide-react';

// ─── Helpers ─────────────────────────────────────────────────────

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
        <p className="text-sm font-medium text-slate-800">{title}</p>
        {desc && <p className="text-xs text-slate-400 mt-0.5">{desc}</p>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-medium text-slate-500 mb-3 mt-6 first:mt-0 uppercase tracking-wide">{children}</p>;
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-slate-400 mt-2 text-center">{children}</p>;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ─── 확장자별 아이콘 ─────────────────────────────────────────────

function FileIcon({ name, size = 13 }: { name: string; size?: number }) {
  const ext = name.split('.').pop()?.toLowerCase() ?? '';
  if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext))
    return <Image size={size} className="shrink-0 text-blue-400" />;
  if (['xls', 'xlsx', 'csv'].includes(ext))
    return <FileSpreadsheet size={size} className="shrink-0 text-emerald-500" />;
  if (['js', 'ts', 'tsx', 'jsx', 'html', 'css', 'json'].includes(ext))
    return <FileCode size={size} className="shrink-0 text-purple-400" />;
  if (['pdf'].includes(ext))
    return <FileText size={size} className="shrink-0 text-red-400" />;
  return <File size={size} className="shrink-0 text-slate-400" />;
}

// ─── 크기 설정 ────────────────────────────────────────────────────

type UploadSize = 'sm' | 'md' | 'lg';

const SIZE_CONFIG: Record<UploadSize, {
  height: string; text: string; px: string; iconSize: number; itemPy: string; rowH: number;
}> = {
  sm: { height: 'h-[30px]', text: 'text-xs', px: 'px-2.5', iconSize: 12, itemPy: 'py-1.5', rowH: 30 },
  md: { height: 'h-9',      text: 'text-sm', px: 'px-3',   iconSize: 14, itemPy: 'py-2',   rowH: 37 },
  lg: { height: 'h-11',     text: 'text-sm', px: 'px-4',   iconSize: 15, itemPy: 'py-2.5', rowH: 44 },
};

// ─── Hint 변형 ────────────────────────────────────────────────────

type HintVariant = 'simple' | 'badge' | 'info' | 'warning' | 'error';

interface HintConfig {
  variant: HintVariant;
  maxSize?: string;
  maxCount?: number;
  allowedExts?: string[];
  message?: string;
  currentCount?: number;
}

function FileHint({ config }: { config: HintConfig }) {
  const { variant, maxSize, maxCount, allowedExts, message, currentCount } = config;
  const extStr = allowedExts?.join(' · ') ?? '';

  if (variant === 'simple') {
    const parts = [maxSize && `최대 ${maxSize}`, maxCount && `최대 ${maxCount}개`, extStr].filter(Boolean);
    return (
      <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
        <Info size={11} className="shrink-0" />
        {parts.join(' · ')}
      </p>
    );
  }

  if (variant === 'badge') {
    return (
      <div className="flex gap-1.5 mt-1.5 flex-wrap">
        {maxSize && (
          <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]">
            <span>📏</span> {maxSize} 이하
          </span>
        )}
        {maxCount && (
          <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]">
            <span>📁</span> 최대 {maxCount}개
          </span>
        )}
        {allowedExts && allowedExts.length > 0 && (
          <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]">
            {extStr}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'info') {
    return (
      <div className="mt-1.5 flex items-start gap-1.5 px-2.5 py-1.5 bg-blue-50 border border-blue-100 rounded-[4px]">
        <Info size={12} className="text-blue-400 shrink-0 mt-px" />
        <p className="text-xs text-blue-600">
          {message ?? `파일은 최대 ${maxCount ?? ''}개, 각 ${maxSize ?? ''}까지 첨부 가능합니다. ${extStr ? `${extStr} 형식만 허용됩니다.` : ''}`}
        </p>
      </div>
    );
  }

  if (variant === 'warning') {
    return (
      <div className="mt-1.5 flex items-start gap-1.5 px-2.5 py-1.5 bg-amber-50 border border-amber-100 rounded-[4px]">
        <AlertTriangle size={12} className="text-amber-500 shrink-0 mt-px" />
        <p className="text-xs text-amber-700">
          {message ?? `최대 ${maxCount}개 파일이 등록되었습니다. 추가하려면 기존 파일을 제거하세요.`}
        </p>
      </div>
    );
  }

  if (variant === 'error') {
    return (
      <div className="mt-1.5 flex items-start gap-1.5 px-2.5 py-1.5 bg-red-50 border border-red-100 rounded-[4px]">
        <AlertTriangle size={12} className="text-red-400 shrink-0 mt-px" />
        <p className="text-xs text-red-600">
          {message ?? '허용되지 않는 파일 형식이 포함되어 있습니다.'}
        </p>
      </div>
    );
  }

  return null;
}

// ─── FileInputGroup ───────────────────────────────────────────────

interface FileInputGroupProps {
  size?: UploadSize;
  multiple?: boolean;
  disabled?: boolean;
  existingFiles?: string[];
  onRemoveExisting?: (name: string) => void;
  newFiles?: File[];
  onRemoveNew?: (index: number) => void;
  onFileChange?: (files: File[]) => void;
  placeholder?: string;
  hint?: HintConfig;
  scrollable?: boolean;
  maxVisible?: number;
  label?: string;
}

function FileInputGroup({
  size = 'md',
  multiple = false,
  disabled = false,
  existingFiles = [],
  onRemoveExisting,
  newFiles = [],
  onRemoveNew,
  onFileChange,
  placeholder,
  hint,
  scrollable = false,
  maxVisible = 5,
  label,
}: FileInputGroupProps) {
  const ref = useRef<HTMLInputElement>(null);
  const s = SIZE_CONFIG[size];
  const hasFiles = existingFiles.length + newFiles.length > 0;
  const totalFiles = existingFiles.length + newFiles.length;
  const ph = placeholder ?? (multiple ? '파일을 선택하거나 드래그하세요' : '파일을 선택하세요');
  const scrollMaxH = s.rowH * maxVisible;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length) onFileChange?.(files);
    e.target.value = '';
  };

  const rows = (
    <>
      {existingFiles.map((name) => (
        <div
          key={name}
          className={`flex items-center gap-2.5 ${s.px} ${s.itemPy} border-b border-slate-100 last:border-b-0 hover:bg-slate-50 group transition-colors`}
        >
          <FileIcon name={name} />
          <span className={`flex-1 ${s.text} text-slate-700 truncate`}>{name}</span>
          {onRemoveExisting && (
            <button
              type="button"
              onClick={() => onRemoveExisting(name)}
              className="shrink-0 w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
            >
              <X size={12} />
            </button>
          )}
        </div>
      ))}
      {newFiles.map((file, i) => (
        <div
          key={`new-${i}`}
          className={`flex items-center gap-2.5 ${s.px} ${s.itemPy} border-b border-slate-100 last:border-b-0 bg-[#FF6B2B]/[0.03] hover:bg-[#FF6B2B]/[0.06] group transition-colors`}
        >
          <FileIcon name={file.name} />
          <span className={`flex-1 ${s.text} text-slate-700 truncate`}>{file.name}</span>
          <span className="shrink-0 text-xs text-slate-400">{formatFileSize(file.size)}</span>
          {onRemoveNew && (
            <button
              type="button"
              onClick={() => onRemoveNew(i)}
              className="shrink-0 w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
            >
              <X size={12} />
            </button>
          )}
        </div>
      ))}
    </>
  );

  return (
    <div>
      {label && (
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-slate-500">{label}</span>
          {hasFiles && (
            <span className={`text-[11px] tabular-nums font-medium px-1.5 py-0.5 rounded-[3px] ${
              disabled ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'
            }`}>
              {totalFiles}
            </span>
          )}
        </div>
      )}
      <div className={`flex ${s.height}`}>
        <div className={`flex flex-1 items-center min-w-0 border border-r-0 rounded-l-[4px] gap-2 ${s.px} ${
          disabled ? 'bg-slate-50 border-slate-200 cursor-not-allowed' : 'bg-white border-slate-200'
        }`}>
          <Paperclip size={s.iconSize} className={`shrink-0 ${disabled ? 'text-slate-300' : 'text-slate-400'}`} />
          <span className={`flex-1 truncate ${s.text} text-slate-300`}>{ph}</span>
        </div>
        <button
          type="button"
          disabled={disabled}
          onClick={() => ref.current?.click()}
          className={`shrink-0 ${s.height} px-3.5 ${s.text} font-medium border border-slate-200 rounded-r-[4px] transition-colors whitespace-nowrap ${
            disabled
              ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
              : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800 active:bg-slate-200'
          }`}
        >
          파일 선택
        </button>
      </div>
      <input ref={ref} type="file" multiple={multiple} className="hidden" onChange={handleChange} />

      {hint && <FileHint config={hint} />}

      {hasFiles && (
        <div className="mt-2 border border-slate-200 rounded-[4px] overflow-hidden">
          {scrollable && totalFiles > maxVisible ? (
            <div
              className="overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full"
              style={{ maxHeight: `${scrollMaxH}px` }}
            >
              {rows}
            </div>
          ) : rows}
        </div>
      )}
    </div>
  );
}

// ─── FileDownloadList ─────────────────────────────────────────────

interface DownloadFile { name: string; size?: string; }

interface FileDownloadListProps {
  files: DownloadFile[];
  size?: UploadSize;
  onDownload?: (name: string) => void;
  scrollable?: boolean;
  maxVisible?: number;
}

function FileDownloadList({ files, size = 'md', onDownload, scrollable = false, maxVisible = 5 }: FileDownloadListProps) {
  const s = SIZE_CONFIG[size];
  const scrollMaxH = s.rowH * maxVisible;

  if (!files.length) {
    return (
      <div className="flex items-center gap-2 px-3 py-2.5 border border-slate-200 rounded-[4px] text-slate-400">
        <Paperclip size={13} />
        <span className={`${s.text}`}>첨부파일 없음</span>
      </div>
    );
  }

  const rows = files.map((f) => (
    <div
      key={f.name}
      onClick={() => onDownload?.(f.name)}
      className={`flex items-center gap-2.5 ${s.px} ${s.itemPy} border-b border-slate-100 last:border-b-0 hover:bg-slate-50 group transition-colors cursor-pointer`}
    >
      <FileIcon name={f.name} />
      <span className={`flex-1 ${s.text} text-slate-700 truncate group-hover:text-[#FF6B2B] transition-colors`}>
        {f.name}
      </span>
      {f.size && <span className="text-xs text-slate-400 shrink-0">{f.size}</span>}
      <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded text-slate-300 group-hover:text-[#FF6B2B] group-hover:bg-[#FF6B2B]/10 transition-all">
        <Download size={12} />
      </span>
    </div>
  ));

  return (
    <div className="border border-slate-200 rounded-[4px] overflow-hidden">
      {scrollable && files.length > maxVisible ? (
        <div
          className="overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full"
          style={{ maxHeight: `${scrollMaxH}px` }}
        >
          {rows}
        </div>
      ) : rows}
    </div>
  );
}

// ─── StaticFileList (가이드 전용 정적 미리보기) ──────────────────

function StaticFileList({ files, size = 'md', showNew = false }: { files: string[]; size?: UploadSize; showNew?: boolean }) {
  const s = SIZE_CONFIG[size];
  return (
    <div className="border border-slate-200 rounded-[4px] overflow-hidden">
      {files.map((name, i) => {
        const isNew = showNew && i >= Math.ceil(files.length / 2);
        return (
          <div key={name} className={`flex items-center gap-2.5 ${s.px} ${s.itemPy} border-b border-slate-100 last:border-b-0 group ${isNew ? 'bg-[#FF6B2B]/[0.03] hover:bg-[#FF6B2B]/[0.06]' : 'hover:bg-slate-50'} transition-colors`}>
            <FileIcon name={name} />
            <span className={`flex-1 ${s.text} text-slate-700 truncate`}>{name}</span>
            {isNew && <span className="text-xs text-slate-400">2.4 MB</span>}
            <button type="button" className="shrink-0 w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"><X size={12} /></button>
          </div>
        );
      })}
    </div>
  );
}

// ─── 인터랙티브 업로드 데모 ───────────────────────────────────────

const MAX_FILES = 5;
const MAX_SIZE_MB = 10;

function InteractiveUploadDemo() {
  const [existingFiles, setExistingFiles] = useState<string[]>([
    '이용약관_개정안_v2.pdf',
    '서비스_가이드.docx',
  ]);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const total = existingFiles.length + newFiles.length;
  const isMaxReached = total >= MAX_FILES;

  const handleFileChange = (files: File[]) => {
    setError(null);
    const sizeErrors = files.filter((f) => f.size > MAX_SIZE_MB * 1024 * 1024);
    if (sizeErrors.length) {
      setError(`${sizeErrors[0].name}: 파일 크기가 ${MAX_SIZE_MB}MB를 초과합니다.`);
      return;
    }
    const remaining = MAX_FILES - total;
    if (files.length > remaining) {
      setError(`최대 ${MAX_FILES}개까지만 첨부 가능합니다. ${remaining}개만 추가할 수 있습니다.`);
      files = files.slice(0, remaining);
    }
    setNewFiles((p) => [...p, ...files]);
  };

  const hint: HintConfig = isMaxReached
    ? { variant: 'warning', maxCount: MAX_FILES, currentCount: total }
    : error
    ? { variant: 'error', message: error }
    : { variant: 'badge', maxSize: `${MAX_SIZE_MB}MB`, maxCount: MAX_FILES, allowedExts: ['PDF', 'DOCX', 'XLSX', 'PNG'] };

  return (
    <FileInputGroup
      label="첨부파일"
      size="md"
      multiple
      disabled={isMaxReached}
      existingFiles={existingFiles}
      newFiles={newFiles}
      onRemoveExisting={(name) => { setExistingFiles((p) => p.filter((n) => n !== name)); setError(null); }}
      onRemoveNew={(i) => { setNewFiles((p) => p.filter((_, idx) => idx !== i)); setError(null); }}
      onFileChange={handleFileChange}
      hint={hint}
      scrollable
      maxVisible={5}
    />
  );
}

// ─── 인터랙티브 다운로드 데모 ─────────────────────────────────────

const DEMO_DOWNLOAD_FILES: DownloadFile[] = [
  { name: '이용약관_개정안_v2.pdf',    size: '2.4 MB' },
  { name: '서비스_이용가이드.pdf',     size: '3.1 MB' },
  { name: '매출현황_Q1_2026.xlsx',    size: '1.1 MB' },
  { name: 'store_logo_final.png',     size: '420 KB' },
  { name: '직원_매뉴얼_v3.docx',      size: '890 KB' },
  { name: '계약서_갱신본_2026.pdf',   size: '1.8 MB' },
  { name: 'api_spec_v2.json',         size: '48 KB'  },
  { name: '메뉴판_디자인.png',         size: '5.2 MB' },
];

function InteractiveDownloadDemo() {
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const handleDownload = (name: string) => {
    setDownloaded(name);
    setTimeout(() => setDownloaded(null), 2200);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-1.5">
        <p className="text-xs font-medium text-slate-500">첨부파일</p>
        <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-[3px]">{DEMO_DOWNLOAD_FILES.length}</span>
        <span className="text-[11px] text-slate-400 ml-auto">5개 초과 시 스크롤</span>
      </div>
      <FileDownloadList
        size="md"
        files={DEMO_DOWNLOAD_FILES}
        onDownload={handleDownload}
        scrollable
        maxVisible={5}
      />
      <div className={`flex items-center gap-2 px-3 py-2 rounded-[4px] border transition-all duration-300 ${
        downloaded ? 'bg-emerald-50 border-emerald-200 opacity-100' : 'opacity-0 border-transparent'
      }`}>
        <CheckCircle2 size={13} className="shrink-0 text-emerald-500" />
        <span className="text-xs text-emerald-700 truncate">"{downloaded}" 다운로드 시작됨</span>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────

export function FileUploadGuide() {
  return (
    <div className="p-5 lg:p-6 space-y-4 max-w-[900px]">
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>UI 가이드</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">첨부파일 업로드</span>
      </nav>

      {/* ── 1. 구조 ── */}
      <Section title="구조 · 구성요소" desc="인풋 그룹(표시 영역 + 파일 선택 버튼) + 힌트 텍스트 + 파일 목록으로 구성됩니다.">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-6">
          <div>
            <div className="flex h-9">
              <div className="flex flex-1 items-center min-w-0 border border-r-0 border-[#FF6B2B] rounded-l-[4px] ring-2 ring-[#FF6B2B]/20 bg-white px-3 gap-2">
                <Paperclip size={14} className="shrink-0 text-[#FF6B2B]" />
                <span className="flex-1 truncate text-sm text-slate-300">파일을 선택하거나 드래그하세요</span>
              </div>
              <button className="shrink-0 h-9 px-3.5 text-sm font-medium border border-slate-200 rounded-r-[4px] bg-slate-50 text-slate-600 whitespace-nowrap">파일 선택</button>
            </div>
            <p className="text-[11px] text-[#FF6B2B] mt-1.5 text-center">① 인풋 그룹 (Paperclip + 버튼)</p>
          </div>
          <div className="text-slate-300 text-lg font-light">+</div>
          <div>
            <div className="flex gap-1.5 mt-0 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-[#FF6B2B]/10 text-[#FF6B2B] rounded-[3px]">📏 10MB 이하</span>
              <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-[#FF6B2B]/10 text-[#FF6B2B] rounded-[3px]">📁 최대 5개</span>
              <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-[#FF6B2B]/10 text-[#FF6B2B] rounded-[3px]">PDF · DOCX</span>
            </div>
            <p className="text-[11px] text-[#FF6B2B] mt-1.5 text-center">② 힌트 텍스트 (제약 안내)</p>
          </div>
        </div>

        <Sub>파일 목록 구조</Sub>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-slate-500 mb-2">기존 파일 <span className="text-slate-400">(수정 시 — slate 계열)</span></p>
            <div className="border border-slate-200 rounded-[4px] overflow-hidden">
              {['서비스_가이드.pdf', '약관동의서.docx'].map((name) => (
                <div key={name} className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 group transition-colors">
                  <FileIcon name={name} />
                  <span className="flex-1 text-sm text-slate-700 truncate">{name}</span>
                  <button className="shrink-0 w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"><X size={12} /></button>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">hover → X 버튼 노출</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-2">신규 파일 <span className="text-slate-400">(새로 추가 — 주황 tint + 용량)</span></p>
            <div className="border border-slate-200 rounded-[4px] overflow-hidden">
              {[{ name: '계약서_최종.pdf', size: '1.2 MB' }, { name: 'logo.png', size: '340 KB' }].map(({ name, size }) => (
                <div key={name} className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0 bg-[#FF6B2B]/[0.03] hover:bg-[#FF6B2B]/[0.06] group transition-colors">
                  <FileIcon name={name} />
                  <span className="flex-1 text-sm text-slate-700 truncate">{name}</span>
                  <span className="text-xs text-slate-400 shrink-0">{size}</span>
                  <button className="shrink-0 w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"><X size={12} /></button>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">용량 자동 계산 · hover → X 노출</p>
          </div>
        </div>
      </Section>

      {/* ── 2. 힌트 텍스트 · 제약 안내 ── */}
      <Section title="힌트 텍스트 · 제약 안내 (Hint)" desc="인풋 그룹 아래에 최대 용량, 개수 제한, 허용 형식 등을 안내합니다.">

        <Sub>Variant 1 — Simple (한 줄 텍스트)</Sub>
        <div className="max-w-[520px] mb-6">
          <div className="flex h-9">
            <div className="flex flex-1 items-center min-w-0 border border-r-0 border-slate-200 rounded-l-[4px] bg-white px-3 gap-2">
              <Paperclip size={14} className="shrink-0 text-slate-400" />
              <span className="flex-1 truncate text-sm text-slate-300">파일을 선택하세요</span>
            </div>
            <button className="shrink-0 h-9 px-3.5 text-sm font-medium border border-slate-200 rounded-r-[4px] bg-slate-50 text-slate-600 whitespace-nowrap">파일 선택</button>
          </div>
          <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
            <Info size={11} className="shrink-0" />
            최대 10MB · 최대 5개 · PDF, DOCX, XLSX, PNG 허용
          </p>
        </div>

        <Sub>Variant 2 — Badge (뱃지 칩)</Sub>
        <div className="max-w-[520px] mb-6">
          <div className="flex h-9">
            <div className="flex flex-1 items-center min-w-0 border border-r-0 border-slate-200 rounded-l-[4px] bg-white px-3 gap-2">
              <Paperclip size={14} className="shrink-0 text-slate-400" />
              <span className="flex-1 truncate text-sm text-slate-300">파일을 선택하세요</span>
            </div>
            <button className="shrink-0 h-9 px-3.5 text-sm font-medium border border-slate-200 rounded-r-[4px] bg-slate-50 text-slate-600 whitespace-nowrap">파일 선택</button>
          </div>
          <div className="flex gap-1.5 mt-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]"><span>📏</span> 10MB 이하</span>
            <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]"><span>📁</span> 최대 5개</span>
            <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]">PDF · DOCX · XLSX · PNG</span>
          </div>
        </div>

        <Sub>Variant 3 — Info Box (안내 박스)</Sub>
        <div className="max-w-[520px] mb-6">
          <div className="flex h-9">
            <div className="flex flex-1 items-center min-w-0 border border-r-0 border-slate-200 rounded-l-[4px] bg-white px-3 gap-2">
              <Paperclip size={14} className="shrink-0 text-slate-400" />
              <span className="flex-1 truncate text-sm text-slate-300">파일을 선택하세요</span>
            </div>
            <button className="shrink-0 h-9 px-3.5 text-sm font-medium border border-slate-200 rounded-r-[4px] bg-slate-50 text-slate-600 whitespace-nowrap">파일 선택</button>
          </div>
          <div className="mt-1.5 flex items-start gap-1.5 px-2.5 py-1.5 bg-blue-50 border border-blue-100 rounded-[4px]">
            <Info size={12} className="text-blue-400 shrink-0 mt-px" />
            <p className="text-xs text-blue-600">파일은 최대 5개, 각 10MB까지 첨부 가능합니다. PDF, DOCX, XLSX, PNG 형식만 허용됩니다.</p>
          </div>
        </div>

        <Sub>Variant 4 — Warning (개수 한도 초과)</Sub>
        <div className="max-w-[520px] mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-slate-500">첨부파일</span>
            <span className="text-[11px] tabular-nums font-medium px-1.5 py-0.5 rounded-[3px] bg-amber-100 text-amber-600">5</span>
          </div>
          <div className="flex h-9">
            <div className="flex flex-1 items-center min-w-0 border border-r-0 border-slate-200 rounded-l-[4px] bg-slate-50 px-3 gap-2 cursor-not-allowed">
              <Paperclip size={14} className="shrink-0 text-slate-300" />
              <span className="flex-1 truncate text-sm text-slate-300">파일을 선택하세요</span>
            </div>
            <button disabled className="shrink-0 h-9 px-3.5 text-sm font-medium border border-slate-200 rounded-r-[4px] bg-slate-50 text-slate-300 cursor-not-allowed whitespace-nowrap">파일 선택</button>
          </div>
          <div className="mt-1.5 flex items-start gap-1.5 px-2.5 py-1.5 bg-amber-50 border border-amber-100 rounded-[4px]">
            <AlertTriangle size={12} className="text-amber-500 shrink-0 mt-px" />
            <p className="text-xs text-amber-700">최대 5개 파일이 등록되었습니다. 추가하려면 기존 파일을 제거하세요.</p>
          </div>
        </div>

        <Sub>Variant 5 — Error (형식/용량 오류)</Sub>
        <div className="max-w-[520px]">
          <div className="flex h-9">
            <div className="flex flex-1 items-center min-w-0 border border-r-0 border-red-300 rounded-l-[4px] ring-1 ring-red-200 bg-white px-3 gap-2">
              <Paperclip size={14} className="shrink-0 text-red-400" />
              <span className="flex-1 truncate text-sm text-slate-300">파일을 선택하세요</span>
            </div>
            <button className="shrink-0 h-9 px-3.5 text-sm font-medium border border-slate-200 rounded-r-[4px] bg-slate-50 text-slate-600 whitespace-nowrap">파일 선택</button>
          </div>
          <div className="mt-1.5 flex items-start gap-1.5 px-2.5 py-1.5 bg-red-50 border border-red-100 rounded-[4px]">
            <AlertTriangle size={12} className="text-red-400 shrink-0 mt-px" />
            <p className="text-xs text-red-600">report_final.exe: 허용되지 않는 파일 형식입니다. PDF, DOCX, XLSX, PNG만 업로드 가능합니다.</p>
          </div>
        </div>
      </Section>

      {/* ── 3. 크기 변형 ── */}
      <Section title="크기 변형 (Size)" desc="SM 30px / MD 36px / LG 44px — InputField 높이 규격과 동일합니다.">
        <div className="space-y-5">
          {(['sm', 'md', 'lg'] as UploadSize[]).map((size) => {
            const s = SIZE_CONFIG[size];
            return (
              <div key={size}>
                <Sub>{size.toUpperCase()} · {size === 'sm' ? '30px' : size === 'md' ? '36px' : '44px'}</Sub>
                <div className={`flex ${s.height}`}>
                  <div className={`flex flex-1 items-center min-w-0 border border-r-0 border-slate-200 rounded-l-[4px] bg-white ${s.px} gap-2`}>
                    <Paperclip size={s.iconSize} className="shrink-0 text-slate-400" />
                    <span className={`flex-1 truncate ${s.text} text-slate-300`}>파일을 선택하세요</span>
                  </div>
                  <button className={`shrink-0 ${s.height} px-3.5 ${s.text} font-medium border border-slate-200 rounded-r-[4px] bg-slate-50 text-slate-600 whitespace-nowrap`}>파일 선택</button>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
                  <Info size={11} className="shrink-0" />
                  {size === 'sm' ? '최대 5MB · 3개 이하' : size === 'md' ? '최대 10MB · 최대 5개 · PDF, DOCX, PNG 허용' : '파일은 각 10MB 이하, 최대 10개까지 첨부 가능합니다.'}
                </p>
                <Label>{size === 'sm' ? 'SM — 컴팩트 폼 / 인라인 영역' : size === 'md' ? 'MD — 기본값, 모달 폼 표준' : 'LG — 독립 업로드 또는 강조 영역'}</Label>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── 4. 스크롤 변형 ── */}
      <Section
        title="스크롤 변형 (5개 초과 시 스크롤)"
        desc="파일이 maxVisible(기본 5개)을 초과하면 목록 영역에 스크롤이 적용됩니다. 업로드·다운로드 모두 동일한 규칙입니다."
      >
        <div className="grid grid-cols-2 gap-8">
          {/* 업로드 스크롤 */}
          <div>
            <Sub>업로드 목록 — 7개 (5개 초과 스크롤)</Sub>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-slate-500">첨부파일</span>
              <span className="text-[11px] tabular-nums font-medium px-1.5 py-0.5 rounded-[3px] bg-slate-100 text-slate-500">7</span>
            </div>
            <div className="flex h-9 mb-2">
              <div className="flex flex-1 items-center min-w-0 border border-r-0 border-slate-200 rounded-l-[4px] bg-white px-3 gap-2">
                <Paperclip size={14} className="shrink-0 text-slate-400" />
                <span className="flex-1 truncate text-sm text-slate-300">파일을 선택하세요</span>
              </div>
              <button className="shrink-0 h-9 px-3.5 text-sm font-medium border border-slate-200 rounded-r-[4px] bg-slate-50 text-slate-600 whitespace-nowrap">파일 선택</button>
            </div>
            <div className="border border-slate-200 rounded-[4px] overflow-hidden">
              <div
                className="overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full"
                style={{ maxHeight: `${SIZE_CONFIG.md.rowH * 5}px` }}
              >
                {['이용약관_개정안_v2.pdf', '서비스_가이드.docx'].map((name) => (
                  <div key={name} className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 group transition-colors">
                    <FileIcon name={name} />
                    <span className="flex-1 text-sm text-slate-700 truncate">{name}</span>
                    <button className="w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"><X size={12} /></button>
                  </div>
                ))}
                {[
                  { name: '계약서_최종.pdf', size: '1.2 MB' },
                  { name: 'store_logo.png', size: '420 KB' },
                  { name: '매출현황_Q1.xlsx', size: '1.1 MB' },
                  { name: '메뉴_디자인_최종.png', size: '5.2 MB' },
                  { name: 'api_response.json', size: '12 KB' },
                ].map(({ name, size }) => (
                  <div key={name} className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0 bg-[#FF6B2B]/[0.03] hover:bg-[#FF6B2B]/[0.06] group transition-colors">
                    <FileIcon name={name} />
                    <span className="flex-1 text-sm text-slate-700 truncate">{name}</span>
                    <span className="text-xs text-slate-400 shrink-0">{size}</span>
                    <button className="w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"><X size={12} /></button>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">5개까지 표시 → 나머지는 스크롤 · 스크롤바 1.5px 슬림</p>
          </div>

          {/* 다운로드 스크롤 */}
          <div>
            <Sub>다운로드 목록 — 8개 (5개 초과 스크롤)</Sub>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-slate-500">첨부파일</span>
              <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-[3px]">8</span>
            </div>
            <div className="border border-slate-200 rounded-[4px] overflow-hidden">
              <div
                className="overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full"
                style={{ maxHeight: `${SIZE_CONFIG.md.rowH * 5}px` }}
              >
                {[
                  { name: '이용약관_개정안_v2.pdf', size: '2.4 MB' },
                  { name: '서비스_이용가이드.pdf', size: '3.1 MB' },
                  { name: '매출현황_Q1_2026.xlsx', size: '1.1 MB' },
                  { name: 'store_logo_final.png', size: '420 KB' },
                  { name: '직원_매뉴얼_v3.docx', size: '890 KB' },
                  { name: '계약서_갱신본_2026.pdf', size: '1.8 MB' },
                  { name: 'api_spec_v2.json', size: '48 KB' },
                  { name: '메뉴판_디자인.png', size: '5.2 MB' },
                ].map((f) => (
                  <div key={f.name} className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 group transition-colors cursor-pointer">
                    <FileIcon name={f.name} />
                    <span className="flex-1 text-sm text-slate-700 truncate group-hover:text-[#FF6B2B] transition-colors">{f.name}</span>
                    <span className="text-xs text-slate-400 shrink-0">{f.size}</span>
                    <span className="w-6 h-6 flex items-center justify-center rounded text-slate-300 group-hover:text-[#FF6B2B] group-hover:bg-[#FF6B2B]/10 transition-all"><Download size={12} /></span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">5개 노출 → 스크롤 · 행 클릭 시 다운로드</p>
          </div>
        </div>

        {/* 스크롤 없음 vs 있음 비교 */}
        <Sub>파일 수에 따른 비교</Sub>
        <div className="grid grid-cols-3 gap-4">
          {[
            { count: 2, label: '2개 — 스크롤 없음' },
            { count: 5, label: '5개 — 경계 (스크롤 없음)' },
            { count: 7, label: '7개 — 스크롤 발생' },
          ].map(({ count, label }) => {
            const files = Array.from({ length: count }, (_, i) => ({
              name: `첨부파일_0${i + 1}.pdf`,
              size: `${(Math.random() * 3 + 0.5).toFixed(1)} MB`,
            }));
            return (
              <div key={count}>
                <p className="text-[11px] text-slate-400 mb-1.5">{label}</p>
                <div className="border border-slate-200 rounded-[4px] overflow-hidden">
                  <div
                    className={count > 5 ? 'overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full' : ''}
                    style={count > 5 ? { maxHeight: `${SIZE_CONFIG.md.rowH * 5}px` } : undefined}
                  >
                    {files.map((f) => (
                      <div key={f.name} className="flex items-center gap-2 px-3 py-2 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 group cursor-pointer transition-colors">
                        <FileIcon name={f.name} />
                        <span className="flex-1 text-sm text-slate-700 truncate group-hover:text-[#FF6B2B] transition-colors">{f.name}</span>
                        <span className="text-xs text-slate-400 shrink-0">{f.size}</span>
                        <span className="w-5 h-5 flex items-center justify-center text-slate-300 group-hover:text-[#FF6B2B] transition-colors"><Download size={11} /></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── 5. 수정 시나리오 ── */}
      <Section title="수정 모달 시나리오" desc="기존 파일(slate) + 신규 추가 파일(주황 tint)이 한 목록에 구분 표시됩니다.">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Sub>Before — 기존 파일 2개</Sub>
            <StaticFileList files={['이용약관_개정안_v2.pdf', '개정사항_요약.docx']} size="md" />
            <p className="text-xs text-slate-400 mt-2">수정 진입 시 기존 첨부파일 목록 로드</p>
          </div>
          <div>
            <Sub>After — 기존 2개 + 신규 2개 추가</Sub>
            <StaticFileList files={['이용약관_개정안_v2.pdf', '개정사항_요약.docx', '추가자료.pdf', 'data_2026.xlsx']} size="md" showNew />
            <p className="text-xs text-slate-400 mt-2">신규 파일은 주황 tint + 파일 용량 노출</p>
          </div>
        </div>
      </Section>

      {/* ── 6. 뷰 모드 · 다운로드 ── */}
      <Section title="뷰 모드 · 다운로드 (View / Download)" desc="읽기 전용 상세보기에서 사용합니다. 업로드 인풋 없이 파일 목록만 표시, 행 전체가 클릭 영역입니다.">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div>
            <Sub>Empty</Sub>
            <FileDownloadList files={[]} size="md" />
            <Label>첨부파일 없음 — 빈 상태 표시</Label>
          </div>
          <div>
            <Sub>Single</Sub>
            <FileDownloadList size="md" files={[{ name: '계약서_최종.pdf', size: '1.2 MB' }]} />
            <Label>파일 1개 · 행 클릭 → 다운로드</Label>
          </div>
          <div>
            <Sub>Multiple (3개)</Sub>
            <FileDownloadList size="md" files={[
              { name: '이용약관_v2.pdf', size: '2.4 MB' },
              { name: '서비스가이드.pdf', size: '3.1 MB' },
              { name: '매출현황.xlsx', size: '1.1 MB' },
            ]} />
            <Label>각 행 개별 다운로드</Label>
          </div>
        </div>

        <Sub>Default vs Hover 상태</Sub>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-slate-400 mb-2">Default</p>
            <div className="border border-slate-200 rounded-[4px] overflow-hidden">
              {[{ name: '서비스가이드.pdf', size: '3.1 MB' }, { name: '매출현황.xlsx', size: '1.1 MB' }].map((f) => (
                <div key={f.name} className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0">
                  <FileIcon name={f.name} />
                  <span className="flex-1 text-sm text-slate-700 truncate">{f.name}</span>
                  <span className="text-xs text-slate-400 shrink-0">{f.size}</span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded text-slate-300"><Download size={12} /></span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">아이콘 slate-300 상시 노출</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-2">Hover (첫 번째 행 시뮬레이션)</p>
            <div className="border border-slate-200 rounded-[4px] overflow-hidden">
              <div className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 bg-slate-50 cursor-pointer">
                <FileIcon name="서비스가이드.pdf" />
                <span className="flex-1 text-sm text-[#FF6B2B] truncate">서비스가이드.pdf</span>
                <span className="text-xs text-slate-400 shrink-0">3.1 MB</span>
                <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded text-[#FF6B2B] bg-[#FF6B2B]/10"><Download size={12} /></span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2">
                <FileIcon name="매출현황.xlsx" />
                <span className="flex-1 text-sm text-slate-700 truncate">매출현황.xlsx</span>
                <span className="text-xs text-slate-400 shrink-0">1.1 MB</span>
                <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded text-slate-300"><Download size={12} /></span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">파일명 주황 · 아이콘 주황 bg tint</p>
          </div>
        </div>
      </Section>

      {/* ── 7. 모드 비교 ── */}
      <Section title="모드 비교 — 등록/수정 vs 뷰" desc="같은 첨부파일 데이터를 컨텍스트에 따라 다른 컴포넌트로 렌더링합니다.">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium px-2 py-0.5 bg-[#FF6B2B]/10 text-[#FF6B2B] rounded-[3px]">등록 / 수정 모달</span>
            </div>
            <div className="flex h-9 mb-2">
              <div className="flex flex-1 items-center min-w-0 border border-r-0 border-slate-200 rounded-l-[4px] bg-white px-3 gap-2">
                <Paperclip size={14} className="shrink-0 text-slate-400" />
                <span className="flex-1 truncate text-sm text-slate-300">파일을 선택하거나 드래그하세요</span>
              </div>
              <button className="shrink-0 h-9 px-3.5 text-sm font-medium border border-slate-200 rounded-r-[4px] bg-slate-50 text-slate-600 whitespace-nowrap">파일 선택</button>
            </div>
            <div className="flex gap-1.5 mb-2 flex-wrap">
              <span className="text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]">📏 10MB 이하</span>
              <span className="text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]">📁 최대 5개</span>
              <span className="text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]">PDF · DOCX · XLSX</span>
            </div>
            <div className="border border-slate-200 rounded-[4px] overflow-hidden">
              {[{ name: '이용약관_v2.pdf', isNew: false }, { name: '추가자료.pdf', isNew: true, size: '1.8 MB' }].map((f) => (
                <div key={f.name} className={`flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0 group transition-colors ${f.isNew ? 'bg-[#FF6B2B]/[0.03] hover:bg-[#FF6B2B]/[0.06]' : 'hover:bg-slate-50'}`}>
                  <FileIcon name={f.name} />
                  <span className="flex-1 text-sm text-slate-700 truncate">{f.name}</span>
                  {f.isNew && <span className="text-xs text-slate-400 shrink-0">{f.size}</span>}
                  <button className="w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"><X size={12} /></button>
                </div>
              ))}
            </div>
            <div className="mt-2 space-y-0.5 text-xs text-slate-400">
              <p>· 인풋 그룹 + 힌트 텍스트 노출</p>
              <p>· hover → <span className="text-red-400">X 삭제</span></p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-[3px]">상세보기 (읽기 전용)</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-slate-500">첨부파일</span>
              <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-[3px]">2</span>
            </div>
            <div className="border border-slate-200 rounded-[4px] overflow-hidden">
              {[{ name: '이용약관_v2.pdf', size: '2.4 MB' }, { name: '추가자료.pdf', size: '1.8 MB' }].map((f) => (
                <div key={f.name} className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 group transition-colors cursor-pointer">
                  <FileIcon name={f.name} />
                  <span className="flex-1 text-sm text-slate-700 truncate group-hover:text-[#FF6B2B] transition-colors">{f.name}</span>
                  <span className="text-xs text-slate-400 shrink-0">{f.size}</span>
                  <span className="w-6 h-6 flex items-center justify-center rounded text-slate-300 group-hover:text-[#FF6B2B] group-hover:bg-[#FF6B2B]/10 transition-all"><Download size={12} /></span>
                </div>
              ))}
            </div>
            <div className="mt-2 space-y-0.5 text-xs text-slate-400">
              <p>· 인풋 그룹 없음 · 힌트 없음</p>
              <p>· hover → <span className="text-[#FF6B2B]">↓ 다운로드</span></p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 8. 드롭존 변형 ── */}
      <Section title="드롭존 변형 (Dropzone)" desc="더 넓은 클릭/드래그 영역이 필요한 경우 사용하는 대안 레이아웃입니다.">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Sub>Empty</Sub>
            <div className="border-2 border-dashed border-slate-200 rounded-[6px] p-6 flex flex-col items-center gap-2 hover:border-[#FF6B2B]/40 hover:bg-[#FF6B2B]/[0.02] transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#FF6B2B]/10 transition-colors">
                <Upload size={18} className="text-slate-400 group-hover:text-[#FF6B2B] transition-colors" />
              </div>
              <p className="text-sm text-slate-600 text-center">파일을 드래그하거나 <span className="text-[#FF6B2B] font-medium">클릭하여 선택</span></p>
              <p className="text-xs text-slate-400">PDF, DOCX, XLSX, PNG, JPG · 최대 10MB</p>
            </div>
            <Label>독립 업로드 영역 · 강조 필요 시</Label>
          </div>
          <div>
            <Sub>With Files</Sub>
            <div className="border-2 border-dashed border-[#FF6B2B]/30 rounded-[6px] p-4 flex items-center gap-3 bg-[#FF6B2B]/[0.02] cursor-pointer hover:border-[#FF6B2B]/50 transition-colors mb-2">
              <div className="w-8 h-8 rounded-full bg-[#FF6B2B]/10 flex items-center justify-center shrink-0">
                <Upload size={15} className="text-[#FF6B2B]" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-slate-600">파일 추가 <span className="text-[#FF6B2B] font-medium">+ 클릭</span></p>
                <p className="text-xs text-slate-400">2개 파일 등록됨</p>
              </div>
            </div>
            <StaticFileList files={['서비스가이드.pdf', 'logo.png']} size="md" />
            <Label>파일 등록 후 드롭존 최소화 · 목록 노출</Label>
          </div>
        </div>
      </Section>

      {/* ── 9. 인터랙티브 데모 ── */}
      <Section
        title="인터랙티브 데모"
        desc="실제로 조작하며 동작을 확인하세요. 업로드는 최대 5개·10MB 제한이 적용됩니다."
      >
        <div className="grid grid-cols-2 gap-8">
          {/* 업로드 데모 */}
          <div className="bg-slate-50/60 rounded-[6px] border border-slate-100 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium px-2 py-0.5 bg-[#FF6B2B]/10 text-[#FF6B2B] rounded-[3px]">등록 / 수정 모달</span>
              <span className="text-xs text-slate-400 ml-auto">최대 5개 · 10MB</span>
            </div>
            <p className="text-xs font-medium text-slate-600 mb-1.5">첨부파일</p>
            <InteractiveUploadDemo />
            <div className="mt-4 pt-3 border-t border-slate-200 space-y-1 text-xs text-slate-400">
              <p>· 파일 선택 버튼 → 다중 선택 가능</p>
              <p>· 5개 도달 시 버튼 비활성 + 경고 메시지</p>
              <p>· 10MB 초과 파일 선택 시 오류 메시지</p>
              <p>· 5개 초과 시 목록 자동 스크롤</p>
            </div>
          </div>

          {/* 다운로드 데모 */}
          <div className="bg-slate-50/60 rounded-[6px] border border-slate-100 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium px-2 py-0.5 bg-slate-200 text-slate-600 rounded-[3px]">상세보기 (읽기 전용)</span>
            </div>
            <InteractiveDownloadDemo />
            <div className="mt-4 pt-3 border-t border-slate-200 space-y-1 text-xs text-slate-400">
              <p>· 8개 파일 → 5개 노출 후 스크롤</p>
              <p>· 행 클릭 → 다운로드 이벤트 + 피드백</p>
              <p>· 인풋 그룹 없음 — 추가 불가</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 10. 사용 지침 ── */}
      <Section title="사용 지침 (Usage)">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-700 uppercase tracking-wide mb-3">Do ✅</p>
            {[
              '폼(등록/수정) → FileInputGroup + FileHint',
              '상세보기(뷰) → FileDownloadList',
              '5개 초과 예상 시 scrollable + maxVisible 설정',
              'hint variant는 상황에 맞게 선택 (simple/badge/info/warning/error)',
              '파일 제한 초과 시 버튼 disabled + warning hint',
              '수정 진입 시 기존 파일 목록 초기화 후 렌더링',
              '신규 파일 주황 tint + 용량 표시로 기존 파일 구분',
            ].map((t) => (
              <div key={t} className="flex gap-2">
                <span className="text-emerald-500 shrink-0 text-xs mt-px">✓</span>
                <span className="text-xs text-slate-600">{t}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-700 uppercase tracking-wide mb-3">Don't ❌</p>
            {[
              '뷰 모드에 업로드 인풋 그룹 노출',
              '등록/수정에 다운로드 버튼 혼용',
              '단순 <input type="file"> 날것 노출',
              '파일 많은데 scrollable 미적용 (무한 확장)',
              '힌트 없이 제약 조건 미표시',
              '파일명 truncate 없이 줄바꿈',
              'X 버튼 항상 노출 (hover 시만)',
            ].map((t) => (
              <div key={t} className="flex gap-2">
                <span className="text-red-400 shrink-0 text-xs mt-px">✗</span>
                <span className="text-xs text-slate-600">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
