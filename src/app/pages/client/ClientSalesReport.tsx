import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell,
} from 'recharts';
import { TrendingUp, TrendingDown, ShoppingBag, Users, CreditCard, ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { DropdownSelect } from '../../components/ui/DropdownSelect';

// ─── Mock data ───────────────────────────────────────────────────
const DAILY_DATA = [
  { label: '09시', revenue: 145000, orders: 12 },
  { label: '10시', revenue: 280000, orders: 23 },
  { label: '11시', revenue: 520000, orders: 41 },
  { label: '12시', revenue: 890000, orders: 74 },
  { label: '13시', revenue: 730000, orders: 58 },
  { label: '14시', revenue: 310000, orders: 26 },
  { label: '15시', revenue: 190000, orders: 16 },
  { label: '16시', revenue: 160000, orders: 13 },
  { label: '17시', revenue: 420000, orders: 35 },
  { label: '18시', revenue: 680000, orders: 54 },
  { label: '19시', revenue: 750000, orders: 62 },
  { label: '20시', revenue: 640000, orders: 51 },
  { label: '21시', revenue: 380000, orders: 30 },
];

const WEEKLY_DATA = [
  { label: '월', revenue: 3240000, orders: 152 },
  { label: '화', revenue: 2980000, orders: 138 },
  { label: '수', revenue: 3560000, orders: 171 },
  { label: '목', revenue: 3120000, orders: 148 },
  { label: '금', revenue: 4280000, orders: 209 },
  { label: '토', revenue: 5640000, orders: 287 },
  { label: '일', revenue: 4910000, orders: 246 },
];

const MONTHLY_DATA = [
  { label: '1월', revenue: 48200000, orders: 2340 },
  { label: '2월', revenue: 43500000, orders: 2150 },
  { label: '3월', revenue: 52800000, orders: 2690 },
  { label: '4월', revenue: 55100000, orders: 2810 },
  { label: '5월', revenue: 61300000, orders: 3120 },
  { label: '6월', revenue: 58900000, orders: 2980 },
  { label: '7월', revenue: 67400000, orders: 3380 },
  { label: '8월', revenue: 65800000, orders: 3290 },
  { label: '9월', revenue: 59200000, orders: 2960 },
  { label: '10월', revenue: 63100000, orders: 3150 },
  { label: '11월', revenue: 57400000, orders: 2870 },
  { label: '12월', revenue: 71200000, orders: 3560 },
];

const PAYMENT_DATA = [
  { name: '카드', value: 68, color: '#FF6B2B' },
  { name: '현금', value: 12, color: '#94A3B8' },
  { name: '카카오페이', value: 11, color: '#F59E0B' },
  { name: '네이버페이', value: 6, color: '#10B981' },
  { name: '기타', value: 3, color: '#8B5CF6' },
];

const TOP_MENUS = [
  { rank: 1, name: '불고기 정식', count: 342, revenue: 4104000, pct: 100 },
  { rank: 2, name: '비빔밥', count: 298, revenue: 2682000, pct: 87 },
  { rank: 3, name: '돈까스', count: 241, revenue: 2410000, pct: 70 },
  { rank: 4, name: '김치찌개', count: 218, revenue: 1744000, pct: 64 },
  { rank: 5, name: '제육볶음', count: 187, revenue: 2057000, pct: 55 },
];

type Period = 'daily' | 'weekly' | 'monthly';

const PERIOD_CONFIG: Record<Period, {
  label: string; data: typeof DAILY_DATA;
  totalRevenue: number; totalOrders: number;
  prevRevenue: number; prevOrders: number;
}> = {
  daily: {
    label: '오늘',
    data: DAILY_DATA,
    totalRevenue: DAILY_DATA.reduce((s, d) => s + d.revenue, 0),
    totalOrders: DAILY_DATA.reduce((s, d) => s + d.orders, 0),
    prevRevenue: 4120000,
    prevOrders: 201,
  },
  weekly: {
    label: '이번 주',
    data: WEEKLY_DATA,
    totalRevenue: WEEKLY_DATA.reduce((s, d) => s + d.revenue, 0),
    totalOrders: WEEKLY_DATA.reduce((s, d) => s + d.orders, 0),
    prevRevenue: 26100000,
    prevOrders: 1285,
  },
  monthly: {
    label: '이번 달',
    data: MONTHLY_DATA,
    totalRevenue: 52800000,
    totalOrders: 2690,
    prevRevenue: 43500000,
    prevOrders: 2150,
  },
};

function fmtKRW(n: number) {
  if (n >= 100000000) return `₩${(n / 100000000).toFixed(1)}억`;
  if (n >= 10000) return `₩${(n / 10000).toFixed(0)}만`;
  return `₩${n.toLocaleString()}`;
}

function DiffBadge({ current, prev }: { current: number; prev: number }) {
  const diff = ((current - prev) / prev) * 100;
  const up = diff >= 0;
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${up ? 'text-emerald-600' : 'text-red-500'}`}>
      {up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
      {Math.abs(diff).toFixed(1)}%
    </span>
  );
}

const formatRevenue = (v: number) => {
  if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
  if (v >= 1000) return `${(v / 1000).toFixed(0)}K`;
  return String(v);
};

// ─── Main ────────────────────────────────────────────────────────
export function ClientSalesReport() {
  const [period, setPeriod] = useState<Period>('daily');
  const [chartType, setChartType] = useState<'revenue' | 'orders'>('revenue');
  const cfg = PERIOD_CONFIG[period];

  const avgOrder = cfg.totalOrders > 0 ? Math.round(cfg.totalRevenue / cfg.totalOrders) : 0;

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">매출 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">매출 현황</span>
      </nav>

      {/* Period selector + actions */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1 bg-white border border-slate-200 rounded-[6px] p-1">
          {(['daily', 'weekly', 'monthly'] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3.5 py-1.5 rounded-[4px] text-sm font-medium transition-colors ${
                period === p ? 'bg-[#FF6B2B] text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {p === 'daily' ? '일별' : p === 'weekly' ? '주별' : '월별'}
            </button>
          ))}
        </div>
        <Button variant="outline" size="sm" leftIcon={<Download size={13} />}>
          <span className="hidden sm:inline">엑셀 다운로드</span>
          <span className="sm:hidden">다운로드</span>
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Total Revenue */}
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-orange-50 rounded-[6px]">
              <TrendingUp size={16} className="text-[#FF6B2B]" />
            </div>
            <DiffBadge current={cfg.totalRevenue} prev={cfg.prevRevenue} />
          </div>
          <div className="text-xl md:text-2xl font-bold text-slate-800 mb-0.5">{fmtKRW(cfg.totalRevenue)}</div>
          <div className="text-xs text-slate-400">{cfg.label} 매출</div>
        </div>

        {/* Orders */}
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-blue-50 rounded-[6px]">
              <ShoppingBag size={16} className="text-blue-500" />
            </div>
            <DiffBadge current={cfg.totalOrders} prev={cfg.prevOrders} />
          </div>
          <div className="text-xl md:text-2xl font-bold text-slate-800 mb-0.5">{cfg.totalOrders.toLocaleString()}</div>
          <div className="text-xs text-slate-400">{cfg.label} 주문</div>
        </div>

        {/* Avg order */}
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-emerald-50 rounded-[6px]">
              <Users size={16} className="text-emerald-500" />
            </div>
            <span className="text-xs text-slate-400">객단가</span>
          </div>
          <div className="text-xl md:text-2xl font-bold text-slate-800 mb-0.5">₩{avgOrder.toLocaleString()}</div>
          <div className="text-xs text-slate-400">주문당 평균</div>
        </div>

        {/* Card payment */}
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-purple-50 rounded-[6px]">
              <CreditCard size={16} className="text-purple-500" />
            </div>
            <span className="text-xs text-slate-400">카드 비율</span>
          </div>
          <div className="text-xl md:text-2xl font-bold text-slate-800 mb-0.5">68%</div>
          <div className="text-xs text-slate-400">신용/체크카드</div>
        </div>
      </div>

      {/* Chart + Payment */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Bar chart */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[6px] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200">
            <h3 className="text-sm font-medium text-slate-800">
              {cfg.label} {period === 'monthly' ? '12개월' : ''} 현황
            </h3>
            <div className="flex gap-1 bg-slate-50 border border-slate-200 rounded-[4px] p-0.5">
              <button
                onClick={() => setChartType('revenue')}
                className={`px-2.5 py-1 rounded-[3px] text-xs font-medium transition-colors ${
                  chartType === 'revenue' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                매출
              </button>
              <button
                onClick={() => setChartType('orders')}
                className={`px-2.5 py-1 rounded-[3px] text-xs font-medium transition-colors ${
                  chartType === 'orders' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                주문
              </button>
            </div>
          </div>
          <div className="p-4 md:p-5">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart key={`bar-${period}-${chartType}`} data={cfg.data} barSize={period === 'monthly' ? 18 : 24}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={chartType === 'revenue' ? formatRevenue : undefined} width={40} />
                <Tooltip
                  contentStyle={{ fontSize: 12, borderRadius: 6, border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
                  formatter={(val: number) => chartType === 'revenue' ? [`₩${val.toLocaleString()}`, '매출'] : [`${val}건`, '주문']}
                />
                <Bar dataKey={chartType} fill="#FF6B2B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payment breakdown */}
        <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-200">
            <h3 className="text-sm font-medium text-slate-800">결제 수단</h3>
          </div>
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie data={PAYMENT_DATA} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" paddingAngle={2}>
                    {PAYMENT_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ fontSize: 12, borderRadius: 6, border: '1px solid #E2E8F0' }}
                    formatter={(val: number) => [`${val}%`, '']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {PAYMENT_DATA.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-slate-600 flex-1">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                    </div>
                    <span className="text-xs font-medium text-slate-700 w-8 text-right">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top menus + Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top menus */}
        <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-200">
            <h3 className="text-sm font-medium text-slate-800">인기 메뉴 TOP 5</h3>
          </div>
          <div className="p-4 space-y-3">
            {TOP_MENUS.map((menu) => (
              <div key={menu.rank} className="flex items-center gap-3">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                  menu.rank === 1 ? 'bg-amber-100 text-amber-700' :
                  menu.rank === 2 ? 'bg-slate-100 text-slate-500' :
                  menu.rank === 3 ? 'bg-orange-100 text-orange-600' :
                  'bg-slate-50 text-slate-400'
                }`}>
                  {menu.rank}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700 truncate">{menu.name}</span>
                    <span className="text-xs text-slate-500 ml-2 shrink-0">{menu.count}건</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FF6B2B] rounded-full opacity-80 transition-all"
                      style={{ width: `${menu.pct}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-600 shrink-0 hidden sm:block">
                  {fmtKRW(menu.revenue)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Line trend (3개월) */}
        <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200">
            <h3 className="text-sm font-medium text-slate-800">3개월 매출 추이</h3>
            <span className="text-xs text-slate-400">1월 ~ 3월</span>
          </div>
          <div className="p-4 md:p-5">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={MONTHLY_DATA.slice(0, 3)}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={formatRevenue} width={40} />
                <Tooltip
                  contentStyle={{ fontSize: 12, borderRadius: 6, border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
                  formatter={(val: number) => [`₩${val.toLocaleString()}`, '매출']}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#FF6B2B"
                  strokeWidth={2}
                  dot={{ fill: '#FF6B2B', r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Hourly detail table (daily only) */}
      {period === 'daily' && (
        <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-200">
            <h3 className="text-sm font-medium text-slate-800">시간대별 상세</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500">시간대</th>
                  <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-500">매출</th>
                  <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-500">주문수</th>
                  <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-500">객단가</th>
                  <th className="px-4 py-2.5 text-xs font-medium text-slate-500">비율</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {DAILY_DATA.map((row) => {
                  const maxRev = Math.max(...DAILY_DATA.map((d) => d.revenue));
                  const pct = (row.revenue / maxRev) * 100;
                  return (
                    <tr key={row.label} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-2.5 text-slate-600">{row.label}</td>
                      <td className="px-4 py-2.5 text-right font-medium text-slate-800">₩{row.revenue.toLocaleString()}</td>
                      <td className="px-4 py-2.5 text-right text-slate-600">{row.orders}건</td>
                      <td className="px-4 py-2.5 text-right text-slate-500">₩{Math.round(row.revenue / row.orders).toLocaleString()}</td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#FF6B2B] rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-xs text-slate-400 w-8 text-right">{pct.toFixed(0)}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-slate-50 border-t border-slate-200">
                  <td className="px-4 py-2.5 text-xs font-semibold text-slate-600">합계</td>
                  <td className="px-4 py-2.5 text-right text-sm font-bold text-slate-800">₩{cfg.totalRevenue.toLocaleString()}</td>
                  <td className="px-4 py-2.5 text-right text-sm font-bold text-slate-800">{cfg.totalOrders}건</td>
                  <td className="px-4 py-2.5 text-right text-xs font-medium text-slate-500">₩{avgOrder.toLocaleString()}</td>
                  <td className="px-4 py-2.5" />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}