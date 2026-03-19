import { Package, ShoppingCart, DollarSign, Users } from 'lucide-react';

export function ClientDashboard() {
  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4 md:space-y-5">
      {/* 환영 메시지 */}
      <div className="bg-gradient-to-r from-[#FF6B2B] to-[#E55A1A] rounded-[6px] p-5 md:p-6 text-white">
        <h2 className="text-white mb-1">환영합니다!</h2>
        <p className="text-sm text-white/90">매장 관리 대시보드입니다.</p>
      </div>

      {/* 주요 지표 카드 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-white rounded-[6px] border border-slate-200 p-4 md:p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 md:p-2.5 bg-blue-50 rounded-[6px]">
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
            </div>
            <span className="text-xs text-emerald-600 font-medium">+12%</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-slate-800 mb-0.5">152</p>
          <p className="text-xs text-slate-400">오늘 주문</p>
        </div>

        <div className="bg-white rounded-[6px] border border-slate-200 p-4 md:p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 md:p-2.5 bg-emerald-50 rounded-[6px]">
              <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
            </div>
            <span className="text-xs text-emerald-600 font-medium">+8%</span>
          </div>
          <p className="text-lg md:text-2xl font-bold text-slate-800 mb-0.5">₩1,245,000</p>
          <p className="text-xs text-slate-400">오늘 매출</p>
        </div>

        <div className="bg-white rounded-[6px] border border-slate-200 p-4 md:p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 md:p-2.5 bg-amber-50 rounded-[6px]">
              <Package className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
            </div>
            <span className="text-xs text-slate-400">-</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-slate-800 mb-0.5">89</p>
          <p className="text-xs text-slate-400">등록된 메뉴</p>
        </div>

        <div className="bg-white rounded-[6px] border border-slate-200 p-4 md:p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 md:p-2.5 bg-purple-50 rounded-[6px]">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
            </div>
            <span className="text-xs text-emerald-600 font-medium">+5%</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-slate-800 mb-0.5">1,234</p>
          <p className="text-xs text-slate-400">이번 달 방문자</p>
        </div>
      </div>

      {/* 최근 주문 */}
      <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
        <div className="px-4 md:px-5 py-4 border-b border-slate-200">
          <h3 className="text-sm font-medium text-slate-800">최근 주문</h3>
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-4 md:px-5 py-3 text-xs font-medium text-slate-600">주문번호</th>
                <th className="text-left px-4 md:px-5 py-3 text-xs font-medium text-slate-600">테이블</th>
                <th className="text-left px-4 md:px-5 py-3 text-xs font-medium text-slate-600">메뉴</th>
                <th className="text-left px-4 md:px-5 py-3 text-xs font-medium text-slate-600">금액</th>
                <th className="text-left px-4 md:px-5 py-3 text-xs font-medium text-slate-600">상태</th>
                <th className="text-left px-4 md:px-5 py-3 text-xs font-medium text-slate-600">시간</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { id: 'ORD-2026-0152', table: '테이블 5', menu: '불고기 정식', amount: '12,000', status: '완료', time: '15:32' },
                { id: 'ORD-2026-0151', table: '테이블 3', menu: '김치찌개', amount: '8,000', status: '조리중', time: '15:28' },
                { id: 'ORD-2026-0150', table: '테이블 7', menu: '된장찌개', amount: '8,000', status: '완료', time: '15:15' },
                { id: 'ORD-2026-0149', table: '테이블 2', menu: '비빔밥', amount: '9,000', status: '완료', time: '15:10' },
                { id: 'ORD-2026-0148', table: '테이블 1', menu: '불고기 정식', amount: '12,000', status: '완료', time: '14:55' },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-slate-50">
                  <td className="px-4 md:px-5 py-3 text-sm text-slate-600">{order.id}</td>
                  <td className="px-4 md:px-5 py-3 text-sm text-slate-600">{order.table}</td>
                  <td className="px-4 md:px-5 py-3 text-sm text-slate-800">{order.menu}</td>
                  <td className="px-4 md:px-5 py-3 text-sm text-slate-600">₩{order.amount}</td>
                  <td className="px-4 md:px-5 py-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-[3px] text-xs font-medium ${
                        order.status === '완료'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-5 py-3 text-sm text-slate-400">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card list */}
        <div className="sm:hidden divide-y divide-slate-100">
          {[
            { id: 'ORD-2026-0152', table: '테이블 5', menu: '불고기 정식', amount: '12,000', status: '완료', time: '15:32' },
            { id: 'ORD-2026-0151', table: '테이블 3', menu: '김치찌개', amount: '8,000', status: '조리중', time: '15:28' },
            { id: 'ORD-2026-0150', table: '테이블 7', menu: '된장찌개', amount: '8,000', status: '완료', time: '15:15' },
            { id: 'ORD-2026-0149', table: '테이블 2', menu: '비빔밥', amount: '9,000', status: '완료', time: '15:10' },
            { id: 'ORD-2026-0148', table: '테이블 1', menu: '불고기 정식', amount: '12,000', status: '완료', time: '14:55' },
          ].map((order) => (
            <div key={order.id} className="px-4 py-3 hover:bg-slate-50">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">{order.table}</span>
                  <span className="text-xs text-slate-300">|</span>
                  <span className="text-xs text-slate-400">{order.time}</span>
                </div>
                <span
                  className={`inline-block px-2 py-0.5 rounded-[3px] text-xs font-medium ${
                    order.status === '완료'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-800">{order.menu}</span>
                <span className="text-sm font-medium text-slate-700">₩{order.amount}</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{order.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}