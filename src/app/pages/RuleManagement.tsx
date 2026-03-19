import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';
import { CheckboxField } from '../components/ui/CheckboxField';
import { InlineEditTable, useInlineTable, InlineRow } from '../components/ui/InlineEditTable';

// ─── Types ───────────────────────────────────────────────────────

interface RuleMaster { id: string; code: string; name: string; usable: boolean; }

interface RuleDetail extends InlineRow {
  id: string;
  code: string;
  name: string;
  value: string;
  usable: boolean;
  isNew?: boolean;
}

// ─── Seed data ───────────────────────────────────────────────────

const INITIAL_MASTERS: RuleMaster[] = [
  { id: 'r1', code: 'ORDER_LIMIT', name: '주문 제한 규칙', usable: true },
  { id: 'r2', code: 'PRICE_RULE',  name: '가격 정책 규칙', usable: true },
  { id: 'r3', code: 'TIME_RULE',   name: '시간 제한 규칙', usable: true },
  { id: 'r4', code: 'TAX_RULE',    name: '세금 계산 규칙', usable: true },
  { id: 'r5', code: 'STOCK_RULE',  name: '재고 관리 규칙', usable: false },
];

const INITIAL_DETAILS: Record<string, RuleDetail[]> = {
  r1: [
    { id: 'rd1', code: 'MAX_QTY',  name: '최대 주문 수량', value: '10',   usable: true  },
    { id: 'rd2', code: 'MIN_AMT',  name: '최소 주문 금액', value: '5000', usable: true  },
    { id: 'rd3', code: 'MAX_ITEM', name: '최대 품목 수',   value: '20',   usable: true  },
  ],
  r2: [
    { id: 'rd4', code: 'DISCOUNT', name: '할인율 상한', value: '30', usable: true  },
    { id: 'rd5', code: 'VAT_INCL', name: '부가세 포함', value: 'Y',  usable: true  },
  ],
  r3: [
    { id: 'rd6', code: 'OPEN_HH',  name: '영업 시작 시간', value: '09:00', usable: true  },
    { id: 'rd7', code: 'CLOSE_HH', name: '영업 종료 시간', value: '22:00', usable: true  },
    { id: 'rd8', code: 'BREAK_ST', name: '휴게 시작',      value: '15:00', usable: false },
    { id: 'rd9', code: 'BREAK_EN', name: '휴게 종료',      value: '16:00', usable: false },
  ],
  r4: [
    { id: 'rd10', code: 'TAX_RATE', name: '세율',     value: '10',  usable: true },
    { id: 'rd11', code: 'TAX_TYPE', name: '세금 유형', value: 'VAT', usable: true },
  ],
  r5: [
    { id: 'rd12', code: 'LOW_STK',  name: '재고 경고 기준', value: '5',    usable: true },
    { id: 'rd13', code: 'ZERO_STK', name: '재고 0 처리',    value: 'STOP', usable: true },
  ],
};

// ─── 상세 컬럼 정의 ───────────────────────────────────────────────

const DETAIL_COLUMNS = [
  { key: 'code'   as const, label: '규칙 코드', type: 'input-readonly' as const, placeholder: '코드' },
  { key: 'name'   as const, label: '규칙 명',   type: 'input'          as const, placeholder: '규칙명' },
  { key: 'value'  as const, label: '값',        type: 'input'          as const, placeholder: '값' },
  { key: 'usable' as const, label: '사용여부',  type: 'checkbox'       as const, className: 'w-20 text-center' },
];

const DETAIL_DEFAULTS = { code: '', name: '', value: '', usable: true };

// ─── Page ────────────────────────────────────────────────────────

export function RuleManagement() {
  const [masters, setMasters]       = useState<RuleMaster[]>(INITIAL_MASTERS);
  const [details, setDetails]       = useState<Record<string, RuleDetail[]>>(INITIAL_DETAILS);
  const [search, setSearch]         = useState('');
  const [appliedSearch, setApplied] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteMode, setDeleteMode] = useState<'checked' | 'single'>('checked');

  /* 상세 인라인 테이블 상태 */
  const {
    selectedId: selectedDetailId,
    setSelectedId: setSelectedDetailId,
    savedMsg,
    handleSave,
  } = useInlineTable<RuleDetail>([]);

  /* ── 검색 ── */
  const filtered = masters.filter((m) =>
    appliedSearch
      ? m.code.toLowerCase().includes(appliedSearch.toLowerCase()) || m.name.includes(appliedSearch)
      : true
  );

  const handleSearch = () => setApplied(search);
  const handleReset  = () => { setSearch(''); setApplied(''); };

  /* ── 체크박스 ── */
  const handleCheck    = (id: string) => setCheckedIds((prev) => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  const handleAllCheck = () => setCheckedIds(checkedIds.size === filtered.length ? new Set() : new Set(filtered.map((m) => m.id)));

  /* ── 삭제 ── */
  const canDelete = checkedIds.size > 0 || selectedId !== null;

  const openDelete = () => {
    setDeleteMode(checkedIds.size > 0 ? 'checked' : 'single');
    setDeleteOpen(true);
  };

  const handleDelete = () => {
    if (deleteMode === 'checked') {
      setMasters((prev) => prev.filter((m) => !checkedIds.has(m.id)));
      if (selectedId && checkedIds.has(selectedId)) setSelectedId(null);
      setCheckedIds(new Set());
    } else {
      setMasters((prev) => prev.filter((m) => m.id !== selectedId));
      setSelectedId(null);
    }
    setDeleteOpen(false);
  };

  /* ── 상세 변경 ── */
  const handleDetailsChange = (rows: RuleDetail[]) => {
    if (!selectedId) return;
    setDetails((prev) => ({ ...prev, [selectedId]: rows }));
  };

  const selectedDetails: RuleDetail[] = selectedId ? (details[selectedId] ?? []) : [];

  const deleteLabel =
    deleteMode === 'single'
      ? `"${masters.find((m) => m.id === selectedId)?.name}"`
      : `선택한 ${checkedIds.size}개 규칙`;

  /* ── Render ── */
  return (
    <div className="p-5 lg:p-6 space-y-4">

      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>시스템</span><span>/</span><span>시스템 관리</span><span>/</span>
        <span className="text-slate-700 font-medium">규칙 관리</span>
      </nav>

      {/* 검색 카드 */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <InputField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="규칙 코드, 규칙명으로 검색"
              leftIcon={<Search size={14} />}
            />
          </div>
          <Button variant="outline" size="md" onClick={handleReset}>초기화</Button>
          <Button variant="primary" size="md" leftIcon={<Search size={15} />} onClick={handleSearch}>조회</Button>
        </div>
      </div>

      {/* 규칙 목록 테이블 */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">규칙 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
              {filtered.length}건
            </span>
          </div>
          <Button
            variant="outline" size="sm" disabled={!canDelete} onClick={openDelete}
            className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 disabled:border-slate-200 disabled:text-slate-300"
          >삭제</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-10 px-3 py-2.5">
                  <CheckboxField
                    size="sm"
                    checked={checkedIds.size === filtered.length && filtered.length > 0}
                    indeterminate={checkedIds.size > 0 && checkedIds.size < filtered.length}
                    onChange={handleAllCheck}
                  />
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">규칙 코드</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">규칙 명</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-20">사용 여부</th>
                <th className="w-10 px-3 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-slate-400 text-sm">검색 결과가 없습니다.</td>
                </tr>
              ) : filtered.map((master) => {
                const isSelected = selectedId === master.id;
                return (
                  <tr
                    key={master.id}
                    onClick={() => { setSelectedId(isSelected ? null : master.id); setSelectedDetailId(null); }}
                    className={[
                      'cursor-pointer transition-colors',
                      isSelected ? 'bg-[#FF6B2B]/5 border-l-2 border-l-[#FF6B2B]' : 'hover:bg-slate-50',
                    ].join(' ')}
                  >
                    <td className="px-3 py-2.5" onClick={(e) => e.stopPropagation()}>
                      <CheckboxField size="sm" checked={checkedIds.has(master.id)} onChange={() => handleCheck(master.id)} />
                    </td>
                    <td className="px-3 py-2.5 font-mono text-xs text-slate-600">{master.code}</td>
                    <td className="px-3 py-2.5 text-slate-700">{master.name}</td>
                    <td className="px-3 py-2.5 text-center">
                      <span className={`text-xs px-2 py-0.5 rounded-[3px] ${master.usable ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                        {master.usable ? 'Y' : 'N'}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <ChevronDown
                        size={14}
                        className={`inline transition-transform ${isSelected ? 'text-[#FF6B2B] rotate-180' : 'opacity-30'}`}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 상세 인라인 편집 테이블 (공통 컴포넌트) ── */}
      <InlineEditTable<RuleDetail>
        title="규칙 상세 목록"
        badge={selectedId ? masters.find((m) => m.id === selectedId)?.name : undefined}
        columns={DETAIL_COLUMNS}
        rows={selectedDetails}
        selectedId={selectedDetailId}
        onSelect={setSelectedDetailId}
        onChange={handleDetailsChange}
        newRowDefaults={DETAIL_DEFAULTS}
        onSave={handleSave}
        savedMsg={savedMsg}
        disabled={!selectedId}
        emptyText={selectedId ? '상세 규칙이 없습니다. 행추가로 등록하세요.' : '위 목록에서 규칙을 선택해주세요.'}
      />

      {/* 삭제 확인 모달 */}
      <Modal
        open={deleteOpen} onClose={() => setDeleteOpen(false)} size="sm"
        footer={<><ModalBtn variant="outline" onClick={() => setDeleteOpen(false)}>취소</ModalBtn><ModalBtn variant="danger" onClick={handleDelete}>삭제</ModalBtn></>}
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl text-red-400">−</span>
          </div>
          <p className="font-medium text-slate-800">{deleteLabel}를 삭제하시겠습니까?</p>
          <p className="text-sm text-slate-500">삭제된 데이터는 복구할 수 없습니다.</p>
        </div>
      </Modal>
    </div>
  );
}