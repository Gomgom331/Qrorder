import { useState } from 'react';
import { Clock, Check, X as XIcon, Bell } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Tag } from '../../components/ui/Tag';
import { Modal, ModalBtn } from '../../components/ui/Modal';

// ─── Types ───────────────────────────────────────────────────────
interface OrderItem {
  name: string;
  quantity: number;
  options?: string[];
  price: number;
}

interface Order {
  id: string;
  orderNumber: string;
  table: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'preparing' | 'completed' | 'cancelled';
  orderTime: string;
  estimatedTime?: string;
}

// ─── Mock data ───────────────────────────────────────────────────
const MOCK_DATA: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2026-0158',
    table: '테이블 3',
    items: [
      { name: '불고기 정식', quantity: 2, options: ['보통맛', '밥 대'], price: 12000 },
      { name: '김치찌개', quantity: 1, options: ['매운맛'], price: 8000 },
    ],
    totalAmount: 32000,
    status: 'pending',
    orderTime: '2026-03-17 15:42',
  },
  {
    id: '2',
    orderNumber: 'ORD-2026-0157',
    table: '테이블 7',
    items: [
      { name: '제육볶음', quantity: 1, options: ['아주 매운맛', '밥 대'], price: 11500 },
      { name: '된장찌개', quantity: 1, options: [], price: 8000 },
      { name: '콜라 (L)', quantity: 2, options: [], price: 2500 },
    ],
    totalAmount: 24500,
    status: 'preparing',
    orderTime: '2026-03-17 15:38',
    estimatedTime: '10분',
  },
  {
    id: '3',
    orderNumber: 'ORD-2026-0156',
    table: '테이블 5',
    items: [
      { name: '비빔밥', quantity: 1, options: ['보통맛'], price: 9000 },
    ],
    totalAmount: 9000,
    status: 'preparing',
    orderTime: '2026-03-17 15:35',
    estimatedTime: '5분',
  },
  {
    id: '4',
    orderNumber: 'ORD-2026-0155',
    table: '테이블 1',
    items: [
      { name: '돈까스', quantity: 2, options: ['데미글라스'], price: 10000 },
      { name: '아메리카노', quantity: 2, options: [], price: 3500 },
    ],
    totalAmount: 27000,
    status: 'pending',
    orderTime: '2026-03-17 15:40',
  },
];

// ─── Main ────────────────────────────────────────────────────────
export function ClientOrderManagement() {
  const [orders, setOrders] = useState<Order[]>(MOCK_DATA);
  const [selectedTab, setSelectedTab] = useState<'all' | 'pending' | 'preparing'>('all');
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Filter by tab
  const filteredOrders = orders.filter((order) => {
    if (selectedTab === 'all') return order.status !== 'completed' && order.status !== 'cancelled';
    return order.status === selectedTab;
  });

  const pendingCount = orders.filter((o) => o.status === 'pending').length;
  const preparingCount = orders.filter((o) => o.status === 'preparing').length;

  // Handlers
  const handleAcceptOrder = (orderId: string) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: 'preparing', estimatedTime: '15분' } : order
      )
    );
  };

  const handleCompleteOrder = (orderId: string) => {
    if (confirm('주문을 완료 처리하시겠습니까?')) {
      setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: 'completed' } : order)));
    }
  };

  const handleCancelOrder = (orderId: string) => {
    if (confirm('정말 주문을 취소하시겠습니까?')) {
      setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: 'cancelled' } : order)));
    }
  };

  const handleViewDetail = (order: Order) => {
    setSelectedOrder(order);
    setDetailModalOpen(true);
  };

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">주문 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">실시간 주문</span>
      </nav>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[6px] p-3 md:p-5 text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-white/20 rounded-[6px] shrink-0">
              <Bell size={16} />
            </div>
            <span className="text-xs md:text-sm opacity-90 leading-tight">신규 주문</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold">{pendingCount}</div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[6px] p-3 md:p-5 text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-white/20 rounded-[6px] shrink-0">
              <Clock size={16} />
            </div>
            <span className="text-xs md:text-sm opacity-90 leading-tight">조리 중</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold">{preparingCount}</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[6px] p-3 md:p-5 text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-white/20 rounded-[6px] shrink-0">
              <Check size={16} />
            </div>
            <span className="text-xs md:text-sm opacity-90 leading-tight">오늘 완료</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold">152</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          <button
            onClick={() => setSelectedTab('all')}
            className={`flex-1 min-w-[80px] px-3 md:px-4 py-3 text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTab === 'all'
                ? 'text-[#FF6B2B] border-b-2 border-[#FF6B2B] bg-orange-50/50'
                : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            전체 ({filteredOrders.length})
          </button>
          <button
            onClick={() => setSelectedTab('pending')}
            className={`flex-1 min-w-[80px] px-3 md:px-4 py-3 text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTab === 'pending'
                ? 'text-[#FF6B2B] border-b-2 border-[#FF6B2B] bg-orange-50/50'
                : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            신규 ({pendingCount})
          </button>
          <button
            onClick={() => setSelectedTab('preparing')}
            className={`flex-1 min-w-[80px] px-3 md:px-4 py-3 text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTab === 'preparing'
                ? 'text-[#FF6B2B] border-b-2 border-[#FF6B2B] bg-orange-50/50'
                : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            조리중 ({preparingCount})
          </button>
        </div>

        {/* Orders grid */}
        <div className="p-4 md:p-5">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-2">
                <Clock size={48} className="mx-auto mb-3 opacity-30" />
                <p>주문이 없습니다</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className={`border rounded-[6px] p-4 transition-all hover:shadow-md ${
                    order.status === 'pending'
                      ? 'border-amber-200 bg-amber-50/30'
                      : order.status === 'preparing'
                      ? 'border-blue-200 bg-blue-50/30'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">{order.orderNumber}</div>
                      <div className="text-lg font-bold text-slate-800">{order.table}</div>
                    </div>
                    {order.status === 'pending' && (
                      <Tag variant="warning" size="sm">
                        <Bell size={12} />
                        신규
                      </Tag>
                    )}
                    {order.status === 'preparing' && (
                      <Tag variant="info" size="sm">
                        <Clock size={12} />
                        조리중
                      </Tag>
                    )}
                  </div>

                  {/* Items */}
                  <div className="space-y-2 mb-3 pb-3 border-b border-slate-200">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-sm text-slate-800">
                            {item.name} <span className="text-slate-400">x{item.quantity}</span>
                          </div>
                          {item.options && item.options.length > 0 && (
                            <div className="text-xs text-slate-400 mt-0.5">
                              {item.options.join(', ')}
                            </div>
                          )}
                        </div>
                        <div className="text-sm text-slate-600 ml-2">
                          ₩{(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-slate-500">{order.orderTime}</div>
                    <div className="text-base font-bold text-slate-800">
                      ₩{order.totalAmount.toLocaleString()}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {order.status === 'pending' && (
                      <>
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1"
                          leftIcon={<Check size={13} />}
                          onClick={() => handleAcceptOrder(order.id)}
                        >
                          접수
                        </Button>
                        <Button
                          variant="icon"
                          size="sm"
                          iconOnly={<XIcon size={13} />}
                          onClick={() => handleCancelOrder(order.id)}
                        />
                      </>
                    )}
                    {order.status === 'preparing' && (
                      <>
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1"
                          leftIcon={<Check size={13} />}
                          onClick={() => handleCompleteOrder(order.id)}
                        >
                          완료
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleViewDetail(order)}>
                          상세
                        </Button>
                      </>
                    )}
                  </div>

                  {order.estimatedTime && (
                    <div className="mt-2 text-xs text-blue-600 text-center font-medium">
                      예상 완료: {order.estimatedTime}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      <Modal
        open={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        size="md"
        title="주문 상세"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDetailModalOpen(false)}>
              닫기
            </ModalBtn>
            {selectedOrder?.status === 'preparing' && (
              <ModalBtn
                variant="primary"
                leftIcon={<Check size={15} />}
                onClick={() => {
                  if (selectedOrder) {
                    handleCompleteOrder(selectedOrder.id);
                    setDetailModalOpen(false);
                  }
                }}
              >
                주문 완료
              </ModalBtn>
            )}
          </>
        }
      >
        {selectedOrder && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-slate-500 mb-1">주문번호</div>
                <div className="text-sm font-medium text-slate-800">{selectedOrder.orderNumber}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">테이블</div>
                <div className="text-sm font-medium text-slate-800">{selectedOrder.table}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">주문시간</div>
                <div className="text-sm font-medium text-slate-800">{selectedOrder.orderTime}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">상태</div>
                {selectedOrder.status === 'preparing' && (
                  <Tag variant="info" size="sm">
                    조리중
                  </Tag>
                )}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-slate-700 mb-2">주문 항목</div>
              <div className="bg-slate-50 rounded-[6px] p-3 space-y-2">
                {selectedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between">
                    <div>
                      <div className="text-sm text-slate-800">
                        {item.name} <span className="text-slate-400">x{item.quantity}</span>
                      </div>
                      {item.options && item.options.length > 0 && (
                        <div className="text-xs text-slate-400">{item.options.join(', ')}</div>
                      )}
                    </div>
                    <div className="text-sm font-medium text-slate-700">
                      ₩{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-slate-200">
              <div className="text-base font-medium text-slate-700">총 금액</div>
              <div className="text-xl font-bold text-slate-800">
                ₩{selectedOrder.totalAmount.toLocaleString()}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}