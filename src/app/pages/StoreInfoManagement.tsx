import { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { CheckboxField } from '../components/ui/CheckboxField';
import { ResultModal } from '../components/ui/Modal';

// ─── Types ───────────────────────────────────────────────────────

interface StoreInfo {
  storeName: string;
  businessNumber: string;
  ownerName: string;
  address: string;
  addressDetail: string;
  phone: string;
  businessHours: string;
  email: string;
  description: string;
}

// ─── 초기 데이터 (실제로는 API에서 가져옴) ─────────────────────────

const INITIAL_STORE_INFO: StoreInfo = {
  storeName: '맛있는 레스토랑',
  businessNumber: '123-45-67890',
  ownerName: '홍길동',
  address: '서울특별시 강남구 테헤란로 123',
  addressDetail: '4층',
  phone: '02-1234-5678',
  businessHours: '11:00 - 22:00',
  email: 'info@restaurant.com',
  description: '신선한 재료로 만드는 정성 가득한 음식',
};

// ─── Page ────────────────────────────────────────────────────────

export function StoreInfoManagement() {
  // 비밀번호 인증 상태
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  // 매장 정보
  const [storeInfo, setStoreInfo] = useState<StoreInfo>(INITIAL_STORE_INFO);
  const [originalInfo, setOriginalInfo] = useState<StoreInfo>(INITIAL_STORE_INFO);

  // 편집 가능 여부 체크박스
  const [editEnabled, setEditEnabled] = useState(false);

  // 저장 완료 모달
  const [showSavedModal, setShowSavedModal] = useState(false);

  /* ── 비밀번호 확인 ── */
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 API로 비밀번호 검증
    if (password === '1234') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('비밀번호가 올바르지 않습니다.');
    }
  };

  /* ── 저장 ── */
  const handleSave = () => {
    if (!editEnabled) return;

    // 실제로는 API 호출하여 저장
    setOriginalInfo(storeInfo);
    setEditEnabled(false);
    setShowSavedModal(true);
  };

  /* ── 취소 ── */
  const handleCancel = () => {
    setStoreInfo(originalInfo);
    setEditEnabled(false);
  };

  /* ── 비밀번호 입력 화면 ── */
  if (!isAuthenticated) {
    return (
      <div className="p-5 lg:p-6 space-y-4">
        {/* 브레드크럼 */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>매장 관리</span><span>/</span>
          <span className="text-slate-700 font-medium">매장관리정보</span>
        </nav>

        {/* 비밀번호 입력 카드 */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="bg-white rounded-[8px] border border-slate-200 p-8 w-full max-w-md">
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#FF6B2B]/10 flex items-center justify-center">
                <Lock className="text-[#FF6B2B]" size={24} />
              </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold text-slate-800 mb-1">
                  매장 정보 접근 인증
                </h2>
                <p className="text-sm text-slate-500">
                  매장 정보를 확인하려면 비밀번호를 입력해주세요.
                </p>
              </div>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="relative">
                <InputField
                  type={showPassword ? 'text' : 'password'}
                  inputSize="lg"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setAuthError('');
                  }}
                  placeholder="비밀번호를 입력하세요"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {authError && (
                <p className="text-sm text-red-500 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-red-500" />
                  {authError}
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                확인
              </Button>
            </form>

            <p className="text-xs text-slate-400 text-center mt-4">
              테스트용 비밀번호: 1234
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ── 매장 정보 화면 ── */
  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>매장 관리</span><span>/</span>
        <span className="text-slate-700 font-medium">매장관리정보</span>
      </nav>

      {/* 매장 정보 카드 */}
      <div className="bg-white rounded-[8px] border border-slate-200">
        {/* 헤더 */}
        <div className="flex items-center justify-between px-4 h-[44px] border-b border-slate-100">
          <h2 className="text-sm font-medium text-slate-800">매장 정보</h2>
          <CheckboxField
            size="md"
            label="정보 수정"
            checked={editEnabled}
            onChange={(e) => setEditEnabled(e.target.checked)}
          />
        </div>

        {/* 폼 */}
        <div className="p-6">
          <div className="space-y-5">
          {/* 상호명 (수정 불가) */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              상호명 <span className="text-slate-400">(수정불가)</span>
            </label>
            <InputField
              inputSize="md"
              value={storeInfo.storeName}
              readOnly
              className="bg-slate-50"
            />
          </div>

          {/* 사업자등록번호 (수정 불가) */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              사업자등록번호 <span className="text-slate-400">(수정불가)</span>
            </label>
            <InputField
              inputSize="md"
              value={storeInfo.businessNumber}
              readOnly
              className="bg-slate-50"
            />
          </div>

          {/* 대표자명 (수정 불가) */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              대표자명 <span className="text-slate-400">(수정불가)</span>
            </label>
            <InputField
              inputSize="md"
              value={storeInfo.ownerName}
              readOnly
              className="bg-slate-50"
            />
          </div>

          {/* 주소 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              주소 *
            </label>
            <div className="space-y-2">
              <InputField
                inputSize="md"
                value={storeInfo.address}
                onChange={(e) => setStoreInfo({ ...storeInfo, address: e.target.value })}
                placeholder="기본 주소"
                readOnly={!editEnabled}
                className={!editEnabled ? 'bg-slate-50' : ''}
              />
              <InputField
                inputSize="md"
                value={storeInfo.addressDetail}
                onChange={(e) => setStoreInfo({ ...storeInfo, addressDetail: e.target.value })}
                placeholder="상세 주소"
                readOnly={!editEnabled}
                className={!editEnabled ? 'bg-slate-50' : ''}
              />
            </div>
          </div>

          {/* 연락처 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              연락처 *
            </label>
            <InputField
              inputSize="md"
              value={storeInfo.phone}
              onChange={(e) => setStoreInfo({ ...storeInfo, phone: e.target.value })}
              placeholder="예: 02-1234-5678"
              readOnly={!editEnabled}
              className={!editEnabled ? 'bg-slate-50' : ''}
            />
          </div>

          {/* 영업시간 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              영업시간 *
            </label>
            <InputField
              inputSize="md"
              value={storeInfo.businessHours}
              onChange={(e) => setStoreInfo({ ...storeInfo, businessHours: e.target.value })}
              placeholder="예: 11:00 - 22:00"
              readOnly={!editEnabled}
              className={!editEnabled ? 'bg-slate-50' : ''}
            />
          </div>

          {/* 이메일 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              이메일 *
            </label>
            <InputField
              inputSize="md"
              type="email"
              value={storeInfo.email}
              onChange={(e) => setStoreInfo({ ...storeInfo, email: e.target.value })}
              placeholder="이메일 주소"
              readOnly={!editEnabled}
              className={!editEnabled ? 'bg-slate-50' : ''}
            />
          </div>

          {/* 매장 설명 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              매장 설명
            </label>
            <textarea
              value={storeInfo.description}
              onChange={(e) => setStoreInfo({ ...storeInfo, description: e.target.value })}
              placeholder="매장에 대한 간단한 설명을 입력하세요"
              readOnly={!editEnabled}
              rows={4}
              className={`w-full px-3 py-2 text-sm border rounded-[4px] resize-none transition-colors ${
                !editEnabled
                  ? 'bg-slate-50 border-slate-200 text-slate-600'
                  : 'border-slate-300 focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 outline-none'
              }`}
            />
          </div>
          </div>

          {/* 버튼 영역 */}
          {editEnabled && (
            <div className="flex justify-end gap-2 mt-6 pt-6 border-t border-slate-100">
              <Button
                variant="outline"
                size="md"
                onClick={handleCancel}
              >
                취소
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleSave}
              >
                저장
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* 저장 완료 모달 */}
      <ResultModal
        open={showSavedModal}
        onClose={() => setShowSavedModal(false)}
        type="updated"
        message="매장 정보가 수정되었습니다."
      />
    </div>
  );
}
