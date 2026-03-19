import { useState } from 'react';
import { Search, Plus, Pencil, Tag, ToggleRight, ToggleLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { CheckboxField } from '../components/ui/CheckboxField';
import { Modal, ModalBtn } from '../components/ui/Modal';

const MENUS = [
  { id: 'M001', category: '메인', name: '클래식 버거 세트', price: 12900, store: '스마트버거 강남점', available: true,  image: '🍔' },
  { id: 'M002', category: '메인', name: '더블 버거 세트',   price: 15500, store: '스마트버거 강남점', available: true,  image: '🍔' },
  { id: 'M003', category: '사이드', name: '감자튀김 (L)',    price: 3500,  store: '스마트버거 강남점', available: true,  image: '🍟' },
  { id: 'M004', category: '음료', name: '콜라 (L)',          price: 2500,  store: '스마트버거 강남점', available: true,  image: '🥤' },
  { id: 'M005', category: '메인', name: '황금올리브 반마리', price: 12000, store: '맛나치킨 홍대점',   available: true,  image: '🍗' },
  { id: 'M006', category: '메인', name: '크리스피 한마리',   price: 20000, store: '맛나치킨 홍대점',   available: false, image: '🍗' },
  { id: 'M007', category: '메인', name: '삼겹살 1인분',      price: 14000, store: '더맛집 삼겹살',     available: true,  image: '🥩' },
  { id: 'M008', category: '음료', name: '소주 한 병',        price: 5000,  store: '더맛집 삼겹살',     available: true,  image: '🍶' },
  { id: 'M009', category: '메인', name: '스시 오마카세',     price: 45000, store: '미식가 일식',       available: true,  image: '🍣' },
  { id: 'M010', category: '디저트', name: '말차 아이스크림', price: 6500,  store: '미식가 일식',       available: true,  image: '🍦' },
];

const CATEGORIES = [
  { id: 'C001', name: '메인',   code: 'MAIN',    description: '메인 메뉴',        order: 1, usable: true  },
  { id: 'C002', name: '사이드', code: 'SIDE',    description: '사이드 메뉴',      order: 2, usable: true  },
  { id: 'C003', name: '음료',   code: 'DRINK',   description: '음료 및 주류',     order: 3, usable: true  },
  { id: 'C004', name: '디저트', code: 'DESSERT', description: '디저트 및 후식',   order: 4, usable: true  },
  { id: 'C005', name: '세트',   code: 'SET',     description: '세트 메뉴',        order: 5, usable: false },
];

export function MenuManagement() {
  const isCategories = window.location.pathname === '/menus/categories';
  const isOptions = window.location.pathname === '/menus/options';
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [addOpen, setAddOpen] = useState(false);

  const title = isCategories ? '메뉴 분류' : isOptions ? '옵션 그룹' : '메뉴 목록';
  const breadSub = isCategories || isOptions ? '카테고리 관리' : '';

  const filteredMenus = MENUS.filter((m) =>
    appliedSearch ? m.name.includes(appliedSearch) || m.category.includes(appliedSearch) || m.store.includes(appliedSearch) : true
  );
  const filteredCategories = CATEGORIES.filter((c) =>
    appliedSearch ? c.name.includes(appliedSearch) || c.code.includes(appliedSearch) : true
  );

  const categoryOptions = CATEGORIES.map((c) => ({ value: c.id, label: c.name }));
  const storeOptions = Array.from(new Set(MENUS.map((m) => m.store))).map((s) => ({ value: s, label: s }));

  const handleSearch = () => setAppliedSearch(search);
  const handleReset  = () => { setSearch(''); setAppliedSearch(''); };

  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* Page header */}
      <div>
        <nav className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>메뉴 관리</span>
          {breadSub && <><span>/</span><span>{breadSub}</span></>}
          <span>/</span>
          <span className="text-slate-700 font-medium">{title}</span>
        </nav>
      </div>

      {/* Search */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <InputField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder={isCategories ? '카테고리명, 코드로 검색' : '메뉴명, 카테고리, 매장으로 검색'}
              leftIcon={<Search size={14} />}
            />
          </div>
          <Button variant="outline" size="md" onClick={handleReset}>초기화</Button>
          <Button variant="primary" size="md" leftIcon={<Search size={15} />} onClick={handleSearch}>조회</Button>
        </div>
      </div>

      {isCategories || isOptions ? (
        /* Categories table */
        <div className="bg-white rounded-[6px] border border-slate-200">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Tag size={15} className="text-slate-400" />
              <span className="text-sm font-medium text-slate-800">{title}</span>
              <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">{filteredCategories.length}건</span>
            </div>
            {/* 액션 버튼 — ghost */}
            <Button variant="primary" size="sm" onClick={() => setAddOpen(true)}>
              {isCategories ? '카테고리 추가' : '옵션 추가'}
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  {['코드', '카테고리명', '설명', '순서', '사용여부', ''].map((h) => (
                    <th key={h} className={`text-left px-4 py-2.5 text-xs font-medium text-slate-500 ${h === '설명' ? 'hidden md:table-cell' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCategories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-2.5 font-mono text-xs text-slate-500">{cat.code}</td>
                    <td className="px-4 py-2.5 text-slate-700 font-medium">{cat.name}</td>
                    <td className="px-4 py-2.5 text-slate-500 text-xs hidden md:table-cell">{cat.description}</td>
                    <td className="px-4 py-2.5 text-slate-500 text-xs">{cat.order}</td>
                    <td className="px-4 py-2.5">
                      <span className={`text-xs px-2 py-0.5 rounded-[3px] ${cat.usable ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                        {cat.usable ? '사용' : '미사용'}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <button className="p-1 text-slate-300 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10 rounded-[3px] transition-colors"><Pencil size={13} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Menu list */
        <div className="bg-white rounded-[6px] border border-slate-200">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-800">메뉴 목록</span>
              <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">{filteredMenus.length}건</span>
            </div>
            {/* 액션 버튼 — ghost */}
            <Button variant="primary" size="sm" leftIcon={<Plus size={13} />} onClick={() => setAddOpen(true)}>
              메뉴 추가
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500">메뉴</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500">카테고리</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500 hidden md:table-cell">매장</th>
                  <th className="text-right px-4 py-2.5 text-xs font-medium text-slate-500">가격</th>
                  <th className="text-center px-4 py-2.5 text-xs font-medium text-slate-500">판매여부</th>
                  <th className="w-16 px-4 py-2.5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredMenus.map((menu) => (
                  <tr key={menu.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{menu.image}</span>
                        <div>
                          <div className="text-slate-800 font-medium">{menu.name}</div>
                          <div className="text-xs text-slate-400 font-mono">{menu.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2.5">
                      <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px]">{menu.category}</span>
                    </td>
                    <td className="px-4 py-2.5 text-slate-500 text-xs hidden md:table-cell">{menu.store}</td>
                    <td className="px-4 py-2.5 text-right font-medium text-slate-800">{menu.price.toLocaleString()}원</td>
                    <td className="px-4 py-2.5 text-center">
                      <button className={`text-xs flex items-center gap-1 mx-auto ${menu.available ? 'text-emerald-600' : 'text-slate-400'}`}>
                        {menu.available ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                        {menu.available ? '판매중' : '판매중지'}
                      </button>
                    </td>
                    <td className="px-4 py-2.5">
                      <button className="p-1 text-slate-300 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10 rounded-[3px] transition-colors"><Pencil size={13} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add modal (LG) */}
      <Modal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        size="lg"
        title={`${isCategories ? '카테고리' : isOptions ? '옵션 그룹' : '메뉴'} 추가`}
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setAddOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={() => setAddOpen(false)}>저장</ModalBtn>
          </>
        }
      >
        {isCategories || isOptions ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <InputField label="코드" placeholder="CATEGORY_CODE" className="font-mono" />
              <InputField label="이름" placeholder="카테고리명" />
            </div>
            <InputField label="설명" placeholder="카테고리 설명" />
            <CheckboxField size="md" label="사용 여부" defaultChecked />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <InputField label="메뉴명" placeholder="메뉴 이름" />
              <InputField label="가격" type="number" placeholder="0" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <DropdownSelect label="카테고리" options={categoryOptions} placeholder="카테고리 선택" />
              <DropdownSelect label="매장" options={storeOptions} placeholder="매장 선택" />
            </div>
            <CheckboxField size="md" label="바로 판매 시작" defaultChecked />
          </div>
        )}
      </Modal>
    </div>
  );
}