import { useState } from 'react';
import { Search } from 'lucide-react';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';

// ─── Types ───────────────────────────────────────────────────────

interface AccessLog {
  id: string;
  userId: string;
  userName: string;
  ipAddress: string;
  loginTime: string;
  logoutTime: string;
}

interface MenuAccess {
  id: string;
  userId: string; // 연결용
  menuCode: string;
  menuName: string;
  startTime: string;
  endTime: string;
}

// ─── Seed data ───────────────────────────────────────────────────

const INITIAL_ACCESS_LOGS: AccessLog[] = [
  {
    id: 'log1',
    userId: 'admin001',
    userName: '홍길동',
    ipAddress: '192.168.1.100',
    loginTime: '2026-03-17 09:15:32',
    logoutTime: '2026-03-17 18:30:45',
  },
  {
    id: 'log2',
    userId: 'manager001',
    userName: '김영희',
    ipAddress: '192.168.1.101',
    loginTime: '2026-03-17 08:45:12',
    logoutTime: '2026-03-17 17:50:23',
  },
  {
    id: 'log3',
    userId: 'staff001',
    userName: '이철수',
    ipAddress: '192.168.1.102',
    loginTime: '2026-03-17 10:20:55',
    logoutTime: '2026-03-17 19:10:08',
  },
  {
    id: 'log4',
    userId: 'admin002',
    userName: '박민수',
    ipAddress: '192.168.1.103',
    loginTime: '2026-03-17 09:00:00',
    logoutTime: '2026-03-17 18:00:00',
  },
  {
    id: 'log5',
    userId: 'staff002',
    userName: '최지은',
    ipAddress: '192.168.1.104',
    loginTime: '2026-03-17 11:30:22',
    logoutTime: '2026-03-17 20:15:33',
  },
];

const INITIAL_MENU_ACCESSES: MenuAccess[] = [
  // admin001의 메뉴 접근 목록
  {
    id: 'm1',
    userId: 'admin001',
    menuCode: 'SYS001',
    menuName: '시스템 관리',
    startTime: '2026-03-17 09:16:00',
    endTime: '2026-03-17 09:25:30',
  },
  {
    id: 'm2',
    userId: 'admin001',
    menuCode: 'USR001',
    menuName: '사용자 관리',
    startTime: '2026-03-17 09:26:00',
    endTime: '2026-03-17 10:15:22',
  },
  {
    id: 'm3',
    userId: 'admin001',
    menuCode: 'MENU001',
    menuName: '메뉴 관리',
    startTime: '2026-03-17 10:16:00',
    endTime: '2026-03-17 11:30:45',
  },
  {
    id: 'm4',
    userId: 'admin001',
    menuCode: 'CODE001',
    menuName: '공통코드 관리',
    startTime: '2026-03-17 11:31:00',
    endTime: '2026-03-17 12:00:00',
  },
  // manager001의 메뉴 접근 목록
  {
    id: 'm5',
    userId: 'manager001',
    menuCode: 'ORDER001',
    menuName: '주문 관리',
    startTime: '2026-03-17 08:50:00',
    endTime: '2026-03-17 10:30:00',
  },
  {
    id: 'm6',
    userId: 'manager001',
    menuCode: 'PAYMENT001',
    menuName: '결제 관리',
    startTime: '2026-03-17 10:31:00',
    endTime: '2026-03-17 12:15:00',
  },
  {
    id: 'm7',
    userId: 'manager001',
    menuCode: 'COUPON001',
    menuName: '쿠폰 관리',
    startTime: '2026-03-17 13:00:00',
    endTime: '2026-03-17 15:45:00',
  },
  // staff001의 메뉴 접근 목록
  {
    id: 'm8',
    userId: 'staff001',
    menuCode: 'BIZ001',
    menuName: '사업장 조회',
    startTime: '2026-03-17 10:25:00',
    endTime: '2026-03-17 11:50:00',
  },
  {
    id: 'm9',
    userId: 'staff001',
    menuCode: 'ORDER001',
    menuName: '주문 관리',
    startTime: '2026-03-17 11:51:00',
    endTime: '2026-03-17 14:20:00',
  },
  // admin002의 메뉴 접근 목록
  {
    id: 'm10',
    userId: 'admin002',
    menuCode: 'SYS001',
    menuName: '시스템 관리',
    startTime: '2026-03-17 09:05:00',
    endTime: '2026-03-17 10:30:00',
  },
  {
    id: 'm11',
    userId: 'admin002',
    menuCode: 'LOG001',
    menuName: '접속정보 조회',
    startTime: '2026-03-17 10:31:00',
    endTime: '2026-03-17 12:00:00',
  },
  {
    id: 'm12',
    userId: 'admin002',
    menuCode: 'MENU001',
    menuName: '메뉴 관리',
    startTime: '2026-03-17 13:00:00',
    endTime: '2026-03-17 15:30:00',
  },
  // staff002의 메뉴 접근 목록
  {
    id: 'm13',
    userId: 'staff002',
    menuCode: 'ORDER001',
    menuName: '주문 관리',
    startTime: '2026-03-17 11:35:00',
    endTime: '2026-03-17 13:45:00',
  },
  {
    id: 'm14',
    userId: 'staff002',
    menuCode: 'PAYMENT001',
    menuName: '결제 관리',
    startTime: '2026-03-17 13:46:00',
    endTime: '2026-03-17 16:20:00',
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

export function AccessLogInquiry() {
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [startDateTime, setStartDateTime] = useState(getWeekAgoStart);
  const [endDateTime, setEndDateTime] = useState(getTodayEnd);
  const [appliedStart, setAppliedStart] = useState('');
  const [appliedEnd, setAppliedEnd] = useState('');
  const [dateRangeError, setDateRangeError] = useState('');
  const [accessLogs] = useState<AccessLog[]>(INITIAL_ACCESS_LOGS);
  const [menuAccesses] = useState<MenuAccess[]>(INITIAL_MENU_ACCESSES);
  const [selectedLogId, setSelectedLogId] = useState<string | null>(null);

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
      // 시작일시 + 7일을 종료일시 기본값으로 설정
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
  };

  const handleReset = () => {
    setSearch('');
    setAppliedSearch('');
    setStartDateTime('');
    setEndDateTime('');
    setAppliedStart('');
    setAppliedEnd('');
    setDateRangeError('');
    setSelectedLogId(null);
  };

  const filteredLogs = accessLogs.filter((log) => {
    // 텍스트 검색 필터
    const textMatch = appliedSearch
      ? log.userId.toLowerCase().includes(appliedSearch.toLowerCase()) ||
        log.userName.includes(appliedSearch) ||
        log.ipAddress.includes(appliedSearch)
      : true;

    // 날짜 범위 필터
    let dateMatch = true;
    if (appliedStart || appliedEnd) {
      const loginMs = new Date(log.loginTime.replace(' ', 'T')).getTime();
      if (appliedStart) {
        dateMatch = dateMatch && loginMs >= new Date(appliedStart).getTime();
      }
      if (appliedEnd) {
        dateMatch = dateMatch && loginMs <= new Date(appliedEnd).getTime();
      }
    }

    return textMatch && dateMatch;
  });

  /* ── 선택된 사용자의 메뉴 접근 목록 ── */
  const selectedLog = accessLogs.find((log) => log.id === selectedLogId);
  const selectedMenuAccesses = selectedLog
    ? menuAccesses.filter((menu) => menu.userId === selectedLog.userId)
    : [];

  /* ── Row 클릭 ── */
  const handleRowClick = (logId: string) => {
    setSelectedLogId(logId);
  };

  /* ── Render ── */
  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* 브레드크럼 */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <span>시스템</span>
        <span>/</span>
        <span>이력 관리</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">접속정보조회</span>
      </nav>

      {/* ── 검색 카드 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col gap-2.5">
          {/* Row 1: 텍스트 검색 */}
          <div className="w-full">
            <InputField
              inputSize="md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="사용자 아이디, 사용자명, IP주소로 검색"
              leftIcon={<Search size={14} />}
            />
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

      {/* ── 두 개의 테이블 (가로 배치) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 왼쪽: 접속 로그 목록 */}
        <div className="bg-white rounded-[6px] border border-slate-200">
          {/* 테이블 헤더 */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-800">
                접속 로그 목록
              </span>
              <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
                {filteredLogs.length}건
              </span>
            </div>
          </div>

          {/* 테이블 */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                    사용자 아이디
                  </th>
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                    사용자 명
                  </th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">
                    IP주소
                  </th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">
                    로그인 시간
                  </th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">
                    로그아웃 시간
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLogs.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-12 text-center text-slate-400 text-sm"
                    >
                      {appliedSearch
                        ? '검색 결과가 없습니다.'
                        : '접속 로그가 없습니다.'}
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((log) => (
                    <tr
                      key={log.id}
                      onClick={() => handleRowClick(log.id)}
                      className={`cursor-pointer transition-colors ${
                        selectedLogId === log.id
                          ? 'bg-[#FF6B2B]/5 hover:bg-[#FF6B2B]/10'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="px-3 py-2.5 font-mono text-xs text-slate-600">
                        {log.userId}
                      </td>
                      <td className="px-3 py-2.5 text-slate-700">
                        {log.userName}
                      </td>
                      <td className="px-3 py-2.5 text-center font-mono text-xs text-slate-600">
                        {log.ipAddress}
                      </td>
                      <td className="px-3 py-2.5 text-center text-slate-600 text-xs">
                        {log.loginTime}
                      </td>
                      <td className="px-3 py-2.5 text-center text-slate-600 text-xs">
                        {log.logoutTime}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* 오른쪽: 메뉴 접근 목록 */}
        <div className="bg-white rounded-[6px] border border-slate-200">
          {/* 테이블 헤더 */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-800">
                메뉴 접근 목록
              </span>
              {selectedLog && (
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-[3px] font-medium">
                  {selectedLog.userName} ({selectedLog.userId})
                </span>
              )}
              <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">
                {selectedMenuAccesses.length}건
              </span>
            </div>
          </div>

          {/* 테이블 */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                    메뉴 코드
                  </th>
                  <th className="text-left px-3 py-2.5 text-xs font-medium text-slate-500">
                    메뉴 명
                  </th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">
                    시작 시간
                  </th>
                  <th className="text-center px-3 py-2.5 text-xs font-medium text-slate-500">
                    종료 시간
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {!selectedLog ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-12 text-center text-slate-400 text-sm"
                    >
                      왼쪽 목록에서 접속 로그를 선택해주세요
                    </td>
                  </tr>
                ) : selectedMenuAccesses.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-12 text-center text-slate-400 text-sm"
                    >
                      메뉴 접근 기록이 없습니다
                    </td>
                  </tr>
                ) : (
                  selectedMenuAccesses.map((menu) => (
                    <tr
                      key={menu.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-3 py-2.5 font-mono text-xs text-slate-600">
                        {menu.menuCode}
                      </td>
                      <td className="px-3 py-2.5 text-slate-700">
                        {menu.menuName}
                      </td>
                      <td className="px-3 py-2.5 text-center text-slate-600 text-xs">
                        {menu.startTime}
                      </td>
                      <td className="px-3 py-2.5 text-center text-slate-600 text-xs">
                        {menu.endTime}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}