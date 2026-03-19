import React from 'react';
import { Search, Mail, Lock, Building2, QrCode, Tag, User } from 'lucide-react';
import { InputField, InputSize, InputState } from '../components/ui/InputField';
import { DropdownSelect } from '../components/ui/DropdownSelect';
import { Tag as TagBadge } from '../components/ui/Tag';

// ─── Helpers ─────────────────────────────────────────────────────
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

function Sub({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-medium text-slate-500 mb-2 mt-5 first:mt-0 uppercase tracking-wide">{children}</p>;
}

// ─── State rows ───────────────────────────────────────────────────
type StateRow = {
  state: InputState;
  label: string;
  badge: string;
  desc: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  errorText?: string;
  successText?: string;
};

const STATE_ROWS: StateRow[] = [
  { state: 'default',  label: 'Default',   badge: 'bg-slate-100 text-slate-500',     desc: '기본 — 상호작용 없음',         value: '' },
  { state: 'hover',    label: 'Hover',     badge: 'bg-blue-50 text-blue-600',         desc: ':hover — 마우스 올림',          value: '' },
  { state: 'focus',    label: 'Focus',     badge: 'bg-orange-50 text-[#FF6B2B]',      desc: ':focus — 탭/클릭 포커스',       value: '' },
  { state: 'filled',   label: 'Filled',    badge: 'bg-slate-200 text-slate-700',      desc: '값 입력 완료',                 value: '입력된 텍스트' },
  { state: 'disabled', label: 'Disabled',  badge: 'bg-slate-100 text-slate-400',      desc: 'disabled — 비활성',            disabled: true },
  { state: 'readonly', label: 'Read-only', badge: 'bg-slate-100 text-slate-500',      desc: 'readOnly — 읽기 전용',          readOnly: true, value: '읽기 전용 값' },
  { state: 'error',    label: 'Error',     badge: 'bg-red-100 text-red-600',          desc: '유효성 오류 — 빨간 테두리',     value: '잘못된 입력',  errorText: '올바르지 않은 형식입니다.' },
  { state: 'success',  label: 'Success',   badge: 'bg-emerald-100 text-emerald-600',  desc: '유효성 통과 — 초록 테두리',     value: 'me@qrorder.kr', successText: '사용 가능한 이메일입니다.' },
  { state: 'loading',  label: 'Loading',   badge: 'bg-amber-100 text-amber-600',      desc: '비동기 검증 중 — 스피너',       loading: true, value: 'user@qrorder.kr' },
];

function StateCell({ size, row }: { size: InputSize; row: StateRow }) {
  return (
    <InputField
      inputSize={size}
      forceState={row.state}
      defaultValue={row.value}
      disabled={row.disabled}
      readOnly={row.readOnly}
      loading={row.loading}
      errorText={row.errorText}
      successText={row.successText}
      placeholder="텍스트 입력"
    />
  );
}

// ─── Textarea ────────────────────────────────────────────────────
function TextareaField({
  label,
  placeholder,
  rows = 3,
  forceState,
  disabled,
  readOnly,
  defaultValue,
}: {
  label?: string;
  placeholder?: string;
  rows?: number;
  forceState?: InputState;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: string;
}) {
  const [focused, setFocused] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  const effectiveState: InputState = (() => {
    if (forceState) return forceState;
    if (disabled) return 'disabled';
    if (readOnly) return 'readonly';
    if (focused) return 'focus';
    if (hovered) return 'hover';
    return 'default';
  })();

  const borderCls = (() => {
    switch (effectiveState) {
      case 'hover':   return 'border-slate-400';
      case 'focus':   return 'border-[#FF6B2B] ring-2 ring-[#FF6B2B]/20';
      case 'error':   return 'border-red-400 ring-2 ring-red-400/20';
      case 'success': return 'border-emerald-400 ring-2 ring-emerald-400/20';
      default:        return 'border-slate-200';
    }
  })();

  return (
    <div>
      {label && <label className="block text-sm text-slate-600 mb-1">{label}</label>}
      <textarea
        rows={rows}
        placeholder={placeholder}
        disabled={disabled || forceState === 'disabled'}
        readOnly={readOnly || forceState === 'readonly'}
        defaultValue={defaultValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={[
          'w-full rounded-[4px] border outline-none transition-all resize-y text-sm px-3 py-2.5',
          borderCls,
          (disabled || forceState === 'disabled')
            ? 'bg-slate-50 text-slate-400 cursor-not-allowed'
            : (readOnly || forceState === 'readonly')
            ? 'bg-slate-50 text-slate-600 cursor-default'
            : 'bg-white text-slate-800 placeholder:text-slate-300',
        ].join(' ')}
      />
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export function InputGuide() {
  const [pwValue, setPwValue] = React.useState('');

  return (
    <div className="p-5 lg:p-6 space-y-4">
      <div>
        <h2 className="text-slate-800">인풋 컴포넌트</h2>
        <p className="text-sm text-slate-400 mt-1">
          2가지 사이즈 × 9가지 상태 · 레이블 위치 · 다양한 타입 가이드
        </p>
      </div>

      {/* ── 사이즈 기준 ── */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <p className="text-xs font-medium text-slate-600 mb-3">사이즈 기준</p>
        <div className="flex flex-wrap gap-6">
          {[
            { label: 'MD', height: '36px (h-9)', use: '일반 폼, 검색바, 필터, 인라인 입력' },
            { label: 'LG', height: '44px (h-11)', use: '로그인, 메인 폼, 강조 입력 영역' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-white bg-slate-800 px-2 py-0.5 rounded-[3px]">{s.label}</span>
              <span className="text-xs text-slate-700">{s.height}</span>
              <span className="text-xs text-slate-400">— {s.use}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 상태 비교 MD vs LG ── */}
      <Section title="상태 (MD · LG 비교)" desc="에러/성공은 테두리 색으로만 표시 — 아이콘 없음">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[580px]">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-2 pr-4 w-36">
                  <span className="text-xs text-slate-400">상태</span>
                </th>
                <th className="text-left py-2 pr-6 w-[240px]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono bg-slate-800 text-white px-1.5 py-0.5 rounded-[3px]">MD</span>
                    <span className="text-xs text-slate-400">36px</span>
                  </div>
                </th>
                <th className="text-left py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono bg-[#FF6B2B] text-white px-1.5 py-0.5 rounded-[3px]">LG</span>
                    <span className="text-xs text-slate-400">44px</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {STATE_ROWS.map((row) => (
                <tr key={row.state} className="border-b border-slate-50 last:border-0">
                  <td className="py-3 pr-4 align-top">
                    <div className="flex flex-col gap-1 pt-1">
                      <span className={`text-xs px-1.5 py-0.5 rounded-[3px] font-mono w-fit ${row.badge}`}>
                        {row.label}
                      </span>
                      <span className="text-[11px] text-slate-400 leading-tight">{row.desc}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-6 align-top">
                    <StateCell size="md" row={row} />
                  </td>
                  <td className="py-3 align-top">
                    <StateCell size="lg" row={row} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 레이블 위치 ── */}
      <Section title="레이블 위치 (Label Position)" desc="top · bottom · left · right 4가지 배치">

        <Sub>위 (top) — 기본값</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField inputSize="md" label="이메일 주소" placeholder="user@qrorder.kr" labelPosition="top" />
          <InputField inputSize="lg" label="사업장명" placeholder="스마트버거 강남점" labelPosition="top" />
        </div>

        <Sub>아래 (bottom) — 라벨이 입력 후 나타나는 패턴</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField inputSize="md" label="이메일 주소" placeholder="user@qrorder.kr" labelPosition="bottom" />
          <InputField inputSize="lg" label="사업장명" placeholder="스마트버거 강남점" labelPosition="bottom" />
        </div>

        <Sub>왼쪽 (left) — 인라인 폼, 수평 레이아웃</Sub>
        <div className="space-y-3 max-w-lg">
          <InputField inputSize="md" label="이름" placeholder="홍길동" labelPosition="left" labelWidth="w-20" />
          <InputField inputSize="md" label="사업자번호" placeholder="000-00-00000" labelPosition="left" labelWidth="w-20" />
          <InputField inputSize="md" label="전화번호" placeholder="010-0000-0000" labelPosition="left" labelWidth="w-20" />
        </div>

        <Sub>오른쪽 (right) — 단위 표기, 접미어 레이블</Sub>
        <div className="space-y-3 max-w-sm">
          <InputField inputSize="md" label="원" placeholder="0" type="number" labelPosition="right" />
          <InputField inputSize="md" label="개" placeholder="0" type="number" labelPosition="right" />
          <InputField inputSize="md" label="명" placeholder="0" type="number" labelPosition="right" />
        </div>
      </Section>

      {/* ── 다양한 입력 타입 ── */}
      <Section title="입력 타입 (Input Types)" desc="text · number · date · time · tel · password · search · textarea">

        <Sub>기본 텍스트 & 숫자</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <InputField inputSize="md" label="텍스트 (text)" type="text" placeholder="일반 텍스트 입력" />
          <InputField inputSize="md" label="숫자 (number)" type="number" placeholder="0" />
          <InputField inputSize="md" label="전화번호 (tel)" type="tel" placeholder="010-0000-0000" />
        </div>

        <Sub>날짜 & 시간</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InputField inputSize="md" label="날짜 (date)" type="date" />
          <InputField inputSize="md" label="시간 (time)" type="time" />
          <InputField inputSize="md" label="날짜+시간 (datetime-local)" type="datetime-local" />
          <InputField inputSize="md" label="월 (month)" type="month" />
        </div>

        <Sub>검색</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField inputSize="md" label="검색 (search)" type="search" placeholder="검색어 입력" />
          <InputField inputSize="lg" label="검색 LG" type="search" placeholder="사업장명, 메뉴명 검색" />
        </div>

        <Sub>비밀번호 (눈 아이콘은 특수 허용)</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            inputSize="md"
            label="비밀번호 (MD)"
            type="password"
            placeholder="••••••••"
            showPasswordToggle
            value={pwValue}
            onChange={(e) => setPwValue(e.target.value)}
          />
          <InputField
            inputSize="lg"
            label="비밀번호 (LG)"
            type="password"
            placeholder="••••••••"
            showPasswordToggle
          />
        </div>

        <Sub>멀티라인 (textarea)</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextareaField label="메모 (기본)" placeholder="내용을 입력하세요" rows={3} />
          <TextareaField label="메모 (에러)" placeholder="내용을 입력하세요" rows={3} forceState="error" defaultValue="너무 짧습니다." />
        </div>
      </Section>

      {/* ── 유효성 상태 (border only) ── */}
      <Section title="유효성 표시" desc="에러·성공 — 테두리 색 + 하단 텍스트만 사용 (인풋 내 아이콘 없음)">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <InputField
            inputSize="md"
            label="기본"
            placeholder="텍스트 입력"
            hint="이메일 형식으로 입력하세요."
          />
          <InputField
            inputSize="md"
            label="오류"
            forceState="error"
            defaultValue="잘못된@입력"
            errorText="올바른 이메일 형식이 아닙니다."
          />
          <InputField
            inputSize="md"
            label="성공"
            forceState="success"
            defaultValue="me@qrorder.kr"
            successText="사용 가능한 이메일입니다."
          />
        </div>
      </Section>

      {/* ── 특수 아이콘 (허용 케이스) ── */}
      <Section title="특수 아이콘 조합" desc="아이콘은 검색, 비밀번호처럼 명확한 기능적 의미가 있을 때만 사용">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField inputSize="md" label="검색" type="search" placeholder="검색어 입력" leftIcon={<Search size={14} />} />
          <InputField inputSize="md" label="이메일" type="email" placeholder="user@qrorder.kr" leftIcon={<Mail size={14} />} />
          <InputField inputSize="lg" label="비밀번호" type="password" placeholder="••••••••" leftIcon={<Lock size={16} />} showPasswordToggle />
          <InputField inputSize="lg" label="검색 LG" type="search" placeholder="사업장, 메뉴 검색" leftIcon={<Search size={16} />} />
        </div>
      </Section>

      {/* ── 셀렉트 ── */}
      <Section title="셀렉트 (DropdownSelect)" desc="인풋과 동일한 사이즈·상태 체계 — 커스텀 드롭다운으로 통일">

        <Sub>사이즈 & 상태</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <DropdownSelect
            inputSize="md"
            label="주문 상태 (MD)"
            options={[
              { value: 'waiting', label: '대기중' },
              { value: 'preparing', label: '준비중' },
              { value: 'done', label: '완료' },
              { value: 'cancel', label: '취소' },
            ]}
            placeholder="상태 선택"
          />
          <DropdownSelect
            inputSize="lg"
            label="주문 상태 (LG)"
            options={[
              { value: 'waiting', label: '대기중' },
              { value: 'preparing', label: '준비중' },
              { value: 'done', label: '완료' },
              { value: 'cancel', label: '취소' },
            ]}
            placeholder="상태 선택"
          />
          <DropdownSelect
            inputSize="md"
            label="오류 상태"
            forceState="error"
            errorText="항목을 선택해 주세요."
            options={[{ value: 'a', label: '옵션 A' }]}
            placeholder="선택하세요"
          />
          <DropdownSelect
            inputSize="md"
            label="성공 상태"
            forceState="success"
            successText="선택되었습니다."
            options={[{ value: 'a', label: '스마트버거 강남점' }]}
            defaultValue="a"
          />
          <DropdownSelect
            inputSize="md"
            label="비활성"
            disabled
            options={[{ value: 'a', label: '옵션 A' }]}
            defaultValue="a"
          />
          <DropdownSelect
            inputSize="md"
            label="로딩"
            loading
            options={[]}
            placeholder="불러오는 중..."
          />
        </div>

        <Sub>레이블 위치</Sub>
        <div className="space-y-3 max-w-lg">
          <DropdownSelect
            inputSize="md"
            label="사업장"
            labelPosition="left"
            labelWidth="w-20"
            options={[
              { value: 'g', label: '강남점' },
              { value: 's', label: '서초점' },
            ]}
            placeholder="사업장 선택"
          />
          <DropdownSelect
            inputSize="md"
            label="카테고리"
            labelPosition="left"
            labelWidth="w-20"
            options={[
              { value: 'm', label: '메인 메뉴' },
              { value: 's', label: '사이드' },
              { value: 'd', label: '음료·디저트' },
            ]}
            placeholder="카테고리 선택"
          />
        </div>
      </Section>

      {/* ── 커스텀 드롭다운 셀렉트 아이템 ── */}
      <Section title="드롭다운 셀렉트 — 아이템 설계" desc="native select 대신 커스텀 드롭다운으로 옵션 항목을 자유롭게 디자인">

        <Sub>기본 + 검색 가능</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DropdownSelect
            label="기본 드롭다운"
            placeholder="선택하세요"
            options={[
              { value: 'waiting',   label: '대기중' },
              { value: 'preparing', label: '준비중' },
              { value: 'done',      label: '완료' },
              { value: 'cancel',    label: '취소', disabled: true },
            ]}
          />
          <DropdownSelect
            label="검색 가능 (searchable)"
            placeholder="사업장 선택"
            searchable
            options={[
              { value: 'g', label: '스마트버거 강남점' },
              { value: 's', label: '스마트버거 서초점' },
              { value: 'h', label: '스마트버거 홍대점' },
              { value: 'b', label: '스마트버거 부산점' },
              { value: 'i', label: '스마트버거 인천점' },
            ]}
          />
        </div>

        <Sub>아이콘 + 설명 포함 아이템</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DropdownSelect
            label="아이콘 포함"
            placeholder="카테고리 선택"
            options={[
              { value: 'm', label: '메인 메뉴',     icon: <Tag size={13} />,      description: '버거, 세트 메뉴' },
              { value: 's', label: '사이드',         icon: <Tag size={13} />,      description: '감자튀김, 샐러드' },
              { value: 'd', label: '음료·디저트',    icon: <Tag size={13} />,      description: '탄산음료, 커피, 디저트' },
            ]}
          />
          <DropdownSelect
            label="뱃지 포함"
            placeholder="사용자 선택"
            options={[
              { value: 'a', label: '관리자',    icon: <User size={13} />, badge: <TagBadge color="orange" variant="soft" size="sm">어드민</TagBadge> },
              { value: 'b', label: '운영자',    icon: <User size={13} />, badge: <TagBadge color="blue" variant="soft" size="sm">매니저</TagBadge> },
              { value: 'c', label: '직원 A',    icon: <User size={13} />, badge: <TagBadge color="gray" variant="soft" size="sm">스태프</TagBadge> },
              { value: 'd', label: '직원 B',    icon: <User size={13} />, badge: <TagBadge color="gray" variant="soft" size="sm">스태프</TagBadge>, disabled: true },
            ]}
          />
        </div>

        <Sub>그룹 헤더</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DropdownSelect
            label="그룹별 옵션"
            placeholder="지점 선택"
            searchable
            options={[
              { value: 'sg', label: '강남점', group: '서울', icon: <Building2 size={13} /> },
              { value: 'ss', label: '서초점', group: '서울', icon: <Building2 size={13} /> },
              { value: 'sh', label: '홍대점', group: '서울', icon: <Building2 size={13} /> },
              { value: 'bg', label: '해운대점', group: '부산', icon: <Building2 size={13} /> },
              { value: 'bs', label: '서면점',  group: '부산', icon: <Building2 size={13} /> },
              { value: 'ig', label: '송도점',  group: '인천', icon: <Building2 size={13} /> },
            ]}
          />
          <DropdownSelect
            label="QR 유형"
            placeholder="유형 선택"
            options={[
              { value: 't1', label: 'QR 테이블 주문', group: '주문형',   icon: <QrCode size={13} />, description: '테이블에서 직접 주문' },
              { value: 't2', label: 'QR 포장 주문',   group: '주문형',   icon: <QrCode size={13} />, description: '카운터 픽업' },
              { value: 'i1', label: 'QR 정보 안내',   group: '안내형',   icon: <QrCode size={13} />, description: '메뉴판 열람 전용' },
            ]}
          />
        </div>

        <Sub>상태 (드롭다운)</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <DropdownSelect label="오류" forceState="error" errorText="선택 필수 항목입니다." options={[{ value: 'a', label: 'A' }]} placeholder="선택하세요" />
          <DropdownSelect label="성공" forceState="success" successText="선택되었습니다." options={[{ value: 'a', label: '강남점' }]} defaultValue="a" />
          <DropdownSelect label="비활성" disabled options={[{ value: 'a', label: '강남점' }]} defaultValue="a" />
        </div>
      </Section>
    </div>
  );
}