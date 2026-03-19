import {
  Flame, Star, Zap, Ban, Clock, CheckCircle2, AlertCircle, XCircle,
  TrendingDown, Link2, Bell, Check, X as XIcon,
  Store, Timer,
} from 'lucide-react';
import { Tag } from '../../components/ui/Tag';

// ─── Section wrapper ──────────────────────────────────────────────
function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[8px] border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
        {desc && <p className="text-xs text-slate-400 mt-0.5">{desc}</p>}
      </div>
      <div className="p-5 space-y-6">{children}</div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-6">
      <span className="w-32 shrink-0 text-xs text-slate-400 pt-0.5">{label}</span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="bg-slate-900 text-slate-100 text-xs rounded-[6px] p-3 overflow-x-auto">
      <code>{children.trim()}</code>
    </pre>
  );
}

// ─── Menu badge config (matches ClientMenuManagement / ClientMenuBoard) ─
const MENU_BADGES = [
  { key: 'popular',     label: '인기',     icon: Flame, cls: 'bg-red-50 text-red-500 border border-red-100' },
  { key: 'recommended', label: '추천',     icon: Star,  cls: 'bg-amber-50 text-amber-500 border border-amber-100' },
  { key: 'limited',     label: '한정수량', icon: Zap,   cls: 'bg-purple-50 text-purple-500 border border-purple-100' },
] as const;

// ─── Inline badge pill (used in menu cards — NOT Tag component) ───
function MenuBadge({ badge }: { badge: typeof MENU_BADGES[number] }) {
  const Icon = badge.icon;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${badge.cls}`}>
      <Icon size={10} />
      {badge.label}
    </span>
  );
}

// ─── Menu status (active / inactive / soldout) ────────────────────
const MENU_STATUS = [
  { value: 'active',   label: '판매 중', cls: 'bg-emerald-50 text-emerald-700 border border-emerald-100' },
  { value: 'inactive', label: '비활성',  cls: 'bg-slate-100  text-slate-500  border border-slate-200' },
  { value: 'soldout',  label: '품절',    cls: 'bg-red-50     text-red-500    border border-red-100' },
] as const;

function MenuStatusChip({ status }: { status: typeof MENU_STATUS[number] }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-[4px] text-[11px] font-medium ${status.cls}`}>
      {status.label}
    </span>
  );
}

// ─── TimeSale status ──────────────────────────────────────────────
const TIMESALE_STATUS = [
  {
    key: 'live',     label: 'LIVE',    icon: Timer,
    cls: 'bg-red-500 text-white animate-pulse',
    containerCls: 'border border-red-100 bg-red-50',
  },
  {
    key: 'upcoming', label: '예정',    icon: Clock,
    cls: 'bg-slate-500 text-white',
    containerCls: 'border border-slate-200 bg-slate-50',
  },
  {
    key: 'closed',   label: '종료',    icon: Ban,
    cls: 'bg-slate-300 text-slate-600',
    containerCls: 'border border-slate-100 bg-slate-50 opacity-60',
  },
] as const;

// ─── Order status ─────────────────────────────────────────────────
const ORDER_STATUS = [
  { value: 'pending',    label: '신규 주문', icon: Bell,         cardCls: 'border-amber-300  bg-amber-50/30', headerCls: 'bg-amber-500'   },
  { value: 'preparing',  label: '조리 중',   icon: Clock,        cardCls: 'border-blue-300   bg-blue-50/30',  headerCls: 'bg-blue-500'    },
  { value: 'completed',  label: '완료',       icon: Check,        cardCls: 'border-slate-200  bg-white',       headerCls: 'bg-slate-400'   },
  { value: 'cancelled',  label: '취소',       icon: XIcon,        cardCls: 'border-slate-200  bg-slate-50',    headerCls: 'bg-slate-300'   },
] as const;

// ─── Branch status ────────────────────────────────────────────────
const BRANCH_STATUS = [
  { value: 'open',      label: '영업중',  cls: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
  { value: 'preparing', label: '준비중',  cls: 'bg-amber-100   text-amber-700',   dot: 'bg-amber-500'   },
  { value: 'closed',    label: '휴업',    cls: 'bg-slate-100   text-slate-500',   dot: 'bg-slate-400'   },
] as const;

// ─── Inventory status (Tag component) ────────────────────────────
function InventoryStatusRow() {
  return (
    <Row label="재고 수량 상태">
      <Tag color="green" size="sm">충분</Tag>
      <Tag color="amber" size="sm">주의</Tag>
      <Tag color="red"   size="sm"><TrendingDown size={12} />부족</Tag>
    </Row>
  );
}

// ─── Stock progress bar ───────────────────────────────────────────
function StockBar({ pct, low }: { pct: number; low: boolean }) {
  return (
    <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all ${low ? 'bg-red-400' : pct < 150 ? 'bg-amber-400' : 'bg-emerald-400'}`}
        style={{ width: `${Math.min(pct, 100)}%` }}
      />
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────
export function ClientBadgeStatusGuide() {
  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-slate-800">뱃지 · 상태</h1>
        <p className="text-sm text-slate-500 mt-1">
          클라이언트 백오피스에서 사용되는 뱃지, 상태 칩, 진행 바 패턴 모음입니다.
        </p>
      </div>

      {/* ── 메뉴 뱃지 ───────────────────────────────── */}
      <Section title="메뉴 뱃지" desc="메뉴에 붙는 속성 뱃지 — rounded-full pill 형태, BADGE_CONFIG 객체로 중앙 관리">
        <Row label="뱃지 3종">
          {MENU_BADGES.map((b) => <MenuBadge key={b.key} badge={b} />)}
        </Row>
        <Row label="조합 예시">
          <div className="flex items-center gap-1.5">
            <MenuBadge badge={MENU_BADGES[0]} />
            <MenuBadge badge={MENU_BADGES[1]} />
          </div>
          <div className="flex items-center gap-1.5">
            <MenuBadge badge={MENU_BADGES[1]} />
            <MenuBadge badge={MENU_BADGES[2]} />
          </div>
        </Row>
        <Code>{`const BADGE_CONFIG = {
  popular:     { label: '인기',     icon: Flame, cls: 'bg-red-50    text-red-500    border border-red-100'    },
  recommended: { label: '추천',     icon: Star,  cls: 'bg-amber-50  text-amber-500  border border-amber-100'  },
  limited:     { label: '한정수량', icon: Zap,   cls: 'bg-purple-50 text-purple-500 border border-purple-100' },
};

// 사용법
{menu.badges.map((b) => {
  const cfg = BADGE_CONFIG[b];
  return (
    <span key={b} className={\`inline-flex items-center gap-1 px-2 py-0.5
      rounded-full text-[11px] font-medium \${cfg.cls}\`}>
      <cfg.icon size={10} />{cfg.label}
    </span>
  );
})}`}
        </Code>
      </Section>

      {/* ── 메뉴 상태 ──────────────────────────────── */}
      <Section title="메뉴 판매 상태" desc="메뉴의 판매 가능 여부를 나타내는 상태 칩 — rounded-[4px] 직사각형">
        <Row label="3가지 상태">
          {MENU_STATUS.map((s) => <MenuStatusChip key={s.value} status={s} />)}
        </Row>
        <div className="grid grid-cols-3 gap-3">
          {MENU_STATUS.map((s) => (
            <div key={s.value} className="p-3 bg-slate-50 rounded-[6px] border border-slate-200">
              <MenuStatusChip status={s} />
              <p className="text-[11px] text-slate-400 mt-2">
                {s.value === 'active'   && '정상 판매 중'}
                {s.value === 'inactive' && '숨김 처리됨 (노출 안 됨)'}
                {s.value === 'soldout'  && '재고 소진 — 주문 불가'}
              </p>
            </div>
          ))}
        </div>
        <Code>{`const STATUS_CLS = {
  active:   'bg-emerald-50 text-emerald-700 border border-emerald-100',
  inactive: 'bg-slate-100  text-slate-500  border border-slate-200',
  soldout:  'bg-red-50     text-red-500    border border-red-100',
};

<span className={\`inline-flex items-center px-2 py-0.5
  rounded-[4px] text-[11px] font-medium \${STATUS_CLS[menu.status]}\`}>
  {STATUS_LABEL[menu.status]}
</span>`}
        </Code>
      </Section>

      {/* ── 타임세일 상태 ──────────────────────────── */}
      <Section title="타임세일 상태 뱃지" desc="오늘 요일·시간 기준으로 실시간 계산되는 타임세일 상태">
        <Row label="3가지 상태">
          {TIMESALE_STATUS.map(({ key, label, icon: Icon, cls }) => (
            <span key={key} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[11px] font-semibold ${cls}`}>
              <Icon size={10} />
              {label}
            </span>
          ))}
        </Row>
        <div className="grid grid-cols-3 gap-3">
          {TIMESALE_STATUS.map(({ key, label, icon: Icon, cls, containerCls }) => (
            <div key={key} className={`p-3 rounded-[6px] border ${containerCls}`}>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[11px] font-semibold ${cls}`}>
                <Icon size={10} />
                {label}
              </span>
              <p className="text-[11px] text-slate-500 mt-2">
                {key === 'live'     && '오늘 요일 + 현재 시간 범위 내'}
                {key === 'upcoming' && '오늘 요일이나 아직 시작 전'}
                {key === 'closed'   && '시간 초과 또는 오늘 미해당'}
              </p>
            </div>
          ))}
        </div>
        <Code>{`function getTimeSaleStatus(ts): 'live' | 'closed' | 'upcoming' {
  const now = new Date();
  const todayLabel = ['일','월','화','수','목','금','토'][now.getDay()];
  if (!ts.days.includes(todayLabel)) return 'upcoming';
  const nowMins = now.getHours() * 60 + now.getMinutes();
  const [sh, sm] = ts.startTime.split(':').map(Number);
  const [eh, em] = ts.endTime.split(':').map(Number);
  if (nowMins < sh * 60 + sm) return 'upcoming';
  if (nowMins >= eh * 60 + em) return 'closed';
  return 'live';
}

// LIVE 뱃지에 animate-pulse 적용
{status === 'live' && (
  <span className="inline-flex items-center gap-1 px-2 py-0.5
    rounded-[4px] text-[11px] font-semibold bg-red-500 text-white animate-pulse">
    <Timer size={10} />LIVE
  </span>
)}`}
        </Code>
      </Section>

      {/* ── 주문 상태 ──────────────────────────────── */}
      <Section title="주문 상태" desc="실시간 주문 칸반 카드의 상태별 색상 체계">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {ORDER_STATUS.map(({ value, label, icon: Icon, cardCls, headerCls }) => (
            <div key={value} className={`border rounded-[8px] overflow-hidden ${cardCls}`}>
              <div className={`flex items-center gap-2 px-3 py-2 text-white text-xs font-semibold ${headerCls}`}>
                <Icon size={13} />
                {label}
              </div>
              <div className="p-3 text-xs text-slate-500">
                <div className="text-slate-700 font-medium">ORD-2026-0001</div>
                <div className="mt-1 text-slate-400">테이블 3 · 2만 5천원</div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {ORDER_STATUS.map(({ value, label, cardCls }) => (
            <div key={value} className="text-center">
              <div className={`h-1.5 rounded-full mb-1.5 ${cardCls.split(' ')[0].replace('border-', 'bg-')}`} />
              <span className="text-[11px] text-slate-500">{label}</span>
            </div>
          ))}
        </div>
        <Code>{`const STATUS_CONFIG = {
  pending:   { label: '신규 주문', headerCls: 'bg-amber-500',  cardCls: 'border-amber-300 bg-amber-50/30'  },
  preparing: { label: '조리 중',   headerCls: 'bg-blue-500',   cardCls: 'border-blue-300  bg-blue-50/30'   },
  completed: { label: '완료',       headerCls: 'bg-slate-400',  cardCls: 'border-slate-200 bg-white'         },
  cancelled: { label: '취소',       headerCls: 'bg-slate-300',  cardCls: 'border-slate-200 bg-slate-50'      },
};

<div className={\`border rounded-[8px] overflow-hidden \${STATUS_CONFIG[order.status].cardCls}\`}>
  <div className={\`flex items-center gap-2 px-3 py-2 text-white text-xs font-semibold
    \${STATUS_CONFIG[order.status].headerCls}\`}>
    <StatusIcon size={13} />{STATUS_CONFIG[order.status].label}
  </div>
  ...
</div>`}
        </Code>
      </Section>

      {/* ── 매장 영업 상태 ─────────────────────────── */}
      <Section title="매장 영업 상태" desc="매장 목록 카드 헤더에 표시되는 영업 상태 뱃지">
        <Row label="3가지 상태">
          {BRANCH_STATUS.map((s) => (
            <span key={s.value} className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[3px] text-[10px] font-semibold ${s.cls}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
              {s.label}
            </span>
          ))}
        </Row>
        <Code>{`const BRANCH_STATUS = {
  open:      { label: '영업중', cls: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
  preparing: { label: '준비중', cls: 'bg-amber-100   text-amber-700',   dot: 'bg-amber-500'   },
  closed:    { label: '휴업',   cls: 'bg-slate-100   text-slate-500',   dot: 'bg-slate-400'   },
};

<span className={\`inline-flex items-center gap-1.5 px-2 py-0.5
  rounded-[3px] text-[10px] font-semibold \${BRANCH_STATUS[branch.status].cls}\`}>
  <span className={\`w-1.5 h-1.5 rounded-full \${BRANCH_STATUS[branch.status].dot}\`} />
  {BRANCH_STATUS[branch.status].label}
</span>`}
        </Code>
      </Section>

      {/* ── 재고 상태 ──────────────────────────────── */}
      <Section title="재고 상태" desc="Tag 컴포넌트 기반 — 수량 기준 3단계 + 진행 바">
        <InventoryStatusRow />

        <div className="space-y-2 mt-2">
          {[
            { label: '쌀',            current: 50, min: 20 },
            { label: '돼지고기',      current: 15, min: 10 },
            { label: '김치',          current: 5,  min: 10 },
            { label: '당근',          current: 2,  min: 5  },
          ].map((item) => {
            const pct = (item.current / item.min) * 100;
            const isLow = item.current < item.min;
            const isWarn = !isLow && pct < 150;
            return (
              <div key={item.label} className="flex items-center gap-4 p-2.5 bg-slate-50 rounded-[6px]">
                <span className="text-xs text-slate-700 w-20 shrink-0">{item.label}</span>
                <StockBar pct={Math.min(pct, 100)} low={isLow} />
                <span className="text-xs text-slate-500 w-16">{item.current} / {item.min}</span>
                {isLow  && <Tag color="red"   size="sm"><TrendingDown size={12} />부족</Tag>}
                {isWarn && <Tag color="amber" size="sm">주의</Tag>}
                {!isLow && !isWarn && <Tag color="green" size="sm">충분</Tag>}
              </div>
            );
          })}
        </div>

        <Code>{`function getStockTag(item) {
  const isLow = item.currentStock < item.minStock;
  const pct   = (item.currentStock / item.minStock) * 100;
  if (isLow)      return <Tag color="red"   size="sm"><TrendingDown size={12} />부족</Tag>;
  if (pct < 150)  return <Tag color="amber" size="sm">주의</Tag>;
  return           <Tag color="green" size="sm">충분</Tag>;
}

// 재고 진행 바
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
  <div className={\`h-full rounded-full \${
    isLow ? 'bg-red-400' : pct < 150 ? 'bg-amber-400' : 'bg-emerald-400'
  }\`} style={{ width: \`\${Math.min(pct, 100)}%\` }} />
</div>`}
        </Code>
      </Section>

      {/* ── 메뉴판 연결 표시 ─────────────────────── */}
      <Section title="재고 연결 뱃지" desc="재고 관리에서 메뉴와 식재료 연결 여부를 표시하는 인라인 뱃지">
        <Row label="연결 있음">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[3px] text-[11px] bg-blue-50 text-blue-600 border border-blue-100">
            <Link2 size={10} />쌀
          </span>
        </Row>
        <Row label="연결 없음">
          <span className="text-xs text-slate-300">—</span>
        </Row>
        <Code>{`{item.linkedIngredient ? (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[3px]
    text-[11px] bg-blue-50 text-blue-600 border border-blue-100">
    <Link2 size={10} />{item.linkedIngredient}
  </span>
) : (
  <span className="text-xs text-slate-300">—</span>
)}`}
        </Code>
      </Section>
    </div>
  );
}