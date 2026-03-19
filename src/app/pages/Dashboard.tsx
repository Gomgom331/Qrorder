import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { useId } from 'react';
import {
  ShoppingBag,
  TrendingUp,
  QrCode,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const weeklyData = [
  { day: '월', orders: 142, revenue: 2840000 },
  { day: '화', orders: 198, revenue: 3960000 },
  { day: '수', orders: 176, revenue: 3520000 },
  { day: '목', orders: 224, revenue: 4480000 },
  { day: '금', orders: 312, revenue: 6240000 },
  { day: '토', orders: 398, revenue: 7960000 },
  { day: '일', orders: 356, revenue: 7120000 },
];

const recentOrders = [
  { id: 'ORD-2026-0892', store: '스마트버거 강남점', table: 'T-03', items: '버거 세트 외 2건', amount: 28500, status: 'completed', time: '14:32' },
  { id: 'ORD-2026-0891', store: '맛나치킨 홍대점', table: 'T-07', items: '치킨 반마리 외 1건', amount: 19000, status: 'preparing', time: '14:29' },
  { id: 'ORD-2026-0890', store: '청담 파인다이닝', table: 'T-01', items: '코스 메뉴 A', amount: 85000, status: 'waiting', time: '14:25' },
  { id: 'ORD-2026-0889', store: '더맛집 삼겹살', table: 'T-05', items: '삼겹살 2인분 외 3건', amount: 42000, status: 'completed', time: '14:18' },
  { id: 'ORD-2026-0888', store: '미식가 일식', table: 'T-02', items: '스시 세트 외 1건', amount: 56000, status: 'completed', time: '14:12' },
  { id: 'ORD-2026-0887', store: '스마트버거 신촌점', table: 'T-09', items: '더블 버거 세트', amount: 15500, status: 'cancelled', time: '14:05' },
];

const statusMap = {
  waiting:   { label: '대기중', color: 'bg-amber-100 text-amber-700',   icon: Clock },
  preparing: { label: '준비중', color: 'bg-blue-100 text-blue-700',     icon: AlertCircle },
  completed: { label: '완료',   color: 'bg-emerald-100 text-emerald-700', icon: CheckCircle2 },
  cancelled: { label: '취소',   color: 'bg-red-100 text-red-600',       icon: AlertCircle },
};

const statCards = [
  { label: '오늘 총 주문', value: '1,806',      unit: '건', change: '+12.4%', up: true,  icon: ShoppingBag, color: 'text-[#FF6B2B]',    bg: 'bg-[#FF6B2B]/10' },
  { label: '오늘 매출',    value: '36,120,000', unit: '원', change: '+8.7%',  up: true,  icon: TrendingUp,  color: 'text-emerald-600',  bg: 'bg-emerald-50' },
  { label: '활성 매장',    value: '48',          unit: '개', change: '+3',     up: true,  icon: Building2,   color: 'text-purple-600',   bg: 'bg-purple-50' },
  { label: 'QR 스캔',     value: '3,241',       unit: '회', change: '-2.1%',  up: false, icon: QrCode,      color: 'text-blue-500',     bg: 'bg-blue-50' },
];

// ── Isolated chart components to prevent Recharts internal SVG key collisions ──

function OrdersBarChart() {
  const uid = useId().replace(/:/g, 'x');
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={weeklyData} barSize={24}>
        <CartesianGrid key={`${uid}-grid`} strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
        <XAxis key={`${uid}-xaxis`} dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
        <YAxis key={`${uid}-yaxis`} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94A3B8' }} />
        <Tooltip
          key={`${uid}-tooltip`}
          contentStyle={{ borderRadius: '4px', border: '1px solid #E2E8F0', fontSize: '12px', padding: '8px 12px' }}
          cursor={{ fill: '#F8FAFC' }}
          formatter={(v: number) => [`${v.toLocaleString()}건`, '주문']}
        />
        <Bar key={`${uid}-bar`} dataKey="orders" name="주문" fill="#FF6B2B" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function RevenueLineChart() {
  const uid = useId().replace(/:/g, 'x');
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={weeklyData}>
        <CartesianGrid key={`${uid}-grid`} strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
        <XAxis key={`${uid}-xaxis`} dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
        <YAxis
          key={`${uid}-yaxis`}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 11, fill: '#94A3B8' }}
          tickFormatter={(v) => `${(v / 10000).toFixed(0)}`}
        />
        <Tooltip
          key={`${uid}-tooltip`}
          contentStyle={{ borderRadius: '4px', border: '1px solid #E2E8F0', fontSize: '12px', padding: '8px 12px' }}
          formatter={(v: number) => [`${(v / 10000).toLocaleString()}만원`, '매출']}
        />
        <Line
          key={`${uid}-line`}
          type="monotone"
          dataKey="revenue"
          name="매출"
          stroke="#10B981"
          strokeWidth={2}
          dot={{ r: 3, fill: '#10B981' }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

// ── Main Dashboard ─────────────────────────────────────────────────

export function Dashboard() {
  return (
    <div className="p-5 lg:p-6 space-y-5">
      <div>
        <h2 className="text-slate-800">대시보드</h2>
        <p className="text-sm text-slate-500 mt-0.5">2026년 3월 15일 기준 실시간 현황</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-[6px] border border-slate-200 p-4">
            <div className="flex items-start justify-between">
              <div className={`${card.bg} ${card.color} p-2 rounded-[4px]`}>
                <card.icon size={18} />
              </div>
              <span className={`text-xs flex items-center gap-0.5 ${card.up ? 'text-emerald-600' : 'text-red-500'}`}>
                {card.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {card.change}
              </span>
            </div>
            <div className="mt-3">
              <div className="text-slate-500 text-xs">{card.label}</div>
              <div className="mt-0.5 flex items-baseline gap-1">
                <span className="text-xl font-semibold text-slate-800">{card.value}</span>
                <span className="text-xs text-slate-400">{card.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-[6px] border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-slate-800">주간 주문 현황</h3>
              <p className="text-xs text-slate-400 mt-0.5">최근 7일 기준</p>
            </div>
            <span className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-[3px]">이번 주</span>
          </div>
          <OrdersBarChart />
        </div>

        <div className="bg-white rounded-[6px] border border-slate-200 p-4">
          <div className="mb-4">
            <h3 className="text-slate-800">주간 매출 추이</h3>
            <p className="text-xs text-slate-400 mt-0.5">단위: 만원</p>
          </div>
          <RevenueLineChart />
        </div>
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <h3 className="text-slate-800">최근 주문 현황</h3>
          <button className="text-xs text-[#FF6B2B] hover:underline">전체 보기</button>
        </div>
        <div className="subtle-box">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-4 py-2.5 text-xs text-slate-500 font-medium">주문번호</th>
                <th className="text-left px-4 py-2.5 text-xs text-slate-500 font-medium">매장</th>
                <th className="text-left px-4 py-2.5 text-xs text-slate-500 font-medium hidden md:table-cell">테이블</th>
                <th className="text-left px-4 py-2.5 text-xs text-slate-500 font-medium hidden lg:table-cell">주문내용</th>
                <th className="text-right px-4 py-2.5 text-xs text-slate-500 font-medium">금액</th>
                <th className="text-center px-4 py-2.5 text-xs text-slate-500 font-medium">상태</th>
                <th className="text-right px-4 py-2.5 text-xs text-slate-500 font-medium hidden sm:table-cell">시간</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order) => {
                const s = statusMap[order.status as keyof typeof statusMap];
                return (
                  <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-2.5 font-mono text-xs text-slate-600">{order.id}</td>
                    <td className="px-4 py-2.5 text-slate-700">{order.store}</td>
                    <td className="px-4 py-2.5 text-slate-500 hidden md:table-cell">{order.table}</td>
                    <td className="px-4 py-2.5 text-slate-500 hidden lg:table-cell">{order.items}</td>
                    <td className="px-4 py-2.5 text-right font-medium text-slate-800">{order.amount.toLocaleString()}원</td>
                    <td className="px-4 py-2.5">
                      <div className="flex justify-center">
                        <span className={`text-xs px-2 py-0.5 rounded-[3px] ${s.color}`}>{s.label}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 text-right text-slate-400 text-xs hidden sm:table-cell">{order.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}