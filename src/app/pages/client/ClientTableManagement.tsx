import { useState } from 'react';
import { Plus, Pencil, QrCode, Download, Users, Clock, AlertCircle, Timer } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Modal, ModalBtn } from '../../components/ui/Modal';
import { InputField } from '../../components/ui/InputField';
import { CheckboxField } from '../../components/ui/CheckboxField';
import { RadioField } from '../../components/ui/RadioField';
import { Tag } from '../../components/ui/Tag';

// ─── Types ───────────────────────────────────────────────────────
interface Table {
  id: string;
  tableNumber: string;
  seats: number;
  status: 'available' | 'occupied' | 'reserved' | 'inactive';
  qrCode: string;
  lastUpdated: string;
  orderAmount?: number;
  occupiedSince?: string;
}

// ─── Mock data ───────────────────────────────────────────────────
const MOCK_DATA: Table[] = [
  { id: '1',  tableNumber: '1',  seats: 2, status: 'occupied',  qrCode: 'QR-TABLE-001', lastUpdated: '2026-03-17 15:30', orderAmount: 24000, occupiedSince: '15:12' },
  { id: '2',  tableNumber: '2',  seats: 4, status: 'available', qrCode: 'QR-TABLE-002', lastUpdated: '2026-03-17 14:20' },
  { id: '3',  tableNumber: '3',  seats: 2, status: 'occupied',  qrCode: 'QR-TABLE-003', lastUpdated: '2026-03-17 15:42', orderAmount: 32000, occupiedSince: '15:25' },
  { id: '4',  tableNumber: '4',  seats: 6, status: 'reserved',  qrCode: 'QR-TABLE-004', lastUpdated: '2026-03-17 13:00' },
  { id: '5',  tableNumber: '5',  seats: 4, status: 'occupied',  qrCode: 'QR-TABLE-005', lastUpdated: '2026-03-17 15:35', orderAmount: 18500, occupiedSince: '14:58' },
  { id: '6',  tableNumber: '6',  seats: 2, status: 'available', qrCode: 'QR-TABLE-006', lastUpdated: '2026-03-17 12:45' },
  { id: '7',  tableNumber: '7',  seats: 4, status: 'occupied',  qrCode: 'QR-TABLE-007', lastUpdated: '2026-03-17 15:38', orderAmount: 27000, occupiedSince: '15:10' },
  { id: '8',  tableNumber: '8',  seats: 8, status: 'available', qrCode: 'QR-TABLE-008', lastUpdated: '2026-03-17 11:30' },
  { id: '9',  tableNumber: '9',  seats: 2, status: 'inactive',  qrCode: 'QR-TABLE-009', lastUpdated: '2026-03-15 10:00' },
  { id: '10', tableNumber: '10', seats: 4, status: 'available', qrCode: 'QR-TABLE-010', lastUpdated: '2026-03-17 10:15' },
];

// ─── Status config ───────────────────────────────────────────────
const STATUS_CONFIG = {
  available: {
    dot: 'bg-emerald-400',
    label: '사용 가능',
    color: 'green' as const,
    cardBorder: 'border-slate-200',
    selectedBg: 'bg-emerald-50 border-emerald-200',
    leftBar: 'bg-emerald-400',
    actionLabel: '사용 시작',
    actionNext: 'occupied' as const,
    badge: 'bg-emerald-50 text-emerald-600',
  },
  occupied: {
    dot: 'bg-slate-700',
    label: '사용 중',
    color: 'red' as const,
    cardBorder: 'border-slate-200',
    selectedBg: 'bg-slate-100 border-slate-300',
    leftBar: 'bg-slate-700',
    actionLabel: '사용 종료',
    actionNext: 'available' as const,
    badge: 'bg-slate-100 text-slate-700',
  },
  reserved: {
    dot: 'bg-blue-400',
    label: '예약됨',
    color: 'blue' as const,
    cardBorder: 'border-slate-200',
    selectedBg: 'bg-blue-50 border-blue-200',
    leftBar: 'bg-blue-400',
    actionLabel: '예약 취소',
    actionNext: 'available' as const,
    badge: 'bg-blue-50 text-blue-600',
  },
  inactive: {
    dot: 'bg-slate-300',
    label: '비활성',
    color: 'gray' as const,
    cardBorder: 'border-slate-200',
    selectedBg: 'bg-slate-50 border-slate-200',
    leftBar: 'bg-slate-200',
    actionLabel: '',
    actionNext: 'available' as const,
    badge: 'bg-slate-100 text-slate-400',
  },
} as const;

const getStatusLabel = (s: Table['status']) => STATUS_CONFIG[s].label;

// ─── Table Card ──────────────────────────────────────────────────
function TableCard({
  table,
  isSelected,
  onSelect,
  onEdit,
  onShowQR,
  onChangeStatus,
}: {
  table: Table;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onEdit: (t: Table) => void;
  onShowQR: (t: Table) => void;
  onChangeStatus: (id: string, s: Table['status']) => void;
}) {
  const cfg = STATUS_CONFIG[table.status];
  const isOccupied = table.status === 'occupied';
  const isInactive = table.status === 'inactive';

  return (
    <div className={`rounded-[6px] flex flex-col overflow-hidden transition-all duration-200 border ${
      isSelected
        ? `${cfg.selectedBg} shadow-sm`
        : `bg-white ${cfg.cardBorder} hover:shadow-md hover:border-slate-300`
    }`}>
      {/* ── Top accent bar ── */}
      <div className={`h-0.5 w-full ${cfg.leftBar}`} />

      <div className="flex flex-col flex-1 p-3">
        {/* Top row: checkbox + QR */}
        <div className="flex items-start justify-between mb-3">
          <CheckboxField
            size="sm"
            checked={isSelected}
            onChange={() => onSelect(table.id)}
          />
          <Button
            variant="icon"
            size="sm"
            onClick={() => onShowQR(table)}
            title="QR 코드"
          >
            <QrCode size={13} />
          </Button>
        </div>

        {/* Table number + seats */}
        <div className="text-center mb-3">
          <div className={`text-3xl font-black tracking-tight leading-none mb-1 ${
            isInactive ? 'text-slate-300' : 'text-slate-800'
          }`}>
            {table.tableNumber}
          </div>
          <div className="flex items-center justify-center gap-1 text-slate-400">
            <Users size={10} />
            <span className="text-[11px]">{table.seats}인석</span>
          </div>
        </div>

        {/* Status badge */}
        <div className="flex justify-center mb-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium ${cfg.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
            {cfg.label}
          </span>
        </div>

        {/* Occupied info */}
        {isOccupied && (
          <div className="mb-3 bg-slate-50 rounded-lg px-2.5 py-2 space-y-1">
            {table.occupiedSince && (
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-[10px] text-slate-400">
                  <Timer size={9} />입석
                </span>
                <span className="text-[10px] font-semibold text-slate-600">{table.occupiedSince}</span>
              </div>
            )}
            {table.orderAmount != null && (
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400">금액</span>
                <span className="text-[10px] font-bold text-slate-700">₩{table.orderAmount.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions row */}
        <div className="flex items-center gap-1.5">
          {!isInactive ? (
            <Button
              variant="secondary"
              size="sm"
              className="flex-1 text-[10px]"
              onClick={() => onChangeStatus(table.id, cfg.actionNext)}
            >
              {cfg.actionLabel}
            </Button>
          ) : (
            <div className="flex-1" />
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(table)}
            title="수정"
          >
            <Pencil size={13} />
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────
export function ClientTableManagement() {
  const [data, setData] = useState<Table[]>(MOCK_DATA);
  const [filterStatus, setFilterStatus] = useState<Table['status'] | 'all'>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Table | null>(null);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [formData, setFormData] = useState<Partial<Table>>({});

  // Delete states
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);

  // Stats
  const availableCount = data.filter((t) => t.status === 'available').length;
  const occupiedCount  = data.filter((t) => t.status === 'occupied').length;
  const reservedCount  = data.filter((t) => t.status === 'reserved').length;
  const inactiveCount  = data.filter((t) => t.status === 'inactive').length;

  const activeData = filterStatus === 'all' ? data : data.filter((t) => t.status === filterStatus);

  // Checkbox
  const toggleSelectOne = (id: string) => {
    setSelectedIds((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  // Handlers
  const handleAdd = () => {
    setEditingItem(null);
    setFormData({ seats: 2, status: 'available' });
    setModalOpen(true);
  };

  const handleEdit = (item: Table) => {
    setEditingItem(item);
    setFormData(item);
    setModalOpen(true);
  };

  const handleSave = () => {
    const now = new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Seoul' }).replace('T', ' ').slice(0, 16);
    if (editingItem) {
      setData(data.map((item) => item.id === editingItem.id ? { ...item, ...formData, lastUpdated: now } : item));
    } else {
      setData([...data, {
        id: String(Date.now()),
        tableNumber: formData.tableNumber || '',
        seats: formData.seats || 2,
        status: formData.status || 'available',
        qrCode: `QR-TABLE-${String(Date.now()).slice(-3)}`,
        lastUpdated: now,
      }]);
    }
    setModalOpen(false);
  };

  const doBulkDelete = () => {
    setData(data.filter((item) => !selectedIds.has(item.id)));
    setSelectedIds(new Set());
    setBulkDeleteOpen(false);
  };

  const handleChangeStatus = (id: string, newStatus: Table['status']) => {
    const now = new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Seoul' }).replace('T', ' ').slice(0, 16);
    setData(data.map((item) => item.id === id ? { ...item, status: newStatus, lastUpdated: now } : item));
  };

  const totalRevenue = data.filter((t) => t.status === 'occupied').reduce((s, t) => s + (t.orderAmount || 0), 0);

  const FILTER_TABS: { key: Table['status'] | 'all'; label: string; count: number }[] = [
    { key: 'all',       label: '전체',      count: data.length },
    { key: 'available', label: '사용 가능', count: availableCount },
    { key: 'occupied',  label: '사용 중',   count: occupiedCount },
    { key: 'reserved',  label: '예약됨',    count: reservedCount },
    { key: 'inactive',  label: '비활성',    count: inactiveCount },
  ];

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">매장 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">테이블 관리</span>
      </nav>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white rounded-[6px] border border-slate-200 p-3.5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">전체 테이블</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">{data.length}</div>
        </div>
        <div className="bg-white rounded-[6px] border border-slate-200 p-3.5">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-xs text-slate-400">사용 가능</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">{availableCount}</div>
        </div>
        <div className="bg-white rounded-[6px] border border-slate-200 p-3.5">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
            <span className="text-xs text-slate-400">사용 중</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">{occupiedCount}</div>
          {totalRevenue > 0 && <div className="text-xs text-slate-400 mt-0.5">₩{totalRevenue.toLocaleString()}</div>}
        </div>
        <div className="bg-white rounded-[6px] border border-slate-200 p-3.5">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
            <span className="text-xs text-slate-400">예약됨</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">{reservedCount}</div>
        </div>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-slate-800">테이블 목록</h3>
            {selectedIds.size > 0 && (
              <span className="inline-flex items-center gap-1 text-xs text-[#FF6B2B] font-medium bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                {selectedIds.size}개 선택됨
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm" onClick={handleAdd} leftIcon={<Plus size={13} />}>
              테이블 추가
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={selectedIds.size === 0}
              onClick={() => setBulkDeleteOpen(true)}
            >
              {selectedIds.size > 0 ? `삭제 (${selectedIds.size})` : '삭제'}
            </Button>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-0 border-b border-slate-100 flex-wrap">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilterStatus(tab.key)}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                filterStatus === tab.key
                  ? 'text-[#FF6B2B] border-[#FF6B2B]'
                  : 'text-slate-500 border-transparent hover:text-slate-700 hover:border-slate-200'
              }`}
            >
              {tab.label}
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${
                filterStatus === tab.key ? 'bg-orange-100 text-[#FF6B2B]' : 'bg-slate-100 text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="p-4 md:p-5">
          {activeData.length === 0 ? (
            <div className="py-16 text-center text-slate-400 text-sm">해당 상태의 테이블이 없습니다</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {activeData.map((table) => (
                <TableCard
                  key={table.id}
                  table={table}
                  isSelected={selectedIds.has(table.id)}
                  onSelect={toggleSelectOne}
                  onEdit={handleEdit}
                  onShowQR={(t) => { setSelectedTable(t); setQrModalOpen(true); }}
                  onChangeStatus={handleChangeStatus}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        size="sm"
        title={editingItem ? '테이블 수정' : '테이블 추가'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setModalOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handleSave}>{editingItem ? '수정' : '추가'}</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <InputField label="테이블 번호" required value={formData.tableNumber || ''}
            onChange={(e) => setFormData({ ...formData, tableNumber: e.target.value })} placeholder="예: 1, A1, 테이블-1" />
          <InputField label="좌석 수" type="number" required value={formData.seats || ''}
            onChange={(e) => setFormData({ ...formData, seats: Number(e.target.value) })} placeholder="2" helperText="해당 테이블의 최대 수용 인원" />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              상태 <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['available', 'occupied', 'reserved', 'inactive'] as Table['status'][]).map((status) => (
                <label
                  key={status}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-[6px] border cursor-pointer transition-colors ${
                    formData.status === status ? 'border-[#FF6B2B] bg-orange-50' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <RadioField
                    size="sm"
                    name="status"
                    value={status}
                    checked={formData.status === status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Table['status'] })}
                  />
                  <span className="flex items-center gap-1.5 text-sm text-slate-700">
                    <span className={`w-1.5 h-1.5 rounded-full ${STATUS_CONFIG[status].dot}`} />
                    {getStatusLabel(status)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* QR Modal */}
      <Modal
        open={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
        size="sm"
        title={`테이블 ${selectedTable?.tableNumber} QR 코드`}
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setQrModalOpen(false)}>닫기</ModalBtn>
            <ModalBtn variant="primary" onClick={() => alert(`${selectedTable?.tableNumber}번 테이블 QR 코드를 다운로드합니다.`)} leftIcon={<Download size={15} />}>
              다운로드
            </ModalBtn>
          </>
        }
      >
        <div className="text-center space-y-4">
          <div className="w-56 h-56 mx-auto bg-slate-50 border border-slate-200 rounded-[8px] flex items-center justify-center">
            <div className="text-center">
              <QrCode size={140} className="text-slate-300 mx-auto mb-2" />
              <div className="text-xs text-slate-400">{selectedTable?.qrCode}</div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[6px] p-3.5">
            <div className="grid grid-cols-2 gap-3 text-left">
              <div>
                <div className="text-xs text-slate-400 mb-0.5">테이블 번호</div>
                <div className="text-sm font-medium text-slate-800">#{selectedTable?.tableNumber}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">좌석 수</div>
                <div className="text-sm font-medium text-slate-800">{selectedTable?.seats}인석</div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400">이 QR 코드를 스캔하면 해당 테이블의 주문 페이지로 이동합니다</p>
        </div>
      </Modal>

      {/* 다건 삭제 Modal */}
      <Modal
        open={bulkDeleteOpen}
        onClose={() => setBulkDeleteOpen(false)}
        size="sm"
        title="선택 테이블 삭제"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setBulkDeleteOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={doBulkDelete}>삭제</ModalBtn>
          </>
        }
      >
        <div className="flex items-start gap-2.5">
          <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-700">선택한 <strong>{selectedIds.size}개</strong> 테이블을 모두 삭제하시겠습니까?</p>
            <p className="text-xs text-slate-500 mt-1">삭제된 테이블의 QR 코드도 비활성화됩니다.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}