import { useState } from 'react';
import { Megaphone, MessageSquare, Plus, Send, ChevronDown, ChevronUp, CheckCircle2, Clock, Search, X } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { InputField } from '../../components/ui/InputField';
import { Modal, ModalBtn } from '../../components/ui/Modal';
import { Tag } from '../../components/ui/Tag';

// ─── Types ───────────────────────────────────────────────────────
type NoticeType = 'notice' | 'update' | 'alert';

interface Notice {
  id: string;
  type: NoticeType;
  title: string;
  content: string;
  createdAt: string;
  author: string;
  read: boolean;
}

interface Inquiry {
  id: string;
  title: string;
  content: string;
  status: 'pending' | 'answered';
  createdAt: string;
  answer?: string;
  answeredAt?: string;
}

// ─── Mock data ───────────────────────────────────────────────────
const MOCK_NOTICES: Notice[] = [
  { id: '1', type: 'notice', title: '시스템 점검 공지 (3/20)', content: '3월 20일 새벽 2시부터 4시까지 정기 시스템 점검이 진행됩니다. 해당 시간 중 서비스 이용이 일시 제한되오니 양해 부탁드립니다.', createdAt: '2026-03-17 10:00', author: '운영팀', read: false },
  { id: '2', type: 'update', title: '카카오페이 결제 모듈 업데이트 완료', content: '카카오페이 결제 연동 모듈이 최신 버전으로 업데이트 완료되었습니다. 즉시 사용 가능하며, 별도 설정이 필요하지 않습니다.', createdAt: '2026-03-16 14:00', author: '개발팀', read: false },
  { id: '3', type: 'alert', title: '이용약관 변경 안내 (4/1 적용)', content: '2026년 4월 1일부터 개정된 이용약관이 적용됩니다. 아래 내용을 반드시 확인해 주세요. 주요 변경 사항: 1. 결제 수수료 정책 변경 2. 데이터 보관 기간 변경 3. 서비스 이용 시간 조정', createdAt: '2026-03-15 09:00', author: '운영팀', read: true },
  { id: '4', type: 'notice', title: '신규 QR 코드 커스터마이징 기능 안내', content: '테이블 QR 코드에 매장 로고와 색상을 적용할 수 있는 커스터마이징 기능이 추가되었습니다. 매장 관리 > QR 코드 관리에서 확인하세요.', createdAt: '2026-03-14 11:00', author: '개발팀', read: true },
];

const MOCK_INQUIRIES: Inquiry[] = [
  { id: '1', title: '메뉴 이미지 업로드 오류', content: '메뉴 이미지를 업로드하면 "파일 크기 초과" 오류가 발생합니다. 파일 크기는 1.2MB입니다. 확인 부탁드립니다.', status: 'pending', createdAt: '2026-03-17 14:30' },
  { id: '2', title: 'QR 코드 인식 불량 문의', content: '특정 스마트폰에서 QR 코드 인식이 되지 않는 경우가 있습니다. iPhone 15 Pro에서 자주 발생합니다.', status: 'answered', createdAt: '2026-03-15 11:00', answer: 'iPhone 15 Pro에서 일부 QR 코드 스캔 이슈가 확인되었습니다. iOS 17.3 업데이트 후 정상 동작하는 것으로 확인되었습니다. 기기 업데이트를 진행해 주세요.', answeredAt: '2026-03-16 09:30' },
];

const NOTICE_TYPE_CONFIG: Record<NoticeType, { label: string; color: 'blue' | 'green' | 'red' }> = {
  notice: { label: '공지',     color: 'blue' },
  update: { label: '업데이트', color: 'green' },
  alert:  { label: '긴급',    color: 'red' },
};

// ─── Notice Item ─────────────────────────────────────────────────
function NoticeItem({ notice, onRead }: { notice: Notice; onRead: (id: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const tc = NOTICE_TYPE_CONFIG[notice.type];

  return (
    <div className={`border-b border-slate-100 last:border-0 transition-colors ${!notice.read ? 'bg-blue-50/30' : 'hover:bg-slate-50'}`}>
      <button
        className="w-full flex items-start gap-4 px-4 md:px-5 py-4 text-left"
        onClick={() => { setExpanded(!expanded); if (!notice.read) onRead(notice.id); }}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <Tag color={tc.color} variant="soft" size="sm">{tc.label}</Tag>
            <span className={`text-sm font-medium truncate ${notice.read ? 'text-slate-700' : 'text-slate-900'}`}>
              {notice.title}
            </span>
            {!notice.read && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{notice.author}</span>
            <span>·</span>
            <span>{notice.createdAt}</span>
          </div>
        </div>
        <div className="shrink-0 text-slate-400 mt-0.5">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>
      {expanded && (
        <div className="px-4 md:px-5 pb-4">
          <div className="bg-white border border-slate-200 rounded-[6px] p-4">
            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{notice.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Inquiry Item ─────────────────────────────────────────────────
function InquiryItem({ inquiry }: { inquiry: Inquiry }) {
  const [expanded, setExpanded] = useState(inquiry.status === 'pending');

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        className="w-full flex items-start gap-4 px-4 md:px-5 py-4 text-left hover:bg-slate-50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            {inquiry.status === 'pending' ? (
              <Tag color="amber" variant="soft" size="sm" dot>미답변</Tag>
            ) : (
              <Tag color="green" variant="soft" size="sm" dot>답변완료</Tag>
            )}
            <span className="text-sm font-medium text-slate-800 truncate">{inquiry.title}</span>
          </div>
          <div className="text-xs text-slate-400">{inquiry.createdAt}</div>
        </div>
        {expanded ? <ChevronUp size={16} className="text-slate-400 shrink-0 mt-1" /> : <ChevronDown size={16} className="text-slate-400 shrink-0 mt-1" />}
      </button>
      {expanded && (
        <div className="px-4 md:px-5 pb-4 space-y-3">
          <div className="bg-slate-50 rounded-[6px] p-3.5">
            <p className="text-sm text-slate-700 leading-relaxed">{inquiry.content}</p>
          </div>
          {inquiry.answer && (
            <div className="bg-emerald-50 border border-emerald-100 rounded-[6px] p-3.5">
              <div className="flex items-center gap-1.5 mb-2">
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span className="text-xs font-medium text-emerald-700">관리자 답변</span>
                {inquiry.answeredAt && <span className="text-xs text-emerald-500 ml-1">{inquiry.answeredAt}</span>}
              </div>
              <p className="text-sm text-emerald-800 leading-relaxed">{inquiry.answer}</p>
            </div>
          )}
          {inquiry.status === 'pending' && (
            <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 border border-amber-100 rounded-[6px] px-3 py-2">
              <Clock size={12} />
              답변 대기 중입니다. 영업일 기준 1~2일 내에 답변 드리겠습니다.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────
export function ClientNoticesAndInquiry() {
  const [activeTab, setActiveTab] = useState<'notices' | 'inquiry'>('notices');
  const [notices, setNotices] = useState<Notice[]>(MOCK_NOTICES);
  const [inquiries, setInquiries] = useState<Inquiry[]>(MOCK_INQUIRIES);
  const [searchTerm, setSearchTerm] = useState('');
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [writeForm, setWriteForm] = useState({ title: '', content: '' });

  const unreadCount = notices.filter((n) => !n.read).length;
  const pendingCount = inquiries.filter((i) => i.status === 'pending').length;

  const handleRead = (id: string) => {
    setNotices(notices.map((n) => n.id === id ? { ...n, read: true } : n));
  };

  const handleMarkAllRead = () => {
    setNotices(notices.map((n) => ({ ...n, read: true })));
  };

  const handleSubmitInquiry = () => {
    if (!writeForm.title.trim() || !writeForm.content.trim()) return;
    setInquiries([{
      id: String(Date.now()),
      title: writeForm.title,
      content: writeForm.content,
      status: 'pending',
      createdAt: '2026-03-17 ' + new Date().toTimeString().slice(0, 5),
    }, ...inquiries]);
    setWriteForm({ title: '', content: '' });
    setWriteModalOpen(false);
  };

  const filteredNotices = notices.filter((n) =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredInquiries = inquiries.filter((i) =>
    i.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">고객지원</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">공지 · 문의</span>
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
          관리자 공지
          {unreadCount > 0 && (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-600">{unreadCount}</span>
          )}
        </button>
        <button
          onClick={() => { setActiveTab('inquiry'); setSearchTerm(''); }}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
            activeTab === 'inquiry'
              ? 'text-[#FF6B2B] border-[#FF6B2B]'
              : 'text-slate-500 border-transparent hover:text-slate-700'
          }`}
        >
          <MessageSquare size={15} />
          문의 게시판
          {pendingCount > 0 && (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-600">{pendingCount}</span>
          )}
        </button>
      </div>

      {/* ── 관리자 공지 ── */}
      {activeTab === 'notices' && (
        <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
          <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-slate-800">공지 목록</h3>
              <span className="text-xs text-slate-400">총 {filteredNotices.length}건</span>
            </div>
            {unreadCount > 0 && (
              <button onClick={handleMarkAllRead} className="text-xs text-[#FF6B2B] hover:underline">모두 읽음</button>
            )}
          </div>
          <div className="px-4 md:px-5 py-2.5 border-b border-slate-100">
            <InputField inputSize="sm" placeholder="공지 제목 검색" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} icon={Search} />
          </div>
          <div>
            {filteredNotices.length === 0 ? (
              <div className="py-16 text-center text-slate-400 text-sm">공지가 없습니다</div>
            ) : (
              filteredNotices.map((notice) => (
                <NoticeItem key={notice.id} notice={notice} onRead={handleRead} />
              ))
            )}
          </div>
        </div>
      )}

      {/* ── 문의 게시판 ── */}
      {activeTab === 'inquiry' && (
        <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
          <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-slate-800">문의 목록</h3>
              <span className="text-xs text-slate-400">총 {filteredInquiries.length}건</span>
            </div>
            <Button variant="primary" size="sm" onClick={() => setWriteModalOpen(true)} leftIcon={<Plus size={13} />}>
              문의 작성
            </Button>
          </div>

          <div className="px-4 md:px-5 py-2.5 border-b border-slate-100">
            <InputField inputSize="sm" placeholder="문의 제목 검색" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} icon={Search} />
          </div>

          <div>
            {filteredInquiries.length === 0 ? (
              <div className="py-16 text-center text-slate-400 text-sm">
                <MessageSquare size={40} className="mx-auto mb-3 opacity-20" />
                <p>문의 내역이 없습니다</p>
                <button
                  onClick={() => setWriteModalOpen(true)}
                  className="mt-3 text-xs text-[#FF6B2B] hover:underline"
                >
                  첫 문의 작성하기
                </button>
              </div>
            ) : (
              filteredInquiries.map((inq) => <InquiryItem key={inq.id} inquiry={inq} />)
            )}
          </div>
        </div>
      )}

      {/* ── 문의 작성 Modal ── */}
      <Modal
        open={writeModalOpen}
        onClose={() => setWriteModalOpen(false)}
        size="lg"
        title="문의 작성"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setWriteModalOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handleSubmitInquiry}><Send size={13} className="inline mr-1" />문의 등록</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-100 rounded-[6px] p-3.5">
            <p className="text-xs text-blue-700 leading-relaxed">
              문의 내용은 담당 관리자에게 전달됩니다. 영업일 기준 1~2일 내 답변 드리겠습니다.
            </p>
          </div>
          <InputField
            label="제목" required
            value={writeForm.title}
            onChange={(e) => setWriteForm({ ...writeForm, title: e.target.value })}
            placeholder="문의 제목을 입력하세요"
          />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={writeForm.content}
              onChange={(e) => setWriteForm({ ...writeForm, content: e.target.value })}
              placeholder="문의 내용을 자세히 입력하세요"
              rows={6}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-[4px] resize-none focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/30 focus:border-[#FF6B2B] transition-colors"
            />
            <p className="text-xs text-slate-400 mt-1">오류 발생 시 스크린샷과 함께 상황을 상세히 설명해 주시면 빠른 해결에 도움이 됩니다.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
