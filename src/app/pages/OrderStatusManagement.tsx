import { useState } from 'react';
import { Clock, RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { InputField } from '../components/ui/InputField';
import { Textarea } from '../components/ui/textarea';

type OrderStatus = 'received' | 'cooking' | 'served' | 'cancelled';

interface OrderItem {
  name: string;
  quantity: number;
  options?: string[];
}

interface Order {
  id: string;
  orderNumber: string;
  tableNumber: string;
  time: string;
  items: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
  cancelReason?: string;
}

// Mock data
const INITIAL_ORDERS: Order[] = [
  // 접수 (5개)
  {
    id: '1',
    orderNumber: '#0010',
    tableNumber: '5번 테이블',
    time: '14:30',
    items: [
      { name: '쌀국수', quantity: 2, options: ['고수 추가 X 1', '곱배기 X 1'] },
      { name: '쌀국수반미세트', quantity: 1 },
    ],
    totalPrice: 30900,
    status: 'received',
  },
  {
    id: '2',
    orderNumber: '#0011',
    tableNumber: '6번 테이블',
    time: '14:32',
    items: [
      { name: '분짜', quantity: 1, options: ['땅콩 추가'] },
      { name: '베트남 커피', quantity: 2 },
    ],
    totalPrice: 18500,
    status: 'received',
  },
  {
    id: '3',
    orderNumber: '#0012',
    tableNumber: '2번 테이블',
    time: '14:35',
    items: [
      { name: '반미', quantity: 3 },
      { name: '스프링롤', quantity: 1 },
    ],
    totalPrice: 24000,
    status: 'received',
  },
  {
    id: '4',
    orderNumber: '#0013',
    tableNumber: '8번 테이블',
    time: '14:38',
    items: [
      { name: '쌀국수', quantity: 1, options: ['고수 빼기'] },
    ],
    totalPrice: 12900,
    status: 'received',
  },
  {
    id: '5',
    orderNumber: '#0014',
    tableNumber: '4번 테이블',
    time: '14:40',
    items: [
      { name: '분짜', quantity: 2 },
      { name: '월남쌈', quantity: 1 },
      { name: '아이스티', quantity: 2 },
    ],
    totalPrice: 35800,
    status: 'received',
  },
  // 조리중 (5개)
  {
    id: '6',
    orderNumber: '#0009',
    tableNumber: '1번 테이블',
    time: '14:15',
    items: [
      { name: '쌀국수', quantity: 2, options: ['고수 추가 X 1', '곱배기 X 1'] },
      { name: '쌀국수반미세트', quantity: 1 },
    ],
    totalPrice: 30900,
    status: 'cooking',
  },
  {
    id: '7',
    orderNumber: '#0008',
    tableNumber: '7번 테이블',
    time: '14:18',
    items: [
      { name: '분짜', quantity: 3 },
    ],
    totalPrice: 38700,
    status: 'cooking',
  },
  {
    id: '8',
    orderNumber: '#0007',
    tableNumber: '3번 테이블',
    time: '14:20',
    items: [
      { name: '쌀국수', quantity: 1 },
      { name: '반미', quantity: 2, options: ['치즈 추가'] },
    ],
    totalPrice: 27800,
    status: 'cooking',
  },
  {
    id: '9',
    orderNumber: '#0006',
    tableNumber: '9번 테이블',
    time: '14:25',
    items: [
      { name: '분짜세트', quantity: 1 },
      { name: '생과일주스', quantity: 1, options: ['망고'] },
    ],
    totalPrice: 19400,
    status: 'cooking',
  },
  {
    id: '10',
    orderNumber: '#0005',
    tableNumber: '10번 테이블',
    time: '14:28',
    items: [
      { name: '쌀국수', quantity: 4, options: ['곱배기 X 2'] },
      { name: '스프링롤', quantity: 2 },
    ],
    totalPrice: 53600,
    status: 'cooking',
  },
  // 서빙완료 (5개)
  {
    id: '11',
    orderNumber: '#0004',
    tableNumber: '5번 테이블',
    time: '14:05',
    items: [
      { name: '쌀국수', quantity: 1 },
      { name: '베트남 커피', quantity: 1 },
    ],
    totalPrice: 16400,
    status: 'served',
  },
  {
    id: '12',
    orderNumber: '#0003',
    tableNumber: '2번 테이블',
    time: '14:08',
    items: [
      { name: '분짜', quantity: 2 },
      { name: '월남쌈', quantity: 1 },
    ],
    totalPrice: 32700,
    status: 'served',
  },
  {
    id: '13',
    orderNumber: '#0015',
    tableNumber: '6번 테이블',
    time: '14:10',
    items: [
      { name: '쌀국수반미세트', quantity: 2 },
    ],
    totalPrice: 26000,
    status: 'served',
  },
  {
    id: '14',
    orderNumber: '#0016',
    tableNumber: '8번 테이블',
    time: '14:12',
    items: [
      { name: '반미', quantity: 3 },
      { name: '아이스티', quantity: 3 },
    ],
    totalPrice: 31500,
    status: 'served',
  },
  {
    id: '15',
    orderNumber: '#0017',
    tableNumber: '4번 테이블',
    time: '14:22',
    items: [
      { name: '쌀국수', quantity: 2 },
      { name: '분짜', quantity: 1 },
    ],
    totalPrice: 39300,
    status: 'served',
  },
  // 취소 (5개)
  {
    id: '16',
    orderNumber: '#0002',
    tableNumber: '3번 테이블',
    time: '14:00',
    items: [
      { name: '쌀국수', quantity: 2, options: ['고수 추가 X 1', '곱배기 X 1'] },
      { name: '쌀국수반미세트', quantity: 1 },
    ],
    totalPrice: 30900,
    status: 'cancelled',
    cancelReason: '고객 요청',
  },
  {
    id: '17',
    orderNumber: '#0001',
    tableNumber: '7번 테이블',
    time: '13:55',
    items: [
      { name: '분짜', quantity: 1 },
    ],
    totalPrice: 13500,
    status: 'cancelled',
    cancelReason: '재료 소진',
  },
  {
    id: '18',
    orderNumber: '#0018',
    tableNumber: '9번 테이블',
    time: '14:03',
    items: [
      { name: '월남쌈', quantity: 2 },
      { name: '베트남 커피', quantity: 2 },
    ],
    totalPrice: 27000,
    status: 'cancelled',
    cancelReason: '주문 변경 요청',
  },
  {
    id: '19',
    orderNumber: '#0019',
    tableNumber: '1번 테이블',
    time: '14:07',
    items: [
      { name: '쌀국수', quantity: 3 },
    ],
    totalPrice: 38700,
    status: 'cancelled',
    cancelReason: '조리 시간 초과',
  },
  {
    id: '20',
    orderNumber: '#0020',
    tableNumber: '10번 테이블',
    time: '14:16',
    items: [
      { name: '쌀국수반미세트', quantity: 1 },
      { name: '생과일주스', quantity: 1 },
    ],
    totalPrice: 18500,
    status: 'cancelled',
    cancelReason: '고객 요청',
  },
];

const STATUS_CONFIG = {
  received: { title: '접수', color: '#CCDDFF' },
  cooking: { title: '조리중', color: '#FFE7C5' },
  served: { title: '서빙완료', color: '#C5FFEC' },
  cancelled: { title: '취소', color: '#FFCECE' },
};

export default function OrderStatusManagement() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [cancelReason, setCancelReason] = useState('');

  // Calculate counts
  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<OrderStatus, number>);

  const moveOrder = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order))
    );
  };

  const moveToPreviousStatus = (orderId: string, currentStatus: OrderStatus) => {
    const statusOrder: OrderStatus[] = ['received', 'cooking', 'served'];
    const currentIndex = statusOrder.indexOf(currentStatus);
    if (currentIndex > 0) {
      moveOrder(orderId, statusOrder[currentIndex - 1]);
    }
  };

  const handleEdit = (order: Order) => {
    setSelectedOrder(order);
    setEditModalOpen(true);
  };

  const handleCancelOrder = (order: Order) => {
    setSelectedOrder(order);
    setCancelReason(order.cancelReason || '');
    setCancelModalOpen(true);
  };

  const handleViewCancelReason = (order: Order) => {
    setSelectedOrder(order);
    setCancelReason(order.cancelReason || '');
    setCancelModalOpen(true);
  };

  const saveCancelReason = () => {
    if (selectedOrder) {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === selectedOrder.id
            ? { ...order, status: 'cancelled', cancelReason }
            : order
        )
      );
    }
    setCancelModalOpen(false);
    setSelectedOrder(null);
    setCancelReason('');
  };

  const handleReset = () => {
    if (confirm('모든 주문을 초기화하시겠습니까?')) {
      setOrders(INITIAL_ORDERS);
    }
  };

  return (
    <div className="p-5 lg:p-6 flex flex-col gap-4 h-full">
      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>주문 관리</span>
        <span>/</span>
        <span>주문 현황</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">주문 상태 관리</span>
      </nav>

      {/* 상단 헤더 */}
      <div className="bg-white rounded-[6px] border border-slate-200 px-4 py-[17px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-sm font-medium text-slate-800">주문 상태 관리</h1>

            {/* Sync Status */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSyncEnabled(true)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  syncEnabled ? 'text-[#33b58a]' : 'text-slate-400'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    syncEnabled ? 'bg-[#33b58a]' : 'bg-slate-300'
                  }`}
                />
                실시간 동기화
              </button>
              <button
                onClick={() => setSyncEnabled(false)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  !syncEnabled ? 'text-[#d72b2b]' : 'text-slate-400'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    !syncEnabled ? 'bg-[#e93939]' : 'bg-slate-300'
                  }`}
                />
                동기화 중단
              </button>
            </div>
          </div>

          {/* Reset Button */}
          <Button variant="outline" size="md" leftIcon={<RotateCcw size={14} />} onClick={handleReset}>
            초기화
          </Button>
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-4 gap-4 flex-1 min-h-0">
        {/* Received Column */}
        <div className="flex flex-col min-h-0">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-sm font-medium text-slate-800">{STATUS_CONFIG.received.title}</h2>
            <span
              className="text-xs px-2 py-0.5 rounded-[3px] font-medium"
              style={{ backgroundColor: STATUS_CONFIG.received.color, color: '#000' }}
            >
              {statusCounts.received || 0}
            </span>
          </div>
          <div className="bg-[#f2f4f8] border border-[#e2e5eb] rounded-[6px] p-3 space-y-3 flex-1 overflow-y-auto subtle-box">
            {orders
              .filter((order) => order.status === 'received')
              .map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  mainAction={
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => moveOrder(order.id, 'cooking')}
                    >
                      조리시작
                    </Button>
                  }
                  onEdit={() => handleEdit(order)}
                  onCancel={() => handleCancelOrder(order)}
                />
              ))}
            {orders.filter((order) => order.status === 'received').length === 0 && (
              <div className="py-10 text-center text-slate-400 text-sm">
                접수된 주문이 없습니다.
              </div>
            )}
          </div>
        </div>

        {/* Cooking Column */}
        <div className="flex flex-col min-h-0">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-sm font-medium text-slate-800">{STATUS_CONFIG.cooking.title}</h2>
            <span
              className="text-xs px-2 py-0.5 rounded-[3px] font-medium"
              style={{ backgroundColor: STATUS_CONFIG.cooking.color, color: '#000' }}
            >
              {statusCounts.cooking || 0}
            </span>
          </div>
          <div className="bg-[#f2f4f8] border border-[#e2e5eb] rounded-[6px] p-3 space-y-3 flex-1 overflow-y-auto subtle-box">
            {orders
              .filter((order) => order.status === 'cooking')
              .map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  mainAction={
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => moveOrder(order.id, 'served')}
                    >
                      서빙완료
                    </Button>
                  }
                  onPrevious={() => moveToPreviousStatus(order.id, 'cooking')}
                  onEdit={() => handleEdit(order)}
                  onCancel={() => handleCancelOrder(order)}
                />
              ))}
            {orders.filter((order) => order.status === 'cooking').length === 0 && (
              <div className="py-10 text-center text-slate-400 text-sm">
                조리중인 주문이 없습니다.
              </div>
            )}
          </div>
        </div>

        {/* Served Column */}
        <div className="flex flex-col min-h-0">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-sm font-medium text-slate-800">{STATUS_CONFIG.served.title}</h2>
            <span
              className="text-xs px-2 py-0.5 rounded-[3px] font-medium"
              style={{ backgroundColor: STATUS_CONFIG.served.color, color: '#000' }}
            >
              {statusCounts.served || 0}
            </span>
          </div>
          <div className="bg-[#f2f4f8] border border-[#e2e5eb] rounded-[6px] p-3 space-y-3 flex-1 overflow-y-auto subtle-box">
            {orders
              .filter((order) => order.status === 'served')
              .map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  mainAction={
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        alert('주문이 완료되었습니다.');
                      }}
                    >
                      주문완료
                    </Button>
                  }
                  onPrevious={() => moveToPreviousStatus(order.id, 'served')}
                  onEdit={() => handleEdit(order)}
                  onCancel={() => handleCancelOrder(order)}
                />
              ))}
            {orders.filter((order) => order.status === 'served').length === 0 && (
              <div className="py-10 text-center text-slate-400 text-sm">
                서빙완료된 주문이 없습니다.
              </div>
            )}
          </div>
        </div>

        {/* Cancelled Column */}
        <div className="flex flex-col min-h-0">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-sm font-medium text-slate-800">{STATUS_CONFIG.cancelled.title}</h2>
            <span
              className="text-xs px-2 py-0.5 rounded-[3px] font-medium"
              style={{ backgroundColor: STATUS_CONFIG.cancelled.color, color: '#000' }}
            >
              {statusCounts.cancelled || 0}
            </span>
          </div>
          <div className="bg-[#f2f4f8] border border-[#e2e5eb] rounded-[6px] p-3 space-y-3 flex-1 overflow-y-auto subtle-box">
            {orders
              .filter((order) => order.status === 'cancelled')
              .map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  bgColor="#fff7f7"
                  mainAction={
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewCancelReason(order)}
                    >
                      취소사유
                    </Button>
                  }
                />
              ))}
            {orders.filter((order) => order.status === 'cancelled').length === 0 && (
              <div className="py-10 text-center text-slate-400 text-sm">
                취소된 주문이 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        title="주문 수정"
        size="md"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setEditModalOpen(false)}>
              취소
            </ModalBtn>
            <ModalBtn
              variant="primary"
              onClick={() => {
                alert('주문이 수정되었습니다.');
                setEditModalOpen(false);
              }}
            >
              저장
            </ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">주문번호</label>
            <InputField
              inputSize="md"
              value={selectedOrder?.orderNumber || ''}
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">테이블 번호</label>
            <InputField
              inputSize="md"
              value={selectedOrder?.tableNumber || ''}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">주문 항목</label>
            <div className="space-y-2 px-3 py-2 bg-slate-50 rounded-[4px] border border-slate-200">
              {selectedOrder?.items.map((item, idx) => (
                <div key={idx} className="text-sm text-slate-600">
                  • {item.name} X {item.quantity}
                  {item.options?.map((opt, i) => (
                    <div key={i} className="ml-4 text-xs text-slate-500">
                      ↳ {opt}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">총 금액</label>
            <InputField
              inputSize="md"
              value={`${selectedOrder?.totalPrice.toLocaleString()} 원`}
              readOnly
            />
          </div>
        </div>
      </Modal>

      {/* Cancel Reason Modal */}
      <Modal
        open={cancelModalOpen}
        onClose={() => setCancelModalOpen(false)}
        title={selectedOrder?.status === 'cancelled' ? '취소 사유' : '주문 취소'}
        size="md"
        footer={
          selectedOrder?.status === 'cancelled' ? (
            <ModalBtn variant="primary" onClick={() => setCancelModalOpen(false)}>
              확인
            </ModalBtn>
          ) : (
            <>
              <ModalBtn variant="outline" onClick={() => setCancelModalOpen(false)}>
                닫기
              </ModalBtn>
              <ModalBtn
                variant="primary"
                onClick={saveCancelReason}
                disabled={!cancelReason.trim()}
              >
                취소 확정
              </ModalBtn>
            </>
          )
        }
      >
        <div className="space-y-4">
          {selectedOrder?.status === 'cancelled' ? (
            <>
              <div>
                <label className="block text-xs text-slate-500 mb-1.5">주문번호</label>
                <p className="text-sm text-slate-600">{selectedOrder.orderNumber}</p>
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1.5">취소 사유</label>
                <p className="text-sm text-slate-600">{selectedOrder.cancelReason || '-'}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block text-xs text-slate-500 mb-1.5">주문번호</label>
                <InputField
                  inputSize="md"
                  value={selectedOrder?.orderNumber || ''}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1.5">
                  취소 사유 <span className="text-red-400">*</span>
                </label>
                <Textarea
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  rows={4}
                  placeholder="취소 사유를 입력하세요"
                />
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

// Order Card Component
function OrderCard({
  order,
  mainAction,
  onPrevious,
  onEdit,
  onCancel,
  bgColor = 'white',
}: {
  order: Order;
  mainAction: React.ReactNode;
  onPrevious?: () => void;
  onEdit?: () => void;
  onCancel?: () => void;
  bgColor?: string;
}) {
  return (
    <div
      className="rounded-xl border border-[#e2e5eb] p-5 shadow-sm hover:shadow-md transition-shadow"
      style={{ backgroundColor: bgColor }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-sm font-bold text-[#21272a] mb-1">
            {order.orderNumber} <span className="text-xs font-normal text-slate-400">(주문번호)</span>
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#999]">
          <Clock size={13} strokeWidth={2} />
          <span>{order.time}</span>
        </div>
      </div>

      {/* Table Number */}
      <div className="mb-5">
        <p className="text-sm font-medium text-[#222]">
          {order.tableNumber} <span className="text-xs font-normal text-slate-400">(테이블 번호)</span>
        </p>
      </div>

      {/* Items */}
      <div className="space-y-3 mb-5">
        {order.items.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-baseline gap-1">
              <span className="text-slate-400">•</span>
              <span className="text-[13px] text-[#666]">{item.name}</span>
              <span className="text-[10px] text-[#666] ml-1">X {item.quantity}</span>
            </div>
            {item.options?.map((opt, i) => (
              <div key={i} className="text-[10px] text-[#666] ml-4 mt-1">
                ↳ {opt}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t-2 border-[#f2f4f8] my-4" />

      {/* Total Price */}
      <div className="mb-5">
        <p className="text-[15px] font-semibold text-[#222]">
          {order.totalPrice.toLocaleString()} 원
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-1 justify-end">
        {mainAction}
        {onPrevious && (
          <Button variant="outline" size="sm" onClick={onPrevious}>
            이전
          </Button>
        )}
        {onEdit && (
          <Button variant="outline" size="sm" onClick={onEdit}>
            수정
          </Button>
        )}
        {onCancel && (
          <Button variant="outline" size="sm" onClick={onCancel}>
            취소
          </Button>
        )}
      </div>
    </div>
  );
}
