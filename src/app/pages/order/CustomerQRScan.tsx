import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ScanLine, UtensilsCrossed, ShoppingBag, ChevronRight } from 'lucide-react';

export function CustomerQRScan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF6B2B] via-[#E85D20] to-[#C74E18] flex flex-col items-center justify-between py-10 px-6 overflow-hidden relative">

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Top: Logo */}
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="w-16 h-16 bg-white rounded-[8px] flex items-center justify-center shadow-xl shadow-black/20">
          <span className="text-[#FF6B2B] font-black text-2xl tracking-tighter">QR</span>
        </div>
        <div className="text-center">
          <h1 className="text-white font-black text-3xl tracking-tight">QR Order</h1>
          <p className="text-white/70 text-sm mt-0.5">스캔하고 바로 주문하세요</p>
        </div>
      </div>

      {/* Center: QR Scanner illustration */}
      <div className="flex flex-col items-center gap-5 z-10">
        <div className="relative">
          {/* QR frame */}
          <div className="w-60 h-60 flex items-center justify-center">
            {/* Corner brackets — sharp */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-white" style={{ borderWidth: '3px' }} />
            <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-white" style={{ borderWidth: '3px' }} />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-white" style={{ borderWidth: '3px' }} />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-white" style={{ borderWidth: '3px' }} />

            {/* QR code mock */}
            <div className="w-44 h-44 bg-white rounded-[4px] p-2.5 shadow-2xl">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Top-left finder */}
                <rect x="10" y="10" width="58" height="58" rx="3" fill="#0F172A" />
                <rect x="20" y="20" width="38" height="38" rx="2" fill="white" />
                <rect x="28" y="28" width="22" height="22" rx="1" fill="#0F172A" />
                {/* Top-right finder */}
                <rect x="132" y="10" width="58" height="58" rx="3" fill="#0F172A" />
                <rect x="142" y="20" width="38" height="38" rx="2" fill="white" />
                <rect x="150" y="28" width="22" height="22" rx="1" fill="#0F172A" />
                {/* Bottom-left finder */}
                <rect x="10" y="132" width="58" height="58" rx="3" fill="#0F172A" />
                <rect x="20" y="142" width="38" height="38" rx="2" fill="white" />
                <rect x="28" y="150" width="22" height="22" rx="1" fill="#0F172A" />
                {/* Data modules */}
                {[
                  [80,10],[90,10],[100,10],[110,10],[80,20],[100,20],[80,30],[90,30],[100,30],[110,30],
                  [80,40],[110,40],[80,50],[90,50],[100,50],
                  [10,80],[20,80],[40,80],[10,90],[30,90],[10,100],[20,100],[40,100],[50,100],
                  [10,110],[30,110],[50,110],
                  [80,80],[90,80],[100,80],[110,80],[120,80],
                  [80,90],[120,90],[80,100],[90,100],[100,100],[110,100],[120,100],
                  [80,110],[100,110],[120,110],[80,120],[90,120],[120,120],
                  [80,130],[90,130],[110,130],[120,130],
                  [140,80],[150,80],[170,80],[180,80],
                  [140,90],[180,90],[140,100],[150,100],[160,100],[170,100],[180,100],
                  [140,110],[170,110],[140,120],[150,120],[160,120],[180,120],
                  [140,130],[160,130],[170,130],
                  [80,150],[90,150],[100,150],[80,160],[110,160],[80,170],[90,170],[100,170],[110,170],
                  [130,150],[140,150],[160,150],[170,150],[180,150],
                  [130,160],[150,160],[170,160],[130,170],[140,170],[180,170],
                  [130,180],[150,180],[160,180],[170,180],[180,180],
                ].map(([x, y], i) => (
                  <rect key={i} x={x} y={y} width="8" height="8" rx="1" fill="#FF6B2B" />
                ))}
                {/* Center badge */}
                <rect x="86" y="86" width="28" height="28" rx="3" fill="#FF6B2B" />
                <text x="100" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="900" fontFamily="system-ui, sans-serif">QR</text>
              </svg>
            </div>
          </div>

          {/* Animated scan line */}
          <div className="absolute inset-4 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
              animate={{ top: ['8%', '88%', '8%'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>

        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-1.5">
            <ScanLine size={15} className="text-white/80" />
            <p className="text-white font-semibold text-sm">카메라로 QR 코드 스캔</p>
          </div>
          <p className="text-white/60 text-xs">테이블 위 QR 코드에 카메라를 가져다 대세요</p>
        </div>
      </div>

      {/* Bottom: Steps + CTA */}
      <div className="w-full max-w-xs z-10 space-y-4">
        {/* How it works */}
        <div className="bg-white/10 border border-white/20 rounded-[6px] p-4 space-y-3">
          {[
            { icon: ScanLine, step: '01', title: 'QR 스캔', desc: '테이블 QR 코드를 카메라로 인식' },
            { icon: UtensilsCrossed, step: '02', title: '메뉴 선택', desc: '메뉴를 둘러보고 담기' },
            { icon: ShoppingBag, step: '03', title: '주문 완료', desc: '한 번의 탭으로 바로 주문' },
          ].map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 border border-white/30 rounded-[4px] flex items-center justify-center shrink-0">
                <Icon size={14} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-white/60 text-xs">{desc}</p>
              </div>
              <span className="text-white/30 text-xs font-mono">{step}</span>
            </div>
          ))}
        </div>

        {/* Demo CTA */}
        <button
          onClick={() => navigate('/order/demo/table/3')}
          className="w-full bg-white text-[#FF6B2B] rounded-[4px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-black/20 hover:bg-white/95 active:scale-[0.98] transition-all"
          style={{ height: '44px' }}
        >
          <span>데모 체험하기</span>
          <ChevronRight size={16} />
        </button>

        <p className="text-center text-white/40 text-xs">
          Powered by QR Order © 2026
        </p>
      </div>
    </div>
  );
}
