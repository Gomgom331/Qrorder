import { useState } from 'react';
import { Search, RotateCcw, Pencil } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { InlineEditTable, useInlineTable, InlineRow } from '../components/ui/InlineEditTable';

// ─── Types ────────────────────────────────────────────────────────

interface StaffCallItem extends InlineRow {
  id: string;
  name: string;
  selectionType: '단건' | '다건';
  isActive: '사용' | '미사용';
  isNew?: boolean;
}

// ─── Seed data ────────────────────────────────────────────────────

const INITIAL_ITEMS: StaffCallItem[] = [
  { id: 's1', name: '물',       selectionType: '다건', isActive: '사용'   },
  { id: 's2', name: '앞접시',   selectionType: '다건', isActive: '사용'   },
  { id: 's3', name: '컵',       selectionType: '다건', isActive: '사용'   },
  { id: 's4', name: '냅킨',     selectionType: '다건', isActive: '사용'   },
  { id: 's5', name: '물티슈',   selectionType: '다건', isActive: '사용'   },
  { id: 's6', name: '수저',     selectionType: '다건', isActive: '사용'   },
  { id: 's7', name: '젓가락',   selectionType: '다건', isActive: '사용'   },
  { id: 's8', name: '반찬추가', selectionType: '단건', isActive: '사용'   },
  { id: 's9', name: '소스추가', selectionType: '단건', isActive: '미사용' },
];

const NEW_ROW_DEFAULTS: Omit<StaffCallItem, 'id' | 'isNew'> = {
  name: '',
  selectionType: '단건',
  isActive: '사용',
};

const COLUMNS = [
  {
    key: 'name' as const,
    label: '호출 명',
    type: 'input' as const,
    placeholder: '호출 항목명',
  },
  {
    key: 'selectionType' as const,
    label: '선택 방식',
    type: 'select' as const,
    className: 'w-[200px]',
    options: [
      { value: '단건', label: '단건' },
      { value: '다건', label: '다건' },
    ],
  },
  {
    key: 'isActive' as const,
    label: '사용 여부',
    type: 'select' as const,
    className: 'w-[130px]',
    options: [
      { value: '사용',   label: '사용'   },
      { value: '미사용', label: '미사용' },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────

export function StaffCallManagement() {
  const [search, setSearch]               = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [saveConfirmOpen, setSaveConfirmOpen] = useState(false);

  const { rows, setRows, selectedId, setSelectedId, savedMsg, handleSave } =
    useInlineTable<StaffCallItem>(INITIAL_ITEMS);

  const displayed = appliedSearch
    ? rows.filter(r => r.name.includes(appliedSearch))
    : rows;

  const handleReset = () => { setSearch(''); setAppliedSearch(''); };

  const handleChange = (updated: StaffCallItem[]) => {
    if (appliedSearch) {
      setRows(prev => prev.map(r => updated.find(u => u.id === r.id) ?? r));
    } else {
      setRows(updated);
    }
  };

  const commitSave = () => {
    handleSave();
    setSaveConfirmOpen(false);
  };

  return (
    <div className="p-5 lg:p-6 flex flex-col gap-4 h-full">

      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>메뉴</span><span>/</span>
        <span>메뉴 정보 관리</span><span>/</span>
        <span className="text-slate-700 font-medium">직원호출 관리</span>
      </nav>

      {/* 검색 */}
      <div className="bg-white rounded-[6px] border border-slate-200 px-4 py-[17px]">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <InputField
              inputSize="md"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && setAppliedSearch(search)}
              placeholder="호출 명을 입력해주세요"
              leftIcon={<Search size={14} className="text-slate-400" />}
            />
          </div>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="md" leftIcon={<RotateCcw size={14} />} onClick={handleReset}>
              초기화
            </Button>
            <Button variant="primary" size="md" leftIcon={<Search size={14} />} onClick={() => setAppliedSearch(search)}>
              조회
            </Button>
          </div>
        </div>
      </div>

      {/* 테이블 패널 */}
      <div className="flex-1 min-h-0">
        <InlineEditTable<StaffCallItem>
          title="직원호출 관리"
          columns={COLUMNS}
          rows={displayed}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onChange={handleChange}
          newRowDefaults={NEW_ROW_DEFAULTS}
          onSave={() => setSaveConfirmOpen(true)}
          savedMsg={savedMsg}
          scrollable
          className="h-full"
        />
      </div>

      {/* 저장 확인 모달 */}
      <Modal
        open={saveConfirmOpen}
        onClose={() => setSaveConfirmOpen(false)}
        size="sm"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setSaveConfirmOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={commitSave}>저장</ModalBtn>
          </>
        }
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-[#FF6B2B]/10 rounded-full flex items-center justify-center mx-auto">
            <Pencil size={24} className="text-[#FF6B2B]" />
          </div>
          <div>
            <p className="text-base font-medium text-slate-800">수정된 내용을 저장하시겠습니까?</p>
            <p className="text-sm text-slate-500 mt-1.5">변경된 내용이 저장됩니다.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
