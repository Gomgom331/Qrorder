import { useState } from 'react';
import {
  Flame, Star, Zap, Clock, Timer,
  GripVertical, Eye, ChevronDown, ChevronUp,
  CheckCircle2, AlertCircle,
} from 'lucide-react';
import { Tag } from '../../components/ui/Tag';
import { Toggle } from '../../components/ui/Toggle';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

// ─── helpers ────────────────────────────────────────────────────────
function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[8px] border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
        {desc && <p className="text-xs text-slate-400 mt-0.5">{desc}</p>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
function Code({ children }: { children: string }) {
  return (
    <pre className="mt-4 bg-slate-900 text-slate-100 text-xs rounded-[6px] p-3 overflow-x-auto">
      <code>{children.trim()}</code>
    </pre>
  );
}

const BADGE_CONFIG = {
  popular:     { label: '인기',     icon: Flame, cls: 'bg-red-50 text-red-500 border border-red-100' },
  recommended: { label: '추천',     icon: Star,  cls: 'bg-amber-50 text-amber-500 border border-amber-100' },
  limited:     { label: '한정수량', icon: Zap,   cls: 'bg-purple-50 text-purple-500 border border-purple-100' },
} as const;
type BadgeKey = keyof typeof BADGE_CONFIG;

const STATUS_CLS = {
  active:   'bg-emerald-50 text-emerald-700 border border-emerald-100',
  inactive: 'bg-slate-100  text-slate-500  border border-slate-200',
  soldout:  'bg-red-50     text-red-500    border border-red-100',
} as const;
const STATUS_LABEL = { active: '판매 중', inactive: '비활성', soldout: '품절' } as const;
type StatusKey = keyof typeof STATUS_CLS;

// ─── Menu list-row card (ClientMenuManagement) ───────────────────
function MenuListCard({ withTimeSale = false }: { withTimeSale?: boolean }) {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);
  const status: StatusKey = active ? 'active' : 'inactive';
  const badges: BadgeKey[] = ['popular', 'recommended'];

  return (
    <div className="border border-slate-200 rounded-[8px] overflow-hidden">
      {/* Row */}
      <div className="flex items-center gap-3 p-3 hover:bg-slate-50/50">
        {/* Drag handle */}
        <GripVertical size={14} className="text-slate-300 shrink-0 cursor-grab" />
        {/* Thumbnail */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1718777791262-c66d11baaa3b?w=80&q=70"
          alt="메뉴"
          className="w-10 h-10 rounded-[4px] object-cover shrink-0 border border-slate-100"
        />
        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-sm font-medium text-slate-800 truncate">불고기 정식</span>
            {badges.map((b) => {
              const cfg = BADGE_CONFIG[b];
              return (
                <span key={b} className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium ${cfg.cls}`}>
                  <cfg.icon size={9} />{cfg.label}
                </span>
              );
            })}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-slate-500">한식</span>
            <span className="text-slate-200">·</span>
            <span className="text-xs font-medium text-slate-700">12,000원</span>
            {withTimeSale && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[3px] text-[10px] font-semibold bg-red-500 text-white animate-pulse">
                <Timer size={9} />LIVE
              </span>
            )}
          </div>
        </div>
        {/* Status + toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <span className={`hidden sm:inline-flex items-center px-2 py-0.5 rounded-[4px] text-[11px] font-medium ${STATUS_CLS[status]}`}>
            {STATUS_LABEL[status]}
          </span>
          <Toggle size="sm" checked={active} onChange={setActive} />
          <button
            onClick={() => setOpen(!open)}
            className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-[4px]"
          >
            {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </div>

      {/* Expanded detail */}
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 bg-slate-50">
          <p className="text-xs text-slate-500">부드럽고 달콤한 불고기와 제철 반찬으로 구성된 한 상 정식</p>
          {withTimeSale && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[11px] text-slate-400">런치 특가</span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[3px] text-[10px] font-semibold bg-red-500 text-white animate-pulse">
                <Timer size={9} />LIVE
              </span>
              <span className="text-[11px] text-red-500 font-semibold">-20%</span>
              <span className="text-[11px] text-slate-400">11:00–14:00 · 월~금</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Menu board card (ClientMenuBoard) ───────────────────────────
function MenuBoardCard({ soldout = false }: { soldout?: boolean }) {
  const badges: BadgeKey[] = ['popular'];
  return (
    <div className={`bg-white border rounded-[8px] overflow-hidden transition-all ${soldout ? 'opacity-60 border-slate-200' : 'border-slate-200 hover:shadow-sm'}`}>
      <div className="relative">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1718777791262-c66d11baaa3b?w=300&q=70"
          alt="메뉴"
          className="w-full h-28 object-cover"
        />
        {soldout && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="px-2 py-1 bg-black/70 text-white text-xs font-semibold rounded-[4px]">품절</span>
          </div>
        )}
        <div className="absolute top-2 left-2 flex gap-1">
          {badges.map((b) => {
            const cfg = BADGE_CONFIG[b];
            return (
              <span key={b} className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium ${cfg.cls}`}>
                <cfg.icon size={9} />{cfg.label}
              </span>
            );
          })}
        </div>
        <button className="absolute top-2 right-2 p-1 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors">
          <Eye size={12} />
        </button>
      </div>
      <div className="p-3">
        <div className="text-sm font-medium text-slate-800 truncate">불고기 정식</div>
        <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">부드럽고 달콤한 불고기 한 상 정식</div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-semibold text-slate-800">12,000원</span>
          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[3px] text-[10px] font-semibold bg-red-500 text-white animate-pulse">
            <Timer size={9} />LIVE
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Event banner card ────────────────────────────────────────────
function EventBannerCard() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-[8px] p-4 flex items-center gap-4">
      <div className="p-2.5 bg-amber-100 rounded-[8px] shrink-0">
        <Star size={20} className="text-amber-500" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-800">영수증 인증 이벤트</span>
          <Tag color="warning" size="sm">이벤트</Tag>
        </div>
        <p className="text-xs text-slate-500 mt-0.5">SNS 영수증 인증 시 다음 방문 음료 1잔 무료</p>
      </div>
    </div>
  );
}

// ─── Stock bar (limited qty) ──────────────────────────────────────
function LimitedStockBar({ remaining, total }: { remaining: number; total: number }) {
  const pct = (remaining / total) * 100;
  const isLow = pct < 30;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${isLow ? 'bg-red-400' : 'bg-emerald-400'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`text-[11px] font-medium ${isLow ? 'text-red-500' : 'text-slate-500'}`}>
        {remaining}/{total}
      </span>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────
export function ClientMenuCardGuide() {
  const [view, setView] = useState<'list' | 'board' | 'event'>('list');

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-slate-800">메뉴 카드 패턴</h1>
        <p className="text-sm text-slate-500 mt-1">
          메뉴 관리 화면과 메뉴판 화면에서 사용되는 카드 레이아웃 패턴입니다.
        </p>
      </div>

      {/* Tab nav */}
      <div className="flex gap-1 bg-slate-100 rounded-[6px] p-1 w-fit">
        {([['list', '목록 행 카드'], ['board', '메뉴판 카드'], ['event', '이벤트 배너']] as const).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setView(key)}
            className={`px-3 py-1.5 text-xs rounded-[4px] transition-colors font-medium ${
              view === key ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── 목록 행 카드 ─────────────────────────── */}
      {view === 'list' && (
        <Section title="메뉴 목록 행 카드" desc="드래그 정렬 핸들 + 썸네일 + 정보 + 토글로 구성 (ClientMenuManagement)">
          <div className="space-y-3">
            <div>
              <p className="text-xs text-slate-400 mb-1.5">기본 (타임세일 없음)</p>
              <MenuListCard withTimeSale={false} />
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1.5">타임세일 LIVE 진행 중</p>
              <MenuListCard withTimeSale={true} />
            </div>
          </div>

          <div className="mt-5 p-4 bg-slate-50 rounded-[6px] border border-slate-200">
            <p className="text-xs font-semibold text-slate-600 mb-2">구성 요소</p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• <span className="font-medium text-slate-700">GripVertical</span> — cursor-grab 드래그 핸들</li>
              <li>• <span className="font-medium text-slate-700">썸네일</span> — w-10 h-10 rounded-[4px] object-cover</li>
              <li>• <span className="font-medium text-slate-700">뱃지</span> — rounded-full pill (BADGE_CONFIG 참조)</li>
              <li>• <span className="font-medium text-slate-700">타임세일 LIVE</span> — animate-pulse bg-red-500</li>
              <li>• <span className="font-medium text-slate-700">Toggle</span> — size="sm" 판매 활성화 스위치</li>
              <li>• <span className="font-medium text-slate-700">Chevron</span> — 상세 펼침/접기</li>
            </ul>
          </div>

          <Code>{`<div className="flex items-center gap-3 p-3 hover:bg-slate-50/50">
  <GripVertical size={14} className="text-slate-300 cursor-grab" />
  <img src={menu.imageUrl} className="w-10 h-10 rounded-[4px] object-cover border border-slate-100" />
  <div className="flex-1 min-w-0">
    <div className="flex items-center gap-1.5">
      <span className="text-sm font-medium text-slate-800">{menu.name}</span>
      {menu.badges.map(b => <BadgeChip key={b} badge={b} />)}
    </div>
    <div className="flex items-center gap-2 mt-0.5">
      <span className="text-xs text-slate-500">{menu.category}</span>
      <span className="text-xs font-medium text-slate-700">
        {menu.price.toLocaleString()}원
      </span>
      {hasLiveTimeSale && <TimeSaleLiveBadge />}
    </div>
  </div>
  <Toggle size="sm" checked={menu.status === 'active'} onChange={...} />
  <ChevronDown size={14} />
</div>`}
          </Code>
        </Section>
      )}

      {/* ── 메뉴판 카드 ─────────────────────────── */}
      {view === 'board' && (
        <Section title="메뉴판 카드" desc="손님에게 보이는 메뉴판 뷰의 카드 레이아웃 (ClientMenuBoard)">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <MenuBoardCard />
            <MenuBoardCard soldout />
            {/* Limited qty example */}
            <div className="bg-white border border-slate-200 rounded-[8px] overflow-hidden hover:shadow-sm transition-all">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760228865341-675704c22a5b?w=300&q=70"
                  alt="비빔밥"
                  className="w-full h-28 object-cover"
                />
                <div className="absolute top-2 left-2 flex gap-1">
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-500 border border-amber-100">
                    <Star size={9} />추천
                  </span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-purple-50 text-purple-500 border border-purple-100">
                    <Zap size={9} />한정수량
                  </span>
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-medium text-slate-800">비빔밥</div>
                <div className="text-xs text-slate-500 mt-0.5 mb-2">싱싱한 나물과 고소한 참기름</div>
                <LimitedStockBar remaining={18} total={30} />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-semibold text-slate-800">9,000원</span>
                  <span className="text-[11px] text-slate-400">잔여 18개</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 p-4 bg-slate-50 rounded-[6px] border border-slate-200">
            <p className="text-xs font-semibold text-slate-600 mb-2">품절 처리</p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• 카드 전체 <span className="font-medium text-slate-700">opacity-60</span></li>
              <li>• 이미지 위 <span className="font-medium text-slate-700">bg-black/40 오버레이 + "품절" 텍스트</span></li>
            </ul>
          </div>

          <Code>{`// 품절 오버레이
<div className="relative">
  <img src={menu.imageUrl} className={\`w-full h-28 object-cover
    \${menu.status === 'soldout' ? 'opacity-60' : ''}\`} />
  {menu.status === 'soldout' && (
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <span className="px-2 py-1 bg-black/70 text-white text-xs font-semibold rounded-[4px]">
        품절
      </span>
    </div>
  )}
</div>

// 한정수량 진행 바
{menu.limitedQty && (
  <div className="flex items-center gap-2">
    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className={\`h-full rounded-full \${isLow ? 'bg-red-400' : 'bg-emerald-400'}\`}
           style={{ width: \`\${pct}%\` }} />
    </div>
    <span className="text-[11px]">잔여 {remaining}개</span>
  </div>
)}`}
          </Code>
        </Section>
      )}

      {/* ── 이벤트 배너 ─────────────────────────── */}
      {view === 'event' && (
        <Section title="이벤트 배너 카드" desc="메뉴 카테고리 안에 포함되는 이벤트 배너 패턴">
          <div className="space-y-3">
            <EventBannerCard />

            {/* Review event card */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 rounded-[8px] p-4 flex items-center gap-4">
              <div className="p-2.5 bg-purple-100 rounded-[8px] shrink-0">
                <Star size={20} className="text-purple-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-800">리뷰 작성 이벤트</span>
                  <Tag color="blue" size="sm">이벤트</Tag>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">리뷰 작성 시 다음 방문 시 음료 무료 제공</p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="flex items-center gap-1 text-[11px] text-emerald-600">
                  <CheckCircle2 size={11} />진행 중
                </span>
                <span className="text-[10px] text-slate-400">~2026.04.30</span>
              </div>
            </div>

            {/* Inactive event */}
            <div className="bg-slate-50 border border-slate-200 rounded-[8px] p-4 flex items-center gap-4 opacity-60">
              <div className="p-2.5 bg-slate-100 rounded-[8px] shrink-0">
                <AlertCircle size={20} className="text-slate-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-600">종료된 이벤트</span>
                  <Tag color="gray" size="sm">비활성</Tag>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">이벤트가 종료되었습니다.</p>
              </div>
            </div>
          </div>

          <div className="mt-5 p-4 bg-slate-50 rounded-[6px] border border-slate-200">
            <p className="text-xs font-semibold text-slate-600 mb-2">구성 규칙</p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• 배경: <span className="font-medium text-slate-700">bg-gradient-to-r</span> + 브랜드 계열 컬러 (amber, purple 등)</li>
              <li>• 아이콘: 배경 컬러 100 + 아이콘 컬러 500, 8px padding, rounded-[8px]</li>
              <li>• 이벤트 Tag: <span className="font-medium text-slate-700">variant="warning" / "info"</span></li>
              <li>• 비활성: 전체 <span className="font-medium text-slate-700">opacity-60</span> + bg-slate-50</li>
            </ul>
          </div>

          <Code>{`<div className="bg-gradient-to-r from-amber-50 to-orange-50
  border border-amber-200 rounded-[8px] p-4 flex items-center gap-4">
  <div className="p-2.5 bg-amber-100 rounded-[8px] shrink-0">
    <Star size={20} className="text-amber-500" />
  </div>
  <div className="flex-1 min-w-0">
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-slate-800">{event.title}</span>
      <Tag color="warning" size="sm">이벤트</Tag>
    </div>
    <p className="text-xs text-slate-500 mt-0.5">{event.description}</p>
  </div>
</div>`}
          </Code>
        </Section>
      )}
    </div>
  );
}