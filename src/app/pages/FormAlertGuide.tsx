import { useState } from 'react';
import { FormAlert, DismissibleFormAlert, FormAlertType } from '../components/ui/FormAlert';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';
import { Mail, Lock, User } from 'lucide-react';
import { Modal, ModalBtn } from '../components/ui/Modal';

// ─── Section ─────────────────────────────────────────────────────
function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
        <p className="text-sm font-medium text-slate-800">{title}</p>
        {desc && <p className="text-xs text-slate-400 mt-0.5">{desc}</p>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─── Variants reference ──────────────────────────────────────────
const VARIANTS: { type: FormAlertType; label: string; title: string; desc: string; badge: string }[] = [
  {
    type: 'error',
    label: 'Error',
    badge: 'bg-red-100 text-red-600',
    title: '저장에 실패했습니다.',
    desc: '서버와의 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
  },
  {
    type: 'info',
    label: 'Info / 안내',
    badge: 'bg-blue-100 text-blue-600',
    title: '이 내용은 저장 후 즉시 적용됩니다.',
    desc: '변경된 설정은 실시간으로 모든 사용자에게 반영됩니다.',
  },
  {
    type: 'guide',
    label: 'Guide / 가이드',
    badge: 'bg-amber-100 text-amber-600',
    title: '입력 형식 안내',
    desc: '사업자번호는 000-00-00000 형식으로 입력하세요. (\'-\' 포함)',
  },
  {
    type: 'success',
    label: 'Success / 성공',
    badge: 'bg-emerald-100 text-emerald-600',
    title: '저장이 완료되었습니다.',
    desc: '변경사항이 성공적으로 저장되었습니다.',
  },
];

// ─── Demo form ───────────────────────────────────────────────────
function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alerts, setAlerts] = useState<FormAlertType[]>([]);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const dismiss = (type: FormAlertType) => setAlerts((p) => p.filter((t) => t !== type));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setSuccess(false);
    const newAlerts: FormAlertType[] = [];
    if (!email) newAlerts.push('error');
    if (!pw) newAlerts.push('error');
    if (pw && pw.length < 8) newAlerts.push('guide');
    if (newAlerts.length === 0) {
      setSuccess(true);
      newAlerts.push('success');
    }
    setAlerts([...new Set(newAlerts)]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-3">
      {/* Form alerts appear here — top of form */}
      {alerts.includes('error') && (
        <FormAlert
          type="error"
          title="입력 오류"
          errors={[
            !email ? '이메일 주소를 입력해 주세요.' : '',
            submitted && pw.length < 8 && pw ? '비밀번호는 8자 이상이어야 합니다.' : '',
          ].filter(Boolean)}
          onDismiss={() => dismiss('error')}
        />
      )}
      {alerts.includes('guide') && (
        <FormAlert
          type="guide"
          title="비밀번호 조건"
          description="영문 · 숫자 · 특수문자 조합 8자 이상을 권장합니다."
          onDismiss={() => dismiss('guide')}
        />
      )}
      {alerts.includes('success') && (
        <FormAlert
          type="success"
          title="로그인 성공"
          description={`${email} 계정으로 로그인되었습니다.`}
          onDismiss={() => dismiss('success')}
        />
      )}

      <InputField
        inputSize="md"
        label="이메일"
        placeholder="admin@qrorder.kr"
        leftIcon={<Mail size={14} />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        forceState={submitted && !email ? 'error' : undefined}
        errorText={submitted && !email ? '필수 입력 항목입니다.' : undefined}
      />
      <InputField
        inputSize="md"
        label="비밀번호"
        placeholder="••••••••"
        type="password"
        leftIcon={<Lock size={14} />}
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        showPasswordToggle
        forceState={submitted && pw.length > 0 && pw.length < 8 ? 'error' : submitted && !pw ? 'error' : undefined}
        errorText={submitted && !pw ? '필수 입력 항목입니다.' : submitted && pw.length < 8 && pw ? '8자 이상 입력하세요.' : undefined}
      />
      <div className="flex gap-2 pt-1">
        <Button type="submit" variant="primary" size="md" className="flex-1">로그인</Button>
        <Button type="button" variant="secondary" size="md" onClick={() => { setAlerts([]); setSubmitted(false); setEmail(''); setPw(''); }}>초기화</Button>
      </div>
    </form>
  );
}

// ─── Modal form demo ─────────────────────────────────────────────
function ModalFormDemo() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alertType, setAlertType] = useState<FormAlertType | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    setSubmitted(true);
    if (!name || !email) {
      setAlertType('error');
    } else if (!email.includes('@')) {
      setAlertType('guide');
    } else {
      setAlertType('success');
      setTimeout(() => setOpen(false), 1200);
    }
  };

  const resetModal = () => {
    setSubmitted(false);
    setAlertType(null);
    setName('');
    setEmail('');
  };

  return (
    <>
      <Button variant="outline" size="md" onClick={() => { resetModal(); setOpen(true); }}>
        모달 내 폼 알림 체험
      </Button>
      <Modal
        open={open}
        onClose={() => { setOpen(false); resetModal(); }}
        size="md"
        title="사용자 등록"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => { setOpen(false); resetModal(); }}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handleSave}>저장</ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          {alertType && (
            <FormAlert
              type={alertType}
              title={
                alertType === 'error' ? '입력을 확인해 주세요.' :
                alertType === 'guide' ? '이메일 형식을 확인하세요.' :
                '등록이 완료되었습니다!'
              }
              description={
                alertType === 'error' ? '필수 항목을 모두 입력해 주세요.' :
                alertType === 'guide' ? '올바른 이메일 주소를 입력해 주세요. (예: user@example.com)' :
                `${name}(${email}) 사용자가 등록되었습니다.`
              }
              onDismiss={() => setAlertType(null)}
            />
          )}
          <InputField inputSize="md" label="이름 *" placeholder="홍길동" leftIcon={<User size={14} />} value={name} onChange={(e) => setName(e.target.value)} forceState={submitted && !name ? 'error' : undefined} errorText={submitted && !name ? '이름을 입력해 주세요.' : undefined} />
          <InputField inputSize="md" label="이메일 *" placeholder="user@qrorder.kr" leftIcon={<Mail size={14} />} value={email} onChange={(e) => setEmail(e.target.value)} forceState={submitted && !email ? 'error' : undefined} errorText={submitted && !email ? '이메일을 입력해 주세요.' : undefined} />
        </div>
      </Modal>
    </>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export function FormAlertGuide() {
  const [resets, setResets] = useState<Record<FormAlertType, number>>({ error: 0, info: 0, guide: 0, success: 0 });

  const resetAlert = (type: FormAlertType) =>
    setResets((p) => ({ ...p, [type]: p[type] + 1 }));

  return (
    <div className="p-5 lg:p-6 space-y-4">
      <div>
        <h2 className="text-slate-800">폼 알림 컴포넌트</h2>
        <p className="text-sm text-slate-400 mt-1">폼 상단에 표시되는 오류 · 안내 · 가이드 · 성공 메시지. X 버튼으로 닫힙니다.</p>
      </div>

      {/* 1. All 4 variants */}
      <Section title="4가지 타입" desc="error · info · guide · success — X 버튼으로 닫힌 뒤 '재표시'로 다시 확인">
        <div className="space-y-3">
          {VARIANTS.map(({ type, label, title, desc, badge }) => (
            <div key={type} className="space-y-1.5">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-mono px-2 py-0.5 rounded-[3px] ${badge}`}>{label}</span>
              </div>
              <DismissibleFormAlert
                key={resets[type]}
                type={type}
                title={title}
                description={desc}
                defaultShow
              />
              <button
                onClick={() => resetAlert(type)}
                className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
              >
                ↺ 재표시
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* 2. With error list */}
      <Section title="오류 목록 (errors prop)" desc="여러 필드 오류를 리스트로 한 번에 표시">
        <div className="max-w-md space-y-3">
          <FormAlert
            type="error"
            title="다음 항목을 확인해 주세요."
            errors={[
              '이메일 주소를 입력해 주세요.',
              '비밀번호는 8자 이상이어야 합니다.',
              '이름은 한글 또는 영문으로 입력해 주세요.',
            ]}
          />
          <FormAlert
            type="guide"
            title="비밀번호 규칙"
            errors={[
              '8자 이상 20자 이하',
              '영문 대·소문자, 숫자, 특수문자(!@#$%) 조합',
              '이전에 사용한 비밀번호는 재사용 불가',
            ]}
          />
        </div>
      </Section>

      {/* 3. Non-dismissible */}
      <Section title="닫기 불가 (dismissible={false})" desc="중요한 시스템 메시지, 약관 안내 등">
        <div className="max-w-md space-y-3">
          <FormAlert
            type="info"
            title="서비스 점검 안내"
            description="2026년 3월 15일 오전 2시~4시 정기 점검이 예정되어 있습니다."
            dismissible={false}
          />
          <FormAlert
            type="guide"
            title="개인정보 수집 안내"
            description="입력하신 정보는 서비스 제공 목적으로만 사용됩니다."
            dismissible={false}
          />
        </div>
      </Section>

      {/* 4. Interactive form demo */}
      <Section title="폼 인터랙션 데모" desc="직접 입력하고 로그인 버튼을 눌러 알림 동작을 확인하세요">
        <DemoForm />
      </Section>

      {/* 5. Modal form demo */}
      <Section title="모달 내 폼 알림" desc="모달 상단에 알림이 표시되는 패턴">
        <ModalFormDemo />
      </Section>
    </div>
  );
}