import { useState, useMemo } from 'react';
import { Plus, Pencil, Search, X, AlertTriangle, TrendingDown, Link2, Zap, AlertCircle, ArrowDownToLine, ArrowUpFromLine } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { InputField } from '../../components/ui/InputField';
import { DropdownSelect } from '../../components/ui/DropdownSelect';
import { Modal, ModalBtn } from '../../components/ui/Modal';
import { Tag } from '../../components/ui/Tag';
import { Toggle } from '../../components/ui/Toggle';
import { Pagination } from '../../components/ui/Pagination';
import { CheckboxField } from '../../components/ui/CheckboxField';

// ─── Types ───────────────────────────────────────────────────────
interface InventoryItem {
  id: string;
  name: string;
  category: string;
  unit: string;
  currentStock: number;
  minStock: number;
  lastUpdated: string;
}

interface MenuStockLimit {
  id: string;
  menuName: string;
  category: string;
  dailyLimit: number;
  remaining: number;
  linkedIngredient?: string;
  active: boolean;
}

// ─── Mock data ───────────────────────────────────────────────────
const MOCK_INVENTORY: InventoryItem[] = [
  { id: '1', name: '쌀', category: '곡류', unit: 'kg', currentStock: 50, minStock: 20, lastUpdated: '2026-03-17 09:00' },
  { id: '2', name: '돼지고기 (앞다리)', category: '육류', unit: 'kg', currentStock: 15, minStock: 10, lastUpdated: '2026-03-17 08:30' },
  { id: '3', name: '김치', category: '채소/반찬', unit: 'kg', currentStock: 5, minStock: 10, lastUpdated: '2026-03-16 18:00' },
  { id: '4', name: '계란', category: '기타', unit: '판', currentStock: 8, minStock: 5, lastUpdated: '2026-03-17 07:00' },
  { id: '5', name: '양파', category: '채소/반찬', unit: 'kg', currentStock: 12, minStock: 8, lastUpdated: '2026-03-16 15:00' },
  { id: '6', name: '당근', category: '채소/반찬', unit: 'kg', currentStock: 2, minStock: 5, lastUpdated: '2026-03-15 17:00' },
  { id: '7', name: '식용유', category: '조미료/양념', unit: 'L', currentStock: 18, minStock: 10, lastUpdated: '2026-03-17 10:00' },
  { id: '8', name: '간장', category: '조미료/양념', unit: 'L', currentStock: 6, minStock: 3, lastUpdated: '2026-03-16 14:00' },
  { id: '9', name: '참기름', category: '조미료/양념', unit: 'L', currentStock: 3, minStock: 2, lastUpdated: '2026-03-17 08:00' },
  { id: '10', name: '소고기 (등심)', category: '육류', unit: 'kg', currentStock: 8, minStock: 5, lastUpdated: '2026-03-17 09:30' },
];

const MOCK_MENU_STOCKS: MenuStockLimit[] = [
  { id: '1', menuName: '비빔밥', category: '한식', dailyLimit: 30, remaining: 18, linkedIngredient: '쌀', active: true },
  { id: '2', menuName: '제육볶음', category: '한식', dailyLimit: 15, remaining: 9, linkedIngredient: '돼지고기 (앞다리)', active: true },
  { id: '3', menuName: '돈까스 런치세트', category: '일식', dailyLimit: 20, remaining: 20, active: true },
  { id: '4', menuName: '된장찌개', category: '한식', dailyLimit: 25, remaining: 0, linkedIngredient: '된장', active: false },
];

const CATEGORIES = ['전체', '곡류', '육류', '채소/반찬', '조미료/양념', '기타'];

function getStockTag(item: InventoryItem) {
  const isLow = item.currentStock < item.minStock;
  const pct = (item.currentStock / item.minStock) * 100;
  if (isLow) return <Tag variant="error" size="sm"><TrendingDown size={12} />부족</Tag>;
  if (pct < 150) return <Tag variant="warning" size="sm">주의</Tag>;
  return <Tag variant="success" size="sm">충분</Tag>;
}

// ─── Main ────────────────────────────────────────────────────────
export function ClientInventoryManagement() {
  const [activeTab, setActiveTab] = useState<'ingredient' | 'menu-stock'>('ingredient');

  // ── Ingredient tab state ──
  const [data, setData] = useState<InventoryItem[]>(MOCK_INVENTORY);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [showLowStock, setShowLowStock] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [modalOpen, setModalOpen] = useState(false);
  const [stockModalOpen, setStockModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [formData, setFormData] = useState<Partial<InventoryItem>>({});
  const [stockChange, setStockChange] = useState<{ amount: number; type: 'in' | 'out' }>({ amount: 0, type: 'in' });

  // Ingredient delete states
  const [deleteIngTarget, setDeleteIngTarget] = useState<InventoryItem | null>(null);
  const [selectedIngIds, setSelectedIngIds] = useState<Set<string>>(new Set());
  const [bulkDeleteIngOpen, setBulkDeleteIngOpen] = useState(false);

  // ── Menu stock tab state ──
  const [menuStocks, setMenuStocks] = useState<MenuStockLimit[]>(MOCK_MENU_STOCKS);
  const [menuStockModalOpen, setMenuStockModalOpen] = useState(false);
  const [editingMenuStock, setEditingMenuStock] = useState<MenuStockLimit | null>(null);
  const [menuStockForm, setMenuStockForm] = useState<Partial<MenuStockLimit>>({});

  // Menu stock delete states
  const [deleteMenuTarget, setDeleteMenuTarget] = useState<MenuStockLimit | null>(null);
  const [selectedMenuIds, setSelectedMenuIds] = useState<Set<string>>(new Set());
  const [bulkDeleteMenuOpen, setBulkDeleteMenuOpen] = useState(false);

  // Filtered ingredient data
  const filtered = useMemo(() => data.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === '전체' || item.category === selectedCategory;
    const matchLowStock = !showLowStock || item.currentStock < item.minStock;
    return matchSearch && matchCategory && matchLowStock;
  }), [data, searchTerm, selectedCategory, showLowStock]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedData = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const lowStockCount = data.filter((item) => item.currentStock < item.minStock).length;

  // Ingredient checkbox helpers
  const ingPageIds = paginatedData.map((i) => i.id);
  const allIngSelected = ingPageIds.length > 0 && ingPageIds.every((id) => selectedIngIds.has(id));
  const someIngSelected = ingPageIds.some((id) => selectedIngIds.has(id));
  const toggleIngAll = () => {
    if (allIngSelected) {
      setSelectedIngIds((prev) => { const next = new Set(prev); ingPageIds.forEach((id) => next.delete(id)); return next; });
    } else {
      setSelectedIngIds((prev) => { const next = new Set(prev); ingPageIds.forEach((id) => next.add(id)); return next; });
    }
  };
  const toggleIngOne = (id: string) => {
    setSelectedIngIds((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  // Menu stock checkbox helpers
  const allMenuSelected = menuStocks.length > 0 && menuStocks.every((m) => selectedMenuIds.has(m.id));
  const someMenuSelected = menuStocks.some((m) => selectedMenuIds.has(m.id));
  const toggleMenuAll = () => {
    if (allMenuSelected) {
      setSelectedMenuIds((prev) => { const next = new Set(prev); menuStocks.forEach((m) => next.delete(m.id)); return next; });
    } else {
      setSelectedMenuIds((prev) => { const next = new Set(prev); menuStocks.forEach((m) => next.add(m.id)); return next; });
    }
  };
  const toggleMenuOne = (id: string) => {
    setSelectedMenuIds((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  // ── Ingredient handlers ──
  const handleAdd = () => { setEditingItem(null); setFormData({ currentStock: 0, minStock: 0 }); setModalOpen(true); };
  const handleEdit = (item: InventoryItem) => { setEditingItem(item); setFormData(item); setModalOpen(true); };
  const handleSave = () => {
    const now = new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Seoul' }).replace('T', ' ').slice(0, 16);
    if (editingItem) {
      setData(data.map((item) => item.id === editingItem.id ? { ...item, ...formData, lastUpdated: now } : item));
    } else {
      setData([...data, {
        id: String(Date.now()),
        name: formData.name || '',
        category: formData.category || '기타',
        unit: formData.unit || 'kg',
        currentStock: formData.currentStock || 0,
        minStock: formData.minStock || 0,
        lastUpdated: now,
      }]);
    }
    setModalOpen(false);
  };
  const doDeleteIng = () => {
    if (!deleteIngTarget) return;
    setData(data.filter((item) => item.id !== deleteIngTarget.id));
    setSelectedIngIds((prev) => { const next = new Set(prev); next.delete(deleteIngTarget.id); return next; });
    setDeleteIngTarget(null);
  };
  const doBulkDeleteIng = () => {
    setData(data.filter((item) => !selectedIngIds.has(item.id)));
    setSelectedIngIds(new Set());
    setBulkDeleteIngOpen(false);
  };
  const handleOpenStockModal = (item: InventoryItem, type: 'in' | 'out' = 'in') => {
    setEditingItem(item);
    setStockChange({ amount: 0, type });
    setStockModalOpen(true);
  };
  const handleStockUpdate = () => {
    if (!editingItem) return;
    const now = new Date().toLocaleString('sv-SE', { timeZone: 'Asia/Seoul' }).replace('T', ' ').slice(0, 16);
    const newStock = stockChange.type === 'in'
      ? editingItem.currentStock + stockChange.amount
      : editingItem.currentStock - stockChange.amount;
    setData(data.map((item) => item.id === editingItem.id ? { ...item, currentStock: Math.max(0, newStock), lastUpdated: now } : item));
    setStockModalOpen(false);
  };

  // ── Menu stock handlers ──
  const handleMenuStockAdd = () => { setEditingMenuStock(null); setMenuStockForm({ dailyLimit: 20, remaining: 20, active: true }); setMenuStockModalOpen(true); };
  const handleMenuStockEdit = (item: MenuStockLimit) => { setEditingMenuStock(item); setMenuStockForm(item); setMenuStockModalOpen(true); };
  const handleMenuStockSave = () => {
    if (editingMenuStock) {
      setMenuStocks(menuStocks.map((m) => m.id === editingMenuStock.id ? { ...m, ...menuStockForm } as MenuStockLimit : m));
    } else {
      setMenuStocks([...menuStocks, {
        id: String(Date.now()),
        menuName: menuStockForm.menuName || '',
        category: menuStockForm.category || '한식',
        dailyLimit: menuStockForm.dailyLimit || 0,
        remaining: menuStockForm.remaining ?? menuStockForm.dailyLimit ?? 0,
        linkedIngredient: menuStockForm.linkedIngredient,
        active: menuStockForm.active ?? true,
      }]);
    }
    setMenuStockModalOpen(false);
  };
  const doDeleteMenu = () => {
    if (!deleteMenuTarget) return;
    setMenuStocks(menuStocks.filter((m) => m.id !== deleteMenuTarget.id));
    setSelectedMenuIds((prev) => { const next = new Set(prev); next.delete(deleteMenuTarget.id); return next; });
    setDeleteMenuTarget(null);
  };
  const doBulkDeleteMenu = () => {
    setMenuStocks(menuStocks.filter((m) => !selectedMenuIds.has(m.id)));
    setSelectedMenuIds(new Set());
    setBulkDeleteMenuOpen(false);
  };
  const handleResetRemaining = (id: string) => {
    setMenuStocks(menuStocks.map((m) => m.id === id ? { ...m, remaining: m.dailyLimit } : m));
  };

  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-slate-400">재고 관리</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium">재고 관리</span>
      </nav>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-0">
        <button
          onClick={() => setActiveTab('ingredient')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
            activeTab === 'ingredient' ? 'text-[#FF6B2B] border-[#FF6B2B]' : 'text-slate-500 border-transparent hover:text-slate-700'
          }`}
        >
          재료 재고
        </button>
        <button
          onClick={() => setActiveTab('menu-stock')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
            activeTab === 'menu-stock' ? 'text-[#FF6B2B] border-[#FF6B2B]' : 'text-slate-500 border-transparent hover:text-slate-700'
          }`}
        >
          <Zap size={14} />
          한정수량 메뉴
          {menuStocks.filter((m) => m.active && m.remaining === 0).length > 0 && (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-red-100 text-red-600">
              {menuStocks.filter((m) => m.active && m.remaining === 0).length}
            </span>
          )}
        </button>
      </div>

      {/* ── TAB: 재료 재고 ── */}
      {activeTab === 'ingredient' && (
        <>
          {/* Low stock alert */}
          {lowStockCount > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-[6px] p-4 flex items-start gap-3">
              <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-amber-800 mb-0.5">재고 부족 알림</h4>
                <p className="text-xs text-amber-700">
                  최소 재고량보다 적은 품목이 <strong>{lowStockCount}개</strong> 있습니다. 발주가 필요합니다.
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setShowLowStock(!showLowStock)} className="shrink-0 whitespace-nowrap">
                {showLowStock ? '전체 보기' : '부족만 보기'}
              </Button>
            </div>
          )}

          {/* Search */}
          <div className="bg-white rounded-[6px] border border-slate-200 p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <InputField inputSize="md" placeholder="재료명으로 검색" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} icon={Search} />
              </div>
              <div className="w-full sm:w-[160px]">
                <DropdownSelect size="md" options={CATEGORIES.map((c) => ({ value: c, label: c }))} value={selectedCategory} onChange={(val) => setSelectedCategory(val)} placeholder="카테고리" />
              </div>
              {(searchTerm || selectedCategory !== '전체') && (
                <Button variant="outline" size="md" leftIcon={<X size={14} />} onClick={() => { setSearchTerm(''); setSelectedCategory('전체'); }}>초기화</Button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium text-slate-800">재고 목록</h3>
                <span className="text-xs text-slate-400">총 {filtered.length}개</span>
                {selectedIngIds.size > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-[#FF6B2B] font-medium bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                    {selectedIngIds.size}개 선택됨
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="primary" size="sm" onClick={handleAdd} leftIcon={<Plus size={13} />}>재료 추가</Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={selectedIngIds.size === 0}
                  onClick={() => setBulkDeleteIngOpen(true)}
                >
                  {selectedIngIds.size > 0 ? `삭제 (${selectedIngIds.size})` : '삭제'}
                </Button>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-3 py-2.5 w-9">
                      <CheckboxField size="sm" checked={allIngSelected} indeterminate={someIngSelected && !allIngSelected} onChange={toggleIngAll} />
                    </th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">재료명</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">카테고리</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">현재 재고</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">최소 재고</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">상태</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">최종 수정</th>
                    <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">입출고</th>
                    <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedData.length === 0 ? (
                    <tr><td colSpan={9} className="px-3 py-12 text-center text-slate-400">검색 결과가 없습니다</td></tr>
                  ) : (
                    paginatedData.map((item) => {
                      const isLow = item.currentStock < item.minStock;
                      const isSelected = selectedIngIds.has(item.id);
                      return (
                        <tr key={item.id} className={`transition-colors ${isSelected ? 'bg-[#FF6B2B]/5' : 'hover:bg-slate-50'}`}>
                          <td className="px-3 py-2.5">
                            <CheckboxField size="sm" checked={isSelected} onChange={() => toggleIngOne(item.id)} />
                          </td>
                          <td className="px-3 py-2.5 font-medium text-slate-800">{item.name}</td>
                          <td className="px-3 py-2.5"><Tag variant="outline" size="sm">{item.category}</Tag></td>
                          <td className="px-3 py-2.5">
                            <span className={isLow ? 'text-red-600 font-medium' : 'text-slate-800'}>
                              {item.currentStock} {item.unit}
                            </span>
                          </td>
                          <td className="px-3 py-2.5 text-slate-600">{item.minStock} {item.unit}</td>
                          <td className="px-3 py-2.5">{getStockTag(item)}</td>
                          <td className="px-3 py-2.5 text-xs text-slate-400">{item.lastUpdated}</td>
                          <td className="px-3 py-2.5 text-center">
                            <Button variant="secondary" size="sm" onClick={() => handleOpenStockModal(item, 'in')} className="text-[#FF6B2B] bg-orange-50 hover:bg-orange-100">입출고</Button>
                          </td>
                          <td className="px-3 py-2.5 text-center">
                            <Button variant="icon" size="sm" onClick={() => handleEdit(item)} iconOnly={<Pencil size={13} />} className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50" />
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="md:hidden divide-y divide-slate-100">
              {paginatedData.length === 0 ? (
                <div className="px-4 py-12 text-center text-slate-400">검색 결과가 없습니다</div>
              ) : (
                paginatedData.map((item) => {
                  const isLow = item.currentStock < item.minStock;
                  const isSelected = selectedIngIds.has(item.id);
                  return (
                    <div key={item.id} className={`px-4 py-3.5 transition-colors ${isSelected ? 'bg-[#FF6B2B]/5' : ''}`}>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 shrink-0">
                          <CheckboxField size="sm" checked={isSelected} onChange={() => toggleIngOne(item.id)} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span className="font-medium text-slate-800 text-sm">{item.name}</span>
                                <Tag variant="outline" size="sm">{item.category}</Tag>
                                {getStockTag(item)}
                              </div>
                              <div className="flex items-center gap-3 text-xs mt-1">
                                <span className={isLow ? 'text-red-600 font-medium' : 'text-slate-700'}>
                                  현재 {item.currentStock} {item.unit}
                                </span>
                                <span className="text-slate-300">|</span>
                                <span className="text-slate-500">최소 {item.minStock} {item.unit}</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1.5 shrink-0">
                              <Button variant="secondary" size="sm" onClick={() => handleOpenStockModal(item, 'in')} className="text-[#FF6B2B] bg-orange-50 hover:bg-orange-100">입출고</Button>
                              <Button variant="icon" size="sm" onClick={() => handleEdit(item)} iconOnly={<Pencil size={13} />} className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {totalPages > 1 && (
              <div className="px-4 md:px-5 py-4 border-t border-slate-200">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            )}
          </div>
        </>
      )}

      {/* ── TAB: 한정수량 메뉴 ── */}
      {activeTab === 'menu-stock' && (
        <>
          <div className="bg-purple-50 border border-purple-100 rounded-[6px] p-4 flex items-start gap-3">
            <Zap size={18} className="text-purple-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-purple-800 mb-0.5">한정수량 메뉴 재고 설정</p>
              <p className="text-xs text-purple-600">메뉴별 하루 판매 가능 수량을 설정합니다. 재고가 0이 되면 자동으로 품절 처리됩니다.</p>
            </div>
          </div>

          <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 md:px-5 py-3.5 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium text-slate-800">한정 메뉴 목록</h3>
                <span className="text-xs text-slate-400">총 {menuStocks.length}개</span>
                {selectedMenuIds.size > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-[#FF6B2B] font-medium bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                    {selectedMenuIds.size}개 선택됨
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="primary" size="sm" onClick={handleMenuStockAdd} leftIcon={<Plus size={13} />}>메뉴 추가</Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={selectedMenuIds.size === 0}
                  onClick={() => setBulkDeleteMenuOpen(true)}
                >
                  {selectedMenuIds.size > 0 ? `삭제 (${selectedMenuIds.size})` : '삭제'}
                </Button>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-3 py-2.5 w-9">
                      <CheckboxField size="sm" checked={allMenuSelected} indeterminate={someMenuSelected && !allMenuSelected} onChange={toggleMenuAll} />
                    </th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">메뉴명</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">카테고리</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">일일 한정수량</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">남은 수량</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">연동 재료</th>
                    <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">활성</th>
                    <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {menuStocks.map((item) => {
                    const pct = item.dailyLimit > 0 ? (item.remaining / item.dailyLimit) * 100 : 100;
                    const isSoldOut = item.remaining === 0 && item.active;
                    const isSelected = selectedMenuIds.has(item.id);
                    return (
                      <tr key={item.id} className={`transition-colors ${isSelected ? 'bg-[#FF6B2B]/5' : isSoldOut ? 'bg-red-50/30' : 'hover:bg-slate-50'}`}>
                        <td className="px-3 py-2.5">
                          <CheckboxField size="sm" checked={isSelected} onChange={() => toggleMenuOne(item.id)} />
                        </td>
                        <td className="px-3 py-2.5">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-slate-800">{item.menuName}</span>
                            {isSoldOut && <span className="px-1.5 py-0.5 rounded-[3px] text-[10px] font-medium bg-red-100 text-red-600">품절</span>}
                          </div>
                        </td>
                        <td className="px-3 py-2.5"><Tag variant="outline" size="sm">{item.category}</Tag></td>
                        <td className="px-3 py-2.5 font-medium text-slate-700">{item.dailyLimit}개</td>
                        <td className="px-3 py-2.5">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 min-w-[80px]">
                              <div className="flex justify-between text-xs mb-1">
                                <span className={isSoldOut ? 'text-red-500 font-medium' : pct < 30 ? 'text-amber-500 font-medium' : 'text-slate-700'}>
                                  {item.remaining}개
                                </span>
                                <span className="text-slate-400">{Math.round(pct)}%</span>
                              </div>
                              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all ${isSoldOut ? 'bg-red-400' : pct < 30 ? 'bg-amber-400' : 'bg-purple-400'}`}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                            </div>
                            <button
                              onClick={() => handleResetRemaining(item.id)}
                              className="text-xs text-slate-400 hover:text-[#FF6B2B] transition-colors whitespace-nowrap"
                              title="초기화"
                            >
                              초기화
                            </button>
                          </div>
                        </td>
                        <td className="px-3 py-2.5">
                          {item.linkedIngredient ? (
                            <span className="flex items-center gap-1 text-xs text-slate-500">
                              <Link2 size={11} className="text-slate-400" />{item.linkedIngredient}
                            </span>
                          ) : (
                            <span className="text-xs text-slate-300">미연동</span>
                          )}
                        </td>
                        <td className="px-3 py-2.5">
                          <div className="flex justify-center">
                            <Toggle size="sm" checked={item.active} onChange={() => setMenuStocks(menuStocks.map((m) => m.id === item.id ? { ...m, active: !m.active } : m))} />
                          </div>
                        </td>
                        <td className="px-3 py-2.5 text-center">
                          <Button variant="icon" size="sm" onClick={() => handleMenuStockEdit(item)} iconOnly={<Pencil size={13} />} className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="md:hidden divide-y divide-slate-100">
              {menuStocks.map((item) => {
                const pct = item.dailyLimit > 0 ? (item.remaining / item.dailyLimit) * 100 : 100;
                const isSoldOut = item.remaining === 0 && item.active;
                const isSelected = selectedMenuIds.has(item.id);
                return (
                  <div key={item.id} className={`px-4 py-3.5 transition-colors ${isSelected ? 'bg-[#FF6B2B]/5' : isSoldOut ? 'bg-red-50/30' : ''}`}>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 shrink-0">
                        <CheckboxField size="sm" checked={isSelected} onChange={() => toggleMenuOne(item.id)} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="font-medium text-slate-800 text-sm">{item.menuName}</span>
                              <Tag variant="outline" size="sm">{item.category}</Tag>
                              {isSoldOut && <span className="px-1.5 py-0.5 rounded-[3px] text-[10px] font-medium bg-red-100 text-red-600">품절</span>}
                            </div>
                            {item.linkedIngredient && (
                              <div className="flex items-center gap-1 text-xs text-slate-400 mb-2">
                                <Link2 size={10} />연동: {item.linkedIngredient}
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <div className="flex-1">
                                <div className="flex justify-between text-xs mb-1">
                                  <span className={isSoldOut ? 'text-red-500 font-medium' : pct < 30 ? 'text-amber-500' : 'text-slate-600'}>
                                    {item.remaining} / {item.dailyLimit}개
                                  </span>
                                  <span className="text-slate-400">{Math.round(pct)}%</span>
                                </div>
                                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                  <div className={`h-full rounded-full ${isSoldOut ? 'bg-red-400' : pct < 30 ? 'bg-amber-400' : 'bg-purple-400'}`} style={{ width: `${pct}%` }} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2 shrink-0">
                            <Toggle size="sm" checked={item.active} onChange={() => setMenuStocks(menuStocks.map((m) => m.id === item.id ? { ...m, active: !m.active } : m))} />
                            <Button variant="icon" size="sm" onClick={() => handleMenuStockEdit(item)} iconOnly={<Pencil size={13} />} className="text-slate-400 hover:text-[#FF6B2B] hover:bg-orange-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* ─── Ingredient Add/Edit Modal ─── */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} size="md" title={editingItem ? '재료 수정' : '재료 추가'}
        footer={<><ModalBtn variant="outline" onClick={() => setModalOpen(false)}>취소</ModalBtn><ModalBtn variant="primary" onClick={handleSave}>{editingItem ? '수정' : '추가'}</ModalBtn></>}
      >
        <div className="space-y-4">
          <InputField label="재료명" required value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="재료명을 입력하세요" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DropdownSelect label="카테고리" required options={CATEGORIES.filter((c) => c !== '전체').map((c) => ({ value: c, label: c }))} value={formData.category || '기타'} onChange={(val) => setFormData({ ...formData, category: val })} />
            <InputField label="단위" required value={formData.unit || ''} onChange={(e) => setFormData({ ...formData, unit: e.target.value })} placeholder="예: kg, L, 개" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField label="현재 재고" type="number" required value={formData.currentStock || ''} onChange={(e) => setFormData({ ...formData, currentStock: Number(e.target.value) })} placeholder="0" />
            <InputField label="최소 재고" type="number" required value={formData.minStock || ''} onChange={(e) => setFormData({ ...formData, minStock: Number(e.target.value) })} placeholder="0" helperText="이 수량 이하면 알림 발생" />
          </div>
        </div>
      </Modal>

      {/* ─── Stock In/Out Modal ─── */}
      <Modal
        open={stockModalOpen}
        onClose={() => setStockModalOpen(false)}
        size="sm"
        title={stockChange.type === 'in' ? '입고 처리' : '출고 처리'}
        footer={<><ModalBtn variant="outline" onClick={() => setStockModalOpen(false)}>취소</ModalBtn><ModalBtn variant="primary" onClick={handleStockUpdate}>적용</ModalBtn></>}
      >
        <div className="space-y-4">
          <div className="bg-slate-50 rounded-[6px] p-3">
            <div className="text-xs text-slate-500 mb-0.5">재료명</div>
            <div className="text-sm font-medium text-slate-800">{editingItem?.name}</div>
            <div className="text-xs text-slate-500 mt-2 mb-0.5">현재 재고</div>
            <div className="text-xl font-bold text-slate-800">{editingItem?.currentStock} {editingItem?.unit}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">입출고 유형</label>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => setStockChange({ ...stockChange, type: 'in' })} className={`px-4 py-2.5 rounded-[6px] text-sm font-medium transition-colors ${stockChange.type === 'in' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>입고 (+)</button>
              <button onClick={() => setStockChange({ ...stockChange, type: 'out' })} className={`px-4 py-2.5 rounded-[6px] text-sm font-medium transition-colors ${stockChange.type === 'out' ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>출고 (-)</button>
            </div>
          </div>
          <InputField label="수량" type="number" required value={stockChange.amount} onChange={(e) => setStockChange({ ...stockChange, amount: Number(e.target.value) })} placeholder="0" suffix={editingItem?.unit} />
          {editingItem && (
            <div className="bg-blue-50 rounded-[6px] p-3">
              <div className="text-xs text-blue-600 mb-1">변경 후 재고</div>
              <div className="text-lg font-bold text-blue-700">
                {stockChange.type === 'in' ? editingItem.currentStock + stockChange.amount : Math.max(0, editingItem.currentStock - stockChange.amount)} {editingItem.unit}
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* ─── Menu Stock Add/Edit Modal ─── */}
      <Modal open={menuStockModalOpen} onClose={() => setMenuStockModalOpen(false)} size="md" title={editingMenuStock ? '한정 메뉴 수정' : '한정 메뉴 추가'}
        footer={<><ModalBtn variant="outline" onClick={() => setMenuStockModalOpen(false)}>취소</ModalBtn><ModalBtn variant="primary" onClick={handleMenuStockSave}>{editingMenuStock ? '수정' : '추가'}</ModalBtn></>}
      >
        <div className="space-y-4">
          <InputField label="메뉴명" required value={menuStockForm.menuName || ''} onChange={(e) => setMenuStockForm({ ...menuStockForm, menuName: e.target.value })} placeholder="메뉴명을 입력하세요" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField label="일일 한정 수량" type="number" required value={menuStockForm.dailyLimit || ''} onChange={(e) => setMenuStockForm({ ...menuStockForm, dailyLimit: Number(e.target.value) })} placeholder="20" suffix="개" />
            <InputField label="현재 남은 수량" type="number" required value={menuStockForm.remaining ?? ''} onChange={(e) => setMenuStockForm({ ...menuStockForm, remaining: Number(e.target.value) })} placeholder="20" suffix="개" />
          </div>
          <InputField label="연동 재료 (선택)" value={menuStockForm.linkedIngredient || ''} onChange={(e) => setMenuStockForm({ ...menuStockForm, linkedIngredient: e.target.value })} placeholder="예: 돼지고기 (앞다리)" helperText="재료 재고와 연동할 경우 입력" />
        </div>
      </Modal>

      {/* ─── Ingredient 단건 삭제 ─── */}
      <Modal open={!!deleteIngTarget} onClose={() => setDeleteIngTarget(null)} size="sm" title="재료 삭제"
        footer={<><ModalBtn variant="outline" onClick={() => setDeleteIngTarget(null)}>취소</ModalBtn><ModalBtn variant="danger" onClick={doDeleteIng}>삭제</ModalBtn></>}
      >
        {deleteIngTarget && (
          <div className="flex items-start gap-2.5">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-slate-700"><strong>"{deleteIngTarget.name}"</strong> 재료를 삭제하시겠습니까?</p>
              <p className="text-xs text-slate-500 mt-1">이 작업은 되돌릴 수 없습니다.</p>
            </div>
          </div>
        )}
      </Modal>

      {/* ─── Ingredient 다건 삭제 ─── */}
      <Modal open={bulkDeleteIngOpen} onClose={() => setBulkDeleteIngOpen(false)} size="sm" title="선택 재료 삭제"
        footer={<><ModalBtn variant="outline" onClick={() => setBulkDeleteIngOpen(false)}>취소</ModalBtn><ModalBtn variant="danger" onClick={doBulkDeleteIng}>삭제</ModalBtn></>}
      >
        <div className="flex items-start gap-2.5">
          <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-700">선택한 <strong>{selectedIngIds.size}개</strong> 재료를 모두 삭제하시겠습니까?</p>
            <p className="text-xs text-slate-500 mt-1">이 작업은 되돌릴 수 없습니다.</p>
          </div>
        </div>
      </Modal>

      {/* ─── Menu Stock 단건 삭제 ─── */}
      <Modal open={!!deleteMenuTarget} onClose={() => setDeleteMenuTarget(null)} size="sm" title="한정 메뉴 삭제"
        footer={<><ModalBtn variant="outline" onClick={() => setDeleteMenuTarget(null)}>취소</ModalBtn><ModalBtn variant="danger" onClick={doDeleteMenu}>삭제</ModalBtn></>}
      >
        {deleteMenuTarget && (
          <div className="flex items-start gap-2.5">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-slate-700"><strong>"{deleteMenuTarget.menuName}"</strong> 한정 메뉴를 삭제하시겠습니까?</p>
              <p className="text-xs text-slate-500 mt-1">이 작업은 되돌릴 수 없습니다.</p>
            </div>
          </div>
        )}
      </Modal>

      {/* ─── Menu Stock 다건 삭제 ─── */}
      <Modal open={bulkDeleteMenuOpen} onClose={() => setBulkDeleteMenuOpen(false)} size="sm" title="선택 한정 메뉴 삭제"
        footer={<><ModalBtn variant="outline" onClick={() => setBulkDeleteMenuOpen(false)}>취소</ModalBtn><ModalBtn variant="danger" onClick={doBulkDeleteMenu}>삭제</ModalBtn></>}
      >
        <div className="flex items-start gap-2.5">
          <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-slate-700">선택한 <strong>{selectedMenuIds.size}개</strong> 한정 메뉴를 모두 삭제하시겠습니까?</p>
            <p className="text-xs text-slate-500 mt-1">이 작업은 되돌릴 수 없습니다.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}