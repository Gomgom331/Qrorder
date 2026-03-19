import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import {
  Store, TrendingUp, ShoppingBag, Users, Clock, CheckCircle2, AlertCircle, XCircle,
  ChevronDown, ChevronUp, ExternalLink,
} from 'lucide-react';
import { Tag } from '../../components/ui/Tag';
import { DropdownSelect } from '../../components/ui/DropdownSelect';

// ─── Types ───────────────────────────────────────────────────────
interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  status: 'open' | 'closed' | 'preparing';
  manager: string;
  openTime: string;
  closeTime: string;
  todayRevenue: number;
  todayOrders: number;
  monthRevenue: number;
  monthOrders: number;
  tableCount: number;
  occupiedTables: number;
  menuCount: number;
  lowStockCount: number;
  revenueData: { label: string; revenue: number }[];
}

// ─── Mock data ───────────────────────────────────────────────────
const MOCK_BRANCHES: Branch[] = [
  {
    id: '1',
    name: '홍대 본점',
    address: '서울 마포구 홍익로 14',
    phone: '02-1234-5678',
    status: 'open',
    manager: '김철수',
    openTime: '10:00',
    closeTime: '22:00',
    todayRevenue: 4097000,
    todayOrders: 152,
    monthRevenue: 52800000,
    monthOrders: 2690,
    tableCount: 10,
    occupiedTables: 4,
    menuCount: 48,
    lowStockCount: 2,
    revenueData: [
      { label: '월', revenue: 1520000 },
      { label: '화', revenue: 1380000 },
      { label: '수', revenue: 1890000 },
      { label: '목', revenue: 1640000 },
      { label: '금', revenue: 2190000 },
      { label: '토', revenue: 2850000 },
      { label: '일', revenue: 2410000 },
    ],
  },
  {
    id: '2',
    name: '강남점',
    address: '서울 강남구 테헤란로 123',
    phone: '02-9876-5432',
    status: 'open',
    manager: '이영희',
    openTime: '11:00',
    closeTime: '23:00',
    todayRevenue: 3840000,
    todayOrders: 138,
    monthRevenue: 47200000,
    monthOrders: 2380,
    tableCount: 14,
    occupiedTables: 9,
    menuCount: 51,
    lowStockCount: 0,
    revenueData: [
      { label: '월', revenue: 1720000 },
      { label: '화', revenue: 1540000 },
      { label: '수', revenue: 1980000 },
      { label: '목', revenue: 1830000 },
      { label: '금', revenue: 2380000 },
      { label: '토', revenue: 3120000 },
      { label: '일', revenue: 2640000 },
    ],
  },
  {
    id: '3',
    name: '신촌점',
    address: '서울 서대문구 신촌로 89',
    phone: '02-5555-7890',
    status: 'preparing',
    manager: '박민준',
    openTime: '11:00',
    closeTime: '22:00',
    todayRevenue: 1240000,
    todayOrders: 48,
    monthRevenue: 18500000,
    monthOrders: 890,
    tableCount: 8,
    occupiedTables: 2,
    menuCount: 36,
    lowStockCount: 5,
    revenueData: [
      { label: '월', revenue: 580000 },
      { label: '화', revenue: 510000 },
      { label: '수', revenue: 640000 },
      { label: '목', revenue: 620000 },
      { label: '금', revenue: 780000 },
      { label: '토', revenue: 1050000 },
      { label: '일', revenue: 890000 },
    ],
  },
  {
    id: '4',
    name: '합정점',
    address: '서울 마포구 합정동 457-3',
    phone: '02-3333-4444',
    status: 'closed',
    manager: '최수진',
    openTime: '10:00',
    closeTime: '21:00',
    todayRevenue: 0,
    todayOrders: 0,
    monthRevenue: 31200000,
    monthOrders: 1540,
    tableCount: 12,
    occupiedTables: 0,
    menuCount: 44,
    lowStockCount: 1,
    revenueData: [
      { label: '월', revenue: 1180000 },
      { label: '화', revenue: 980000 },
      { label: '수', revenue: 1350000 },
      { label: '목', revenue: 1120000 },
      { label: '금', revenue: 1680000 },
      { label: '토', revenue: 2040000 },
      { label: '일', revenue: 1750000 },
    ],
  },
];

const STATUS_CONFIG = {
  open:      { label: '영업 중',    icon: CheckCircle2, cls: 'text-emerald-600 bg-emerald-50', dot: 'bg-emerald-400' },
  closed:    { label: '영업 종료',  icon: XCircle,      cls: 'text-slate-400 bg-slate-100',   dot: 'bg-slate-300' },
  preparing: { label: '준비 중',    icon: AlertCircle,  cls: 'text-amber-600 bg-amber-50',    dot: 'bg-amber-400' },
};

function fmtKRW(n: number) {
  if (n >= 100000000) return `₩${(n / 100000000).toFixed(1)}억`;
  if (n >= 10000) return `₩${(n / 10000).toFixed(0)}만`;
  return `₩${n.toLocaleString()}`;
}

// ─── Branch Card ─────────────────────────────────────────────────
function BranchCard({ branch, isExpanded, onToggle }: {
  branch: Branch;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const sc = STATUS_CONFIG[branch.status];
  const tableOccupancyPct = branch.tableCount > 0 ? (branch.occupiedTables / branch.tableCount) * 100 : 0;

  return (
    <div className={`bg-white border rounded-[8px] overflow-hidden transition-shadow hover:shadow-md ${
      branch.status === 'open' ? 'border-slate-200' :
      branch.status === 'preparing' ? 'border-amber-200' :
      'border-slate-200 opacity-75'
    }`}>
      {/* Top accent */}
      <div className={`h-1 ${
        branch.status === 'open' ? 'bg-emerald-400' :
        branch.status === 'preparing' ? 'bg-amber-400' : 'bg-slate-200'
      }`} />

      {/* Header */}
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-[6px] shrink-0 ${
              branch.status === 'open' ? 'bg-orange-50' : 'bg-slate-100'
            }`}>
              <Store size={18} className={branch.status === 'open' ? 'text-[#FF6B2B]' : 'text-slate-400'} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <h3 className="text-sm font-semibold text-slate-800">{branch.name}</h3>
                {branch.id === '1' && (
                  <span className="px-1.5 py-0.5 rounded-[3px] text-[10px] font-medium bg-orange-100 text-[#FF6B2B]">본점</span>
                )}
              </div>
              <div className="text-xs text-slate-400">{branch.address}</div>
            </div>
          </div>
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium shrink-0 ${sc.cls}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
            {sc.label}
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          <div className="bg-slate-50 rounded-[6px] p-3">
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp size={11} className="text-[#FF6B2B]" />
              <span className="text-[10px] text-slate-400">오늘 매출</span>
            </div>
            <div className="text-sm font-bold text-slate-800">{fmtKRW(branch.todayRevenue)}</div>
          </div>
          <div className="bg-slate-50 rounded-[6px] p-3">
            <div className="flex items-center gap-1 mb-1">
              <ShoppingBag size={11} className="text-blue-500" />
              <span className="text-[10px] text-slate-400">오늘 주문</span>
            </div>
            <div className="text-sm font-bold text-slate-800">{branch.todayOrders}건</div>
          </div>
          <div className="bg-slate-50 rounded-[6px] p-3">
            <div className="flex items-center gap-1 mb-1">
              <Users size={11} className="text-slate-400" />
              <span className="text-[10px] text-slate-400">테이블</span>
            </div>
            <div className="text-sm font-bold text-slate-800">
              {branch.occupiedTables}<span className="text-xs text-slate-400 font-normal">/{branch.tableCount}</span>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[6px] p-3">
            <div className="flex items-center gap-1 mb-1">
              <Clock size={11} className="text-slate-400" />
              <span className="text-[10px] text-slate-400">영업시간</span>
            </div>
            <div className="text-xs font-medium text-slate-600">{branch.openTime}~{branch.closeTime}</div>
          </div>
        </div>

        {/* Table occupancy bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-500">테이블 점유율</span>
            <span className="font-medium text-slate-700">{Math.round(tableOccupancyPct)}%</span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                tableOccupancyPct >= 80 ? 'bg-red-400' :
                tableOccupancyPct >= 50 ? 'bg-amber-400' : 'bg-emerald-400'
              }`}
              style={{ width: `${tableOccupancyPct}%` }}
            />
          </div>
        </div>

        {/* Alerts */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          {branch.lowStockCount > 0 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[3px] text-xs bg-amber-50 text-amber-700 border border-amber-100">
              <AlertCircle size={10} />
              재고 부족 {branch.lowStockCount}개
            </span>
          )}
          <span className="text-xs text-slate-400">담당자: {branch.manager}</span>
          <span className="text-xs text-slate-400 hidden sm:inline">| ☎ {branch.phone}</span>
        </div>

        {/* Expand button */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-[4px] transition-colors border border-slate-100"
        >
          {isExpanded ? <><ChevronUp size={13} />접기</> : <><ChevronDown size={13} />주간 현황 보기</>}
        </button>
      </div>

      {/* Expanded: weekly chart */}
      {isExpanded && (
        <div className="border-t border-slate-100 px-4 md:px-5 pb-4">
          <div className="pt-4 mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-600">이번 주 매출</span>
            <span className="text-xs text-slate-400">이번 달 {fmtKRW(branch.monthRevenue)} / {branch.monthOrders.toLocaleString()}건</span>
          </div>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={branch.revenueData} barSize={20} id={`branch-chart-${branch.id}`}>
              <CartesianGrid key={`cg-${branch.id}`} strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis key={`xa-${branch.id}`} dataKey="label" tick={{ fontSize: 10, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis key={`ya-${branch.id}`} hide />
              <Tooltip
                key={`tt-${branch.id}`}
                contentStyle={{ fontSize: 11, borderRadius: 6, border: '1px solid #E2E8F0' }}
                formatter={(v: number) => [`₩${v.toLocaleString()}`, '매출']}
              />
              <Bar key={`bar-${branch.id}`} dataKey="revenue" name={`revenue-${branch.id}`} fill="#FF6B2B" radius={[3, 3, 0, 0]} fillOpacity={0.85} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

// ─── Comparison Table ────────────────────────────────────────────
function ComparisonTable({ branches }: { branches: Branch[] }) {
  const maxRevenue = Math.max(...branches.map((b) => b.monthRevenue));

  return (
    <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
      <div className="px-5 py-3.5 border-b border-slate-200">
        <h3 className="text-sm font-medium text-slate-800">매장 비교 (이번 달)</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500">매장</th>
              <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-500">월 매출</th>
              <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-500">주문수</th>
              <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-500 hidden sm:table-cell">객단가</th>
              <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-500 hidden md:table-cell">테이블</th>
              <th className="px-4 py-2.5 text-xs font-medium text-slate-500">비율</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[...branches].sort((a, b) => b.monthRevenue - a.monthRevenue).map((branch, idx) => {
              const pct = (branch.monthRevenue / maxRevenue) * 100;
              const avg = branch.monthOrders > 0 ? Math.round(branch.monthRevenue / branch.monthOrders) : 0;
              const sc = STATUS_CONFIG[branch.status];
              return (
                <tr key={branch.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        idx === 0 ? 'bg-amber-100 text-amber-700' :
                        idx === 1 ? 'bg-slate-100 text-slate-500' :
                        idx === 2 ? 'bg-orange-100 text-orange-600' :
                        'bg-slate-50 text-slate-400'
                      }`}>{idx + 1}</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium text-slate-800">{branch.name}</span>
                          {branch.id === '1' && <span className="px-1 py-0.5 rounded text-[9px] font-medium bg-orange-100 text-[#FF6B2B]">본점</span>}
                        </div>
                        <span className={`inline-flex items-center gap-1 text-[10px] font-medium ${sc.cls} px-1.5 py-0.5 rounded-full mt-0.5`}>
                          <span className={`w-1 h-1 rounded-full ${sc.dot}`} />{sc.label}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-slate-800">{fmtKRW(branch.monthRevenue)}</td>
                  <td className="px-4 py-3 text-right text-slate-600">{branch.monthOrders.toLocaleString()}건</td>
                  <td className="px-4 py-3 text-right text-slate-500 hidden sm:table-cell">₩{avg.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-slate-500 hidden md:table-cell">{branch.tableCount}석</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden min-w-[60px]">
                        <div className="h-full bg-[#FF6B2B] rounded-full opacity-80" style={{ width: `${pct}%` }} />
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
              <td className="px-4 py-2.5 text-xs font-semibold text-slate-600">전체 합계</td>
              <td className="px-4 py-2.5 text-right text-sm font-bold text-slate-800">
                {fmtKRW(branches.reduce((s, b) => s + b.monthRevenue, 0))}
              </td>
              <td className="px-4 py-2.5 text-right text-sm font-bold text-slate-800">
                {branches.reduce((s, b) => s + b.monthOrders, 0).toLocaleString()}건
              </td>
              <td className="hidden sm:table-cell px-4 py-2.5" />
              <td className="hidden md:table-cell px-4 py-2.5" />
              <td className="px-4 py-2.5" />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────
export function ClientBranchManagement() {
  const [branches] = useState<Branch[]>(MOCK_BRANCHES);
  const [expandedId, setExpandedId] = useState<string | null>('1');
  const [statusFilter, setStatusFilter] = useState('전체');
  const [viewMode, setViewMode] = useState<'cards' | 'compare'>('cards');

  const openCount = branches.filter((b) => b.status === 'open').length;
  const totalRevenue = branches.reduce((s, b) => s + b.todayRevenue, 0);
  const totalOrders  = branches.reduce((s, b) => s + b.todayOrders, 0);

  const filteredBranches = statusFilter === '전체' ? branches : branches.filter((b) => b.status === statusFilter);

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">매장 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">매장 목록</span>
      </nav>

      {/* Summary KPI */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
            <span className="text-xs text-slate-400">전체 매장</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">{branches.length}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-xs text-slate-400">영업 중</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">{openCount}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <TrendingUp size={12} className="text-[#FF6B2B]" />
            <span className="text-xs text-slate-400">오늘 총매출</span>
          </div>
          <div className="text-xl font-bold text-slate-800">{fmtKRW(totalRevenue)}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-[6px] p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <ShoppingBag size={12} className="text-blue-500" />
            <span className="text-xs text-slate-400">오늘 총주문</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">{totalOrders}</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1 bg-white border border-slate-200 rounded-[6px] p-1">
          <button
            onClick={() => setViewMode('cards')}
            className={`px-3 py-1.5 rounded-[4px] text-xs font-medium transition-colors ${viewMode === 'cards' ? 'bg-[#FF6B2B] text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            카드 보기
          </button>
          <button
            onClick={() => setViewMode('compare')}
            className={`px-3 py-1.5 rounded-[4px] text-xs font-medium transition-colors ${viewMode === 'compare' ? 'bg-[#FF6B2B] text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            비교 보기
          </button>
        </div>
        <div className="w-[140px]">
          <DropdownSelect
            size="sm"
            options={[
              { value: '전체', label: '전체 상태' },
              { value: 'open', label: '영업 중' },
              { value: 'preparing', label: '준비 중' },
              { value: 'closed', label: '영업 종료' },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
            placeholder="상태 필터"
          />
        </div>
      </div>

      {/* Card view */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBranches.map((branch) => (
            <BranchCard
              key={branch.id}
              branch={branch}
              isExpanded={expandedId === branch.id}
              onToggle={() => setExpandedId(expandedId === branch.id ? null : branch.id)}
            />
          ))}
        </div>
      )}

      {/* Comparison view */}
      {viewMode === 'compare' && (
        <ComparisonTable branches={filteredBranches} />
      )}
    </div>
  );
}