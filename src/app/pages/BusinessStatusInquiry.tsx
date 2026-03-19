import { useState } from 'react';
import { Search } from 'lucide-react';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';

// ─── Types ───────────────────────────────────────────────────────

interface BusinessStatus {
  id: string;
  businessNumber: string;
  planCode: string;
  planName: string;
  licensePeriod: number;
  paymentDate: string;
  expiryDate: string;
}

// ─── Seed data ───────────────────────────────────────────────────

const INITIAL_STATUS: BusinessStatus[] = [
  {
    id: 's1',
    businessNumber: '123-45-67890',
    planCode: 'BASIC_MONTHLY',
    planName: '베이직 월간',
    licensePeriod: 1,
    paymentDate: '2024-01-15',
    expiryDate: '2024-02-14',
  },
  {
    id: 's2',
    businessNumber: '234-56-78901',
    planCode: 'PRO_YEARLY',
    planName: '프로 연간',
    licensePeriod: 12,
    paymentDate: '2023-12-01',
    expiryDate: '2024-11-30',
  },
  {
    id: 's3',
    businessNumber: '345-67-89012',
    planCode: 'ENTERPRISE_MONTHLY',
    planName: '엔터프라이즈 월간',
    licensePeriod: 1,
    paymentDate: '2024-02-01',
    expiryDate: '2024-02-29',
  },
  {
    id: 's4',
    businessNumber: '456-78-90123',
    planCode: 'BASIC_YEARLY',
    planName: '베이직 연간',
    licensePeriod: 12,
    paymentDate: '2023-11-15',
    expiryDate: '2024-11-14',
  },
  {
    id: 's5',
    businessNumber: '567-89-01234',
    planCode: 'PRO_MONTHLY',
    planName: '프로 월간',
    licensePeriod: 1,
    paymentDate: '2024-01-20',
    expiryDate: '2024-02-19',
  },
  {
    id: 's6',
    businessNumber: '678-90-12345',
    planCode: 'BASIC_MONTHLY',
    planName: '베이직 월간',
    licensePeriod: 1,
    paymentDate: '2023-12-01',
    expiryDate: '2024-01-01',
  },
  {
    id: 's7',
    businessNumber: '789-01-23456',
    planCode: 'PRO_MONTHLY',
    planName: '프로 월간',
    licensePeriod: 1,
    paymentDate: '2024-03-10',
    expiryDate: '2026-03-23',
  },
  {
    id: 's8',
    businessNumber: '890-12-34567',
    planCode: 'ENTERPRISE_YEARLY',
    planName: '엔터프라이즈 연간',
    licensePeriod: 12,
    paymentDate: '2024-03-01',
    expiryDate: '2026-03-20',
  },
  {
    id: 's9',
    businessNumber: '901-23-45678',
    planCode: 'BASIC_YEARLY',
    planName: '베이직 연간',
    licensePeriod: 12,
    paymentDate: '2024-02-15',
    expiryDate: '2026-03-25',
  },
  {
    id: 's10',
    businessNumber: '012-34-56789',
    planCode: 'PRO_YEARLY',
    planName: '프로 연간',
    licensePeriod: 12,
    paymentDate: '2024-01-01',
    expiryDate: '2026-04-15',
  },
];

// ─── Page ────────────────────────────────────────────────────────

export function BusinessStatusInquiry() {
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [statusList] = useState<BusinessStatus[]>(INITIAL_STATUS);

  /* ── 검색 ── */
  const handleSearch = () => setAppliedSearch(search);
  const handleReset = () => {
    setSearch('');
    setAppliedSearch('');
  };

  const filtered = statusList.filter((s) =>
    appliedSearch
      ? s.businessNumber.includes(appliedSearch) ||
        s.planCode.toLowerCase().includes(appliedSearch.toLowerCase()) ||
        s.planName.includes(appliedSearch)
      : true
  );

  /* ── 만료 상태 계산 ── */
  const getExpiryStatus = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { label: '만료', color: 'red' as const };
    if (diffDays <= 7) return { label: `${diffDays}일 남음`, color: 'amber' as const };
    if (diffDays <= 30) return { label: `${diffDays}일 남음`, color: 'orange' as const };
    return { label: '정상', color: 'green' as const };
  };

  /* ── Render ── */
  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>시스템</span>
        <span>/</span>
        <span>시스템 관리</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">사업장 상태 조회</span>
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
              placeholder="사업자 번호, 결제 요금 코드, 결제 요금명으로 검색"
              leftIcon={<Search size={14} />}
            />
          </div>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="md" onClick={handleReset}>
              초기화
            </Button>
            <Button
              variant="primary"
              size="md"
              leftIcon={<Search size={14} />}
              onClick={handleSearch}
            >
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
            <span className="text-sm font-medium text-slate-800">사업장 상태 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
              {filtered.length}건
            </span>
          </div>
        </div>

        {/* 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                  사업자 번호
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                  결제 요금 코드
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                  결제 요금명
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">
                  라이센스 기간(월)
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">
                  결제 날짜
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">
                  라이센스 만료 날짜
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">
                  상태
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400 text-sm">
                    {appliedSearch
                      ? '검색 결과가 없습니다.'
                      : '등록된 사업장 상태가 없습니다.'}
                  </td>
                </tr>
              ) : (
                filtered.map((status) => {
                  const expiryStatus = getExpiryStatus(status.expiryDate);
                  return (
                    <tr
                      key={status.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-3 py-2.5 font-mono text-xs text-slate-600">
                        {status.businessNumber}
                      </td>
                      <td className="px-3 py-2.5 font-mono text-xs text-slate-600">
                        {status.planCode}
                      </td>
                      <td className="px-3 py-2.5 text-slate-700">{status.planName}</td>
                      <td className="px-3 py-2.5 text-center">
                        <Tag
                          color={status.licensePeriod === 12 ? 'blue' : 'gray'}
                          size="sm"
                        >
                          {status.licensePeriod}개월
                        </Tag>
                      </td>
                      <td className="px-3 py-2.5 text-center text-slate-600">
                        {status.paymentDate}
                      </td>
                      <td className="px-3 py-2.5 text-center text-slate-600">
                        {status.expiryDate}
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <Tag color={expiryStatus.color} size="sm">
                          {expiryStatus.label}
                        </Tag>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}