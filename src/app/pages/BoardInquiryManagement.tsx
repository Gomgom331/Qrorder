import { useState } from 'react';
import { Search, Pencil } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { Tag } from '../components/ui/Tag';
import { Pagination } from '../components/ui/Pagination';

// ─── Types ───────────────────────────────────────────────────────

interface Inquiry {
  id: string;
  title: string;
  business: string;     // 사업장
  registrant: string;   // 등록자
  status: 'pending' | 'answered';
  createdAt: string;
  updatedAt: string;
  answeredAt?: string;
}

// ─── Mock data ───────────────────────────────────────────────────

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'q1',
    title: '메뉴 이미지 업로드 오류',
    business: '홍대 본점',
    registrant: '김철수',
    status: 'pending',
    createdAt: '2026-04-22 14:30',
    updatedAt: '2026-04-22 14:30',
  },
  {
    id: 'q2',
    title: 'QR 코드 인식 불량 문의',
    business: '신촌점',
    registrant: '박영희',
    status: 'pending',
    createdAt: '2026-04-22 11:00',
    updatedAt: '2026-04-22 11:00',
  },
  {
    id: 'q3',
    title: '결제 취소 처리 방법 문의',
    business: '강남점',
    registrant: '이지훈',
    status: 'answered',
    createdAt: '2026-04-21 16:00',
    updatedAt: '2026-04-21 17:30',
    answeredAt: '2026-04-21 17:30',
  },
  {
    id: 'q4',
    title: '메뉴 분류 추가 요청',
    business: '합정점',
    registrant: '정민수',
    status: 'answered',
    createdAt: '2026-04-20 10:00',
    updatedAt: '2026-04-20 14:00',
    answeredAt: '2026-04-20 14:00',
  },
  {
    id: 'q5',
    title: '영수증 출력 설정 문의',
    business: '연남점',
    registrant: '최현진',
    status: 'pending',
    createdAt: '2026-04-19 09:00',
    updatedAt: '2026-04-19 09:00',
  },
  {
    id: 'q6',
    title: '다중 매장 관리 계정 생성 문의',
    business: '망원점',
    registrant: '한수진',
    status: 'answered',
    createdAt: '2026-04-18 15:30',
    updatedAt: '2026-04-18 16:00',
    answeredAt: '2026-04-18 16:00',
  },
];

const ITEMS_PER_PAGE = 10;

// ─── Page ────────────────────────────────────────────────────────

export function BoardInquiryManagement() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [appliedStatus, setAppliedStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // 상세 모달
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  // ── 필터 ──
  const filtered = inquiries.filter((q) => {
    const textMatch = appliedSearch
      ? q.title.includes(appliedSearch) ||
        q.business.includes(appliedSearch) ||
        q.registrant.includes(appliedSearch)
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
  };

  // ── 상세 ──
  const handleOpenDetail = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setDetailModalOpen(true);
  };

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
              placeholder="제목, 사업장, 등록자로 검색"
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
        <div className="px-4 py-2.5 border-b border-slate-200">
          <span className="text-sm font-medium text-slate-800">문의사항 목록</span>
        </div>

        {/* 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                  제목
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 w-[120px]">
                  사업장
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 w-[100px]">
                  등록자
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[130px]">
                  등록일자
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[130px]">
                  수정일자
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[130px]">
                  답변일자
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[80px]">
                  답변상태
                </th>
                <th className="w-[60px] px-3 py-2.5 text-center text-xs font-medium text-slate-500">
                  관리
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
                  <tr key={inquiry.id} className="transition-colors hover:bg-slate-50">
                    <td className="px-3 py-2.5 text-slate-800 font-medium">
                      <span className="line-clamp-1">{inquiry.title}</span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">
                      {inquiry.business}
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">
                      {inquiry.registrant}
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-500 text-xs">
                      {inquiry.createdAt}
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-500 text-xs">
                      {inquiry.updatedAt}
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-500 text-xs">
                      {inquiry.answeredAt || '-'}
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      {inquiry.status === 'pending' ? (
                        <Tag color="amber" variant="soft" size="sm" dot>미답변</Tag>
                      ) : (
                        <Tag color="green" variant="soft" size="sm" dot>답변완료</Tag>
                      )}
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <button
                        onClick={() => handleOpenDetail(inquiry)}
                        className="inline-flex items-center justify-center w-6 h-6 text-slate-400 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10 rounded-[3px] transition-colors"
                        title="상세보기"
                      >
                        <Pencil size={13} />
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

      {/* ── 상세 모달 ── */}
      {selectedInquiry && (
        <Modal
          open={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
          size="md"
          title="문의사항 상세"
          footer={
            <ModalBtn variant="outline" onClick={() => setDetailModalOpen(false)}>
              닫기
            </ModalBtn>
          }
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs text-slate-500 mb-1">제목</div>
                <div className="text-sm text-slate-800 font-medium">{selectedInquiry.title}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">답변상태</div>
                <div>
                  {selectedInquiry.status === 'pending' ? (
                    <Tag color="amber" variant="soft" size="sm" dot>미답변</Tag>
                  ) : (
                    <Tag color="green" variant="soft" size="sm" dot>답변완료</Tag>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs text-slate-500 mb-1">사업장</div>
                <div className="text-sm text-slate-700">{selectedInquiry.business}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">등록자</div>
                <div className="text-sm text-slate-700">{selectedInquiry.registrant}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="text-xs text-slate-500 mb-1">등록일자</div>
                <div className="text-xs text-slate-700">{selectedInquiry.createdAt}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">수정일자</div>
                <div className="text-xs text-slate-700">{selectedInquiry.updatedAt}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">답변일자</div>
                <div className="text-xs text-slate-700">{selectedInquiry.answeredAt || '-'}</div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}