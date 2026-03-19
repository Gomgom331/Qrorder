import { useState } from 'react';
import {
  Bell, Clock, Check, TrendingUp, TrendingDown,
  ShoppingBag, Users, CreditCard, Store,
  ArrowUpRight, ArrowDownRight, AlertCircle,
} from 'lucide-react';

// ─── Section wrapper ──────────────────────────────────────────────
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

// ─── CodeBlock ────────────────────────────────────────────────────
function Code({ children }: { children: string }) {
  return (
    <pre className="mt-4 bg-slate-900 text-slate-100 text-xs rounded-[6px] p-3 overflow-x-auto">
      <code>{children.trim()}</code>
    </pre>
  );
}

// ─── Gradient stat card data ──────────────────────────────────────
const GRADIENT_CARDS = [
  { label: '신규 주문',  value: 8,  icon: Bell,  gradient: 'from-amber-500 to-orange-600',  desc: 'pending 상태 주문 수' },
  { label: '조리 중',   value: 5,  icon: Clock, gradient: 'from-blue-500 to-blue-600',     desc: 'preparing 상태 주문 수' },
  { label: '오늘 완료', value: 152, icon: Check, gradient: 'from-emerald-500 to-emerald-600', desc: 'completed 주문 누계' },
];

// ─── KPI comparison cards ─────────────────────────────────────────
const KPI_CARDS = [
  {
    label: '오늘 매출', value: '4,097,000원', change: +12.4, icon: CreditCard,
    color: 'text-[#FF6B2B]', bg: 'bg-orange-50',
  },
  {
    label: '오늘 주문', value: '152건', change: +8.1, icon: ShoppingBag,
    color: 'text-blue-500', bg: 'bg-blue-50',
  },
  {
    label: '방문 고객', value: '217명', change: -3.2, icon: Users,
    color: 'text-purple-500', bg: 'bg-purple-50',
  },
  {
    label: '평균 객단가', value: '26,940원', change: +4.6, icon: TrendingUp,
    color: 'text-emerald-500', bg: 'bg-emerald-50',
  },
];

// ─── Branch summary card ──────────────────────────────────────────
function BranchSummaryCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-[8px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-[#FF6B2B]/10 rounded-[6px]">
            <Store size={16} className="text-[#FF6B2B]" />
          </div>
          <div>
            <span className="text-sm font-semibold text-slate-800">홍대 본점</span>
            <span className="ml-2 px-1.5 py-0.5 text-[10px] font-semibold rounded-[3px] bg-emerald-100 text-emerald-700">영업중</span>
          </div>
        </div>
        <span className="text-xs text-slate-400">10:00 – 22:00</span>
      </div>
      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
        {[
          { label: '오늘 매출',  value: '4,097,000원', sub: '↑12.4%', positive: true },
          { label: '오늘 주문',  value: '152건',        sub: '↑8.1%',  positive: true },
          { label: '테이블 점유', value: '4 / 10',      sub: '40%',    positive: null },
          { label: '재고 부족', value: '2개',           sub: '확인 필요', positive: false },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3">
            <div className="text-xs text-slate-400 mb-0.5">{s.label}</div>
            <div className="text-sm font-semibold text-slate-800">{s.value}</div>
            <div className={`text-[11px] mt-0.5 flex items-center gap-0.5 ${
              s.positive === true  ? 'text-emerald-600' :
              s.positive === false ? 'text-red-500' :
              'text-slate-400'
            }`}>
              {s.positive === true && <ArrowUpRight size={11} />}
              {s.positive === false && <ArrowDownRight size={11} />}
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────
export function ClientStatCardGuide() {
  const [activeTab, setActiveTab] = useState<'gradient' | 'kpi' | 'branch'>('gradient');

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-slate-800">통계 KPI 카드</h1>
        <p className="text-sm text-slate-500 mt-1">
          클라이언트 백오피스에서 사용되는 통계·현황 카드 패턴 모음입니다.
        </p>
      </div>

      {/* Tab nav */}
      <div className="flex gap-1 bg-slate-100 rounded-[6px] p-1 w-fit">
        {([['gradient', '그라디언트 카드'], ['kpi', 'KPI 비교 카드'], ['branch', '매장 현황 카드']] as const).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-3 py-1.5 text-xs rounded-[4px] transition-colors font-medium ${
              activeTab === key ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Gradient stat cards ─────────────────────── */}
      {activeTab === 'gradient' && (
        <Section
          title="그라디언트 스탯 카드"
          desc="실시간 주문 화면 상단에 표시되는 상태별 주문 수 요약 카드"
        >
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {GRADIENT_CARDS.map(({ label, value, icon: Icon, gradient, desc: d }) => (
              <div key={label} className={`bg-gradient-to-br ${gradient} rounded-[6px] p-3 md:p-5 text-white`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-white/20 rounded-[6px] shrink-0">
                    <Icon size={16} />
                  </div>
                  <span className="text-xs md:text-sm opacity-90 leading-tight">{label}</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold">{value}</div>
                <div className="text-[11px] opacity-70 mt-1">{d}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: '신규 주문 (주황)', cls: 'from-amber-500 to-orange-600', usage: '접수 대기 중인 주문' },
              { label: '조리 중 (파랑)',   cls: 'from-blue-500 to-blue-600',     usage: '주방에서 준비 중' },
              { label: '오늘 완료 (초록)', cls: 'from-emerald-500 to-emerald-600', usage: '당일 처리 완료 누계' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-3 p-3 bg-slate-50 rounded-[6px] border border-slate-200">
                <div className={`w-10 h-10 rounded-[6px] bg-gradient-to-br ${c.cls} shrink-0`} />
                <div>
                  <div className="text-xs font-medium text-slate-700">{c.label}</div>
                  <div className="text-[11px] text-slate-400">{c.usage}</div>
                </div>
              </div>
            ))}
          </div>

          <Code>{`<div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[6px] p-5 text-white">
  <div className="flex items-center gap-2 mb-2">
    <div className="p-1.5 bg-white/20 rounded-[6px]">
      <Bell size={16} />
    </div>
    <span className="text-sm opacity-90">신규 주문</span>
  </div>
  <div className="text-3xl font-bold">{pendingCount}</div>
</div>`}
          </Code>
        </Section>
      )}

      {/* ── KPI comparison cards ────────────────────── */}
      {activeTab === 'kpi' && (
        <Section
          title="KPI 비교 카드"
          desc="매출 현황 대시보드에서 전일/전주 대비 수치를 표시하는 카드"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {KPI_CARDS.map(({ label, value, change, icon: Icon, color, bg }) => {
              const isPos = change >= 0;
              return (
                <div key={label} className="bg-white border border-slate-200 rounded-[8px] p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-1.5 rounded-[6px] ${bg}`}>
                      <Icon size={15} className={color} />
                    </div>
                    <span className={`flex items-center gap-0.5 text-xs font-medium ${isPos ? 'text-emerald-600' : 'text-red-500'}`}>
                      {isPos ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {isPos ? '+' : ''}{change}%
                    </span>
                  </div>
                  <div className="text-lg font-bold text-slate-800">{value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-slate-50 rounded-[6px] border border-slate-200">
            <p className="text-xs font-semibold text-slate-600 mb-2">구성 요소</p>
            <ul className="text-xs text-slate-500 space-y-1">
              <li>• <span className="font-medium text-slate-700">아이콘 칩</span> — 카테고리 색상의 연한 배경 (bg-*-50) + 짙은 아이콘 (text-*-500)</li>
              <li>• <span className="font-medium text-slate-700">변동률</span> — 양수: emerald-600 + TrendingUp, 음수: red-500 + TrendingDown</li>
              <li>• <span className="font-medium text-slate-700">수치</span> — text-lg font-bold text-slate-800</li>
              <li>• <span className="font-medium text-slate-700">라벨</span> — text-xs text-slate-400</li>
            </ul>
          </div>

          <Code>{`const isPositive = change >= 0;
<div className="bg-white border border-slate-200 rounded-[8px] p-4">
  <div className="flex items-center justify-between mb-3">
    <div className="p-1.5 rounded-[6px] bg-orange-50">
      <CreditCard size={15} className="text-[#FF6B2B]" />
    </div>
    <span className={\`flex items-center gap-0.5 text-xs font-medium
      \${isPositive ? 'text-emerald-600' : 'text-red-500'}\`}>
      {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
      {isPositive ? '+' : ''}{change}%
    </span>
  </div>
  <div className="text-lg font-bold text-slate-800">{value}</div>
  <div className="text-xs text-slate-400 mt-0.5">{label}</div>
</div>`}
          </Code>
        </Section>
      )}

      {/* ── Branch summary card ─────────────────────── */}
      {activeTab === 'branch' && (
        <Section
          title="매장 현황 카드"
          desc="매장 목록 화면에서 각 지점의 요약 정보를 표시하는 카드 레이아웃"
        >
          <BranchSummaryCard />

          <div className="mt-6 p-4 bg-slate-50 rounded-[6px] border border-slate-200">
            <p className="text-xs font-semibold text-slate-600 mb-2">변동 지시자 규칙</p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="flex items-center gap-1 text-emerald-600"><ArrowUpRight size={13} /> 양의 변화 (매출·주문 증가)</span>
              <span className="flex items-center gap-1 text-red-500"><ArrowDownRight size={13} /> 음의 변화 (재고 부족 등 주의)</span>
              <span className="flex items-center gap-1 text-slate-400">— 중립 (단순 현황 수치)</span>
              <span className="flex items-center gap-1 text-amber-600"><AlertCircle size={13} /> 경고 (즉각 조치 필요)</span>
            </div>
          </div>

          <Code>{`<div className="bg-white border border-slate-200 rounded-[8px] overflow-hidden">
  {/* 헤더 */}
  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
    <div className="flex items-center gap-2.5">
      <div className="p-1.5 bg-[#FF6B2B]/10 rounded-[6px]">
        <Store size={16} className="text-[#FF6B2B]" />
      </div>
      <span className="text-sm font-semibold text-slate-800">홍대 본점</span>
      <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded-[3px]
        bg-emerald-100 text-emerald-700">영업중</span>
    </div>
    <span className="text-xs text-slate-400">10:00 – 22:00</span>
  </div>
  {/* 지표 그리드 */}
  <div className="grid grid-cols-4 divide-x divide-slate-100">
    {stats.map(stat => (
      <div key={stat.label} className="px-4 py-3">
        <div className="text-xs text-slate-400 mb-0.5">{stat.label}</div>
        <div className="text-sm font-semibold text-slate-800">{stat.value}</div>
      </div>
    ))}
  </div>
</div>`}
          </Code>
        </Section>
      )}
    </div>
  );
}
