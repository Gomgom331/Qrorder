import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingCart, Bell, X, Plus, Minus, Check, ChevronRight,
  Clock, Flame, Star, Zap, Package, AlertTriangle, ChevronDown,
  Info, Utensils, Droplets, CreditCard, HelpCircle, RefreshCw, Trash2,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────
type Phase = 'loading' | 'menu' | 'ordered';
type MenuBadge = 'popular' | 'recommended' | 'limited';

interface OptionChoice {
  id: string;
  label: string;
  priceAdd: number; // 0 = no extra charge
}

interface OptionGroup {
  id: string;
  label: string;
  required: boolean;
  multiple: boolean; // true = checkbox, false = radio
  choices: OptionChoice[];
}

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  status: 'active' | 'soldout';
  description: string;
  image?: string;
  badges: MenuBadge[];
  limitedQty?: number;
  timeSalePrice?: number;
  optionGroups?: OptionGroup[];
  allergyInfo?: string;
  kcal?: number;
}

interface SelectedOptions {
  [groupId: string]: string[]; // choiceId[]
}

interface CartItem {
  cartKey: string; // menuId + option fingerprint
  menuId: string;
  name: string;
  optionLabel?: string;
  price: number;       // base price (sale or original)
  originalPrice: number;
  optionPrice: number; // accumulated option adds
  qty: number;
}

// ─── Mock Data ────────────────────────────────────────────────────
const STORES: Record<string, { name: string; notice?: string; emoji: string }> = {
  demo: {
    name: '맛나한식당',
    emoji: '🍚',
    notice: '🔥 런치 특가! 11:00–14:00 불고기 정식 20% 할인 중',
  },
};

const CATEGORIES = ['전체', '한식', '일식', '음료', '디저트'];

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1', name: '불고기 정식', category: '한식', price: 12000, status: 'active',
    description: '국내산 소고기를 특제 양념에 재워 구운 불고기와 밥, 국, 반찬이 함께 나옵니다. 계절 제철 반찬 4~5가지와 함께 제공되며 공기밥은 무한 리필 가능합니다.',
    image: 'https://images.unsplash.com/photo-1708388463872-1be875a0ba6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['popular', 'recommended'], timeSalePrice: 9600,
    kcal: 720, allergyInfo: '대두, 밀, 우유',
    optionGroups: [
      {
        id: 'spicy', label: '맵기 선택', required: true, multiple: false,
        choices: [
          { id: 'mild', label: '순한맛', priceAdd: 0 },
          { id: 'medium', label: '보통맛', priceAdd: 0 },
          { id: 'hot', label: '매운맛', priceAdd: 0 },
        ],
      },
      {
        id: 'add', label: '추가 선택', required: false, multiple: true,
        choices: [
          { id: 'egg', label: '계란후라이 추가', priceAdd: 500 },
          { id: 'rice', label: '공기밥 추가', priceAdd: 1000 },
          { id: 'soup', label: '국 추가', priceAdd: 1000 },
        ],
      },
    ],
  },
  {
    id: '2', name: '김치찌개', category: '한식', price: 8000, status: 'active',
    description: '2년 이상 숙성한 묵은지로 끓인 얼큰하고 깊은 맛의 김치찌개입니다. 공기밥이 포함됩니다.',
    image: 'https://images.unsplash.com/photo-1676686997059-fb817ebbb2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['popular'], kcal: 480, allergyInfo: '대두',
    timeSalePrice: 6500,
    optionGroups: [
      {
        id: 'meat', label: '고기 선택', required: true, multiple: false,
        choices: [
          { id: 'pork', label: '돼지고기', priceAdd: 0 },
          { id: 'tuna', label: '참치', priceAdd: 0 },
          { id: 'seafood', label: '해물', priceAdd: 2000 },
        ],
      },
    ],
  },
  {
    id: '3', name: '된장찌개', category: '한식', price: 8000, status: 'active',
    description: '구수한 재래식 된장으로 끓인 두부 된장찌개입니다. 공기밥이 포함됩니다.',
    image: 'https://images.unsplash.com/photo-1535923054316-5f75572def8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: [], kcal: 390, allergyInfo: '대두',
  },
  {
    id: '4', name: '비빔밥', category: '한식', price: 9000, status: 'active',
    description: '고소한 참기름과 고추장으로 비벼 먹는 전통 돌솥 비빔밥입니다.',
    image: 'https://images.unsplash.com/photo-1741295017668-c8132acd6fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['recommended', 'limited'], limitedQty: 30, kcal: 650,
    timeSalePrice: 7500,
  },
  {
    id: '5', name: '제육볶음', category: '한식', price: 11000, status: 'active',
    description: '매콤달콤한 양념에 볶은 제육볶음입니다. 공기밥 및 반찬이 포함됩니다.',
    image: 'https://images.unsplash.com/photo-1708388064278-707e85eaddc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['limited'], limitedQty: 15, kcal: 820, allergyInfo: '대두, 밀',
    timeSalePrice: 8800,
  },
  {
    id: '6', name: '돈까스', category: '일식', price: 10000, status: 'active',
    description: '바삭하게 튀긴 국내산 등심 돈까스입니다. 소스와 샐러드, 공기밥이 포함됩니다.',
    image: 'https://images.unsplash.com/photo-1734775373504-ff24ea8419b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['popular'], kcal: 760, allergyInfo: '밀, 우유, 계란',
  },
  {
    id: '7', name: '우동', category: '일식', price: 7000, status: 'soldout',
    description: '부드러운 면발의 따뜻한 일본식 우동입니다.',
    image: 'https://images.unsplash.com/photo-1725121463846-b23056f190df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: [], kcal: 420,
  },
  {
    id: '8', name: '카레라이스', category: '일식', price: 8500, status: 'active',
    description: '부드러운 감자와 당근이 들어간 진한 일본식 카레라이스입니다.',
    image: 'https://images.unsplash.com/photo-1679279726937-122c49626802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: ['recommended'], kcal: 680,
    timeSalePrice: 7000,
  },
  {
    id: '9', name: '레몬에이드', category: '음료', price: 4500, status: 'active',
    description: '신선한 레몬으로 만든 상큼하고 시원한 레몬에이드입니다.',
    image: 'https://images.unsplash.com/photo-1739138056344-3c852f4efc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: [], kcal: 120,
    timeSalePrice: 3500,
    optionGroups: [
      {
        id: 'ice', label: '얼음 선택', required: true, multiple: false,
        choices: [
          { id: 'ice_full', label: '얼음 많이', priceAdd: 0 },
          { id: 'ice_less', label: '얼음 적게', priceAdd: 0 },
          { id: 'ice_none', label: '얼음 없이', priceAdd: 0 },
        ],
      },
      {
        id: 'size_drink', label: '사이즈', required: true, multiple: false,
        choices: [
          { id: 'r', label: '레귤러 (350ml)', priceAdd: 0 },
          { id: 'l', label: '라지 (500ml)', priceAdd: 1000 },
        ],
      },
    ],
  },
  {
    id: '10', name: '티라미수', category: '디저트', price: 5500, status: 'active',
    description: '마스카포네 치즈와 에스프레소가 어우러진 이탈리안 디저트입니다.',
    image: 'https://images.unsplash.com/photo-1761275710704-ec6a97c0141f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    badges: [], kcal: 340, allergyInfo: '우유, 계란, 밀',
    timeSalePrice: 4500,
  },
];

// ─── Badge config ─────────────────────────────────────────────────
const BADGE_CONFIG: Record<MenuBadge, { label: string; Icon: React.ElementType; cls: string }> = {
  popular:     { label: '인기', Icon: Flame, cls: 'bg-red-50    text-red-500    border-red-100'    },
  recommended: { label: '추천', Icon: Star,  cls: 'bg-amber-50  text-amber-500  border-amber-100'  },
  limited:     { label: '한정', Icon: Zap,   cls: 'bg-purple-50 text-purple-500 border-purple-100' },
};

// ─── Option key helper ─────────────────────────────────────────────
function buildCartKey(menuId: string, opts: SelectedOptions) {
  const flat = Object.entries(opts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}:${[...v].sort().join(',')}`)
    .join('|');
  return flat ? `${menuId}__${flat}` : menuId;
}

function buildOptionLabel(item: MenuItem, opts: SelectedOptions): string {
  if (!item.optionGroups) return '';
  const parts: string[] = [];
  for (const group of item.optionGroups) {
    const selected = opts[group.id] ?? [];
    const labels = selected.map(cid => group.choices.find(c => c.id === cid)?.label ?? '').filter(Boolean);
    if (labels.length) parts.push(labels.join(', '));
  }
  return parts.join(' · ');
}

function calcOptionPrice(item: MenuItem, opts: SelectedOptions): number {
  if (!item.optionGroups) return 0;
  let extra = 0;
  for (const group of item.optionGroups) {
    const selected = opts[group.id] ?? [];
    for (const cid of selected) {
      extra += group.choices.find(c => c.id === cid)?.priceAdd ?? 0;
    }
  }
  return extra;
}

// ─── Loading Screen ───────────────────────────────────────────────
function LoadingScreen({ storeName, tableId }: { storeName: string; tableId: string }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 4;
      if (p >= 100) { p = 100; clearInterval(interval); }
      setProgress(p);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FF6B2B] flex flex-col items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-black/10 rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />
      <div className="flex flex-col items-center gap-8 z-10">
        <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: 'backOut' }} className="relative">
          <div className="w-24 h-24 bg-white rounded-[8px] flex items-center justify-center shadow-2xl shadow-black/20">
            <span className="text-[#FF6B2B] font-black text-3xl tracking-tighter">QR</span>
          </div>
          <span className="absolute inset-0 rounded-[8px] border-4 border-white/40 animate-ping" />
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-center space-y-2">
          <p className="text-white/70 text-sm">{storeName}</p>
          <div className="bg-white/15 border border-white/25 rounded-[6px] px-8 py-3">
            <p className="text-white/60 text-xs mb-0.5">테이블</p>
            <p className="text-white font-black text-4xl leading-none">{tableId}번</p>
          </div>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="w-64 space-y-3">
          <div className="flex items-center justify-center gap-2.5">
            {[0, 1, 2].map(i => (
              <motion.div key={i} className="w-2 h-2 bg-white rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }} />
            ))}
            <p className="text-white/80 text-sm">메뉴를 불러오는 중...</p>
          </div>
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div className="h-full bg-white rounded-full" style={{ width: `${progress}%` }} transition={{ duration: 0.2, ease: 'linear' }} />
          </div>
        </motion.div>
      </div>
      <p className="absolute bottom-8 text-white/30 text-xs z-10">Powered by QR Order</p>
    </div>
  );
}

// ─── Menu Detail Sheet ────────────────────────────────────────────
function MenuDetailSheet({
  item,
  onClose,
  onAddToCart,
}: {
  item: MenuItem;
  onClose: () => void;
  onAddToCart: (opts: SelectedOptions, qty: number) => void;
}) {
  const hasOptions = (item.optionGroups?.length ?? 0) > 0;
  const basePrice = item.timeSalePrice ?? item.price;

  const [selectedOpts, setSelectedOpts] = useState<SelectedOptions>(() => {
    const init: SelectedOptions = {};
    item.optionGroups?.forEach(g => { init[g.id] = []; });
    return init;
  });
  const [qty, setQty] = useState(1);

  const toggleOption = (groupId: string, choiceId: string, multiple: boolean) => {
    setSelectedOpts(prev => {
      const cur = prev[groupId] ?? [];
      if (multiple) {
        return { ...prev, [groupId]: cur.includes(choiceId) ? cur.filter(c => c !== choiceId) : [...cur, choiceId] };
      } else {
        return { ...prev, [groupId]: cur.includes(choiceId) ? [] : [choiceId] };
      }
    });
  };

  const isRequiredSatisfied = useMemo(() => {
    if (!item.optionGroups) return true;
    return item.optionGroups.filter(g => g.required).every(g => (selectedOpts[g.id]?.length ?? 0) > 0);
  }, [item.optionGroups, selectedOpts]);

  const optionExtra = calcOptionPrice(item, selectedOpts);
  const unitPrice = basePrice + optionExtra;
  const totalPrice = unitPrice * qty;

  const handleAdd = () => {
    if (!isRequiredSatisfied) return;
    onAddToCart(selectedOpts, qty);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 max-w-lg mx-auto flex flex-col justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Sheet */}
        <motion.div
          initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 32, stiffness: 320 }}
          className="relative bg-white rounded-t-[8px] shadow-2xl flex flex-col max-h-[92vh]"
        >
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-0 shrink-0">
            <div className="w-10 h-1 bg-slate-200 rounded-full" />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-[4px] flex items-center justify-center text-white"
          >
            <X size={15} />
          </button>

          {/* Scrollable body */}
          <div className="overflow-y-auto flex-1">
            {/* Hero image */}
            {item.image && (
              <div className="relative w-full h-52 shrink-0 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            )}

            <div className="px-5 pt-4 pb-2 space-y-4">
              {/* Header */}
              <div>
                {/* Badges */}
                {item.badges.length > 0 && (
                  <div className="flex gap-1 mb-2 flex-wrap">
                    {item.badges.map(badge => {
                      const { label, Icon, cls } = BADGE_CONFIG[badge];
                      return (
                        <span key={badge} className={`inline-flex items-center gap-0.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px] border ${cls}`}>
                          <Icon size={9} />{label}
                        </span>
                      );
                    })}
                  </div>
                )}
                <h2 className="font-black text-slate-800 text-xl">{item.name}</h2>
                <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{item.description}</p>

                {/* Meta info */}
                <div className="flex items-center gap-3 mt-3">
                  {item.kcal && (
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Flame size={11} className="text-orange-300" />
                      {item.kcal}kcal
                    </span>
                  )}
                  {item.allergyInfo && (
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <AlertTriangle size={10} className="text-amber-400" />
                      알레르기: {item.allergyInfo}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-2">
                  {item.timeSalePrice ? (
                    <>
                      <span className="font-black text-[#FF6B2B] text-2xl">{item.timeSalePrice.toLocaleString()}원</span>
                      <span className="line-through text-slate-300 text-sm">{item.price.toLocaleString()}원</span>
                      <span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded-[3px]">
                        {Math.round((1 - item.timeSalePrice / item.price) * 100)}% 할인
                      </span>
                    </>
                  ) : (
                    <span className="font-black text-slate-800 text-2xl">{item.price.toLocaleString()}원</span>
                  )}
                </div>
              </div>

              {/* Divider */}
              {hasOptions && <div className="border-t border-slate-100" />}

              {/* Option Groups */}
              {item.optionGroups?.map((group) => (
                <div key={group.id} className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 text-sm">{group.label}</span>
                      {group.multiple && (
                        <span className="text-[10px] text-slate-400 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded-[3px]">중복 선택 가능</span>
                      )}
                    </div>
                    {group.required ? (
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-[3px] ${
                        (selectedOpts[group.id]?.length ?? 0) > 0
                          ? 'bg-green-50 text-green-600 border border-green-100'
                          : 'bg-[#FF6B2B]/10 text-[#FF6B2B] border border-[#FF6B2B]/20'
                      }`}>
                        {(selectedOpts[group.id]?.length ?? 0) > 0 ? '선택 완료 ✓' : '필수'}
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded-[3px]">선택</span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    {group.choices.map(choice => {
                      const isSelected = (selectedOpts[group.id] ?? []).includes(choice.id);
                      return (
                        <button
                          key={choice.id}
                          onClick={() => toggleOption(group.id, choice.id, group.multiple)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[4px] border transition-all text-left ${
                            isSelected
                              ? 'bg-[#FF6B2B]/6 border-[#FF6B2B] text-[#FF6B2B]'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            {/* Indicator */}
                            <div className={`shrink-0 flex items-center justify-center transition-all ${
                              group.multiple
                                ? `w-4 h-4 rounded-[3px] border ${isSelected ? 'bg-[#FF6B2B] border-[#FF6B2B]' : 'border-slate-300'}`
                                : `w-4 h-4 rounded-full border-2 ${isSelected ? 'border-[#FF6B2B]' : 'border-slate-300'}`
                            }`}>
                              {isSelected && group.multiple && <Check size={10} className="text-white" strokeWidth={3} />}
                              {isSelected && !group.multiple && <div className="w-2 h-2 rounded-full bg-[#FF6B2B]" />}
                            </div>
                            <span className="text-sm font-medium">{choice.label}</span>
                          </div>
                          {choice.priceAdd > 0 && (
                            <span className={`text-sm font-semibold ${isSelected ? 'text-[#FF6B2B]' : 'text-slate-500'}`}>
                              +{choice.priceAdd.toLocaleString()}원
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Quantity */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 text-sm">수량</span>
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-[4px] px-2 py-1.5">
                    <button
                      onClick={() => setQty(q => Math.max(1, q - 1))}
                      disabled={qty <= 1}
                      className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-800 disabled:opacity-30 transition-opacity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center font-black text-slate-800 tabular-nums">{qty}</span>
                    <button
                      onClick={() => setQty(q => q + 1)}
                      className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom padding for fixed footer */}
              <div className="h-2" />
            </div>
          </div>

          {/* Fixed footer */}
          <div className="px-5 pb-8 pt-3 border-t border-slate-100 bg-white shrink-0">
            {!isRequiredSatisfied && (
              <p className="text-xs text-[#FF6B2B] flex items-center gap-1 mb-2">
                <AlertTriangle size={11} />
                필수 옵션을 선택해 주세요
              </p>
            )}
            <button
              onClick={handleAdd}
              disabled={!isRequiredSatisfied}
              className="w-full h-11 bg-[#FF6B2B] text-white rounded-[4px] font-bold flex items-center justify-between px-4 shadow-md shadow-[#FF6B2B]/20 hover:bg-[#E85D20] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <span>장바구니에 담기</span>
              <span className="font-black tabular-nums">{totalPrice.toLocaleString()}원</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// ─── Menu Item Card ───────────────────────────────────────────────
function MenuItemCard({
  item, qty, onAdd, onRemove, onOpenDetail,
}: {
  item: MenuItem;
  qty: number;
  onAdd: () => void;
  onRemove: () => void;
  onOpenDetail: () => void;
}) {
  const isSoldout = item.status === 'soldout';
  const hasOptions = (item.optionGroups?.length ?? 0) > 0;
  const salePrice = item.timeSalePrice;
  const discountPct = salePrice ? Math.round((1 - salePrice / item.price) * 100) : 0;

  return (
    <motion.div
      layout
      className={`bg-white rounded-[6px] border overflow-hidden ${
        isSoldout ? 'border-slate-100 opacity-60' : 'border-slate-200 shadow-sm'
      }`}
    >
      <div className="flex">
        {/* Image */}
        <div className="relative w-[100px] h-[100px] shrink-0 overflow-hidden">
          {item.image ? (
            <img src={item.image} alt={item.name} className={`w-full h-full object-cover ${isSoldout ? 'grayscale' : ''}`} />
          ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
              <Package size={24} className="text-slate-300" />
            </div>
          )}
          {isSoldout && (
            <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
              <span className="bg-white/90 text-slate-700 text-xs font-bold px-2 py-0.5 rounded-[3px]">품절</span>
            </div>
          )}
          {salePrice && !isSoldout && (
            <div className="absolute top-1.5 left-1.5">
              <span className="bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-[3px] leading-none">
                -{discountPct}%
              </span>
            </div>
          )}
          {/* Option indicator */}
          {hasOptions && !isSoldout && (
            <div className="absolute bottom-1.5 left-1.5">
              <span className="bg-black/50 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded-[3px] leading-none flex items-center gap-0.5">
                <ChevronDown size={8} />옵션
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
          <div>
            {item.badges.length > 0 && (
              <div className="flex gap-1 mb-1.5 flex-wrap">
                {item.badges.map(badge => {
                  const { label, Icon, cls } = BADGE_CONFIG[badge];
                  return (
                    <span key={badge} className={`inline-flex items-center gap-0.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px] border ${cls}`}>
                      <Icon size={9} />{label}
                    </span>
                  );
                })}
                {item.limitedQty !== undefined && (
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px] border bg-orange-50 text-orange-500 border-orange-100">
                    <AlertTriangle size={9} />잔여 {item.limitedQty}개
                  </span>
                )}
              </div>
            )}
            <p className="font-semibold text-slate-800 text-sm leading-snug">{item.name}</p>
            <p className="text-xs text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">{item.description}</p>
          </div>

          {/* Price + Controls */}
          <div className="flex items-center justify-between mt-2.5">
            <div className="min-w-0">
              {salePrice ? (
                <div>
                  <span className="line-through text-slate-300 text-xs block">{item.price.toLocaleString()}원</span>
                  <span className="font-black text-[#FF6B2B] text-base leading-tight">{salePrice.toLocaleString()}원</span>
                </div>
              ) : (
                <span className={`font-bold text-sm ${isSoldout ? 'text-slate-400' : 'text-slate-800'}`}>
                  {item.price.toLocaleString()}원
                </span>
              )}
            </div>

            {!isSoldout && (
              <div className="flex items-center gap-1.5">
                {/* Detail button — always visible */}
                <button
                  onClick={onOpenDetail}
                  className="w-8 h-8 border border-slate-200 rounded-[4px] flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 hover:bg-slate-50 active:opacity-70 transition-all"
                  title="메뉴 상세 보기"
                >
                  <Info size={14} />
                </button>

                {/* Add/qty button */}
                {qty > 0 ? (
                  <div className="flex items-center gap-1.5 bg-[#FF6B2B]/10 rounded-[4px] px-2 py-1.5">
                    <button
                      onClick={onRemove}
                      className="w-6 h-6 bg-[#FF6B2B] rounded-[3px] flex items-center justify-center text-white shrink-0 active:opacity-70 transition-opacity"
                    >
                      <Minus size={11} strokeWidth={3} />
                    </button>
                    <span className="text-[#FF6B2B] font-black text-sm w-5 text-center tabular-nums">{qty}</span>
                    <button
                      onClick={onAdd}
                      className="w-6 h-6 bg-[#FF6B2B] rounded-[3px] flex items-center justify-center text-white shrink-0 active:opacity-70 transition-opacity"
                    >
                      <Plus size={11} strokeWidth={3} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={onAdd}
                    className="w-8 h-8 bg-[#FF6B2B] rounded-[4px] flex items-center justify-center text-white hover:bg-[#E85D20] active:opacity-70 transition-all"
                  >
                    <Plus size={15} strokeWidth={2.5} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Cart Drawer ──────────────────────────────────────────────────
function CartDrawer({
  cart, onAdd, onRemove, onClose, onOrder,
}: {
  cart: CartItem[];
  onAdd: (cartKey: string) => void;
  onRemove: (cartKey: string) => void;
  onClose: () => void;
  onOrder: () => void;
}) {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + (i.price + i.optionPrice) * i.qty, 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 max-w-lg mx-auto flex flex-col justify-end">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative bg-white rounded-t-[8px] shadow-2xl flex flex-col max-h-[80vh]"
        >
          <div className="flex justify-center pt-3 pb-1 shrink-0">
            <div className="w-10 h-1 bg-slate-200 rounded-full" />
          </div>
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2">
              <ShoppingCart size={17} className="text-slate-700" />
              <h2 className="font-bold text-slate-800">장바구니</h2>
              <span className="bg-[#FF6B2B] text-white text-xs font-bold px-2 py-0.5 rounded-[3px] min-w-[22px] text-center tabular-nums">{totalItems}</span>
            </div>
            <button onClick={onClose} className="w-7 h-7 bg-slate-100 rounded-[4px] flex items-center justify-center text-slate-500 hover:bg-slate-200 active:opacity-70 transition-all">
              <X size={14} />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 px-5 py-2">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <ShoppingCart size={36} className="text-slate-200 mb-3" />
                <p className="text-slate-400 text-sm">담은 메뉴가 없습니다</p>
              </div>
            ) : (
              <div className="space-y-0">
                {cart.map(item => (
                  <div key={item.cartKey} className="flex items-start gap-3 py-3 border-b border-slate-50 last:border-0">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm leading-snug">{item.name}</p>
                      {item.optionLabel && (
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{item.optionLabel}</p>
                      )}
                      <p className="text-[#FF6B2B] font-bold text-sm mt-0.5">
                        {(item.price + item.optionPrice).toLocaleString()}원
                        {item.optionPrice > 0 && (
                          <span className="text-slate-400 font-normal text-xs ml-1">(옵션 +{item.optionPrice.toLocaleString()}원)</span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button onClick={() => onRemove(item.cartKey)} className="w-7 h-7 border border-slate-200 rounded-[4px] flex items-center justify-center text-slate-500 hover:bg-slate-50 active:bg-slate-100 transition-colors">
                        <Minus size={12} />
                      </button>
                      <span className="w-6 text-center font-bold text-slate-800 text-sm tabular-nums">{item.qty}</span>
                      <button onClick={() => onAdd(item.cartKey)} className="w-7 h-7 bg-[#FF6B2B] rounded-[4px] flex items-center justify-center text-white active:opacity-70 transition-opacity">
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-slate-700 font-semibold text-sm w-20 text-right tabular-nums shrink-0">
                      {((item.price + item.optionPrice) * item.qty).toLocaleString()}원
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="px-5 pb-8 pt-4 border-t border-slate-100 space-y-3 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium text-sm">총 결제금액</span>
              <span className="text-xl font-black text-slate-900 tabular-nums">{totalPrice.toLocaleString()}원</span>
            </div>
            <button
              onClick={onOrder}
              disabled={cart.length === 0}
              className="w-full h-11 bg-[#FF6B2B] text-white rounded-[4px] font-bold flex items-center justify-center gap-2 shadow-md shadow-[#FF6B2B]/20 hover:bg-[#E85D20] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <span>주문하기</span>
              <span className="opacity-70">·</span>
              <span className="tabular-nums">{totalPrice.toLocaleString()}원</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// ─── Order Complete Screen ────────────────────────────────────────
function OrderCompleteScreen({ orderId, storeName, tableId, onNewOrder }: {
  orderId: string; storeName: string; tableId: string; onNewOrder: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-sm w-full">
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', damping: 12, stiffness: 200 }}
          className="mx-auto w-20 h-20 bg-green-500 rounded-[8px] flex items-center justify-center shadow-lg shadow-green-200">
          <Check size={36} className="text-white" strokeWidth={3} />
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          <h1 className="text-2xl font-black text-slate-800">주문 완료! 🎉</h1>
          <p className="text-slate-400 mt-1 text-sm">주문이 성공적으로 접수되었습니다</p>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.45 }}
          className="bg-slate-50 border border-slate-100 rounded-[6px] p-4 text-left space-y-0">
          {[
            { label: '주문 번호', value: <span className="font-mono font-bold text-slate-800 text-sm bg-white px-2.5 py-1 rounded-[4px] border border-slate-200">{orderId}</span> },
            { label: '테이블',   value: <span className="font-bold text-slate-800 text-sm">{tableId}번</span> },
            { label: '매장',     value: <span className="font-bold text-slate-800 text-sm">{storeName}</span> },
          ].map(({ label, value }, i) => (
            <div key={label} className={`flex justify-between items-center py-3 ${i > 0 ? 'border-t border-slate-100' : ''}`}>
              <span className="text-slate-400 text-sm">{label}</span>
              {value}
            </div>
          ))}
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="text-slate-400 text-sm flex items-center justify-center gap-1.5">
          <Clock size={13} />잠시 후 음식이 준비됩니다
        </motion.p>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
          <button onClick={onNewOrder} className="w-full h-11 bg-[#FF6B2B] text-white rounded-[4px] font-bold hover:bg-[#E85D20] active:scale-[0.98] transition-all shadow-md shadow-[#FF6B2B]/20">
            추가 주문하기
          </button>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Staff Call Items ─────────────────────────────────────────────
const STAFF_CALL_ITEMS = [
  { id: 'banchan',  label: '반찬 리필',    icon: Utensils,   desc: '반찬을 더 주세요' },
  { id: 'water',    label: '물 리필',      icon: Droplets,   desc: '물을 더 주세요' },
  { id: 'utensils', label: '수저 / 포크',  icon: RefreshCw,  desc: '수저나 포크가 필요해요' },
  { id: 'cleanup',  label: '빈 그릇 치우기', icon: Trash2,   desc: '다 먹은 그릇을 치워주세요' },
  { id: 'bill',     label: '계산서 요청',  icon: CreditCard, desc: '계산서를 가져다 주세요' },
  { id: 'etc',      label: '기타 문의',    icon: HelpCircle, desc: '직원을 불러주세요' },
] as const;

type StaffCallId = typeof STAFF_CALL_ITEMS[number]['id'];

// ─── Staff Call Sheet ─────────────────────────────────────────────
function StaffCallSheet({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: (item: typeof STAFF_CALL_ITEMS[number]) => void;
}) {
  const [selected, setSelected] = useState<StaffCallId | null>(null);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 max-w-lg mx-auto flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 32, stiffness: 320 }}
          className="relative bg-white rounded-t-[8px] shadow-2xl flex flex-col"
        >
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-0 shrink-0">
            <div className="w-10 h-1 bg-slate-200 rounded-full" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#FF6B2B]/10 rounded-[4px] flex items-center justify-center">
                <Bell size={14} className="text-[#FF6B2B]" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">직원 호출</p>
                <p className="text-[11px] text-slate-400">무엇이 필요하신가요?</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 bg-slate-100 rounded-[4px] flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X size={14} />
            </button>
          </div>

          {/* List */}
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {STAFF_CALL_ITEMS.map((item) => {
              const Icon = item.icon;
              const isSelected = selected === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className={`relative flex flex-col items-start gap-2 p-3.5 rounded-[6px] border text-left transition-all active:scale-[0.97] ${
                    isSelected
                      ? 'bg-[#FF6B2B]/6 border-[#FF6B2B] shadow-sm shadow-[#FF6B2B]/10'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-[4px] flex items-center justify-center ${
                    isSelected ? 'bg-[#FF6B2B] text-white' : 'bg-white text-slate-500 border border-slate-200'
                  }`}>
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold leading-tight ${isSelected ? 'text-[#FF6B2B]' : 'text-slate-700'}`}>
                      {item.label}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                  {isSelected && (
                    <div className="absolute top-2.5 right-2.5">
                      <Check size={12} className="text-[#FF6B2B]" strokeWidth={3} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-4 pb-8 pt-2">
            <button
              onClick={() => {
                const found = STAFF_CALL_ITEMS.find(i => i.id === selected);
                if (found) { onConfirm(found); onClose(); }
              }}
              disabled={!selected}
              className="w-full h-11 bg-[#FF6B2B] text-white rounded-[4px] font-bold flex items-center justify-center gap-2 shadow-md shadow-[#FF6B2B]/20 hover:bg-[#E85D20] active:scale-[0.98] disabled:opacity-35 disabled:cursor-not-allowed transition-all"
            >
              <Bell size={14} />
              직원 호출하기
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// ─── Main Component ───────────────────────────────────────────────
export function CustomerMenuPage() {
  const { storeId = 'demo', tableId = '1' } = useParams<{ storeId: string; tableId: string }>();
  const store = STORES[storeId] ?? { name: '매장', emoji: '🍽', notice: undefined };

  const [phase, setPhase] = useState<Phase>('loading');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [staffCalled, setStaffCalled] = useState(false);
  const [staffCallReason, setStaffCallReason] = useState('');
  const [orderId, setOrderId] = useState('');
  const [detailItem, setDetailItem] = useState<MenuItem | null>(null);
  const [staffCallOpen, setStaffCallOpen] = useState(false);
  const staffTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const categoryBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setPhase('menu'), 2600);
    return () => clearTimeout(timer);
  }, []);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + (i.price + i.optionPrice) * i.qty, 0);

  // ── Add to cart (with options) ──
  const addToCartWithOptions = (item: MenuItem, opts: SelectedOptions, qty: number) => {
    const basePrice = item.timeSalePrice ?? item.price;
    const optionPrice = calcOptionPrice(item, opts);
    const optionLabel = buildOptionLabel(item, opts);
    const cartKey = buildCartKey(item.id, opts);
    setCart(prev => {
      const existing = prev.find(c => c.cartKey === cartKey);
      if (existing) return prev.map(c => c.cartKey === cartKey ? { ...c, qty: c.qty + qty } : c);
      return [...prev, {
        cartKey,
        menuId: item.id,
        name: item.name,
        optionLabel: optionLabel || undefined,
        price: basePrice,
        originalPrice: item.price,
        optionPrice,
        qty,
      }];
    });
  };

  // ── Simple add (no options) ──
  const handlePlusClick = (item: MenuItem) => {
    const hasOptions = (item.optionGroups?.length ?? 0) > 0;
    if (hasOptions) {
      setDetailItem(item);
    } else {
      addToCartWithOptions(item, {}, 1);
    }
  };

  // ── Qty adjust in list (simple items already in cart) ──
  const handleMinusClick = (item: MenuItem) => {
    const cartKey = buildCartKey(item.id, {});
    setCart(prev => {
      const existing = prev.find(c => c.cartKey === cartKey);
      if (!existing) return prev;
      if (existing.qty === 1) return prev.filter(c => c.cartKey !== cartKey);
      return prev.map(c => c.cartKey === cartKey ? { ...c, qty: c.qty - 1 } : c);
    });
  };

  // ── Cart drawer add/remove by cartKey ──
  const cartAddByKey = (cartKey: string) => {
    setCart(prev => prev.map(c => c.cartKey === cartKey ? { ...c, qty: c.qty + 1 } : c));
  };

  const cartRemoveByKey = (cartKey: string) => {
    setCart(prev => {
      const existing = prev.find(c => c.cartKey === cartKey);
      if (!existing) return prev;
      if (existing.qty === 1) return prev.filter(c => c.cartKey !== cartKey);
      return prev.map(c => c.cartKey === cartKey ? { ...c, qty: c.qty - 1 } : c);
    });
  };

  // ── Get displayed qty (simple items only; option items show 0 so + always opens sheet) ──
  const getSimpleQty = (item: MenuItem) => {
    const hasOptions = (item.optionGroups?.length ?? 0) > 0;
    if (hasOptions) return 0; // always show + for option items
    return cart.find(c => c.cartKey === item.id)?.qty ?? 0;
  };

  const placeOrder = () => {
    const id = `ORD-${Date.now().toString().slice(-6)}`;
    setOrderId(id);
    setCartOpen(false);
    setCart([]);
    setPhase('ordered');
  };

  const callStaff = (reason = '') => {
    setStaffCallReason(reason);
    setStaffCalled(true);
    if (staffTimerRef.current) clearTimeout(staffTimerRef.current);
    staffTimerRef.current = setTimeout(() => setStaffCalled(false), 4000);
  };

  const groupedMenu = useMemo(() => {
    if (selectedCategory !== '전체') {
      return { [selectedCategory]: MENU_ITEMS.filter(i => i.category === selectedCategory) };
    }
    const groups: Record<string, MenuItem[]> = {};
    CATEGORIES.slice(1).forEach(cat => {
      const items = MENU_ITEMS.filter(i => i.category === cat);
      if (items.length > 0) groups[cat] = items;
    });
    return groups;
  }, [selectedCategory]);

  if (phase === 'loading') return <LoadingScreen storeName={store.name} tableId={tableId} />;
  if (phase === 'ordered') {
    return (
      <OrderCompleteScreen
        orderId={orderId} storeName={store.name} tableId={tableId}
        onNewOrder={() => { setPhase('menu'); setSelectedCategory('전체'); }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#f1f5f9] flex flex-col max-w-lg mx-auto relative"
    >
      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#FF6B2B] rounded-[6px] flex items-center justify-center shrink-0">
              <span className="text-white font-black text-[10px]">QR</span>
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm leading-tight">{store.name}</p>
              <span className="text-[10px] font-semibold text-[#FF6B2B] bg-orange-50 px-1.5 py-0.5 rounded-[3px]">
                {tableId}번 테이블
              </span>
            </div>
          </div>
          <button
            onClick={() => setStaffCallOpen(true)}
            className={`flex items-center gap-1.5 px-3 h-8 rounded-[4px] text-xs font-semibold border transition-all active:scale-95 ${
              staffCalled ? 'bg-[#FF6B2B] text-white border-[#FF6B2B]' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Bell size={12} className={staffCalled ? 'animate-bounce' : ''} />
            {staffCalled ? '호출 완료!' : '직원 호출'}
          </button>
        </div>

        {store.notice && (
          <div className="bg-orange-50 border-t border-orange-100 px-4 py-2 flex items-start gap-2">
            <Clock size={11} className="text-[#FF6B2B] shrink-0 mt-px" />
            <p className="text-xs text-[#FF6B2B] font-medium leading-snug">{store.notice}</p>
          </div>
        )}

        <div ref={categoryBarRef} className="border-t border-slate-100 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <div className="flex px-2 min-w-max">
            {CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive ? 'text-[#FF6B2B]' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {cat}
                  {isActive && (
                    <motion.span layoutId="categoryUnderline" className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#FF6B2B]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Menu Content ── */}
      <div className="flex-1 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {Object.entries(groupedMenu).map(([cat, items]) => (
              <div key={cat}>
                {selectedCategory === '전체' && (
                  <div className="px-4 pt-5 pb-2 flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{cat}</span>
                    <span className="text-[10px] text-slate-300 font-medium">{items.length}개</span>
                  </div>
                )}
                <div className="px-3 space-y-2 py-1">
                  {items.map(item => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      qty={getSimpleQty(item)}
                      onAdd={() => handlePlusClick(item)}
                      onRemove={() => handleMinusClick(item)}
                      onOpenDetail={() => setDetailItem(item)}
                    />
                  ))}
                </div>
              </div>
            ))}
            {Object.keys(groupedMenu).length === 0 && (
              <div className="flex flex-col items-center justify-center py-24">
                <Package size={36} className="text-slate-200 mb-3" />
                <p className="text-slate-400 text-sm">이 카테고리에 메뉴가 없습니다</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Cart Bar ── */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto z-30 px-4 pb-5 pt-2"
          >
            <button
              onClick={() => setCartOpen(true)}
              className="w-full h-12 bg-[#FF6B2B] rounded-[4px] flex items-center justify-between px-4 shadow-xl shadow-[#FF6B2B]/30 hover:bg-[#E85D20] active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <ShoppingCart size={16} className="text-white" />
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-white text-[#FF6B2B] text-[9px] font-black rounded-[3px] flex items-center justify-center tabular-nums">
                    {totalItems}
                  </span>
                </div>
                <span className="text-white font-bold text-sm">{totalItems}개 담음</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-black tabular-nums">{totalPrice.toLocaleString()}원</span>
                <ChevronRight size={16} className="text-white/70" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Cart Drawer ── */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onAdd={cartAddByKey}
          onRemove={cartRemoveByKey}
          onClose={() => setCartOpen(false)}
          onOrder={placeOrder}
        />
      )}

      {/* ── Menu Detail Sheet ── */}
      {detailItem && (
        <MenuDetailSheet
          item={detailItem}
          onClose={() => setDetailItem(null)}
          onAddToCart={(opts, qty) => addToCartWithOptions(detailItem, opts, qty)}
        />
      )}

      {/* ── Staff Call Sheet ── */}
      {staffCallOpen && (
        <StaffCallSheet
          onClose={() => setStaffCallOpen(false)}
          onConfirm={(item) => {
            callStaff(item.label);
          }}
        />
      )}

      {/* ── Staff Toast ── */}
      <AnimatePresence>
        {staffCalled && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
            className="fixed top-20 left-4 right-4 max-w-sm mx-auto z-50"
          >
            <div className="bg-slate-800 text-white px-4 py-3 rounded-[6px] flex items-center gap-3 shadow-xl">
              <div className="w-8 h-8 bg-[#FF6B2B] rounded-[4px] flex items-center justify-center shrink-0">
                <Bell size={15} className="animate-bounce" />
              </div>
              <div>
                <p className="font-bold text-sm">직원 호출 완료</p>
                <p className="text-slate-400 text-xs">{staffCallReason && `${staffCallReason} · `}잠시만 기다려주세요 😊</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}