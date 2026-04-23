import { useState, useRef } from 'react';
import {
  Search, Plus, Pencil, Paperclip, X,
  FileText, File, Image, FileCode, FileSpreadsheet,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { CheckboxField } from '../components/ui/CheckboxField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { Pagination } from '../components/ui/Pagination';

// ─── 첨부파일 상수 ───────────────────────────────────────────────

const MAX_FILES   = 10;
const MAX_SIZE_MB = 10;

// ─── 확장자별 아이콘 ─────────────────────────────────────────────

function FileIcon({ name }: { name: string }) {
  const ext = name.split('.').pop()?.toLowerCase() ?? '';
  if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext))
    return <Image size={13} className="shrink-0 text-blue-400" />;
  if (['xls', 'xlsx', 'csv'].includes(ext))
    return <FileSpreadsheet size={13} className="shrink-0 text-emerald-500" />;
  if (['js', 'ts', 'tsx', 'jsx', 'html', 'css', 'json'].includes(ext))
    return <FileCode size={13} className="shrink-0 text-purple-400" />;
  if (['pdf'].includes(ext))
    return <FileText size={13} className="shrink-0 text-red-400" />;
  return <File size={13} className="shrink-0 text-slate-400" />;
}

// ─── Types ───────────────────────────────────────────────────────

interface Notice {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  startDate: string;
  active: boolean;
  attachmentNames?: string[];
}

// ─── Mock data ───────────────────────────────────────────────────

const INITIAL_NOTICES: Notice[] = [
  {
    id: 'n1',
    title: '시스템 정기 점검 안내 (4/25)',
    content: '4월 25일 새벽 2시~4시에 정기 시스템 점검이 진행됩니다. 해당 시간 중 서비스 이용이 일시 중단됩니다.',
    author: '시스템관리자',
    createdAt: '2026-04-20 10:30',
    updatedAt: '2026-04-20 10:30',
    startDate: '2026-04-20',
    active: true,
  },
  {
    id: 'n2',
    title: '카카오페이 결제 모듈 업데이트 완료',
    content: '카카오페이 결제 연동 모듈이 최신 버전으로 업데이트 완료되었습니다. 별도 설정 없이 바로 이용 가능합니다.',
    author: '개발팀',
    createdAt: '2026-04-19 14:00',
    updatedAt: '2026-04-19 15:20',
    startDate: '2026-04-19',
    active: true,
  },
  {
    id: 'n3',
    title: '이용약관 개정 안내 (5/1 적용)',
    content: '2026년 5월 1일부터 개정된 이용약관이 적용됩니다. 변경사항을 반드시 확인해 주시기 바랍니다.',
    author: '운영팀',
    createdAt: '2026-04-18 09:00',
    updatedAt: '2026-04-18 09:00',
    startDate: '2026-05-01',
    active: true,
    attachmentNames: ['이용약관_개정안_v2.pdf', '개정사항_요약.docx'],
  },
  {
    id: 'n4',
    title: '신규 QR 코드 커스터마이징 기능 안내',
    content: '테이블 QR 코드를 직접 디자인할 수 있는 커스터마이징 기능이 추가되었습니다. QR 관리 메뉴에서 확인하세요.',
    author: '시스템관리자',
    createdAt: '2026-04-17 11:00',
    updatedAt: '2026-04-17 11:00',
    startDate: '2026-04-17',
    active: true,
  },
  {
    id: 'n5',
    title: '결제 수수료 정책 변경 안내',
    content: '2026년 5월부터 결제 수수료 정책이 변경됩니다. 상세 내용은 결제관리 메뉴를 참고해 주세요.',
    author: '운영팀',
    createdAt: '2026-04-16 16:00',
    updatedAt: '2026-04-16 16:00',
    startDate: '2026-05-01',
    active: false,
    attachmentNames: ['수수료_정책_변경안내.pdf'],
  },
  {
    id: 'n6',
    title: '모바일 주문 UI 개선 안내',
    content: '고객용 모바일 주문 화면의 UI가 개선되었습니다. 더 직관적인 주문 경험을 제공합니다.',
    author: '개발팀',
    createdAt: '2026-04-15 10:00',
    updatedAt: '2026-04-15 10:00',
    startDate: '2026-04-15',
    active: true,
  },
  {
    id: 'n7',
    title: '서비스 이용 가이드 업데이트',
    content: '서비스 이용 가이드 문서가 최신 버전으로 업데이트되었습니다. 고객센터에서 확인하세요.',
    author: '운영팀',
    createdAt: '2026-04-14 13:30',
    updatedAt: '2026-04-14 13:30',
    startDate: '2026-04-14',
    active: true,
    attachmentNames: ['서비스_이용가이드_v3.pdf', '빠른시작_가이드.pdf', 'FAQ_2026.xlsx'],
  },
];

const ITEMS_PER_PAGE = 10;

interface NoticeForm {
  title: string;
  content: string;
  startDate: string;
  active: boolean;
  attachmentNames: string[]; // 기존 등록 파일명 목록
}

const EMPTY_FORM: NoticeForm = {
  title: '',
  content: '',
  startDate: '',
  active: true,
  attachmentNames: [],
};

// ─── Helpers ─────────────────────────────────────────────────────

function formatNow(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ─── Page ────────────────────────────────────────────────────────

export function BoardNoticeManagement() {
  const [notices, setNotices] = useState<Notice[]>(INITIAL_NOTICES);
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // 선택 체크박스
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [form, setForm] = useState<NoticeForm>(EMPTY_FORM);
  const [newFiles, setNewFiles] = useState<File[]>([]); // 새로 추가한 파일
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileError, setFileError] = useState<string | null>(null); // 파일 검증 오류

  // 삭제 confirm 모달
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  // ── 검색/필터 ──
  const filtered = notices.filter((n) => {
    if (!appliedSearch) return true;
    return (
      n.title.includes(appliedSearch) ||
      n.content.includes(appliedSearch) ||
      n.author.includes(appliedSearch)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paged = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // ── 검색 ──
  const handleSearch = () => { setAppliedSearch(search); setCurrentPage(1); setSelectedIds(new Set()); };
  const handleReset = () => { setSearch(''); setAppliedSearch(''); setCurrentPage(1); setSelectedIds(new Set()); };

  // ── 체크박스 ──
  const pagedIds = paged.map((n) => n.id);
  const allChecked = pagedIds.length > 0 && pagedIds.every((id) => selectedIds.has(id));
  const someChecked = pagedIds.some((id) => selectedIds.has(id));

  const toggleAll = () => {
    if (allChecked) {
      setSelectedIds((prev) => { const next = new Set(prev); pagedIds.forEach((id) => next.delete(id)); return next; });
    } else {
      setSelectedIds((prev) => { const next = new Set(prev); pagedIds.forEach((id) => next.add(id)); return next; });
    }
  };
  const toggleOne = (id: string) => {
    setSelectedIds((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  // ── 신규 ──
  const handleNew = () => {
    setEditingNotice(null);
    setForm(EMPTY_FORM);
    setNewFiles([]);
    setModalOpen(true);
  };

  // ── 수정 ──
  const handleEdit = (notice: Notice) => {
    setEditingNotice(notice);
    setForm({
      title: notice.title,
      content: notice.content,
      startDate: notice.startDate,
      active: notice.active,
      attachmentNames: notice.attachmentNames ?? [],
    });
    setNewFiles([]);
    setModalOpen(true);
  };

  // ── 저장 ──
  const handleSave = () => {
    if (!form.title.trim()) return;
    const now = formatNow();
    const mergedNames = [
      ...form.attachmentNames,
      ...newFiles.map((f) => f.name),
    ];
    const payload = {
      title: form.title,
      content: form.content,
      startDate: form.startDate,
      active: form.active,
      attachmentNames: mergedNames.length ? mergedNames : undefined,
      updatedAt: now,
    };
    if (editingNotice) {
      setNotices((prev) =>
        prev.map((n) => n.id === editingNotice.id ? { ...n, ...payload } : n)
      );
    } else {
      setNotices((prev) => [{
        id: `n${Date.now()}`,
        author: '관리자',
        createdAt: now,
        ...payload,
      }, ...prev]);
    }
    setModalOpen(false);
  };

  // ── 삭제 ──
  const handleDeleteConfirm = () => { if (selectedIds.size === 0) return; setDeleteConfirmOpen(true); };
  const handleDeleteExecute = () => {
    setNotices((prev) => prev.filter((n) => !selectedIds.has(n.id)));
    setSelectedIds(new Set());
    setDeleteConfirmOpen(false);
    setCurrentPage(1);
  };

  // ── 첨부파일 핸들러 ──
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const incoming = Array.from(e.target.files ?? []);
    if (!incoming.length) return;
    setFileError(null);

    // 용량 검사
    const oversized = incoming.find((f) => f.size > MAX_SIZE_MB * 1024 * 1024);
    if (oversized) {
      setFileError(`${oversized.name}: 파일 크기가 ${MAX_SIZE_MB}MB를 초과합니다.`);
      e.target.value = '';
      return;
    }

    // 개수 검사
    const current = form.attachmentNames.length + newFiles.length;
    if (current >= MAX_FILES) {
      setFileError(`최대 ${MAX_FILES}개까지만 첨부 가능합니다.`);
      e.target.value = '';
      return;
    }

    const remaining = MAX_FILES - current;
    const toAdd = incoming.slice(0, remaining);
    if (incoming.length > remaining) {
      setFileError(`최대 ${MAX_FILES}개 제한으로 ${remaining}개만 추가되었습니다.`);
    }

    setNewFiles((prev) => [...prev, ...toAdd]);
    e.target.value = '';
  };
  // 기존 파일 제거
  const handleRemoveExisting = (name: string) => {
    setForm((prev) => ({ ...prev, attachmentNames: prev.attachmentNames.filter((n) => n !== name) }));
    setFileError(null);
  };
  // 신규 파일 제거
  const handleRemoveNew = (index: number) => {
    setNewFiles((prev) => prev.filter((_, i) => i !== index));
    setFileError(null);
  };

  const totalFiles   = form.attachmentNames.length + newFiles.length;
  const hasFiles     = totalFiles > 0;
  const isMaxReached = totalFiles >= MAX_FILES;

  // ── Render ──
  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>게시판</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">공지사항 관리</span>
      </nav>

      {/* ── 검색 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex gap-2">
          <div className="flex-1">
            <InputField
              inputSize="md"
              placeholder="제목, 내용, 등록자로 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              leftIcon={<Search size={14} />}
            />
          </div>
          <Button variant="outline" size="md" onClick={handleReset}>초기화</Button>
          <Button variant="primary" size="md" leftIcon={<Search size={15} />} onClick={handleSearch}>조회</Button>
        </div>
      </div>

      {/* ── 테이블 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">공지사항 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">{filtered.length}건</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Button variant="primary" size="sm" leftIcon={<Plus size={13} />} onClick={handleNew}>신규</Button>
            <Button
              variant="outline" size="sm" disabled={selectedIds.size === 0} onClick={handleDeleteConfirm}
              className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 disabled:border-slate-200 disabled:text-slate-300"
            >삭제</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-10 px-3 py-2.5">
                  <CheckboxField size="sm" checked={allChecked} indeterminate={someChecked && !allChecked} onChange={toggleAll} />
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 w-[22%]">제목</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">내용</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 w-[100px]">등록자</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[90px]">사용여부</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[120px]">등록일자</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[120px]">수정일자</th>
                <th className="w-10 px-3 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paged.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-16 text-center text-slate-400 text-sm">
                    {appliedSearch ? '검색 결과가 없습니다.' : '등록된 공지사항이 없습니다.'}
                  </td>
                </tr>
              ) : (
                paged.map((notice) => (
                  <tr key={notice.id} className={`transition-colors ${selectedIds.has(notice.id) ? 'bg-[#FF6B2B]/5' : 'hover:bg-slate-50'}`}>
                    <td className="px-3 py-2.5">
                      <CheckboxField size="sm" checked={selectedIds.has(notice.id)} onChange={() => toggleOne(notice.id)} />
                    </td>
                    <td className="px-3 py-2.5 text-slate-800 font-medium">
                      <div className="flex items-center gap-1.5">
                        <span className="line-clamp-1">{notice.title}</span>
                        {!!notice.attachmentNames?.length && (
                          <span className="flex items-center gap-0.5 shrink-0 text-slate-400">
                            <Paperclip size={11} />
                            {notice.attachmentNames.length > 1 && (
                              <span className="text-[10px]">{notice.attachmentNames.length}</span>
                            )}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600"><span className="line-clamp-1">{notice.content}</span></td>
                    <td className="px-3 py-2.5 text-slate-600">{notice.author}</td>
                    <td className="px-3 py-2.5 text-center">
                      <span className={`text-xs px-2 py-0.5 rounded-[3px] ${notice.active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                        {notice.active ? 'Y' : 'N'}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-500 text-xs">{notice.createdAt}</td>
                    <td className="px-3 py-2.5 text-center text-slate-500 text-xs">{notice.updatedAt}</td>
                    <td className="px-3 py-2.5 text-center">
                      <button
                        onClick={() => handleEdit(notice)}
                        className="w-6 h-6 flex items-center justify-center rounded-[4px] text-slate-300 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/8 transition-colors"
                        title="수정"
                      >
                        <Pencil size={12} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="px-4 py-3 border-t border-slate-100">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        )}
      </div>

      {/* ── 신규/수정 모달 ── */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        size="xl"
        title={editingNotice ? '공지사항 수정' : '공지사항 등록'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setModalOpen(false)}>닫기</ModalBtn>
            <ModalBtn variant="primary" onClick={handleSave}>{editingNotice ? '수정' : '확인'}</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">

          {/* 제목 */}
          <InputField
            label="제목"
            required
            inputSize="md"
            placeholder="공지사항 제목을 입력하세요"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          {/* 시작일시 + 사용여부 */}
          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="시작일시"
              inputSize="md"
              type="date"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            />
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                사용여부 <span className="text-red-500">*</span>
              </label>
              <DropdownSelect
                inputSize="md"
                value={form.active ? 'Y' : 'N'}
                onChange={(v) => setForm({ ...form, active: v === 'Y' })}
                options={[
                  { value: 'Y', label: 'Y' },
                  { value: 'N', label: 'N' },
                ]}
              />
            </div>
          </div>

          {/* 내용 */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="공지사항 내용을 입력하세요"
              rows={7}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-[4px] resize-none outline-none transition-all placeholder:text-slate-300 text-slate-800 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20"
            />
          </div>

          {/* 첨부파일 */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-slate-500">첨부파일</label>
              {hasFiles && (
                <span className={`text-[11px] tabular-nums font-medium px-1.5 py-0.5 rounded-[3px] ${isMaxReached ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
                  {totalFiles}
                </span>
              )}
            </div>

            {/* 인풋 그룹 */}
            <div className="flex h-9">
              <div className={`flex flex-1 items-center min-w-0 border border-r-0 rounded-l-[4px] px-3 gap-2 ${
                isMaxReached
                  ? 'bg-slate-50 border-slate-200 cursor-not-allowed'
                  : fileError
                  ? 'bg-white border-red-300 ring-1 ring-red-200'
                  : 'bg-white border-slate-200'
              }`}>
                <Paperclip size={14} className={`shrink-0 ${isMaxReached ? 'text-slate-300' : fileError ? 'text-red-400' : 'text-slate-400'}`} />
                <span className="flex-1 text-sm text-slate-300 truncate">파일을 선택하거나 드래그하세요</span>
              </div>
              <button
                type="button"
                disabled={isMaxReached}
                onClick={() => { setFileError(null); fileInputRef.current?.click(); }}
                className={`shrink-0 h-9 px-3.5 text-sm font-medium border border-slate-200 rounded-r-[4px] transition-colors whitespace-nowrap ${
                  isMaxReached
                    ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800 active:bg-slate-200'
                }`}
              >
                파일 선택
              </button>
            </div>
            <input ref={fileInputRef} type="file" multiple className="hidden" onChange={handleFileChange} />

            {/* 힌트 영역 */}
            {fileError ? (
              <div className="mt-1.5 flex items-start gap-1.5 px-2.5 py-1.5 bg-red-50 border border-red-100 rounded-[4px]">
                <AlertTriangle size={12} className="text-red-400 shrink-0 mt-px" />
                <p className="text-xs text-red-600">{fileError}</p>
              </div>
            ) : isMaxReached ? (
              <div className="mt-1.5 flex items-start gap-1.5 px-2.5 py-1.5 bg-amber-50 border border-amber-100 rounded-[4px]">
                <AlertTriangle size={12} className="text-amber-500 shrink-0 mt-px" />
                <p className="text-xs text-amber-700">최대 {MAX_FILES}개 파일이 등록되었습니다. 추가하려면 기존 파일을 제거하세요.</p>
              </div>
            ) : (
              <div className="flex gap-1.5 mt-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]">
                  <span>📏</span> {MAX_SIZE_MB}MB 이하
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]">
                  <span>📁</span> 최대 {MAX_FILES}개
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded-[3px]">
                  PDF · DOCX · XLSX · PNG · JPG
                </span>
              </div>
            )}

            {/* 파일 목록 */}
            {hasFiles && (
              <div className="mt-2 border border-slate-200 rounded-[4px] overflow-hidden">
                <div
                  className={totalFiles > 5 ? 'overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full' : ''}
                  style={totalFiles > 5 ? { maxHeight: '185px' } : undefined}
                >
                  {form.attachmentNames.map((name) => (
                    <div
                      key={name}
                      className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 group transition-colors"
                    >
                      <FileIcon name={name} />
                      <span className="flex-1 text-sm text-slate-700 truncate">{name}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveExisting(name)}
                        className="shrink-0 w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                  {newFiles.map((file, i) => (
                    <div
                      key={`new-${i}`}
                      className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0 bg-[#FF6B2B]/[0.03] hover:bg-[#FF6B2B]/[0.06] group transition-colors"
                    >
                      <FileIcon name={file.name} />
                      <span className="flex-1 text-sm text-slate-700 truncate">{file.name}</span>
                      <span className="shrink-0 text-xs text-slate-400">{formatFileSize(file.size)}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveNew(i)}
                        className="shrink-0 w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </Modal>

      {/* ── 삭제 확인 모달 ── */}
      <Modal
        open={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
        size="sm"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDeleteConfirmOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={handleDeleteExecute}>삭제</ModalBtn>
          </>
        }
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl text-red-400">−</span>
          </div>
          <p className="font-medium text-slate-800">선택한 공지사항 {selectedIds.size}건을 삭제하시겠습니까?</p>
          <p className="text-sm text-slate-500">삭제된 데이터는 복구할 수 없습니다.</p>
        </div>
      </Modal>
    </div>
  );
}