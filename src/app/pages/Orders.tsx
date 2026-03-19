import { useState } from 'react';
import { useLocation } from 'react-router';
import { Clock, CheckCircle2, AlertCircle, XCircle, Search } from 'lucide-react';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { Pagination } from '../components/ui/Pagination';
import { InputField } from '../components/ui/InputField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { Button } from '../components/ui/Button';

const ORDERS = [
  { id: 'ORD-2026-0892', store: '스마트버거 강남점', table: 'T-03', items: ['클래식 버거 세트', '감자튀김(L)', '콜라'], amount: 28500, status: 'completed', time: '14:32', date: '2026-03-14' },
  { id: 'ORD-2026-0891', store: '맛나치킨 홍대점', table: 'T-07', items: ['황금올리브 반마리', '콜라 2'], amount: 19000, status: 'preparing', time: '14:29', date: '2026-03-14' },
  { id: 'ORD-2026-0890', store: '청담 파인다이닝', table: 'T-01', items: ['코스 메뉴 A (4인)'], amount: 340000, status: 'waiting', time: '14:25', date: '2026-03-14' },
  { id: 'ORD-2026-0889', store: '더맛집 삼겹살', table: 'T-05', items: ['삼겹살 2인분', '된장찌개', '냉면 2', '소주'], amount: 42000, status: 'completed', time: '14:18', date: '2026-03-14' },
  { id: 'ORD-2026-0888', store: '미식가 일식', table: 'T-02', items: ['스시 오마카세 세트', '사케 1병'], amount: 89000, status: 'completed', time: '14:12', date: '2026-03-14' },
  { id: 'ORD-2026-0887', store: '스마트버거 신촌점', table: 'T-09', items: ['더블 버거 세트'], amount: 15500, status: 'cancelled', time: '14:05', date: '2026-03-14' },
  { id: 'ORD-2026-0886', store: '종로 보쌈', table: 'T-04', items: ['보쌈 특대', '막걸리 2병', '순두부찌개'], amount: 55000, status: 'completed', time: '13:58', date: '2026-03-14' },
  { id: 'ORD-2026-0885', store: '이태원 퓨전', table: 'T-06', items: ['타코 3개', '부리토', '맥주 2'], amount: 38000, status: 'preparing', time: '13:51', date: '2026-03-14' },
  { id: 'ORD-2026-0884', store: '명동 칼국수', table: 'T-02', items: ['칼국수 2', '만두 1접시'], amount: 24000, status: 'completed', time: '13:44', date: '2026-03-14' },
  { id: 'ORD-2026-0883', store: '강동 감자탕', table: 'T-08', items: ['감자탕 대', '소주 2병', '공기밥 2'], amount: 52000, status: 'completed', time: '13:37', date: '2026-03-14' },
  { id: 'ORD-2026-0882', store: '성수 브런치카페', table: 'T-01', items: ['에그베네딕트', '아이스 아메리카노 2'], amount: 31000, status: 'waiting', time: '13:29', date: '2026-03-14' },
  { id: 'ORD-2026-0881', store: '압구정 오마카세', table: 'T-03', items: ['오마카세 (2인)'], amount: 280000, status: 'completed', time: '13:20', date: '2026-03-14' },
];

const statusConfig = {
  waiting:   { label: '대기중', color: 'bg-amber-100 text-amber-700',   border: 'border-amber-200',   icon: Clock },
  preparing: { label: '준비중', color: 'bg-blue-100 text-blue-700',     border: 'border-blue-200',    icon: AlertCircle },
  completed: { label: '완료',   color: 'bg-emerald-100 text-emerald-700', border: 'border-emerald-200', icon: CheckCircle2 },
  cancelled: { label: '취소',   color: 'bg-red-100 text-red-500',       border: 'border-red-200',     icon: XCircle },
};

const STATUS_OPTIONS = [
  { value: 'all',       label: '전체 상태' },
  { value: 'waiting',   label: '대기중' },
  { value: 'preparing', label: '준비중' },
  { value: 'completed', label: '완료' },
  { value: 'cancelled', label: '취소' },
];

const PAGE_SIZE = 8;

export function Orders() {
  const location = useLocation();
  const isRealtime = location.pathname === '/orders/realtime';
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [appliedStatus, setAppliedStatus] = useState('all');
  const [page, setPage] = useState(1);
  const [detailOrder, setDetailOrder] = useState<typeof ORDERS[0] | null>(null);

  const filtered = ORDERS.filter((o) => {
    const matchSearch = appliedSearch ? o.store.includes(appliedSearch) || o.id.includes(appliedSearch) || o.table.includes(appliedSearch) : true;
    const matchStatus = appliedStatus === 'all' ? true : o.status === appliedStatus;
    if (isRealtime) return matchSearch && matchStatus && (o.status === 'waiting' || o.status === 'preparing');
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const countByStatus = {
    waiting:   ORDERS.filter((o) => o.status === 'waiting').length,
    preparing: ORDERS.filter((o) => o.status === 'preparing').length,
    completed: ORDERS.filter((o) => o.status === 'completed').length,
    cancelled: ORDERS.filter((o) => o.status === 'cancelled').length,
  };

  const handleSearch = () => { setAppliedSearch(search); setAppliedStatus(statusFilter); setPage(1); };
  const handleReset  = () => { setSearch(''); setStatusFilter('all'); setAppliedSearch(''); setAppliedStatus('all'); setPage(1); };

  return (
    <div className="p-5 lg:p-6 space-y-4">
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>주문 관리</span><span>/</span>
        <span className="text-slate-700 font-medium">{isRealtime ? '실시간 주문' : '주문 내역'}</span>
      </nav>

      {isRealtime && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.entries(statusConfig).map(([key, config]) => {
            const count = countByStatus[key as keyof typeof countByStatus];
            return (
              <div
                key={key}
                onClick={() => setStatusFilter(statusFilter === key ? 'all' : key)}
                className={`bg-white rounded-[6px] border cursor-pointer transition-all p-3 ${statusFilter === key ? `${config.border} border-2` : 'border-slate-200 hover:border-slate-300'}`}
              >
                <div className="flex items-center gap-2">
                  <config.icon size={15} className={config.color.split(' ')[1]} />
                  <span className="text-xs text-slate-500">{config.label}</span>
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-800">{count}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* Search & filter */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <InputField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="매장명, 주문번호, 테이블로 검색"
              leftIcon={<Search size={14} />}
            />
          </div>
          <div className="w-full sm:w-36">
            <DropdownSelect
              value={statusFilter}
              onChange={setStatusFilter}
              options={STATUS_OPTIONS}
              placeholder="전체 상태"
            />
          </div>
          <Button variant="outline" size="md" onClick={handleReset}>초기화</Button>
          <Button variant="primary" size="md" leftIcon={<Search size={15} />} onClick={handleSearch}>조회</Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">주문 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">{filtered.length}건</span>
          </div>
          {isRealtime && (
            <span className="flex items-center gap-1.5 text-xs text-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              실시간 업데이트
            </span>
          )}
        </div>
        <div className="subtle-box">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500">주문번호</th>
                <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500">매장</th>
                <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500">테이블</th>
                <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500 hidden lg:table-cell">주문내용</th>
                <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-500">금액</th>
                <th className="text-center px-4 py-2.5 text-xs font-medium text-slate-500">상태</th>
                <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-500 hidden sm:table-cell">시간</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginated.length === 0 ? (
                <tr><td colSpan={7} className="py-12 text-center text-slate-400 text-sm">주문 내역이 없습니다.</td></tr>
              ) : (
                paginated.map((order) => {
                  const s = statusConfig[order.status as keyof typeof statusConfig];
                  return (
                    <tr key={order.id} className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => setDetailOrder(order)}>
                      <td className="px-4 py-2.5 font-mono text-xs text-slate-500">{order.id}</td>
                      <td className="px-4 py-2.5 text-slate-700">{order.store}</td>
                      <td className="px-4 py-2.5">
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-[3px]">{order.table}</span>
                      </td>
                      <td className="px-4 py-2.5 text-slate-500 text-xs hidden lg:table-cell">{order.items.join(', ')}</td>
                      <td className="px-4 py-2.5 text-right font-medium text-slate-800">{order.amount.toLocaleString()}원</td>
                      <td className="px-4 py-2.5">
                        <div className="flex justify-center">
                          <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-[3px] ${s.color}`}>
                            <s.icon size={11} />{s.label}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-right text-slate-400 text-xs hidden sm:table-cell">{order.date} {order.time}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
          <span className="text-xs text-slate-400">
            총 <strong className="text-slate-700">{filtered.length}</strong>건
          </span>
          <Pagination page={page} totalPages={totalPages} onChange={setPage} size="sm" />
        </div>
      </div>

      {/* Order detail modal */}
      {detailOrder && (
        <Modal
          open={!!detailOrder}
          onClose={() => setDetailOrder(null)}
          size="lg"
          title={`주문 상세 — ${detailOrder.id}`}
          footer={
            <ModalBtn variant="outline" onClick={() => setDetailOrder(null)}>닫기</ModalBtn>
          }
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              {(() => {
                const s = statusConfig[detailOrder.status as keyof typeof statusConfig];
                return (
                  <span className={`flex items-center gap-1.5 text-sm px-3 py-1 rounded-[4px] ${s.color}`}>
                    <s.icon size={14} />{s.label}
                  </span>
                );
              })()}
              <span className="text-xs text-slate-400">{detailOrder.date} {detailOrder.time}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '매장', value: detailOrder.store },
                { label: '테이블', value: detailOrder.table },
                { label: '주문번호', value: detailOrder.id },
                { label: '결제금액', value: `${detailOrder.amount.toLocaleString()}원` },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="text-xs text-slate-400 block mb-1">{label}</span>
                  <span className="text-sm text-slate-800 font-medium">{value}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-2">주문 항목</span>
              <div className="bg-slate-50 rounded-[4px] p-3 space-y-2">
                {detailOrder.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">{item}</span>
                    <span className="text-slate-400 text-xs">x 1</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-slate-200 flex justify-between">
                  <span className="text-sm font-medium text-slate-700">합계</span>
                  <span className="text-sm font-semibold text-[#FF6B2B]">{detailOrder.amount.toLocaleString()}원</span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}