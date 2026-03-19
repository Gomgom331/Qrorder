import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

// ─── 타입 ─────────────────────────────────────────────────────────
interface ColorToken {
  name: string;
  variable: string;   // CSS 변수명 (--color-primary-50)
  hex: string;
  usage?: string;
  isAlias?: boolean;  // 시맨틱 앨리어스 여부
  aliasOf?: string;   // 어떤 변수의 별칭인지
}

interface ColorGroup {
  group: string;
  role: string;
  badge: string;
  badgeColor: string;
  colors: ColorToken[];
}

// ─── QR Order 브랜드 컬러 ─────────────────────────────────────────
const BRAND_COLORS: ColorGroup[] = [
  {
    group: 'Primary — 브랜드 메인',
    role: '브랜드 핵심 컬러. 주요 액션 버튼, 활성 상태, 강조 요소에 사용',
    badge: 'MAIN',
    badgeColor: 'bg-[#FF6B2B] text-white',
    colors: [
      { name: 'Primary',       variable: '--qro-primary',       hex: '#FF6B2B', usage: '주요 버튼, 활성 네비, 선택된 페이지, 강조 텍스트' },
      { name: 'Primary Hover', variable: '--qro-primary-hover', hex: '#E85D20', usage: '버튼 hover 상태', isAlias: false },
      { name: 'Primary / 10',  variable: '--qro-primary-10',    hex: 'rgba(255,107,43,0.10)', usage: '배지 배경, 아이콘 컨테이너' },
      { name: 'Primary / 20',  variable: '--qro-primary-20',    hex: 'rgba(255,107,43,0.20)', usage: '포커스 링, hover 배경' },
      { name: 'Primary Light', variable: '--qro-primary-light', hex: '#FFF0E8', usage: '배지 배경, 선택 행 하이라이트' },
    ],
  },
  {
    group: 'Sidebar — 다크 배경',
    role: '사이드바 배경. 다크 UI 요소 및 오버레이에 사용',
    badge: 'SUB',
    badgeColor: 'bg-[#0F172A] text-white',
    colors: [
      { name: 'Sidebar BG',       variable: '--qro-sidebar-bg',      hex: '#0F172A', usage: '사이드바 배경' },
      { name: 'Sidebar Surface',  variable: '--qro-sidebar-surface',  hex: '#1E293B', usage: '사이드바 hover 배경, 활성 섹션' },
      { name: 'Sidebar Border',   variable: '--qro-sidebar-border',   hex: 'rgba(255,255,255,0.10)', usage: '사이드바 내 구분선' },
      { name: 'Sidebar Text',     variable: '--qro-sidebar-text',     hex: '#CBD5E1', usage: '사이드바 기본 메뉴 텍스트' },
      { name: 'Sidebar Sub Text', variable: '--qro-sidebar-subtext',  hex: '#64748B', usage: '사이드바 보조 텍스트, 비활성 메뉴' },
    ],
  },
  {
    group: 'Neutral — 중립 팔레트',
    role: '텍스트, 배경, 보더 등 UI 대부분의 색상. Tailwind Slate 계열 사용',
    badge: 'BASE',
    badgeColor: 'bg-slate-600 text-white',
    colors: [
      { name: 'Text Primary',    variable: '--qro-text-primary',    hex: '#1E293B', usage: '주요 콘텐츠 텍스트' },
      { name: 'Text Secondary',  variable: '--qro-text-secondary',  hex: '#334155', usage: '테이블 셀 텍스트' },
      { name: 'Text Muted',      variable: '--qro-text-muted',      hex: '#64748B', usage: '라벨, 안내 문구' },
      { name: 'Text Subtle',     variable: '--qro-text-subtle',     hex: '#94A3B8', usage: '플레이스홀더, 아이콘' },
      { name: 'Border Default',  variable: '--qro-border',          hex: '#E2E8F0', usage: '카드, 테이블, 인풋 기본 보더' },
      { name: 'Border Light',    variable: '--qro-border-light',    hex: '#F1F5F9', usage: '테이블 행 구분선' },
      { name: 'Surface Default', variable: '--qro-surface',         hex: '#F8FAFC', usage: '테이블 헤더 배경' },
      { name: 'Surface White',   variable: '--qro-white',           hex: '#FFFFFF', usage: '카드, 모달, 페이지 배경' },
    ],
  },
  {
    group: 'Semantic — 의미 컬러',
    role: '상태와 의미를 전달하는 컬러. 성공/경고/오류/정보 상황에 사용',
    badge: 'SEMANTIC',
    badgeColor: 'bg-purple-600 text-white',
    colors: [
      { name: 'Success',       variable: '--qro-success',       hex: '#10B981', usage: '완료 상태, 활성 배지' },
      { name: 'Success Light', variable: '--qro-success-light', hex: '#D1FAE5', usage: '완료 배지 배경' },
      { name: 'Warning',       variable: '--qro-warning',       hex: '#F59E0B', usage: '대기 상태, 주의 알림' },
      { name: 'Warning Light', variable: '--qro-warning-light', hex: '#FEF3C7', usage: '경고 배지 배경' },
      { name: 'Danger',        variable: '--qro-danger',        hex: '#EF4444', usage: '오류, 삭제, 취소 상태' },
      { name: 'Danger Light',  variable: '--qro-danger-light',  hex: '#FEE2E2', usage: '오류 배지 배경' },
      { name: 'Info',          variable: '--qro-info',          hex: '#3B82F6', usage: '준비중 상태, 정보 강조' },
      { name: 'Info Light',    variable: '--qro-info-light',    hex: '#DBEAFE', usage: '정보 배지 배경' },
    ],
  },
];

// ─── 레퍼런스 팔레트 (CSS 변수 기반) ─────────────────────────────
const REFERENCE_COLORS: ColorGroup[] = [
  {
    group: 'Primary — 포인트 컬러',
    role: '메인 포인트 컬러. --color-primary-* / 기본값: --color-primary = var(--color-primary-50)',
    badge: 'MAIN',
    badgeColor: 'bg-[#2596D4] text-white',
    colors: [
      { name: 'Primary 100', variable: '--color-primary-100', hex: '#011320', usage: '가장 어두운 단계' },
      { name: 'Primary 90',  variable: '--color-primary-90',  hex: '#002C45' },
      { name: 'Primary 80',  variable: '--color-primary-80',  hex: '#004870' },
      { name: 'Primary 70',  variable: '--color-primary-70',  hex: '#00659B' },
      { name: 'Primary 60',  variable: '--color-primary-60',  hex: '#0083C0' },
      { name: 'Primary 50',  variable: '--color-primary-50',  hex: '#2596D4', usage: '기본값 → --color-primary', isAlias: true, aliasOf: '--color-primary' },
      { name: 'Primary 40',  variable: '--color-primary-40',  hex: '#43A2DB' },
      { name: 'Primary 30',  variable: '--color-primary-30',  hex: '#7BC0EF' },
      { name: 'Primary 20',  variable: '--color-primary-20',  hex: '#B1DEFE' },
      { name: 'Primary 10',  variable: '--color-primary-10',  hex: '#E3FDFF', usage: '밝은 배경 → --color-primary-light', isAlias: true, aliasOf: '--color-primary-light' },
      { name: 'Primary 5',   variable: '--color-primary-5',   hex: '#f3feff', usage: '가장 밝은 단계' },
    ],
  },
  {
    group: 'Secondary — 세컨더리 컬러',
    role: '보조 포인트 컬러. --color-secondary-* / 기본값: --color-secondary = var(--color-secondary-70)',
    badge: 'SUB',
    badgeColor: 'bg-[#052C43] text-white',
    colors: [
      { name: 'Secondary 100', variable: '--color-secondary-100', hex: '#00030F' },
      { name: 'Secondary 90',  variable: '--color-secondary-90',  hex: '#001024' },
      { name: 'Secondary 80',  variable: '--color-secondary-80',  hex: '#002137' },
      { name: 'Secondary 70',  variable: '--color-secondary-70',  hex: '#052C43', usage: '기본값 → --color-secondary', isAlias: true, aliasOf: '--color-secondary' },
      { name: 'Secondary 60',  variable: '--color-secondary-60',  hex: '#193A50' },
      { name: 'Secondary 50',  variable: '--color-secondary-50',  hex: '#466073' },
      { name: 'Secondary 40',  variable: '--color-secondary-40',  hex: '#879AA7' },
      { name: 'Secondary 30',  variable: '--color-secondary-30',  hex: '#ACBAC3' },
      { name: 'Secondary 20',  variable: '--color-secondary-20',  hex: '#CFD9E0' },
      { name: 'Secondary 10',  variable: '--color-secondary-10',  hex: '#E8F3FB', usage: '밝은 배경 → --color-secondary-light', isAlias: true, aliasOf: '--color-secondary-light' },
      { name: 'Secondary 5',   variable: '--color-secondary-5',   hex: '#f2f8fd' },
    ],
  },
  {
    group: 'Gray — 그레이',
    role: '중립 회색 계열. --color-gray-* / 기본값: --color-black, --color-white, --color-gray 등',
    badge: 'BASE',
    badgeColor: 'bg-[#5F5F5F] text-white',
    colors: [
      { name: 'Gray 100', variable: '--color-gray-100', hex: '#0A0A0A', usage: '기본값 → --color-black', isAlias: true, aliasOf: '--color-black' },
      { name: 'Gray 95',  variable: '--color-gray-95',  hex: '#1D1D1D' },
      { name: 'Gray 90',  variable: '--color-gray-90',  hex: '#2A2A2A' },
      { name: 'Gray 85',  variable: '--color-gray-85',  hex: '#303030' },
      { name: 'Gray 80',  variable: '--color-gray-80',  hex: '#4F4F4F' },
      { name: 'Gray 70',  variable: '--color-gray-70',  hex: '#5F5F5F' },
      { name: 'Gray 60',  variable: '--color-gray-60',  hex: '#6F6F6F' },
      { name: 'Gray 50',  variable: '--color-gray-50',  hex: '#999999' },
      { name: 'Gray 40',  variable: '--color-gray-40',  hex: '#A5A5A5' },
      { name: 'Gray 30',  variable: '--color-gray-30',  hex: '#B9B9B9', usage: '기본값 → --color-gray', isAlias: true, aliasOf: '--color-gray' },
      { name: 'Gray 20',  variable: '--color-gray-20',  hex: '#C9C9C9' },
      { name: 'Gray 15',  variable: '--color-gray-15',  hex: '#D9D9D9' },
      { name: 'Gray 10',  variable: '--color-gray-10',  hex: '#ECECEC' },
      { name: 'Gray 8',   variable: '--color-gray-8',   hex: '#efefef' },
      { name: 'Gray 5',   variable: '--color-gray-5',   hex: '#FAFAFA', usage: '기본값 → --color-gray-light', isAlias: true, aliasOf: '--color-gray-light' },
      { name: 'Gray 0',   variable: '--color-gray-0',   hex: '#FFFFFF', usage: '기본값 → --color-white', isAlias: true, aliasOf: '--color-white' },
    ],
  },
  {
    group: 'Blue — 블루',
    role: '정보·링크·상태 표현에 사용. --color-blue-*',
    badge: 'SEMANTIC',
    badgeColor: 'bg-[#0059C3] text-white',
    colors: [
      { name: 'Blue 100', variable: '--color-blue-100', hex: '#002758' },
      { name: 'Blue 90',  variable: '--color-blue-90',  hex: '#003F8D' },
      { name: 'Blue 80',  variable: '--color-blue-80',  hex: '#0059C3' },
      { name: 'Blue 70',  variable: '--color-blue-70',  hex: '#0087FF' },
      { name: 'Blue 60',  variable: '--color-blue-60',  hex: '#3598FF' },
      { name: 'Blue 50',  variable: '--color-blue-50',  hex: '#72BAFF' },
      { name: 'Blue 40',  variable: '--color-blue-40',  hex: '#B6DCFF' },
      { name: 'Blue 30',  variable: '--color-blue-30',  hex: '#DAEEFF' },
      { name: 'Blue 20',  variable: '--color-blue-20',  hex: '#EDF7FF' },
    ],
  },
  {
    group: 'Red — 레드',
    role: '오류·경고·삭제 상태 표현. --color-red-*',
    badge: 'SEMANTIC',
    badgeColor: 'bg-[#BC0000] text-white',
    colors: [
      { name: 'Red 100', variable: '--color-red-100', hex: '#550000' },
      { name: 'Red 90',  variable: '--color-red-90',  hex: '#890000' },
      { name: 'Red 80',  variable: '--color-red-80',  hex: '#BC0000' },
      { name: 'Red 70',  variable: '--color-red-70',  hex: '#ED0000' },
      { name: 'Red 60',  variable: '--color-red-60',  hex: '#FF4B3B' },
      { name: 'Red 50',  variable: '--color-red-50',  hex: '#FF8572' },
      { name: 'Red 40',  variable: '--color-red-40',  hex: '#FAB5B5' },
      { name: 'Red 30',  variable: '--color-red-30',  hex: '#FDDFDF' },
      { name: 'Red 20',  variable: '--color-red-20',  hex: '#FEF1F1' },
    ],
  },
  {
    group: 'Green — 그린',
    role: '성공·완료·긍정 상태 표현. --color-green-*',
    badge: 'SEMANTIC',
    badgeColor: 'bg-[#007500] text-white',
    colors: [
      { name: 'Green 100', variable: '--color-green-100', hex: '#003400' },
      { name: 'Green 90',  variable: '--color-green-90',  hex: '#005400' },
      { name: 'Green 80',  variable: '--color-green-80',  hex: '#007500' },
      { name: 'Green 70',  variable: '--color-green-70',  hex: '#009600' },
      { name: 'Green 60',  variable: '--color-green-60',  hex: '#3EB43C' },
      { name: 'Green 50',  variable: '--color-green-50',  hex: '#7AD075' },
      { name: 'Green 40',  variable: '--color-green-40',  hex: '#B0E9AC' },
      { name: 'Green 30',  variable: '--color-green-30',  hex: '#E3FFE0' },
      { name: 'Green 20',  variable: '--color-green-20',  hex: '#F0FEEF' },
    ],
  },
  {
    group: 'Purple — 보라',
    role: '보조 강조·포인트. --color-purple-*',
    badge: 'SEMANTIC',
    badgeColor: 'bg-[#3B46BE] text-white',
    colors: [
      { name: 'Purple 100', variable: '--color-purple-100', hex: '#010116' },
      { name: 'Purple 90',  variable: '--color-purple-90',  hex: '#08063C' },
      { name: 'Purple 80',  variable: '--color-purple-80',  hex: '#1B1D75' },
      { name: 'Purple 70',  variable: '--color-purple-70',  hex: '#3B46BE' },
      { name: 'Purple 60',  variable: '--color-purple-60',  hex: '#657AFF' },
      { name: 'Purple 50',  variable: '--color-purple-50',  hex: '#8FA9FF' },
      { name: 'Purple 40',  variable: '--color-purple-40',  hex: '#B4CDFF' },
      { name: 'Purple 30',  variable: '--color-purple-30',  hex: '#D3E6FF' },
      { name: 'Purple 20',  variable: '--color-purple-20',  hex: '#D3E6FF' },
    ],
  },
  {
    group: 'Yellow — 노랑',
    role: '경고·주의 강조. --color-yellow-*',
    badge: 'SEMANTIC',
    badgeColor: 'bg-[#C2A100] text-white',
    colors: [
      { name: 'Yellow 100', variable: '--color-yellow-100', hex: '#363224' },
      { name: 'Yellow 90',  variable: '--color-yellow-90',  hex: '#4D4526' },
      { name: 'Yellow 80',  variable: '--color-yellow-80',  hex: '#6C5D1A' },
      { name: 'Yellow 70',  variable: '--color-yellow-70',  hex: '#947B00' },
      { name: 'Yellow 60',  variable: '--color-yellow-60',  hex: '#C2A100' },
      { name: 'Yellow 50',  variable: '--color-yellow-50',  hex: '#F7D209' },
      { name: 'Yellow 40',  variable: '--color-yellow-40',  hex: '#FFFE6E' },
      { name: 'Yellow 30',  variable: '--color-yellow-30',  hex: '#FFFFBC' },
      { name: 'Yellow 20',  variable: '--color-yellow-20',  hex: '#FFFFDA' },
    ],
  },
  {
    group: 'Brown — 브라운',
    role: '특수 강조·포인트. --color-brown-*',
    badge: 'SEMANTIC',
    badgeColor: 'bg-[#8D4C00] text-white',
    colors: [
      { name: 'Brown 100', variable: '--color-brown-100', hex: '#1D0E00' },
      { name: 'Brown 90',  variable: '--color-brown-90',  hex: '#3F2100' },
      { name: 'Brown 80',  variable: '--color-brown-80',  hex: '#663500' },
      { name: 'Brown 70',  variable: '--color-brown-70',  hex: '#8D4C00' },
      { name: 'Brown 60',  variable: '--color-brown-60',  hex: '#B16700' },
      { name: 'Brown 50',  variable: '--color-brown-50',  hex: '#CD8800' },
      { name: 'Brown 40',  variable: '--color-brown-40',  hex: '#E4AC56' },
      { name: 'Brown 30',  variable: '--color-brown-30',  hex: '#F7D19B' },
      { name: 'Brown 20',  variable: '--color-brown-20',  hex: '#FFF5D6' },
    ],
  },
];

// 밝기 판별
function isLight(hex: string): boolean {
  const h = hex.replace('#', '');
  if (h.length < 6 || hex.startsWith('rgba')) return true;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 140;
}

// ─── 스와치 카드 ─────────────────────────────────────────────────
function Swatch({ color }: { color: ColorToken }) {
  const [copied, setCopied] = useState(false);
  const isAlpha = color.hex.startsWith('rgba');
  const light = isLight(color.hex);

  const copy = () => {
    const val = color.variable && color.variable !== '—' ? color.variable : color.hex;
    navigator.clipboard.writeText(val);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden group">
      <div className="h-12 w-full relative" style={{ background: color.hex }}>
        {isAlpha && (
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'repeating-conic-gradient(#e2e8f0 0% 25%, #fff 0% 50%)', backgroundSize: '12px 12px', zIndex: 0 }}
          />
        )}
        <div className="absolute inset-0" style={{ background: color.hex }} />
        {/* alias 마커 */}
        {color.isAlias && (
          <div className="absolute bottom-1 left-1.5">
            <span className={`text-[8px] font-semibold px-1 py-0.5 rounded-[2px] ${light ? 'bg-black/15 text-black/60' : 'bg-white/25 text-white/90'}`}>
              alias
            </span>
          </div>
        )}
        <button
          onClick={copy}
          className="absolute top-1 right-1 p-1 rounded-[3px] bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40"
        >
          {copied ? <Check size={10} /> : <Copy size={10} />}
        </button>
      </div>
      <div className="p-2.5 space-y-0.5">
        <p className="text-[11px] font-medium text-slate-800 leading-tight truncate">{color.name}</p>
        {color.variable && color.variable !== '—' ? (
          <code className="text-[10px] text-slate-400 font-mono block truncate">{color.variable}</code>
        ) : null}
        <code className="text-[10px] text-slate-300 font-mono block uppercase">{color.hex}</code>
        {color.aliasOf && (
          <code className="text-[10px] text-[#2596D4] font-mono block truncate">→ {color.aliasOf}</code>
        )}
        {color.usage && !color.aliasOf && (
          <p className="text-[10px] text-slate-400 leading-snug pt-0.5">{color.usage}</p>
        )}
      </div>
    </div>
  );
}

// ─── 테이블 행 ───────────────────────────────────────────────────
function ColorRow({ color }: { color: ColorToken }) {
  const [copied, setCopied] = useState(false);
  const isAlpha = color.hex.startsWith('rgba');
  const copy = () => {
    const val = color.variable && color.variable !== '—' ? color.variable : color.hex;
    navigator.clipboard.writeText(val);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70 transition-colors group">
      <td className="px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-[4px] border border-slate-200 shrink-0 relative overflow-hidden">
            {isAlpha && (
              <div className="absolute inset-0" style={{ backgroundImage: 'repeating-conic-gradient(#e2e8f0 0% 25%, #fff 0% 50%)', backgroundSize: '8px 8px' }} />
            )}
            <div className="absolute inset-0" style={{ background: color.hex }} />
          </div>
          <span className="text-sm text-slate-800">{color.name}</span>
          {color.isAlias && (
            <span className="text-[10px] text-[#2596D4] bg-[#2596D4]/10 px-1.5 py-0.5 rounded-[3px] font-mono">alias</span>
          )}
        </div>
      </td>
      <td className="px-4 py-2.5">
        {color.variable && color.variable !== '—' ? (
          <button onClick={copy} className="flex items-center gap-1 text-xs font-mono text-slate-600 hover:text-[#FF6B2B] transition-colors">
            <code>{color.variable}</code>
            {copied ? <Check size={10} className="text-emerald-500" /> : <Copy size={10} className="opacity-0 group-hover:opacity-100" />}
          </button>
        ) : (
          <span className="text-xs text-slate-300">—</span>
        )}
      </td>
      <td className="px-4 py-2.5">
        <code className="text-xs font-mono text-slate-400 uppercase">{color.hex}</code>
      </td>
      <td className="px-4 py-2.5 hidden md:table-cell">
        {color.aliasOf ? (
          <code className="text-xs font-mono text-[#2596D4]">→ {color.aliasOf}</code>
        ) : (
          <span className="text-xs text-slate-400">{color.usage || '—'}</span>
        )}
      </td>
    </tr>
  );
}

// ─── 섹션 (그룹 렌더) ────────────────────────────────────────────
function ColorSection({ group, view }: { group: ColorGroup; view: 'swatch' | 'table' }) {
  return (
    <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-start gap-3">
        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-[3px] shrink-0 mt-0.5 ${group.badgeColor}`}>
          {group.badge}
        </span>
        <div>
          <p className="text-sm font-medium text-slate-800">{group.group}</p>
          <p className="text-xs text-slate-400 mt-0.5">{group.role}</p>
        </div>
      </div>
      {view === 'swatch' ? (
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
          {group.colors.map((c) => <Swatch key={c.name} color={c} />)}
        </div>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500">이름</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500">CSS 변수</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500">HEX</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-slate-500 hidden md:table-cell">설명 / 앨리어스</th>
            </tr>
          </thead>
          <tbody>
            {group.colors.map((c) => <ColorRow key={c.name} color={c} />)}
          </tbody>
        </table>
      )}
    </div>
  );
}

// ─── 팔레트 미니 스트립 ──────────────────────────────────────────
function MiniStrip({ colors }: { colors: ColorToken[] }) {
  return (
    <div className="flex h-4 rounded-[3px] overflow-hidden shrink-0" style={{ width: `${colors.length * 14}px`, maxWidth: 168 }}>
      {colors.map((c) => (
        <div key={c.name} className="flex-1" style={{ background: c.hex }} title={c.hex} />
      ))}
    </div>
  );
}

// ─── 페이지 ─────────────────────────────────────────────────────
export function ColorGuide() {
  const [view, setView] = useState<'swatch' | 'table'>('swatch');
  const [tab, setTab] = useState<'brand' | 'reference'>('brand');

  const groups = tab === 'brand' ? BRAND_COLORS : REFERENCE_COLORS;

  return (
    <div className="p-5 lg:p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-slate-800">컬러 시스템</h2>
          <p className="text-sm text-slate-400 mt-1">
            프로젝트에서 사용하는 색상 팔레트 — 브랜드 컬러와 레퍼런스 CSS 변수 구조
          </p>
        </div>
        <div className="flex items-center bg-slate-100 rounded-[4px] p-0.5 shrink-0">
          {(['swatch', 'table'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-3 py-1.5 text-xs rounded-[3px] transition-colors ${view === v ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {v === 'swatch' ? '스와치' : '테이블'}
            </button>
          ))}
        </div>
      </div>

      {/* 탭 */}
      <div className="flex gap-0 border border-slate-200 rounded-[6px] overflow-hidden bg-white w-fit">
        <button
          onClick={() => setTab('brand')}
          className={`px-5 py-2.5 text-sm transition-colors ${tab === 'brand' ? 'bg-[#FF6B2B] text-white' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          QR Order 브랜드 컬러
        </button>
        <button
          onClick={() => setTab('reference')}
          className={`px-5 py-2.5 text-sm transition-colors border-l border-slate-200 ${tab === 'reference' ? 'bg-[#FF6B2B] text-white' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          레퍼런스 팔레트 (CSS 변수)
        </button>
      </div>

      {/* 레퍼런스 탭: CSS 변수 구조 설명 */}
      {tab === 'reference' && (
        <div className="bg-slate-800 rounded-[6px] p-4 font-mono text-xs space-y-2">
          <p className="text-slate-400">/* CSS 변수 네이밍 구조 */</p>
          <p>
            <span className="text-[#7BC0EF]">--color-</span>
            <span className="text-[#43A2DB]">&lt;palette&gt;</span>
            <span className="text-slate-400">-</span>
            <span className="text-[#7AD075]">&lt;step&gt;</span>
            <span className="text-slate-500">: #hex;</span>
          </p>
          <p className="text-slate-400 pt-1">/* step: 100(가장 어두움) → 5 / 0(가장 밝음) */</p>
          <div className="pt-2 border-t border-slate-700 space-y-1">
            <p className="text-slate-400">/* 시맨틱 앨리어스 — alias 태그로 표시 */</p>
            <p><span className="text-[#7BC0EF]">--color-primary</span><span className="text-slate-500">:</span> <span className="text-slate-300">var(--color-primary-50);</span></p>
            <p><span className="text-[#7BC0EF]">--color-primary-light</span><span className="text-slate-500">:</span> <span className="text-slate-300">var(--color-primary-10);</span></p>
            <p><span className="text-[#7BC0EF]">--color-secondary</span><span className="text-slate-500">:</span> <span className="text-slate-300">var(--color-secondary-70);</span></p>
            <p><span className="text-[#7BC0EF]">--color-secondary-light</span><span className="text-slate-500">:</span> <span className="text-slate-300">var(--color-secondary-10);</span></p>
            <p><span className="text-[#7BC0EF]">--color-black</span><span className="text-slate-500">:</span> <span className="text-slate-300">var(--color-gray-100);</span></p>
            <p><span className="text-[#7BC0EF]">--color-white</span><span className="text-slate-500">:</span> <span className="text-slate-300">var(--color-gray-0);</span></p>
            <p><span className="text-[#7BC0EF]">--color-gray</span><span className="text-slate-500">:</span> <span className="text-slate-300">var(--color-gray-30);</span></p>
            <p><span className="text-[#7BC0EF]">--color-gray-light</span><span className="text-slate-500">:</span> <span className="text-slate-300">var(--color-gray-5);</span></p>
          </div>
        </div>
      )}

      {/* 브랜드 탭: CSS 변수 코드블록 */}
      {tab === 'brand' && (
        <div className="bg-slate-800 rounded-[6px] p-4 font-mono text-xs space-y-2">
          <p className="text-slate-400">/* QR Order 브랜드 CSS 변수 — --qro-{'{token}'} */</p>
          <div className="space-y-1">
            <p className="text-slate-400">/* Primary */</p>
            <p><span className="text-[#FF6B2B]">--qro-primary</span><span className="text-slate-500">:</span> <span className="text-slate-300">#FF6B2B;</span></p>
            <p><span className="text-[#FF6B2B]">--qro-primary-hover</span><span className="text-slate-500">:</span> <span className="text-slate-300">#E85D20;</span></p>
            <p><span className="text-[#FF6B2B]">--qro-primary-10</span><span className="text-slate-500">:</span> <span className="text-slate-300">rgba(255, 107, 43, 0.10);</span></p>
            <p><span className="text-[#FF6B20]">--qro-primary-20</span><span className="text-slate-500">:</span> <span className="text-slate-300">rgba(255, 107, 43, 0.20);</span></p>
            <p><span className="text-[#FF6B2B]">--qro-primary-light</span><span className="text-slate-500">:</span> <span className="text-slate-300">#FFF0E8;</span></p>
          </div>
          <div className="pt-2 border-t border-slate-700 space-y-1">
            <p className="text-slate-400">/* Sidebar */</p>
            <p><span className="text-[#7BC0EF]">--qro-sidebar-bg</span><span className="text-slate-500">:</span> <span className="text-slate-300">#0F172A;</span></p>
            <p><span className="text-[#7BC0EF]">--qro-sidebar-surface</span><span className="text-slate-500">:</span> <span className="text-slate-300">#1E293B;</span></p>
            <p><span className="text-[#7BC0EF]">--qro-sidebar-border</span><span className="text-slate-500">:</span> <span className="text-slate-300">rgba(255, 255, 255, 0.10);</span></p>
            <p><span className="text-[#7BC0EF]">--qro-sidebar-text</span><span className="text-slate-500">:</span> <span className="text-slate-300">#CBD5E1;</span></p>
            <p><span className="text-[#7BC0EF]">--qro-sidebar-subtext</span><span className="text-slate-500">:</span> <span className="text-slate-300">#64748B;</span></p>
          </div>
          <div className="pt-2 border-t border-slate-700 space-y-1">
            <p className="text-slate-400">/* Neutral */</p>
            <p><span className="text-[#94A3B8]">--qro-text-primary</span><span className="text-slate-500">:</span> <span className="text-slate-300">#1E293B;</span></p>
            <p><span className="text-[#94A3B8]">--qro-text-secondary</span><span className="text-slate-500">:</span> <span className="text-slate-300">#334155;</span></p>
            <p><span className="text-[#94A3B8]">--qro-text-muted</span><span className="text-slate-500">:</span> <span className="text-slate-300">#64748B;</span></p>
            <p><span className="text-[#94A3B8]">--qro-text-subtle</span><span className="text-slate-500">:</span> <span className="text-slate-300">#94A3B8;</span></p>
            <p><span className="text-[#94A3B8]">--qro-border</span><span className="text-slate-500">:</span> <span className="text-slate-300">#E2E8F0;</span><span className="text-slate-500 ml-2">/* --qro-border-light: #F1F5F9 */</span></p>
            <p><span className="text-[#94A3B8]">--qro-surface</span><span className="text-slate-500">:</span> <span className="text-slate-300">#F8FAFC;</span><span className="text-slate-500 ml-2">/* --qro-white: #FFFFFF */</span></p>
          </div>
          <div className="pt-2 border-t border-slate-700 space-y-1">
            <p className="text-slate-400">/* Semantic */</p>
            <p><span className="text-[#10B981]">--qro-success</span><span className="text-slate-500">: #10B981; </span><span className="text-slate-500">--qro-success-light: #D1FAE5;</span></p>
            <p><span className="text-[#F59E0B]">--qro-warning</span><span className="text-slate-500">: #F59E0B; </span><span className="text-slate-500">--qro-warning-light: #FEF3C7;</span></p>
            <p><span className="text-[#EF4444]">--qro-danger</span><span className="text-slate-500">:  #EF4444; </span><span className="text-slate-500">--qro-danger-light:  #FEE2E2;</span></p>
            <p><span className="text-[#3B82F6]">--qro-info</span><span className="text-slate-500">:    #3B82F6; </span><span className="text-slate-500">--qro-info-light:    #DBEAFE;</span></p>
          </div>
        </div>
      )}

      {/* 브랜드 탭: Overview */}
      {tab === 'brand' && (
        <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
            <p className="text-sm font-medium text-slate-800">전체 팔레트 Overview</p>
          </div>
          <div className="p-4 space-y-2.5">
            {BRAND_COLORS.map((g) => (
              <div key={g.group} className="flex items-center gap-3">
                <div className="flex h-7 rounded-[3px] overflow-hidden shrink-0" style={{ width: `${g.colors.length * 28}px`, minWidth: 100, maxWidth: 280 }}>
                  {g.colors.map((c) => (
                    <div
                      key={c.name}
                      className="flex-1 relative"
                      style={{ background: c.hex }}
                      title={`${c.variable}: ${c.hex}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px] shrink-0 ${g.badgeColor}`}>{g.badge}</span>
                  <span className="text-xs font-medium text-slate-700 truncate">{g.group.split(' — ')[0]}</span>
                  <code className="text-[10px] text-slate-300 font-mono hidden sm:block">--qro-{g.group.split(' — ')[0].toLowerCase().replace(/\s+/g, '-')}-*</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 레퍼런스 탭: 팔레트 전체 스트립 Overview */}
      {tab === 'reference' && (
        <div className="bg-white border border-slate-200 rounded-[6px] overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
            <p className="text-sm font-medium text-slate-800">전체 팔레트 Overview</p>
          </div>
          <div className="p-4 space-y-2">
            {REFERENCE_COLORS.map((g) => (
              <div key={g.group} className="flex items-center gap-3">
                <div className="flex h-7 rounded-[3px] overflow-hidden" style={{ width: `${g.colors.length * 20}px`, minWidth: 140, maxWidth: 320 }}>
                  {g.colors.map((c) => (
                    <div key={c.name} className="flex-1 relative group/cell" style={{ background: c.hex }} title={`${c.variable !== '—' ? c.variable : c.name}: ${c.hex}`}>
                      {c.isAlias && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-1 h-1 rounded-full ${isLight(c.hex) ? 'bg-black/40' : 'bg-white/60'}`} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px] shrink-0 ${g.badgeColor}`}>{g.badge}</span>
                  <span className="text-xs font-medium text-slate-700">{g.group.split(' — ')[0]}</span>
                  <code className="text-[10px] text-slate-300 font-mono hidden sm:block">--color-{g.key ?? g.group.split(' — ')[0].toLowerCase().replace(/[^a-z]/g, '')}–*</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 그룹 목록 */}
      <div className="space-y-4">
        {groups.map((g) => <ColorSection key={g.group} group={g} view={view} />)}
      </div>
    </div>
  );
}