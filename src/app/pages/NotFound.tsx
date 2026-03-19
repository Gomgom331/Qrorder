import { Link } from 'react-router';
import { QrCode } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] p-8 text-center">
      <div className="text-slate-200 mb-4">
        <QrCode size={64} />
      </div>
      <div className="text-6xl font-bold text-slate-200 mb-2">404</div>
      <h2 className="text-slate-700 mb-2">페이지를 찾을 수 없습니다</h2>
      <p className="text-sm text-slate-400 mb-6">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link
        to="/"
        className="px-5 py-2.5 text-sm text-white bg-[#FF6B2B] rounded-[4px] hover:bg-[#E85D20] transition-colors"
      >
        대시보드로 돌아가기
      </Link>
    </div>
  );
}
