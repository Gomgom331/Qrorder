import { useState } from 'react';
import { Modal, ModalBtn, ResultModal, ResultType, ValidationModal, ResetModal } from '../components/ui/Modal';
import { CheckboxField } from '../components/ui/CheckboxField';
import { InputField } from '../components/ui/InputField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import {
  AlertTriangle,
  Trash2,
  CheckCircle2,
  Info,
  Lock,
  Eye,
  EyeOff,
  Mail,
  Phone,
  MapPin,
  Building2,
  User,
  FileText,
  Save,
  X,
  Plus,
  Pencil,
  XCircle,
} from 'lucide-react';

// ─── XS: Result / Completion ─────────────────────────────────────
function ResultModalDemo() {
  const [active, setActive] = useState<ResultType | null>(null);
  const [customMsg, setCustomMsg] = useState<{ msg: string; sub?: string } | null>(null);

  const variants: { type: ResultType; label: string; color: string }[] = [
    { type: 'saved',   label: '저장되었습니다',           color: 'text-emerald-600 border-emerald-200 hover:bg-emerald-50' },
    { type: 'deleted', label: '삭제되었습니다',           color: 'text-red-500 border-red-200 hover:bg-red-50' },
    { type: 'updated', label: '수정되었습니다',           color: 'text-blue-600 border-blue-200 hover:bg-blue-50' },
    { type: 'warning', label: '체크박스 선택이 필요합니다', color: 'text-amber-600 border-amber-200 hover:bg-amber-50' },
    { type: 'error',   label: '오류가 발생했습니다',       color: 'text-red-500 border-red-200 hover:bg-red-50' },
  ];

  return (
    <div className="bg-white rounded-[6px] border border-slate-200 p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-[#FF6B2B]/15 text-[#FF6B2B] border border-[#FF6B2B]/30 px-2 py-0.5 rounded-[3px] font-mono">XS</span>
        <h3 className="text-slate-800">완료 / 결과 모달</h3>
      </div>
      <p className="text-xs text-slate-400 mb-4">
        액션 완료 후 피드백 표시. 확인 버튼으로 닫힘
      </p>

      {/* Variant buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {variants.map(({ type, label, color }) => (
          <button
            key={type}
            onClick={() => { setActive(type); setCustomMsg(null); }}
            className={`px-3 py-1.5 text-sm border rounded-[4px] transition-colors ${color}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Custom message example */}
      <div className="border-t border-slate-100 pt-4">
        <p className="text-xs text-slate-400 mb-2.5">커스텀 메시지 예시</p>
        <div className="flex gap-2 flex-wrap">
          {[
            { type: 'saved' as ResultType,   msg: '설정이 저장되었습니다.',    sub: '변경 사항이 즉시 적용됩니다.' },
            { type: 'deleted' as ResultType, msg: '3건이 삭제되었습니다.',    sub: '삭제된 데이터는 복구할 수 없습니다.' },
            { type: 'warning' as ResultType, msg: '항목을 먼저 선택해 주세요.', sub: '삭제할 행을 체크박스로 선택 후 진행하세요.' },
          ].map(({ type, msg, sub }) => (
            <button
              key={msg}
              onClick={() => { setActive(type); setCustomMsg({ msg, sub }); }}
              className="px-3 py-1.5 text-xs border border-slate-200 rounded-[4px] text-slate-600 hover:bg-slate-50 transition-colors"
            >
              "{msg}"
            </button>
          ))}
        </div>
      </div>

      {/* Result Modal */}
      {active && (
        <ResultModal
          open
          type={active}
          message={customMsg?.msg}
          subMessage={customMsg?.sub}
          onClose={() => { setActive(null); setCustomMsg(null); }}
        />
      )}
    </div>
  );
}

// ─── SM: Alert / Confirm ─────────────────────────────────────────
function AlertModalDemo() {
  const [which, setWhich] = useState<'delete' | 'success' | 'info' | 'edit' | null>(null);

  const configs = {
    delete: {
      icon: <Trash2 size={28} className="text-red-500" />,
      bg: 'bg-red-50',
      title: '삭제하시겠습니까?',
      desc: '선택한 항목을 삭제하면 복구할 수 없습니다. 정말 삭제하시겠습니까?',
      footer: (
        <>
          <ModalBtn variant="outline" onClick={() => setWhich(null)}>취소</ModalBtn>
          <ModalBtn variant="danger" onClick={() => setWhich(null)}>삭제</ModalBtn>
        </>
      ),
    },
    success: {
      icon: <CheckCircle2 size={28} className="text-emerald-500" />,
      bg: 'bg-emerald-50',
      title: '저장하시겠습니까?',
      desc: '변경한 내용을 저장합니다. 저장 후에는 이전 상태로 되돌릴 수 없습니다.',
      footer: (
        <>
          <ModalBtn variant="outline" onClick={() => setWhich(null)}>취소</ModalBtn>
          <ModalBtn variant="primary" onClick={() => setWhich(null)}>저장</ModalBtn>
        </>
      ),
    },
    info: {
      icon: <Info size={28} className="text-[#FF6B2B]" />,
      bg: 'bg-orange-50',
      title: '안내',
      desc: '해당 작업을 진행하려면 관리자 권한이 필요합니다. 권한 신청 후 이용해 주세요.',
      footer: (
        <>
          <ModalBtn variant="outline" onClick={() => setWhich(null)}>닫기</ModalBtn>
          <ModalBtn variant="primary" onClick={() => setWhich(null)}>권한 신청</ModalBtn>
        </>
      ),
    },
    edit: {
      icon: <Pencil size={24} className="text-[#FF6B2B]" />,
      bg: 'bg-[#FF6B2B]/10',
      title: '수정된 내용을 저장하시겠습니까?',
      desc: '변경된 내용이 저장됩니다.',
      footer: (
        <>
          <ModalBtn variant="outline" onClick={() => setWhich(null)}>취소</ModalBtn>
          <ModalBtn variant="primary" onClick={() => setWhich(null)}>저장</ModalBtn>
        </>
      ),
    },
  };

  return (
    <div className="bg-white rounded-[6px] border border-slate-200 p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-slate-800 text-white px-2 py-0.5 rounded-[3px] font-mono">SM</span>
        <h3 className="text-slate-800">알림 / 확인 모달</h3>
      </div>
      <p className="text-xs text-slate-400 mb-4">삭제 확인, 완료 알림, 안내 메시지 등에 사용</p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setWhich('delete')}
          className="px-4 py-2 text-sm text-red-500 border border-red-200 rounded-[4px] hover:bg-red-50 transition-colors flex items-center gap-1.5"
        >
          <Trash2 size={14} /> 삭제 확인
        </button>
        <button
          onClick={() => setWhich('success')}
          className="px-4 py-2 text-sm text-emerald-600 border border-emerald-200 rounded-[4px] hover:bg-emerald-50 transition-colors flex items-center gap-1.5"
        >
          <CheckCircle2 size={14} /> 완료 알림
        </button>
        <button
          onClick={() => setWhich('info')}
          className="px-4 py-2 text-sm text-[#FF6B2B] border border-orange-200 rounded-[4px] hover:bg-orange-50 transition-colors flex items-center gap-1.5"
        >
          <Info size={14} /> 안내 알림
        </button>
        <button
          onClick={() => setWhich('edit')}
          className="px-4 py-2 text-sm text-[#FF6B2B] border border-[#FF6B2B]/30 rounded-[4px] hover:bg-[#FF6B2B]/5 transition-colors flex items-center gap-1.5"
        >
          <Pencil size={14} /> 수정 확인
        </button>
      </div>

      {which && (
        <Modal open size="sm" onClose={() => setWhich(null)} footer={configs[which].footer}>
          <div className="text-center py-2 space-y-3">
            <div className={`w-14 h-14 ${configs[which].bg} rounded-full flex items-center justify-center mx-auto`}>
              {configs[which].icon}
            </div>
            <div>
              <p className="text-base font-medium text-slate-800">{configs[which].title}</p>
              <p className="text-sm text-slate-500 mt-1.5">{configs[which].desc}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── ValidationModal Demo ────────────────────────────────────────
function ValidationModalDemo() {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState<string[]>([]);

  const cases: { label: string; fields: string[] }[] = [
    { label: '메시지만 표시', fields: [] },
    { label: '1개 누락', fields: ['사업자명'] },
    { label: '복수 누락', fields: ['사업자명', '대표자명', '전화번호'] },
    { label: '전체 누락', fields: ['사업자명', '상호명', '대표자명', '이메일', '전화번호'] },
  ];

  return (
    <div className="bg-white rounded-[6px] border border-slate-200 p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-[3px] font-mono">VAL</span>
        <h3 className="text-slate-800">필수값 미입력 모달</h3>
      </div>
      <p className="text-xs text-slate-400 mb-4">
        폼 저장 시 필수 항목이 비어 있을 때 표시. 확인 버튼 하나로 닫힘
      </p>
      <div className="flex flex-wrap gap-2">
        {cases.map(({ label, fields: f }) => (
          <button
            key={label}
            onClick={() => { setFields(f); setOpen(true); }}
            className="px-3 py-1.5 text-sm border border-amber-200 text-amber-700 rounded-[4px] hover:bg-amber-50 transition-colors"
          >
            {label}
          </button>
        ))}
      </div>

      <ValidationModal
        open={open}
        onClose={() => setOpen(false)}
        fields={fields}
      />
    </div>
  );
}

// ─── ResetModal Demo ─────────────────────────────────────────────
function ResetModalDemo() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  };

  return (
    <div className="bg-white rounded-[6px] border border-slate-200 p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-slate-400 text-white px-2 py-0.5 rounded-[3px] font-mono">RST</span>
        <h3 className="text-slate-800">초기화 확인 모달</h3>
      </div>
      <p className="text-xs text-slate-400 mb-4">
        비밀번호·설정 초기화 전 확인 요청. 닫기 / 확인 두 버튼
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-[4px] hover:bg-slate-50 transition-colors"
        >
          초기화
        </button>
        {done && (
          <span className="px-3 py-2 text-sm text-emerald-600 bg-emerald-50 rounded-[4px]">
            초기화되었습니다
          </span>
        )}
      </div>

      <ResetModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

// ─── MD-2: 공통코드 마스터 신규/수정 모달 ──────────────────────────
const USABLE_OPTIONS_DEMO = [
  { value: 'true',  label: '사용 (Y)' },
  { value: 'false', label: '미사용 (N)' },
];

function MasterCodeModalDemo() {
  const [mode, setMode] = useState<'new' | 'edit' | null>(null);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [usable, setUsable] = useState('true');
  const [errors, setErrors] = useState<{ code?: string; name?: string }>({});
  const [editConfirm, setEditConfirm] = useState(false);
  const [saved, setSaved] = useState(false);

  const openNew = () => {
    setCode(''); setName(''); setUsable('true'); setErrors({});
    setMode('new');
  };

  const openEdit = () => {
    setCode('ORDER_STATUS'); setName('주문상태'); setUsable('true'); setErrors({});
    setMode('edit');
  };

  const handleClose = () => { setMode(null); setErrors({}); };

  const handleSave = () => {
    const errs: { code?: string; name?: string } = {};
    if (mode === 'new' && !code.trim()) errs.code = '공통코드를 입력해 주세요.';
    if (!name.trim()) errs.name = '공통코드명을 입력해 주세요.';
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    if (mode === 'edit') { setEditConfirm(true); }
    else { handleClose(); setSaved(true); setTimeout(() => setSaved(false), 2000); }
  };

  const handleConfirmSave = () => {
    setEditConfirm(false);
    handleClose();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-white rounded-[6px] border border-slate-200 p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-slate-600 text-white px-2 py-0.5 rounded-[3px] font-mono">MD</span>
        <h3 className="text-slate-800">공통코드 마스터 신규 / 수정 모달</h3>
      </div>
      <p className="text-xs text-slate-400 mb-4">
        필수 필드 미입력 시 에러 표시 · 수정 모드는 공통코드 읽기 전용 · 저장 시 확인 모달 연결
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={openNew}
          className="px-4 py-2 text-sm text-white bg-[#FF6B2B] rounded-[4px] hover:bg-[#E85D20] transition-colors flex items-center gap-1.5"
        >
          <Plus size={14} /> 신규 등록
        </button>
        <button
          onClick={openEdit}
          className="px-4 py-2 text-sm text-[#FF6B2B] border border-[#FF6B2B]/30 rounded-[4px] hover:bg-[#FF6B2B]/5 transition-colors flex items-center gap-1.5"
        >
          <Pencil size={14} /> 수정 모드
        </button>
        {saved && (
          <span className="px-3 py-2 text-sm text-emerald-600 bg-emerald-50 rounded-[4px] flex items-center gap-1.5">
            <CheckCircle2 size={14} /> 저장되었습니다
          </span>
        )}
      </div>

      {/* ── 신규/수정 폼 모달 ── */}
      <Modal
        open={mode !== null}
        onClose={handleClose}
        size="md"
        title={mode === 'new' ? '공통코드 마스터 신규 등록' : '공통코드 마스터 수정'}
        footer={
          <>
            <ModalBtn variant="outline" onClick={handleClose}>닫기</ModalBtn>
            <ModalBtn variant="primary" onClick={handleSave}>저장</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          {/* 공통코드 */}
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">
              공통코드 <span className="text-red-400">*</span>
            </label>
            {mode === 'edit' ? (
              <div className="px-3 py-2 text-sm bg-slate-100 text-slate-400 rounded-[4px] border border-slate-200 font-mono select-none">
                {code}
              </div>
            ) : (
              <InputField
                inputSize="md"
                value={code}
                onChange={(e) => { setCode(e.target.value); if (errors.code) setErrors((p) => ({ ...p, code: undefined })); }}
                placeholder="예: ORDER_STATUS"
                errorText={errors.code}
              />
            )}
          </div>

          {/* 공통코드명 */}
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">
              공통코드명 <span className="text-red-400">*</span>
            </label>
            <InputField
              inputSize="md"
              value={name}
              onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }}
              placeholder="예: 주문상태"
              errorText={errors.name}
            />
          </div>

          {/* 사용여부 */}
          <div>
            <label className="block text-xs text-slate-500 mb-1.5">
              사용여부 <span className="text-red-400">*</span>
            </label>
            <DropdownSelect
              inputSize="md"
              options={USABLE_OPTIONS_DEMO}
              value={usable}
              onChange={setUsable}
            />
          </div>
        </div>
      </Modal>

      {/* ── 수정 확인 모달 ── */}
      <Modal
        open={editConfirm}
        onClose={() => setEditConfirm(false)}
        size="sm"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setEditConfirm(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handleConfirmSave}>저장</ModalBtn>
          </>
        }
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

// ─── LG: Form / Register ─────────────────────────────────────────
function FormModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-[6px] border border-slate-200 p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-[#FF6B2B] text-white px-2 py-0.5 rounded-[3px] font-mono">LG</span>
        <h3 className="text-slate-800">폼 등록 모달</h3>
      </div>
      <p className="text-xs text-slate-400 mb-4">새 항목 등록, 사업장·메뉴 추가 등 여러 필드의 폼 입력</p>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 px-4 py-2 text-sm text-white bg-[#FF6B2B] rounded-[4px] hover:bg-[#E85D20] transition-colors"
      >
        <Plus size={14} /> 사업장 등록
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size="lg"
        title="사업장 신규 등록"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={() => setOpen(false)}>
              <Save size={13} className="inline mr-1" />
              저장
            </ModalBtn>
          </>
        }
      >
        <div className="space-y-5">
          {/* Section: 기본정보 */}
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <FileText size={12} /> 기본 정보
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-slate-600 mb-1.5">사업자명 *</label>
                <input placeholder="(주)회사명" className="w-full px-3 py-2 text-sm border border-slate-200 rounded-[4px] focus:outline-none focus:border-[#FF6B2B]" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1.5">상호명 *</label>
                <input placeholder="브랜드명" className="w-full px-3 py-2 text-sm border border-slate-200 rounded-[4px] focus:outline-none focus:border-[#FF6B2B]" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1.5">대표자명 *</label>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input placeholder="홍길동" className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-[4px] focus:outline-none focus:border-[#FF6B2B]" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1.5">담당자명</label>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input placeholder="담당자" className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-[4px] focus:outline-none focus:border-[#FF6B2B]" />
                </div>
              </div>
            </div>
          </div>

          {/* Section: 연락처 */}
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <Phone size={12} /> 연락처
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-slate-600 mb-1.5">이메일</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="email" placeholder="info@example.kr" className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-[4px] focus:outline-none focus:border-[#FF6B2B]" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1.5">전화번호</label>
                <div className="relative">
                  <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input placeholder="02-0000-0000" className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-[4px] focus:outline-none focus:border-[#FF6B2B]" />
                </div>
              </div>
            </div>
          </div>

          {/* Section: 주소 */}
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <MapPin size={12} /> 주소
            </p>
            <div className="flex gap-2 mb-2">
              <input placeholder="우편번호" className="w-28 px-3 py-2 text-sm border border-slate-200 rounded-[4px] focus:outline-none focus:border-[#FF6B2B]" />
              <button className="px-3 py-2 text-sm bg-slate-100 text-slate-600 rounded-[4px] hover:bg-slate-200 transition-colors whitespace-nowrap">주소 검색</button>
            </div>
            <input placeholder="기본 주소" className="w-full px-3 py-2 text-sm border border-slate-200 rounded-[4px] mb-2 focus:outline-none focus:border-[#FF6B2B]" />
            <input placeholder="상세 주소 (동/호수)" className="w-full px-3 py-2 text-sm border border-slate-200 rounded-[4px] focus:outline-none focus:border-[#FF6B2B]" />
          </div>

          {/* Section: 설정 */}
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <Building2 size={12} /> 설정
            </p>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <CheckboxField size="md" label="클라이언트 접속 허용" defaultChecked />
            </label>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// ─── XL: Detail / Edit ──────────────────────────────────────────
function DetailModalDemo() {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  const data = {
    code: 'BIZ-003',
    name: '(주)더맛집컴퍼니',
    tradeName: '더맛집 삼겹살',
    ceo: '이준혁',
    manager: '정수현',
    email: 'info@thematjip.kr',
    phone: '02-7777-8888',
    zip: '03992',
    address: '서울 마포구 합정동 23번길 14',
    detail: '2층',
    clientAccess: true,
    status: '정상',
    created: '2026-01-05',
    orders: 1248,
    revenue: '24,960,000',
  };

  return (
    <div className="bg-white rounded-[6px] border border-slate-200 p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-slate-500 text-white px-2 py-0.5 rounded-[3px] font-mono">XL</span>
        <h3 className="text-slate-800">상세 / 수정 모달</h3>
      </div>
      <p className="text-xs text-slate-400 mb-4">사업장·주문·메뉴 상세 정보 열람 및 인라인 수정</p>
      <button
        onClick={() => { setEditing(false); setOpen(true); }}
        className="flex items-center gap-1.5 px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-[4px] hover:bg-slate-50 transition-colors"
      >
        <FileText size={14} /> 상세 조회
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        size="xl"
        title={`사업장 상세 — ${data.code}`}
        footer={
          editing ? (
            <>
              <ModalBtn variant="outline" onClick={() => setEditing(false)}>취소</ModalBtn>
              <ModalBtn variant="primary" onClick={() => { setEditing(false); }}>
                <Save size={13} className="inline mr-1" />저장
              </ModalBtn>
            </>
          ) : (
            <>
              <ModalBtn variant="outline" onClick={() => setOpen(false)}>닫기</ModalBtn>
              <ModalBtn variant="primary" onClick={() => setEditing(true)}>
                수정
              </ModalBtn>
            </>
          )
        }
      >
        <div className="space-y-6">
          {/* Status bar */}
          <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-slate-100">
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-[3px]">
              {data.status}
            </span>
            <span className="text-xs text-slate-400">등록일: {data.created}</span>
            <div className="ml-auto flex gap-4 text-xs text-slate-500">
              <span>총 주문 <strong className="text-slate-800">{data.orders.toLocaleString()}건</strong></span>
              <span>매출 <strong className="text-[#FF6B2B]">{data.revenue}원</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: 기본정보 */}
            <div className="space-y-4">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wide flex items-center gap-1.5">
                <FileText size={12} /> 기본 정보
              </p>
              {[
                { label: '사업자명', value: data.name },
                { label: '상호명', value: data.tradeName },
                { label: '대표자명', value: data.ceo },
                { label: '담당자명', value: data.manager },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-xs text-slate-400">{label}</span>
                  {editing ? (
                    <input defaultValue={value} className="px-3 py-1.5 text-sm border border-slate-200 rounded-[4px] focus:outline-none focus:border-[#FF6B2B]" />
                  ) : (
                    <span className="text-sm text-slate-700">{value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Right: 연락처 & 주소 */}
            <div className="space-y-4">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wide flex items-center gap-1.5">
                <Phone size={12} /> 연락처 & 주소
              </p>
              {[
                { label: '이메일', value: data.email },
                { label: '전화번호', value: data.phone },
                { label: '우편번호', value: data.zip },
                { label: '주소', value: data.address },
                { label: '상세주소', value: data.detail },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-xs text-slate-400">{label}</span>
                  {editing ? (
                    <input defaultValue={value} className="px-3 py-1.5 text-sm border border-slate-200 rounded-[4px] focus:outline-none focus:border-[#FF6B2B]" />
                  ) : (
                    <span className="text-sm text-slate-700">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Settings row */}
          <div className="flex items-center gap-4 pt-2 border-t border-slate-100">
            <span className="text-xs text-slate-400">클라이언트 접속</span>
            {editing ? (
              <CheckboxField size="sm" defaultChecked={data.clientAccess} />
            ) : (
              <span className={`text-xs px-2 py-0.5 rounded-[3px] ${data.clientAccess ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                {data.clientAccess ? '허용' : '차단'}
              </span>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export function ModalDemo() {
  return (
    <div className="p-5 lg:p-6 space-y-5">
      <div>
        <h2 className="text-slate-800">UI 컴포넌트 — 모달 & 팝업</h2>
        <p className="text-sm text-slate-400 mt-1">4가지 사이즈의 모달 컴포넌트 가이드</p>
      </div>

      {/* Size reference */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { size: 'XS',  desc: '320px', use: '완료 / 결과',   color: 'bg-[#FF6B2B]/15 text-[#FF6B2B] border border-[#FF6B2B]/30' },
          { size: 'SM',  desc: '360px', use: '알림 / 확인',   color: 'bg-slate-800 text-white' },
          { size: 'MD',  desc: '480px', use: '로그인 / 인증', color: 'bg-slate-600 text-white' },
          { size: 'LG',  desc: '640px', use: '폼 등록',       color: 'bg-[#FF6B2B] text-white' },
          { size: 'XL',  desc: '900px', use: '상세 / 수정',   color: 'bg-slate-500 text-white' },
        ].map((s) => (
          <div key={s.size} className="bg-white rounded-[6px] border border-slate-200 p-3">
            <span className={`text-xs px-2 py-0.5 rounded-[3px] font-mono ${s.color}`}>{s.size}</span>
            <div className="mt-2 text-xs text-slate-400">{s.desc}</div>
            <div className="text-sm text-slate-700 font-medium mt-0.5">{s.use}</div>
          </div>
        ))}
      </div>

      <ResultModalDemo />
      <AlertModalDemo />
      <ValidationModalDemo />
      <ResetModalDemo />
      <MasterCodeModalDemo />
      <FormModalDemo />
      <DetailModalDemo />
    </div>
  );
}