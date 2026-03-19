import { CheckboxField } from '../../components/ui/CheckboxField';
import { RadioField } from '../../components/ui/RadioField';
import { useState, useMemo } from 'react';
import { Plus, Pencil, Trash2, Search, X, AlertCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { InputField } from '../../components/ui/InputField';
import { Modal, ModalBtn } from '../../components/ui/Modal';
import { Tag } from '../../components/ui/Tag';
import { Toggle } from '../../components/ui/Toggle';

// ─── Types ───────────────────────────────────────────────────────
interface OptionItem {
  id: string;
  name: string;
  price: number;
}

interface OptionGroup {
  id: string;
  name: string;
  type: 'single' | 'multiple';
  required: boolean;
  status: 'active' | 'inactive';
  items: OptionItem[];
}

// ─── Mock data ───────────────────────────────────────────────────
const MOCK_DATA: OptionGroup[] = [
  {
    id: '1',
    name: '맵기 조절',
    type: 'single',
    required: false,
    status: 'active',
    items: [
      { id: '1-1', name: '순한맛', price: 0 },
      { id: '1-2', name: '보통맛', price: 0 },
      { id: '1-3', name: '매운맛', price: 0 },
      { id: '1-4', name: '아주 매운맛', price: 500 },
    ],
  },
  {
    id: '2',
    name: '밥 양',
    type: 'single',
    required: true,
    status: 'active',
    items: [
      { id: '2-1', name: '소', price: -500 },
      { id: '2-2', name: '중', price: 0 },
      { id: '2-3', name: '대', price: 500 },
    ],
  },
  {
    id: '3',
    name: '추가 토핑',
    type: 'multiple',
    required: false,
    status: 'active',
    items: [
      { id: '3-1', name: '치즈 추가', price: 1000 },
      { id: '3-2', name: '베이컨 추가', price: 1500 },
      { id: '3-3', name: '계란 추가', price: 500 },
      { id: '3-4', name: '야채 추가', price: 500 },
    ],
  },
  {
    id: '4',
    name: '소스 선택',
    type: 'single',
    required: true,
    status: 'active',
    items: [
      { id: '4-1', name: '데미글라스', price: 0 },
      { id: '4-2', name: '타르타르', price: 0 },
      { id: '4-3', name: '칠리', price: 0 },
    ],
  },
  {
    id: '5',
    name: '사이즈',
    type: 'single',
    required: true,
    status: 'inactive',
    items: [
      { id: '5-1', name: 'S', price: -1000 },
      { id: '5-2', name: 'M', price: 0 },
      { id: '5-3', name: 'L', price: 1000 },
    ],
  },
];

// ─── Main ────────────────────────────────────────────────────────
export function ClientOptionManagement() {
  const [data, setData] = useState<OptionGroup[]>(MOCK_DATA);
  const [searchTerm, setSearchTerm] = useState('');

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<OptionGroup | null>(null);
  const [formData, setFormData] = useState<Partial<OptionGroup>>({});
  const [newItems, setNewItems] = useState<OptionItem[]>([]);

  // Delete states
  const [deleteTarget, setDeleteTarget] = useState<OptionGroup | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);

  // Filtered data
  const filtered = useMemo(() =>
    data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [data, searchTerm]
  );

  // Checkbox helpers
  const allSelected = filtered.length > 0 && filtered.every((i) => selectedIds.has(i.id));
  const someSelected = filtered.some((i) => selectedIds.has(i.id));

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds((prev) => { const next = new Set(prev); filtered.forEach((i) => next.delete(i.id)); return next; });
    } else {
      setSelectedIds((prev) => { const next = new Set(prev); filtered.forEach((i) => next.add(i.id)); return next; });
    }
  };
  const toggleSelectOne = (id: string) => {
    setSelectedIds((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  // Handlers
  const handleAdd = () => {
    setEditingItem(null);
    setFormData({ type: 'single', required: false, status: 'active' });
    setNewItems([{ id: '1', name: '', price: 0 }]);
    setModalOpen(true);
  };

  const handleEdit = (item: OptionGroup) => {
    setEditingItem(item);
    setFormData(item);
    setNewItems(item.items);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (editingItem) {
      setData(data.map((item) => item.id === editingItem.id ? { ...item, ...formData, items: newItems } : item));
    } else {
      setData([...data, {
        id: String(Date.now()),
        name: formData.name || '',
        type: formData.type || 'single',
        required: formData.required || false,
        status: formData.status || 'active',
        items: newItems,
      }]);
    }
    setModalOpen(false);
  };

  const doDelete = () => {
    if (!deleteTarget) return;
    setData(data.filter((item) => item.id !== deleteTarget.id));
    setSelectedIds((prev) => { const next = new Set(prev); next.delete(deleteTarget.id); return next; });
    setDeleteTarget(null);
  };

  const doBulkDelete = () => {
    setData(data.filter((item) => !selectedIds.has(item.id)));
    setSelectedIds(new Set());
    setBulkDeleteOpen(false);
  };

  const handleToggleStatus = (id: string) => {
    setData(data.map((item) => item.id === id ? { ...item, status: item.status === 'active' ? 'inactive' : 'active' } : item));
  };

  const handleAddOptionItem = () => {
    setNewItems([...newItems, { id: String(Date.now()), name: '', price: 0 }]);
  };

  const handleRemoveOptionItem = (id: string) => {
    setNewItems(newItems.filter((item) => item.id !== id));
  };

  const handleUpdateOptionItem = (id: string, field: 'name' | 'price', value: string | number) => {
    setNewItems(newItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">메뉴 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">옵션 그룹 관리</span>
      </nav>

      {/* Search card */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <InputField
              inputSize="md"
              placeholder="옵션 그룹명으로 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={Search}
            />
          </div>
          {searchTerm && (
            <Button variant="outline" size="md" leftIcon={<X size={14} />} onClick={() => setSearchTerm('')}>
              초기화
            </Button>
          )}
        </div>
      </div>

      {/* Table card */}
      <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
        {/* Table header */}
        <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-slate-800">옵션 그룹 목록</h3>
            <span className="text-xs text-slate-400">총 {filtered.length}개</span>
            {selectedIds.size > 0 && (
              <span className="inline-flex items-center gap-1 text-xs text-[#FF6B2B] font-medium bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                {selectedIds.size}개 선택됨
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm" onClick={handleAdd} leftIcon={<Plus size={13} />}>
              <span className="hidden sm:inline">옵션 그룹 추가</span>
              <span className="sm:hidden">추가</span>
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

        {/* Desktop Table (md+) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-3 py-2.5 w-9">
                  <CheckboxField
                    size="sm"
                    checked={allSelected}
                    indeterminate={someSelected && !allSelected}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">그룹명</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">선택 타입</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">필수 선택</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">옵션 항목</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">상태</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-3 py-12 text-center text-slate-400">
                    검색 결과가 없습니다
                  </td>
                </tr>
              ) : (
                filtered.map((item) => {
                  const isSelected = selectedIds.has(item.id);
                  return (
                    <tr key={item.id} className={`transition-colors ${isSelected ? 'bg-[#FF6B2B]/5' : 'hover:bg-slate-50'}`}>
                      <td className="px-3 py-2.5">
                        <CheckboxField size="sm" checked={isSelected} onChange={() => toggleSelectOne(item.id)} />
                      </td>
                      <td className="px-3 py-2.5 font-medium text-slate-800">{item.name}</td>
                      <td className="px-3 py-2.5">
                        <Tag variant="outline" size="sm">
                          {item.type === 'single' ? '단일 선택' : '다중 선택'}
                        </Tag>
                      </td>
                      <td className="px-3 py-2.5">
                        {item.required ? (
                          <Tag color="orange" variant="soft" size="sm">필수</Tag>
                        ) : (
                          <Tag variant="outline" color="gray" size="sm">선택</Tag>
                        )}
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="space-y-1">
                          {item.items.map((opt, idx) => (
                            <div key={idx} className="text-xs text-slate-600">
                              {opt.name}
                              {opt.price !== 0 && (
                                <span className="text-slate-400">
                                  {' '}({opt.price > 0 ? '+' : ''}{opt.price.toLocaleString()}원)
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex justify-center">
                          <Toggle size="sm" checked={item.status === 'active'} onChange={() => handleToggleStatus(item.id)} />
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <Button
                          variant="icon"
                          size="sm"
                          onClick={() => handleEdit(item)}
                          iconOnly={<Pencil size={13} />}
                          className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50"
                        />
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card List (< md) */}
        <div className="md:hidden divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <div className="px-4 py-12 text-center text-slate-400">검색 결과가 없습니다</div>
          ) : (
            filtered.map((item) => {
              const isSelected = selectedIds.has(item.id);
              return (
                <div key={item.id} className={`px-4 py-3.5 transition-colors ${isSelected ? 'bg-[#FF6B2B]/5' : 'hover:bg-slate-50'}`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <CheckboxField size="sm" checked={isSelected} onChange={() => toggleSelectOne(item.id)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            <span className="font-medium text-slate-800 text-sm">{item.name}</span>
                            <Tag variant="outline" size="sm">{item.type === 'single' ? '단일' : '다중'}</Tag>
                            {item.required ? (
                              <Tag color="orange" variant="soft" size="sm">필수</Tag>
                            ) : (
                              <Tag variant="outline" color="gray" size="sm">선택</Tag>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.items.slice(0, 4).map((opt, idx) => (
                              <span key={idx} className="text-xs text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-[3px]">
                                {opt.name}
                                {opt.price !== 0 && (
                                  <span className="text-slate-400 ml-0.5">({opt.price > 0 ? '+' : ''}{opt.price.toLocaleString()}원)</span>
                                )}
                              </span>
                            ))}
                            {item.items.length > 4 && <span className="text-xs text-slate-400">+{item.items.length - 4}개</span>}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <Toggle size="sm" checked={item.status === 'active'} onChange={() => handleToggleStatus(item.id)} />
                          <Button
                            variant="icon"
                            size="sm"
                            onClick={() => handleEdit(item)}
                            iconOnly={<Pencil size={13} />}
                            className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        size="lg"
        title={editingItem ? '옵션 그룹 수정' : '옵션 그룹 추가'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setModalOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handleSave}>{editingItem ? '수정' : '추가'}</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <InputField
            label="그룹명"
            required
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="예: 맵기 조절, 사이즈 선택"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                선택 타입 <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <RadioField
                  label="단일 선택"
                  value="single"
                  checked={formData.type === 'single'}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as 'single' })}
                />
                <RadioField
                  label="다중 선택"
                  value="multiple"
                  checked={formData.type === 'multiple'}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as 'multiple' })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">필수 선택</label>
              <CheckboxField
                label="고객이 반드시 선택해야 함"
                checked={formData.required || false}
                onChange={(e) => setFormData({ ...formData, required: e.target.checked })}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-slate-700">
                옵션 항목 <span className="text-red-500">*</span>
              </label>
              <Button variant="outline" size="sm" onClick={handleAddOptionItem} leftIcon={<Plus size={13} />}>항목 추가</Button>
            </div>
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
              {newItems.map((item) => (
                <div key={item.id} className="flex gap-2 items-start">
                  <div className="flex-1">
                    <InputField inputSize="sm" placeholder="옵션명" value={item.name}
                      onChange={(e) => handleUpdateOptionItem(item.id, 'name', e.target.value)} />
                  </div>
                  <div className="w-[120px] sm:w-[140px]">
                    <InputField inputSize="sm" type="number" placeholder="0" value={item.price}
                      onChange={(e) => handleUpdateOptionItem(item.id, 'price', Number(e.target.value))} suffix="원" />
                  </div>
                  <Button
                    variant="icon"
                    size="sm"
                    iconOnly={<Trash2 size={13} />}
                    onClick={() => handleRemoveOptionItem(item.id)}
                    disabled={newItems.length === 1}
                    className="text-slate-400 hover:text-red-500 hover:bg-red-50 mt-0.5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* 단건 삭제 Modal */}
      <Modal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        size="sm"
        title="옵션 그룹 삭제"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDeleteTarget(null)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={doDelete}>삭제</ModalBtn>
          </>
        }
      >
        {deleteTarget && (
          <div className="flex items-start gap-2.5">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-slate-700"><strong>"{deleteTarget.name}"</strong> 옵션 그룹을 삭제하시겠습니까?</p>
              <p className="text-xs text-slate-500 mt-1">이 작업은 되돌릴 수 없습니다.</p>
            </div>
          </div>
        )}
      </Modal>

      {/* 다건 삭제 Modal */}
      <Modal
        open={bulkDeleteOpen}
        onClose={() => setBulkDeleteOpen(false)}
        size="sm"
        title="선택 옵션 그룹 삭제"
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
            <p className="text-sm text-slate-700">선택한 <strong>{selectedIds.size}개</strong> 옵션 그룹을 모두 삭제하시겠습니까?</p>
            <p className="text-xs text-slate-500 mt-1">이 작업은 되돌릴 수 없습니다.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}