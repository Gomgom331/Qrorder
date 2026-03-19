import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
  Menu, Bell, ChevronDown, LogOut, User, Settings, QrCode,
  Megaphone, AlertCircle, Info, MessageSquare, ChevronRight,
} from 'lucide-react';

// ─── Mock notifications ──────────────────────────────────────────
const MOCK_NOTIFICATIONS = [
  { id: '1', type: 'notice' as const,   title: '시스템 점검 공지', body: '3월 20일 새벽 2~4시 시스템 점검이 예정되어 있습니다.', time: '1시간 전', read: false },
  { id: '2', type: 'inquiry' as const,  title: '홍대 본점 문의', body: '메뉴 이미지 업로드가 되지 않습니다. 확인 부탁드립니다.', time: '2시간 전', read: false },
  { id: '3', type: 'alert' as const,    title: '신규 매장 가입 승인 요청', body: '강남구 ○○ 분식 매장이 가입 승인 대기 중입니다.', time: '3시간 전', read: false },
  { id: '4', type: 'notice' as const,   title: '결제 모듈 업데이트 완료', body: '카카오페이 연동이 정상적으로 업데이트 완료되었습니다.', time: '어제', read: true },
  { id: '5', type: 'inquiry' as const,  title: '신촌점 문의', body: 'QR코드 인식이 안 되는 경우가 있습니다.', time: '어제', read: true },
];

const NOTIF_ICON = {
  notice:  { icon: Megaphone,      cls: 'bg-blue-50 text-blue-500' },
  inquiry: { icon: MessageSquare,  cls: 'bg-amber-50 text-amber-500' },
  alert:   { icon: AlertCircle,    cls: 'bg-red-50 text-red-500' },
};

const routeMeta: Record<string, { breadcrumb: string[] }> = {
  '/': { breadcrumb: ['홈', '대시보드'] },
  '/orders/realtime': { breadcrumb: ['주문 관리', '실시간 주문'] },
  '/orders/history': { breadcrumb: ['주문 관리', '주문 내역'] },
  '/stores/qr': { breadcrumb: ['QR 매장 관리', 'QR 코드 관리'] },
  '/stores/tables': { breadcrumb: ['QR 매장 관리', '테이블 관리'] },
  '/menus': { breadcrumb: ['메뉴 관리', '메뉴 등록 · 관리'] },
  '/menus/categories': { breadcrumb: ['메뉴 관리', '카테고리 관리', '메뉴 분류'] },
  '/menus/options': { breadcrumb: ['메뉴 관리', '카테고리 관리', '옵션 그룹'] },
  '/system/business': { breadcrumb: ['시스템', '시스템 관리', '사업장 조회'] },
  '/system/common-codes': { breadcrumb: ['시스템', '시스템 관리', '공통코드 관리'] },
  '/system/users': { breadcrumb: ['시스템', '시스템 관리', '관리자 관리'] },
  '/system/stats': { breadcrumb: ['시스템', '통계'] },
  '/system/notices': { breadcrumb: ['공지 · 문의 관리'] },
  '/ui/modals': { breadcrumb: ['UI 가이드', '모달 & 팝업'] },
  '/ui/tags': { breadcrumb: ['UI 가이드', '태그'] },
  '/ui/inputs': { breadcrumb: ['UI 가이드', '인풋 · 셀렉트'] },
  '/ui/buttons': { breadcrumb: ['UI 가이드', '버튼'] },
  '/ui/checkbox-radio': { breadcrumb: ['UI 가이드', '체크박스 · 라디오 · 토글'] },
  '/ui/form-alerts': { breadcrumb: ['UI 가이드', '폼 알림'] },
  '/ui/pagination': { breadcrumb: ['UI 가이드', '페이지네이션'] },
  '/ui/tree': { breadcrumb: ['UI 가이드', '트리 구조'] },
  '/ui/logo': { breadcrumb: ['UI 가이드', '로고 다운로드'] },
};

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const notifRef = useRef<HTMLDivElement>(null);
  const meta = routeMeta[location.pathname] ?? { breadcrumb: ['페이지'] };

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close on outside click
  useEffect(() => {
    if (!notifOpen) return;
    const handler = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [notifOpen]);

  const markAllRead = () => setNotifications(notifications.map((n) => ({ ...n, read: true })));

  return (
    <header className="h-[56px] bg-white border-b border-slate-200 flex items-center px-4 gap-5 shrink-0 relative z-20">
      {/* Hamburger */}
      <button
        onClick={onMenuClick}
        className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-[4px] transition-colors"
      >
        <Menu size={20} />
      </button>

      {/* Mobile logo */}
      <div className="lg:hidden flex items-center gap-2">
        <div className="bg-[#FF6B2B] text-white rounded-[4px] p-1 flex items-center justify-center">
          <QrCode size={14} />
        </div>
        <span className="text-base">
          <span className="font-bold text-[#FF6B2B]">QR</span>
          <span className="font-normal text-slate-700">order</span>
        </span>
      </div>

      {/* Breadcrumb (desktop) */}
      <nav className="hidden lg:flex items-center gap-1.5 text-sm">
        <span className="text-slate-800 font-medium">관리자 백오피스</span>
      </nav>

      <div className="flex-1" />

      {/* Notification bell */}
      <div className="relative" ref={notifRef}>
        <button
          onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}
          className={`relative p-1.5 rounded-[4px] transition-colors ${notifOpen ? 'bg-slate-100 text-slate-700' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'}`}
        >
          <Bell size={18} />
          {unreadCount > 0 && (
            <span className="absolute top-0.5 right-0.5 min-w-[16px] h-4 px-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Notification panel */}
        {notifOpen && (
          <div className="absolute right-0 top-full mt-2 w-[340px] bg-white border border-slate-200 rounded-[8px] shadow-xl z-30 overflow-hidden"
            style={{ animation: 'notifIn 0.15s ease-out' }}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Bell size={15} className="text-slate-500" />
                <span className="text-sm font-semibold text-slate-800">알림</span>
                {unreadCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-600">
                    {unreadCount}
                  </span>
                )}
              </div>
              {unreadCount > 0 && (
                <button onClick={markAllRead} className="text-xs text-[#FF6B2B] hover:underline">
                  모두 읽음
                </button>
              )}
            </div>

            {/* List */}
            <div className="max-h-[340px] overflow-y-auto divide-y divide-slate-50">
              {notifications.map((notif) => {
                const cfg = NOTIF_ICON[notif.type];
                const Icon = cfg.icon;
                return (
                  <button
                    key={notif.id}
                    onClick={() => {
                      setNotifications(notifications.map((n) => n.id === notif.id ? { ...n, read: true } : n));
                    }}
                    className={`w-full flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left ${!notif.read ? 'bg-blue-50/40' : ''}`}
                  >
                    <div className={`p-1.5 rounded-[6px] shrink-0 mt-0.5 ${cfg.cls}`}>
                      <Icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-xs font-semibold truncate ${notif.read ? 'text-slate-600' : 'text-slate-800'}`}>
                          {notif.title}
                        </span>
                        <span className="text-[10px] text-slate-400 shrink-0">{notif.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">{notif.body}</p>
                    </div>
                    {!notif.read && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-100">
              <button
                onClick={() => { setNotifOpen(false); navigate('/system/notices'); }}
                className="w-full flex items-center justify-center gap-1.5 py-3 text-xs text-[#FF6B2B] hover:bg-orange-50 transition-colors font-medium"
              >
                공지 · 문의 전체 보기
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Profile dropdown */}
      <div className="relative">
        <button
          onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
          className="flex items-center gap-2 px-2.5 py-1.5 hover:bg-slate-100 rounded-[4px] transition-colors"
        >
          <div className="w-7 h-7 rounded-[4px] bg-[#FF6B2B] flex items-center justify-center text-white text-xs font-semibold">
            관
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-sm text-slate-700 font-medium leading-none">관리자</div>
            <div className="text-xs text-slate-400 mt-0.5">슈퍼 어드민</div>
          </div>
          <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
        </button>

        {profileOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setProfileOpen(false)} />
            <div className="absolute right-0 top-full mt-1.5 w-[180px] bg-white border border-slate-200 rounded-[6px] shadow-lg z-20 overflow-hidden">
              <div className="px-3 py-2.5 border-b border-slate-100">
                <div className="text-sm font-medium text-slate-800">관리자</div>
                <div className="text-xs text-slate-400">admin@qrorder.kr</div>
              </div>
              <div className="py-1">
                <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                  <User size={14} />프로필
                </button>
                <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                  <Settings size={14} />설정
                </button>
              </div>
              <div className="border-t border-slate-100 py-1">
                <button
                  onClick={() => { setProfileOpen(false); navigate('/login'); }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={14} />로그아웃
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes notifIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
