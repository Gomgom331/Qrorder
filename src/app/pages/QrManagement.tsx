import { useState } from 'react';
import { Plus, Pencil, ChevronUp, ChevronDown, Check, RotateCcw, Search, MousePointerClick } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { CheckboxField } from '../components/ui/CheckboxField';
import { Modal, ModalBtn } from '../components/ui/Modal';
import svgPaths from '../../imports/Button/svg-6ts1z2bbh8';

// ─── Print icon (Figma) ───────────────────────────────────────────

function PrintRoundedIcon() {
  return (
    <div className="relative size-[18px]">
      <div className="absolute inset-[12.5%_8.33%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13.5">
          <path d={svgPaths.p3b6fa4fe} fill="#62748E" />
        </svg>
      </div>
    </div>
  );
}

// ─── Types ────────────────────────────────────────────────────────

interface TableItem {
  id: string;
  tableNumber: string;
  isActive: boolean;
}

interface QrRow {
  id: string;
  selected: boolean;
  note: string;
  isNew?: boolean;
}

// ─── Seed data ────────────────────────────────────────────────────

const INITIAL_TABLES: TableItem[] = [
  { id: 't1', tableNumber: 'T-01', isActive: true },
  { id: 't2', tableNumber: 'T-02', isActive: true },
  { id: 't3', tableNumber: 'T-03', isActive: true },
  { id: 't4', tableNumber: 'T-04', isActive: true },
  { id: 't5', tableNumber: 'T-05', isActive: false },
  { id: 't6', tableNumber: 'VIP-01', isActive: true },
];

const INITIAL_QR: Record<string, QrRow[]> = {
  t1: [{ id: 'q1', selected: false, note: '창가 자리' }],
  t2: [{ id: 'q2', selected: false, note: '2인 테이블' }],
  t3: [
    { id: 'q3', selected: false, note: '4인 테이블' },
    { id: 'q4', selected: false, note: '예비용' },
  ],
  t4: [{ id: 'q5', selected: false, note: 'VIP 룸' }],
  t5: [],
  t6: [{ id: 'q6', selected: false, note: 'VIP 전용' }],
};

// ─── Page ─────────────────────────────────────────────────────────

export function QrManagement() {
  const [tables, setTables]               = useState<TableItem[]>(INITIAL_TABLES);
  const [qrMap, setQrMap]                 = useState<Record<string, QrRow[]>>(INITIAL_QR);
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);
  const [checkedTableIds, setCheckedTableIds] = useState<Set<string>>(new Set());

  // QR row state
  const [selectedQrId, setSelectedQrId]   = useState<string | null>(null);
  const [savedMsg, setSavedMsg]           = useState(false);

  // Search
  const [search, setSearch]               = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');

  // Modals
  const [tableModal, setTableModal] = useState<{
    open: boolean; mode: 'new' | 'edit'; targetId: string | null;
    tableNumber: string; isActive: boolean;
  }>({ open: false, mode: 'new', targetId: null, tableNumber: '', isActive: true });
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [printOpen, setPrintOpen]   = useState(false);
  const [printTargetId, setPrintTargetId] = useState<string | null>(null);

  const selectedQrRows: QrRow[] = selectedTableId ? (qrMap[selectedTableId] ?? []) : [];
  const selectedQrIdx = selectedQrRows.findIndex((r) => r.id === selectedQrId);

  /* ── 검색 필터 ── */
  const filteredTables = tables.filter((t) =>
    appliedSearch ? t.tableNumber.toLowerCase().includes(appliedSearch.toLowerCase()) : true
  );

  /* ── 테이블 체크박스 ── */
  const handleTableCheck = (id: string) =>
    setCheckedTableIds((prev) => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  const allChecked = checkedTableIds.size === filteredTables.length && filteredTables.length > 0;
  const toggleAllCheck = () =>
    setCheckedTableIds(allChecked ? new Set() : new Set(filteredTables.map((t) => t.id)));

  /* ── 테이블 신규/수정 모달 ── */
  const openNewModal = () =>
    setTableModal({ open: true, mode: 'new', targetId: null, tableNumber: '', isActive: true });
  const openEditModal = (t: TableItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setTableModal({ open: true, mode: 'edit', targetId: t.id, tableNumber: t.tableNumber, isActive: t.isActive });
  };
  const closeTableModal = () =>
    setTableModal({ open: false, mode: 'new', targetId: null, tableNumber: '', isActive: true });

  const handleTableModalSave = () => {
    if (!tableModal.tableNumber.trim()) return;
    if (tableModal.mode === 'new') {
      const newId = `t_${Date.now()}`;
      setTables((prev) => [...prev, { id: newId, tableNumber: tableModal.tableNumber, isActive: tableModal.isActive }]);
      setQrMap((prev) => ({ ...prev, [newId]: [] }));
      setSelectedTableId(newId);
    } else if (tableModal.targetId) {
      setTables((prev) =>
        prev.map((t) => t.id === tableModal.targetId
          ? { ...t, tableNumber: tableModal.tableNumber, isActive: tableModal.isActive }
          : t)
      );
    }
    closeTableModal();
  };

  /* ── 테이블 삭제 ── */
  const handleDeleteTable = () => {
    const idsToDelete = checkedTableIds.size > 0
      ? checkedTableIds
      : selectedTableId ? new Set([selectedTableId]) : new Set<string>();
    setTables((prev) => prev.filter((t) => !idsToDelete.has(t.id)));
    if (selectedTableId && idsToDelete.has(selectedTableId)) setSelectedTableId(null);
    setCheckedTableIds(new Set());
    setDeleteOpen(false);
  };

  /* ── QR 행 순서 이동 ── */
  const moveQrRow = (dir: -1 | 1) => {
    if (!selectedTableId || selectedQrIdx < 0) return;
    const rows = [...selectedQrRows];
    const target = selectedQrIdx + dir;
    if (target < 0 || target >= rows.length) return;
    [rows[selectedQrIdx], rows[target]] = [rows[target], rows[selectedQrIdx]];
    setQrMap((prev) => ({ ...prev, [selectedTableId]: rows }));
  };

  /* ── QR 행 추가 ── */
  const addQrRow = () => {
    if (!selectedTableId) return;
    const newId = `qr_${Date.now()}`;
    const newRow: QrRow = { id: newId, selected: false, note: '', isNew: true };
    setQrMap((prev) => ({ ...prev, [selectedTableId]: [...(prev[selectedTableId] ?? []), newRow] }));
    setSelectedQrId(newId);
  };

  /* ── QR 행 삭제 ── */
  const deleteQrRow = () => {
    if (!selectedTableId) return;
    const rows = selectedQrRows;
    if (selectedQrId) {
      setQrMap((prev) => ({ ...prev, [selectedTableId]: rows.filter((r) => r.id !== selectedQrId) }));
      setSelectedQrId(null);
    } else if (rows.length > 0) {
      setQrMap((prev) => ({ ...prev, [selectedTableId]: rows.slice(0, -1) }));
    }
  };

  /* ── QR 셀 값 변경 ── */
  const updateQrCell = (id: string, key: 'note', value: string) => {
    if (!selectedTableId) return;
    setQrMap((prev) => ({
      ...prev,
      [selectedTableId]: (prev[selectedTableId] ?? []).map((r) =>
        r.id === id ? { ...r, [key]: value } : r
      ),
    }));
  };

  /* ── QR 체크박스 ── */
  const toggleQrCheck = (id: string, checked: boolean) => {
    if (!selectedTableId) return;
    setQrMap((prev) => ({
      ...prev,
      [selectedTableId]: (prev[selectedTableId] ?? []).map((r) =>
        r.id === id ? { ...r, selected: checked } : r
      ),
    }));
  };

  const allQrChecked = selectedQrRows.length > 0 && selectedQrRows.every((r) => r.selected);
  const toggleAllQr = (checked: boolean) => {
    if (!selectedTableId) return;
    setQrMap((prev) => ({
      ...prev,
      [selectedTableId]: (prev[selectedTableId] ?? []).map((r) => ({ ...r, selected: checked })),
    }));
  };

  /* ── 저장 ── */
  const handleSave = () => {
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  /* ── QR 출력 ── */
  const handlePrintRow = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPrintTargetId(id);
    setPrintOpen(true);
  };
  const handlePrintSelected = () => { setPrintTargetId(null); setPrintOpen(true); };

  const printList = printTargetId
    ? selectedQrRows.filter((r) => r.id === printTargetId)
    : selectedQrRows.filter((r) => r.selected);

  const selectedTable = tables.find((t) => t.id === selectedTableId);
  const canDeleteTable = checkedTableIds.size > 0 || selectedTableId !== null;

  return (
    <div className="p-5 lg:p-6 flex flex-col gap-4 h-full">

      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>매장 관리</span><span>/</span>
        <span>테이블 정보 관리</span><span>/</span>
        <span className="text-slate-700 font-medium">QR 코드 관리</span>
      </nav>

      {/* 검색 */}
      <div className="bg-white rounded-[6px] border border-slate-200 px-4 py-[17px]">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <InputField
              inputSize="md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && setAppliedSearch(search)}
              placeholder="테이블 번호를 입력해주세요"
              leftIcon={<Search size={14} className="text-slate-400" />}
            />
          </div>
          <Button variant="outline" size="md" leftIcon={<RotateCcw size={14} />}
            onClick={() => { setSearch(''); setAppliedSearch(''); }}>
            초기화
          </Button>
          <Button variant="primary" size="md" leftIcon={<Search size={14} />}
            onClick={() => setAppliedSearch(search)}>
            조회
          </Button>
        </div>
      </div>

      {/* 두 패널 */}
      <div className="flex gap-4 flex-1 min-h-0">

        {/* ── 왼쪽: 테이블 목록 ── */}
        <div className="w-[360px] shrink-0 bg-white border border-slate-200 rounded-[6px] flex flex-col overflow-hidden">
          {/* 헤더 */}
          <div className="flex items-center justify-between px-4 h-[44px] border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-800">테이블 목록</span>
              {filteredTables.length > 0 && (
                <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
                  {filteredTables.length}건
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <Button variant="primary" size="sm" leftIcon={<Plus size={13} />} onClick={openNewModal}>신규</Button>
              <Button
                variant="outline" size="sm"
                disabled={!canDeleteTable}
                onClick={() => setDeleteOpen(true)}
                className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 disabled:border-slate-200 disabled:text-slate-300"
              >삭제</Button>
            </div>
          </div>

          {/* 고정 헤더 */}
          <table className="w-full text-sm shrink-0">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-10 px-3 py-2.5">
                  <CheckboxField size="sm" checked={allChecked}
                    indeterminate={checkedTableIds.size > 0 && !allChecked}
                    onChange={toggleAllCheck} />
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">테이블 번호</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-16">사용 여부</th>
                <th className="w-10 px-3 py-2.5" />
              </tr>
            </thead>
          </table>

          {/* 스크롤 바디 */}
          <div className="subtle-box flex-1 min-h-0" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
            <table className="w-full text-sm">
              <colgroup>
                <col className="w-10" />
                <col />
                <col className="w-16" />
                <col className="w-10" />
              </colgroup>
              <tbody className="divide-y divide-slate-100">
                {filteredTables.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-10 text-center text-slate-400 text-sm">
                      테이블이 없습니다.
                    </td>
                  </tr>
                ) : (
                  filteredTables.map((t) => {
                    const isSelected = selectedTableId === t.id;
                    const isChecked  = checkedTableIds.has(t.id);
                    return (
                      <tr
                        key={t.id}
                        onClick={() => { setSelectedTableId(isSelected ? null : t.id); setSelectedQrId(null); }}
                        className={[
                          'cursor-pointer transition-colors',
                          isSelected ? 'bg-[#FF6B2B]/5 border-l-2 border-l-[#FF6B2B]' : 'hover:bg-slate-50',
                        ].join(' ')}
                      >
                        <td className="px-3 py-2.5" onClick={(e) => e.stopPropagation()}>
                          <CheckboxField size="sm" checked={isChecked}
                            onChange={() => handleTableCheck(t.id)} />
                        </td>
                        <td className="px-3 py-2.5 text-sm text-slate-700">{t.tableNumber}</td>
                        <td className="px-3 py-2.5 text-center">
                          <span className={`text-xs px-2 py-0.5 rounded-[3px] ${t.isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                            {t.isActive ? '사용' : '미사용'}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-center">
                          <button
                            onClick={(e) => openEditModal(t, e)}
                            className="w-6 h-6 flex items-center justify-center rounded-[4px] text-slate-300 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/8 transition-colors"
                            title="수정"
                          >
                            <Pencil size={12} />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 오른쪽: QR 코드 목록 ── */}
        <div className="flex-1 bg-white border border-slate-200 rounded-[6px] flex flex-col overflow-hidden min-w-0">
          {/* 툴바 */}
          <div className="flex items-center justify-between px-4 h-[44px] border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-800">QR 코드 목록</span>
              {selectedTableId && (
                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-[3px]">
                  {selectedTable?.tableNumber}
                </span>
              )}
              {selectedQrRows.length > 0 && (
                <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
                  {selectedQrRows.length}건
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Button variant="icon" size="sm" disabled={!selectedTableId || selectedQrIdx <= 0} onClick={() => moveQrRow(-1)} title="위로">
                <ChevronUp size={14} />
              </Button>
              <Button variant="icon" size="sm" disabled={!selectedTableId || selectedQrIdx < 0 || selectedQrIdx >= selectedQrRows.length - 1} onClick={() => moveQrRow(1)} title="아래로">
                <ChevronDown size={14} />
              </Button>
              <Button variant="ghost" size="sm" disabled={!selectedTableId} onClick={addQrRow}>
                <span className="text-base leading-none mr-0.5">+</span> 행추가
              </Button>
              <Button variant="ghost" size="sm" disabled={!selectedTableId || selectedQrRows.length === 0} onClick={deleteQrRow}
                className="text-red-500 hover:bg-red-50 hover:text-red-600 disabled:text-slate-300 disabled:hover:bg-transparent">
                <span className="text-base leading-none mr-0.5">−</span> 행삭제
              </Button>
              <Button variant="ghost" size="sm" disabled={!selectedTableId} leftIcon={<PrintRoundedIcon />} onClick={handlePrintSelected}>
                QR 출력
              </Button>
              <Button variant="outline" size="sm" disabled={!selectedTableId} onClick={handleSave}>
                {savedMsg ? <><Check size={12} className="mr-1" />저장완료</> : '저장'}
              </Button>
            </div>
          </div>

          {/* 고정 헤더 */}
          <table className="w-full text-sm shrink-0">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-10 px-3 py-2.5">
                  <CheckboxField size="sm" checked={allQrChecked}
                    onChange={(e) => toggleAllQr(e.target.checked)} />
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 w-[200px]">테이블 번호</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">비고</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-12">출력</th>
              </tr>
            </thead>
          </table>

          {/* 스크롤 바디 */}
          <div className="subtle-box flex-1 min-h-0" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
            {!selectedTableId ? (
              <div className="h-full flex flex-col items-center justify-center gap-3 select-none py-14">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <MousePointerClick size={22} className="text-slate-300" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-500 font-medium">테이블을 선택해주세요</p>
                  <p className="text-xs text-slate-400 mt-0.5">왼쪽 목록에서 테이블을 클릭하면 QR 코드가 표시됩니다.</p>
                </div>
              </div>
            ) : (
              <table className="w-full text-sm">
                <colgroup>
                  <col className="w-10" />
                  <col className="w-[200px]" />
                  <col />
                  <col className="w-12" />
                </colgroup>
                <tbody className="divide-y divide-slate-100">
                  {selectedQrRows.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-10 text-center text-slate-400 text-sm">
                        QR 코드가 없습니다. 행추가로 등록하세요.
                      </td>
                    </tr>
                  ) : (
                    selectedQrRows.map((row) => {
                      const isSelected = selectedQrId === row.id;
                      return (
                        <tr
                          key={row.id}
                          onClick={() => setSelectedQrId(isSelected ? null : row.id)}
                          className={[
                            'cursor-pointer transition-colors',
                            isSelected
                              ? 'bg-[#FF6B2B]/5 border-l-2 border-l-[#FF6B2B]'
                              : row.isNew
                              ? 'bg-amber-50/40 hover:bg-amber-50/70'
                              : 'hover:bg-slate-50',
                          ].join(' ')}
                        >
                          <td className="px-3 py-[5px] text-center" onClick={(e) => e.stopPropagation()}>
                            <CheckboxField size="sm" checked={row.selected}
                              onChange={(e) => toggleQrCheck(row.id, e.target.checked)} />
                          </td>
                          <td className="px-3 py-[5px] text-sm text-slate-700" onClick={(e) => e.stopPropagation()}>
                            <DropdownSelect
                              inputSize="sm"
                              value={selectedTable?.tableNumber ?? ''}
                              onChange={() => {}}
                              options={tables.map((t) => ({ value: t.tableNumber, label: t.tableNumber }))}
                              disabled
                            />
                          </td>
                          <td className="px-3 py-[5px]" onClick={(e) => e.stopPropagation()}>
                            <InputField
                              inputSize="sm"
                              value={row.note}
                              onChange={(e) => updateQrCell(row.id, 'note', e.target.value)}
                              placeholder="비고"
                            />
                          </td>
                          <td className="px-3 py-[5px] text-center">
                            <button
                              className="p-1.5 rounded hover:bg-slate-100 transition-colors mx-auto flex items-center justify-center"
                              title="QR 출력"
                              onClick={(e) => handlePrintRow(row.id, e)}
                            >
                              <PrintRoundedIcon />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* ── 테이블 신규/수정 모달 ── */}
      <Modal
        open={tableModal.open} onClose={closeTableModal} size="sm"
        title={tableModal.mode === 'new' ? '테이블 신규 등록' : '테이블 수정'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={closeTableModal}>닫기</ModalBtn>
            <ModalBtn variant="primary" onClick={handleTableModalSave}
              disabled={!tableModal.tableNumber.trim()}>저장</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">
              테이블 번호 <span className="text-red-400">*</span>
            </label>
            {tableModal.mode === 'edit' ? (
              <div className="px-3 py-2 text-sm bg-slate-100 text-slate-400 rounded-[4px] border border-slate-200 select-none">
                {tableModal.tableNumber}
              </div>
            ) : (
              <InputField
                inputSize="md"
                value={tableModal.tableNumber}
                onChange={(e) => setTableModal((p) => ({ ...p, tableNumber: e.target.value }))}
                placeholder="예: T-01"
              />
            )}
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-2">사용 여부</label>
            <CheckboxField
              size="md" label="사용"
              checked={tableModal.isActive}
              onChange={(e) => setTableModal((p) => ({ ...p, isActive: e.target.checked }))}
            />
          </div>
        </div>
      </Modal>

      {/* ── 삭제 확인 모달 ── */}
      <Modal
        open={deleteOpen} onClose={() => setDeleteOpen(false)} size="sm"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDeleteOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={handleDeleteTable}>삭제</ModalBtn>
          </>
        }
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl text-red-400">−</span>
          </div>
          <p className="font-medium text-slate-800">선택한 테이블을 삭제하시겠습니까?</p>
          <p className="text-sm text-slate-500">삭제된 데이터는 복구할 수 없습니다.</p>
        </div>
      </Modal>

      {/* ── QR 출력 모달 ── */}
      <Modal
        open={printOpen}
        onClose={() => { setPrintOpen(false); setPrintTargetId(null); }}
        size="lg"
        title="QR 코드 출력"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => { setPrintOpen(false); setPrintTargetId(null); }}>닫기</ModalBtn>
            <ModalBtn variant="primary" onClick={() => window.print()}>출력</ModalBtn>
          </>
        }
      >
        {printList.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-6">출력할 항목을 체크박스로 선택해주세요.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
            {printList.map((row) => (
              <div key={row.id} className="flex flex-col items-center gap-2 border border-slate-200 rounded-[6px] p-4">
                <div className="grid grid-cols-5 gap-0.5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-[1px] ${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,7,17,6,8,11,13,16,18].includes(i) ? 'bg-slate-800' : 'bg-white border border-slate-100'}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-slate-700">{selectedTable?.tableNumber ?? '—'}</span>
                {row.note && <span className="text-xs text-slate-400">{row.note}</span>}
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
}
