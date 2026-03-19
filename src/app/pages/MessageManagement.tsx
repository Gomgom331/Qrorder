import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { InlineEditTable, useInlineTable, InlineRow } from '../components/ui/InlineEditTable';

// ─── Types ───────────────────────────────────────────────────────

interface Message extends InlineRow {
  id: string;
  code: string;
  name: string;
  content: string;
  isNew?: boolean;
}

// ─── Seed data ───────────────────────────────────────────────────

const INITIAL_MESSAGES: Message[] = [
  { id: 'm1', code: 'MSG001', name: '주문 완료', content: '주문이 정상적으로 접수되었습니다.' },
  { id: 'm2', code: 'MSG002', name: '결제 완료', content: '결제가 완료되었습니다. 감사합니다.' },
  { id: 'm3', code: 'MSG003', name: '조리 시작', content: '주문하신 메뉴의 조리가 시작되었습니다.' },
  { id: 'm4', code: 'MSG004', name: '조리 완료', content: '음식이 준비되었습니다. 픽업해 주세요.' },
  { id: 'm5', code: 'MSG005', name: '주문 취소', content: '주문이 취소되었습니다.' },
  { id: 'm6', code: 'MSG006', name: '테이블 배정', content: '테이블이 배정되었습니다.' },
];

// ─── 컬럼 정의 ───────────────────────────────────────────────────

const COLUMNS = [
  { 
    key: 'code' as const, 
    label: '메시지 코드*', 
    type: 'input-readonly' as const, 
    placeholder: '코드',
    className: 'w-1/4'
  },
  { 
    key: 'name' as const, 
    label: '메시지 명*', 
    type: 'input' as const, 
    placeholder: '메시지명',
    className: 'w-1/4'
  },
  { 
    key: 'content' as const, 
    label: '메시지 내용*', 
    type: 'input' as const, 
    placeholder: '내용',
    className: 'w-1/2'
  },
];

const NEW_MESSAGE_DEFAULTS = { code: '', name: '', content: '' };

// ─── Page ────────────────────────────────────────────────────────

export function MessageManagement() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const {
    rows,
    setRows,
    selectedId,
    setSelectedId,
    savedMsg,
    handleSave,
  } = useInlineTable<Message>(INITIAL_MESSAGES);

  /* ── 검색 초기화 ── */
  const handleReset = () => {
    setSearchKeyword('');
  };

  /* ── 필터링된 행 ── */
  const filteredRows = rows.filter((msg) => {
    if (!searchKeyword.trim()) return true;
    const kw = searchKeyword.toLowerCase();
    return (
      msg.code.toLowerCase().includes(kw) ||
      msg.name.toLowerCase().includes(kw) ||
      msg.content.toLowerCase().includes(kw)
    );
  });

  /* ── Render ── */
  return (
    <div className="p-5 lg:p-6 space-y-4">

      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>시스템</span><span>/</span><span>시스템 관리</span><span>/</span>
        <span className="text-slate-700 font-medium">메시지 관리</span>
      </nav>

      {/* ── 검색 영역 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <label className="block text-xs text-slate-500 mb-1.5">검색어</label>
            <InputField
              inputSize="md"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="메시지 코드, 메시지 명, 내용으로 검색"
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
        </div>
      </div>

      {/* ── 인라인 편집 테이블 ── */}
      <InlineEditTable<Message>
        title="메시지 목록"
        columns={COLUMNS}
        rows={filteredRows}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onChange={setRows}
        newRowDefaults={NEW_MESSAGE_DEFAULTS}
        onSave={handleSave}
        savedMsg={savedMsg}
        emptyText="메시지가 없습니다. 행추가로 등록하세요."
      />
    </div>
  );
}
