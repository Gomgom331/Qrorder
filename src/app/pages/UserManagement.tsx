import { useState } from 'react';
import { Search, Plus, Trash2, Pencil } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { CheckboxField } from '../components/ui/CheckboxField';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { Pagination } from '../components/ui/Pagination';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { Tag } from '../components/ui/Tag';

// ─── Types ───────────────────────────────────────────────────────

interface User {
  id: string;
  username: string;
  name: string;
  role: string;
}

// ─── Mock data ───────────────────────────────────────────────────

const INITIAL_USERS: User[] = [
  { id: 'u1', username: 'admin001', name: '홍길동', role: '관리자' },
  { id: 'u2', username: 'staff001', name: '김영희', role: '스태프' },
  { id: 'u3', username: 'staff002', name: '이철수', role: '스태프' },
  { id: 'u4', username: 'staff003', name: '박민수', role: '스태프' },
  { id: 'u5', username: 'admin002', name: '정수진', role: '관리자' },
  { id: 'u6', username: 'staff004', name: '최지훈', role: '스태프' },
  { id: 'u7', username: 'admin003', name: '한소희', role: '관리자' },
  { id: 'u8', username: 'staff005', name: '윤서연', role: '스태프' },
];

const ITEMS_PER_PAGE = 10;

const ROLE_OPTIONS = [
  { value: '관리자', label: '관리자' },
  { value: '스태프', label: '스태프' },
];

// ─── Page ────────────────────────────────────────────────────────

export function UserManagement() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [form, setForm] = useState({ username: '', name: '', role: '직원' });
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [resetPasswordOpen, setResetPasswordOpen] = useState(false);
  const [resetTargetUser, setResetTargetUser] = useState<User | null>(null);

  // ── 필터 ──
  const filtered = users.filter((u) => {
    if (!appliedSearch) return true;
    return (
      u.username.includes(appliedSearch) ||
      u.name.includes(appliedSearch) ||
      u.role.includes(appliedSearch)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paged = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // ── 검색 ──
  const handleSearch = () => {
    setAppliedSearch(search);
    setCurrentPage(1);
    setSelectedIds(new Set());
  };

  const handleReset = () => {
    setSearch('');
    setAppliedSearch('');
    setCurrentPage(1);
  };

  // ── 체크박스 ──
  const pagedIds = paged.map((u) => u.id);
  const allChecked = pagedIds.length > 0 && pagedIds.every((id) => selectedIds.has(id));
  const someChecked = pagedIds.some((id) => selectedIds.has(id));

  const toggleAll = () => {
    if (allChecked) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        pagedIds.forEach((id) => next.delete(id));
        return next;
      });
    } else {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        pagedIds.forEach((id) => next.add(id));
        return next;
      });
    }
  };

  const toggleOne = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // ── 신규 ──
  const handleNew = () => {
    setEditingUser(null);
    setForm({ username: '', name: '', role: '스태프' });
    setModalOpen(true);
  };

  // ── 수정 ──
  const handleEdit = (user: User) => {
    setEditingUser(user);
    setForm({ username: user.username, name: user.name, role: user.role });
    setModalOpen(true);
  };

  // ── 저장 ──
  const handleSave = () => {
    if (!form.username.trim() || !form.name.trim()) return;

    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editingUser.id
            ? { ...u, username: form.username, name: form.name, role: form.role }
            : u
        )
      );
    } else {
      setUsers((prev) => [
        ...prev,
        {
          id: `u${Date.now()}`,
          username: form.username,
          name: form.name,
          role: form.role,
        },
      ]);
    }
    setModalOpen(false);
  };

  // ── 삭제 ──
  const handleDeleteConfirm = () => {
    if (selectedIds.size === 0) return;
    setDeleteConfirmOpen(true);
  };

  const handleDeleteExecute = () => {
    setUsers((prev) => prev.filter((u) => !selectedIds.has(u.id)));
    setSelectedIds(new Set());
    setDeleteConfirmOpen(false);
    setCurrentPage(1);
  };

  // ── 비밀번호 초기화 ──
  const handleResetPasswordOpen = (user: User) => {
    setResetTargetUser(user);
    setResetPasswordOpen(true);
  };

  const handleResetPasswordExecute = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setResetPasswordOpen(false);
    setResetTargetUser(null);
  };

  // ── Render ──
  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>제어 관리</span>
        <span>/</span>
        <span>유저 관리</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">유저 정보 관리</span>
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
              placeholder="아이디, 이름, 권한으로 검색"
              leftIcon={<Search size={14} />}
            />
          </div>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="md" onClick={handleReset}>
              초기화
            </Button>
            <Button variant="primary" size="md" leftIcon={<Search size={15} />} onClick={handleSearch}>
              조회
            </Button>
          </div>
        </div>
      </div>

      {/* ── 테이블 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        {/* 테이블 헤더 */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">유저 정보 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">{filtered.length}건</span>
            {selectedIds.size > 0 && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-[3px] font-medium">{selectedIds.size}개 선택</span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <Button variant="primary" size="sm" leftIcon={<Plus size={13} />} onClick={handleNew}>
              신규
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={selectedIds.size === 0}
              className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 disabled:border-slate-200 disabled:text-slate-300"
              onClick={handleDeleteConfirm}
            >
              {selectedIds.size > 0 ? `삭제 (${selectedIds.size})` : '삭제'}
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
                    checked={allChecked}
                    indeterminate={someChecked && !allChecked}
                    onChange={toggleAll}
                  />
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">아이디</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">이름</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">권한</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[140px]">비밀번호 초기화</th>
                <th className="w-16 px-3 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paged.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 text-sm">
                    {appliedSearch ? '검색 결과가 없습니다.' : '등록된 유저가 없습니다.'}
                  </td>
                </tr>
              ) : (
                paged.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-2.5">
                      <CheckboxField
                        size="sm"
                        checked={selectedIds.has(user.id)}
                        onChange={() => toggleOne(user.id)}
                      />
                    </td>
                    <td className="px-3 py-2.5 text-slate-800 font-medium">{user.username}</td>
                    <td className="px-3 py-2.5 text-slate-700">{user.name}</td>
                    <td className="px-3 py-2.5 text-center">
                      <Tag
                        color={user.role === '관리자' ? 'orange' : 'gray'}
                        variant="soft"
                        size="sm"
                      >
                        {user.role}
                      </Tag>
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <button
                        onClick={() => handleResetPasswordOpen(user)}
                        className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-[3px] transition-colors"
                      >
                        button
                      </button>
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <button
                        onClick={() => handleEdit(user)}
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

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <div className="px-4 py-3 border-t border-slate-100">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      {/* ── 신규/수정 모달 ── */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        size="md"
        title={editingUser ? '유저 수정' : '유저 등록'}
        footer={
          <>
            <ModalBtn variant="primary" onClick={handleSave}>
              {editingUser ? '수정' : '등록'}
            </ModalBtn>
            <ModalBtn variant="outline" onClick={() => setModalOpen(false)}>
              취소
            </ModalBtn>
          </>
        }
      >
        <div className="space-y-4">
          <InputField
            label="아이디"
            required
            inputSize="md"
            placeholder="아이디를 입력하세요"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

          <InputField
            label="이름"
            required
            inputSize="md"
            placeholder="이름을 입력하세요"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">
              권한 <span className="text-red-500">*</span>
            </label>
            <DropdownSelect
              inputSize="md"
              value={form.role}
              onChange={(v) => setForm({ ...form, role: v })}
              options={ROLE_OPTIONS}
            />
          </div>
        </div>
      </Modal>

      {/* ── 삭제 확인 모달 ── */}
      <Modal
        open={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
        size="sm"
        title="삭제 확인"
        footer={
          <>
            <ModalBtn variant="danger" onClick={handleDeleteExecute}>
              삭제
            </ModalBtn>
            <ModalBtn variant="outline" onClick={() => setDeleteConfirmOpen(false)}>
              취소
            </ModalBtn>
          </>
        }
      >
        <p className="text-sm text-slate-600">
          선택한 {selectedIds.size}개의 유저를 삭제하시겠습니까?
          <br />
          <span className="text-red-500">이 작업은 되돌릴 수 없습니다.</span>
        </p>
      </Modal>

      {/* ── 비밀번호 초기화 모달 ── */}
      <Modal
        open={resetPasswordOpen}
        onClose={() => setResetPasswordOpen(false)}
        size="sm"
        title="비밀번호 초기화"
        footer={
          <>
            <ModalBtn variant="primary" onClick={handleResetPasswordExecute}>
              초기화
            </ModalBtn>
            <ModalBtn variant="outline" onClick={() => setResetPasswordOpen(false)}>
              취소
            </ModalBtn>
          </>
        }
      >
        <p className="text-sm text-slate-600">
          <span className="font-medium text-[#FF6B2B]">{resetTargetUser?.name}</span> 님의 비밀번호를 초기화하시겠습니까?
          <br />
          <span className="text-xs text-slate-400 mt-2 block">
            초기화된 비밀번호는 이메일로 전송됩니다.
          </span>
        </p>
      </Modal>
    </div>
  );
}
