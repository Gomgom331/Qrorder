import { useState } from 'react';
import { Search, Trash2, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { CheckboxField } from '../components/ui/CheckboxField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { Tag } from '../components/ui/Tag';
import { Pagination } from '../components/ui/Pagination';

// ─── Types ───────────────────────────────────────────────────────

interface Inquiry {
  id: string;
  title: string;
  content: string;
  author: string;       // 작성자 (매장명)
  status: 'pending' | 'answered';
  createdAt: string;
  updatedAt: string;
  answer?: string;
  answeredAt?: string;
}

// ─── Mock data ───────────────────────────────────────────────────

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'q1',
    title: '메뉴 이미지 업로드 오류',
    content: '메뉴 이미지를 업로드하면 "파일 크기 초과" 오류가 발생합니다. 파일 크기는 1.2MB입니다.',
    author: '홍대 본점',
    status: 'pending',
    createdAt: '2026-04-22 14:30',
    updatedAt: '2026-04-22 14:30',
  },
  {
    id: 'q2',
    title: 'QR 코드 인식 불량 문의',
    content: '특정 스마트폰에서 QR 코드 인식이 되지 않는 경우가 있습니다. iPhone 15 Pro에서 발생합니다.',
    author: '신촌점',
    status: 'pending',
    createdAt: '2026-04-22 11:00',
    updatedAt: '2026-04-22 11:00',
  },
  {
    id: 'q3',
    title: '결제 취소 처리 방법 문의',
    content: '주문 완료 후 고객 요청으로 취소해야 하는 경우 어떻게 처리하면 되는지 안내 부탁드립니다.',
    author: '강남점',
    status: 'answered',
    createdAt: '2026-04-21 16:00',
    updatedAt: '2026-04-21 17:30',
    answer: '주문 내역 > 해당 주문 > 취소 버튼을 클릭하시면 됩니다. 결제 취소는 영업일 기준 1~3일 내 처리됩니다.',
    answeredAt: '2026-04-21 17:30',
  },
  {
    id: 'q4',
    title: '메뉴 분류 추가 요청',
    content: '현재 분류 외에 "세트 메뉴" 카테고리를 추가할 수 있는지 문의드립니다.',
    author: '합정점',
    status: 'answered',
    createdAt: '2026-04-20 10:00',
    updatedAt: '2026-04-20 14:00',
    answer: '메뉴 관리 > 메뉴 분류에서 직접 추가하실 수 있습니다. 추가 후 순서도 드래그로 변경 가능합니다.',
    answeredAt: '2026-04-20 14:00',
  },
  {
    id: 'q5',
    title: '영수증 출력 설정 문의',
    content: '주문 완료 후 자동으로 영수증이 출력되도록 설정하는 방법을 알고 싶습니다.',
    author: '연남점',
    status: 'pending',
    createdAt: '2026-04-19 09:00',
    updatedAt: '2026-04-19 09:00',
  },
  {
    id: 'q6',
    title: '다중 매장 관리 계정 생성 문의',
    content: '여러 매장을 한 계정에서 관리할 수 있는 방법이 있는지 궁금합니다.',
    author: '망원점',
    status: 'answered',
    createdAt: '2026-04-18 15:30',
    updatedAt: '2026-04-18 16:00',
    answer: '현재 다중 매장 관리 기능을 지원합니다. 관리자 > 매장 관리에서 추가 매장을 등록하실 수 있습니다.',
    answeredAt: '2026-04-18 16:00',
  },
];

const ITEMS_PER_PAGE = 10;

// ─── Helpers ─────────────────────────────────────────────────────

function formatNow(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

// ─── Page ────────────────────────────────────────────────────────

export function BoardInquiryManagement() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [appliedStatus, setAppliedStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // 선택
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // 답변 모달
  const [answerModalOpen, setAnswerModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [answerText, setAnswerText] = useState('');

  // 삭제 confirm
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  // ── 필터 ──
  const filtered = inquiries.filter((q) => {
    const textMatch = appliedSearch
      ? q.title.includes(appliedSearch) ||
        q.content.includes(appliedSearch) ||
        q.author.includes(appliedSearch)
      : true;
    const statusMatch =
      !appliedStatus || appliedStatus === '전체'
        ? true
        : appliedStatus === '미답변'
        ? q.status === 'pending'
        : q.status === 'answered';
    return textMatch && statusMatch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paged = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // ── 검색 ──
  const handleSearch = () => {
    setAppliedSearch(search);
    setAppliedStatus(statusFilter);
    setCurrentPage(1);
    setSelectedIds(new Set());
  };

  const handleReset = () => {
    setSearch('');
    setAppliedSearch('');
    setStatusFilter('');
    setAppliedStatus('');
    setCurrentPage(1);
    setSelectedIds(new Set());
  };

  // ── 체크박스 ──
  const pagedIds = paged.map((q) => q.id);
  const allChecked = pagedIds.length > 0 && pagedIds.every((id) => selectedIds.has(id));
  const someChecked = pagedIds.some((id) => selectedIds.has(id));

  const toggleAll = () => {
    if (allChecked) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        pagedIds.forEach((id) => next.delete(id));
        return next;
      });
    } else {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        pagedIds.forEach((id) => next.add(id));
        return next;
      });
    }
  };

  const toggleOne = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // ── 답변 ──
  const handleOpenAnswer = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setAnswerText(inquiry.answer || '');
    setAnswerModalOpen(true);
  };

  const handleSaveAnswer = () => {
    if (!selectedInquiry) return;
    const now = formatNow();
    setInquiries((prev) =>
      prev.map((q) =>
        q.id === selectedInquiry.id
          ? {
              ...q,
              status: 'answered',
              answer: answerText,
              answeredAt: now,
              updatedAt: now,
            }
          : q
      )
    );
    setAnswerModalOpen(false);
  };

  // ── 삭제 ──
  const handleDeleteConfirm = () => {
    if (selectedIds.size === 0) return;
    setDeleteConfirmOpen(true);
  };

  const handleDeleteExecute = () => {
    setInquiries((prev) => prev.filter((q) => !selectedIds.has(q.id)));
    setSelectedIds(new Set());
    setDeleteConfirmOpen(false);
    setCurrentPage(1);
  };

  const pendingCount = inquiries.filter((q) => q.status === 'pending').length;

  // ── Render ──
  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>게시판</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">문의사항 관리</span>
      </nav>

      {/* ── 검색 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex gap-2">
          <div className="w-36 shrink-0">
            <DropdownSelect
              inputSize="md"
              placeholder="답변상태"
              value={statusFilter}
              onChange={(v) => setStatusFilter(v)}
              options={[
                { value: '전체', label: '전체' },
                { value: '미답변', label: '미답변' },
                { value: '답변완료', label: '답변완료' },
              ]}
            />
          </div>
          <div className="flex-1">
            <InputField
              inputSize="md"
              placeholder="제목, 내용, 매장명으로 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              leftIcon={<Search size={14} />}
            />
          </div>
          <Button variant="outline" size="md" onClick={handleReset}>
            초기화
          </Button>
          <Button
            variant="primary"
            size="md"
            leftIcon={<Search size={15} />}
            onClick={handleSearch}
          >
            조회
          </Button>
        </div>
      </div>

      {/* ── 테이블 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        {/* 테이블 헤더 */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">문의사항 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
              {filtered.length}건
            </span>
            {pendingCount > 0 && (
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-[3px] font-medium">
                미답변 {pendingCount}건
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              disabled={selectedIds.size === 0}
              onClick={handleDeleteConfirm}
              className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 disabled:border-slate-200 disabled:text-slate-300"
            >
              삭제
            </Button>
          </div>
        </div>

        {/* 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-10 px-3 py-2.5">
                  <CheckboxField
                    size="sm"
                    checked={allChecked}
                    indeterminate={someChecked && !allChecked}
                    onChange={toggleAll}
                  />
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 w-[22%]">
                  제목
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                  내용
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 w-[90px]">
                  매장명
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[80px]">
                  답변상태
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[130px]">
                  등록일자
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[130px]">
                  수정일자
                </th>
                <th className="w-[80px] px-3 py-2.5 text-center text-xs font-medium text-slate-500">
                  답변
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paged.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-16 text-center text-slate-400 text-sm">
                    {appliedSearch || appliedStatus ? '검색 결과가 없습니다.' : '등록된 문의사항이 없습니다.'}
                  </td>
                </tr>
              ) : (
                paged.map((inquiry) => (
                  <tr
                    key={inquiry.id}
                    className={`transition-colors ${
                      selectedIds.has(inquiry.id) ? 'bg-[#FF6B2B]/5' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="px-3 py-2.5">
                      <CheckboxField
                        size="sm"
                        checked={selectedIds.has(inquiry.id)}
                        onChange={() => toggleOne(inquiry.id)}
                      />
                    </td>
                    <td className="px-3 py-2.5 text-slate-800 font-medium">
                      <span className="line-clamp-1">{inquiry.title}</span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">
                      <span className="line-clamp-1">{inquiry.content}</span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{inquiry.author}</td>
                    <td className="px-3 py-2.5 text-center">
                      {inquiry.status === 'pending' ? (
                        <Tag color="amber" variant="soft" size="sm" dot>미답변</Tag>
                      ) : (
                        <Tag color="green" variant="soft" size="sm" dot>답변완료</Tag>
                      )}
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-500 text-xs">
                      {inquiry.createdAt}
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-500 text-xs">
                      {inquiry.updatedAt}
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <button
                        onClick={() => handleOpenAnswer(inquiry)}
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-[3px] text-xs font-medium transition-colors ${
                          inquiry.status === 'pending'
                            ? 'bg-[#FF6B2B] text-white hover:bg-[#E85D20]'
                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                        }`}
                      >
                        {inquiry.status === 'pending' ? (
                          <><Send size={10} />답변</>
                        ) : (
                          <><CheckCircle2 size={10} />보기</>
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <div className="px-4 py-3 border-t border-slate-100">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      {/* ── 답변 모달 ── */}
      {selectedInquiry && (
        <Modal
          open={answerModalOpen}
          onClose={() => setAnswerModalOpen(false)}
          size="lg"
          title="문의 상세 / 답변"
          footer={
            <>
              <ModalBtn variant="outline" onClick={() => setAnswerModalOpen(false)}>
                닫기
              </ModalBtn>
              <ModalBtn variant="primary" onClick={handleSaveAnswer}>
                <Send size={13} className="inline mr-1" />
                답변 등록
              </ModalBtn>
            </>
          }
        >
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-[6px] p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-1.5">
                <MessageSquare size={14} className="text-[#FF6B2B]" />
                <span className="text-sm font-medium text-slate-800">{selectedInquiry.title}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                <span className="font-medium text-slate-500">{selectedInquiry.author}</span>
                <span>·</span>
                <span>{selectedInquiry.createdAt}</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{selectedInquiry.content}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                답변 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                placeholder="답변 내용을 입력하세요"
                rows={5}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-[4px] resize-none focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/30 focus:border-[#FF6B2B] transition-colors"
              />
            </div>
            {selectedInquiry.answeredAt && (
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 size={12} className="text-emerald-500" />
                <span>최종 답변: {selectedInquiry.answeredAt}</span>
              </div>
            )}
          </div>
        </Modal>
      )}

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
          <p className="font-medium text-slate-800">
            선택한 문의사항 {selectedIds.size}건을 삭제하시겠습니까?
          </p>
          <p className="text-sm text-slate-500">삭제된 데이터는 복구할 수 없습니다.</p>
        </div>
      </Modal>
    </div>
  );
}