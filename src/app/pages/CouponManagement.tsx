import { useState } from 'react';
import { Search, Plus, Pencil } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { CheckboxField } from '../components/ui/CheckboxField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { Modal, ModalBtn } from '../components/ui/Modal';

// ─── Types ───────────────────────────────────────────────────────

interface Coupon {
  id: string;
  couponCd: string;
  couponNm: string;
  startDate: string;
  endDate: string;
  useYn: boolean;
}

// ─── Seed data ───────────────────────────────────────────────────

const INITIAL_COUPONS: Coupon[] = [
  { id: 'c1', couponCd: 'WELCOME2024', couponNm: '신규가입 환영 쿠폰', startDate: '2024-01-01', endDate: '2024-12-31', useYn: true },
  { id: 'c2', couponCd: 'SUMMER50',    couponNm: '여름 특별 할인',     startDate: '2024-06-01', endDate: '2024-08-31', useYn: true },
  { id: 'c3', couponCd: 'VIP100',      couponNm: 'VIP 회원 전용',      startDate: '2024-01-01', endDate: '2024-12-31', useYn: false },
  { id: 'c4', couponCd: 'WINTER30',    couponNm: '겨울 시즌 할인',     startDate: '2024-12-01', endDate: '2025-02-28', useYn: true },
  { id: 'c5', couponCd: 'FIRST10',     couponNm: '첫 구매 할인',       startDate: '2024-03-01', endDate: '2024-12-31', useYn: true },
];

// ─── Page ────────────────────────────────────────────────────────

export function CouponManagement() {
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [coupons, setCoupons] = useState<Coupon[]>(INITIAL_COUPONS);
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [formModal, setFormModal] = useState({
    open: false,
    mode: 'new' as 'new' | 'edit',
    couponCd: '',
    couponNm: '',
    startDate: '',
    endDate: '',
    useYn: true,
  });

  const [formErrors, setFormErrors] = useState<{
    couponCd?: string;
    couponNm?: string;
    startDate?: string;
    endDate?: string;
  }>({});

  /* ── 검색 ── */
  const handleSearch = () => setAppliedSearch(search);
  const handleReset = () => { setSearch(''); setAppliedSearch(''); };

  const filtered = coupons.filter((c) =>
    appliedSearch
      ? c.couponCd.toLowerCase().includes(appliedSearch.toLowerCase()) || c.couponNm.includes(appliedSearch)
      : true
  );

  /* ── 체크박스 ── */
  const handleCheck = (id: string) =>
    setCheckedIds((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });

  const handleAllCheck = () =>
    setCheckedIds(checkedIds.size === filtered.length && filtered.length > 0 ? new Set() : new Set(filtered.map((c) => c.id)));

  /* ── 신규/수정 모달 ── */
  const emptyForm = { open: false, mode: 'new' as const, couponCd: '', couponNm: '', startDate: '', endDate: '', useYn: true };

  const openNewModal = () => { setFormModal({ ...emptyForm, open: true }); setFormErrors({}); };

  const openEditModal = (coupon: Coupon, e: React.MouseEvent) => {
    e.stopPropagation();
    setFormModal({ open: true, mode: 'edit', couponCd: coupon.couponCd, couponNm: coupon.couponNm, startDate: coupon.startDate, endDate: coupon.endDate, useYn: coupon.useYn });
    setFormErrors({});
  };

  const closeFormModal = () => { setFormModal(emptyForm); setFormErrors({}); };

  const handleFormSave = () => {
    const errors: typeof formErrors = {};
    if (!formModal.couponCd.trim()) errors.couponCd = '쿠폰 코드를 입력하세요';
    if (!formModal.couponNm.trim()) errors.couponNm = '쿠폰명을 입력하세요';
    if (!formModal.startDate)       errors.startDate = '쿠폰 적용 일자를 입력하세요';
    if (!formModal.endDate)         errors.endDate   = '쿠폰 종료 일자를 입력하세요';
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    if (formModal.mode === 'new') {
      setCoupons([...coupons, { id: `c${Date.now()}`, couponCd: formModal.couponCd, couponNm: formModal.couponNm, startDate: formModal.startDate, endDate: formModal.endDate, useYn: formModal.useYn }]);
    } else {
      setCoupons(coupons.map((c) => c.couponCd === formModal.couponCd ? { ...c, couponNm: formModal.couponNm, startDate: formModal.startDate, endDate: formModal.endDate, useYn: formModal.useYn } : c));
    }
    closeFormModal();
  };

  /* ── 삭제 ── */
  const handleDelete = () => {
    setCoupons(coupons.filter((c) => !checkedIds.has(c.id)));
    setCheckedIds(new Set());
    setDeleteModalOpen(false);
  };

  /* ── Render ── */
  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>시스템</span><span>/</span>
        <span>결제관리</span><span>/</span>
        <span className="text-slate-700 font-medium">쿠폰관리</span>
      </nav>

      {/* ── 검색 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <InputField
              inputSize="md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="쿠폰 코드, 쿠폰명으로 검색"
              leftIcon={<Search size={14} />}
            />
          </div>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="md" onClick={handleReset}>초기화</Button>
            <Button variant="primary" size="md" leftIcon={<Search size={15} />} onClick={handleSearch}>조회</Button>
          </div>
        </div>
      </div>

      {/* ── 테이블 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        {/* 테이블 헤더 */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">쿠폰 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">{filtered.length}건</span>
            {checkedIds.size > 0 && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-[3px] font-medium">{checkedIds.size}개 선택</span>
            )}
          </div>
          <div className="flex gap-1.5">
            <Button variant="primary" size="sm" leftIcon={<Plus size={13} />} onClick={openNewModal}>신규</Button>
            <Button
              variant="outline" size="sm"
              disabled={checkedIds.size === 0}
              className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 disabled:border-slate-200 disabled:text-slate-300"
              onClick={() => checkedIds.size > 0 && setDeleteModalOpen(true)}
            >
              {checkedIds.size > 0 ? `삭제 (${checkedIds.size})` : '삭제'}
            </Button>
          </div>
        </div>

        {/* 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-10 px-3 py-2.5">
                  <CheckboxField
                    size="sm"
                    checked={filtered.length > 0 && checkedIds.size === filtered.length}
                    indeterminate={checkedIds.size > 0 && checkedIds.size < filtered.length}
                    onChange={handleAllCheck}
                  />
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">쿠폰코드(couponCd)</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">쿠폰명(couponNm)</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">쿠폰적용일자(startDate)</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">쿠폰종료일자(endDate)</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">사용 여부</th>
                <th className="w-10 px-3 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400 text-sm">
                    {appliedSearch ? '검색 결과가 없습니다.' : '등록된 쿠폰이 없습니다.'}
                  </td>
                </tr>
              ) : (
                filtered.map((coupon) => (
                  <tr key={coupon.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-2.5">
                      <CheckboxField size="sm" checked={checkedIds.has(coupon.id)} onChange={() => handleCheck(coupon.id)} />
                    </td>
                    <td className="px-3 py-2.5 font-mono text-xs text-slate-600">{coupon.couponCd}</td>
                    <td className="px-3 py-2.5 text-slate-700">{coupon.couponNm}</td>
                    <td className="px-3 py-2.5 text-center text-slate-600">{coupon.startDate}</td>
                    <td className="px-3 py-2.5 text-center text-slate-600">{coupon.endDate}</td>
                    <td className="px-3 py-2.5 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded-[3px] text-xs ${coupon.useYn ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                        {coupon.useYn ? '사용' : '미사용'}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <button
                        onClick={(e) => openEditModal(coupon, e)}
                        className="w-6 h-6 flex items-center justify-center rounded-[4px] text-slate-300 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10 transition-colors"
                        title="수정"
                      >
                        <Pencil size={12} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 신규/수정 모달 ── */}
      <Modal
        open={formModal.open}
        onClose={closeFormModal}
        size="md"
        title={formModal.mode === 'new' ? '쿠폰 신규 등록' : '쿠폰 수정'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={closeFormModal}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handleFormSave}>저장</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">쿠폰 코드 <span className="text-red-400">*</span></label>
            {formModal.mode === 'edit' ? (
              <div className="px-3 py-2 text-sm bg-slate-100 text-slate-400 rounded-[4px] border border-slate-200 font-mono select-none">{formModal.couponCd}</div>
            ) : (
              <InputField
                inputSize="md"
                value={formModal.couponCd}
                onChange={(e) => { setFormModal({ ...formModal, couponCd: e.target.value }); setFormErrors((p) => ({ ...p, couponCd: undefined })); }}
                placeholder="예: WELCOME2024"
                errorText={formErrors.couponCd}
              />
            )}
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">쿠폰명 <span className="text-red-400">*</span></label>
            <InputField
              inputSize="md"
              value={formModal.couponNm}
              onChange={(e) => { setFormModal({ ...formModal, couponNm: e.target.value }); setFormErrors((p) => ({ ...p, couponNm: undefined })); }}
              placeholder="예: 신규가입 환영 쿠폰"
              errorText={formErrors.couponNm}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">쿠폰 적용 일자 <span className="text-red-400">*</span></label>
            <InputField
              inputSize="md"
              type="date"
              value={formModal.startDate}
              onChange={(e) => { setFormModal({ ...formModal, startDate: e.target.value }); setFormErrors((p) => ({ ...p, startDate: undefined })); }}
              errorText={formErrors.startDate}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">쿠폰 종료 일자 <span className="text-red-400">*</span></label>
            <InputField
              inputSize="md"
              type="date"
              value={formModal.endDate}
              onChange={(e) => { setFormModal({ ...formModal, endDate: e.target.value }); setFormErrors((p) => ({ ...p, endDate: undefined })); }}
              errorText={formErrors.endDate}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">사용 여부 <span className="text-red-400">*</span></label>
            <DropdownSelect
              size="md"
              value={formModal.useYn ? 'Y' : 'N'}
              onChange={(val) => setFormModal({ ...formModal, useYn: val === 'Y' })}
              options={[{ value: 'Y', label: 'Y' }, { value: 'N', label: 'N' }]}
            />
          </div>
        </div>
      </Modal>

      {/* ── 삭제 확인 모달 ── */}
      <Modal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        size="sm"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDeleteModalOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={handleDelete}>삭제</ModalBtn>
          </>
        }
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl text-red-400">−</span>
          </div>
          <p className="font-medium text-slate-800">선택한 {checkedIds.size}개 쿠폰을 삭제하시겠습니까?</p>
          <p className="text-sm text-slate-500">삭제된 데이터는 복구할 수 없습니다.</p>
        </div>
      </Modal>
    </div>
  );
}