import { motion } from 'motion/react';
import svgPaths from '@/imports/로딩-1/svg-goi3txa2gz';

const PRIMARY = '#FF6B2B';

export function AppLoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: PRIMARY, opacity: 0.06, transform: 'translate(35%, -35%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: PRIMARY, opacity: 0.04, transform: 'translate(-35%, 35%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center gap-4"
      >
        {/* Brand logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-[42px] h-[42px] rounded-[6px] flex items-center justify-center shrink-0"
            style={{ background: PRIMARY }}
          >
            <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
              <path d={svgPaths.p3fa07780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d={svgPaths.p2f47d00}  stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d={svgPaths.p3be5c200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d={svgPaths.p1e1d0d80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M19.25 19.25V19.26"  stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d={svgPaths.p19925280} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M2.75 11H2.76"       stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M11 2.75H11.01"      stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M11 14.6667V14.6767" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M14.6667 11H15.5833" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M19.25 11V11.01"     stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
              <path d="M11 19.25V18.3333"   stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
            </svg>
          </div>
          <span className="text-[28px] leading-none tracking-[0.07px]" style={{ color: PRIMARY }}>
            <span className="font-bold">QR</span>
            <span className="font-normal">order</span>
          </span>
        </div>

        {/* Loading dots */}
        <div className="flex items-center gap-2 mt-2">
          <p className="text-[#62748e] text-[13px]">잠시만 기다려 주세요</p>
          <div className="flex items-center gap-[5px]">
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="block w-[6px] h-[6px] rounded-full"
                style={{ background: PRIMARY }}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
