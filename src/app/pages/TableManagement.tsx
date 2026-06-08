import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { InlineEditTable, useInlineTable, InlineRow } from '../components/ui/InlineEditTable';

// ─── Types ───────────────────────────────────────────────────────

interface Table extends InlineRow {
  id: string;
  tableNumber: string;
  tableName: string;
  seatCount: string;
  isActive: '사용' | '미사용';
  isNew?: boolean;
}

// ─── Seed data ───────────────────────────────────────────────────

const INITIAL_TABLES: Table[] = [
  { id: 't1', tableNumber: '1', tableName: '테이블 1번', seatCount: '4', isActive: '사용' },
  { id: 't2', tableNumber: '2', tableName: '테이블 2번', seatCount: '4', isActive: '사용' },
  { id: 't3', tableNumber: '3', tableName: '테이블 3번', seatCount: '6', isActive: '사용' },
  { id: 't4', tableNumber: '4', tableName: '테이블 4번', seatCount: '2', isActive: '사용' },
  { id: 't5', tableNumber: '5', tableName: '테이블 5번', seatCount: '8', isActive: '미사용' },
  { id: 't6', tableNumber: '6', tableName: 'VIP 룸', seatCount: '10', isActive: '사용' },
];

// ─── 컬럼 정의 ───────────────────────────────────────────────────

const COLUMNS = [
  {
    key: 'tableNumber' as const,
    label: '테이블 번호*',
    type: 'input' as const,
    placeholder: '번호',
    className: 'w-1/4'
  },
  {
    key: 'tableName' as const,
    label: '테이블 이름*',
    type: 'input' as const,
    placeholder: '테이블명',
    className: 'w-1/4'
  },
  {
    key: 'seatCount' as const,
    label: '좌석 개수*',
    type: 'input' as const,
    placeholder: '좌석수',
    className: 'w-1/4'
  },
  {
    key: 'isActive' as const,
    label: '사용여부*',
    type: 'select' as const,
    className: 'w-1/4',
    options: [
      { value: '사용', label: '사용' },
      { value: '미사용', label: '미사용' },
    ]
  },
];

const NEW_TABLE_DEFAULTS = { tableNumber: '', tableName: '', seatCount: '', isActive: '사용' as const };

// ─── Page ────────────────────────────────────────────────────────

export function TableManagement() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const {
    rows,
    setRows,
    selectedId,
    setSelectedId,
    savedMsg,
    handleSave,
  } = useInlineTable<Table>(INITIAL_TABLES);

  /* ── 검색 초기화 ── */
  const handleReset = () => {
    setSearchKeyword('');
  };

  /* ── 조회 버튼 (옵션) ── */
  const handleSearch = () => {
    // 조회 로직 (필요시 API 호출 등)
    console.log('검색:', searchKeyword);
  };

  /* ── 필터링된 행 ── */
  const filteredRows = rows.filter((table) => {
    if (!searchKeyword.trim()) return true;
    const kw = searchKeyword.toLowerCase();
    return (
      table.tableNumber.toLowerCase().includes(kw) ||
      table.tableName.toLowerCase().includes(kw) ||
      table.seatCount.toLowerCase().includes(kw) ||
      table.isActive.toLowerCase().includes(kw)
    );
  });

  /* ── Render ── */
  return (
    <div className="p-5 lg:p-6 space-y-4">

      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>매장 관리</span><span>/</span><span>테이블 정보 관리</span><span>/</span>
        <span className="text-slate-700 font-medium">테이블 관리</span>
      </nav>

      {/* ── 검색 영역 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <InputField
              inputSize="md"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="테이블 번호, 이름, 좌석수로 검색"
            />
          </div>
          <Button
            variant="outline"
            size="md"
            leftIcon={<RotateCcw size={14} />}
            onClick={handleReset}
          >
            초기화
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={handleSearch}
          >
            조회
          </Button>
        </div>
      </div>

      {/* ── 인라인 편집 테이블 ── */}
      <InlineEditTable<Table>
        title="테이블 목록"
        columns={COLUMNS}
        rows={filteredRows}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onChange={setRows}
        newRowDefaults={NEW_TABLE_DEFAULTS}
        onSave={handleSave}
        savedMsg={savedMsg}
        emptyText="테이블이 없습니다. 행추가로 등록하세요."
      />
    </div>
  );
}
