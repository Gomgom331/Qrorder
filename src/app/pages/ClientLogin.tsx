import { useState } from 'react';
import { useNavigate } from 'react-router';
import { QrCode } from 'lucide-react';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';
import { FormAlert } from '../components/ui/FormAlert';
import { CheckboxField } from '../components/ui/CheckboxField';

export function ClientLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ id: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [resetOpen, setResetOpen] = useState(false);
  const [resetId, setResetId] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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

  const handleReset = async () => {
    if (!resetId) return;
    await new Promise((r) => setTimeout(r, 600));
    setResetSent(true);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center px-4">
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
                  label="로그인 유지"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <button
                  type="button"
                  onClick={() => { setResetSent(false); setResetId(''); setResetOpen(true); }}
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
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          © 2026 QRorder. All rights reserved.
        </p>
      </div>

      {/* Password Reset Modal */}
      <Modal
        open={resetOpen}
        onClose={() => setResetOpen(false)}
        size="md"
        title="비밀번호 찾기"
        footer={
          !resetSent ? (
            <>
              <ModalBtn variant="outline" onClick={() => setResetOpen(false)}>취소</ModalBtn>
              <ModalBtn variant="primary" onClick={handleReset} disabled={!resetId}>
                확인 요청
              </ModalBtn>
            </>
          ) : (
            <ModalBtn variant="primary" onClick={() => setResetOpen(false)}>확인</ModalBtn>
          )
        }
      >
        {!resetSent ? (
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
