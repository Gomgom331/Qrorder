import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import {
  QrCode,
  ChevronDown,
  ChevronRight,
  X,
  LogOut,
  Layers,
  Tag,
  Square,
  ToggleLeft,
  AlertTriangle,
  CheckSquare,
  List,
  GitBranch,
  ImageDown,
  Puzzle,
  Palette,
  Braces,
  Megaphone,
  LayoutList,
  Paperclip,
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

// ─── Nav data ────────────────────────────────────────────────────
const navItems: NavItem[] = [
  { type: 'link', label: '대시보드', path: '/' },
  {
    type: 'group', label: '주문 관리',
    children: [
      { type: 'leaf', label: '실시간 주문', path: '/orders/realtime' },
      { type: 'leaf', label: '주문 내역', path: '/orders/history' },
    ],
  },
  {
    type: 'group', label: 'QR 매장 관리',
    children: [
      { type: 'leaf', label: 'QR 코드 관리', path: '/stores/qr' },
      { type: 'leaf', label: '테이블 관리', path: '/stores/tables' },
    ],
  },
  {
    type: 'group', label: '메뉴 관리',
    children: [
      { type: 'leaf', label: '메뉴 등록 · 관리', path: '/menus' },
      {
        type: 'group', label: '카테고리 관리',
        children: [
          { type: 'leaf', label: '메뉴 분류', path: '/menus/categories' },
          { type: 'leaf', label: '옵션 그룹', path: '/menus/options' },
        ],
      },
    ],
  },
  {
    type: 'group', label: '시스템',
    children: [
      {
        type: 'group', label: '시스템 관리',
        children: [
          { type: 'leaf', label: '사업장 조회',      path: '/system/business' },
          { type: 'leaf', label: '사업장 상태 조회', path: '/system/business-status' },
          { type: 'leaf', label: '공통코드 관리',    path: '/system/common-codes' },
          { type: 'leaf', label: '메뉴 관리',        path: '/system/menus' },
          { type: 'leaf', label: '메시지 관리',      path: '/system/messages' },
          { type: 'leaf', label: '규칙 관리',        path: '/system/rules' },
          { type: 'leaf', label: '변경이력조회',     path: '/system/change-history' },
        ],
      },
      {
        type: 'group', label: '결제관리',
        children: [
          { type: 'leaf', label: '결제요금관리', path: '/system/payment-plans' },
          { type: 'leaf', label: '쿠폰관리',     path: '/system/coupons' },
        ],
      },
      {
        type: 'group', label: '이력 관리',
        children: [
          { type: 'leaf', label: '접속정보조회', path: '/system/access-logs' },
        ],
      },
      { type: 'leaf', label: '관리자 관리', path: '/system/users' },
      { type: 'leaf', label: '통계',         path: '/system/stats' },
    ],
  },
  {
    type: 'group', label: '게시판 관리', icon: LayoutList,
    children: [
      { type: 'leaf', label: '공지사항 관리', path: '/board/notice-management' },
      { type: 'leaf', label: '문의사항 관리', path: '/board/inquiry-management' },
    ],
  },
  { type: 'link', label: '공지 · 문의 관리', path: '/system/notices', icon: Megaphone },
  // UI 가이드: 아이콘 유지
  {
    type: 'group', label: 'UI 가이드', icon: Puzzle,
    children: [
      { type: 'leaf', label: '컬러 시스템',              path: '/ui/colors',         icon: Palette },
      { type: 'leaf', label: '모달 & 팝업',              path: '/ui/modals',         icon: Layers },
      { type: 'leaf', label: '태그',                     path: '/ui/tags',           icon: Tag },
      { type: 'leaf', label: '인풋 · 셀렉트',            path: '/ui/inputs',         icon: Square },
      { type: 'leaf', label: '버튼',                     path: '/ui/buttons',        icon: ToggleLeft },
      { type: 'leaf', label: '체크박스 · 라디오 · 토글', path: '/ui/checkbox-radio', icon: CheckSquare },
      { type: 'leaf', label: '폼 알림',                  path: '/ui/form-alerts',    icon: AlertTriangle },
      { type: 'leaf', label: '첨부파일 업로드',           path: '/ui/file-upload',    icon: Paperclip },
      { type: 'leaf', label: '페이지네이션',             path: '/ui/pagination',     icon: List },
      { type: 'leaf', label: '트리 구조',                path: '/ui/tree',           icon: GitBranch },
      { type: 'leaf', label: '테이블 패턴',              path: '/ui/table',          icon: List },
      { type: 'leaf', label: '디자인 토큰',              path: '/ui/token',          icon: Braces },
      { type: 'leaf', label: '로고 다운로드',            path: '/ui/logo',           icon: ImageDown },
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

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-[240px] bg-[#0F172A] z-40 transition-transform duration-200 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <SidebarContent onClose={onClose} />
    </aside>
  );
}

function SidebarContent({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();

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
        <span className="text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded-[3px]">ADMIN</span>
        <button
          onClick={onClose}
          className="ml-auto text-slate-400 hover:text-white hover:bg-white/10 rounded-[4px] p-1 transition-colors shrink-0"
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
          <div className="w-8 h-8 rounded-[4px] bg-[#FF6B2B] flex items-center justify-center text-white text-sm font-semibold shrink-0">
            관
          </div>
          <div className="min-w-0">
            <div className="text-sm text-white font-medium truncate">관리자</div>
            <div className="text-xs text-slate-500 truncate">admin_manager</div>
          </div>
          <button
            onClick={() => navigate('/login')}
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