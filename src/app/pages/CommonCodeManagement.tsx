import { useState } from 'react';
import { Plus, Pencil, MousePointerClick } from 'lucide-react';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';
import { CheckboxField } from '../components/ui/CheckboxField';
import { InlineEditTable, useInlineTable, InlineRow } from '../components/ui/InlineEditTable';

// ─── Types ───────────────────────────────────────────────────────

interface MasterCode { id: string; code: string; name: string; usable: boolean; }

interface DetailCode extends InlineRow {
  id: string;
  code: string;
  name: string;
  usable: boolean;
  isNew?: boolean;
}

// ─── Seed data ───────────────────────────────────────────────────

const INITIAL_MASTER: MasterCode[] = [
  { id: 'm1', code: 'ORDER_STATUS',  name: '주문상태',    usable: true },
  { id: 'm2', code: 'PAYMENT_TYPE',  name: '결제수단',    usable: true },
  { id: 'm3', code: 'MENU_CATEGORY', name: '메뉴카테고리', usable: true },
  { id: 'm4', code: 'TABLE_STATUS',  name: '테이블상태',  usable: true },
  { id: 'm5', code: 'USER_ROLE',     name: '사용자역할',  usable: false },
];

const INITIAL_DETAILS: Record<string, DetailCode[]> = {
  m1: [
    { id: 'd1', code: 'WAITING',   name: '대기중', usable: true  },
    { id: 'd2', code: 'PREPARING', name: '준비중', usable: true  },
    { id: 'd3', code: 'COMPLETED', name: '완료',   usable: true  },
    { id: 'd4', code: 'CANCELLED', name: '취소',   usable: true  },
  ],
  m2: [
    { id: 'd5', code: 'CARD',      name: '카드',      usable: true },
    { id: 'd6', code: 'CASH',      name: '현금',      usable: true },
    { id: 'd7', code: 'KAKAO_PAY', name: '카카오페이', usable: true },
    { id: 'd8', code: 'NAVER_PAY', name: '네이버페이', usable: true },
  ],
  m3: [
    { id: 'd9',  code: 'MAIN',    name: '메인',   usable: true },
    { id: 'd10', code: 'SIDE',    name: '사이드', usable: true },
    { id: 'd11', code: 'DRINK',   name: '음료',   usable: true },
    { id: 'd12', code: 'DESSERT', name: '디저트', usable: true },
  ],
  m4: [
    { id: 'd13', code: 'EMPTY',    name: '빈테이블', usable: true  },
    { id: 'd14', code: 'OCCUPIED', name: '사용중',   usable: true  },
    { id: 'd15', code: 'RESERVED', name: '예약',     usable: false },
  ],
  m5: [
    { id: 'd16', code: 'ADMIN',   name: '관리자', usable: true },
    { id: 'd17', code: 'MANAGER', name: '매니저', usable: true },
    { id: 'd18', code: 'STAFF',   name: '직원',   usable: true },
  ],
};

// ─── 상세 컬럼 정의 ───────────────────────────────────────────────

const DETAIL_COLUMNS = [
  { key: 'code'   as const, label: '공통코드',  type: 'input-readonly' as const, placeholder: '코드' },
  { key: 'name'   as const, label: '공통코드명', type: 'input'          as const, placeholder: '코드명' },
  { key: 'usable' as const, label: '사용여부',  type: 'checkbox'       as const, className: 'w-20 text-center' },
];

const DETAIL_DEFAULTS = { code: '', name: '', usable: true };

// ─── 마스터 모달 타입 ─────────────────────────────────────────────

interface MasterModalState {
  open: boolean;
  mode: 'new' | 'edit';
  targetId: string | null;
  code: string;
  name: string;
  usable: boolean;
}
const MASTER_MODAL_INIT: MasterModalState = {
  open: false, mode: 'new', targetId: null, code: '', name: '', usable: true,
};

// ─── Page ────────────────────────────────────────────────────────

export function CommonCodeManagement() {
  const [masters, setMasters]                   = useState<MasterCode[]>(INITIAL_MASTER);
  const [details, setDetails]                   = useState<Record<string, DetailCode[]>>(INITIAL_DETAILS);
  const [selectedMasterId, setSelectedMasterId] = useState<string | null>(null);
  const [checkedMasterIds, setCheckedMasterIds] = useState<Set<string>>(new Set());

  /* 상세 인라인 테이블 상태 */
  const {
    selectedId: selectedDetailId,
    setSelectedId: setSelectedDetailId,
    savedMsg,
    handleSave,
  } = useInlineTable<DetailCode>([]);

  const [deleteOpen, setDeleteOpen]           = useState(false);
  const [deleteMode, setDeleteMode]           = useState<'checked' | 'single'>('checked');
  const [masterModal, setMasterModal]         = useState<MasterModalState>(MASTER_MODAL_INIT);
  const [editConfirmOpen, setEditConfirmOpen] = useState(false);
  const [masterErrors, setMasterErrors]       = useState<{ code?: string; name?: string }>({});

  const selectedDetails: DetailCode[] = selectedMasterId ? (details[selectedMasterId] ?? []) : [];

  /* ── 마스터 체크박스 ─────────────────────────────── */
  const handleMasterCheck = (id: string) =>
    setCheckedMasterIds((prev) => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });

  const handleAllCheck = () =>
    setCheckedMasterIds(
      checkedMasterIds.size === masters.length ? new Set() : new Set(masters.map((m) => m.id))
    );

  /* ── 마스터 모달 ─────────────────────────────────── */
  const openNewMasterModal  = () => setMasterModal({ open: true, mode: 'new', targetId: null, code: '', name: '', usable: true });
  const closeMasterModal    = () => { setMasterModal(MASTER_MODAL_INIT); setMasterErrors({}); };

  const openEditMasterModal = (master: MasterCode, e: React.MouseEvent) => {
    e.stopPropagation();
    setMasterModal({ open: true, mode: 'edit', targetId: master.id, code: master.code, name: master.name, usable: master.usable });
  };

  const handleMasterModalSave = () => {
    const errors: { code?: string; name?: string } = {};
    if (masterModal.mode === 'new' && !masterModal.code.trim()) errors.code = '공통코드를 입력해 주세요.';
    if (!masterModal.name.trim()) errors.name = '공통코드명을 입력해 주세요.';
    if (Object.keys(errors).length > 0) { setMasterErrors(errors); return; }
    setMasterErrors({});
    masterModal.mode === 'edit' ? setEditConfirmOpen(true) : commitMasterSave();
  };

  const commitMasterSave = () => {
    if (masterModal.mode === 'new') {
      const newId = `m_${Date.now()}`;
      setMasters((prev) => [...prev, { id: newId, code: masterModal.code, name: masterModal.name, usable: masterModal.usable }]);
      setSelectedMasterId(newId);
    } else if (masterModal.targetId) {
      setMasters((prev) =>
        prev.map((m) => m.id === masterModal.targetId ? { ...m, name: masterModal.name, usable: masterModal.usable } : m)
      );
    }
    setEditConfirmOpen(false);
    closeMasterModal();
  };

  /* ── 마스터 삭제 ─────────────────────────────────── */
  const canDelete = checkedMasterIds.size > 0 || selectedMasterId !== null;

  const openDelete = () => {
    setDeleteMode(checkedMasterIds.size > 0 ? 'checked' : 'single');
    setDeleteOpen(true);
  };

  const handleDeleteMaster = () => {
    if (deleteMode === 'checked') {
      setMasters((prev) => prev.filter((m) => !checkedMasterIds.has(m.id)));
      if (selectedMasterId && checkedMasterIds.has(selectedMasterId)) setSelectedMasterId(null);
      setCheckedMasterIds(new Set());
    } else {
      setMasters((prev) => prev.filter((m) => m.id !== selectedMasterId));
      setSelectedMasterId(null);
    }
    setDeleteOpen(false);
  };

  /* ── 상세 변경 ───────────────────────────────────── */
  const handleDetailsChange = (rows: DetailCode[]) => {
    if (!selectedMasterId) return;
    setDetails((prev) => ({ ...prev, [selectedMasterId]: rows }));
  };

  /* ── 삭제 라벨 ───────────────────────────────────── */
  const deleteLabel =
    deleteMode === 'single'
      ? `"${masters.find((m) => m.id === selectedMasterId)?.name}" 코드`
      : `선택한 ${checkedMasterIds.size}개 코드`;

  /* ── Render ──────────────────────────────────────── */
  return (
    <div className="p-5 lg:p-6 space-y-4">

      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>시스템</span><span>/</span><span>시스템 관리</span><span>/</span>
        <span className="text-slate-700 font-medium">공통코드 관리</span>
      </nav>

      {/* ── 마스터 테이블 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">공통코드 마스터</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
              {masters.length}건
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Button variant="primary" size="sm" leftIcon={<Plus size={13} />} onClick={openNewMasterModal}>신규</Button>
            <Button
              variant="outline" size="sm" disabled={!canDelete} onClick={openDelete}
              className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 disabled:border-slate-200 disabled:text-slate-300"
            >삭제</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-10 px-3 py-2.5">
                  <CheckboxField
                    size="sm"
                    checked={checkedMasterIds.size === masters.length && masters.length > 0}
                    indeterminate={checkedMasterIds.size > 0 && checkedMasterIds.size < masters.length}
                    onChange={handleAllCheck}
                  />
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">공통코드</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">공통코드명</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-20">사용여부</th>
                <th className="w-16 px-3 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {masters.map((master) => {
                const isSelected = selectedMasterId === master.id;
                const isChecked  = checkedMasterIds.has(master.id);
                return (
                  <tr
                    key={master.id}
                    onClick={() => { setSelectedMasterId(isSelected ? null : master.id); setSelectedDetailId(null); }}
                    className={[
                      'transition-colors cursor-pointer',
                      isSelected ? 'bg-[#FF6B2B]/5 border-l-2 border-l-[#FF6B2B]' : 'hover:bg-slate-50',
                    ].join(' ')}
                  >
                    <td className="px-3 py-2.5" onClick={(e) => e.stopPropagation()}>
                      <CheckboxField size="sm" checked={isChecked} onChange={() => handleMasterCheck(master.id)} />
                    </td>
                    <td className="px-3 py-2.5 font-mono text-xs text-slate-600">{master.code}</td>
                    <td className="px-3 py-2.5 text-slate-700">{master.name}</td>
                    <td className="px-3 py-2.5 text-center">
                      <span className={`text-xs px-2 py-0.5 rounded-[3px] ${master.usable ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                        {master.usable ? 'Y' : 'N'}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <button
                        onClick={(e) => openEditMasterModal(master, e)}
                        className="w-6 h-6 flex items-center justify-center rounded-[4px] text-slate-300 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/8 transition-colors"
                        title="수정"
                      >
                        <Pencil size={12} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 상세 인라인 편집 테이블 (공통 컴포넌트) ── */}
      {selectedMasterId ? (
        <InlineEditTable<DetailCode>
          title="공통코드 상세"
          badge={masters.find((m) => m.id === selectedMasterId)?.name}
          columns={DETAIL_COLUMNS}
          rows={selectedDetails}
          selectedId={selectedDetailId}
          onSelect={setSelectedDetailId}
          onChange={handleDetailsChange}
          newRowDefaults={DETAIL_DEFAULTS}
          onSave={handleSave}
          savedMsg={savedMsg}
          emptyText="상세 코드가 없습니다. 행추가로 등록하세요."
        />
      ) : (
        <div className="bg-white rounded-[6px] border border-slate-200">
          {/* 빈 상태 헤더 */}
          <div className="px-4 py-2 border-b border-slate-100">
            <span className="text-sm font-medium text-slate-800">공통코드 상세</span>
          </div>
          <div className="py-14 flex flex-col items-center justify-center gap-3 select-none">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
              <MousePointerClick size={22} className="text-slate-300" />
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 font-medium">마스터 코드를 선택해주세요</p>
              <p className="text-xs text-slate-400 mt-0.5">위 목록에서 행을 클릭하면 상세 코드가 표시됩니다.</p>
            </div>
          </div>
        </div>
      )}

      {/* ── 삭제 확인 모달 ── */}
      <Modal
        open={deleteOpen} onClose={() => setDeleteOpen(false)} size="sm"
        footer={<><ModalBtn variant="outline" onClick={() => setDeleteOpen(false)}>취소</ModalBtn><ModalBtn variant="danger" onClick={handleDeleteMaster}>삭제</ModalBtn></>}
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl text-red-400">−</span>
          </div>
          <p className="font-medium text-slate-800">{deleteLabel}를 삭제하시겠습니까?</p>
          <p className="text-sm text-slate-500">삭제된 데이터는 복구할 수 없습니다.</p>
        </div>
      </Modal>

      {/* ── 마스터 신규/수정 모달 ── */}
      <Modal
        open={masterModal.open} onClose={closeMasterModal} size="md"
        title={masterModal.mode === 'new' ? '공통코드 마스터 신규 등록' : '���통코드 마스터 수정'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={closeMasterModal}>닫기</ModalBtn>
            <ModalBtn variant="primary" onClick={handleMasterModalSave} disabled={!masterModal.code.trim() || !masterModal.name.trim()}>저장</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">공통코드 <span className="text-red-400">*</span></label>
            {masterModal.mode === 'edit' ? (
              <div className="px-3 py-2 text-sm bg-slate-100 text-slate-400 rounded-[4px] border border-slate-200 font-mono select-none">{masterModal.code}</div>
            ) : (
              <InputField
                inputSize="md" value={masterModal.code}
                onChange={(e) => { setMasterModal((p) => ({ ...p, code: e.target.value })); setMasterErrors((p) => ({ ...p, code: undefined })); }}
                placeholder="예: ORDER_STATUS" errorText={masterErrors.code}
              />
            )}
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">공통코드명 <span className="text-red-400">*</span></label>
            <InputField
              inputSize="md" value={masterModal.name}
              onChange={(e) => { setMasterModal((p) => ({ ...p, name: e.target.value })); setMasterErrors((p) => ({ ...p, name: undefined })); }}
              placeholder="예: 주문상태" errorText={masterErrors.name}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-2">사용여부 <span className="text-red-400">*</span></label>
            <CheckboxField size="md" label="사용" checked={masterModal.usable} onChange={(e) => setMasterModal((p) => ({ ...p, usable: e.target.checked }))} />
          </div>
        </div>
      </Modal>

      {/* ── 수정 확인 모달 ── */}
      <Modal
        open={editConfirmOpen} onClose={() => setEditConfirmOpen(false)} size="sm"
        footer={<><ModalBtn variant="outline" onClick={() => setEditConfirmOpen(false)}>취소</ModalBtn><ModalBtn variant="primary" onClick={commitMasterSave}>저장</ModalBtn></>}
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-[#FF6B2B]/10 rounded-full flex items-center justify-center mx-auto">
            <Pencil size={22} className="text-[#FF6B2B]" />
          </div>
          <p className="font-medium text-slate-800">수정된 내용을 저장하시겠습니까?</p>
          <p className="text-sm text-slate-500">변경된 내용이 저장됩니다.</p>
        </div>
      </Modal>
    </div>
  );
}
