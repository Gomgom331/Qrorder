import { useState } from 'react';
import {
  Plus, Search, Download, Trash2, Save, QrCode, ChevronRight,
  Check, X, Bell, Settings, Sun, Moon, AlignLeft, AlignCenter, AlignRight,
  Bold, Italic, Underline, ChevronUp, ChevronDown,
  ExternalLink, Globe, LogIn, Eye,
} from 'lucide-react';
import { Button, ButtonVariant, ButtonSize, btnSizeMap, LinkButton } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { CheckboxField } from '../components/ui/CheckboxField';
import { InlineEditTable, useInlineTable, InlineRow } from '../components/ui/InlineEditTable';

// ─── InlineEditTable Demo ─────────────────────────────────────────

interface MenuRow extends InlineRow {
  id: number | string;
  name: string;
  price: string;
  usable: boolean;
  isNew?: boolean;
}

const MENU_COLUMNS = [
  { key: 'name'   as const, label: '메뉴명',  type: 'input'   as const, placeholder: '메뉴명' },
  { key: 'price'  as const, label: '가격',    type: 'input'   as const, placeholder: '0', className: 'w-28' },
  { key: 'usable' as const, label: '사용여부', type: 'checkbox' as const, className: 'w-20 text-center' },
];

const MENU_DEFAULTS = { name: '', price: '0', usable: true };

const INITIAL_MENU_ROWS: MenuRow[] = [
  { id: 1, name: '스마트버거',    price: '8,900',  usable: true  },
  { id: 2, name: '더블 치즈버거', price: '10,900', usable: true  },
  { id: 3, name: '베이컨버거',   price: '9,500',  usable: false },
];

function TableInlineDemo() {
  const { rows, setRows, selectedId, setSelectedId, savedMsg, handleSave } =
    useInlineTable<MenuRow>(INITIAL_MENU_ROWS);

  return (
    <InlineEditTable<MenuRow>
      title="메뉴 목록"
      columns={MENU_COLUMNS}
      rows={rows}
      selectedId={selectedId}
      onSelect={setSelectedId}
      onChange={setRows}
      newRowDefaults={MENU_DEFAULTS}
      onSave={handleSave}
      savedMsg={savedMsg}
      emptyText="메뉴가 없습니다. 행추가로 등록하세요."
    />
  );
}

function EditableTableDemo() {
  const [rows, setRows] = useState([
    { id: 1, name: '콜라 M', qty: 2, price: 1900 },
    { id: 2, name: '감자튀김 S', qty: 1, price: 2900 },
  ]);
  const update = (id: number, key: string, val: string) =>
    setRows((p) => p.map((r) => r.id === id ? { ...r, [key]: val } : r));
  const addRow = () => setRows((p) => [...p, { id: Date.now(), name: '', qty: 1, price: 0 }]);
  const delRow = (id: number) => setRows((p) => p.filter((r) => r.id !== id));

  return (
    <div className="border border-slate-200 rounded-[4px] overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="text-left py-2 px-3 text-xs font-medium text-slate-500">상품명</th>
            <th className="text-left py-2 px-3 text-xs font-medium text-slate-500 w-20">수량</th>
            <th className="text-left py-2 px-3 text-xs font-medium text-slate-500 w-24">단가</th>
            <th className="text-left py-2 px-3 text-xs font-medium text-slate-500 w-24">금액</th>
            <th className="w-8"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-slate-100 last:border-0">
              <td className="py-1.5 px-2">
                <input value={row.name} onChange={(e) => update(row.id, 'name', e.target.value)}
                  className="w-full h-8 px-2 text-sm border border-transparent hover:border-slate-200 focus:border-[#FF6B2B] rounded-[3px] outline-none transition-colors" placeholder="상품명" />
              </td>
              <td className="py-1.5 px-2">
                <input type="number" value={row.qty} onChange={(e) => update(row.id, 'qty', e.target.value)}
                  className="w-full h-8 px-2 text-sm border border-transparent hover:border-slate-200 focus:border-[#FF6B2B] rounded-[3px] outline-none transition-colors text-right" />
              </td>
              <td className="py-1.5 px-2">
                <input type="number" value={row.price} onChange={(e) => update(row.id, 'price', e.target.value)}
                  className="w-full h-8 px-2 text-sm border border-transparent hover:border-slate-200 focus:border-[#FF6B2B] rounded-[3px] outline-none transition-colors text-right" />
              </td>
              <td className="py-1.5 px-3 text-right text-sm text-slate-700">
                ₩{(Number(row.qty) * Number(row.price)).toLocaleString()}
              </td>
              <td className="py-1.5 px-2">
                <button onClick={() => delRow(row.id)} className="text-slate-300 hover:text-red-400 transition-colors p-1">
                  <X size={13} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-slate-50 border-t border-slate-200">
            <td colSpan={3} className="py-2 px-3 text-xs font-medium text-slate-500 text-right">합계</td>
            <td className="py-2 px-3 text-sm font-semibold text-slate-800 text-right">
              ₩{rows.reduce((s, r) => s + Number(r.qty) * Number(r.price), 0).toLocaleString()}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <div className="border-t border-slate-100 px-3 py-2">
        <button onClick={addRow}
          className="flex items-center gap-1 text-xs text-[#FF6B2B] hover:bg-[#FF6B2B]/10 px-2 py-1.5 rounded-[3px] transition-colors">
          <Plus size={12} /> 항목 추가
        </button>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────
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

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-slate-400 mb-2 mt-4 first:mt-0">{children}</p>;
}

function Row({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="py-3 border-b border-slate-100 last:border-0">
      {label && <p className="text-xs font-mono text-slate-400 mb-2">{label}</p>}
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

// ─── Simulated state button (forces visual appearance) ──────────
interface DemoButtonProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}

function StateLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      {children}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────
export function ButtonGuide() {
  const [toggleMap, setToggleMap] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setToggleMap((p) => ({ ...p, [key]: !p[key] }));
  const simulateLoad = (key: string) => {
    setLoading((p) => ({ ...p, [key]: true }));
    setTimeout(() => setLoading((p) => ({ ...p, [key]: false })), 2000);
  };

  return (
    <div className="p-5 lg:p-6 space-y-4">
      <div>
        <h2 className="text-slate-800">버튼 컴포넌트</h2>
        <p className="text-sm text-slate-400 mt-1">3가지 사이즈 × 10가지 타입 × 7가지 상태의 버튼 컴포넌트 가이드</p>
      </div>

      {/* Size reference */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <p className="text-xs font-medium text-slate-600 mb-3">사이즈 기준 (인풋 높이와 동일)</p>
        <div className="flex flex-wrap gap-6">
          {([
            { label: 'SM', size: 'sm' as ButtonSize, height: '28px (h-7)', use: '테이블 내 액션, 인라인 버튼' },
            { label: 'MD', size: 'md' as ButtonSize, height: '36px (h-9)', use: '기본 폼 제출, 일반 액션 ↔ Input MD' },
            { label: 'LG', size: 'lg' as ButtonSize, height: '44px (h-11)', use: '주요 CTA, 로그인 ↔ Input LG' },
          ]).map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-[3px]">{s.label}</span>
              <div>
                <span className="text-xs text-slate-700">{s.height}</span>
                <span className="text-xs text-slate-400 ml-2">— {s.use}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 1. Types ── */}
      <Section title="타입 (Type)" desc="10가지 버튼 타입 — MD 사이즈 기준">
        <Row label="primary">
          <Button variant="primary" size="md">저장</Button>
          <Button variant="primary" size="md" leftIcon={<Plus size={15} />}>신규 등록</Button>
          <Button variant="primary" size="md" rightIcon={<ChevronRight size={15} />}>다음 단계</Button>
        </Row>
        <Row label="secondary">
          <Button variant="secondary" size="md">취소</Button>
          <Button variant="secondary" size="md" leftIcon={<Download size={15} />}>내보내기</Button>
        </Row>
        <Row label="outline">
          <Button variant="outline" size="md">초기화</Button>
          <Button variant="outline" size="md" leftIcon={<Search size={15} />}>조회</Button>
        </Row>
        <Row label="ghost">
          <Button variant="ghost" size="md">더 보기</Button>
          <Button variant="ghost" size="md" leftIcon={<Settings size={15} />}>설정</Button>
        </Row>
        <Row label="danger">
          <Button variant="danger" size="md">삭제</Button>
          <Button variant="danger" size="md" leftIcon={<Trash2 size={15} />}>전체 삭제</Button>
        </Row>
        <Row label="text">
          <Button variant="text" size="md">전체 보기</Button>
          <Button variant="text" size="md" rightIcon={<ChevronRight size={15} />}>더 보기</Button>
        </Row>
        <Row label="link">
          <Button variant="link" size="md">비밀번호 찾기</Button>
          <Button variant="link" size="md">이용약관 보기</Button>
        </Row>
        <Row label="icon">
          <Button variant="icon" size="sm" iconOnly={<Search size={13} />} />
          <Button variant="icon" size="md" iconOnly={<Bell size={15} />} />
          <Button variant="icon" size="lg" iconOnly={<Settings size={17} />} />
          <Button variant="icon" size="md" iconOnly={<Plus size={15} />} className="text-[#FF6B2B] hover:bg-[#FF6B2B]/10" />
          <Button variant="icon" size="md" iconOnly={<Trash2 size={15} />} className="text-red-400 hover:bg-red-50" />
        </Row>
        <Row label="icon-text">
          <Button variant="icon-text" size="md" leftIcon={<QrCode size={15} />}>QR 생성</Button>
          <Button variant="icon-text" size="md" leftIcon={<Plus size={15} />}>추가</Button>
          <Button variant="icon-text" size="sm" leftIcon={<Save size={13} />}>저장</Button>
        </Row>
        <Row label="toggle (클릭해보세요)">
          <Button variant="toggle" size="md" selected={toggleMap['t1']} onClick={() => toggle('t1')}>
            {toggleMap['t1'] ? <><Check size={15} /> 선택됨</> : '선택'}
          </Button>
          <Button variant="toggle" size="md" leftIcon={<Sun size={15} />} selected={!toggleMap['theme']} onClick={() => toggle('theme')}>라이트</Button>
          <Button variant="toggle" size="md" leftIcon={<Moon size={15} />} selected={toggleMap['theme']} onClick={() => toggle('theme')}>다크</Button>
        </Row>
      </Section>

      {/* ── 2. Sizes × Types ── */}
      <Section title="사이즈 비교 (SM · MD · LG)" desc="주요 타입의 3가지 사이즈 비교">
        {(['primary', 'secondary', 'outline', 'danger'] as ButtonVariant[]).map((variant) => (
          <Row key={variant} label={variant}>
            {(['sm', 'md', 'lg'] as ButtonSize[]).map((size) => (
              <div key={size} className="flex flex-col items-center gap-1">
                <Button variant={variant} size={size}>{variant === 'primary' ? '저장' : variant === 'secondary' ? '취소' : variant === 'outline' ? '조회' : '삭제'}</Button>
                <span className="text-[10px] text-slate-400 font-mono">{size}</span>
              </div>
            ))}
          </Row>
        ))}
        <Row label="icon (square)">
          {(['sm', 'md', 'lg'] as ButtonSize[]).map((size) => (
            <div key={size} className="flex flex-col items-center gap-1">
              <Button variant="icon" size={size} iconOnly={<Bell size={btnSizeMap[size].icon} />} className="text-slate-500 hover:bg-slate-100" />
              <span className="text-[10px] text-slate-400 font-mono">{size}</span>
            </div>
          ))}
        </Row>
      </Section>

      {/* ── 3. States ── */}
      <Section title="상태 (State)" desc="7가지 버튼 상태 — primary MD 기준. hover·active·focus는 직접 조작으로 확인">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

          <StateLabel>
            <Button variant="primary" size="md">Default</Button>
            <span className="text-xs text-slate-400">default</span>
          </StateLabel>

          <StateLabel>
            {/* Simulated hover */}
            <button className="inline-flex items-center justify-center font-medium transition-colors h-9 px-3.5 text-sm rounded-[4px] bg-[#E85D20] text-white">
              Hover
            </button>
            <span className="text-xs text-slate-400">:hover (시뮬레이션)</span>
          </StateLabel>

          <StateLabel>
            {/* Simulated active */}
            <button className="inline-flex items-center justify-center font-medium transition-colors h-9 px-3.5 text-sm rounded-[4px] bg-[#D15118] text-white">
              Active
            </button>
            <span className="text-xs text-slate-400">:active (시뮬레이션)</span>
          </StateLabel>

          <StateLabel>
            {/* Simulated focus-visible */}
            <button className="inline-flex items-center justify-center font-medium transition-colors h-9 px-3.5 text-sm rounded-[4px] bg-[#FF6B2B] text-white ring-2 ring-[#FF6B2B]/40 outline-none">
              Focus
            </button>
            <span className="text-xs text-slate-400">focus-visible</span>
          </StateLabel>

          <StateLabel>
            <Button variant="primary" size="md" disabled>Disabled</Button>
            <span className="text-xs text-slate-400">disabled</span>
          </StateLabel>

          <StateLabel>
            <Button
              variant="primary"
              size="md"
              loading={loading['demo']}
              onClick={() => simulateLoad('demo')}
            >
              {loading['demo'] ? '처리중...' : 'Loading →'}
            </Button>
            <span className="text-xs text-slate-400">loading (클릭)</span>
          </StateLabel>

          <StateLabel>
            <Button variant="toggle" size="md" selected>Selected</Button>
            <span className="text-xs text-slate-400">selected (toggle)</span>
          </StateLabel>

          <StateLabel>
            <Button variant="toggle" size="md" selected={false}>Unselected</Button>
            <span className="text-xs text-slate-400">unselected (toggle)</span>
          </StateLabel>
        </div>

        {/* All variants disabled */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <p className="text-xs font-mono text-slate-400 mb-3">disabled — 전체 타입</p>
          <div className="flex flex-wrap gap-2">
            {(['primary', 'secondary', 'outline', 'ghost', 'danger'] as ButtonVariant[]).map((v) => (
              <Button key={v} variant={v} size="md" disabled>{v}</Button>
            ))}
          </div>
        </div>

        {/* All variants loading */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <p className="text-xs font-mono text-slate-400 mb-3">loading — 전체 타입</p>
          <div className="flex flex-wrap gap-2">
            {(['primary', 'secondary', 'outline', 'ghost', 'danger'] as ButtonVariant[]).map((v) => (
              <Button key={v} variant={v} size="md" loading>{v}</Button>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 4. Toggle group examples ── */}
      <Section title="토글 그룹 패턴" desc="icon + toggle 조합으로 셀렉터 구현">
        <Label>텍스트 정렬</Label>
        <div className="flex">
          {([
            { key: 'align', val: 'left',   icon: <AlignLeft size={15} />,   label: 'left' },
            { key: 'align', val: 'center', icon: <AlignCenter size={15} />, label: 'center' },
            { key: 'align', val: 'right',  icon: <AlignRight size={15} />,  label: 'right' },
          ]).map(({ key, val, icon, label }, i) => (
            <Button
              key={val}
              variant="toggle"
              size="md"
              selected={toggleMap[key] === undefined ? val === 'left' : toggleMap[key] === val}
              onClick={() => setToggleMap((p) => ({ ...p, [key]: val }))}
              iconOnly={icon}
              className={`rounded-none border-r-0 last:border-r last:rounded-r-[4px] first:rounded-l-[4px] ${i === 0 ? 'rounded-l-[4px]' : ''}`}
            />
          ))}
        </div>

        <Label>텍스트 스타일</Label>
        <div className="flex gap-2">
          {([
            { key: 'bold',      icon: <Bold size={15} />,      label: 'B' },
            { key: 'italic',    icon: <Italic size={15} />,    label: 'I' },
            { key: 'underline', icon: <Underline size={15} />, label: 'U' },
          ]).map(({ key, icon }) => (
            <Button
              key={key}
              variant="toggle"
              size="md"
              selected={!!toggleMap[key]}
              onClick={() => toggle(key)}
              iconOnly={icon}
            />
          ))}
        </div>

        <Label>보기 설정</Label>
        <div className="flex gap-1.5">
          {([
            { key: 'view', val: 'list', label: '리스트' },
            { key: 'view', val: 'grid', label: '그리드' },
            { key: 'view', val: 'card', label: '카드' },
          ]).map(({ key, val, label }) => (
            <Button
              key={val}
              variant="toggle"
              size="sm"
              selected={toggleMap[key] === undefined ? val === 'list' : toggleMap[key] === val}
              onClick={() => setToggleMap((p) => ({ ...p, [key]: val }))}
            >
              {label}
            </Button>
          ))}
        </div>
      </Section>

      {/* ── 5. Real-world button combos ── */}
      <Section title="실사용 조합 예시" desc="폼 하단, 모달 푸터, 테이블 액션 등 실제 사용 패턴">
        <Label>폼 제출 (우측 정렬)</Label>
        <div className="flex justify-end gap-2 border border-slate-100 rounded-[4px] p-3 bg-slate-50">
          <Button variant="ghost" size="md">초기화</Button>
          <Button variant="secondary" size="md">임시저장</Button>
          <Button variant="primary" size="md" leftIcon={<Save size={15} />}>저장</Button>
        </div>

        <Label>모달 풋터</Label>
        <div className="flex justify-end gap-2 border border-slate-100 rounded-[4px] p-3 bg-slate-50">
          <Button variant="ghost" size="md">취소</Button>
          <Button variant="danger" size="md" leftIcon={<Trash2 size={15} />}>삭제</Button>
        </div>

        <Label>테이블 인라인 아이콘 액션 (SM)</Label>
        <div className="flex items-center gap-1.5 border border-slate-100 rounded-[4px] p-3 bg-slate-50">
          <span className="text-sm text-slate-600 flex-1">스마트버거 강남점</span>
          <Button variant="icon" size="sm" iconOnly={<Settings size={13} />} />
          <Button variant="icon" size="sm" iconOnly={<Trash2 size={13} />} className="text-red-400 hover:bg-red-50" />
        </div>

        <Label>검색 바</Label>
        <div className="flex gap-2 border border-slate-100 rounded-[4px] p-3 bg-slate-50">
          <input className="flex-1 h-9 border border-slate-200 rounded-[4px] px-3 text-sm focus:outline-none focus:border-[#FF6B2B]" placeholder="검색어 입력" />
          <Button variant="outline" size="md">초기화</Button>
          <Button variant="primary" size="md" leftIcon={<Search size={15} />}>조회</Button>
        </div>
      </Section>

      {/* ── 6. Table inline text buttons ── */}
      <Section title="테이블 인라인 텍스트 버튼" desc="행 추가 · 행 삭제 · 순서 변경 등 테이블 내부에서 사용하는 텍스트/아이콘 조합 버튼">
        <Label>행 추가 / 행 삭제 패턴</Label>
        <TableInlineDemo />

        <Label>인라인 편집 가능 테이블</Label>
        <EditableTableDemo />
      </Section>

      {/* ── 7. Link Button ── */}
      <Section title="링크 버튼 (LinkButton)" desc="<a> 태그 기반 버튼. target=_blank 시 외부링크 아이콘 자동 표시. 접속·미리보기 등 URL 이동 액션에 사용">
        <Row label="variant — primary (접속)">
          <LinkButton variant="primary" size="sm" href="#" target="_blank">접속</LinkButton>
          <LinkButton variant="primary" size="md" href="#" target="_blank">접속</LinkButton>
          <LinkButton variant="primary" size="lg" href="#" target="_blank">접속</LinkButton>
        </Row>
        <Row label="variant — outline (미리보기 · 상세)">
          <LinkButton variant="outline" size="sm" href="#" target="_blank">미리보기</LinkButton>
          <LinkButton variant="outline" size="md" href="#" target="_blank">미리보기</LinkButton>
          <LinkButton variant="outline" size="md" leftIcon={<Eye size={15} />} href="#" target="_blank">상세 보기</LinkButton>
        </Row>
        <Row label="variant — secondary · ghost · danger">
          <LinkButton variant="secondary" size="md" href="#" target="_blank">이동</LinkButton>
          <LinkButton variant="ghost" size="md" href="#" target="_blank">바로가기</LinkButton>
          <LinkButton variant="danger" size="md" href="#" target="_blank">강제 접속</LinkButton>
        </Row>
        <Row label="leftIcon 직접 지정">
          <LinkButton variant="primary" size="md" leftIcon={<Globe size={15} />} href="#" target="_blank">사이트 접속</LinkButton>
          <LinkButton variant="outline" size="md" leftIcon={<LogIn size={15} />} href="#">관리자 로그인</LinkButton>
          <LinkButton variant="secondary" size="md" leftIcon={<ExternalLink size={15} />} href="#" target="_blank">외부 링크</LinkButton>
        </Row>
        <Row label="disabled 상태">
          <LinkButton variant="primary" size="md" href="#" target="_blank" disabled>접속 (비활성)</LinkButton>
          <LinkButton variant="outline" size="md" href="#" target="_blank" disabled>미리보기 (비활성)</LinkButton>
        </Row>

        {/* 실사용 테이블 예시 */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <p className="text-xs font-mono text-slate-400 mb-3">실사용 예시 — 테이블 행 내 접속 버튼</p>
          <div className="border border-slate-200 rounded-[4px] overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-2 px-3 text-xs font-medium text-slate-500">매장명</th>
                  <th className="text-left py-2 px-3 text-xs font-medium text-slate-500">도메인</th>
                  <th className="text-left py-2 px-3 text-xs font-medium text-slate-500">상태</th>
                  <th className="text-left py-2 px-3 text-xs font-medium text-slate-500 w-32">접속</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: '스마트버거 강남점', domain: 'smartburger-gn.qrorder.kr', status: '운영중', ok: true },
                  { name: '더맛집 홍대점', domain: 'thematjip-hd.qrorder.kr', status: '점검중', ok: false },
                  { name: '카페인블루 신촌점', domain: 'cafeinblue-sc.qrorder.kr', status: '운영중', ok: true },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                    <td className="py-2.5 px-3 text-slate-700">{row.name}</td>
                    <td className="py-2.5 px-3 text-slate-400 text-xs font-mono">{row.domain}</td>
                    <td className="py-2.5 px-3">
                      <span className={`text-xs px-1.5 py-0.5 rounded-[3px] ${row.ok ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      <LinkButton
                        variant={row.ok ? 'primary' : 'outline'}
                        size="sm"
                        href={row.ok ? `https://${row.domain}` : undefined}
                        target="_blank"
                        disabled={!row.ok}
                      >
                        접속
                      </LinkButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </div>
  );
}