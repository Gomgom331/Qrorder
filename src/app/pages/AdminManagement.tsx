import { useState } from 'react';
import { Search, Check, KeyRound, Save } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { Modal, ModalBtn } from '../components/ui/Modal';

// ─── Mock data ───────────────────────────────────────────────────
const BIZ_OPTIONS = [
  { value: 'BIZ-001', label: '스마트버거 강남점' },
  { value: 'BIZ-002', label: '맛나치킨 홍대점' },
  { value: 'BIZ-003', label: '더맛집 삼겹살' },
  { value: 'BIZ-004', label: '미식가 일식' },
  { value: 'BIZ-005', label: '청담 파인다이닝' },
  { value: 'BIZ-006', label: '스마트버거 신촌점' },
];

interface AdminRow {
  _id: string;
  userId: string;
  userName: string;
  bizId: string;
  isSaved: boolean;
  _errUserId?: string;
  _errUserName?: string;
  _errBizId?: string;
}

function uid() {
  return `row-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

const INITIAL_ROWS: AdminRow[] = [
  { _id: uid(), userId: 'admin01', userName: '김민준', bizId: 'BIZ-001', isSaved: true },
  { _id: uid(), userId: 'admin02', userName: '이서연', bizId: 'BIZ-002', isSaved: true },
  { _id: uid(), userId: 'staff01', userName: '박지호', bizId: 'BIZ-003', isSaved: true },
  { _id: uid(), userId: 'staff02', userName: '최유진', bizId: 'BIZ-004', isSaved: true },
  { _id: uid(), userId: 'mgr01',   userName: '정수현', bizId: 'BIZ-005', isSaved: true },
];

// ─── Page ────────────────────────────────────────────────────────
export function AdminManagement() {
  const [search, setSearch]               = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [rows, setRows]                   = useState<AdminRow[]>(INITIAL_ROWS);
  const [savedMsg, setSavedMsg]           = useState(false);

  const [pwResetTarget, setPwResetTarget] = useState<AdminRow | null>(null);
  const [saveAlertOpen, setSaveAlertOpen] = useState(false);

  // ── Search ──────────────────────────────────────────────────────
  const handleSearch = () => setAppliedSearch(search);
  const handleReset  = () => { setSearch(''); setAppliedSearch(''); };

  const filtered = rows.filter((r) =>
    appliedSearch
      ? r.userId.includes(appliedSearch) || r.userName.includes(appliedSearch)
      : true
  );

  // ── Row CRUD ────────────────────────────────────────────────────
  const updateRow = (id: string, patch: Partial<AdminRow>) => {
    setRows((prev) =>
      prev.map((r) =>
        r._id === id
          ? {
              ...r,
              ...patch,
              _errUserId:   patch.userId   !== undefined ? undefined : r._errUserId,
              _errUserName: patch.userName !== undefined ? undefined : r._errUserName,
              _errBizId:    patch.bizId    !== undefined ? undefined : r._errBizId,
            }
          : r
      )
    );
  };

  const addRow = () => {
    const newRow: AdminRow = {
      _id: uid(), userId: '', userName: '', bizId: '', isSaved: false,
    };
    setRows((prev) => [...prev, newRow]);
  };

  const deleteLastRow = () => {
    setRows((prev) => prev.slice(0, -1));
  };

  // ── Save ────────────────────────────────────────────────────────
  const handleSave = () => {
    let hasError = false;
    const validated = rows.map((r) => {
      if (r.isSaved) return r;
      const _errUserId   = !r.userId.trim()   ? '사용자 아이디를 입력하세요' : undefined;
      const _errUserName = !r.userName.trim() ? '사용자 명을 입력하세요'   : undefined;
      const _errBizId    = !r.bizId           ? '사업장을 선택하세요'       : undefined;
      if (_errUserId || _errUserName || _errBizId) hasError = true;
      return { ...r, _errUserId, _errUserName, _errBizId };
    });
    setRows(validated);
    if (hasError) return;

    const hasNew = rows.some((r) => !r.isSaved);
    setRows((prev) => prev.map((r) => ({ ...r, isSaved: true, _errUserId: undefined, _errUserName: undefined, _errBizId: undefined })));

    if (hasNew) {
      setSaveAlertOpen(true);
    } else {
      setSavedMsg(true);
      setTimeout(() => setSavedMsg(false), 2000);
    }
  };

  // ── Password reset ──────────────────────────────────────────────
  const handlePwReset = () => setPwResetTarget(null);

  const unsavedCount = rows.filter((r) => !r.isSaved).length;

  return (
    <div className="p-5 lg:p-6 space-y-4">

      {/* ── Search card ── */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <InputField
              inputSize="md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="사용자 아이디, 사용자 명으로 검색"
              leftIcon={<Search size={14} />}
            />
          </div>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="md" onClick={handleReset}>초기화</Button>
            <Button variant="primary" size="md" leftIcon={<Search size={15} />} onClick={handleSearch}>조회</Button>
          </div>
        </div>
      </div>

      {/* ── Table card ── */}
      <div className="bg-white rounded-[6px] border border-slate-200">

        {/* Table header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">관리자 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
              {filtered.length}건
            </span>
            {unsavedCount > 0 && (
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-[3px] font-medium">
                미저장 {unsavedCount}행
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={addRow}>
              <span className="text-base leading-none mr-0.5">+</span> 행추가
            </Button>
            <Button
              variant="ghost"
              size="sm"
              disabled={rows.length === 0}
              onClick={deleteLastRow}
              className="text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              <span className="text-base leading-none mr-0.5">−</span> 행삭제
            </Button>
            <Button variant="outline" size="sm" onClick={handleSave}>
              {savedMsg ? <><Check size={12} className="mr-1" />저장완료</> : '저장'}
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 whitespace-nowrap">
                  사용자 아이디 <span className="text-red-400">*</span>
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 whitespace-nowrap">
                  사용자 명 <span className="text-red-400">*</span>
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 whitespace-nowrap">
                  사업장 <span className="text-red-400">*</span>
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 whitespace-nowrap w-36">
                  비밀번호 초기화
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-slate-400 text-sm">
                    {appliedSearch ? '검색 결과가 없습니다.' : '등록된 관리자가 없습니다.'}
                  </td>
                </tr>
              ) : (
                filtered.map((row) => (
                  <tr
                    key={row._id}
                    className={[
                      'hover:bg-slate-50 transition-colors',
                      !row.isSaved ? 'bg-amber-50/40' : '',
                    ].join(' ')}
                  >
                    {/* 사용자 아이디 */}
                    <td className="px-2 py-1.5 min-w-[140px]">
                      <InputField
                        inputSize="sm"
                        value={row.userId}
                        onChange={(e) => updateRow(row._id, { userId: e.target.value })}
                        placeholder="아이디 입력"
                        errorText={row._errUserId}
                        readOnly={row.isSaved}
                      />
                    </td>

                    {/* 사용자 명 */}
                    <td className="px-2 py-1.5 min-w-[140px]">
                      <InputField
                        inputSize="sm"
                        value={row.userName}
                        onChange={(e) => updateRow(row._id, { userName: e.target.value })}
                        placeholder="이름 입력"
                        errorText={row._errUserName}
                      />
                    </td>

                    {/* 사업장 */}
                    <td className="px-2 py-1.5 min-w-[180px]">
                      <DropdownSelect
                        inputSize="sm"
                        options={BIZ_OPTIONS}
                        value={row.bizId}
                        onChange={(v) => updateRow(row._id, { bizId: v })}
                        placeholder="사업장 선택"
                        errorText={row._errBizId}
                      />
                    </td>

                    {/* 비밀번호 초기화 */}
                    <td className="px-3 py-1.5">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!row.isSaved}
                        onClick={() => setPwResetTarget(row)}
                      >
                        초기화
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div className="px-4 py-2.5 border-t border-slate-100">
          <span className="text-xs text-slate-400">
            총 <strong className="text-slate-700">{filtered.length.toLocaleString()}</strong>건
          </span>
        </div>
      </div>

      {/* ── Password reset confirm modal ── */}
      <Modal
        open={!!pwResetTarget}
        onClose={() => setPwResetTarget(null)}
        size="sm"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setPwResetTarget(null)}>취소</ModalBtn>
            <ModalBtn variant="primary" onClick={handlePwReset}>초기화</ModalBtn>
          </>
        }
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto">
            <KeyRound size={26} className="text-amber-500" />
          </div>
          <p className="font-medium text-slate-800">비밀번호를 초기화하시겠습니까?</p>
          <p className="text-sm text-slate-500">
            <strong>{pwResetTarget?.userId}</strong> 계정의 비밀번호가
            초기 비밀번호(<strong className="font-mono text-slate-700">SN11111</strong>)로
            초기화됩니다.
          </p>
        </div>
      </Modal>

      {/* ── Save success modal ── */}
      <Modal
        open={saveAlertOpen}
        onClose={() => setSaveAlertOpen(false)}
        size="sm"
        footer={
          <ModalBtn variant="primary" onClick={() => setSaveAlertOpen(false)}>확인</ModalBtn>
        }
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
            <Save size={24} className="text-emerald-500" />
          </div>
          <p className="font-medium text-slate-800">저장이 완료되었습니다.</p>
          <div className="bg-slate-50 rounded-[6px] px-4 py-3 text-sm text-slate-600 text-left space-y-1">
            <p>신규 등록된 계정의 초기 비밀번호는</p>
            <p className="font-mono font-semibold text-[#FF6B2B] text-base tracking-widest">SN11111</p>
            <p className="text-xs text-slate-400 mt-1">첫 로그인 후 반드시 비밀번호를 변경해 주세요.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}