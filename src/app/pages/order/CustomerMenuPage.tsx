import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import svgPaths from "@/imports/로딩-1/svg-goi3txa2gz";
import { useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingCart, Bell, X, Plus, Minus, Check, Search, Users,
  Flame, Star, Zap, Package, AlertTriangle, RefreshCw,
  Utensils, Clock, Loader2,
  Receipt, ChevronRight, Settings,
} from 'lucide-react';

// ─── Design System constants ─────────────────────────────────────
const PRIMARY = '#FF6B2B';
const PRIMARY_HOVER = '#E85D20';

// ─── Types ────────────────────────────────────────────────────────
type Phase = 'loading' | 'menu' | 'complete' | 'session-timeout' | 'session-closed';
type MenuBadge = 'popular' | 'recommended' | 'limited';

interface OptionChoice { id: string; label: string; priceAdd: number; }
interface OptionGroup {
  id: string; label: string; required: boolean;
  multiple: boolean; choices: OptionChoice[];
}
interface MenuItem {
  id: string; name: string; category: string; price: number;
  status: 'active' | 'soldout'; description?: string; image?: string;
  badges: MenuBadge[]; limitedQty?: number; timeSalePrice?: number;
  optionGroups?: OptionGroup[]; allergyInfo?: string; kcal?: number;
}
interface SelectedOptions { [groupId: string]: string[]; }
interface MultiQtyMap { [choiceKey: string]: number; }
interface OptionLine { label: string; priceAdd: number; qty: number; }
interface CartItem {
  cartKey: string; menuId: string; name: string;
  optionLabel?: string; optionLines?: OptionLine[]; price: number; optionPrice: number; qty: number;
}
interface OrderRecord { orderId: string; time: string; items: CartItem[]; total: number; }

// ─── Badge config (matches ClientMenuCardGuide) ───────────────────
const BADGE_CFG: Record<MenuBadge, { label: string; Icon: React.ElementType; cls: string }> = {
  popular:     { label: '인기',     Icon: Flame, cls: 'bg-red-50 text-red-500 border border-red-100' },
  recommended: { label: '추천',     Icon: Star,  cls: 'bg-amber-50 text-amber-500 border border-amber-100' },
  limited:     { label: '한정수량', Icon: Zap,   cls: 'bg-purple-50 text-purple-500 border border-purple-100' },
};

// ─── Mock Data ────────────────────────────────────────────────────
const STORES: Record<string, { name: string; notice?: string }> = {
  demo: { name: '맛나한식당', notice: '🔥 런치 특가! 11:00–14:00 불고기 정식 타임세일 진행 중' },
};
const CATEGORIES = ['전체', '한식', '일식', '중식', '양식', '분식', '음료', '디저트', '사이드', '주류'];
const TEST_CATEGORY = '🧪 테스트';
const MENU_ITEMS: MenuItem[] = [
  {
    id: '1', name: '불고기 정식', category: '한식', price: 12000, status: 'active',
    description: '국내산 소고기를 특제 양념에 재워 구운 불고기와 밥, 국, 반찬이 함께 나옵니다.',
    image: 'https://images.unsplash.com/photo-1708388463872-1be875a0ba6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['popular', 'recommended'], timeSalePrice: 9600, kcal: 720, allergyInfo: '대두, 밀, 우유',
    optionGroups: [
      { id: 'spicy', label: '맵기 선택', required: true, multiple: false, choices: [
        { id: 'mild', label: '순한맛', priceAdd: 0 },
        { id: 'medium', label: '보통맛', priceAdd: 0 },
        { id: 'hot', label: '매운맛', priceAdd: 0 },
      ]},
      { id: 'add', label: '추가 선택', required: false, multiple: true, choices: [
        { id: 'egg', label: '계란후라이 추가', priceAdd: 500 },
        { id: 'rice', label: '공기밥 추가', priceAdd: 1000 },
        { id: 'soup', label: '국 추가', priceAdd: 1000 },
      ]},
    ],
  },
  {
    id: '2', name: '김치찌개', category: '한식', price: 8000, status: 'active',
    description: '2년 이상 숙성한 묵은지로 끓인 얼큰하고 깊은 맛의 김치찌개. 공기밥 포함.',
    image: 'https://images.unsplash.com/photo-1676686997059-fb817ebbb2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['popular'], timeSalePrice: 6500, kcal: 480, allergyInfo: '대두',
    optionGroups: [
      { id: 'meat', label: '고기 선택', required: true, multiple: false, choices: [
        { id: 'pork', label: '돼지고기', priceAdd: 0 },
        { id: 'tuna', label: '참치', priceAdd: 0 },
        { id: 'seafood', label: '해물', priceAdd: 2000 },
      ]},
    ],
  },
  { id: '3', name: '된장찌개', category: '한식', price: 8000, status: 'active', description: '구수한 재래식 된장으로 끓인 두부 된장찌개. 공기밥 포함.', image: 'https://images.unsplash.com/photo-1535923054316-5f75572def8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', badges: [], kcal: 390, allergyInfo: '대두' },
  {
    id: '4', name: '비빔밥', category: '한식', price: 9000, status: 'active',
    description: '고소한 참기름과 고추장으로 비벼 먹는 전통 돌솥 비빔밥.',
    image: 'https://images.unsplash.com/photo-1741295017668-c8132acd6fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['recommended', 'limited'], limitedQty: 18, kcal: 650,
    optionGroups: [
      { id: 'spicy', label: '맵기 선택', required: true, multiple: false, choices: [
        { id: 'mild', label: '순한맛', priceAdd: 0 },
        { id: 'medium', label: '보통맛', priceAdd: 0 },
        { id: 'hot', label: '매운맛', priceAdd: 0 },
      ]},
      { id: 'topping', label: '토핑 추가', required: false, multiple: true, choices: [
        { id: 'egg', label: '계란후라이 추가', priceAdd: 500 },
        { id: 'cheese', label: '치즈 추가', priceAdd: 800 },
        { id: 'beef', label: '불고기 추가', priceAdd: 2000 },
      ]},
    ],
  },
  {
    id: '5', name: '제육볶음', category: '한식', price: 11000, status: 'active',
    description: '매콤달콤한 양념에 볶은 제육볶음. 공기밥 및 반찬 포함.',
    image: 'https://images.unsplash.com/photo-1708388064278-707e85eaddc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['limited'], limitedQty: 10, kcal: 820, allergyInfo: '대두, 밀',
    optionGroups: [
      { id: 'spicy', label: '맵기 선택', required: true, multiple: false, choices: [
        { id: 'mild', label: '순한맛', priceAdd: 0 },
        { id: 'medium', label: '보통맛', priceAdd: 0 },
        { id: 'hot', label: '매운맛', priceAdd: 0 },
        { id: 'xhot', label: '아주 매운맛', priceAdd: 0 },
      ]},
      { id: 'add', label: '추가 선택', required: false, multiple: true, choices: [
        { id: 'rice', label: '공기밥 추가', priceAdd: 1000 },
        { id: 'egg', label: '계란후라이 추가', priceAdd: 500 },
        { id: 'kimchi', label: '김치 추가', priceAdd: 500 },
      ]},
    ],
  },
  { id: '6', name: '돈까스', category: '일식', price: 10000, status: 'active', description: '바삭하게 튀긴 국내산 등심 돈까스. 소스, 샐러드, 공기밥 포함.', image: 'https://images.unsplash.com/photo-1734775373504-ff24ea8419b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', badges: ['popular'], kcal: 760, allergyInfo: '밀, 우유, 계란' },
  { id: '7', name: '우동', category: '일식', price: 7000, status: 'soldout', description: '부드러운 면발의 따뜻한 일본식 우동.', image: 'https://images.unsplash.com/photo-1725121463846-b23056f190df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', badges: [], kcal: 420 },
  { id: '8', name: '카레라이스', category: '일식', price: 8500, status: 'active', description: '부드러운 감자와 당근이 들어간 진한 일본식 카레라이스.', image: 'https://images.unsplash.com/photo-1679279726937-122c49626802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', badges: ['recommended'], kcal: 680 },
  {
    id: '9', name: '레몬에이드', category: '음료', price: 4500, status: 'active',
    description: '신선한 레몬으로 만든 상큼하고 시원한 레몬에이드.',
    image: 'https://images.unsplash.com/photo-1739138056344-3c852f4efc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: [], kcal: 120,
    optionGroups: [
      { id: 'ice', label: '얼음 선택', required: true, multiple: false, choices: [
        { id: 'ice_full', label: '얼음 많이', priceAdd: 0 },
        { id: 'ice_less', label: '얼음 적게', priceAdd: 0 },
        { id: 'ice_none', label: '얼음 없이', priceAdd: 0 },
      ]},
      { id: 'size_drink', label: '사이즈', required: true, multiple: false, choices: [
        { id: 'r', label: '레귤러 (350ml)', priceAdd: 0 },
        { id: 'l', label: '라지 (500ml)', priceAdd: 1000 },
      ]},
    ],
  },
  { id: '10', name: '티라미수', category: '디저트', price: 5500, status: 'active', description: '마스카포네 치즈와 에스프레소가 어우러진 이탈리안 디저트.', image: 'https://images.unsplash.com/photo-1761275710704-ec6a97c0141f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', badges: [], kcal: 340, allergyInfo: '우유, 계란, 밀' },
  {
    id: '11', name: '돈까스 정식', category: '일식', price: 13000, status: 'active',
    description: '바삭한 등심 돈까스에 공기밥, 된장국, 샐러드가 함께 나옵니다.',
    image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['recommended'],
    optionGroups: [
      { id: 'extra', label: '추가 선택', required: false, multiple: true, choices: [
        { id: 'cheese', label: '치즈 추가', priceAdd: 1000 },
        { id: 'shrimp', label: '새우튀김 추가', priceAdd: 2000 },
        { id: 'rice2',  label: '공기밥 추가',   priceAdd: 1000 },
        { id: 'salad',  label: '샐러드 추가',   priceAdd: 1500 },
      ]},
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────
function buildCartKey(menuId: string, opts: SelectedOptions, mq: MultiQtyMap) {
  const flat = Object.entries(opts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([gid, cids]) => {
      const sorted = [...cids].sort();
      return `${gid}=${sorted.map(cid => `${cid}:${mq[`${gid}__${cid}`] ?? 1}`).join(',')}`;
    }).join('|');
  return flat ? `${menuId}__${flat}` : menuId;
}

function buildOptionLabel(item: MenuItem, opts: SelectedOptions, mq: MultiQtyMap): string {
  if (!item.optionGroups) return '';
  const parts: string[] = [];
  for (const group of item.optionGroups) {
    const selected = opts[group.id] ?? [];
    if (!selected.length) continue;
    const labels = selected.map(cid => {
      const choice = group.choices.find(c => c.id === cid);
      if (!choice) return '';
      if (group.multiple) {
        const qty = mq[`${group.id}__${cid}`] ?? 1;
        return qty > 1 ? `${choice.label} ×${qty}` : choice.label;
      }
      return choice.label;
    }).filter(Boolean);
    if (labels.length) parts.push(labels.join(', '));
  }
  return parts.join(' · ');
}

function calcOptionPrice(item: MenuItem, opts: SelectedOptions, mq: MultiQtyMap): number {
  if (!item.optionGroups) return 0;
  let extra = 0;
  for (const group of item.optionGroups) {
    const selected = opts[group.id] ?? [];
    for (const cid of selected) {
      const choice = group.choices.find(c => c.id === cid);
      if (!choice) continue;
      const qty = group.multiple ? (mq[`${group.id}__${cid}`] ?? 1) : 1;
      extra += choice.priceAdd * qty;
    }
  }
  return extra;
}

function buildOptionLines(item: MenuItem, opts: SelectedOptions, mq: MultiQtyMap): OptionLine[] {
  if (!item.optionGroups) return [];
  const lines: OptionLine[] = [];
  for (const group of item.optionGroups) {
    const selected = opts[group.id] ?? [];
    for (const cid of selected) {
      const choice = group.choices.find(c => c.id === cid);
      if (!choice) continue;
      const qty = group.multiple ? (mq[`${group.id}__${cid}`] ?? 1) : 1;
      lines.push({ label: choice.label, priceAdd: choice.priceAdd, qty });
    }
  }
  return lines;
}

// ─── Badge Chip ───────────────────────────────────────────────────
function BadgeChip({ badge }: { badge: MenuBadge }) {
  const { label, Icon, cls } = BADGE_CFG[badge];
  return (
    <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium ${cls}`}>
      <Icon size={9} />{label}
    </span>
  );
}

// ─── Loading Screen ───────────────────────────────────────────────
function LoadingScreen({ storeName, tableId }: { storeName: string; tableId: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: PRIMARY, opacity: 0.06, transform: 'translate(35%, -35%)' }} />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: PRIMARY, opacity: 0.04, transform: 'translate(-35%, 35%)' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center gap-3 w-full max-w-xs"
      >
        {/* Brand logo */}
        <div className="flex items-center gap-3 mb-1">
          {/* Orange QR icon box */}
          <div className="w-[38px] h-[38px] rounded-[4px] flex items-center justify-center shrink-0"
            style={{ background: PRIMARY }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d={svgPaths.p3fa07780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d={svgPaths.p2f47d00}  stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d={svgPaths.p3be5c200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d={svgPaths.p1e1d0d80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M19.25 19.25V19.26"  stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d={svgPaths.p19925280} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M2.75 11H2.76"       stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M11 2.75H11.01"      stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M11 14.6667V14.6767" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M14.6667 11H15.5833" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M19.25 11V11.01"     stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M11 19.25V18.3333"   stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
            </svg>
          </div>
          {/* Brand text */}
          <span className="text-[24px] leading-none tracking-[0.07px]" style={{ color: PRIMARY }}>
            <span className="font-bold">QR</span>
            <span className="font-normal">order</span>
          </span>
        </div>

        {/* Store name */}
        <p className="text-[#62748e] text-[14px] leading-5">{storeName}</p>

        {/* Table card — fixed square, not full-width */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] px-8 py-3 flex flex-col items-center mt-1 shrink-0">
          <p className="text-[#90a1b9] text-[12px] leading-4 whitespace-nowrap">테이블</p>
          <p className="font-black text-[36px] leading-[1.1] text-[#1d293d] mt-0.5 whitespace-nowrap">{tableId}번</p>
        </div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center gap-2.5 mt-2">
          <p className="text-[#62748e] text-[14px] leading-5">메뉴를 불러오는 중</p>
          {/* Three staggered dots */}
          <div className="flex items-center gap-[5px]">
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="block w-[7px] h-[7px] rounded-full"
                style={{ background: PRIMARY }}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Menu Item Card ───────────────────────────────────────────────
function MenuItemCard({ item, runtimeSoldout, onAdd }: { item: MenuItem; runtimeSoldout: Set<string>; onAdd: () => void }) {
  const isSoldout = item.status === 'soldout' || runtimeSoldout.has(item.id);

  return (
    <div className="flex gap-3 px-4 py-3 bg-white border-b border-slate-100">
      {/* Image — soldout overlay only, no badge overlay */}
      <div className="relative shrink-0 w-[72px] h-[72px] rounded-[6px] overflow-hidden bg-slate-100">
        {item.image && (
          <img src={item.image} alt={item.name}
            className={`w-full h-full object-cover ${isSoldout ? 'grayscale opacity-60' : ''}`} />
        )}
        {isSoldout && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="px-1.5 py-0.5 bg-black/70 text-white text-xs font-semibold rounded-[4px]">품절</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          {/* All badges in text area */}
          {item.badges.length > 0 && (
            <div className="flex gap-1 mb-1 flex-wrap">
              {item.badges.map(b => <BadgeChip key={b} badge={b} />)}
            </div>
          )}
          <p className="font-medium text-slate-800 text-sm leading-snug">{item.name}</p>
          {item.description && (
            <p className="text-slate-500 text-xs mt-0.5 leading-relaxed line-clamp-2">{item.description}</p>
          )}
        </div>

        {/* Price + Add button */}
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-bold text-sm tabular-nums" style={{ color: PRIMARY }}>{item.price.toLocaleString()}원</span>

          {!isSoldout && (
            <button
              onClick={onAdd}
              className="h-8 w-8 flex items-center justify-center rounded-[4px] transition-colors touch-manipulation"
              style={{ background: `${PRIMARY}18`, color: PRIMARY }}
              onMouseEnter={e => (e.currentTarget.style.background = `${PRIMARY}28`)}
              onMouseLeave={e => (e.currentTarget.style.background = `${PRIMARY}18`)}
              aria-label="메뉴 추가"
            >
              <Plus size={16} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Menu Detail Sheet ────────────────────────────────────────────
function MenuDetailSheet({
  item, onClose, onAddToCart,
}: {
  item: MenuItem;
  onClose: () => void;
  onAddToCart: (opts: SelectedOptions, mq: MultiQtyMap, qty: number) => void;
}) {
  const [selectedOpts, setSelectedOpts] = useState<SelectedOptions>(() => {
    const init: SelectedOptions = {};
    item.optionGroups?.forEach(g => {
      init[g.id] = g.required && !g.multiple ? [g.choices[0]?.id].filter(Boolean) as string[] : [];
    });
    return init;
  });
  const [multiQty, setMultiQty] = useState<MultiQtyMap>({});
  const [qty, setQty] = useState(1);


  const toggleOption = (groupId: string, choiceId: string, multiple: boolean) => {
    const cur = selectedOpts[groupId] ?? [];
    if (multiple) {
      const isSelected = cur.includes(choiceId);
      setSelectedOpts(prev => {
        const prevCur = prev[groupId] ?? [];
        const next = prevCur.includes(choiceId)
          ? prevCur.filter(c => c !== choiceId)
          : [...prevCur, choiceId];
        return { ...prev, [groupId]: next };
      });
      if (!isSelected) {
        setMultiQty(prev => ({ ...prev, [`${groupId}__${choiceId}`]: 1 }));
      }
    } else {
      setSelectedOpts(prev => {
        const prevCur = prev[groupId] ?? [];
        return { ...prev, [groupId]: prevCur.includes(choiceId) ? [] : [choiceId] };
      });
    }
  };

  const setChoiceQty = (groupId: string, choiceId: string, delta: number) => {
    setMultiQty(prev => {
      const key = `${groupId}__${choiceId}`;
      return { ...prev, [key]: Math.max(1, (prev[key] ?? 1) + delta) };
    });
  };

  const isRequiredSatisfied = useMemo(() => {
    if (!item.optionGroups) return true;
    return item.optionGroups.filter(g => g.required).every(g => (selectedOpts[g.id]?.length ?? 0) > 0);
  }, [item.optionGroups, selectedOpts]);

  const optionExtra = calcOptionPrice(item, selectedOpts, multiQty);
  const totalPrice = (item.price + optionExtra) * qty;

  // Swipe-down to close
  const startY = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { startY.current = e.touches[0].clientY; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches[0].clientY - startY.current > 70) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50" onClick={onClose} />

      <motion.div
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 36, stiffness: 360 }}
        className="relative bg-white rounded-tl-[12px] rounded-tr-[12px] shadow-2xl flex flex-col max-h-[92vh]"
      >
        {/* Handle — click or swipe down to close */}
        <div
          className="flex justify-center pt-3 pb-2 shrink-0 cursor-pointer touch-manipulation"
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-10 h-1 bg-slate-200 rounded-full" />
        </div>

        {/* Scrollable body — subtle-box for minimal scrollbar */}
        <div className="subtle-box flex-1 overscroll-contain">
          {/* Hero image */}
          <div className="w-full aspect-video bg-slate-100 overflow-hidden shrink-0">
            {item.image ? (
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Package size={40} className="text-slate-300" />
              </div>
            )}
          </div>

          <div className="px-4 pt-4 pb-2 space-y-4">
            {/* Name + badges + price */}
            <div>
              {item.badges.length > 0 && (
                <div className="flex gap-1 flex-wrap mb-2">
                  {item.badges.map(b => <BadgeChip key={b} badge={b} />)}
                </div>
              )}
              <p className="font-semibold text-slate-800 text-base leading-snug">{item.name}</p>
              <p className="font-bold text-base mt-1" style={{ color: PRIMARY }}>{item.price.toLocaleString()}원</p>
              {item.description && (
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{item.description}</p>
              )}
            </div>

            {/* Option Groups */}
            {item.optionGroups?.map(group => (
              <div key={group.id}>
                <div className="h-px bg-slate-100 mb-3" />
                {/* Group header */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-slate-700 text-sm font-medium">{group.label}</span>
                  <div className="flex items-center gap-1.5">
                    {group.multiple && (
                      <span className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-[3px]">복수선택</span>
                    )}
                    {/* 필수/선택 — always static, no completion state */}
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-[3px] ${
                      group.required ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {group.required ? '필수' : '선택'}
                    </span>
                  </div>
                </div>

                {/* Choices */}
                <div className="space-y-2">
                  {group.choices.map(choice => {
                    const isSelected = (selectedOpts[group.id] ?? []).includes(choice.id);
                    const choiceQty = multiQty[`${group.id}__${choice.id}`] ?? 1;
                    return (
                      <div key={choice.id}
                        className={`flex items-center h-11 px-3 gap-2 rounded-[6px] border transition-colors ${
                          isSelected ? 'border-orange-300 bg-orange-50/40' : 'border-slate-200 bg-white'
                        }`}
                      >
                        {/* Indicator + label — fills space */}
                        <button
                          onClick={() => toggleOption(group.id, choice.id, group.multiple)}
                          className="flex items-center gap-2.5 flex-1 min-w-0 h-full touch-manipulation"
                        >
                          {group.multiple ? (
                            <div className={`shrink-0 w-4 h-4 rounded-[3px] border-2 flex items-center justify-center transition-colors ${
                              isSelected ? 'border-orange-500 bg-[#FF6B2B]' : 'border-slate-300'
                            }`}>
                              {isSelected && <Check size={10} className="text-white" strokeWidth={3} />}
                            </div>
                          ) : (
                            <div className={`shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                              isSelected ? 'border-orange-500' : 'border-slate-300'
                            }`}>
                              {isSelected && <div className="w-2 h-2 rounded-full" style={{ background: PRIMARY }} />}
                            </div>
                          )}
                          <span className={`text-sm truncate ${isSelected ? 'text-slate-800 font-medium' : 'text-slate-700'}`}>
                            {choice.label}
                          </span>
                        </button>

                        {/* Right side: qty (if multi + selected) then price */}
                        <div className="flex items-center gap-2 shrink-0">
                          {group.multiple && isSelected && (
                            <div className="flex items-center gap-[2px] rounded-[4px] px-1" style={{ background: 'rgba(255,107,43,0.09)' }}>
                              <button onClick={() => setChoiceQty(group.id, choice.id, -1)}
                                className="w-6 h-8 flex items-center justify-center active:opacity-60 touch-manipulation"
                                style={{ color: PRIMARY }}>
                                <Minus size={10} strokeWidth={2.5} />
                              </button>
                              <span className="font-medium text-xs w-5 text-center tabular-nums" style={{ color: '#314158' }}>{choiceQty}</span>
                              <button onClick={() => setChoiceQty(group.id, choice.id, 1)}
                                className="w-6 h-8 flex items-center justify-center active:opacity-60 touch-manipulation"
                                style={{ color: PRIMARY }}>
                                <Plus size={10} strokeWidth={2.5} />
                              </button>
                            </div>
                          )}
                          <span className="text-xs text-slate-400 whitespace-nowrap w-12 text-right">
                            {choice.priceAdd > 0 ? `+${choice.priceAdd.toLocaleString()}원` : '기본'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Qty */}
            <div>
              <div className="h-px bg-slate-100 mb-3" />
              <div className="flex items-center justify-between">
                <span className="text-slate-700 text-sm font-medium">수량</span>
                <div className="flex items-center gap-1 bg-slate-100 rounded-[6px] p-1">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} disabled={qty <= 1}
                    className="w-8 h-8 flex items-center justify-center rounded-[4px] text-slate-600 bg-white shadow-sm disabled:opacity-30 touch-manipulation">
                    <Minus size={13} strokeWidth={2.5} />
                  </button>
                  <span className="text-slate-800 font-semibold text-sm w-8 text-center tabular-nums">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-[4px] text-slate-600 bg-white shadow-sm touch-manipulation">
                    <Plus size={13} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>

            <div className="h-1" />
          </div>
        </div>

        {/* Fixed footer */}
        <div className="px-4 pb-8 pt-3 border-t border-slate-100 bg-white shrink-0">
          {!isRequiredSatisfied && (
            <p className="text-xs text-red-500 flex items-center gap-1 mb-2">
              <AlertTriangle size={11} />필수 옵션을 선택해 주세요
            </p>
          )}
          <button
            onClick={() => { if (!isRequiredSatisfied) return; onAddToCart(selectedOpts, multiQty, qty); onClose(); }}
            disabled={!isRequiredSatisfied}
            className="w-full h-12 text-white rounded-[6px] font-semibold text-base flex items-center justify-between px-4 disabled:opacity-40 active:brightness-90 transition-all touch-manipulation"
            style={{ background: isRequiredSatisfied ? PRIMARY : '#94a3b8' }}
          >
            <span>장바구니에 담기</span>
            <span className="font-bold tabular-nums">{totalPrice.toLocaleString()}원</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Order Confirm Modal ──────────────────────────────────────────
function OrderConfirmModal({ totalPrice, onConfirm, onCancel }: {
  totalPrice: number; onConfirm: () => void; onCancel: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center px-6"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onCancel}
    >
      <motion.div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="order-confirm-title"
        className="bg-white rounded-[12px] w-full max-w-[280px] flex flex-col p-[24px] drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)]"
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Title */}
        <p
          id="order-confirm-title"
          className="font-semibold text-[15px] text-[#222] text-center w-full"
        >
          주문하시겠습니까?
        </p>

        {/* Total row */}
        <div className="py-[16px] w-full">
          <div className="bg-[#f8fafc] flex items-center gap-[6px] px-[12px] py-[10px] rounded-[8px] w-full">
            <p className="text-[12px] text-[#45556c] leading-[18px] shrink-0">총 결제 금액</p>
            <div className="flex flex-1 items-start justify-end min-w-0">
              <p className="font-bold text-[11px] text-[#ff6467] leading-[16.5px] whitespace-nowrap">
                {totalPrice.toLocaleString()}원
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-[4px] w-full">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 h-[40px] bg-[#f1f5f9] rounded-[6px] font-semibold text-[15px] text-[#475569] hover:bg-[#e2e8f0] transition-colors"
          >
            취소
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 h-[40px] bg-[#ff6b2b] rounded-[6px] font-semibold text-[15px] text-white transition-colors"
            onMouseEnter={e => { e.currentTarget.style.background = PRIMARY_HOVER; }}
            onMouseLeave={e => { e.currentTarget.style.background = PRIMARY; }}
          >
            주문하기
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Cart Sheet ───────────────────────────────────────────────────
function CartSheet({
  cart, onAdd, onRemove, onDelete, onClose, onOrder, soldoutMenuIds, soldoutActive,
}: {
  cart: CartItem[]; onAdd: (k: string) => void;
  onRemove: (k: string) => void; onDelete: (k: string) => void;
  onClose: () => void; onOrder: () => void;
  soldoutMenuIds: Set<string>; soldoutActive: boolean;
}) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const hasSoldout = soldoutActive && cart.some(ci => soldoutMenuIds.has(ci.menuId));
  const totalPrice = cart.reduce((s, i) => s + (i.price + i.optionPrice) * i.qty, 0);

  const startY = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { startY.current = e.touches[0].clientY; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches[0].clientY - startY.current > 70) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 36, stiffness: 360 }}
        className="relative bg-white rounded-tl-[12px] rounded-tr-[12px] shadow-2xl flex flex-col max-h-[82vh]"
      >
        {/* Handle — tap or swipe to close */}
        <div
          className="flex justify-center pt-3 pb-2 shrink-0 cursor-pointer touch-manipulation"
          onClick={onClose} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
        >
          <div className="w-10 h-1 bg-slate-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center px-4 py-2.5 border-b border-slate-100 shrink-0">
          <ShoppingCart size={16} className="text-slate-600 shrink-0" />
          <span className="font-semibold text-slate-800 text-sm ml-2">장바구니</span>
          <span
            className="text-white text-xs font-semibold px-1.5 py-0.5 rounded-[3px] min-w-[20px] text-center tabular-nums ml-2"
            style={{ background: PRIMARY }}
          >
            {totalQty}
          </span>
        </div>

        {/* Content */}
        <div className="subtle-box flex-1 px-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <ShoppingCart size={36} className="text-slate-200" />
              <p className="text-slate-400 text-sm">장바구니에 담긴 메뉴가 없습니다.</p>
            </div>
          ) : (
            <div>
              {cart.map(item => {
                const isSoldout = soldoutActive && soldoutMenuIds.has(item.menuId);
                const unitPrice = item.price + item.optionPrice;
                const rowTotal = unitPrice * item.qty;
                return (
                  <div key={item.cartKey} className="py-3 border-b border-slate-100 last:border-0">
                    {/* Name + row total / delete button */}
                    <div className="flex items-start justify-between gap-2">
                      <p className={`font-semibold text-sm leading-snug flex-1 min-w-0 ${isSoldout ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                        {item.name}
                      </p>
                      {isSoldout ? (
                        /* Soldout: only X delete button */
                        <button
                          onClick={() => onDelete(item.cartKey)}
                          className="w-[21px] h-[21px] rounded-[2px] flex items-center justify-center text-white shrink-0 touch-manipulation"
                          style={{ background: '#d72b2b' }}
                          aria-label="삭제"
                        >
                          <X size={11} strokeWidth={2.5} />
                        </button>
                      ) : (
                        <p className="font-bold text-sm tabular-nums shrink-0" style={{ color: PRIMARY }}>
                          {rowTotal.toLocaleString()}원
                        </p>
                      )}
                    </div>
                    {/* Option lines */}
                    {item.optionLines && item.optionLines.length > 0 && (
                      <div className="mt-0.5 flex flex-col gap-[1px]">
                        {item.optionLines.map((line, i) => (
                          <p key={i} className={`text-xs leading-snug ${isSoldout ? 'line-through text-slate-300' : 'text-slate-400'}`}>
                            {line.label}
                            {line.priceAdd > 0 && (
                              <span className="tabular-nums"> (+{line.priceAdd.toLocaleString()}원)</span>
                            )}
                            {line.qty > 1 && (
                              <span className="tabular-nums"> ×{line.qty}</span>
                            )}
                          </p>
                        ))}
                      </div>
                    )}
                    {isSoldout ? (
                      /* Soldout row: red notice + price (no qty controls) */
                      <div className="flex items-center justify-between mt-1.5">
                        <p className="text-[10px] font-medium" style={{ color: '#d72b2b' }}>현재 품절된 메뉴입니다</p>
                        <p className="text-xs text-slate-400 tabular-nums line-through">{item.price.toLocaleString()}원</p>
                      </div>
                    ) : (
                      /* Normal row: unit price + qty controls */
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-slate-400 text-xs tabular-nums">{item.price.toLocaleString()}원</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => onRemove(item.cartKey)}
                            className={`w-7 h-7 rounded-[4px] flex items-center justify-center transition-colors touch-manipulation ${
                              item.qty === 1 ? 'text-white' : 'bg-slate-100 text-slate-500'
                            }`}
                            style={item.qty === 1 ? { background: '#d72b2b' } : {}}
                            aria-label={item.qty === 1 ? '삭제' : '수량 감소'}
                          >
                            {item.qty === 1 ? <X size={11} strokeWidth={2.5} /> : <Minus size={11} strokeWidth={2.5} />}
                          </button>
                          <span className="text-slate-800 font-semibold text-sm w-6 text-center tabular-nums">{item.qty}</span>
                          <button
                            onClick={() => onAdd(item.cartKey)}
                            className="w-7 h-7 bg-slate-100 rounded-[4px] flex items-center justify-center text-slate-600 touch-manipulation"
                            aria-label="수량 증가"
                          >
                            <Plus size={11} strokeWidth={2.5} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 pb-8 pt-3 border-t border-slate-100 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 text-sm font-medium">총 결제 금액</span>
            <span className="font-bold text-lg tabular-nums" style={{ color: PRIMARY }}>{totalPrice.toLocaleString()}원</span>
          </div>
          {cart.length === 0 ? (
            <button
              onClick={onClose}
              className="w-full h-12 text-white rounded-[6px] font-semibold text-base flex items-center justify-center active:brightness-90 transition-all touch-manipulation"
              style={{ background: PRIMARY }}
            >
              메뉴 보러가기
            </button>
          ) : (
            <button
              onClick={() => setConfirmOpen(true)}
              disabled={hasSoldout}
              className="w-full h-12 text-white rounded-[6px] font-semibold text-base flex items-center justify-center transition-all touch-manipulation"
              style={{ background: hasSoldout ? '#c1c7cd' : PRIMARY }}
              onMouseEnter={e => { if (!hasSoldout) e.currentTarget.style.background = PRIMARY_HOVER; }}
              onMouseLeave={e => { if (!hasSoldout) e.currentTarget.style.background = PRIMARY; }}
            >
              주문하기
            </button>
          )}
          <AnimatePresence>
            {confirmOpen && (
              <OrderConfirmModal
                totalPrice={totalPrice}
                onConfirm={() => { setConfirmOpen(false); onOrder(); }}
                onCancel={() => setConfirmOpen(false)}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Order History Sheet ──────────────────────────────────────────
function OrderHistorySheet({
  orders, cart, onClose,
}: {
  orders: OrderRecord[]; cart: CartItem[]; onClose: () => void;
}) {
  const allItems = [...orders.flatMap(o => o.items), ...cart];
  const totalQty = allItems.reduce((s, i) => s + i.qty, 0);
  const total = allItems.reduce((s, i) => s + (i.price + i.optionPrice) * i.qty, 0);

  const startY = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { startY.current = e.touches[0].clientY; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches[0].clientY - startY.current > 70) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 36, stiffness: 360 }}
        className="relative bg-white rounded-tl-[12px] rounded-tr-[12px] shadow-2xl flex flex-col max-h-[85vh]"
      >
        {/* Handle — tap or swipe to close */}
        <div
          className="flex justify-center pt-3 pb-2 shrink-0 cursor-pointer touch-manipulation"
          onClick={onClose} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
        >
          <div className="w-10 h-1 bg-slate-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center px-4 py-2.5 border-b border-slate-100 shrink-0">
          <Receipt size={16} className="text-slate-600 shrink-0" />
          <span className="font-semibold text-slate-800 text-sm ml-2">주문내역</span>
          {totalQty > 0 && (
            <span className="text-white text-xs font-semibold px-1.5 py-0.5 rounded-[3px] min-w-[20px] text-center tabular-nums ml-2"
              style={{ background: PRIMARY }}>
              {totalQty}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="subtle-box flex-1 px-4">
          {allItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <Receipt size={36} className="text-slate-200" />
              <p className="text-slate-400 text-sm">주문내역이 없습니다</p>
            </div>
          ) : (
            <div>
              {allItems.map((item, idx) => {
                const unitPrice = item.price + item.optionPrice;
                const rowTotal = unitPrice * item.qty;
                return (
                  <div key={`${item.cartKey}-${idx}`}
                    className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
                    {/* Name + option */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-800 text-xs leading-snug">{item.name}</p>
                      {item.optionLines && item.optionLines.length > 0 && (
                        <div className="mt-0.5 flex flex-col gap-[1px]">
                          {item.optionLines.map((line, i) => (
                            <p key={i} className="text-slate-400 text-[10px] leading-snug">
                              {line.label}
                              {line.priceAdd > 0 && (
                                <span className="tabular-nums"> (+{line.priceAdd.toLocaleString()}원)</span>
                              )}
                              {line.qty > 1 && (
                                <span className="tabular-nums"> ×{line.qty}</span>
                              )}
                            </p>
                          ))}
                        </div>
                      )}
                      <p className="text-slate-400 text-[10px] mt-0.5 tabular-nums">
                        {item.price.toLocaleString()}원
                      </p>
                    </div>
                    {/* Qty */}
                    <span className="text-slate-600 text-xs font-medium tabular-nums shrink-0 pt-0.5">
                      {item.qty}
                    </span>
                    {/* Row total */}
                    <span className="font-bold text-xs tabular-nums shrink-0 pt-0.5 w-16 text-right" style={{ color: PRIMARY }}>
                      {rowTotal.toLocaleString()}원
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 pb-8 pt-3 border-t border-slate-100 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 text-sm font-medium">총 결제 금액</span>
            <div className="flex items-center gap-3">
              {totalQty > 0 && (
                <span className="text-slate-500 text-sm tabular-nums">{totalQty}개</span>
              )}
              <span className="font-bold text-lg tabular-nums" style={{ color: PRIMARY }}>
                {total.toLocaleString()}원
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full h-12 text-white rounded-[6px] font-semibold text-base flex items-center justify-center active:brightness-90 transition-all touch-manipulation"
            style={{ background: PRIMARY }}
          >
            확인
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Order Processing Overlay ────────────────────────────────────
function OrderProcessingOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[70] bg-white flex flex-col items-center justify-center px-8 text-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.05]"
          style={{ background: PRIMARY, transform: 'translate(35%,-35%)' }} />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.04]"
          style={{ background: PRIMARY, transform: 'translate(-35%,35%)' }} />
      </div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="flex flex-col items-center gap-4 z-10"
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: `${PRIMARY}12` }}>
          <Loader2 size={28} className="animate-spin" style={{ color: PRIMARY }} />
        </div>
        <div>
          <p className="font-semibold text-[18px] text-[#222]">주문 처리중</p>
          <p className="text-[14px] text-[#999] mt-1.5">잠시만 기다려주세요, 주문 접수가 진행 중입니다.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Order Error Screen ───────────────────────────────────────────
function OrderErrorScreen({
  type, duplicateTime, onGoMain, onRetry, onHistory,
}: {
  type: 'network' | 'duplicate';
  duplicateTime?: string;
  onGoMain: () => void;
  onRetry?: () => void;
  onHistory?: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] bg-white flex flex-col items-center justify-center px-8 text-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.05]"
          style={{ background: PRIMARY, transform: 'translate(35%,-35%)' }} />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.04]"
          style={{ background: PRIMARY, transform: 'translate(-35%,35%)' }} />
      </div>

      <motion.div
        initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.35 }}
        className="flex flex-col items-center gap-5 w-full max-w-xs z-10"
      >
        {/* Icon */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: `${PRIMARY}12` }}>
          <AlertTriangle size={28} style={{ color: PRIMARY }} />
        </div>

        {/* Text */}
        <div>
          {type === 'network' ? (
            <>
              <p className="font-semibold text-[18px] text-[#222] leading-snug">주문 연결이 원활하지 않습니다.</p>
              <p className="text-[14px] text-[#999] mt-2 leading-relaxed">
                아래 버튼을 눌러 다시 시도하거나,<br />메인으로 이동해 다시 주문해 주세요.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-[18px] text-[#222] leading-snug whitespace-pre-line">
                {'이미 같은 테이블에서\n주문이 접수되었습니다'}
              </p>
              <p className="text-[14px] text-[#999] mt-2 leading-relaxed">
                동일한 테이블에서 선주문이 완료되어 취소되었습니다.<br />주문 내역을 확인해 주세요.
              </p>
              {duplicateTime && (
                <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: `${PRIMARY}12`, color: PRIMARY }}>
                  <Clock size={11} />
                  {duplicateTime} 접수 완료
                </div>
              )}
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2.5 w-full mt-1">
          {/* primary-outline: border 1px + orange text, transparent bg */}
          <button
            onClick={onGoMain}
            className="w-full h-12 rounded-[6px] font-semibold text-sm border touch-manipulation transition-colors"
            style={{ borderColor: PRIMARY, color: PRIMARY }}
            onMouseEnter={e => (e.currentTarget.style.background = `${PRIMARY}0d`)}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            메인화면으로 이동
          </button>
          {/* primary: filled orange */}
          {type === 'network' ? (
            <button
              onClick={onRetry}
              className="w-full h-12 text-white rounded-[6px] font-semibold text-sm touch-manipulation transition-colors"
              style={{ background: PRIMARY }}
              onMouseEnter={e => (e.currentTarget.style.background = PRIMARY_HOVER)}
              onMouseLeave={e => (e.currentTarget.style.background = PRIMARY)}
            >
              다시 시도하기
            </button>
          ) : (
            <button
              onClick={onHistory}
              className="w-full h-12 text-white rounded-[6px] font-semibold text-sm touch-manipulation transition-colors"
              style={{ background: PRIMARY }}
              onMouseEnter={e => (e.currentTarget.style.background = PRIMARY_HOVER)}
              onMouseLeave={e => (e.currentTarget.style.background = PRIMARY)}
            >
              주문내역 확인하기
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Soldout Alert Modal ──────────────────────────────────────────
function SoldoutModal({ items, onClose }: { items: CartItem[]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[75] flex items-center justify-center px-8"
      style={{ background: 'rgba(0,0,0,0.45)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-[12px] w-full max-w-[280px] px-6 py-6 shadow-2xl"
        initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
      >
        <p className="font-semibold text-[15px] text-[#222] leading-snug text-center mb-1">
          주문할 수 없는 메뉴가 있습니다
        </p>
        <p className="text-[13px] text-[#999] text-center mb-4">
          품절된 메뉴를 확인해 주세요.
        </p>

        {items.length > 0 && (
          <div className="mb-4 bg-slate-50 rounded-[8px] px-3 py-2.5 space-y-1.5">
            {items.map(item => (
              <div key={item.cartKey} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <p className="text-[12px] text-slate-600 truncate flex-1">{item.name}</p>
                <span className="text-[11px] text-red-400 font-medium shrink-0">품절</span>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full h-10 text-white rounded-[6px] font-semibold text-sm touch-manipulation transition-colors"
          style={{ background: PRIMARY }}
          onMouseEnter={e => (e.currentTarget.style.background = PRIMARY_HOVER)}
          onMouseLeave={e => (e.currentTarget.style.background = PRIMARY)}
        >
          확인
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Session Expired Screens ──────────────────────────────────────
function SessionExpiredScreen({ variant }: { variant: 'timeout' | 'closed' }) {
  const isTimeout = variant === 'timeout';
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center px-10 text-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.05]"
          style={{ background: PRIMARY, transform: 'translate(35%,-35%)' }} />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.04]"
          style={{ background: PRIMARY, transform: 'translate(-35%,35%)' }} />
      </div>

      {/* Icon */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{ background: `${PRIMARY}12` }}
      >
        {isTimeout
          ? <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          : <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        }
      </div>

      {/* Title */}
      <p className="font-semibold text-[18px] leading-snug text-[#222] mb-3 whitespace-pre-line">
        {isTimeout ? '주문 시간이 초과되었습니다' : '결제가 완료되어\n주문이 마감되었습니다'}
      </p>

      {/* Body */}
      <p className="text-[14px] leading-relaxed text-[#999] max-w-[280px]">
        {isTimeout
          ? '장시간 활동이 없어 안전하게 연결을 종료했습니다.\nQR코드를 다시 찍어 주문을 진행해 주세요.'
          : '이전 주문 및 결제가 정상적으로 처리되었습니다.\n추가 주문을 원하시면 QR코드를 다시 찍어주세요.'
        }
      </p>
    </motion.div>
  );
}

// ─── Network Error Screen ─────────────────────────────────────────
function NetworkErrorScreen({ onRetry }: { onRetry: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center px-8"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none opacity-[0.05] bg-red-500" style={{ transform: 'translate(35%,-35%)' }} />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none opacity-[0.04] bg-red-500" style={{ transform: 'translate(-35%,35%)' }} />

      <motion.div
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex flex-col items-center gap-5 w-full max-w-xs"
      >
        {/* Icon */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-red-50">
          <AlertTriangle size={34} className="text-red-500" />
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="font-bold text-[#1d293d] text-[20px] leading-[28px] mb-2">연결이 원활하지 않습니다</p>
          <p className="text-[#62748e] text-[14px] leading-[22.75px]">
            통신 상태가 불안정하여 연결이 원활하지 않습니다.<br />
            주변 환경이나 통신 상태를 확인하신 후<br />
            다시 시도해 주세요.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onRetry}
          className="w-full h-12 text-white rounded-[6px] font-semibold text-sm flex items-center justify-center transition-colors touch-manipulation mt-2"
          style={{ background: PRIMARY }}
          onMouseEnter={e => (e.currentTarget.style.background = PRIMARY_HOVER)}
          onMouseLeave={e => (e.currentTarget.style.background = PRIMARY)}
        >
          다시 시도하기
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Order Complete Screen ────────────────────────────────────────
function OrderCompleteScreen({ onConfirm }: { onConfirm: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white flex flex-col"
    >

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.05]" style={{ background: PRIMARY, transform: 'translate(35%,-35%)' }} />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.04]" style={{ background: PRIMARY, transform: 'translate(-35%,35%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full opacity-[0.03]" style={{ background: PRIMARY }} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative">

        {/* Animated check ring */}
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring', damping: 18, stiffness: 280 }}
          className="relative mb-8"
        >
          {/* Ring */}
          <div
            className="relative w-28 h-28 rounded-full flex items-center justify-center"
            style={{ background: `${PRIMARY}14`, border: `2.5px solid ${PRIMARY}30` }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: PRIMARY }}
            >
              <Check size={36} className="text-white" strokeWidth={3} />
            </div>
          </div>
        </motion.div>

        {/* Text block */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-10"
        >
          <p className="font-black text-slate-800 text-2xl tracking-tight mb-2">주문 완료</p>
          <p className="text-slate-500 text-sm leading-relaxed">
            주문이 성공적으로 접수되었습니다.<br />잠시 후 음식이 나올 예정입니다.
          </p>
        </motion.div>

        {/* Confirm button */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.42 }}
          className="w-full max-w-xs"
        >
          <button
            onClick={onConfirm}
            className="w-full h-12 text-white rounded-[8px] font-semibold text-base flex items-center justify-center gap-2 active:brightness-90 transition-all touch-manipulation shadow-sm"
            style={{ background: PRIMARY }}
          >
            메뉴로 돌아가기
          </button>
        </motion.div>
      </div>

      {/* Bottom safe area */}
      <div className="pb-8" />
    </motion.div>
  );
}

// ─── Staff Call Items ─────────────────────────────────────────────
const STAFF_CALL_ITEMS = [
  { id: 'water',    label: '물',      showQty: true  },
  { id: 'plate',    label: '앞접시',  showQty: true  },
  { id: 'cup',      label: '컵',      showQty: true  },
  { id: 'napkin',   label: '냅킨',    showQty: true  },
  { id: 'wetTowel', label: '물티슈',  showQty: true  },
  { id: 'spoon',    label: '수저',    showQty: true  },
  { id: 'fork',     label: '젓가락',  showQty: true  },
  { id: 'banchan',  label: '반찬추가', showQty: false },
  { id: 'sauce',    label: '소스추가', showQty: false },
];

// ─── Staff Call Sheet ─────────────────────────────────────────────
function StaffCallSheet({
  onClose, onConfirm,
}: {
  onClose: () => void;
  onConfirm: (summary: string) => void;
}) {
  // 공통 on/off 상태
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set());
  // 수량 (showQty:true 아이템, on 상태일 때만 유효)
  const [itemQty, setItemQty] = useState<Record<string, number>>({});
  const [staffToggle, setStaffToggle] = useState(false);

  // 칩 토글 — 모든 아이템 공통 on/off
  const toggleItem = (id: string, showQty: boolean) => {
    setActiveIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        if (showQty) setItemQty(p => { const { [id]: _, ...r } = p; return r; });
      } else {
        next.add(id);
        if (showQty) setItemQty(p => ({ ...p, [id]: 1 }));
      }
      return next;
    });
  };

  // 수량 조절 (리스트 내부, showQty:true 전용)
  const changeQty = (id: string, delta: number) => {
    setItemQty(prev => {
      const next = (prev[id] ?? 1) + delta;
      if (next <= 0) {
        setActiveIds(p => { const s = new Set(p); s.delete(id); return s; });
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  };

  // 활성화된 아이템 (원래 순서 유지)
  const activeItems = STAFF_CALL_ITEMS.filter(i => activeIds.has(i.id));
  const hasAny = activeItems.length > 0 || staffToggle;

  const handleConfirm = () => {
    const parts: string[] = [];
    if (staffToggle) parts.push('직원호출');
    activeItems.forEach(i => {
      if (i.showQty) {
        const q = itemQty[i.id] ?? 1;
        parts.push(q > 1 ? `${i.label} ${q}개` : i.label);
      } else {
        parts.push(i.label);
      }
    });
    onConfirm(parts.join(', '));
    onClose();
  };

  const startY = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { startY.current = e.touches[0].clientY; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches[0].clientY - startY.current > 70) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 36, stiffness: 360 }}
        className="relative bg-white rounded-tl-[12px] rounded-tr-[12px] shadow-2xl flex flex-col max-h-[80vh]"
      >
        {/* Handle */}
        <div
          className="flex justify-center pt-3 pb-2 shrink-0 cursor-pointer touch-manipulation"
          onClick={onClose} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
        >
          <div className="w-10 h-1 bg-slate-200 rounded-full" />
        </div>

        {/* Header — 직원호출 토글을 헤더 우측 고정 */}
        <div className="flex items-center px-4 py-2.5 border-b border-slate-100 shrink-0">
          <Bell size={16} className="text-slate-600 shrink-0" />
          <span className="font-semibold text-slate-800 text-sm ml-2 flex-1">직원호출</span>
          <button
            onClick={() => setStaffToggle(t => !t)}
            className="h-8 px-3 flex items-center gap-1.5 rounded-full border text-xs font-semibold transition-all touch-manipulation"
            style={staffToggle
              ? { background: PRIMARY, borderColor: PRIMARY, color: '#fff' }
              : { background: '#fff', borderColor: '#e2e8f0', color: '#64748b' }
            }
          >
            <Bell size={11} strokeWidth={2.5} />
            직원호출
            {/* on/off indicator dot */}
            <span
              className="w-1.5 h-1.5 rounded-full ml-0.5"
              style={{ background: staffToggle ? 'rgba(255,255,255,0.7)' : '#cbd5e1' }}
            />
          </button>
        </div>

        <div className="subtle-box flex-1 px-4 pb-2">
          {/* Chips — 공통 토글 */}
          <div className="flex flex-wrap gap-2 pt-3 mb-4">
            {STAFF_CALL_ITEMS.map(item => {
              const isOn = activeIds.has(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id, item.showQty)}
                  className="h-9 px-3.5 flex items-center gap-1.5 rounded-full border text-sm font-medium transition-all touch-manipulation"
                  style={isOn
                    ? { background: `${PRIMARY}12`, borderColor: `${PRIMARY}40`, color: PRIMARY }
                    : { background: '#fff', borderColor: '#e2e8f0', color: '#475569' }
                  }
                >
                  {item.showQty
                    ? <Plus size={12} strokeWidth={2.5} style={{ color: isOn ? PRIMARY : '#94a3b8' }} />
                    : <Check size={12} strokeWidth={2.5} style={{ color: isOn ? PRIMARY : '#94a3b8' }} />
                  }
                  {item.label}
                  {item.showQty && isOn && (
                    <span className="font-bold tabular-nums" style={{ color: PRIMARY }}>
                      {itemQty[item.id] ?? 1}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* 선택된 아이템 리스트 */}
          <AnimatePresence>
            {activeItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.18 }}
                className="overflow-hidden"
              >
                <div className="border-t border-slate-100 pt-3 space-y-1">
                  {activeItems.map(item => {
                    const qty = itemQty[item.id] ?? 1;
                    return (
                      <div key={item.id} className="flex items-center h-10 gap-2">
                        <span className="flex-1 text-slate-700 text-sm font-medium">{item.label}</span>
                        {item.showQty && (
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => changeQty(item.id, -1)}
                            className="w-7 h-7 rounded-[4px] flex items-center justify-center transition-colors touch-manipulation"
                            style={qty === 1 ? { background: '#d72b2b' } : { background: '#f1f5f9' }}
                          >
                            {qty === 1
                              ? <X size={11} className="text-white" strokeWidth={2.5} />
                              : <Minus size={11} className="text-slate-500" strokeWidth={2.5} />
                            }
                          </button>
                          <span className="text-slate-800 font-semibold text-sm w-5 text-center tabular-nums">{qty}</span>
                          <button
                            onClick={() => changeQty(item.id, 1)}
                            className="w-7 h-7 bg-slate-100 rounded-[4px] flex items-center justify-center text-slate-500 touch-manipulation"
                          >
                            <Plus size={11} strokeWidth={2.5} />
                          </button>
                        </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-4 py-5 border-t border-slate-100 shrink-0">
          <button
            onClick={handleConfirm}
            disabled={!hasAny}
            className="w-full h-12 text-white rounded-[6px] font-semibold text-base flex items-center justify-center active:brightness-90 transition-all disabled:opacity-35 touch-manipulation"
            style={{ background: hasAny ? PRIMARY : '#94a3b8' }}
          >
            호출하기
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────
export function CustomerMenuPage() {
  const { storeId = 'demo', tableId = '1' } = useParams<{ storeId: string; tableId: string }>();
  const store = STORES[storeId] ?? { name: '매장', notice: undefined };

  const [phase, setPhase] = useState<Phase>('loading');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderHistory, setOrderHistory] = useState<OrderRecord[]>([]);

  const [cartOpen, setCartOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [staffCallOpen, setStaffCallOpen] = useState(false);
  const [detailItem, setDetailItem] = useState<MenuItem | null>(null);

  const [staffCalled, setStaffCalled] = useState(false);
  const [staffCallMsg, setStaffCallMsg] = useState('');
  const [devNavOpen, setDevNavOpen] = useState(false);
  const staffTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [networkError, setNetworkError] = useState(!navigator.onLine);

  const [orderProcessing, setOrderProcessing] = useState(false);
  const [orderError, setOrderError] = useState<'network' | 'duplicate' | null>(null);
  const [duplicateTime, setDuplicateTime] = useState('');
  const [soldoutModal, setSoldoutModal] = useState(false);
  const [soldoutItems, setSoldoutItems] = useState<CartItem[]>([]);
  const [cartSoldoutActive, setCartSoldoutActive] = useState(false);
  const [runtimeSoldout, setRuntimeSoldout] = useState<Set<string>>(new Set());

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerH, setHeaderH] = useState(148);

  useEffect(() => {
    const t = setTimeout(() => setPhase('menu'), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleOffline = () => setNetworkError(true);
    const handleOnline  = () => setNetworkError(false);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online',  handleOnline);
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online',  handleOnline);
    };
  }, []);

  useEffect(() => {
    if (!headerRef.current || phase !== 'menu') return;
    const ro = new ResizeObserver(() => setHeaderH(headerRef.current?.offsetHeight ?? 148));
    ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, [phase]);

  useEffect(() => {
    if (!devNavOpen) return;
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest('[data-devnav]')) setDevNavOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [devNavOpen]);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalOrderedQty = orderHistory.reduce((s, o) => s + o.items.reduce((ss, i) => ss + i.qty, 0), 0);

  const addToCartWithOptions = useCallback((item: MenuItem, opts: SelectedOptions, mq: MultiQtyMap, qty: number) => {
    const basePrice = item.price;
    const optionPrice = calcOptionPrice(item, opts, mq);
    const optionLabel = buildOptionLabel(item, opts, mq);
    const optionLines = buildOptionLines(item, opts, mq);
    const cartKey = buildCartKey(item.id, opts, mq);
    setCart(prev => {
      const ex = prev.find(c => c.cartKey === cartKey);
      if (ex) return prev.map(c => c.cartKey === cartKey ? { ...c, qty: c.qty + qty } : c);
      return [...prev, { cartKey, menuId: item.id, name: item.name, optionLabel: optionLabel || undefined, optionLines: optionLines.length ? optionLines : undefined, price: basePrice, optionPrice, qty }];
    });
  }, []);

  const cartAddByKey = (key: string) => setCart(prev => prev.map(c => c.cartKey === key ? { ...c, qty: c.qty + 1 } : c));
  const cartRemoveByKey = (key: string) => setCart(prev => {
    const ex = prev.find(c => c.cartKey === key);
    if (!ex) return prev;
    if (ex.qty === 1) return prev.filter(c => c.cartKey !== key);
    return prev.map(c => c.cartKey === key ? { ...c, qty: c.qty - 1 } : c);
  });
  const cartDeleteByKey = (key: string) => setCart(prev => prev.filter(c => c.cartKey !== key));

  const commitOrder = (cartSnapshot: CartItem[]) => {
    const total = cartSnapshot.reduce((s, i) => s + (i.price + i.optionPrice) * i.qty, 0);
    setOrderHistory(prev => [...prev, {
      orderId: `ORD-${Date.now().toString().slice(-6)}`,
      time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      items: cartSnapshot, total,
    }]);
    setCart([]);
    setOrderProcessing(false);
    setPhase('complete');
  };

  const doOrder = useCallback((cartSnapshot: CartItem[]) => {
    setSoldoutModal(false);
    setCartSoldoutActive(false);
    setCartOpen(false);
    setOrderProcessing(true);
    setTimeout(() => commitOrder(cartSnapshot), 1800);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const soldoutMenuIds = useMemo(() => {
    const ids = new Set<string>(runtimeSoldout);
    MENU_ITEMS.filter(m => m.status === 'soldout').forEach(m => ids.add(m.id));
    return ids;
  }, [runtimeSoldout]);

  const initiateOrder = () => {
    if (cart.length === 0) return;

    // Limited-qty items become soldout at order time — simulate concurrent stock exhaustion
    const newlySoldout = cart
      .map(ci => MENU_ITEMS.find(m => m.id === ci.menuId))
      .filter((m): m is MenuItem => !!m && m.limitedQty != null && !soldoutMenuIds.has(m.id))
      .map(m => m.id);

    const effectiveSoldout = newlySoldout.length > 0
      ? new Set([...soldoutMenuIds, ...newlySoldout])
      : soldoutMenuIds;

    const hasSoldout = cart.some(ci => effectiveSoldout.has(ci.menuId));
    if (hasSoldout) {
      if (newlySoldout.length > 0) setRuntimeSoldout(prev => new Set([...prev, ...newlySoldout]));
      setSoldoutItems(cart.filter(ci => effectiveSoldout.has(ci.menuId)));
      setSoldoutModal(true);
      return;
    }
    doOrder(cart);
  };

  const callStaff = (summary: string) => {
    setStaffCallMsg(summary);
    setStaffCalled(true);
    if (staffTimerRef.current) clearTimeout(staffTimerRef.current);
    staffTimerRef.current = setTimeout(() => setStaffCalled(false), 4000);
  };

  // ── Filtered & grouped menu ──
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return MENU_ITEMS;
    return MENU_ITEMS.filter(i => i.name.toLowerCase().includes(q) || (i.description ?? '').toLowerCase().includes(q));
  }, [searchQuery]);

  const groupedMenu = useMemo(() => {
    const cats = selectedCategory === '전체' ? CATEGORIES.slice(1) : [selectedCategory];
    return cats.map(cat => ({ cat, items: filteredItems.filter(i => i.category === cat) })).filter(g => g.items.length);
  }, [filteredItems, selectedCategory]);

  const scrollToCategory = (cat: string) => {
    setSelectedCategory(cat);
    const ref = cat === '전체' ? sectionRefs.current[CATEGORIES[1]] : sectionRefs.current[cat];
    if (ref) window.scrollTo({ top: ref.getBoundingClientRect().top + window.scrollY - headerH - 4, behavior: 'smooth' });
  };

  if (phase === 'loading') return <LoadingScreen storeName={store.name} tableId={tableId} />;
  if (phase === 'complete') return (
    <AnimatePresence>
      <OrderCompleteScreen onConfirm={() => setPhase('menu')} />
    </AnimatePresence>
  );
  if (phase === 'session-timeout') return <AnimatePresence><SessionExpiredScreen variant="timeout" /></AnimatePresence>;
  if (phase === 'session-closed') return <AnimatePresence><SessionExpiredScreen variant="closed" /></AnimatePresence>;

  return (
    <div className="subtle-box bg-slate-50 h-screen overflow-y-auto" style={{ paddingTop: headerH }}>

      {/* ── Fixed Header ── */}
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200">

        {/* Row 1 (narrow: 로고+버튼 한 줄 / wide: 로고+매장정보+버튼 한 줄) */}
        <div className="flex flex-wrap items-center gap-x-2.5 px-3 sm:px-4 pt-2.5 pb-1 sm:py-2.5">
          {/* Logo — order-1 항상 맨 앞 */}
          <div
            className="order-1 w-10 h-10 rounded-[6px] shrink-0 flex items-center justify-center border"
            style={{ background: `${PRIMARY}12`, borderColor: `${PRIMARY}25` }}
          >
            <ShoppingCart size={18} style={{ color: PRIMARY }} />
          </div>

          {/* 매장명·테이블 — narrow: order-3 → 다음 줄 full-width / sm+: order-2 → 로고 옆 inline */}
          <div className="order-3 sm:order-2 w-full sm:w-auto sm:flex-1 min-w-0 pt-2 pb-2 sm:py-0">
            <p className="font-semibold text-slate-800 text-sm leading-tight truncate">{store.name}</p>
            <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
              <span
                className="text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px]"
                style={{ background: `${PRIMARY}12`, color: PRIMARY }}
              >
                {tableId}번 테이블
              </span>
              <Users size={11} className="text-slate-400" />
              <span className="text-slate-400 text-xs">2명 이용중</span>
            </div>
          </div>

          {/* 액션 버튼 — narrow: order-2 → 로고 바로 옆 (ml-auto으로 우측 정렬) / sm+: order-3 */}
          <div className="order-2 sm:order-3 ml-auto sm:ml-0 flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setStaffCallOpen(true)}
              className="h-8 px-3 rounded-[4px] text-xs font-medium transition-all flex items-center gap-1.5 touch-manipulation border"
              style={staffCalled
                ? { background: PRIMARY, borderColor: PRIMARY, color: '#fff' }
                : { background: `${PRIMARY}10`, borderColor: `${PRIMARY}25`, color: PRIMARY }
              }
            >
              <Bell size={12} className={staffCalled ? 'animate-bounce' : ''} />
              직원호출
            </button>
            <button
              onClick={() => setHistoryOpen(true)}
              className="h-8 px-3 rounded-[4px] text-xs font-medium relative flex items-center gap-1.5 touch-manipulation border transition-all"
              style={{ background: `${PRIMARY}10`, borderColor: `${PRIMARY}25`, color: PRIMARY }}
            >
              <Receipt size={12} />
              주문내역
              {totalOrderedQty > 0 && (
                <span className="absolute -top-1 -right-1 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center" style={{ background: PRIMARY }}>
                  {totalOrderedQty > 9 ? '9+' : totalOrderedQty}
                </span>
              )}
            </button>

            {/* Dev nav button */}
            <div className="relative" data-devnav>
              <button
                onClick={() => setDevNavOpen(v => !v)}
                className="h-8 w-8 rounded-[4px] flex items-center justify-center touch-manipulation border transition-all"
                style={{ background: devNavOpen ? '#f1f5f9' : 'transparent', borderColor: '#e2e8f0', color: '#64748b' }}
              >
                <Settings size={14} />
              </button>
              <AnimatePresence>
                {devNavOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-1.5 bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-slate-200 overflow-hidden z-50 min-w-[160px]"
                    initial={{ opacity: 0, scale: 0.94, y: -4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -4 }}
                    transition={{ duration: 0.13 }}
                  >
                    <div className="px-3 pt-2.5 pb-1.5">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">페이지 이동</p>
                    </div>
                    <a
                      href="/login"
                      className="flex items-center gap-2 px-3 py-2.5 text-[13px] text-slate-700 hover:bg-slate-50 transition-colors"
                      onClick={() => setDevNavOpen(false)}
                    >
                      <span className="w-5 h-5 rounded-[4px] bg-slate-100 flex items-center justify-center text-[10px]">🛡</span>
                      관리자 페이지
                    </a>
                    <a
                      href="/client/login"
                      className="flex items-center gap-2 px-3 py-2.5 text-[13px] text-slate-700 hover:bg-slate-50 transition-colors border-t border-slate-100"
                      onClick={() => setDevNavOpen(false)}
                    >
                      <span className="w-5 h-5 rounded-[4px] bg-slate-100 flex items-center justify-center text-[10px]">🏪</span>
                      클라이언트 페이지
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Row 2: Search */}
        <div className="px-3 sm:px-4 pb-2">
          <div
            className="flex items-center gap-2 bg-slate-100 rounded-[6px] px-3 h-9 border transition-colors focus-within:bg-white"
            style={{ borderColor: 'transparent' }}
            onFocus={e => (e.currentTarget.style.borderColor = `${PRIMARY}40`)}
            onBlur={e => (e.currentTarget.style.borderColor = 'transparent')}
          >
            <Search size={15} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="메뉴 검색"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="flex-1 text-slate-700 placeholder-slate-400 text-sm bg-transparent outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-600 touch-manipulation">
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Row 3: Category tabs */}
        {!searchQuery && (
          <div className="overflow-x-auto flex gap-1.5 px-3 sm:px-4 pb-2.5 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none] touch-pan-x">
            {[...CATEGORIES, TEST_CATEGORY].map(cat => {
              const isActive = selectedCategory === cat;
              const isTest = cat === TEST_CATEGORY;
              return (
                <button
                  key={cat}
                  onClick={() => isTest ? setSelectedCategory(TEST_CATEGORY) : scrollToCategory(cat)}
                  className={`h-7 px-3 sm:px-3.5 rounded-[4px] text-xs font-medium whitespace-nowrap shrink-0 transition-colors touch-manipulation ${
                    isActive
                      ? isTest ? 'text-white bg-violet-500' : 'text-white'
                      : isTest ? 'bg-violet-50 text-violet-600 border border-violet-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  style={isActive && !isTest ? { background: PRIMARY } : {}}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

      </div>

      {/* ── Test Panel ── */}
      {selectedCategory === TEST_CATEGORY && (
        <div className="pb-24 px-4 pt-4">
          <div className="mb-4">
            <p className="text-xs font-semibold text-violet-500 uppercase tracking-wider mb-0.5">개발 전용</p>
            <p className="text-slate-400 text-xs">버튼을 눌러 각 상태 화면을 미리 확인하세요</p>
          </div>

          {[
            {
              section: '페이지 상태',
              items: [
                { label: '로딩 화면', desc: 'QRorder 로딩 스크린', action: () => setPhase('loading') },
                { label: '주문 완료', desc: '주문 성공 완료 화면', action: () => setPhase('complete') },
                { label: '주문 처리중', desc: '처리 딜레이 로딩 오버레이', action: () => { setOrderProcessing(true); setTimeout(() => setOrderProcessing(false), 3000); } },
                { label: '주문 실패 (네트워크)', desc: '연결 실패 — 다시 시도 가능', action: () => setOrderError('network') },
                { label: '주문 실패 (중복)', desc: '동일 테이블 선주문 충돌', action: () => { setDuplicateTime('10:52'); setOrderError('duplicate'); } },
                { label: '품절 확인 모달', desc: '장바구니 내 품절 메뉴 안내', action: () => setSoldoutModal(true) },
                { label: '네트워크 오류', desc: '연결 끊김 오버레이', action: () => setNetworkError(true) },
                { label: '주문 시간 초과', desc: '세션 만료 — 장시간 비활동', action: () => setPhase('session-timeout') },
                { label: '주문 마감', desc: '세션 만료 — 결제 완료', action: () => setPhase('session-closed') },
                { label: '한정수량 품절 처리', desc: '비빔밥·제육볶음 품절 시뮬레이션', action: () => setRuntimeSoldout(new Set(['4', '5'])) },
                { label: '품절 초기화', desc: '한정수량 품절 상태 리셋', action: () => setRuntimeSoldout(new Set()) },
              ],
            },
            {
              section: '바텀 시트',
              items: [
                { label: '장바구니', desc: `현재 ${cart.length}개 아이템`, action: () => setCartOpen(true) },
                { label: '주문내역', desc: `${orderHistory.length}개 주문 기록`, action: () => setHistoryOpen(true) },
                { label: '직원호출', desc: '요청 선택 시트', action: () => setStaffCallOpen(true) },
              ],
            },
            {
              section: '메뉴 상세',
              items: MENU_ITEMS.slice(0, 4).map(item => ({
                label: item.name,
                desc: `${item.price.toLocaleString()}원 · ${item.optionGroups?.length ? `옵션 ${item.optionGroups.length}그룹` : '옵션 없음'}`,
                action: () => setDetailItem(item),
              })),
            },
          ].map(({ section, items }) => (
            <div key={section} className="mb-5">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{section}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {items.map(({ label, desc, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-[8px] border border-slate-200 hover:border-violet-300 hover:bg-violet-50/50 transition-colors text-left touch-manipulation group"
                  >
                    <div className="w-2 h-2 rounded-full shrink-0 bg-violet-300 group-hover:bg-violet-500 transition-colors" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-700 group-hover:text-violet-700">{label}</p>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Menu Content ── */}
      {selectedCategory !== TEST_CATEGORY && <div className="pb-24">
        {groupedMenu.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Package size={40} className="text-slate-200 mb-3" />
            <p className="text-slate-400 text-sm">
              {searchQuery ? `"${searchQuery}"에 대한 메뉴가 없습니다` : '메뉴가 없습니다'}
            </p>
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="mt-3 text-sm underline touch-manipulation" style={{ color: PRIMARY }}>
                검색 초기화
              </button>
            )}
          </div>
        ) : (
          groupedMenu.map(({ cat, items }) => (
            <div key={cat} ref={el => { sectionRefs.current[cat] = el; }}>
              {/* Category header */}
              <div className="px-4 py-2 bg-slate-50 border-y border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-slate-700 text-xs tracking-wide">{cat}</p>
                </div>
                <span className="text-slate-400 text-xs tabular-nums">{items.length}개</span>
              </div>

              {/* Menu items — 1 col on mobile, 2 col on sm+ */}
              <div className="bg-white grid grid-cols-1 sm:grid-cols-2 divide-x-0 sm:divide-x divide-slate-100">
                {items.map(item => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    runtimeSoldout={runtimeSoldout}
                    onAdd={() => setDetailItem(item)}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>}

      {/* ── Cart Bar (sticky bottom) ── */}
      <AnimatePresence>
        {totalItems > 0 && !cartOpen && (
          <motion.div
            initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed bottom-0 left-0 right-0 z-30"
          >
            <button
              onClick={() => setCartOpen(true)}
              className="w-full h-14 text-white flex items-center justify-between px-4 sm:px-6 active:brightness-90 transition-all touch-manipulation"
              style={{ background: PRIMARY }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 bg-white/20 rounded-[4px] flex items-center justify-center">
                  <ShoppingCart size={14} className="text-white" />
                </div>
                <span className="font-semibold text-sm text-white/90">{totalItems}개 담음</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold tabular-nums">
                  {cart.reduce((s, i) => s + (i.price + i.optionPrice) * i.qty, 0).toLocaleString()}원
                </span>
                <ChevronRight size={16} className="text-white/70" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Staff call toast ── */}
      <AnimatePresence>
        {staffCalled && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10 }}
            className="fixed top-4 left-4 right-4 z-50"
          >
            <div className="bg-slate-800 text-white px-4 py-3 rounded-[8px] flex items-center gap-3 shadow-xl">
              <div className="w-8 h-8 rounded-[6px] flex items-center justify-center shrink-0" style={{ background: PRIMARY }}>
                <Bell size={15} className="animate-bounce" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">직원 호출 완료</p>
                <p className="text-slate-400 text-xs mt-0.5">{staffCallMsg && `${staffCallMsg} · `}잠시만 기다려 주세요</p>
              </div>
              <button
                onClick={() => setStaffCalled(false)}
                className="w-6 h-6 flex items-center justify-center rounded-[4px] text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Sheets ── */}
      <AnimatePresence>
        {detailItem && (
          <MenuDetailSheet
            item={detailItem}
            onClose={() => setDetailItem(null)}
            onAddToCart={(opts, mq, qty) => addToCartWithOptions(detailItem, opts, mq, qty)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <CartSheet cart={cart} onAdd={cartAddByKey} onRemove={cartRemoveByKey} onDelete={cartDeleteByKey} onClose={() => { setCartOpen(false); setCartSoldoutActive(false); }} onOrder={initiateOrder} soldoutMenuIds={soldoutMenuIds} soldoutActive={cartSoldoutActive} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {historyOpen && (
          <OrderHistorySheet orders={orderHistory} cart={cart} onClose={() => setHistoryOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {staffCallOpen && (
          <StaffCallSheet onClose={() => setStaffCallOpen(false)} onConfirm={callStaff} />
        )}
      </AnimatePresence>

      {/* ── Order Processing Overlay ── */}
      <AnimatePresence>
        {orderProcessing && <OrderProcessingOverlay />}
      </AnimatePresence>

      {/* ── Order Error Screen ── */}
      <AnimatePresence>
        {orderError && (
          <OrderErrorScreen
            type={orderError}
            duplicateTime={duplicateTime}
            onGoMain={() => { setOrderError(null); setCartOpen(false); }}
            onRetry={() => { setOrderError(null); doOrder(cart); }}
            onHistory={() => { setOrderError(null); setHistoryOpen(true); }}
          />
        )}
      </AnimatePresence>

      {/* ── Soldout Alert Modal ── */}
      <AnimatePresence>
        {soldoutModal && (
          <SoldoutModal items={soldoutItems} onClose={() => { setSoldoutModal(false); setCartSoldoutActive(true); }} />
        )}
      </AnimatePresence>

      {/* ── Network Error Screen ── */}
      <AnimatePresence>
        {networkError && (
          <NetworkErrorScreen onRetry={() => {
            if (navigator.onLine) setNetworkError(false);
          }} />
        )}
      </AnimatePresence>
    </div>
  );
}
