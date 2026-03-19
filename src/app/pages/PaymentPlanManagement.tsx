import { useState } from 'react';
import { Search, Plus, Pencil } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { CheckboxField } from '../components/ui/CheckboxField';
import { Tag } from '../components/ui/Tag';
import { Modal, ModalBtn } from '../components/ui/Modal';

// ─── Types ───────────────────────────────────────────────────────

interface PaymentPlan {
  id: string;
  code: string;
  name: string;
  price: number;
  unit: string;
  licensePeriod: number;
}

// ─── Seed data ───────────────────────────────────────────────────

const INITIAL_PLANS: PaymentPlan[] = [
  { id: 'p1', code: 'BASIC_MONTHLY',      name: '베이직 월간',       price: 29000,  unit: '원/월', licensePeriod: 1  },
  { id: 'p2', code: 'BASIC_YEARLY',       name: '베이직 연간',       price: 290000, unit: '원/년', licensePeriod: 12 },
  { id: 'p3', code: 'PRO_MONTHLY',        name: '프로 월간',         price: 59000,  unit: '원/월', licensePeriod: 1  },
  { id: 'p4', code: 'PRO_YEARLY',         name: '프로 연간',         price: 590000, unit: '원/년', licensePeriod: 12 },
  { id: 'p5', code: 'ENTERPRISE_MONTHLY', name: '엔터프라이즈 월간', price: 99000,  unit: '원/월', licensePeriod: 1  },
  { id: 'p6', code: 'ENTERPRISE_YEARLY',  name: '엔터프라이즈 연간', price: 990000, unit: '원/년', licensePeriod: 12 },
  { id: 'p7', code: 'STARTER_MONTHLY',    name: '스타터 월간',       price: 0,      unit: '무료',  licensePeriod: 1  },
];

// ─── Page ────────────────────────────────────────────────────────

export function PaymentPlanManagement() {
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [plans, setPlans] = useState<PaymentPlan[]>(INITIAL_PLANS);
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [formModal, setFormModal] = useState({
    open: false,
    mode: 'new' as 'new' | 'edit',
    id: '',
    code: '',
    name: '',
    price: '',
    unit: '',
    licensePeriod: '',
  });

  const [formErrors, setFormErrors] = useState<{
    code?: string; name?: string; price?: string; unit?: string; licensePeriod?: string;
  }>({});

  /* ── 검색 ── */
  const handleSearch = () => setAppliedSearch(search);
  const handleReset  = () => { setSearch(''); setAppliedSearch(''); };

  const filtered = plans.filter(p =>
    appliedSearch
      ? p.code.toLowerCase().includes(appliedSearch.toLowerCase()) ||
        p.name.includes(appliedSearch)
      : true
  );

  /* ── 체크박스 ── */
  const handleCheck = (id: string) =>
    setCheckedIds(prev => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });

  const handleAllCheck = () =>
    setCheckedIds(
      checkedIds.size === filtered.length && filtered.length > 0
        ? new Set()
        : new Set(filtered.map(p => p.id))
    );

  /* ── 신규/수정 모달 ── */
  const openNewModal = () => {
    setFormModal({ open: true, mode: 'new', id: '', code: '', name: '', price: '', unit: '', licensePeriod: '' });
    setFormErrors({});
  };

  const openEditModal = (plan: PaymentPlan, e: React.MouseEvent) => {
    e.stopPropagation();
    setFormModal({ open: true, mode: 'edit', id: plan.id, code: plan.code, name: plan.name, price: plan.price.toString(), unit: plan.unit, licensePeriod: plan.licensePeriod.toString() });
    setFormErrors({});
  };

  const closeFormModal = () => {
    setFormModal({ open: false, mode: 'new', id: '', code: '', name: '', price: '', unit: '', licensePeriod: '' });
    setFormErrors({});
  };

  const handleFormSave = () => {
    const errors: typeof formErrors = {};
    if (!formModal.code.trim())         errors.code         = '결제 요금 코드를 입력하세요';
    if (!formModal.name.trim())         errors.name         = '결제 요금 명을 입력하세요';
    if (!formModal.price.trim())        errors.price        = '결제 요금을 입력하세요';
    if (!formModal.unit.trim())         errors.unit         = '결제 요금 단위를 입력하세요';
    if (!formModal.licensePeriod.trim()) errors.licensePeriod = '라이센스기간을 입력하세요';

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    if (formModal.mode === 'new') {
      setPlans(prev => [...prev, {
        id: `p${Date.now()}`,
        code: formModal.code,
        name: formModal.name,
        price: parseFloat(formModal.price),
        unit: formModal.unit,
        licensePeriod: parseInt(formModal.licensePeriod),
      }]);
    } else {
      setPlans(prev => prev.map(p =>
        p.id === formModal.id
          ? { ...p, name: formModal.name, price: parseFloat(formModal.price), unit: formModal.unit, licensePeriod: parseInt(formModal.licensePeriod) }
          : p
      ));
    }
    closeFormModal();
  };

  /* ── 삭제 ── */
  const handleDelete = () => {
    setPlans(prev => prev.filter(p => !checkedIds.has(p.id)));
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
        <span className="text-slate-700 font-medium">결제요금관리</span>
      </nav>

      {/* ── 검색 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <InputField
              inputSize="md"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="결제 요금 코드, 결제 요금 명으로 검색"
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
            <span className="text-sm font-medium text-slate-800">결제 요금 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">{filtered.length}건</span>
            {checkedIds.size > 0 && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-[3px] font-medium">{checkedIds.size}개 선택</span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <Button variant="primary" size="sm" leftIcon={<Plus size={13} />} onClick={openNewModal}>신규</Button>
            <Button
              variant="outline" size="sm"
              disabled={checkedIds.size === 0}
              className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 disabled:border-slate-200 disabled:text-slate-300"
              onClick={() => setDeleteModalOpen(true)}
            >
              {checkedIds.size > 0 ? `삭제 (${checkedIds.size})` : '삭제'}
            </Button>
          </div>
        </div>

        {/* 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
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
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">결제 요금 코드</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">결제 요금 명</th>
                <th className="text-right px-3 py-2.5 text-xs font-medium text-slate-500">결제 요금</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">결제 요금 단위</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">라이센스기간(월)</th>
                <th className="w-16 px-3 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400 text-sm">
                    {appliedSearch ? '검색 결과가 없습니다.' : '등록된 결제 요금이 없습니다.'}
                  </td>
                </tr>
              ) : (
                filtered.map(plan => (
                  <tr key={plan.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-2.5">
                      <CheckboxField size="sm" checked={checkedIds.has(plan.id)} onChange={() => handleCheck(plan.id)} />
                    </td>
                    <td className="px-3 py-2.5 font-mono text-xs text-slate-600">{plan.code}</td>
                    <td className="px-3 py-2.5 text-slate-700">{plan.name}</td>
                    <td className="px-3 py-2.5 text-right font-medium text-slate-800">{plan.price.toLocaleString()}</td>
                    <td className="px-3 py-2.5 text-slate-600">{plan.unit}</td>
                    <td className="px-3 py-2.5 text-center">
                      <Tag color={plan.licensePeriod === 12 ? 'blue' : 'gray'} size="sm">{plan.licensePeriod}개월</Tag>
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <button
                        onClick={e => openEditModal(plan, e)}
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
        title={formModal.mode === 'new' ? '결제 요금 신규 등록' : '결제 요금 수정'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={closeFormModal}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handleFormSave}>저장</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">결제 요금 코드 <span className="text-red-400">*</span></label>
            {formModal.mode === 'edit' ? (
              <div className="px-3 py-2 text-sm bg-slate-100 text-slate-400 rounded-[4px] border border-slate-200 font-mono select-none">{formModal.code}</div>
            ) : (
              <InputField
                inputSize="md"
                value={formModal.code}
                onChange={e => { setFormModal({ ...formModal, code: e.target.value }); setFormErrors(p => ({ ...p, code: undefined })); }}
                placeholder="예: BASIC_MONTHLY"
                errorText={formErrors.code}
              />
            )}
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">결제 요금 명 <span className="text-red-400">*</span></label>
            <InputField
              inputSize="md"
              value={formModal.name}
              onChange={e => { setFormModal({ ...formModal, name: e.target.value }); setFormErrors(p => ({ ...p, name: undefined })); }}
              placeholder="예: 베이직 월간"
              errorText={formErrors.name}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">결제 요금 <span className="text-red-400">*</span></label>
            <InputField
              inputSize="md"
              value={formModal.price}
              onChange={e => { setFormModal({ ...formModal, price: e.target.value }); setFormErrors(p => ({ ...p, price: undefined })); }}
              placeholder="예: 29000"
              errorText={formErrors.price}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">결제 요금 단위 <span className="text-red-400">*</span></label>
            <InputField
              inputSize="md"
              value={formModal.unit}
              onChange={e => { setFormModal({ ...formModal, unit: e.target.value }); setFormErrors(p => ({ ...p, unit: undefined })); }}
              placeholder="예: 원/월"
              errorText={formErrors.unit}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">라이센스기간(월) <span className="text-red-400">*</span></label>
            <InputField
              inputSize="md"
              value={formModal.licensePeriod}
              onChange={e => { setFormModal({ ...formModal, licensePeriod: e.target.value }); setFormErrors(p => ({ ...p, licensePeriod: undefined })); }}
              placeholder="예: 1"
              errorText={formErrors.licensePeriod}
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
          <p className="font-medium text-slate-800">선택한 {checkedIds.size}개 결제 요금을 삭제하시겠습니까?</p>
          <p className="text-sm text-slate-500">삭제된 데이터는 복구할 수 없습니다.</p>
        </div>
      </Modal>
    </div>
  );
}