import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Star, Zap, Bell, Receipt, X, Plus, Minus, Check, ShoppingCart } from 'lucide-react';

const PRIMARY = '#FF6B2B';
const PRIMARY_HOVER = '#E85D20';

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

function Row({ name, value, desc, preview }: { name: string; value: string; desc?: string; preview?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0">
      {preview}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-mono text-slate-700">{name}</p>
        {desc && <p className="text-[11px] text-slate-400 mt-0.5">{desc}</p>}
      </div>
      <span className="text-xs font-mono text-slate-400 shrink-0">{value}</span>
    </div>
  );
}

function Swatch({ color }: { color: string }) {
  return <div className="w-7 h-7 rounded-[4px] border border-slate-200 shrink-0" style={{ background: color }} />;
}

// ─── Sections ────────────────────────────────────────────────────

function ColorSection() {
  return (
    <Section title="색상 토큰" desc="Consumer 주문 페이지 전용 색상 팔레트">
      <div className="space-y-0">
        <Row preview={<Swatch color={PRIMARY} />}         name="PRIMARY"          value="#FF6B2B" desc="주요 브랜드 컬러 — 버튼, 가격, 아이콘" />
        <Row preview={<Swatch color={PRIMARY_HOVER} />}   name="PRIMARY_HOVER"    value="#E85D20" desc="hover / active 상태" />
        <Row preview={<Swatch color={`${PRIMARY}1F`} />}  name="PRIMARY alpha 12%" value={`${PRIMARY}1F`} desc="배지 배경, 버튼 배경" />
        <Row preview={<Swatch color={`${PRIMARY}2E`} />}  name="PRIMARY alpha 18%" value={`${PRIMARY}2E`} desc="메뉴 추가 버튼 배경" />
        <Row preview={<Swatch color="#c1c7cd" />}         name="Disabled"         value="#c1c7cd" desc="품절 아이템 있을 때 주문하기 버튼" />
        <Row preview={<Swatch color="#94a3b8" />}         name="Disabled alt"     value="#94a3b8" desc="옵션 미선택 시 버튼 (slate-400)" />
        <Row preview={<Swatch color="#1d293d" />}         name="Text primary"     value="#1d293d" desc="메뉴명, 타이틀 등 주요 텍스트" />
        <Row preview={<Swatch color="#62748e" />}         name="Text secondary"   value="#62748e" desc="설명, 서브라벨" />
        <Row preview={<Swatch color="#90a1b9" />}         name="Text tertiary"    value="#90a1b9" desc="힌트, 카운트, 메타 정보" />
        <Row preview={<Swatch color="#ef4444" />}         name="Soldout red"      value="#ef4444" desc="품절 상태 텍스트 / 도트" />
        <Row preview={<Swatch color="#e2e8f0" />}         name="Border default"   value="#e2e8f0" desc="카드, 시트 구분선 (slate-200)" />
        <Row preview={<Swatch color="#f8fafc" />}         name="Bg surface"       value="#f8fafc" desc="섹션 헤더, 카테고리 배경 (slate-50)" />
      </div>
    </Section>
  );
}

function TypographySection() {
  const types = [
    { label: '메뉴명',            size: '14px', weight: '500', color: '#1d293d', sample: '불고기 정식' },
    { label: '가격',              size: '14px', weight: '700', color: PRIMARY,   sample: '12,000원' },
    { label: '설명',              size: '12px', weight: '400', color: '#62748e', sample: '국내산 소고기를 구운 불고기와 밥, 국, 반찬.' },
    { label: '섹션 타이틀',       size: '12px', weight: '600', color: '#314158', sample: '한식' },
    { label: '카테고리 탭',       size: '12px', weight: '500', color: '#475569', sample: '전체' },
    { label: '장바구니 헤더',     size: '16px', weight: '700', color: '#1d293d', sample: '장바구니' },
    { label: '총 결제 금액',      size: '18px', weight: '700', color: PRIMARY,   sample: '41,000원' },
    { label: '매장명',            size: '14px', weight: '600', color: '#1e293b', sample: '맛나한식당' },
    { label: '옵션 그룹 레이블',  size: '13px', weight: '600', color: '#1d293d', sample: '맵기 선택' },
    { label: '옵션 선택지',       size: '14px', weight: '400', color: '#334155', sample: '보통맛' },
    { label: '힌트 / 메타',       size: '12px', weight: '400', color: '#90a1b9', sample: '2명 이용중' },
    { label: '가격 추가',         size: '12px', weight: '500', color: PRIMARY,   sample: '+2,000원' },
  ];

  return (
    <Section title="타이포그래피" desc="Consumer 페이지에서 사용되는 텍스트 스타일">
      <div className="divide-y divide-slate-100">
        {types.map(({ label, size, weight, color, sample }) => (
          <div key={label} className="flex items-center gap-4 py-2.5">
            <div className="w-36 shrink-0">
              <p style={{ fontSize: size, fontWeight: weight, color, lineHeight: 1.4 }} className="truncate">{sample}</p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-slate-500">{label}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] font-mono text-slate-400">{size} / w{weight}</p>
              <p className="text-[10px] font-mono text-slate-300">{color}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BadgeSection() {
  return (
    <Section title="배지 (Badge)" desc="메뉴 카드 상단 배지 컴포넌트 — BADGE_CFG">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          {[
            { label: '인기',     Icon: Flame, cls: 'bg-red-50 text-red-500 border border-red-100',           key: 'popular' },
            { label: '추천',     Icon: Star,  cls: 'bg-amber-50 text-amber-500 border border-amber-100',     key: 'recommended' },
            { label: '한정수량', Icon: Zap,   cls: 'bg-purple-50 text-purple-500 border border-purple-100',  key: 'limited' },
          ].map(({ label, Icon, cls, key }) => (
            <div key={key} className="flex flex-col items-center gap-1.5">
              <span className={`inline-flex items-center gap-[3px] px-1.5 py-0.5 text-[10px] font-medium rounded-full ${cls}`}>
                <Icon size={9} />{label}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">{key}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-[3px] bg-black/70 text-white">품절</span>
            <span className="text-[10px] text-slate-400 font-mono">soldout overlay</span>
          </div>
        </div>
        <pre className="bg-slate-900 text-slate-100 rounded-[6px] p-4 text-xs overflow-x-auto">{`const BADGE_CFG = {
  popular:     { label: '인기',     Icon: Flame, cls: 'bg-red-50 text-red-500 border border-red-100' },
  recommended: { label: '추천',     Icon: Star,  cls: 'bg-amber-50 text-amber-500 border border-amber-100' },
  limited:     { label: '한정수량', Icon: Zap,   cls: 'bg-purple-50 text-purple-500 border border-purple-100' },
};`}</pre>
      </div>
    </Section>
  );
}

function ButtonSection() {
  return (
    <Section title="버튼" desc="Consumer 페이지 버튼 시스템">
      <div className="space-y-5">
        <div>
          <p className="text-xs font-medium text-slate-500 mb-2.5">Primary — 주문하기 / 확인 / 호출하기</p>
          <div className="flex flex-wrap gap-3">
            <button className="h-12 px-6 text-white rounded-[6px] font-semibold text-sm" style={{ background: PRIMARY }}>주문하기</button>
            <button className="h-12 px-6 text-white rounded-[6px] font-semibold text-sm opacity-35 cursor-not-allowed" style={{ background: '#c1c7cd' }}>주문하기 (품절)</button>
            <button className="h-12 px-6 text-white rounded-[6px] font-semibold text-sm opacity-35 cursor-not-allowed" style={{ background: '#94a3b8' }}>호출하기 (미선택)</button>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-slate-500 mb-2.5">Header Action — 직원호출 / 주문내역</p>
          <div className="flex flex-wrap gap-2">
            <button className="h-8 px-3 rounded-[4px] text-xs font-medium flex items-center gap-1.5 border" style={{ background: `${PRIMARY}10`, borderColor: `${PRIMARY}25`, color: PRIMARY }}>
              <Bell size={12} />직원호출
            </button>
            <button className="h-8 px-3 rounded-[4px] text-xs font-medium flex items-center gap-1.5 border text-white" style={{ background: PRIMARY, borderColor: PRIMARY }}>
              <Bell size={12} />직원호출 (활성)
            </button>
            <button className="h-8 px-3 rounded-[4px] text-xs font-medium flex items-center gap-1.5 border" style={{ background: `${PRIMARY}10`, borderColor: `${PRIMARY}25`, color: PRIMARY }}>
              <Receipt size={12} />주문내역
            </button>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-slate-500 mb-2.5">수량 조절 — 장바구니</p>
          <div className="flex items-center gap-2">
            <button className="w-7 h-7 rounded-full flex items-center justify-center border border-slate-300 text-slate-500"><Minus size={13} /></button>
            <span className="w-6 text-center text-sm font-semibold text-slate-800">2</span>
            <button className="w-7 h-7 rounded-full flex items-center justify-center border text-white" style={{ background: PRIMARY, borderColor: PRIMARY }}><Plus size={13} /></button>
            <button className="w-7 h-7 rounded-[4px] flex items-center justify-center text-white ml-1" style={{ background: '#ef4444' }}><X size={13} /></button>
            <span className="text-xs text-slate-400 ml-1">삭제 (품절 상태)</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-slate-500 mb-2.5">메뉴 추가 버튼 / 옵션 선택</p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="w-8 h-8 rounded-[4px] flex items-center justify-center" style={{ background: `${PRIMARY}18` }}>
              <Plus size={16} style={{ color: PRIMARY }} />
            </button>
            <div className="flex items-center gap-1.5">
              <div className="w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0" style={{ borderColor: PRIMARY }}>
                <div className="w-2 h-2 rounded-full" style={{ background: PRIMARY }} />
              </div>
              <span className="text-xs text-slate-500">radio selected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-300 shrink-0" />
              <span className="text-xs text-slate-500">radio unselected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center shrink-0" style={{ background: PRIMARY, borderColor: PRIMARY }}>
                <Check size={11} className="text-white" />
              </div>
              <span className="text-xs text-slate-500">checkbox selected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-[18px] h-[18px] rounded-[4px] border-2 border-slate-300 shrink-0" />
              <span className="text-xs text-slate-500">checkbox unselected</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CategoryTabSection() {
  const [active, setActive] = useState('한식');
  const cats = ['전체', '한식', '일식', '중식', '음료', '디저트'];

  return (
    <Section title="카테고리 탭" desc="수평 스크롤 탭 바 — h-7 / rounded-[4px]">
      <div className="space-y-4">
        <div className="flex gap-1.5 flex-wrap">
          {cats.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`h-7 px-3 rounded-[4px] text-xs font-medium whitespace-nowrap transition-colors ${active === cat ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              style={active === cat ? { background: PRIMARY } : {}}
            >
              {cat}
            </button>
          ))}
        </div>
        <pre className="bg-slate-900 text-slate-100 rounded-[6px] p-4 text-xs">{`// Active
style={{ background: PRIMARY, color: '#fff' }}
className="h-7 px-3 rounded-[4px] text-xs font-medium"

// Inactive
className="h-7 px-3 rounded-[4px] text-xs font-medium
           bg-slate-100 text-slate-600 hover:bg-slate-200"`}</pre>
      </div>
    </Section>
  );
}

function MenuCardSection() {
  return (
    <Section title="메뉴 카드" desc="MenuItemCard 상태 — 일반 / 품절 / 장바구니 품절">
      <div className="space-y-3">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Normal</p>
        <div className="flex gap-3 px-4 py-3 bg-white border border-slate-200 rounded-[8px]">
          <div className="w-[72px] h-[72px] rounded-[6px] bg-slate-100 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex gap-1 mb-1">
              <span className="inline-flex items-center gap-[3px] px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-red-50 text-red-500 border border-red-100"><Flame size={9} />인기</span>
            </div>
            <p className="text-[14px] font-medium text-[#1d293d]">불고기 정식</p>
            <p className="text-[12px] text-[#62748e] mt-0.5 line-clamp-2">국내산 소고기를 특제 양념에 재워 구운 불고기와 밥, 국, 반찬이 함께 나옵니다.</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[14px] font-bold" style={{ color: PRIMARY }}>12,000원</span>
              <button className="w-8 h-8 rounded-[4px] flex items-center justify-center" style={{ background: `${PRIMARY}18` }}>
                <Plus size={16} style={{ color: PRIMARY }} />
              </button>
            </div>
          </div>
        </div>

        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider pt-1">Soldout</p>
        <div className="flex gap-3 px-4 py-3 bg-white border border-slate-200 rounded-[8px] opacity-70">
          <div className="relative w-[72px] h-[72px] rounded-[6px] bg-slate-100 shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-[12px] font-semibold bg-black/70 px-1.5 py-0.5 rounded-[3px]">품절</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-medium text-slate-400">우동</p>
            <p className="text-[12px] text-slate-300 mt-0.5">부드러운 면발의 따뜻한 일본식 우동.</p>
            <p className="text-[14px] font-bold text-slate-300 mt-2">7,000원</p>
          </div>
        </div>

        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider pt-1">Cart — 품절 아이템</p>
        <div className="px-4 py-3 border border-red-100 rounded-[8px] bg-red-50/30">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-medium text-slate-400 line-through">비빔밥</p>
              <p className="text-[11px] text-red-500 font-medium mt-0.5">현재 품절된 메뉴입니다</p>
              <p className="text-[12px] text-slate-400 line-through mt-1">9,000원</p>
            </div>
            <button className="w-7 h-7 rounded-[4px] flex items-center justify-center text-white shrink-0" style={{ background: '#ef4444' }}>
              <X size={13} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ZIndexSection() {
  const layers = [
    { z: 'z-40',   label: '헤더 (fixed top bar)' },
    { z: 'z-50',   label: '바텀 시트 — 장바구니, 주문내역, 직원호출' },
    { z: 'z-[60]', label: '네트워크 오류 화면' },
    { z: 'z-[70]', label: '주문 처리중 오버레이 / 주문 오류 화면' },
    { z: 'z-[75]', label: '품절 안내 모달' },
  ];

  return (
    <Section title="Z-Index 레이어" desc="오버레이 스택 순서">
      <div className="bg-slate-50 rounded-[6px] p-4 space-y-1.5">
        {layers.map(({ z, label }) => (
          <div key={z} className="flex items-center gap-3 text-xs">
            <span className="font-mono font-semibold text-slate-700 w-16 shrink-0">{z}</span>
            <span className="text-slate-500">{label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function AnimationSection() {
  const springs = [
    { name: '바텀 시트',        damping: 36, stiffness: 360, desc: 'CartSheet, HistorySheet, StaffCallSheet' },
    { name: '품절 모달',        damping: 26, stiffness: 300, desc: 'SoldoutModal 카드 진입' },
    { name: '주문 완료',        damping: 18, stiffness: 280, desc: 'OrderCompleteScreen 체크 아이콘' },
    { name: '주문 오류 모달',   damping: 28, stiffness: 280, desc: 'OrderErrorScreen 에러 카드' },
  ];

  const fades = [
    { name: '로딩 화면',           duration: '0.45s', ease: 'easeOut',   desc: 'LoadingScreen 진입' },
    { name: '네트워크 오류',       duration: '0.4s',  ease: 'easeOut',   desc: 'NetworkErrorScreen' },
    { name: '주문 오류 오버레이',  duration: '0.25s', ease: 'easeInOut', desc: 'OrderErrorScreen 배경' },
    { name: '로딩 닷 (루프)',      duration: '0.9s',  ease: 'easeInOut', desc: 'delay: 0 / 0.18 / 0.36s' },
    { name: 'Dev 드롭다운',        duration: '0.13s', ease: 'linear',    desc: '네비게이션 드롭다운' },
  ];

  return (
    <Section title="애니메이션 스펙" desc="motion/react spring & fade 설정값">
      <div className="space-y-5">
        <div>
          <p className="text-xs font-medium text-slate-500 mb-2">Spring 파라미터</p>
          <div className="bg-slate-50 rounded-[6px] p-4 divide-y divide-slate-200">
            {springs.map(({ name, damping, stiffness, desc }) => (
              <div key={name} className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-700">{name}</p>
                  <p className="text-[11px] text-slate-400">{desc}</p>
                </div>
                <code className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-1 rounded text-slate-600 shrink-0">
                  d:{damping} s:{stiffness}
                </code>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-slate-500 mb-2">Fade / Ease 파라미터</p>
          <div className="bg-slate-50 rounded-[6px] p-4 divide-y divide-slate-200">
            {fades.map(({ name, duration, ease, desc }) => (
              <div key={name} className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-700">{name}</p>
                  <p className="text-[11px] text-slate-400">{desc}</p>
                </div>
                <code className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-1 rounded text-slate-600 shrink-0">
                  {duration} / {ease}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function SoldoutModalSection() {
  const [show, setShow] = useState(false);

  return (
    <Section title="품절 안내 모달" desc="SoldoutModal — z-[75], spring(d:26, s:300), max-w-[280px]">
      <div className="space-y-4">
        <button
          onClick={() => setShow(true)}
          className="h-9 px-4 text-white rounded-[6px] text-sm font-medium"
          style={{ background: PRIMARY }}
        >
          모달 미리보기
        </button>

        <pre className="bg-slate-900 text-slate-100 rounded-[6px] p-4 text-xs overflow-x-auto">{`// rounded-[12px], z-[75], max-w-[280px], px-6 py-6
// backdrop: rgba(0,0,0,0.45)
// spring: { damping: 26, stiffness: 300 }
// 확인 버튼: h-10, rounded-[6px], background: PRIMARY`}</pre>

        <AnimatePresence>
          {show && (
            <motion.div
              className="fixed inset-0 z-[75] flex items-center justify-center px-8"
              style={{ background: 'rgba(0,0,0,0.45)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShow(false)}
            >
              <motion.div
                className="bg-white rounded-[12px] w-full max-w-[280px] px-6 py-6 shadow-2xl"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 26, stiffness: 300 }}
                onClick={e => e.stopPropagation()}
              >
                <p className="font-semibold text-[15px] text-[#222] text-center mb-1">주문할 수 없는 메뉴가 있습니다</p>
                <p className="text-[13px] text-[#999] text-center mb-4">품절된 메뉴를 확인해 주세요.</p>
                <div className="mb-4 bg-slate-50 rounded-[8px] px-3 py-2.5 space-y-1.5">
                  {['비빔밥', '제육볶음'].map(name => (
                    <div key={name} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                      <p className="text-[12px] text-slate-600 flex-1">{name}</p>
                      <span className="text-[11px] text-red-400 font-medium">품절</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShow(false)}
                  className="w-full h-10 text-white rounded-[6px] font-semibold text-sm"
                  style={{ background: PRIMARY }}
                >
                  확인
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function ShadowSection() {
  return (
    <Section title="그림자 & 구분선" desc="Consumer 페이지 elevation 토큰">
      <div className="bg-slate-50 rounded-[6px] p-4 space-y-3">
        {[
          { name: '바텀 시트',    value: '0 -4px 24px rgba(0,0,0,0.08)' },
          { name: '품절 모달',    value: '0 25px 50px rgba(0,0,0,0.25) — shadow-2xl' },
          { name: '드롭다운',     value: '0 4px 20px rgba(0,0,0,0.12)' },
          { name: '헤더 하단',    value: 'border-b border-slate-200' },
          { name: '카드 보더',    value: 'border border-slate-100' },
        ].map(({ name, value }) => (
          <div key={name} className="flex items-center gap-3 text-xs">
            <span className="font-medium text-slate-700 w-20 shrink-0">{name}</span>
            <span className="text-slate-400 font-mono">{value}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────

export function ConsumerGuide() {
  return (
    <div className="p-5 lg:p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-slate-800">컨슈머 전용 가이드</h2>
          <p className="text-sm text-slate-400 mt-1">
            주문 플로우(Consumer) 페이지에서만 사용되는 색상 토큰, 컴포넌트, 애니메이션 스펙
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-100 rounded-[6px]">
          <ShoppingCart size={13} style={{ color: PRIMARY }} />
          <span className="text-xs font-medium" style={{ color: PRIMARY }}>/order/*</span>
        </div>
      </div>

      <ColorSection />
      <TypographySection />
      <BadgeSection />
      <ButtonSection />
      <CategoryTabSection />
      <MenuCardSection />
      <ZIndexSection />
      <AnimationSection />
      <SoldoutModalSection />
      <ShadowSection />
    </div>
  );
}
