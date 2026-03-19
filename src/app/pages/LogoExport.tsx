import { Download, Image } from 'lucide-react';

// ─── SVG builder (항상 투명 배경) ────────────────────────────────
type LogoVariant = 'light' | 'dark' | 'icon' | 'mono';

function buildSVG(variant: LogoVariant, size: number): string {
  const cfg = {
    light: { iconBg: '#FF6B2B', iconFg: '#FFFFFF', textQR: '#FF6B2B', textOrder: '#1E293B', tagBg: '#F1F5F9', tagText: '#94A3B8' },
    dark:  { iconBg: '#FF6B2B', iconFg: '#FFFFFF', textQR: '#FF6B2B', textOrder: '#FFFFFF', tagBg: '#1E293B', tagText: '#64748B' },
    icon:  { iconBg: '#FF6B2B', iconFg: '#FFFFFF', textQR: '#FFFFFF', textOrder: '#FFFFFF', tagBg: 'none', tagText: 'none' },
    mono:  { iconBg: '#1E293B', iconFg: '#FFFFFF', textQR: '#1E293B', textOrder: '#1E293B', tagBg: '#F1F5F9', tagText: '#94A3B8' },
  }[variant];

  const isIcon = variant === 'icon';
  const w = isIcon ? size : Math.round(size * 3.2);
  const h = size;
  const iconBoxSize = isIcon ? size * 0.85 : size * 0.52;
  const iconBoxX = isIcon ? size * 0.075 : size * 0.18;
  const iconBoxY = isIcon ? size * 0.075 : (h - iconBoxSize) / 2;
  const innerSize = iconBoxSize * 0.62;
  const innerPad = (iconBoxSize - innerSize) / 2;
  const r = iconBoxSize * 0.18;

  // QR pattern shapes (all as rects for crisp rendering)
  const qrShapes = `
    <rect x="2" y="2" width="9" height="9" rx="1.5" fill="${cfg.iconFg}"/>
    <rect x="4" y="4" width="5" height="5" rx="0.5" fill="${cfg.iconBg}"/>
    <rect x="13" y="2" width="9" height="9" rx="1.5" fill="${cfg.iconFg}"/>
    <rect x="15" y="4" width="5" height="5" rx="0.5" fill="${cfg.iconBg}"/>
    <rect x="2" y="13" width="9" height="9" rx="1.5" fill="${cfg.iconFg}"/>
    <rect x="4" y="15" width="5" height="5" rx="0.5" fill="${cfg.iconBg}"/>
    <rect x="13" y="13" width="4" height="4" rx="0.75" fill="${cfg.iconFg}"/>
    <rect x="19" y="13" width="3" height="4" rx="0.75" fill="${cfg.iconFg}"/>
    <rect x="13" y="19" width="4" height="3" rx="0.75" fill="${cfg.iconFg}"/>
    <rect x="19" y="19" width="3" height="3" rx="0.75" fill="${cfg.iconFg}"/>
  `;

  if (isIcon) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect x="${iconBoxX}" y="${iconBoxY}" width="${iconBoxSize}" height="${iconBoxSize}" rx="${r}" fill="${cfg.iconBg}"/>
  <g transform="translate(${iconBoxX + innerPad},${iconBoxY + innerPad}) scale(${innerSize / 24})">${qrShapes}</g>
</svg>`;
  }

  const textX = iconBoxX + iconBoxSize + size * 0.16;
  const textY = h / 2;
  const fs = size * 0.38;
  const qrWidth = fs * 1.28;
  const tagW = size * 0.58;
  const tagH = size * 0.22;
  const tagX = w - tagW - size * 0.14;
  const tagY = iconBoxY;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect x="${iconBoxX}" y="${iconBoxY}" width="${iconBoxSize}" height="${iconBoxSize}" rx="${iconBoxSize * 0.16}" fill="${cfg.iconBg}"/>
  <g transform="translate(${iconBoxX + innerPad},${iconBoxY + innerPad}) scale(${innerSize / 24})">${qrShapes}</g>
  <text x="${textX}" y="${textY}" dy="0.36em"
    font-family="'Segoe UI',-apple-system,system-ui,sans-serif"
    font-weight="700" font-size="${fs}" fill="${cfg.textQR}">QR</text>
  <text x="${textX + qrWidth}" y="${textY}" dy="0.36em"
    font-family="'Segoe UI',-apple-system,system-ui,sans-serif"
    font-weight="400" font-size="${fs}" fill="${cfg.textOrder}">order</text>
  ${cfg.tagBg !== 'none' ? `
  <rect x="${tagX}" y="${tagY}" width="${tagW}" height="${tagH}" rx="${size * 0.04}" fill="${cfg.tagBg}"/>
  <text x="${tagX + tagW / 2}" y="${tagY + tagH / 2}" dy="0.38em"
    font-family="'Segoe UI',-apple-system,system-ui,sans-serif"
    font-weight="600" font-size="${size * 0.115}" letter-spacing="1.2"
    fill="${cfg.tagText}" text-anchor="middle">ADMIN</text>
  ` : ''}
</svg>`;
}

function downloadSVG(svgStr: string, filename: string) {
  const blob = new Blob([svgStr], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

function downloadPNG(svgStr: string, filename: string, w: number, h: number) {
  const scale = 4;
  const canvas = document.createElement('canvas');
  canvas.width = w * scale; canvas.height = h * scale;
  const ctx = canvas.getContext('2d')!;
  // transparent — do NOT fill background
  const img = new window.Image();
  const blob = new Blob([svgStr], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  img.onload = () => {
    ctx.drawImage(img, 0, 0, w * scale, h * scale);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = filename; a.click();
    URL.revokeObjectURL(url);
  };
  img.src = url;
}

function SvgPreview({ svg }: { svg: string }) {
  return <div dangerouslySetInnerHTML={{ __html: svg }} className="flex items-center justify-center" />;
}

interface CardProps { label: string; sublabel: string; variant: LogoVariant; size: number; previewBg: string; }

function LogoCard({ label, sublabel, variant, size, previewBg }: CardProps) {
  const isIcon = variant === 'icon';
  const w = isIcon ? size : Math.round(size * 3.2);
  const svg = buildSVG(variant, size);

  return (
    <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
      <div className={`${previewBg} flex items-center justify-center p-10 min-h-[140px]`}>
        <SvgPreview svg={svg} />
      </div>
      <div className="p-4">
        <div className="text-sm font-medium text-slate-800">{label}</div>
        <div className="text-xs text-slate-400 mt-0.5 mb-3">{sublabel}</div>
        <div className="flex gap-2">
          <button onClick={() => downloadSVG(svg, `qrorder-${variant}.svg`)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-[4px] hover:bg-slate-100 transition-colors">
            <Download size={12} /> SVG
          </button>
          <button onClick={() => downloadPNG(svg, `qrorder-${variant}@4x.png`, w, size)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs text-white bg-[#FF6B2B] rounded-[4px] hover:bg-[#E85D20] transition-colors">
            <Image size={12} /> PNG
          </button>
        </div>
      </div>
    </div>
  );
}

export function LogoExport() {
  const cards: CardProps[] = [
    { label: '라이트 (가로형)', sublabel: '밝은 배경 위 기본 로고', variant: 'light', size: 56, previewBg: 'bg-slate-100' },
    { label: '다크 (가로형)', sublabel: '어두운 배경 위 화이트 로고', variant: 'dark', size: 56, previewBg: 'bg-[#0F172A]' },
    { label: '아이콘 (정방형)', sublabel: '파비콘·앱 아이콘 용도', variant: 'icon', size: 64, previewBg: 'bg-slate-100' },
    { label: '모노크롬 (가로형)', sublabel: '흑백 인쇄·서류 용도', variant: 'mono', size: 56, previewBg: 'bg-white' },
  ];

  return (
    <div className="p-5 lg:p-6 space-y-5">
      <div>
        <h2 className="text-slate-800">로고 다운로드</h2>
        <p className="text-sm text-slate-400 mt-1">모든 파일은 <strong className="text-slate-600">배경 없이(투명)</strong> 내보냅니다. SVG(벡터) 또는 PNG(4× Retina)로 다운로드하세요.</p>
      </div>

      {/* Brand colors */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <p className="text-xs font-medium text-slate-600 mb-3">브랜드 컬러</p>
        <div className="flex flex-wrap gap-4">
          {[
            { name: 'Primary Orange', hex: '#FF6B2B' },
            { name: 'Dark Orange', hex: '#E85D20' },
            { name: 'Dark BG', hex: '#0F172A' },
            { name: 'Slate 800', hex: '#1E293B' },
            { name: 'White', hex: '#FFFFFF', border: true },
          ].map((c) => (
            <div key={c.hex} className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-[4px] shrink-0 ${c.border ? 'border border-slate-200' : ''}`} style={{ background: c.hex }} />
              <div>
                <div className="text-xs font-medium text-slate-700">{c.name}</div>
                <div className="text-xs font-mono text-slate-400">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map((c) => <LogoCard key={c.variant} {...c} />)}
      </div>

      {/* Usage guide */}
      <div className="bg-slate-50 rounded-[6px] border border-slate-200 p-4 space-y-2">
        <p className="text-xs font-medium text-slate-700">사용 가이드</p>
        <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
          <li>SVG는 무한 해상도의 벡터 파일입니다. 어느 크기에서도 선명합니다.</li>
          <li>PNG는 4배율(@4×)로 내보내 Retina 디스플레이에 최적화됩니다.</li>
          <li>아이콘형은 파비콘(32×32, 16×16), 앱 아이콘, 프로필 이미지에 사용하세요.</li>
          <li>최소 사용 크기는 높이 <strong>28px</strong> 이상을 권장합니다.</li>
          <li>로고 주변에 로고 높이의 <strong>50% 이상</strong> 여백을 확보하세요.</li>
        </ul>
      </div>
    </div>
  );
}
