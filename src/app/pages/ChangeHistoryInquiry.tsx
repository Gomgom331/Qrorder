import { useState } from 'react';
import { Search } from 'lucide-react';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';
import { DropdownSelect } from '../components/ui/DropdownSelect';

// ─── Types ───────────────────────────────────────────────────────

interface ChangeHistory {
  id: string;
  changeType: string; // 변경구분
  tableName: string; // 테이블명
  changeContent: string; // 수정내용
  changeDate: string; // 수정일자
  userId: string; // 수정자 ID
  userName: string; // 수정자명
  beforeValue?: string; // 변경 전 값
  afterValue?: string; // 변경 후 값
}

// ─── Seed data ───────────────────────────────────────────────────

const INITIAL_HISTORIES: ChangeHistory[] = [
  {
    id: 'ch1',
    changeType: '등록',
    tableName: '사업장 정보',
    changeContent: '신규 사업장 등록',
    changeDate: '2026-03-17 14:23:15',
    userId: 'admin001',
    userName: '홍길동',
    beforeValue: '',
    afterValue: '사업장명: 강남점, 주소: 서울시 강남구...',
  },
  {
    id: 'ch2',
    changeType: '수정',
    tableName: '메뉴 관리',
    changeContent: '메뉴 가격 변경',
    changeDate: '2026-03-17 13:45:22',
    userId: 'manager001',
    userName: '김영희',
    beforeValue: '가격: 12000원',
    afterValue: '가격: 13000원',
  },
  {
    id: 'ch3',
    changeType: '삭제',
    tableName: '공통코드',
    changeContent: '미사용 코드 삭제',
    changeDate: '2026-03-17 12:10:35',
    userId: 'admin001',
    userName: '홍길동',
    beforeValue: '코드: OLD_STATUS',
    afterValue: '',
  },
  {
    id: 'ch4',
    changeType: '수정',
    tableName: '사용자 정보',
    changeContent: '사용자 권한 변경',
    changeDate: '2026-03-17 11:30:48',
    userId: 'admin002',
    userName: '박민수',
    beforeValue: '권한: USER',
    afterValue: '권한: MANAGER',
  },
  {
    id: 'ch5',
    changeType: '등록',
    tableName: '쿠폰 관리',
    changeContent: '신규 쿠폰 등록',
    changeDate: '2026-03-17 10:55:12',
    userId: 'manager001',
    userName: '김영희',
    beforeValue: '',
    afterValue: '쿠폰코드: WELCOME2026, 할인율: 10%',
  },
  {
    id: 'ch6',
    changeType: '수정',
    tableName: '결제 요금',
    changeContent: '요금제 금액 변경',
    changeDate: '2026-03-17 09:20:33',
    userId: 'admin001',
    userName: '홍길동',
    beforeValue: '월 요금: 50000원',
    afterValue: '월 요금: 55000원',
  },
  {
    id: 'ch7',
    changeType: '삭제',
    tableName: '메뉴 관리',
    changeContent: '단종 메뉴 삭제',
    changeDate: '2026-03-17 08:15:44',
    userId: 'manager001',
    userName: '김영희',
    beforeValue: '메뉴명: 구버전 세트',
    afterValue: '',
  },
  {
    id: 'ch8',
    changeType: '수정',
    tableName: '시스템 설정',
    changeContent: '운영 시간 변경',
    changeDate: '2026-03-16 17:40:25',
    userId: 'admin002',
    userName: '박민수',
    beforeValue: '운영시간: 09:00-22:00',
    afterValue: '운영시간: 10:00-23:00',
  },
];

// ─── Page ────────────────────────────────────────────────────────

/** 오늘 날짜를 datetime-local 형식(YYYY-MM-DDTHH:MM)으로 반환 */
function getTodayEnd(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T23:59`;
}

/** 오늘로부터 7일 전 00:00을 datetime-local 형식으로 반환 */
function getWeekAgoStart(): string {
  const d = new Date();
  d.setDate(d.getDate() - 7);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T00:00`;
}

export function ChangeHistoryInquiry() {
  const [changeType, setChangeType] = useState('');
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [startDateTime, setStartDateTime] = useState(getWeekAgoStart);
  const [endDateTime, setEndDateTime] = useState(getTodayEnd);
  const [appliedStart, setAppliedStart] = useState('');
  const [appliedEnd, setAppliedEnd] = useState('');
  const [appliedChangeType, setAppliedChangeType] = useState('');
  const [dateRangeError, setDateRangeError] = useState('');
  const [histories] = useState<ChangeHistory[]>(INITIAL_HISTORIES);

  /* ── 날짜 범위 유효성 검사 ── */
  const validateDateRange = (start: string, end: string): boolean => {
    if (!start || !end) return true;
    const startMs = new Date(start).getTime();
    const endMs = new Date(end).getTime();
    if (endMs < startMs) {
      setDateRangeError('종료일시는 시작일시보다 이후여야 합니다.');
      return false;
    }
    const diffDays = (endMs - startMs) / (1000 * 60 * 60 * 24);
    if (diffDays > 7) {
      setDateRangeError('조회 기간은 최대 1주일(7일)까지 설정할 수 있습니다.');
      return false;
    }
    setDateRangeError('');
    return true;
  };

  /* ── 시작일시 변경 시 자동 종료일시 설정 ── */
  const handleStartDateChange = (value: string) => {
    setStartDateTime(value);
    if (value && endDateTime) {
      validateDateRange(value, endDateTime);
    } else if (value && !endDateTime) {
      const startMs = new Date(value).getTime();
      const maxEnd = new Date(startMs + 7 * 24 * 60 * 60 * 1000);
      const pad = (n: number) => String(n).padStart(2, '0');
      const formatted = `${maxEnd.getFullYear()}-${pad(maxEnd.getMonth() + 1)}-${pad(maxEnd.getDate())}T${pad(maxEnd.getHours())}:${pad(maxEnd.getMinutes())}`;
      setEndDateTime(formatted);
      setDateRangeError('');
    }
  };

  const handleEndDateChange = (value: string) => {
    setEndDateTime(value);
    if (startDateTime) {
      validateDateRange(startDateTime, value);
    }
  };

  /* ── 검색 ── */
  const handleSearch = () => {
    if (!validateDateRange(startDateTime, endDateTime)) return;
    setAppliedSearch(search);
    setAppliedStart(startDateTime);
    setAppliedEnd(endDateTime);
    setAppliedChangeType(changeType);
  };

  const handleReset = () => {
    setChangeType('');
    setSearch('');
    setAppliedSearch('');
    setStartDateTime('');
    setEndDateTime('');
    setAppliedStart('');
    setAppliedEnd('');
    setAppliedChangeType('');
    setDateRangeError('');
  };

  const filteredHistories = histories.filter((h) => {
    // 변경구분 필터
    const changeTypeMatch =
      !appliedChangeType || appliedChangeType === '전체' || h.changeType === appliedChangeType;

    // 텍스트 검색 필터
    const textMatch = appliedSearch
      ? h.changeType.includes(appliedSearch) ||
        h.tableName.includes(appliedSearch) ||
        h.changeContent.includes(appliedSearch) ||
        h.userName.includes(appliedSearch) ||
        h.userId.toLowerCase().includes(appliedSearch.toLowerCase())
      : true;

    // 날짜 범위 필터
    let dateMatch = true;
    if (appliedStart || appliedEnd) {
      const changeMs = new Date(h.changeDate.replace(' ', 'T')).getTime();
      if (appliedStart) {
        dateMatch = dateMatch && changeMs >= new Date(appliedStart).getTime();
      }
      if (appliedEnd) {
        dateMatch = dateMatch && changeMs <= new Date(appliedEnd).getTime();
      }
    }

    return changeTypeMatch && textMatch && dateMatch;
  });

  /* ── Render ── */
  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>시스템</span>
        <span>/</span>
        <span>시스템 관리</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">변경이력조회</span>
      </nav>

      {/* ── 검색 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col gap-2.5">
          {/* Row 1: 변경구분 셀렉트 + 텍스트 검색 */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="w-full sm:w-48 shrink-0">
              <DropdownSelect
                inputSize="md"
                placeholder="변경구분"
                value={changeType}
                onChange={(value) => setChangeType(value)}
                options={[
                  { value: '전체', label: '전체' },
                  { value: '등록', label: '등록' },
                  { value: '수정', label: '수정' },
                  { value: '삭제', label: '삭제' },
                ]}
              />
            </div>
            <div className="flex-1">
              <InputField
                inputSize="md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="테이블명, 수정내용, 수정자로 검색"
                leftIcon={<Search size={14} />}
              />
            </div>
          </div>

          {/* Row 2: 날짜 범위 + 버튼 */}
          <div className="flex flex-wrap items-start gap-2">
            {/* 날짜 범위 */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="flex-1 min-w-[160px]">
                <InputField
                  inputSize="md"
                  type="datetime-local"
                  value={startDateTime}
                  onChange={(e) => handleStartDateChange(e.target.value)}
                  errorText={dateRangeError && startDateTime ? ' ' : undefined}
                />
              </div>
              <span className="text-slate-400 shrink-0">~</span>
              <div className="flex-1 min-w-[160px]">
                <InputField
                  inputSize="md"
                  type="datetime-local"
                  value={endDateTime}
                  onChange={(e) => handleEndDateChange(e.target.value)}
                  errorText={dateRangeError || undefined}
                />
              </div>
            </div>

            {/* 버튼 */}
            <div className="flex gap-2 shrink-0 mt-0.5">
              <Button variant="outline" size="md" onClick={handleReset}>
                초기화
              </Button>
              <Button
                variant="primary"
                size="md"
                leftIcon={<Search size={15} />}
                onClick={handleSearch}
              >
                조회
              </Button>
            </div>
          </div>

          {/* 날짜 범위 안내 */}
          {dateRangeError && (
            <p className="text-xs text-red-500 -mt-1">{dateRangeError}</p>
          )}
          {!dateRangeError && (
            <p className="text-xs text-slate-400 -mt-1">
              조회 기간은 최대 1주일(7일)까지 설정할 수 있습니다.
            </p>
          )}
        </div>
      </div>

      {/* ── 테이블 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        {/* 테이블 헤더 */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">
              변경이력목록
            </span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
              {filteredHistories.length}건
            </span>
          </div>
        </div>

        {/* 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                  변경구분
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                  테이블명
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                  수정내용
                </th>
                <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">
                  수정일자
                </th>
                <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                  수정자
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredHistories.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-12 text-center text-slate-400 text-sm"
                  >
                    {appliedSearch
                      ? '검색 결과가 없습니다.'
                      : '변경 이력이 없습니다.'}
                  </td>
                </tr>
              ) : (
                filteredHistories.map((history) => (
                  <tr
                    key={history.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-3 py-2.5">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-[3px] text-xs font-medium ${
                          history.changeType === '등록'
                            ? 'bg-green-100 text-green-700'
                            : history.changeType === '수정'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {history.changeType}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-700">
                      {history.tableName}
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">
                      {history.changeContent}
                    </td>
                    <td className="px-3 py-2.5 text-center text-slate-600 text-xs">
                      {history.changeDate}
                    </td>
                    <td className="px-3 py-2.5 text-slate-700">
                      {history.userName} ({history.userId})
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}