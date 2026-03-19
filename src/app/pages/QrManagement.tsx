import { useState } from 'react';
import { QrCode, Download, Plus, Search, Building2 } from 'lucide-react';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { InputField } from '../components/ui/InputField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { Button } from '../components/ui/Button';
import { CheckboxField } from '../components/ui/CheckboxField';

const QR_CODES = [
  { id: 'QR-001', store: '스마트버거 강남점', table: 'T-01', code: 'QRO-BIZ001-T01', scans: 142, active: true,  created: '2026-01-10' },
  { id: 'QR-002', store: '스마트버거 강남점', table: 'T-02', code: 'QRO-BIZ001-T02', scans: 98,  active: true,  created: '2026-01-10' },
  { id: 'QR-003', store: '스마트버거 강남점', table: 'T-03', code: 'QRO-BIZ001-T03', scans: 231, active: true,  created: '2026-01-10' },
  { id: 'QR-004', store: '맛나치킨 홍대점',  table: 'T-01', code: 'QRO-BIZ002-T01', scans: 88,  active: true,  created: '2026-01-15' },
  { id: 'QR-005', store: '맛나치킨 홍대점',  table: 'T-07', code: 'QRO-BIZ002-T07', scans: 176, active: true,  created: '2026-01-15' },
  { id: 'QR-006', store: '청담 파인다이닝',  table: 'T-01', code: 'QRO-BIZ005-T01', scans: 55,  active: false, created: '2026-02-01' },
  { id: 'QR-007', store: '더맛집 삼겹살',    table: 'T-05', code: 'QRO-BIZ003-T05', scans: 312, active: true,  created: '2026-02-10' },
  { id: 'QR-008', store: '미식가 일식',      table: 'T-02', code: 'QRO-BIZ004-T02', scans: 67,  active: true,  created: '2026-02-14' },
];

const FILTER_OPTIONS = [
  { value: 'all',      label: '전체' },
  { value: 'active',   label: '활성' },
  { value: 'inactive', label: '비활성' },
];

const QR_TYPE_OPTIONS = [
  { value: 'table',  label: '테이블 주문' },
  { value: 'pickup', label: '픽업 주문' },
];

export function QrManagement() {
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [appliedFilter, setAppliedFilter] = useState('all');
  const [createOpen, setCreateOpen] = useState(false);
  const [store, setStore] = useState('');
  const [table, setTable] = useState('');

  const filtered = QR_CODES.filter((q) => {
    const matchSearch = appliedSearch ? q.store.includes(appliedSearch) || q.table.includes(appliedSearch) || q.code.includes(appliedSearch) : true;
    const matchFilter = appliedFilter === 'all' ? true : appliedFilter === 'active' ? q.active : !q.active;
    return matchSearch && matchFilter;
  });

  const storeOptions = Array.from(new Set(QR_CODES.map((q) => q.store))).map((s) => ({ value: s, label: s }));

  const handleSearch = () => { setAppliedSearch(search); setAppliedFilter(filter); };
  const handleReset  = () => { setSearch(''); setFilter('all'); setAppliedSearch(''); setAppliedFilter('all'); };

  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* Page header */}
      <div>
        <nav className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>QR 매장 관리</span><span>/</span>
          <span className="text-slate-700 font-medium">QR 코드 관리</span>
        </nav>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          { label: '전체 QR',  value: QR_CODES.length,                           icon: QrCode,    color: 'text-[#FF6B2B]',   bg: 'bg-[#FF6B2B]/10' },
          { label: '활성 QR',  value: QR_CODES.filter((q) => q.active).length,   icon: QrCode,    color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: '등록 매장', value: new Set(QR_CODES.map((q) => q.store)).size, icon: Building2, color: 'text-orange-500',  bg: 'bg-orange-50' },
        ].map((s) => (
          <div key={s.label} className={`bg-white rounded-[6px] border border-slate-200 p-4 flex items-center gap-3 ${s.label === '등록 매장' ? 'col-span-2 lg:col-span-1' : ''}`}>
            <div className={`${s.bg} ${s.color} p-2 rounded-[4px]`}>
              <s.icon size={18} />
            </div>
            <div>
              <div className="text-xs text-slate-400">{s.label}</div>
              <div className="text-xl font-semibold text-slate-800">{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <InputField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="매장명, 테이블, QR 코드로 검색"
              leftIcon={<Search size={14} />}
            />
          </div>
          <div className="w-full sm:w-32">
            <DropdownSelect
              value={filter}
              onChange={setFilter}
              options={FILTER_OPTIONS}
              placeholder="전체"
            />
          </div>
          <Button variant="outline" size="md" onClick={handleReset}>초기화</Button>
          <Button variant="primary" size="md" leftIcon={<Search size={15} />} onClick={handleSearch}>조회</Button>
        </div>
      </div>

      {/* QR Grid */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">QR 코드 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">{filtered.length}건</span>
          </div>
          <Button variant="primary" size="sm" leftIcon={<Plus size={13} />} onClick={() => setCreateOpen(true)}>
            QR 생성
          </Button>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((qr) => (
            <div key={qr.id} className="rounded-[6px] border border-slate-200 overflow-hidden hover:border-[#FF6B2B]/40 transition-colors group">
              <div className="bg-slate-50 p-6 flex items-center justify-center border-b border-slate-100">
                <div className="relative">
                  <div className="grid grid-cols-5 gap-0.5">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className={`w-3 h-3 rounded-[1px] ${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,7,17,6,8,11,13,16,18].includes(i) ? 'bg-slate-800' : 'bg-white'}`} />
                    ))}
                  </div>
                  {!qr.active && (
                    <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                      <span className="text-xs text-red-400 font-medium rotate-[-15deg]">비활성</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-slate-800 truncate">{qr.store}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{qr.table}</div>
                  </div>
                  <span className={`shrink-0 text-xs px-2 py-0.5 rounded-[3px] ${qr.active ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-500'}`}>
                    {qr.active ? '활성' : '비활성'}
                  </span>
                </div>
                <div className="mt-2 font-mono text-xs text-slate-400 truncate">{qr.code}</div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">스캔 {qr.scans.toLocaleString()}회</span>
                  <button className="flex items-center gap-1 text-xs text-[#FF6B2B] hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={11} /> 다운로드
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QR Create modal */}
      <Modal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        size="lg"
        title="QR 코드 생성"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setCreateOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={() => setCreateOpen(false)}>생성</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <DropdownSelect
            label="매장 선택"
            value={store}
            onChange={setStore}
            options={storeOptions}
            placeholder="매장을 선택하세요"
          />
          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="테이블 번호"
              value={table}
              onChange={(e) => setTable(e.target.value)}
              placeholder="T-01"
            />
            <DropdownSelect
              label="QR 유형"
              options={QR_TYPE_OPTIONS}
              defaultValue="table"
            />
          </div>
          <CheckboxField size="md" label="생성 즉시 활성화" defaultChecked />
          <div className="bg-[#FF6B2B]/5 border border-[#FF6B2B]/20 rounded-[4px] p-3 text-xs text-slate-500">
            QR 코드는 생성 후 PDF 및 이미지로 다운로드할 수 있습니다.
          </div>
        </div>
      </Modal>
    </div>
  );
}
