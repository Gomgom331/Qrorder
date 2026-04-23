import { useState } from 'react';
import { CheckboxField } from '../components/ui/CheckboxField';
import { InputField } from '../components/ui/InputField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { Button } from '../components/ui/Button';
import { Plus, Trash2, ArrowUp, ArrowDown, Paperclip } from 'lucide-react';
import React from 'react';

// ─── Section wrapper ─────────────────────────────────────────────
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

// ─── Sample data ─────────────────────────────────────────────────
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const SAMPLE_USERS: User[] = [
  { id: 'u1', name: '홍길동', email: 'hong@example.com', role: '관리자', status: '활성' },
  { id: 'u2', name: '김영희', email: 'kim@example.com', role: '매니저', status: '활성' },
  { id: 'u3', name: '이철수', email: 'lee@example.com', role: '직원', status: '대기' },
  { id: 'u4', name: '박민수', email: 'park@example.com', role: '직원', status: '비활성' },
];

interface EditableRow {
  id: string;
  code: string;
  name: string;
  description: string;
  useYn: boolean;
  isNew?: boolean;
}

// ─── Page ────────────────────────────────────────────────────────
export function TableGuide() {
  /* ── 1. 기본 테이블 (체크박스 선택) ── */
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const handleCheckAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(SAMPLE_USERS.map((u) => u.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleCheck = (id: string, checked: boolean) => {
    const newSet = new Set(selectedIds);
    if (checked) {
      newSet.add(id);
    } else {
      newSet.delete(id);
    }
    setSelectedIds(newSet);
  };

  const allChecked = SAMPLE_USERS.length > 0 && SAMPLE_USERS.every((u) => selectedIds.has(u.id));

  /* ── 2. 행 클릭 선택 테이블 ── */
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);

  /* ── 3. 인라인 편집 테이블 ── */
  const [editableRows, setEditableRows] = useState<EditableRow[]>([
    { id: 'e1', code: 'CODE001', name: '기존 코드 1', description: '설명 1', useYn: true },
    { id: 'e2', code: 'CODE002', name: '기존 코드 2', description: '설명 2', useYn: true },
    { id: 'e3', code: 'CODE003', name: '기존 코드 3', description: '설명 3', useYn: false },
  ]);

  const [selectedEditIds, setSelectedEditIds] = useState<Set<string>>(new Set());

  const handleAddRow = () => {
    const newRow: EditableRow = {
      id: `new-${Date.now()}`,
      code: '',
      name: '',
      description: '',
      useYn: true,
      isNew: true,
    };
    setEditableRows([...editableRows, newRow]);
  };

  const handleDeleteRows = () => {
    setEditableRows(editableRows.filter((r) => !selectedEditIds.has(r.id)));
    setSelectedEditIds(new Set());
  };

  const handleMoveUp = () => {
    if (selectedEditIds.size !== 1) return;
    const id = Array.from(selectedEditIds)[0];
    const index = editableRows.findIndex((r) => r.id === id);
    if (index <= 0) return;
    const newRows = [...editableRows];
    [newRows[index - 1], newRows[index]] = [newRows[index], newRows[index - 1]];
    setEditableRows(newRows);
  };

  const handleMoveDown = () => {
    if (selectedEditIds.size !== 1) return;
    const id = Array.from(selectedEditIds)[0];
    const index = editableRows.findIndex((r) => r.id === id);
    if (index < 0 || index >= editableRows.length - 1) return;
    const newRows = [...editableRows];
    [newRows[index], newRows[index + 1]] = [newRows[index + 1], newRows[index]];
    setEditableRows(newRows);
  };

  const handleEditCheckAll = (checked: boolean) => {
    if (checked) {
      setSelectedEditIds(new Set(editableRows.map((r) => r.id)));
    } else {
      setSelectedEditIds(new Set());
    }
  };

  const handleEditCheck = (id: string, checked: boolean) => {
    const newSet = new Set(selectedEditIds);
    if (checked) {
      newSet.add(id);
    } else {
      newSet.delete(id);
    }
    setSelectedEditIds(newSet);
  };

  const allEditChecked = editableRows.length > 0 && editableRows.every((r) => selectedEditIds.has(r.id));

  const handleRowClick = (id: string) => {
    setSelectedEditIds(new Set([id]));
  };

  const updateRow = (id: string, field: keyof EditableRow, value: any) => {
    setEditableRows(editableRows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  /* ── 4. 마스터-디테일 테이블 ── */
  const [masterSelectedId, setMasterSelectedId] = useState<string | null>(null);

  const detailData = masterSelectedId
    ? [
        { id: 'd1', menu: '메뉴 1', time: '10:00:00' },
        { id: 'd2', menu: '메뉴 2', time: '10:15:30' },
        { id: 'd3', menu: '메뉴 3', time: '10:30:45' },
      ]
    : [];

  /* ── Render ── */
  return (
    <div className="p-5 lg:p-6 space-y-4">
      <div>
        <h2 className="text-slate-800">테이블 패턴</h2>
        <p className="text-sm text-slate-400 mt-1">QR Order 백오피스에서 사용되는 다양한 테이블 UI 패턴 가이드</p>
      </div>

      {/* 1. 기본 읽기 전용 테이블 (체크박스 선택) */}
      <Section title="1. 기본 테이블 (체크박스 선택)" desc="읽기 전용 데이터 표시, 체크박스로 다중 선택 가능">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-800">사용자 목록</span>
              <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
                {SAMPLE_USERS.length}건
              </span>
              {selectedIds.size > 0 && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-[3px] font-medium">
                  {selectedIds.size}개 선택
                </span>
              )}
            </div>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="w-10 px-3 py-2.5">
                    <CheckboxField size="sm" checked={allChecked} onChange={(e) => handleCheckAll(e.target.checked)} />
                  </th>
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">이름</th>
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">이메일</th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">역할</th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SAMPLE_USERS.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-2.5">
                      <CheckboxField
                        size="sm"
                        checked={selectedIds.has(user.id)}
                        onChange={(e) => handleCheck(user.id, e.target.checked)}
                      />
                    </td>
                    <td className="px-3 py-2.5 text-slate-700">{user.name}</td>
                    <td className="px-3 py-2.5 text-slate-600 font-mono text-xs">{user.email}</td>
                    <td className="px-3 py-2.5 text-center text-slate-600">{user.role}</td>
                    <td className="px-3 py-2.5 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-[3px] text-xs font-medium ${
                          user.status === '활성'
                            ? 'bg-green-100 text-green-700'
                            : user.status === '대기'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">
            • 체크박스로 다중 선택 가능 • Hover 시 배경색 변경 • 상태값은 컬러 배지로 표시
          </p>
        </div>
      </Section>

      {/* 2. 행 클릭 선택 테이블 */}
      <Section title="2. 행 클릭 선택 테이블" desc="row 클릭 시 선택 상태 표시 (단일 선택)">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">주문 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
              {SAMPLE_USERS.length}건
            </span>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">이름</th>
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">이메일</th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">역할</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SAMPLE_USERS.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => setSelectedRowId(user.id)}
                    className={`cursor-pointer transition-colors ${
                      selectedRowId === user.id ? 'bg-[#FF6B2B]/5 hover:bg-[#FF6B2B]/10' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="px-3 py-2.5 text-slate-700">{user.name}</td>
                    <td className="px-3 py-2.5 text-slate-600 font-mono text-xs">{user.email}</td>
                    <td className="px-3 py-2.5 text-center text-slate-600">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">
            • 행 클릭 시 주황색 배경으로 선택 상태 표시 • cursor: pointer 적용
          </p>
        </div>
      </Section>

      {/* 3. 인라인 편집 테이블 (행추가/삭제/순서이동) */}
      <Section
        title="3. 인라인 편집 테이블"
        desc="모든 셀이 입력 필드, 기존 row의 식별자는 readOnly, 신규 row는 연한 앰버 배경"
      >
        <div className="space-y-2">
          {/* 테이블 헤더 툴바 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-800">공통코드 관리</span>
              <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
                {editableRows.length}건
              </span>
              {selectedEditIds.size > 0 && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-[3px] font-medium">
                  {selectedEditIds.size}개 선택
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                leftIcon={<ArrowUp size={14} />}
                onClick={handleMoveUp}
                disabled={selectedEditIds.size !== 1}
              >
                위로
              </Button>
              <Button
                variant="outline"
                size="sm"
                leftIcon={<ArrowDown size={14} />}
                onClick={handleMoveDown}
                disabled={selectedEditIds.size !== 1}
              >
                아래로
              </Button>
              <Button
                variant="outline"
                size="sm"
                leftIcon={<Trash2 size={14} />}
                onClick={handleDeleteRows}
                disabled={selectedEditIds.size === 0}
              >
                삭제
              </Button>
              <Button variant="primary" size="sm" leftIcon={<Plus size={14} />} onClick={handleAddRow}>
                신규
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="w-10 px-3 py-2.5">
                    <CheckboxField
                      size="sm"
                      checked={allEditChecked}
                      onChange={(e) => handleEditCheckAll(e.target.checked)}
                    />
                  </th>
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">코드</th>
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">코드명</th>
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">설명</th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">사용여부</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {editableRows.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => handleRowClick(row.id)}
                    className={`cursor-pointer transition-colors ${
                      row.isNew
                        ? 'bg-amber-50/50'
                        : selectedEditIds.has(row.id)
                        ? 'bg-[#FF6B2B]/5'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="px-3 py-2.5">
                      <CheckboxField
                        size="sm"
                        checked={selectedEditIds.has(row.id)}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleEditCheck(row.id, e.target.checked);
                        }}
                      />
                    </td>
                    <td className="px-3 py-2.5">
                      <InputField
                        inputSize="sm"
                        value={row.code}
                        onChange={(e) => updateRow(row.id, 'code', e.target.value)}
                        readOnly={!row.isNew}
                        className={!row.isNew ? 'bg-slate-50' : ''}
                      />
                    </td>
                    <td className="px-3 py-2.5">
                      <InputField
                        inputSize="sm"
                        value={row.name}
                        onChange={(e) => updateRow(row.id, 'name', e.target.value)}
                      />
                    </td>
                    <td className="px-3 py-2.5">
                      <InputField
                        inputSize="sm"
                        value={row.description}
                        onChange={(e) => updateRow(row.id, 'description', e.target.value)}
                      />
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex justify-center">
                        <CheckboxField
                          size="sm"
                          checked={row.useYn}
                          onChange={(e) => updateRow(row.id, 'useYn', e.target.checked)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">
            • 모든 셀이 입력 필드 • 기존 row의 코드 컬럼은 readOnly (회색 배경) • 신규 row는 연한 앰버 배경 • 행
            클릭으로 선택 • 순서 이동 버튼은 헤더 툴바에 배치
          </p>
        </div>
      </Section>

      {/* 4. 마스터-디테일 테이블 (가로 배치) */}
      <Section title="4. 마스터-디테일 테이블" desc="왼쪽 테이블 선택 시 오른쪽 테이블 내용이 변경되는 패턴">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* 마스터 테이블 */}
          <div className="border border-slate-200 rounded-[6px]">
            <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50">
              <span className="text-sm font-medium text-slate-800">접속 로그</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">사용자</th>
                    <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">로그인 시간</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {SAMPLE_USERS.map((user) => (
                    <tr
                      key={user.id}
                      onClick={() => setMasterSelectedId(user.id)}
                      className={`cursor-pointer transition-colors ${
                        masterSelectedId === user.id ? 'bg-[#FF6B2B]/5 hover:bg-[#FF6B2B]/10' : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="px-3 py-2.5 text-slate-700">{user.name}</td>
                      <td className="px-3 py-2.5 text-center text-slate-600 text-xs">09:00:00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 디테일 테이블 */}
          <div className="border border-slate-200 rounded-[6px]">
            <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50">
              <span className="text-sm font-medium text-slate-800">메뉴 접근 목록</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">메뉴</th>
                    <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">접근 시간</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {detailData.length === 0 ? (
                    <tr>
                      <td colSpan={2} className="py-8 text-center text-slate-400 text-sm">
                        왼쪽 목록에서 항목을 선택해주세요
                      </td>
                    </tr>
                  ) : (
                    detailData.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-3 py-2.5 text-slate-700">{item.menu}</td>
                        <td className="px-3 py-2.5 text-center text-slate-600 text-xs">{item.time}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-2">
          • 왼쪽 테이블 row 클릭 시 오른쪽 테이블 내용 변경 • 접속정보조회 페이지에서 사용되는 패턴
        </p>
      </Section>

      {/* 5. 액션 버튼이 있는 테이블 */}
      <Section title="5. 액션 버튼이 있는 테이블" desc="각 행에 수정/삭제/접속 등의 액션 버튼 포함">
        <div className="space-y-4">
          {/* A. 수정 버튼 (아이콘만) */}
          <div>
            <p className="text-sm font-medium text-slate-800 mb-2">A. 수정 버튼 (아이콘)</p>
            <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">코드</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">요금명</th>
                    <th className="text-right px-3 py-2.5 text-xs font-medium text-slate-500">금액</th>
                    <th className="w-16 px-3 py-2.5" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { code: 'PLAN001', name: '베이직 플랜', price: 50000 },
                    { code: 'PLAN002', name: '프로 플랜', price: 100000 },
                  ].map((plan) => (
                    <tr key={plan.code} className="hover:bg-slate-50 transition-colors">
                      <td className="px-3 py-2.5 font-mono text-xs text-slate-600">{plan.code}</td>
                      <td className="px-3 py-2.5 text-slate-700">{plan.name}</td>
                      <td className="px-3 py-2.5 text-right font-medium text-slate-800">
                        {plan.price.toLocaleString()}원
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <button
                          className="w-6 h-6 flex items-center justify-center rounded-[4px] text-slate-300 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/8 transition-colors"
                          title="수정"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              • w-6 h-6 아이콘 버튼 • Hover 시 주황색으로 변경 • 결제요금관리 페이지에서 사용
            </p>
          </div>

          {/* B. 접속 버튼 + Hover 액션 버튼 */}
          <div>
            <p className="text-sm font-medium text-slate-800 mb-2">B. 접속 버튼 + Hover 액션 (상세/삭제)</p>
            <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">사업자 코드</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">사업자명</th>
                    <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">접속</th>
                    <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { code: 'BIZ001', name: '강남점', canAccess: true },
                    { code: 'BIZ002', name: '신촌점', canAccess: false },
                  ].map((biz) => (
                    <tr key={biz.code} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-3 py-2.5 font-mono text-xs text-slate-600">{biz.code}</td>
                      <td className="px-3 py-2.5 text-slate-700">{biz.name}</td>
                      <td className="px-3 py-2.5 text-center">
                        {biz.canAccess ? (
                          <Button variant="primary" size="sm">
                            접속
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" disabled>
                            접속
                          </Button>
                        )}
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            className="p-1 text-slate-400 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10 rounded-[3px] transition-colors"
                            title="상세"
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </button>
                          <button
                            className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-[3px] transition-colors"
                            title="삭제"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              • 접속 버튼은 항상 표시 (활성화/비활성화 상태 구분) • Hover 시에만 상세/삭제 버튼 표시 (opacity-0
              group-hover:opacity-100) • 사업장조회 페이지에서 사용
            </p>
          </div>

          {/* C. 모달 트리거 버튼 */}
          <div>
            <p className="text-sm font-medium text-slate-800 mb-2">C. 행 클릭 시 모달 열기</p>
            <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">주문번호</th>
                    <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">매장</th>
                    <th className="text-right px-3 py-2.5 text-xs font-medium text-slate-500">금액</th>
                    <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">상태</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { id: 'ORD001', store: '강남점', amount: 25000, status: '완료' },
                    { id: 'ORD002', store: '신촌점', amount: 18000, status: '준비중' },
                  ].map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-slate-50 transition-colors cursor-pointer"
                      onClick={() => alert(`${order.id} 상세 모달 열기`)}
                    >
                      <td className="px-3 py-2.5 font-mono text-xs text-slate-600">{order.id}</td>
                      <td className="px-3 py-2.5 text-slate-700">{order.store}</td>
                      <td className="px-3 py-2.5 text-right font-medium text-slate-800">
                        {order.amount.toLocaleString()}원
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-[3px] text-xs font-medium ${
                            order.status === '완료' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              • 전체 행 클릭 시 상세 모달 열기 • cursor-pointer 적용 • 주문관리 페이지에서 사용
            </p>
          </div>
        </div>
      </Section>

      {/* 6. 확장 가능한 테이블 (위 리스트 → 아래 상세) */}
      <Section title="6. 확장/축소 테이블" desc="상위 리스트 선택 시 하단에 상세 내용 표시">
        <ExpandableTableExample />
      </Section>

      {/* 7. 테이블 스타일 가이드 */}
      <Section title="7. 테이블 스타일 가이드" desc="일관된 테이블 UI를 위한 스타일 규칙">
        <div className="space-y-4 text-sm text-slate-600">
          {/* 기본 구조 */}
          <div>
            <p className="font-medium text-slate-800 mb-2">기본 구조</p>
            <div className="bg-slate-50 rounded-[6px] p-4 space-y-2 font-mono text-xs">
              <div><span className="text-slate-400">.table-card</span> <span className="text-slate-600">→ 테이블 컨테이너 (흰색 카드)</span></div>
              <div><span className="text-slate-400">.table-header</span> <span className="text-slate-600">→ 테이블 상단 타이틀 영역</span></div>
              <div><span className="text-slate-400">.table-thead</span> <span className="text-slate-600">→ 테이블 thead (회색 배경)</span></div>
              <div><span className="text-slate-400">.table-th</span> <span className="text-slate-600">→ 테이블 th (컬럼 헤더)</span></div>
              <div><span className="text-slate-400">.table-tbody</span> <span className="text-slate-600">→ 테이블 tbody (행 구분선)</span></div>
              <div><span className="text-slate-400">.table-footer</span> <span className="text-slate-600">→ 테이블 하단 (페이지네이션 영역)</span></div>
            </div>
          </div>

          {/* 텍스트 스타일 */}
          <div>
            <p className="font-medium text-slate-800 mb-2">텍스트 스타일</p>
            <div className="bg-slate-50 rounded-[6px] p-4 space-y-2 font-mono text-xs">
              <div><span className="text-slate-400">.table-td</span> <span className="text-slate-600">→ 기본 셀 (text-sm text-slate-700)</span></div>
              <div><span className="text-slate-400">.table-td-secondary</span> <span className="text-slate-600">→ 보조 텍스트 (text-slate-600)</span></div>
              <div><span className="text-slate-400">.table-td-code</span> <span className="text-slate-600">→ 코드/ID (font-mono text-xs)</span></div>
              <div><span className="text-slate-400">.table-td-empty</span> <span className="text-slate-600">→ 빈 상태 메시지</span></div>
              <div><span className="text-slate-400">.table-count-text</span> <span className="text-slate-600">→ 카운트 텍스트 (총 N건)</span></div>
            </div>
          </div>

          {/* 인터랙션 */}
          <div>
            <p className="font-medium text-slate-800 mb-2">행 인터랙션</p>
            <div className="bg-slate-50 rounded-[6px] p-4 space-y-2 font-mono text-xs">
              <div><span className="text-slate-400">.table-row-hover</span> <span className="text-slate-600">→ Hover 시 배경색 변경</span></div>
              <div><span className="text-slate-400">.table-row-clickable</span> <span className="text-slate-600">→ 클릭 가능 (cursor-pointer)</span></div>
              <div><span className="text-slate-400">.table-row-selected</span> <span className="text-slate-600">→ 선택된 행 (주황색 배경)</span></div>
              <div><span className="text-slate-400">.table-row-new</span> <span className="text-slate-600">→ 신규 행 (연한 앰버 배경)</span></div>
            </div>
          </div>

          {/* 배지 */}
          <div>
            <p className="font-medium text-slate-800 mb-2">배지 스타일</p>
            <div className="bg-slate-50 rounded-[6px] p-4 space-y-2 font-mono text-xs">
              <div><span className="text-slate-400">.badge-count</span> <span className="text-slate-600">→ 데이터 총 건수 (주황색)</span></div>
              <div><span className="text-slate-400">.badge-selected</span> <span className="text-slate-600">→ 선택된 건수 (파랑색)</span></div>
              <div><span className="text-slate-400">.badge-success</span> <span className="text-slate-600">→ 성공/활성 (초록색)</span></div>
              <div><span className="text-slate-400">.badge-warning</span> <span className="text-slate-600">→ 경고/대기 (주황색)</span></div>
              <div><span className="text-slate-400">.badge-info</span> <span className="text-slate-600">→ 정보 (파랑색)</span></div>
              <div><span className="text-slate-400">.badge-neutral</span> <span className="text-slate-600">→ 비활성 (회색)</span></div>
              <div><span className="text-slate-400">.badge-error</span> <span className="text-slate-600">→ 에러 (빨강색)</span></div>
            </div>
          </div>

          {/* 액션 버튼 */}
          <div>
            <p className="font-medium text-slate-800 mb-2">액션 버튼</p>
            <div className="bg-slate-50 rounded-[6px] p-4 space-y-2 font-mono text-xs">
              <div><span className="text-slate-400">.table-action-btn</span> <span className="text-slate-600">→ 수정 아이콘 버튼 (w-6 h-6)</span></div>
              <div><span className="text-slate-400">.table-detail-btn</span> <span className="text-slate-600">→ 상세 보기 버튼 (p-1)</span></div>
              <div><span className="text-slate-400">.table-delete-btn</span> <span className="text-slate-600">→ 삭제 버튼 (p-1)</span></div>
              <div><span className="text-slate-400">.table-action-group</span> <span className="text-slate-600">→ Hover 시 나타나는 버튼 그룹</span></div>
            </div>
          </div>

          {/* 사용 예시 */}
          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="font-medium text-slate-800 mb-2">사용 예시</p>
            <pre className="bg-slate-900 text-slate-100 rounded-[6px] p-4 text-xs overflow-x-auto">
{`<div className="table-card">
  <div className="table-header">
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">사용자 목록</span>
      <span className="badge-count">127건</span>
      <span className="badge-selected">5개 선택</span>
    </div>
  </div>
  
  <table className="w-full text-sm">
    <thead>
      <tr className="table-thead">
        <th className="table-th text-left">이름</th>
        <th className="table-th text-center">상태</th>
      </tr>
    </thead>
    <tbody className="table-tbody">
      <tr className="table-row-hover">
        <td className="table-td">홍길동</td>
        <td className="table-td text-center">
          <span className="badge-success">활성</span>
        </td>
      </tr>
    </tbody>
  </table>
  
  <div className="table-footer">
    <span className="table-count-text">
      총 <strong>127</strong>건
    </span>
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </Section>

      {/* 8. 첨부파일 표기 패턴 */}
      <Section title="8. 첨부파일 표기 패턴" desc="테이블 제목 셀에서 첨부파일 유무·개수를 Paperclip 아이콘으로 표기합니다. 파일이 없으면 아무것도 렌더링하지 않습니다.">

        {/* 3종 패턴 카드 */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {/* 파일 없음 */}
          <div className="border border-slate-200 rounded-[6px] overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 text-[11px] font-medium text-slate-400 uppercase tracking-wide">파일 없음</div>
            <div className="px-3 py-3">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-slate-800 truncate">시스템 점검 안내</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">아이콘 없이 제목만 표시</p>
            </div>
          </div>
          {/* 파일 1개 */}
          <div className="border border-slate-200 rounded-[6px] overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 text-[11px] font-medium text-slate-400 uppercase tracking-wide">파일 1개</div>
            <div className="px-3 py-3">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-slate-800 truncate">결제 정책 변경</span>
                <span className="flex items-center gap-0.5 shrink-0 text-slate-400">
                  <Paperclip size={11} />
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">Paperclip 아이콘만 · 숫자 생략</p>
            </div>
          </div>
          {/* 파일 2개 이상 */}
          <div className="border border-slate-200 rounded-[6px] overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 text-[11px] font-medium text-slate-400 uppercase tracking-wide">파일 2개+</div>
            <div className="px-3 py-3">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-slate-800 truncate">이용약관 개정 안내</span>
                <span className="flex items-center gap-0.5 shrink-0 text-slate-400">
                  <Paperclip size={11} />
                  <span className="text-[10px]">3</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">Paperclip + 개수 숫자 함께 표시</p>
            </div>
          </div>
        </div>

        {/* 실제 테이블 미리보기 */}
        <p className="text-xs font-medium text-slate-600 mb-2">실제 테이블 적용 예시</p>
        <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 w-[40%]">제목</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">내용</th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 w-[90px]">등록자</th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500 w-[72px]">사용여부</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { title: '시스템 정기 점검 안내 (4/25)', content: '새벽 2시~4시 정기 점검이 진행됩니다.', author: '시스템관리자', active: true,  files: 0 },
                { title: '결제 수수료 정책 변경 안내',   content: '5월부터 결제 수수료 정책이 변경됩니다.',  author: '운영팀',       active: false, files: 1 },
                { title: '이용약관 개정 안내 (5/1 적용)', content: '5월 1일부터 개정 약관이 적용됩니다.',     author: '운영팀',       active: true,  files: 3 },
                { title: '서비스 이용 가이드 업데이트',  content: '가이드 문서가 최신 버전으로 업데이트됐습니다.', author: '운영팀', active: true,  files: 2 },
              ].map((row) => (
                <tr key={row.title} className="hover:bg-slate-50 transition-colors">
                  <td className="px-3 py-2.5 text-slate-800 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="line-clamp-1">{row.title}</span>
                      {row.files > 0 && (
                        <span className="flex items-center gap-0.5 shrink-0 text-slate-400">
                          <Paperclip size={11} />
                          {row.files > 1 && <span className="text-[10px]">{row.files}</span>}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-slate-500"><span className="line-clamp-1">{row.content}</span></td>
                  <td className="px-3 py-2.5 text-slate-500">{row.author}</td>
                  <td className="px-3 py-2.5 text-center">
                    <span className={`text-xs px-2 py-0.5 rounded-[3px] ${row.active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                      {row.active ? 'Y' : 'N'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 mt-3">
          • 파일 0개: 아이콘 없음 &nbsp;•&nbsp; 파일 1개: <Paperclip size={11} className="inline mb-px" /> 아이콘만 &nbsp;•&nbsp; 파일 2개+: <Paperclip size={11} className="inline mb-px" /> + 개수 숫자 &nbsp;•&nbsp; 아이콘 색상: text-slate-400 size={"{11}"}
        </p>
      </Section>

    </div>
  );
}

/* ── 확장 테이블 예시 컴포넌트 ── */
function ExpandableTableExample() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const orders = [
    {
      id: 'ORD001',
      store: '강남점',
      table: 'T-5',
      amount: 35000,
      items: [
        { name: '불고기버거', qty: 2, price: 12000 },
        { name: '감자튀김', qty: 1, price: 5000 },
        { name: '콜라', qty: 2, price: 3000 },
      ],
    },
    {
      id: 'ORD002',
      store: '신촌점',
      table: 'T-3',
      amount: 28000,
      items: [
        { name: '치즈버거', qty: 2, price: 10000 },
        { name: '어니언링', qty: 1, price: 4000 },
        { name: '사이다', qty: 2, price: 2000 },
      ],
    },
    {
      id: 'ORD003',
      store: '강남점',
      table: 'T-12',
      amount: 42000,
      items: [
        { name: '베이컨버거', qty: 1, price: 13000 },
        { name: '치킨너겟', qty: 2, price: 8000 },
        { name: '밀크쉐이크', qty: 1, price: 5000 },
      ],
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-2">
      <div className="overflow-x-auto border border-slate-200 rounded-[6px]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="w-8 px-3 py-2.5" />
              <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">주문번호</th>
              <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">매장</th>
              <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">테이블</th>
              <th className="text-right px-3 py-2.5 text-xs font-medium text-slate-500">금액</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const isExpanded = expandedId === order.id;
              return [
                <tr
                  key={order.id}
                  className={`cursor-pointer transition-colors ${
                    isExpanded ? 'bg-[#FF6B2B]/5' : 'hover:bg-slate-50'
                  }`}
                  onClick={() => toggleExpand(order.id)}
                >
                  <td className="px-3 py-2.5 text-center">
                    {isExpanded ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                  </td>
                  <td className="px-3 py-2.5 font-mono text-xs text-slate-600">{order.id}</td>
                  <td className="px-3 py-2.5 text-slate-700">{order.store}</td>
                  <td className="px-3 py-2.5">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-[3px]">
                      {order.table}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right font-medium text-slate-800">
                    {order.amount.toLocaleString()}원
                  </td>
                </tr>,
                isExpanded && (
                  <tr key={`${order.id}-detail`}>
                    <td colSpan={5} className="px-0 py-0">
                      <div className="bg-slate-50/50 border-t border-slate-100 px-6 py-4">
                        <p className="text-xs font-medium text-slate-600 mb-2">주문 상세</p>
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-slate-200">
                              <th className="text-left py-1.5 text-slate-500 font-medium">메뉴명</th>
                              <th className="text-center py-1.5 text-slate-500 font-medium">수량</th>
                              <th className="text-right py-1.5 text-slate-500 font-medium">단가</th>
                              <th className="text-right py-1.5 text-slate-500 font-medium">합계</th>
                            </tr>
                          </thead>
                          <tbody>
                            {order.items.map((item, idx) => (
                              <tr key={idx} className="border-b border-slate-100 last:border-0">
                                <td className="py-1.5 text-slate-700">{item.name}</td>
                                <td className="py-1.5 text-center text-slate-600">{item.qty}개</td>
                                <td className="py-1.5 text-right text-slate-600">
                                  {item.price.toLocaleString()}원
                                </td>
                                <td className="py-1.5 text-right font-medium text-slate-800">
                                  {(item.qty * item.price).toLocaleString()}원
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                ),
              ];
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-400">
        • 행 클릭 시 확장/축소 토글 • 확장된 행은 주황색 배경으로 표시 • 하단에 상세 내용 표시 (회색 배경) •
        확장 아이콘(▼/▲)으로 상태 표시
      </p>
    </div>
  );
}