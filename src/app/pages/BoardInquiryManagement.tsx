import { useState } from 'react';
import { Search, Pencil, Download, FileText, Image, DownloadCloud } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { Pagination } from '../components/ui/Pagination';

// ─── Types ───────────────────────────────────────────────────────

interface Inquiry {
  id: string;
  title: string;
  content: string;      // 문의 내용
  business: string;     // 사업장
  registrant: string;   // 등록자
  status: 'pending' | 'answered';
  createdAt: string;
  updatedAt: string;
  answeredAt?: string;
  answer?: string;      // 답변 내용
  attachmentNames?: string[];  // 첨부파일
}

// ─── Mock data ───────────────────────────────────────────────────

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'q1',
    title: '메뉴 이미지 업로드 오류',
    content: '메뉴 이미지를 업로드하면 "파일 크기 초과" 오류가 발생합니다. 파일 크기는 1.2MB입니다.',
    business: '홍대 본점',
    registrant: '김철수',
    status: 'pending',
    createdAt: '2026-04-22 14:30',
    updatedAt: '2026-04-22 14:30',
  },
  {
    id: 'q2',
    title: 'QR 코드 인식 불량 문의',
    content: '특정 스마트폰에서 QR 코드 인식이 되지 않는 경우가 있습니다. iPhone 15 Pro에서 발생합니다.',
    business: '신촌점',
    registrant: '박영희',
    status: 'pending',
    createdAt: '2026-04-22 11:00',
    updatedAt: '2026-04-22 11:00',
  },
  {
    id: 'q3',
    title: '결제 오류가 발생했습니다',
    content: 'QR 코드 결제 시 오류가 반복적으로 발생합니다. 확인 부탁드립니다.',
    business: '강남점',
    registrant: '이지훈',
    status: 'answered',
    createdAt: '2026-04-21 16:00',
    updatedAt: '2026-04-21 17:30',
    answeredAt: '2026-04-21 17:30',
    answer: '확인하여 조치 완료하였습니다.',
    attachmentNames: ['결제오류_스크린샷.png', '오류로그.pdf'],
  },
  {
    id: 'q4',
    title: '메뉴 분류 추가 요청',
    content: '현재 분류 외에 "세트 메뉴" 카테고리를 추가할 수 있는지 문의드립니다.',
    business: '합정점',
    registrant: '정민수',
    status: 'answered',
    createdAt: '2026-04-20 10:00',
    updatedAt: '2026-04-20 14:00',
    answeredAt: '2026-04-20 14:00',
    answer: '메뉴 관리 > 메뉴 분류에서 직접 추가하실 수 있습니다. 추가 후 순서도 드래그로 변경 가능합니다.',
  },
  {
    id: 'q5',
    title: '영수증 출력 설정 문의',
    content: '영수증 자동 출력 기능을 끄고 싶은데 어디서 설정하나요?',
    business: '연남점',
    registrant: '최현진',
    status: 'pending',
    createdAt: '2026-04-19 09:00',
    updatedAt: '2026-04-19 09:00',
  },
  {
    id: 'q6',
    title: '다중 매장 관리 계정 생성 문의',
    content: '여러 매장을 하나의 계정으로 관리하고 싶습니다. 가능한가요?',
    business: '망원점',
    registrant: '한수진',
    status: 'answered',
    createdAt: '2026-04-18 15:30',
    updatedAt: '2026-04-18 16:00',
    answeredAt: '2026-04-18 16:00',
    answer: '다중 매장 관리 기능은 엔터프라이즈 요금제에서 제공됩니다. 업그레이드를 원하시면 고객센터로 문의해 주세요.',
  },
];

const ITEMS_PER_PAGE = 10;

// ─── Page ────────────────────────────────────────────────────────

export function BoardInquiryManagement() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
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
    return textMatch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paged = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // ── 검색 ──
  const handleSearch = () => {
    setAppliedSearch(search);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearch('');
    setAppliedSearch('');
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
                        <span className="inline-block text-xs font-medium bg-orange-50 text-orange-600 px-2 py-[0.1875rem] rounded-[4px] whitespace-nowrap">미답변</span>
                      ) : (
                        <span className="inline-block text-xs font-medium bg-emerald-50 text-emerald-600 px-2 py-[0.1875rem] rounded-[4px] whitespace-nowrap">답변완료</span>
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
          size="xl"
          title="문의사항 상세"
          footer={
            <>
              <ModalBtn variant="primary" onClick={() => setDetailModalOpen(false)}>확인</ModalBtn>
              <ModalBtn variant="outline" onClick={() => setDetailModalOpen(false)}>닫기</ModalBtn>
            </>
          }
        >
          <div className="space-y-4">
            {/* 제목 */}
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">제목</label>
              <input
                type="text"
                value={selectedInquiry.title}
                disabled
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-[4px] bg-slate-50 text-slate-500 cursor-not-allowed"
              />
            </div>

            {/* 내용 */}
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">내용</label>
              <textarea
                value={selectedInquiry.content}
                disabled
                rows={5}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-[4px] bg-slate-50 text-slate-500 resize-none cursor-not-allowed"
              />
            </div>

            {/* 답변 내용 */}
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                답변 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                value={selectedInquiry.answer || ''}
                placeholder="답변 내용을 입력하세요"
                rows={5}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-[4px] resize-none outline-none transition-all placeholder:text-slate-300 text-slate-800 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20"
              />
            </div>

            {/* 첨부파일 */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-medium text-slate-500">
                  첨부파일 <span className="text-slate-400">{selectedInquiry.attachmentNames?.length || 0}개</span>
                </label>
              </div>
              {selectedInquiry.attachmentNames && selectedInquiry.attachmentNames.length > 0 ? (
                <>
                  <div className="border border-slate-200 rounded-[4px] overflow-hidden">
                    {selectedInquiry.attachmentNames.map((name, idx) => {
                      const ext = name.split('.').pop()?.toLowerCase() ?? '';
                      const isPng = ext === 'png';
                      const size = isPng ? '200 KB' : '1.0 MB';

                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors"
                        >
                          {isPng ? (
                            <Image size={14} className="shrink-0 text-blue-400" />
                          ) : (
                            <FileText size={14} className="shrink-0 text-red-400" />
                          )}
                          <span className="flex-1 text-sm text-slate-700 truncate">{name}</span>
                          <span className="shrink-0 text-xs text-slate-400">{size}</span>
                          <button
                            type="button"
                            className="shrink-0 w-5 h-5 flex items-center justify-center text-slate-400 hover:text-[#FF6B2B] transition-colors"
                            title="다운로드"
                          >
                            <Download size={13} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    className="mt-2 w-full flex items-center justify-center gap-2 px-3 py-2 border border-slate-200 rounded-[4px] text-sm text-slate-600 hover:bg-slate-50 hover:text-[#FF6B2B] hover:border-[#FF6B2B]/30 transition-colors"
                  >
                    <DownloadCloud size={14} />
                    <span>전체 파일 다운로드</span>
                  </button>
                </>
              ) : (
                <div className="border border-slate-200 rounded-[4px] py-8 text-center text-sm text-slate-400">
                  첨부된 파일이 없습니다
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}