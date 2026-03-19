import { useState } from 'react';
import { Plus, Pencil, Trash2, Search, X, Megaphone, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { Tag } from '../components/ui/Tag';
import { Pagination } from '../components/ui/Pagination';
import { DropdownSelect } from '../components/ui/DropdownSelect';

// ─── Types ───────────────────────────────────────────────────────
type NoticeType = 'notice' | 'update' | 'alert';

interface Notice {
  id: string;
  type: NoticeType;
  title: string;
  content: string;
  targetAll: boolean;
  targets?: string[];
  createdAt: string;
  author: string;
}

interface Inquiry {
  id: string;
  store: string;
  title: string;
  content: string;
  status: 'pending' | 'answered';
  createdAt: string;
  answer?: string;
  answeredAt?: string;
}

// ─── Mock data ───────────────────────────────────────────────────
const MOCK_NOTICES: Notice[] = [
  { id: '1', type: 'notice', title: '시스템 점검 공지 (3/20)', content: '3월 20일 새벽 2시부터 4시까지 정기 시스템 점검이 진행됩니다. 해당 시간 중 서비스 이용이 일시 제한되오니 양해 부탁드립니다.', targetAll: true, createdAt: '2026-03-17 10:00', author: '시스템관리자' },
  { id: '2', type: 'update', title: '카카오페이 결제 모듈 업데이트', content: '카카오페이 결제 연동 모듈이 최신 버전으로 업데이트 완료되었습니다. 별도 설정 없이 바로 사용 가능합니다.', targetAll: true, createdAt: '2026-03-16 14:00', author: '개발팀' },
  { id: '3', type: 'alert', title: '이용약관 변경 안내 (4/1 적용)', content: '2026년 4월 1일부터 개정된 이용약관이 적용됩니다. 변경사항을 반드시 확인해 주세요.', targetAll: true, createdAt: '2026-03-15 09:00', author: '운영팀' },
  { id: '4', type: 'notice', title: '신규 QR 코드 기능 안내', content: '테이블 QR 코드 커스터마이징 기능이 추가되었습니다. 메뉴판 > QR 관리에서 확인하세요.', targetAll: false, targets: ['홍대 본점', '강남점'], createdAt: '2026-03-14 11:00', author: '시스템관리자' },
];

const MOCK_INQUIRIES: Inquiry[] = [
  { id: '1', store: '홍대 본점', title: '메뉴 이미지 업로드 오류', content: '메뉴 이미지를 업로드하면 "파일 크기 초과" 오류가 발생합니다. 파일 크기는 1.2MB입니다.', status: 'pending', createdAt: '2026-03-17 14:30' },
  { id: '2', store: '신촌점', title: 'QR 코드 인식 불량 문의', content: '특정 스마트폰에서 QR 코드 인식이 되지 않는 경우가 있습니다. iPhone 15 Pro에서 발생합니다.', status: 'pending', createdAt: '2026-03-17 11:00' },
  { id: '3', store: '강남점', title: '결제 취소 처리 방법 문의', content: '주문 완료 후 고객 요청으로 취소해야 하는 경우 어떻게 처리하면 되는지 안내 부탁드립니다.', status: 'answered', createdAt: '2026-03-16 16:00', answer: '주문 내역 > 해당 주문 > 취소 버튼을 클릭하시면 됩니다. 결제 취소는 영업일 기준 1~3일 내 처리됩니다.', answeredAt: '2026-03-16 17:30' },
  { id: '4', store: '합정점', title: '메뉴 분류 추가 요청', content: '현재 분류 외에 "세트 메뉴" 카테고리를 추가할 수 있는지 문의드립니다.', status: 'answered', createdAt: '2026-03-15 10:00', answer: '메뉴 관리 > 메뉴 분류에서 직접 추가하실 수 있습니다. 추가 후 순서도 드래그로 변경 가능합니다.', answeredAt: '2026-03-15 14:00' },
];

const NOTICE_TYPE_CONFIG: Record<NoticeType, { label: string; color: 'blue' | 'green' | 'red' }> = {
  notice: { label: '공지',   color: 'blue' },
  update: { label: '업데이트', color: 'green' },
  alert:  { label: '긴급',   color: 'red' },
};

// ─── Main ────────────────────────────────────────────────────────
export function AdminNoticeManagement() {
  const [activeTab, setActiveTab] = useState<'notices' | 'inquiries'>('notices');
  const [searchTerm, setSearchTerm] = useState('');

  // ── Notices state ──
  const [notices, setNotices] = useState<Notice[]>(MOCK_NOTICES);
  const [noticeModalOpen, setNoticeModalOpen] = useState(false);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [noticeForm, setNoticeForm] = useState<Partial<Notice>>({});
  const [noticePage, setNoticePage] = useState(1);

  // ── Inquiries state ──
  const [inquiries, setInquiries] = useState<Inquiry[]>(MOCK_INQUIRIES);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [answerText, setAnswerText] = useState('');
  const [inquiryFilter, setInquiryFilter] = useState('전체');
  const [inquiryPage, setInquiryPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  // ── Notice handlers ──
  const handleAddNotice = () => {
    setEditingNotice(null);
    setNoticeForm({ type: 'notice', targetAll: true });
    setNoticeModalOpen(true);
  };
  const handleEditNotice = (n: Notice) => { setEditingNotice(n); setNoticeForm(n); setNoticeModalOpen(true); };
  const handleSaveNotice = () => {
    const now = '2026-03-17 ' + new Date().toTimeString().slice(0, 5);
    if (editingNotice) {
      setNotices(notices.map((n) => n.id === editingNotice.id ? { ...n, ...noticeForm } as Notice : n));
    } else {
      setNotices([{ id: String(Date.now()), ...noticeForm, createdAt: now, author: '관리자' } as Notice, ...notices]);
    }
    setNoticeModalOpen(false);
  };
  const handleDeleteNotice = (id: string) => {
    if (confirm('공지를 삭제하시겠습니까?')) setNotices(notices.filter((n) => n.id !== id));
  };

  // ── Inquiry handlers ──
  const handleOpenInquiry = (inq: Inquiry) => {
    setSelectedInquiry(inq);
    setAnswerText(inq.answer || '');
    setInquiryModalOpen(true);
  };
  const handleSaveAnswer = () => {
    if (!selectedInquiry) return;
    setInquiries(inquiries.map((inq) =>
      inq.id === selectedInquiry.id
        ? { ...inq, status: 'answered', answer: answerText, answeredAt: '2026-03-17 ' + new Date().toTimeString().slice(0, 5) }
        : inq
    ));
    setInquiryModalOpen(false);
  };

  // Filtered notices
  const filteredNotices = notices.filter((n) =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) || n.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const noticeTotal = Math.ceil(filteredNotices.length / ITEMS_PER_PAGE);
  const pagedNotices = filteredNotices.slice((noticePage - 1) * ITEMS_PER_PAGE, noticePage * ITEMS_PER_PAGE);

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchSearch = inq.title.toLowerCase().includes(searchTerm.toLowerCase()) || inq.store.includes(searchTerm);
    const matchStatus = inquiryFilter === '전체' || (inquiryFilter === '미답변' ? inq.status === 'pending' : inq.status === 'answered');
    return matchSearch && matchStatus;
  });
  const inquiryTotal = Math.ceil(filteredInquiries.length / ITEMS_PER_PAGE);
  const pagedInquiries = filteredInquiries.slice((inquiryPage - 1) * ITEMS_PER_PAGE, inquiryPage * ITEMS_PER_PAGE);

  const pendingCount = inquiries.filter((i) => i.status === 'pending').length;

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">시스템</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">공지 · 문의 관리</span>
      </nav>

      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => { setActiveTab('notices'); setSearchTerm(''); }}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
            activeTab === 'notices'
              ? 'text-[#FF6B2B] border-[#FF6B2B]'
              : 'text-slate-500 border-transparent hover:text-slate-700'
          }`}
        >
          <Megaphone size={15} />
          공지 관리
        </button>
        <button
          onClick={() => { setActiveTab('inquiries'); setSearchTerm(''); }}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
            activeTab === 'inquiries'
              ? 'text-[#FF6B2B] border-[#FF6B2B]'
              : 'text-slate-500 border-transparent hover:text-slate-700'
          }`}
        >
          <MessageSquare size={15} />
          문의 관리
          {pendingCount > 0 && (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-600">{pendingCount}</span>
          )}
        </button>
      </div>

      {/* ── 공지 관리 ── */}
      {activeTab === 'notices' && (
        <>
          <div className="bg-white border border-slate-200 rounded-[6px] p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <InputField inputSize="md" placeholder="공지 제목 또는 내용 검색" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} icon={Search} />
              </div>
              {searchTerm && (
                <Button variant="outline" size="md" leftIcon={<X size={14} />} onClick={() => setSearchTerm('')}>초기화</Button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium text-slate-800">공지 목록</h3>
                <span className="text-xs text-slate-400">총 {filteredNotices.length}건</span>
              </div>
              <Button variant="primary" size="sm" onClick={handleAddNotice} leftIcon={<Plus size={13} />}>공지 작성</Button>
            </div>

            <div className="divide-y divide-slate-100">
              {pagedNotices.length === 0 ? (
                <div className="py-16 text-center text-slate-400 text-sm">등록된 공지가 없습니다</div>
              ) : (
                pagedNotices.map((notice) => {
                  const tc = NOTICE_TYPE_CONFIG[notice.type];
                  return (
                    <div key={notice.id} className="flex items-start gap-4 px-4 md:px-5 py-4 hover:bg-slate-50 transition-colors">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <Tag color={tc.color} variant="soft" size="sm">{tc.label}</Tag>
                          <span className="text-sm font-medium text-slate-800 truncate">{notice.title}</span>
                          {notice.targetAll ? (
                            <span className="text-[10px] text-slate-400 shrink-0">전체 매장</span>
                          ) : (
                            <span className="text-[10px] text-slate-400 shrink-0">{notice.targets?.join(', ')}</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-2 mb-1.5 leading-relaxed">{notice.content}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>{notice.author}</span>
                          <span>·</span>
                          <span>{notice.createdAt}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <Button variant="icon" size="sm" onClick={() => handleEditNotice(notice)} iconOnly={<Pencil size={13} />} className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50" />
                        <Button variant="icon" size="sm" onClick={() => handleDeleteNotice(notice.id)} iconOnly={<Trash2 size={13} />} className="text-slate-400 hover:text-red-500 hover:bg-red-50" />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {noticeTotal > 1 && (
              <div className="px-4 md:px-5 py-4 border-t border-slate-200">
                <Pagination currentPage={noticePage} totalPages={noticeTotal} onPageChange={setNoticePage} />
              </div>
            )}
          </div>
        </>
      )}

      {/* ── 문의 관리 ── */}
      {activeTab === 'inquiries' && (
        <>
          <div className="bg-white border border-slate-200 rounded-[6px] p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <InputField inputSize="md" placeholder="매장명 또는 제목 검색" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} icon={Search} />
              </div>
              <div className="w-full sm:w-[140px]">
                <DropdownSelect
                  size="md"
                  options={[{ value: '전체', label: '전체' }, { value: '미답변', label: '미답변' }, { value: '답변완료', label: '답변완료' }]}
                  value={inquiryFilter}
                  onChange={setInquiryFilter}
                  placeholder="상태"
                />
              </div>
              {(searchTerm || inquiryFilter !== '전체') && (
                <Button variant="outline" size="md" leftIcon={<X size={14} />} onClick={() => { setSearchTerm(''); setInquiryFilter('전체'); }}>초기화</Button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium text-slate-800">문의 목록</h3>
                <span className="text-xs text-slate-400">총 {filteredInquiries.length}건</span>
              </div>
              {pendingCount > 0 && (
                <span className="flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                  <Clock size={12} />미답변 {pendingCount}건
                </span>
              )}
            </div>

            <div className="divide-y divide-slate-100">
              {pagedInquiries.length === 0 ? (
                <div className="py-16 text-center text-slate-400 text-sm">문의가 없습니다</div>
              ) : (
                pagedInquiries.map((inq) => (
                  <button
                    key={inq.id}
                    onClick={() => handleOpenInquiry(inq)}
                    className="w-full flex items-start gap-4 px-4 md:px-5 py-4 hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        {inq.status === 'pending' ? (
                          <Tag color="amber" variant="soft" size="sm" dot>미답변</Tag>
                        ) : (
                          <Tag color="green" variant="soft" size="sm" dot>답변완료</Tag>
                        )}
                        <span className="text-sm font-medium text-slate-800 truncate">{inq.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-1.5 leading-relaxed">{inq.content}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="font-medium text-slate-500">{inq.store}</span>
                        <span>·</span>
                        <span>{inq.createdAt}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      {inq.status === 'pending' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] text-xs font-medium bg-[#FF6B2B] text-white">
                          <Send size={11} />답변하기
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] text-xs font-medium bg-slate-100 text-slate-500">
                          <CheckCircle2 size={11} />답변보기
                        </span>
                      )}
                    </div>
                  </button>
                ))
              )}
            </div>

            {inquiryTotal > 1 && (
              <div className="px-4 md:px-5 py-4 border-t border-slate-200">
                <Pagination currentPage={inquiryPage} totalPages={inquiryTotal} onPageChange={setInquiryPage} />
              </div>
            )}
          </div>
        </>
      )}

      {/* ── 공지 작성/수정 Modal ── */}
      <Modal
        open={noticeModalOpen}
        onClose={() => setNoticeModalOpen(false)}
        size="lg"
        title={editingNotice ? '공지 수정' : '공지 작성'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setNoticeModalOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handleSaveNotice}><Send size={13} className="inline mr-1" />{editingNotice ? '수정' : '발송'}</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DropdownSelect
              label="공지 유형" required
              options={[
                { value: 'notice', label: '공지' },
                { value: 'update', label: '업데이트' },
                { value: 'alert', label: '긴급' },
              ]}
              value={noticeForm.type || 'notice'}
              onChange={(val) => setNoticeForm({ ...noticeForm, type: val as NoticeType })}
            />
            <DropdownSelect
              label="수신 대상" required
              options={[
                { value: 'all', label: '전체 매장' },
                { value: 'select', label: '특정 매장 선택' },
              ]}
              value={noticeForm.targetAll !== false ? 'all' : 'select'}
              onChange={(val) => setNoticeForm({ ...noticeForm, targetAll: val === 'all' })}
            />
          </div>
          <InputField
            label="제목" required
            value={noticeForm.title || ''}
            onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
            placeholder="공지 제목을 입력하세요"
          />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={noticeForm.content || ''}
              onChange={(e) => setNoticeForm({ ...noticeForm, content: e.target.value })}
              placeholder="공지 내용을 입력하세요"
              rows={5}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-[4px] resize-none focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/30 focus:border-[#FF6B2B] transition-colors"
            />
          </div>
        </div>
      </Modal>

      {/* ── 문의 답변 Modal ── */}
      {selectedInquiry && (
        <Modal
          open={inquiryModalOpen}
          onClose={() => setInquiryModalOpen(false)}
          size="lg"
          title="문의 상세 / 답변"
          footer={
            <>
              <ModalBtn variant="outline" onClick={() => setInquiryModalOpen(false)}>닫기</ModalBtn>
              <ModalBtn variant="primary" onClick={handleSaveAnswer}><Send size={13} className="inline mr-1" />답변 등록</ModalBtn>
            </>
          }
        >
          <div className="space-y-4">
            {/* 문의 내용 */}
            <div className="bg-slate-50 rounded-[6px] p-4">
              <div className="flex items-center gap-2 mb-2">
                <Tag color="blue" variant="soft" size="sm">문의</Tag>
                <span className="text-sm font-medium text-slate-800">{selectedInquiry.title}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                <span className="font-medium text-slate-500">{selectedInquiry.store}</span>
                <span>·</span>
                <span>{selectedInquiry.createdAt}</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{selectedInquiry.content}</p>
            </div>

            {/* 답변 작성 */}
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
    </div>
  );
}
