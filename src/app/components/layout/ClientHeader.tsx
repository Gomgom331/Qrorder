import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
  Menu, Bell, ChevronDown, LogOut, User, Settings, QrCode,
  Megaphone, Info, ChevronRight,
} from 'lucide-react';

// ─── Mock notifications (받은 알림) ──────────────────────────────
const MOCK_CLIENT_NOTIFS = [
  { id: '1', type: 'notice' as const,  title: '시스템 점검 공지', body: '3월 20일 새벽 2~4시 시스템 점검이 예정되어 있습니다. 해당 시간 중 서비스 이용이 제한됩니다.', time: '1시간 전', read: false },
  { id: '2', type: 'reply' as const,   title: '문의 답변 완료', body: '[메뉴 이미지 업로드 문제] 문의에 대한 답변이 등록되었습니다.', time: '3시간 전', read: false },
  { id: '3', type: 'notice' as const,  title: '결제 모듈 업데이트', body: '카카오페이 연동이 업데이트 완료되었습니다. 즉시 사용 가능합니다.', time: '어제', read: true },
  { id: '4', type: 'notice' as const,  title: '이용약관 변경 안내', body: '2026년 4월 1일부터 개정된 이용약관이 적용됩니다.', time: '3일 전', read: true },
];

const NOTIF_ICON = {
  notice: { icon: Megaphone, cls: 'bg-blue-50 text-blue-500' },
  reply:  { icon: Info,      cls: 'bg-emerald-50 text-emerald-500' },
};

const routeMeta: Record<string, { breadcrumb: string[] }> = {
  '/client': { breadcrumb: ['홈', '대시보드'] },
  '/client/orders/realtime': { breadcrumb: ['주문 관리', '실시간 주문'] },
  '/client/orders/history': { breadcrumb: ['주문 관리', '주문 내역'] },
  '/client/stores/qr': { breadcrumb: ['매장 관리', 'QR 코드 관리'] },
  '/client/stores/tables': { breadcrumb: ['매장 관리', '테이블 관리'] },
  '/client/stores/branches': { breadcrumb: ['매장 관리', '매장 목록'] },
  '/client/stores/staff-call': { breadcrumb: ['매장 관리', '직원 호출 설정'] },
  '/client/menus': { breadcrumb: ['메뉴 관리', '메뉴 등록 · 관리'] },
  '/client/menus/categories': { breadcrumb: ['메뉴 관리', '메뉴 분류'] },
  '/client/menus/options': { breadcrumb: ['메뉴 관리', '옵션 그룹'] },
  '/client/menus/board': { breadcrumb: ['메뉴 관리', '메뉴판 보기 · 순서'] },
  '/client/inventory': { breadcrumb: ['재고 관리', '재료 재고'] },
  '/client/sales/report': { breadcrumb: ['매출 관리', '매출 현황'] },
  '/client/notices': { breadcrumb: ['공지 · 알림'] },
  '/client/inquiry': { breadcrumb: ['문의 게시판'] },
  '/client/events/review': { breadcrumb: ['이벤트 관리', '리뷰 · 영수증 이벤트'] },
  // UI 가이드 (클라이언트 전용)
  '/client/ui/stat-cards': { breadcrumb: ['UI 가이드', '통계 KPI 카드'] },
  '/client/ui/badges':     { breadcrumb: ['UI 가이드', '뱃지 · 상태'] },
  '/client/ui/menu-cards': { breadcrumb: ['UI 가이드', '메뉴 카드'] },
};

interface ClientHeaderProps {
  onMenuClick: () => void;
}

export function ClientHeader({ onMenuClick }: ClientHeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_CLIENT_NOTIFS);
  const notifRef = useRef<HTMLDivElement>(null);
  const meta = routeMeta[location.pathname] ?? { breadcrumb: ['페이지'] };

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    if (!notifOpen) return;
    const handler = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [notifOpen]);

  const markAllRead = () => setNotifications(notifications.map((n) => ({ ...n, read: true })));

  const handleLogout = () => {
    setProfileOpen(false);
    localStorage.removeItem('userType');
    navigate('/client/login');
  };

  return (
    <header className="h-[56px] bg-white border-b border-slate-200 flex items-center px-4 gap-4 shrink-0 relative z-20">
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuClick}
        className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-[4px] transition-colors lg:hidden"
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
        <span className="text-slate-800 font-medium">매장 백오피스</span>
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
          <div
            className="absolute right-0 top-full mt-2 w-[320px] bg-white border border-slate-200 rounded-[8px] shadow-xl z-30 overflow-hidden"
            style={{ animation: 'notifIn 0.15s ease-out' }}
          >
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
                <button onClick={markAllRead} className="text-xs text-[#FF6B2B] hover:underline">모두 읽음</button>
              )}
            </div>

            <div className="max-h-[300px] overflow-y-auto divide-y divide-slate-50">
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

            <div className="border-t border-slate-100 grid grid-cols-2 divide-x divide-slate-100">
              <button
                onClick={() => { setNotifOpen(false); navigate('/client/notices'); }}
                className="flex items-center justify-center gap-1 py-2.5 text-xs text-slate-600 hover:bg-slate-50 transition-colors"
              >
                공지 전체보기 <ChevronRight size={12} />
              </button>
              <button
                onClick={() => { setNotifOpen(false); navigate('/client/inquiry'); }}
                className="flex items-center justify-center gap-1 py-2.5 text-xs text-[#FF6B2B] hover:bg-orange-50 transition-colors"
              >
                문의하기 <ChevronRight size={12} />
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
          <div className="w-7 h-7 rounded-[4px] bg-emerald-500 flex items-center justify-center text-white text-xs font-semibold">매</div>
          <div className="hidden sm:block text-left">
            <div className="text-sm text-slate-700 font-medium leading-none">매장 관리자</div>
            <div className="text-xs text-slate-400 mt-0.5">홍대 본점</div>
          </div>
          <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
        </button>

        {profileOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setProfileOpen(false)} />
            <div className="absolute right-0 top-full mt-1.5 w-[180px] bg-white border border-slate-200 rounded-[6px] shadow-lg z-20 overflow-hidden">
              <div className="px-3 py-2.5 border-b border-slate-100">
                <div className="text-sm font-medium text-slate-800">매장 관리자</div>
                <div className="text-xs text-slate-400">store@qrorder.kr</div>
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
                  onClick={handleLogout}
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