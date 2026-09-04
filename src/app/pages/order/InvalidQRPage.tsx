import { motion } from 'motion/react';

const PRIMARY = '#FF6B2B';

export function InvalidQRPage() {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: PRIMARY, opacity: 0.05, transform: 'translate(35%, -35%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: PRIMARY, opacity: 0.04, transform: 'translate(-35%, 35%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center gap-5 w-full max-w-xs"
      >
        {/* Error icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: '#fff4f0' }}
        >
          {/* Broken QR icon */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <path d="M14 14h2" />
            <path d="M14 18h2" />
            <path d="M18 14v2" />
            <path d="M20 20l-2-2" />
            <path d="M18 20l2-2" />
          </svg>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <p className="font-bold text-[20px] leading-[28px] text-[#1d293d]">
            유효하지 않은 QR코드입니다.
          </p>
          <p className="text-[14px] leading-[22px] text-[#62748e]">
            QR코드를 확인하고 다시 시도해 주세요.<br />
            테이블 위 QR코드를 다시 스캔해 주세요.
          </p>
        </div>

        {/* Button */}
      </motion.div>
    </div>
  );
}
