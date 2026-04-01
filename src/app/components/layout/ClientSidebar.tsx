import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import {
  QrCode,
  ChevronDown,
  ChevronRight,
  X,
  LogOut,
  LayoutDashboard,
  ShoppingCart,
  Store,
  Utensils,
  Package,
  BarChart2,
  Megaphone,
  Bell,
  Gift,
  Puzzle,
  BarChart,
  Tag,
  Layers,
} from 'lucide-react';
import { ScrollBox } from '../ui/ScrollBox';

// ─── Types ───────────────────────────────────────────────────────
interface NavLeaf {
  type: 'leaf';
  label: string;
  path: string;
  icon?: React.ElementType;
}
interface NavGroup2 {
  type: 'group';
  label: string;
  icon?: React.ElementType;
  children: NavLeaf[];
}
type NavChild = NavLeaf | NavGroup2;
interface NavItem1WithLink {
  type: 'link';
  label: string;
  icon?: React.ElementType;
  path: string;
}
interface NavItem1WithGroup {
  type: 'group';
  label: string;
  icon?: React.ElementType;
  children: NavChild[];
}
type NavItem = NavItem1WithLink | NavItem1WithGroup;

// ─── Nav data (클라이언트용) ─────────────────────────────────────
const navItems: NavItem[] = [
  { type: 'link', label: '대시보드', path: '/client', icon: LayoutDashboard },
  {
    type: 'group', label: '주문 관리', icon: ShoppingCart,
    children: [
      { type: 'leaf', label: '실시간 주문', path: '/client/orders/realtime' },
      { type: 'leaf', label: '주문 내역',   path: '/client/orders/history' },
    ],
  },
  {
    type: 'group', label: '매장 관리', icon: Store,
    children: [
      { type: 'leaf', label: 'QR 코드 관리',  path: '/client/stores/qr' },
      { type: 'leaf', label: '테이블 관리',   path: '/client/stores/tables' },
      { type: 'leaf', label: '매장 목록',     path: '/client/stores/branches' },
      { type: 'leaf', label: '직원 호출 설정', path: '/client/stores/staff-call', icon: Bell },
    ],
  },
  {
    type: 'group', label: '메뉴 관리', icon: Utensils,
    children: [
      { type: 'leaf', label: '메뉴 등록 · 관리', path: '/client/menus' },
      { type: 'leaf', label: '메뉴판 보기 · 순서', path: '/client/menus/board' },
      { type: 'leaf', label: '메뉴 분류',         path: '/client/menus/categories' },
      { type: 'leaf', label: '옵션 그룹',         path: '/client/menus/options' },
    ],
  },
  { type: 'link', label: '재고 관리', path: '/client/inventory', icon: Package },
  {
    type: 'group', label: '이벤트 관리', icon: Gift,
    children: [
      { type: 'leaf', label: '리뷰 · 영수증 이벤트', path: '/client/events/review' },
    ],
  },
  {
    type: 'group', label: '매출 관리', icon: BarChart2,
    children: [
      { type: 'leaf', label: '매출 현황', path: '/client/sales/report' },
    ],
  },
  {
    type: 'group', label: '공지 · 문의', icon: Megaphone,
    children: [
      { type: 'leaf', label: '관리자 공지', path: '/client/notices' },
      { type: 'leaf', label: '문의 게시판', path: '/client/inquiry' },
    ],
  },
  // UI 가이드 (클라이언트 전용 패턴)
  {
    type: 'group', label: 'UI 가이드', icon: Puzzle,
    children: [
      { type: 'leaf', label: '통계 KPI 카드', path: '/client/ui/stat-cards', icon: BarChart },
      { type: 'leaf', label: '뱃지 · 상태',   path: '/client/ui/badges',     icon: Tag },
      { type: 'leaf', label: '메뉴 카드',      path: '/client/ui/menu-cards', icon: Layers },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────
function isAnyChildActive(children: NavChild[], pathname: string): boolean {
  return children.some((c) => {
    if (c.type === 'leaf') return pathname === c.path;
    return isAnyChildActive(c.children, pathname);
  });
}

// ─── 3rd-depth leaf ──────────────────────────────────────────────
function Depth3Link({ item }: { item: NavLeaf }) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-1.5 text-sm rounded-[3px] mx-1 transition-colors ${
          isActive ? 'text-white bg-[#FF6B2B]' : 'text-slate-500 hover:text-white hover:bg-white/5'
        }`
      }
    >
      {item.icon && <item.icon size={14} className="shrink-0" />}
      <span>{item.label}</span>
    </NavLink>
  );
}

// ─── 2nd-depth group ─────────────────────────────────────────────
function Depth2Group({ item }: { item: NavGroup2 }) {
  const location = useLocation();
  const active = isAnyChildActive(item.children, location.pathname);
  const [open, setOpen] = useState(active);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-2 px-3 py-1.5 text-sm rounded-[3px] mx-1 transition-colors ${
          active ? 'text-white/90 bg-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        {item.icon && <item.icon size={14} className="shrink-0" />}
        <span className="flex-1 text-left">{item.label}</span>
        {open
          ? <ChevronDown size={11} className="opacity-50" />
          : <ChevronRight size={11} className="opacity-50" />}
      </button>
      {open && (
        <div className="ml-3 mt-0.5 border-l border-white/10 pl-2 space-y-0.5">
          {item.children.map((leaf) => <Depth3Link key={leaf.path} item={leaf} />)}
        </div>
      )}
    </div>
  );
}

// ─── 1st-depth group ─────────────────────────────────────────────
function Depth1Group({ item }: { item: NavItem1WithGroup }) {
  const location = useLocation();
  const active = isAnyChildActive(item.children, location.pathname);
  const [open, setOpen] = useState(active);
  const hasIcon = !!item.icon;

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center px-4 py-2.5 text-sm transition-colors rounded-[4px] mx-0.5 ${
          hasIcon ? 'gap-3' : 'gap-2'
        } ${
          active ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`}
      >
        {item.icon && <item.icon size={16} className="shrink-0" />}
        <span className="flex-1 text-left">{item.label}</span>
        {open
          ? <ChevronDown size={13} className="shrink-0 opacity-60" />
          : <ChevronRight size={13} className="shrink-0 opacity-60" />}
      </button>
      {open && (
        <div className="ml-4 mt-0.5 mb-1 border-l border-white/10 pl-1.5 space-y-0.5">
          {item.children.map((child) => {
            if (child.type === 'leaf') {
              return (
                <NavLink
                  key={child.path}
                  to={child.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3 py-2 text-sm rounded-[4px] mx-1 transition-colors ${
                      isActive ? 'text-white bg-[#FF6B2B]' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {child.icon && <child.icon size={14} className="shrink-0" />}
                  <span>{child.label}</span>
                </NavLink>
              );
            }
            return <Depth2Group key={child.label} item={child} />;
          })}
        </div>
      )}
    </div>
  );
}

// ─── Sidebar shell ───────────────────────────────────────────────
interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function ClientSidebar({ open, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-[240px] bg-[#0F172A] z-40 transition-transform duration-200
        lg:translate-x-0
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <SidebarContent onClose={onClose} />
    </aside>
  );
}

function SidebarContent({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userType');
    navigate('/client/login');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-4 border-b border-white/10">
        <div className="bg-[#FF6B2B] text-white rounded-[4px] p-1.5 flex items-center justify-center shrink-0">
          <QrCode size={18} />
        </div>
        <span className="text-lg">
          <span className="font-bold text-[#FF6B2B]">QR</span>
          <span className="font-normal text-white">order</span>
        </span>
        <span className="text-[10px] text-emerald-500 bg-slate-800 px-1.5 py-0.5 rounded-[3px]">CLIENT</span>
        {/* X button — only on mobile */}
        <button
          onClick={onClose}
          className="ml-auto text-slate-400 hover:text-white hover:bg-white/10 rounded-[4px] p-1 transition-colors shrink-0 lg:hidden"
        >
          <X size={16} />
        </button>
      </div>

      {/* Nav */}
      <ScrollBox variant="subtle" className="flex-1 py-3 space-y-0.5 px-1">
        {navItems.map((item) => {
          if (item.type === 'link') {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 text-sm rounded-[4px] mx-0.5 transition-colors ${
                    isActive ? 'text-white bg-[#FF6B2B]' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.icon && <item.icon size={16} className="shrink-0" />}
                <span>{item.label}</span>
              </NavLink>
            );
          }
          return <Depth1Group key={item.label} item={item} />;
        })}
      </ScrollBox>

      {/* Profile */}
      <div className="border-t border-white/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[4px] bg-emerald-600 flex items-center justify-center text-white text-sm font-semibold shrink-0">
            매
          </div>
          <div className="min-w-0">
            <div className="text-sm text-white font-medium truncate">매장관리자</div>
            <div className="text-xs text-slate-500 truncate">store_manager</div>
          </div>
          <button
            onClick={handleLogout}
            className="ml-auto text-slate-500 hover:text-red-400 transition-colors p-1"
            title="로그아웃"
          >
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}