import { useState } from 'react';
import { useNavigate } from 'react-router';
import { QrCode, CheckCircle2 } from 'lucide-react';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';
import { FormAlert } from '../components/ui/FormAlert';
import { CheckboxField } from '../components/ui/CheckboxField';

type Step = 'login' | 'privacy' | 'business' | 'signup';

export function ClientLogin() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('login');
  const [form, setForm] = useState({ id: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [resetOpen, setResetOpen] = useState(false);
  const [resetStep, setResetStep] = useState<'info' | 'form'>('info');
  const [resetId, setResetId] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // 회원가입 관련 state
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [businessForm, setBusinessForm] = useState({
    businessNumber: '',
    representative: '',
    openDate: '',
  });
  const [businessVerified, setBusinessVerified] = useState(false);
  const [signupForm, setSignupForm] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    verificationCode: '',
  });
  const [emailSent, setEmailSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [timer, setTimer] = useState(0);
  const [signupCompleteOpen, setSignupCompleteOpen] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.id || !form.password) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    
    // 클라이언트 사용자 타입 저장
    localStorage.setItem('userType', 'client');
    
    setLoading(false);
    navigate('/client');
  };

  const handleResetOpen = () => {
    setResetStep('info');
    setResetSent(false);
    setResetId('');
    setResetOpen(true);
  };

  const handleResetClose = () => {
    setResetOpen(false);
    setResetStep('info');
    setResetSent(false);
    setResetId('');
  };

  const handleReset = async () => {
    if (!resetId) return;
    await new Promise((r) => setTimeout(r, 600));
    setResetSent(true);
  };

  // 회원가입 관련 핸들러
  const handlePrivacyNext = () => {
    if (!privacyAgreed) return;
    setStep('business');
  };

  const handleBusinessVerify = async () => {
    if (!businessForm.businessNumber || !businessForm.representative || !businessForm.openDate) return;
    await new Promise((r) => setTimeout(r, 800));
    setBusinessVerified(true);
    setStep('signup');
  };

  const handleEmailVerify = async () => {
    if (!signupForm.email) return;
    await new Promise((r) => setTimeout(r, 600));
    setEmailSent(true);
    setTimer(300); // 5분
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleCodeVerify = async () => {
    if (!signupForm.verificationCode) return;
    await new Promise((r) => setTimeout(r, 600));
    setEmailVerified(true);
  };

  const handleSignup = async () => {
    if (!signupForm.id || !signupForm.password || !signupForm.passwordConfirm || !emailVerified) return;
    if (signupForm.password !== signupForm.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    await new Promise((r) => setTimeout(r, 800));
    setSignupCompleteOpen(true);
  };

  const handleSignupComplete = () => {
    setSignupCompleteOpen(false);
    setStep('login');
    // 모든 폼 초기화
    setPrivacyAgreed(false);
    setBusinessForm({ businessNumber: '', representative: '', openDate: '' });
    setBusinessVerified(false);
    setSignupForm({ id: '', password: '', passwordConfirm: '', email: '', verificationCode: '' });
    setEmailSent(false);
    setEmailVerified(false);
    setTimer(0);
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#FFF4EF] flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#FF6B2B]/5" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#FF6B2B]/5" />
      </div>

      <div className="relative w-full max-w-[420px]">
        {/* Card */}
        <div className="bg-white rounded-[8px] border border-slate-200 shadow-sm overflow-hidden">
          {/* Header band */}
          <div className="bg-[#0F172A] px-8 py-8 text-center">
            <div className="flex items-center justify-center gap-2.5 mb-1">
              <div className="bg-[#FF6B2B] text-white rounded-[4px] p-2 flex items-center justify-center">
                <QrCode size={22} />
              </div>
              <span className="text-2xl">
                <span className="font-bold text-[#FF6B2B]">QR</span>
                <span className="font-normal text-white">order</span>
              </span>
              <span className="text-[10px] text-emerald-500 bg-slate-800 px-1.5 py-0.5 rounded-[3px] self-center">CLIENT</span>
            </div>
          </div>

          {/* Form */}
          <div className="px-8 py-7">
            {/* 로그인 */}
            {step === 'login' && (
              <>
                <h2 className="text-slate-800 mb-1">매장 관리자 로그인</h2>
                <p className="text-xs text-slate-400 mb-6">매장 계정 정보를 입력하여 로그인하세요.</p>

                <form onSubmit={handleLogin} className="space-y-4">
                  <InputField
                    inputSize="lg"
                    label="아이디"
                    type="text"
                    value={form.id}
                    onChange={(e) => setForm({ ...form, id: e.target.value })}
                    placeholder="아이디를 입력하세요"
                  />

                  <InputField
                    inputSize="lg"
                    label="비밀번호"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="비밀번호를 입력하세요"
                    showPasswordToggle
                  />

                  {error && (
                    <FormAlert type="error" description={error} dismissible={false} />
                  )}

                  <div className="flex items-center justify-between text-xs">
                    <CheckboxField
                      size="sm"
                      label="아이디 저장"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <button
                      type="button"
                      onClick={handleResetOpen}
                      className="text-xs text-[#FF6B2B] hover:underline"
                    >
                      비밀번호 찾기
                    </button>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    className="w-full"
                  >
                    로그인
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full mt-[0.375rem]"
                    onClick={() => setStep('privacy')}
                  >
                    회원가입
                  </Button>
                </form>

                {/* 관리자 로그인 링크 */}
                <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-400 mb-2">시스템 관리자이신가요?</p>
                  <a
                    href="/login"
                    className="text-xs text-[#FF6B2B] hover:underline font-medium"
                  >
                    관리자 로그인 →
                  </a>
                </div>
              </>
            )}

            {/* 개인정보 수집·이용 동의 */}
            {step === 'privacy' && (
              <>
                <h2 className="text-slate-800 mb-1">개인정보 수집·이용 동의</h2>
                <p className="text-xs text-slate-400 mb-6">서비스 이용을 위해 아래 내용을 확인하고 동의해 주세요.</p>

                <div className="space-y-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-[4px] p-4 text-sm text-slate-600 space-y-3">
                    <div>
                      <p className="font-medium text-slate-700 mb-1">수집 항목</p>
                      <p className="text-xs">아이디, 비밀번호, 사업자 등록번호, 이메일</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700 mb-1">수집 목적</p>
                      <p className="text-xs">회원 식별, 서비스 제공, 계정 관리</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700 mb-1">보유 기간</p>
                      <p className="text-xs">회원 탈퇴 시까지 (관계 법령에 따라 일정 기간 보관될 수 있음)</p>
                    </div>
                  </div>

                  <CheckboxField
                    size="md"
                    label="개인정보 수집·이용에 동의합니다 (필수)"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  />

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setStep('login')}
                    >
                      취소
                    </Button>
                    <Button
                      variant="primary"
                      size="lg"
                      className="flex-1"
                      disabled={!privacyAgreed}
                      onClick={handlePrivacyNext}
                    >
                      동의 후 계속
                    </Button>
                  </div>
                </div>
              </>
            )}

            {/* 사업자 인증 */}
            {step === 'business' && (
              <>
                <h2 className="text-slate-800 mb-1">사업자 인증</h2>
                <p className="text-xs text-slate-400 mb-6">사업자 정보를 입력하여 인증을 진행해주세요.</p>

                <div className="space-y-4">
                  <InputField
                    inputSize="lg"
                    label="사업자 등록번호"
                    required
                    type="text"
                    value={businessForm.businessNumber}
                    onChange={(e) => setBusinessForm({ ...businessForm, businessNumber: e.target.value })}
                    placeholder="000-00-00000"
                  />

                  <InputField
                    inputSize="lg"
                    label="대표자명"
                    required
                    type="text"
                    value={businessForm.representative}
                    onChange={(e) => setBusinessForm({ ...businessForm, representative: e.target.value })}
                    placeholder="대표자명을 입력하세요"
                  />

                  <InputField
                    inputSize="lg"
                    label="개업일자"
                    required
                    type="date"
                    value={businessForm.openDate}
                    onChange={(e) => setBusinessForm({ ...businessForm, openDate: e.target.value })}
                    placeholder="연도-월-일"
                  />

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setStep('privacy')}
                    >
                      이전
                    </Button>
                    <Button
                      variant="primary"
                      size="lg"
                      className="flex-1"
                      disabled={!businessForm.businessNumber || !businessForm.representative || !businessForm.openDate}
                      onClick={handleBusinessVerify}
                    >
                      인증하기
                    </Button>
                  </div>
                </div>
              </>
            )}

            {/* 회원가입 */}
            {step === 'signup' && (
              <>
                <h2 className="text-slate-800 mb-1">회원가입</h2>
                <p className="text-xs text-slate-400 mb-6">서비스 이용을 위한 계정을 생성합니다.</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">
                      아이디 <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={signupForm.id}
                        onChange={(e) => setSignupForm({ ...signupForm, id: e.target.value })}
                        placeholder="아이디를 입력하세요"
                        className="flex-1 h-11 px-4 text-sm border border-slate-200 rounded-[4px] outline-none transition-all placeholder:text-slate-300 text-slate-800 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20"
                      />
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => alert('사용 가능한 아이디입니다.')}
                        className="whitespace-nowrap"
                      >
                        중복확인
                      </Button>
                    </div>
                    {signupForm.id && (
                      <p className="text-xs text-emerald-600 mt-1">사용 가능한 아이디입니다.</p>
                    )}
                  </div>

                  <InputField
                    inputSize="lg"
                    label="비밀번호"
                    required
                    type="password"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                    placeholder="비밀번호를 입력하세요"
                    showPasswordToggle
                  />

                  <InputField
                    inputSize="lg"
                    label="비밀번호 확인"
                    required
                    type="password"
                    value={signupForm.passwordConfirm}
                    onChange={(e) => setSignupForm({ ...signupForm, passwordConfirm: e.target.value })}
                    placeholder="비밀번호를 다시 입력하세요"
                    showPasswordToggle
                  />

                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                        placeholder="이메일을 입력하세요"
                        disabled={emailVerified}
                        className="flex-1 h-11 px-4 text-sm border border-slate-200 rounded-[4px] outline-none transition-all placeholder:text-slate-300 text-slate-800 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 disabled:bg-slate-50 disabled:cursor-not-allowed"
                      />
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleEmailVerify}
                        disabled={!signupForm.email || emailVerified}
                        className="whitespace-nowrap"
                      >
                        {emailSent ? '재전송' : '인증'}
                      </Button>
                    </div>
                  </div>

                  {emailSent && !emailVerified && (
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        인증 코드 <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={signupForm.verificationCode}
                          onChange={(e) => setSignupForm({ ...signupForm, verificationCode: e.target.value })}
                          placeholder="인증 코드를 입력하세요"
                          className="flex-1 h-11 px-4 text-sm border border-slate-200 rounded-[4px] outline-none transition-all placeholder:text-slate-300 text-slate-800 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20"
                        />
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={handleCodeVerify}
                          disabled={!signupForm.verificationCode}
                          className="whitespace-nowrap"
                        >
                          확인
                        </Button>
                      </div>
                      {timer > 0 && (
                        <p className="text-xs text-[#FF6B2B] mt-1">남은 시간 {formatTime(timer)}</p>
                      )}
                    </div>
                  )}

                  {emailVerified && (
                    <p className="text-xs text-emerald-600">이메일 인증이 완료되었습니다.</p>
                  )}

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setStep('business')}
                    >
                      이전
                    </Button>
                    <Button
                      variant="primary"
                      size="lg"
                      className="flex-1"
                      disabled={!signupForm.id || !signupForm.password || !signupForm.passwordConfirm || !emailVerified}
                      onClick={handleSignup}
                    >
                      가입하기
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          © 2026 QRorder. All rights reserved.
        </p>
      </div>

      {/* Signup Complete Modal */}
      <Modal
        open={signupCompleteOpen}
        onClose={handleSignupComplete}
        size="sm"
        title=""
        footer={
          <ModalBtn variant="primary" onClick={handleSignupComplete}>확인</ModalBtn>
        }
      >
        <div className="text-center py-4 space-y-3">
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={24} className="text-emerald-500" />
          </div>
          <p className="text-sm text-slate-700 font-medium">회원가입이 완료되었습니다</p>
          <p className="text-xs text-slate-400">
            로그인하여 QRorder 서비스를 이용해보세요.
          </p>
        </div>
      </Modal>

      {/* Password Reset Modal */}
      <Modal
        open={resetOpen}
        onClose={handleResetClose}
        size="md"
        title={resetStep === 'info' ? '' : '비밀번호 찾기'}
        footer={
          resetStep === 'info' ? (
            <>
              <Button variant="secondary" size="lg" className="flex-1" onClick={handleResetClose}>
                취소
              </Button>
              <Button variant="primary" size="lg" className="flex-1" onClick={() => setResetStep('form')}>
                관리자 인증
              </Button>
            </>
          ) : !resetSent ? (
            <>
              <ModalBtn variant="outline" onClick={handleResetClose}>취소</ModalBtn>
              <ModalBtn variant="primary" onClick={handleReset} disabled={!resetId}>
                확인 요청
              </ModalBtn>
            </>
          ) : (
            <ModalBtn variant="primary" onClick={handleResetClose}>확인</ModalBtn>
          )
        }
      >
        {resetStep === 'info' ? (
          <div className="py-6 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-slate-800">비밀번호 찾기</h2>
              <p className="text-sm text-slate-600">
                관리자 계정의 비밀번호를 분실하신 경우,<br />
                등록된 정보로 인증 후 재설정 하실 수 있습니다.
              </p>
            </div>

            <div className="bg-slate-100 border border-slate-200 rounded-[4px] p-4">
              <p className="text-sm text-slate-700 text-center leading-relaxed">
                일반 유저 계정은 직접 비밀번호를 찾을 수 없습니다.<br />
                비밀번호 초기화가 필요하신 경우, 관리자에게 문의해 주세요.
              </p>
            </div>
          </div>
        ) : !resetSent ? (
          <div className="space-y-4">
            <p className="text-sm text-slate-500">
              가입 시 등록한 아이디를 입력하시면 시스템 관리자에게 비밀번호 재설정을 요청합니다.
            </p>
            <InputField
              label="아이디"
              type="text"
              value={resetId}
              onChange={(e) => setResetId(e.target.value)}
              placeholder="아이디를 입력하세요"
            />
          </div>
        ) : (
          <div className="text-center py-4 space-y-3">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <p className="text-sm text-slate-700 font-medium">요청이 접수되었습니다</p>
            <p className="text-xs text-slate-400">
              아이디 <span className="text-[#FF6B2B] font-medium">{resetId}</span>의<br />
              비밀번호 재설정 요청이 시스템 관리자에게 전달되었습니다.
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
