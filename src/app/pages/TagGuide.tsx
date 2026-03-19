import { useState } from 'react';
import {
  Star, Zap, ShoppingBag, QrCode, Clock, CheckCircle2, AlertCircle,
  User, Flame, Tag as TagIcon,
} from 'lucide-react';
import { Tag, TagColor, TagVariant, TagSize } from '../components/ui/Tag';

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

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 py-2.5 border-b border-slate-100 last:border-0">
      <span className="w-28 shrink-0 text-xs text-slate-400 font-mono">{label}</span>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

// ─── Color list ──────────────────────────────────────────────────
const COLORS: { color: TagColor; label: string }[] = [
  { color: 'gray',   label: '기본' },
  { color: 'orange', label: '주요(브랜드)' },
  { color: 'green',  label: '성공' },
  { color: 'red',    label: '위험' },
  { color: 'amber',  label: '경고' },
  { color: 'blue',   label: '정보' },
  { color: 'purple', label: '보라' },
  { color: 'teal',   label: '청록' },
  { color: 'pink',   label: '분홍' },
  { color: 'dark',   label: '다크' },
];

export function TagGuide() {
  const [removed, setRemoved] = useState<Record<string, boolean>>({});

  return (
    <div className="p-5 lg:p-6 space-y-4">
      <div>
        <h2 className="text-slate-800">태그 컴포넌트</h2>
        <p className="text-sm text-slate-400 mt-1">상태·카테고리·레이블 표시에 사용하는 배지/태그 컴포넌트 가이드</p>
      </div>

      {/* 1. Semantic colors */}
      <Section title="컬러 (Soft — 기본 스타일)" desc="10가지 시맨틱 컬러 × soft 스타일">
        <Row label="전체 컬러">
          {COLORS.map(({ color, label }) => (
            <div key={color} className="flex flex-col items-center gap-1.5">
              <Tag color={color} variant="soft">{label}</Tag>
              <span className="text-[10px] text-slate-400">{color}</span>
            </div>
          ))}
        </Row>
      </Section>

      {/* 2. Variant per color */}
      <Section title="스타일 변형 (Variant)" desc="soft · filled · outline 3가지 스타일">
        {COLORS.map(({ color, label }) => (
          <Row key={color} label={color}>
            {(['soft', 'filled', 'outline'] as TagVariant[]).map((v) => (
              <Tag key={v} color={color} variant={v}>{label}</Tag>
            ))}
          </Row>
        ))}
      </Section>

      {/* 3. Sizes */}
      <Section title="사이즈 (Size)" desc="sm · md · lg — 콘텍스트에 맞게 선택">
        <Row label="sm / md / lg">
          {(['sm', 'md', 'lg'] as TagSize[]).map((s) => (
            <div key={s} className="flex flex-col items-center gap-1.5">
              <Tag color="orange" variant="soft" size={s}>{s === 'sm' ? '소' : s === 'md' ? '중' : '대'}</Tag>
              <span className="text-[10px] text-slate-400">{s}</span>
            </div>
          ))}
        </Row>
        <Row label="filled sizes">
          {(['sm', 'md', 'lg'] as TagSize[]).map((s) => (
            <Tag key={s} color="orange" variant="filled" size={s}>{s}</Tag>
          ))}
        </Row>
        <Row label="outline sizes">
          {(['sm', 'md', 'lg'] as TagSize[]).map((s) => (
            <Tag key={s} color="blue" variant="outline" size={s}>{s}</Tag>
          ))}
        </Row>
      </Section>

      {/* 4. With dot */}
      <Section title="점 표시 (Dot)" desc="dot prop — 상태 인디케이터로 활용">
        <Row label="dot">
          {COLORS.map(({ color, label }) => (
            <Tag key={color} color={color} variant="soft" dot>{label}</Tag>
          ))}
        </Row>
        <Row label="dot + filled">
          {(['orange', 'green', 'red', 'amber', 'blue'] as TagColor[]).map((c) => (
            <Tag key={c} color={c} variant="filled" dot size="md">
              {c === 'orange' ? '처리중' : c === 'green' ? '완료' : c === 'red' ? '실패' : c === 'amber' ? '대기' : '정보'}
            </Tag>
          ))}
        </Row>
      </Section>

      {/* 5. With icon */}
      <Section title="아이콘 포함 (Icon)" desc="icon prop으로 JSX 아이콘 삽입">
        <Row label="icon examples">
          <Tag color="orange" variant="soft" icon={<Star size={12} />}>인기</Tag>
          <Tag color="green"  variant="soft" icon={<CheckCircle2 size={12} />}>완료</Tag>
          <Tag color="red"    variant="soft" icon={<AlertCircle size={12} />}>오류</Tag>
          <Tag color="amber"  variant="soft" icon={<Clock size={12} />}>대기중</Tag>
          <Tag color="blue"   variant="soft" icon={<QrCode size={12} />}>QR</Tag>
          <Tag color="purple" variant="soft" icon={<Zap size={12} />}>빠른배송</Tag>
          <Tag color="teal"   variant="soft" icon={<ShoppingBag size={12} />}>주문</Tag>
          <Tag color="dark"   variant="soft" icon={<User size={12} />}>관리자</Tag>
        </Row>
        <Row label="filled + icon">
          <Tag color="orange" variant="filled" icon={<Flame size={12} />}>HOT</Tag>
          <Tag color="green"  variant="filled" icon={<CheckCircle2 size={12} />}>승인</Tag>
          <Tag color="red"    variant="filled" icon={<AlertCircle size={12} />}>거절</Tag>
          <Tag color="blue"   variant="filled" icon={<Info size={12} />}>안내</Tag>
        </Row>
      </Section>

      {/* 6. Removable */}
      <Section title="제거 가능 (Removable)" desc="removable prop + onRemove 핸들러 — 필터 태그 등에 활용">
        <Row label="removable">
          {COLORS.filter(({ color }) => !removed[color]).map(({ color, label }) => (
            <Tag
              key={color}
              color={color}
              variant="soft"
              removable
              onRemove={() => setRemoved((p) => ({ ...p, [color]: true }))}
            >
              {label}
            </Tag>
          ))}
          {Object.keys(removed).length > 0 && (
            <button
              onClick={() => setRemoved({})}
              className="text-xs text-[#FF6B2B] hover:underline"
            >
              초기화
            </button>
          )}
        </Row>
        <Row label="icon + remove">
          <Tag color="orange" variant="soft" icon={<TagIcon size={12} />} removable>카테고리</Tag>
          <Tag color="blue"   variant="soft" icon={<QrCode size={12} />} removable>QR 주문</Tag>
          <Tag color="green"  variant="filled" icon={<CheckCircle2 size={12} />} removable>완료</Tag>
        </Row>
      </Section>

      {/* 7. Real-world examples */}
      <Section title="실사용 예시" desc="실제 프로젝트에서의 사용 패턴">
        <Row label="주문 상태">
          <Tag color="amber"  variant="soft" dot>대기중</Tag>
          <Tag color="blue"   variant="soft" dot>준비중</Tag>
          <Tag color="green"  variant="soft" dot>완료</Tag>
          <Tag color="red"    variant="soft" dot>취소</Tag>
        </Row>
        <Row label="메뉴 카테고리">
          <Tag color="orange" variant="filled" icon={<Flame size={12} />} size="sm">메인</Tag>
          <Tag color="teal"   variant="filled" size="sm">사이드</Tag>
          <Tag color="blue"   variant="filled" size="sm">음료</Tag>
          <Tag color="pink"   variant="filled" size="sm">디저트</Tag>
        </Row>
        <Row label="사용자 역할">
          <Tag color="dark"   variant="soft" icon={<User size={12} />}>슈퍼 어드민</Tag>
          <Tag color="purple" variant="soft" icon={<User size={12} />}>관리자</Tag>
          <Tag color="gray"   variant="soft" icon={<User size={12} />}>직원</Tag>
        </Row>
        <Row label="사업장 상태">
          <Tag color="green"  variant="outline" dot>정상</Tag>
          <Tag color="amber"  variant="outline" dot>점검중</Tag>
          <Tag color="red"    variant="outline" dot>정지</Tag>
          <Tag color="gray"   variant="outline" dot>미등록</Tag>
        </Row>
        <Row label="NEW/HOT 뱃지">
          <Tag color="red"    variant="filled" size="sm">NEW</Tag>
          <Tag color="orange" variant="filled" size="sm" icon={<Flame size={10} />}>HOT</Tag>
          <Tag color="purple" variant="filled" size="sm" icon={<Zap size={10} />}>BEST</Tag>
          <Tag color="dark"   variant="filled" size="sm">ADMIN</Tag>
        </Row>
        <Row label="변경 구분">
          <Tag color="green" variant="soft">등록</Tag>
          <Tag color="blue"  variant="soft">수정</Tag>
          <Tag color="red"   variant="soft">삭제</Tag>
        </Row>
        <Row label="데이터 카운트">
          <Tag color="orange" variant="soft" size="sm">127건</Tag>
          <Tag color="blue"   variant="soft" size="sm">5개 선택</Tag>
        </Row>
        <Row label="사용자 정보">
          <Tag color="blue" variant="soft" size="sm">홍길동 (admin001)</Tag>
          <Tag color="blue" variant="soft" size="sm">김영희 (manager001)</Tag>
        </Row>
      </Section>
    </div>
  );
}

function Info({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  );
}