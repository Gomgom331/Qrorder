import { useState } from 'react';
import { CheckboxField, CheckboxGroup, CheckboxSize } from '../components/ui/CheckboxField';
import { RadioField, RadioGroup, RadioSize } from '../components/ui/RadioField';
import { Toggle, ToggleSize } from '../components/ui/Toggle';
import { DropdownSelect } from '../components/ui/DropdownSelect';

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
  return <p className="text-xs font-medium text-slate-500 mb-3 mt-6 first:mt-0 uppercase tracking-wide">{children}</p>;
}

function Divider() {
  return <div className="border-t border-slate-100 my-5" />;
}

// ─── State rows ───────────────────────────────────────────────────
const CHECKBOX_STATES: {
  key: string;
  label: string;
  badge: string;
  forceState?: 'default' | 'hover' | 'focus' | 'checked' | 'indeterminate' | 'disabled';
  desc: string;
}[] = [
  { key: 'default',       label: 'Default',       badge: 'bg-slate-100 text-slate-500',    desc: '기본 — 미선택',        forceState: 'default' },
  { key: 'hover',         label: 'Hover',         badge: 'bg-blue-50 text-blue-600',        desc: ':hover',               forceState: 'hover' },
  { key: 'focus',         label: 'Focus',         badge: 'bg-orange-50 text-[#FF6B2B]',     desc: 'focus-visible',         forceState: 'focus' },
  { key: 'checked',       label: 'Checked',       badge: 'bg-orange-100 text-orange-700',   desc: '선택됨',               forceState: 'checked' },
  { key: 'indeterminate', label: 'Indeterminate', badge: 'bg-purple-50 text-purple-600',    desc: '부분 선택',             forceState: 'indeterminate' },
  { key: 'disabled',      label: 'Disabled',      badge: 'bg-slate-100 text-slate-400',     desc: '비활성화',              forceState: 'disabled' },
];

const RADIO_STATES: {
  key: string;
  label: string;
  badge: string;
  forceState?: 'default' | 'hover' | 'focus' | 'checked' | 'disabled';
  desc: string;
}[] = [
  { key: 'default',  label: 'Default',  badge: 'bg-slate-100 text-slate-500',   desc: '기본 — 미선택',   forceState: 'default' },
  { key: 'hover',    label: 'Hover',    badge: 'bg-blue-50 text-blue-600',       desc: ':hover',          forceState: 'hover' },
  { key: 'focus',    label: 'Focus',    badge: 'bg-orange-50 text-[#FF6B2B]',    desc: 'focus-visible',    forceState: 'focus' },
  { key: 'checked',  label: 'Checked',  badge: 'bg-orange-100 text-orange-700',  desc: '선택됨',          forceState: 'checked' },
  { key: 'disabled', label: 'Disabled', badge: 'bg-slate-100 text-slate-400',    desc: '비활성화',         forceState: 'disabled' },
];

// ─── Page ────────────────────────────────────────────────────────
export function CheckboxRadioGuide() {
  // Checkbox interactive demos
  const [toppings, setToppings] = useState<Record<string, boolean>>({
    cheese: true, onion: false, pickle: false, mustard: true,
  });
  const [permissions, setPermissions] = useState<Record<string, boolean>>({
    read: true, write: true, delete: false, admin: false,
  });

  const allChecked = Object.values(toppings).every(Boolean);
  const someChecked = Object.values(toppings).some(Boolean) && !allChecked;
  const toggleAll = () => {
    const next = !allChecked;
    setToppings(Object.fromEntries(Object.keys(toppings).map((k) => [k, next])));
  };

  // Radio interactive demos
  const [orderStatus, setOrderStatus] = useState('preparing');
  const [payMethod, setPayMethod] = useState('card');
  const [deliveryType, setDeliveryType] = useState('');

  return (
    <div className="p-5 lg:p-6 space-y-4">
      <div>
        <h2 className="text-slate-800">체크박스 · 라디오</h2>
        <p className="text-sm text-slate-400 mt-1">버튼 사이즈(SM/MD/LG) 기준으로 통일된 체크박스·라디오 컴포넌트 가이드</p>
      </div>

      {/* ════ CHECKBOX ════ */}
      <div className="bg-[#FF6B2B]/5 border border-[#FF6B2B]/20 rounded-[4px] px-4 py-2">
        <p className="text-sm font-medium text-[#FF6B2B]">체크박스 (Checkbox)</p>
      </div>

      {/* 사이즈 */}
      <Section title="사이즈 (SM · MD · LG)" desc="버튼 SM/MD/LG 높이에 대응하는 체크박스 크기">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {(['sm', 'md', 'lg'] as CheckboxSize[]).map((size) => (
            <div key={size} className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono bg-slate-800 text-white px-1.5 py-0.5 rounded-[3px]">{size.toUpperCase()}</span>
                <span className="text-xs text-slate-400">{size === 'sm' ? '14px · h-7 대응' : size === 'md' ? '16px · h-9 대응' : '18px · h-11 대응'}</span>
              </div>
              <CheckboxField size={size} label="미선택" />
              <CheckboxField size={size} label="선택됨" forceState="checked" />
              <CheckboxField size={size} label="부분 선택" forceState="indeterminate" />
              <CheckboxField size={size} label="비활성화" forceState="disabled" />
            </div>
          ))}
        </div>
      </Section>

      {/* 상태 */}
      <Section title="상태 (State)" desc="MD 사이즈 기준 6가지 상태">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CHECKBOX_STATES.map((s) => (
            <div key={s.key} className="flex flex-col items-start gap-2">
              <span className={`text-xs font-mono px-1.5 py-0.5 rounded-[3px] ${s.badge}`}>{s.label}</span>
              <CheckboxField size="md" label={s.desc} forceState={s.forceState} />
            </div>
          ))}
        </div>

        <Divider />

        {/* 비활성 checked */}
        <Sub>Disabled 조합</Sub>
        <div className="flex flex-wrap gap-6">
          <CheckboxField size="md" label="Disabled (미선택)" disabled />
          <CheckboxField size="md" label="Disabled (선택됨)" disabled checked readOnly />
          <CheckboxField size="md" label="Disabled (부분)" disabled indeterminate />
        </div>
      </Section>

      {/* 레이블 & 힌트 */}
      <Section title="레이블 & 힌트" desc="label + hint prop 조합">
        <div className="flex flex-wrap gap-6">
          <CheckboxField size="md" label="레이블만" />
          <CheckboxField size="md" label="레이블 + 힌트" hint="보조 설명이 표시됩니다." />
          <CheckboxField size="md" label="선택됨 + 힌트" hint="선택 시 즉시 적용됩니다." forceState="checked" />
          <CheckboxField size="sm" label="SM 힌트" hint="작은 사이즈" />
          <CheckboxField size="lg" label="LG 힌트" hint="큰 사이즈" />
        </div>
      </Section>

      {/* 그룹 */}
      <Section title="그룹 패턴" desc="CheckboxGroup 컴포넌트 — 수직/수평 배치">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* 수직 */}
          <CheckboxGroup label="토핑 선택 (수직)">
            {/* 전체선택 */}
            <CheckboxField
              size="md"
              label="전체 선택"
              checked={allChecked}
              indeterminate={someChecked}
              onChange={toggleAll}
            />
            <div className="ml-5 border-l border-slate-100 pl-3 space-y-2.5">
              {Object.entries(toppings).map(([key, val]) => (
                <CheckboxField
                  key={key}
                  size="md"
                  label={{ cheese: '치즈', onion: '양파', pickle: '피클', mustard: '머스터드' }[key] ?? key}
                  checked={val}
                  onChange={() => setToppings((p) => ({ ...p, [key]: !p[key] }))}
                />
              ))}
            </div>
          </CheckboxGroup>

          {/* 수평 */}
          <CheckboxGroup label="권한 설정 (수평)" direction="row">
            {Object.entries(permissions).map(([key, val]) => (
              <CheckboxField
                key={key}
                size="md"
                label={{ read: '읽기', write: '쓰기', delete: '삭제', admin: '관리자' }[key] ?? key}
                checked={val}
                onChange={() => setPermissions((p) => ({ ...p, [key]: !p[key] }))}
              />
            ))}
          </CheckboxGroup>
        </div>
      </Section>

      {/* 실사용 */}
      <Section title="실사용 예시" desc="약관 동의, 필터 등 실제 사용 패턴">
        <Sub>약관 동의</Sub>
        <div className="max-w-md space-y-2 bg-slate-50 rounded-[4px] p-4 border border-slate-100">
          <CheckboxField size="md" label="전체 동의" hint="서비스 이용약관, 개인정보 처리방침에 모두 동의합니다." />
          <div className="ml-5 border-l border-slate-200 pl-3 space-y-2 mt-3">
            <CheckboxField size="sm" label="(필수) 서비스 이용약관" />
            <CheckboxField size="sm" label="(필수) 개인정보 처리방침" />
            <CheckboxField size="sm" label="(선택) 마케팅 수신 동의" />
          </div>
        </div>

        <Sub>테이블 행 선택</Sub>
        <div className="border border-slate-200 rounded-[4px] overflow-hidden max-w-md">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="w-10 py-2.5 px-3"><CheckboxField size="sm" /></th>
                <th className="text-left py-2.5 text-slate-600">메뉴명</th>
                <th className="text-left py-2.5 text-slate-600">상태</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: '스마트버거', status: '판매중' },
                { name: '감자튀김', status: '품절' },
                { name: '콜라 (대)', status: '판매중' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="py-2.5 px-3">
                    <CheckboxField size="sm" checked={i === 0} readOnly />
                  </td>
                  <td className="py-2.5 text-slate-700">{row.name}</td>
                  <td className="py-2.5 text-slate-500">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ════ RADIO ════ */}
      <div className="bg-[#FF6B2B]/5 border border-[#FF6B2B]/20 rounded-[4px] px-4 py-2 mt-2">
        <p className="text-sm font-medium text-[#FF6B2B]">라디오 (Radio)</p>
      </div>

      {/* 사이즈 */}
      <Section title="사이즈 (SM · MD · LG)" desc="버튼 SM/MD/LG 높이에 대응하는 라디오 크기">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {(['sm', 'md', 'lg'] as RadioSize[]).map((size) => (
            <div key={size} className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono bg-slate-800 text-white px-1.5 py-0.5 rounded-[3px]">{size.toUpperCase()}</span>
                <span className="text-xs text-slate-400">{size === 'sm' ? '14px · h-7 대응' : size === 'md' ? '16px · h-9 대응' : '18px · h-11 대응'}</span>
              </div>
              <RadioField size={size} label="미선택" />
              <RadioField size={size} label="선택됨" forceState="checked" />
              <RadioField size={size} label="비활성화" forceState="disabled" />
            </div>
          ))}
        </div>
      </Section>

      {/* 상태 */}
      <Section title="상태 (State)" desc="MD 사이즈 기준 5가지 상태">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {RADIO_STATES.map((s) => (
            <div key={s.key} className="flex flex-col items-start gap-2">
              <span className={`text-xs font-mono px-1.5 py-0.5 rounded-[3px] ${s.badge}`}>{s.label}</span>
              <RadioField size="md" label={s.desc} forceState={s.forceState} />
            </div>
          ))}
        </div>
      </Section>

      {/* 레이블 & 힌트 */}
      <Section title="레이블 & 힌트" desc="label + hint prop 조합">
        <div className="flex flex-wrap gap-6">
          <RadioField size="md" label="레이블만" />
          <RadioField size="md" label="선택됨 + 힌트" hint="선택 시 즉시 적용됩니다." forceState="checked" />
          <RadioField size="sm" label="SM 힌트" hint="작은 사이즈" />
          <RadioField size="lg" label="LG 힌트" hint="큰 사이즈" />
        </div>
      </Section>

      {/* 라디오 그룹 */}
      <Section title="라디오 그룹 (RadioGroup)" desc="단일 선택 — 수직/수평 배치">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 주문 상태 */}
          <RadioGroup
            label="주문 상태 (수직)"
            name="order-status"
            value={orderStatus}
            onChange={setOrderStatus}
            size="md"
            options={[
              { value: 'waiting',   label: '대기중',  hint: '주문 접수 전' },
              { value: 'preparing', label: '준비중',  hint: '조리 중' },
              { value: 'done',      label: '완료',    hint: '픽업 가능' },
              { value: 'cancel',    label: '취소됨',  disabled: true },
            ]}
          />

          {/* 결제 방법 */}
          <RadioGroup
            label="결제 수단 (수직)"
            name="pay-method"
            value={payMethod}
            onChange={setPayMethod}
            size="md"
            options={[
              { value: 'card',   label: '신용/체크카드' },
              { value: 'cash',   label: '현금' },
              { value: 'kakao',  label: '카카오페이' },
              { value: 'naver',  label: '네이버페이' },
            ]}
          />

          {/* 배달 유형 */}
          <RadioGroup
            label="배달 유형 (수평)"
            name="delivery"
            value={deliveryType}
            onChange={setDeliveryType}
            direction="row"
            size="md"
            options={[
              { value: 'table', label: '테이블' },
              { value: 'take',  label: '포장' },
              { value: 'delivery', label: '배달' },
            ]}
          />
        </div>
      </Section>

      {/* SM 그룹 */}
      <Section title="SM 사이즈 그룹 (필터용)" desc="테이블 필터, 인라인 옵션 선택에 사용">
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <RadioGroup
            label="기간 필터"
            name="period"
            size="sm"
            direction="row"
            options={[
              { value: 'today', label: '오늘' },
              { value: 'week',  label: '이번 주' },
              { value: 'month', label: '이번 달' },
              { value: 'all',   label: '전체' },
            ]}
            defaultValue="today"
          />
        </div>
      </Section>

      {/* 실사용 */}
      <Section title="실사용 예시" desc="카드 형태 라디오 — 시각적으로 확장된 선택지">
        <Sub>카드형 라디오 (custom 조합)</Sub>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
          {[
            { value: 'basic',    label: '기본 플랜',    price: '무료',      desc: 'QR 1개, 메뉴 20개' },
            { value: 'pro',      label: '프로 플랜',    price: '₩29,000/월', desc: 'QR 5개, 메뉴 무제한' },
            { value: 'business', label: '비즈니스',     price: '₩79,000/월', desc: 'QR 무제한, 멀티 사업장' },
          ].map((opt) => (
            <label
              key={opt.value}
              className={[
                'flex flex-col gap-1 p-4 border rounded-[4px] cursor-pointer transition-all',
                deliveryType === opt.value
                  ? 'border-[#FF6B2B] bg-[#FF6B2B]/5'
                  : 'border-slate-200 hover:border-slate-300',
              ].join(' ')}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-800">{opt.label}</span>
                <input
                  type="radio"
                  name="plan"
                  value={opt.value}
                  checked={deliveryType === opt.value}
                  onChange={() => setDeliveryType(opt.value)}
                  className="sr-only"
                />
                <span className={[
                  'w-4 h-4 rounded-full border flex items-center justify-center shrink-0',
                  deliveryType === opt.value ? 'border-[#FF6B2B]' : 'border-slate-300',
                ].join(' ')}>
                  {deliveryType === opt.value && (
                    <span className="w-[6px] h-[6px] rounded-full bg-[#FF6B2B]" />
                  )}
                </span>
              </div>
              <span className="text-xs text-[#FF6B2B] font-medium">{opt.price}</span>
              <span className="text-xs text-slate-400">{opt.desc}</span>
            </label>
          ))}
        </div>
      </Section>

      {/* ════ TOGGLE/SWITCH ════ */}
      <div className="bg-[#FF6B2B]/5 border border-[#FF6B2B]/20 rounded-[4px] px-4 py-2 mt-2">
        <p className="text-sm font-medium text-[#FF6B2B]">토글 스위치 (Toggle / Switch)</p>
      </div>

      {/* 사이즈 */}
      <Section title="사이즈 (SM · MD · LG)" desc="버튼·인풋 사이즈와 통일된 토글 스위치 크기">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {(['sm', 'md', 'lg'] as ToggleSize[]).map((size) => (
            <div key={size} className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono bg-slate-800 text-white px-1.5 py-0.5 rounded-[3px]">{size.toUpperCase()}</span>
                <span className="text-xs text-slate-400">{size === 'sm' ? 'h-7 대응' : size === 'md' ? 'h-9 대응' : 'h-11 대응'}</span>
              </div>
              <Toggle size={size} forceState="off"  label="Off (기본)" />
              <Toggle size={size} forceState="on"   label="On (활성)" />
              <Toggle size={size} forceState="disabled" label="Disabled" />
              <Toggle size={size} forceState="loading" label="Loading" />
            </div>
          ))}
        </div>
      </Section>

      {/* 상태 */}
      <Section title="상태 (State) + 레이블 위치" desc="on · off · disabled · loading / 레이블 left · right">
        <Divider />
        <Sub>상태별 (MD)</Sub>
        <div className="flex flex-wrap gap-8">
          {[
            { label: 'Off',      state: 'off'      as const },
            { label: 'On',       state: 'on'       as const },
            { label: 'Disabled', state: 'disabled' as const },
            { label: 'Loading',  state: 'loading'  as const },
          ].map(({ label, state }) => (
            <div key={state} className="flex flex-col items-start gap-2">
              <span className="text-xs font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-[3px]">{label}</span>
              <Toggle size="md" forceState={state} />
            </div>
          ))}
        </div>

        <Divider />
        <Sub>레이블 위치</Sub>
        <div className="space-y-3 max-w-xs">
          <Toggle size="md" label="오른쪽 레이블 (기본)" labelPosition="right" forceState="on" />
          <Toggle size="md" label="왼쪽 레이블" labelPosition="left" forceState="on" />
          <Toggle size="md" label="힌트 포함" hint="저장 후 바로 적용됩니다." forceState="on" />
          <Toggle size="md" label="힌트 + 왼쪽" hint="설정 변경 시 재시작 필요" labelPosition="left" forceState="off" />
        </div>
      </Section>

      {/* 인터랙티브 */}
      <Section title="인터랙티브 예시" desc="실제 클릭으로 동작 확인">
        <ToggleInteractiveDemo />
      </Section>

      {/* 실사용 */}
      <Section title="실사용 패턴" desc="설정 패널, 테이블 상태 토글 등">
        <Sub>설정 패널</Sub>
        <ToggleSettingsDemo />

        <Sub className="mt-5">테이블 내 상태 토글</Sub>
        <ToggleTableDemo />
      </Section>

      {/* ════ DROPDOWN SELECT ════ */}
      <div className="bg-[#FF6B2B]/5 border border-[#FF6B2B]/20 rounded-[4px] px-4 py-2 mt-2">
        <p className="text-sm font-medium text-[#FF6B2B]">드롭다운 셀렉트 (DropdownSelect)</p>
      </div>

      <Section title="드롭업 자동 전환" desc="화면 아래쪽에 위치할 때 드롭리스트가 위로 열립니다">
        <p className="text-xs text-slate-400 mb-4">아래 셀렉트를 클릭하면 공간이 부족할 경우 자동으로 위쪽으로 열립니다.</p>
        <div className="h-[120px] flex items-end pb-2">
          <div className="w-56">
            <DropdownSelect
              options={[
                { value: 'a', label: '옵션 A' },
                { value: 'b', label: '옵션 B' },
                { value: 'c', label: '옵션 C' },
                { value: 'd', label: '옵션 D' },
                { value: 'e', label: '옵션 E' },
                { value: 'f', label: '옵션 F' },
              ]}
              placeholder="아래쪽 셀렉트 — 위로 열림"
            />
          </div>
        </div>
      </Section>

      <Section title="SearchInput 내 셀렉트 (검색카드 패턴)" desc="검색 카드 + InputField + DropdownSelect + 버튼 일관 패턴">
        <div className="bg-white rounded-[6px] border border-slate-200 p-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <DropdownSelect
                options={[
                  { value: 'all', label: '전체' },
                  { value: 'active', label: '활성' },
                  { value: 'inactive', label: '비활성' },
                ]}
                placeholder="상태 선택"
              />
            </div>
            <DropdownSelect
              className="w-full sm:w-40"
              options={[
                { value: 'name', label: '이름순' },
                { value: 'date', label: '등록일순' },
                { value: 'amount', label: '금액순' },
              ]}
              placeholder="정렬"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

// ─── Toggle interactive ──────────────────────────────────────────
function ToggleInteractiveDemo() {
  const [states, setStates] = useState<Record<string, boolean>>({
    a: false, b: true, c: false, d: true,
  });
  const toggle = (k: string) => setStates((p) => ({ ...p, [k]: !p[k] }));
  return (
    <div className="flex flex-wrap gap-8">
      {(['sm', 'md', 'lg'] as ToggleSize[]).map((size) => (
        <div key={size} className="space-y-3">
          <span className="text-xs font-mono text-slate-400">{size}</span>
          <Toggle size={size} checked={states.a} onChange={() => toggle('a')} label="알림 수신" />
          <Toggle size={size} checked={states.b} onChange={() => toggle('b')} label="자동 저장" hint="30초마다 저장" />
          <Toggle size={size} checked={states.c} onChange={() => toggle('c')} label="다크 모드" />
          <Toggle size={size} disabled label="비활성 옵션" />
        </div>
      ))}
    </div>
  );
}

function ToggleSettingsDemo() {
  const [settings, setSettings] = useState({
    notification: true, sound: false, auto: true, sync: true, analytics: false,
  });
  const set = (k: keyof typeof settings) => (v: boolean) => setSettings((p) => ({ ...p, [k]: v }));
  const items = [
    { key: 'notification' as const, label: '주문 알림',    hint: '새 주문 접수 시 알림' },
    { key: 'sound'        as const, label: '알림 소리',    hint: '알림 수신 시 소리 재생' },
    { key: 'auto'         as const, label: '자동 새로고침', hint: '30초마다 주문 목록 갱신' },
    { key: 'sync'         as const, label: '실시간 동기화', hint: '웹소켓 연결 유지' },
    { key: 'analytics'   as const, label: '분석 데이터 수집', hint: '사용 패턴 익명 수집 (선택)', },
  ];
  return (
    <div className="border border-slate-200 rounded-[4px] divide-y divide-slate-100 max-w-sm">
      {items.map(({ key, label, hint }) => (
        <div key={key} className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm text-slate-700">{label}</p>
            <p className="text-xs text-slate-400 mt-0.5">{hint}</p>
          </div>
          <Toggle size="sm" checked={settings[key]} onChange={set(key)} />
        </div>
      ))}
    </div>
  );
}

function ToggleTableDemo() {
  const [items, setItems] = useState([
    { id: 1, name: '스마트버거', active: true },
    { id: 2, name: '더블 치즈버거', active: true },
    { id: 3, name: '베이컨버거', active: false },
    { id: 4, name: '감자튀김 (S)', active: true },
  ]);
  const toggle = (id: number) => setItems((p) => p.map((r) => r.id === id ? { ...r, active: !r.active } : r));
  return (
    <div className="border border-slate-200 rounded-[4px] overflow-hidden max-w-sm">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="text-left py-2.5 px-4 text-xs font-medium text-slate-500">메뉴명</th>
            <th className="text-left py-2.5 px-3 text-xs font-medium text-slate-500">판매</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <tr key={row.id} className="border-b border-slate-100 last:border-0">
              <td className="py-2.5 px-4 text-slate-700">{row.name}</td>
              <td className="py-2.5 px-3">
                <Toggle size="sm" checked={row.active} onChange={() => toggle(row.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}