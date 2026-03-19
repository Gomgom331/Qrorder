import { useState } from 'react';
import { Search, ExternalLink, Trash2, Plus } from 'lucide-react';
import { Modal, ModalBtn } from '../components/ui/Modal';
import { Pagination } from '../components/ui/Pagination';
import { InputField } from '../components/ui/InputField';
import { Button, LinkButton } from '../components/ui/Button';

const MOCK_BUSINESSES = [
  { code: 'BIZ-001', name: '(주)스마트푸드시스템', tradeName: '스마트버거 강남점', ceo: '김민준', email: 'info@smartfood.kr', manager: '이서연', zip: '06100', address: '서울 강남구 테헤란로 123', phone: '02-1234-5678', clientAccess: true },
  { code: 'BIZ-002', name: '(주)맛나외식그룹', tradeName: '맛나치킨 홍대점', ceo: '박지호', email: 'ceo@matna.co.kr', manager: '최유진', zip: '04066', address: '서울 마포구 양화로 45', phone: '02-9876-5432', clientAccess: true },
  { code: 'BIZ-003', name: '(주)더맛집컴퍼니', tradeName: '더맛집 삼겹살', ceo: '이준혁', email: 'info@thematjip.kr', manager: '정수현', zip: '03992', address: '서울 마포구 합정동 23번길', phone: '02-7777-8888', clientAccess: true },
  { code: 'BIZ-004', name: '(주)미식가F&B', tradeName: '미식가 일식', ceo: '김다영', email: 'gourmet@misik.kr', manager: '오현우', zip: '05510', address: '서울 송파구 잠실로 678', phone: '02-4567-1234', clientAccess: false },
  { code: 'BIZ-005', name: '(주)청담요리연구소', tradeName: '청담 파인다이닝', ceo: '장서준', email: 'admin@cheongdam.kr', manager: '한미래', zip: '06014', address: '서울 강남구 청담동 56', phone: '02-3333-4444', clientAccess: true },
  { code: 'BIZ-006', name: '(주)신촌버거', tradeName: '스마트버거 신촌점', ceo: '윤지훈', email: 'sinchon@burger.kr', manager: '임채원', zip: '03762', address: '서울 서대문구 신촌로 89', phone: '02-5555-6666', clientAccess: true },
  { code: 'BIZ-007', name: '(주)강동외식', tradeName: '강동 감자탕', ceo: '서민재', email: 'admin@gangdong.kr', manager: '권나은', zip: '05200', address: '서울 강동구 천호대로 345', phone: '02-8888-9999', clientAccess: false },
  { code: 'BIZ-008', name: '(주)종로맛집', tradeName: '종로 보쌈', ceo: '고은지', email: 'jongno@taste.kr', manager: '배시영', zip: '03141', address: '서울 종로구 종로 12', phone: '02-2222-3333', clientAccess: true },
  { code: 'BIZ-009', name: '(주)명동푸드', tradeName: '명동 칼국수', ceo: '남궁혁', email: 'md@mdfood.kr', manager: '조현진', zip: '04535', address: '서울 중구 명동길 78', phone: '02-6543-2109', clientAccess: true },
  { code: 'BIZ-010', name: '(주)이태원다이닝', tradeName: '이태원 퓨전', ceo: '백승호', email: 'info@itaewon.kr', manager: '도연수', zip: '04399', address: '서울 용산구 이태원로 245', phone: '02-1111-2222', clientAccess: true },
];

const PAGE_SIZE = 8;

export function BusinessSearch() {
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [page, setPage] = useState(1);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<typeof MOCK_BUSINESSES[0] | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const handleSearch = () => { setAppliedSearch(search); setPage(1); };
  const handleReset = () => { setSearch(''); setAppliedSearch(''); setPage(1); };

  const filtered = MOCK_BUSINESSES.filter((b) =>
    appliedSearch
      ? b.name.includes(appliedSearch) || b.tradeName.includes(appliedSearch) || b.code.includes(appliedSearch) || b.ceo.includes(appliedSearch)
      : true
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="p-5 lg:p-6 space-y-4">
      {/* Search */}
      <div className="bg-white rounded-[6px] border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <InputField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="사업자명, 상호명, 대표자명으로 검색"
              leftIcon={<Search size={14} />}
            />
          </div>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="md" onClick={handleReset}>초기화</Button>
            <Button variant="primary" size="md" leftIcon={<Search size={15} />} onClick={handleSearch}>조회</Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[6px] border border-slate-200">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-800">사업장 목록</span>
            <span className="text-xs bg-[#FF6B2B]/10 text-[#FF6B2B] px-2 py-0.5 rounded-[3px] font-medium">{filtered.length}건</span>
          </div>
          <Button variant="primary" size="sm" leftIcon={<Plus size={13} />}>신규</Button>
        </div>
        <div className="subtle-box">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {['사업자 코드', '사업자 명', '상호명', '대표자명', '이메일주소', '담당자명', '우편번호', '주소', '전화번호', '클라이언트 접속', ''].map((h) => (
                  <th key={h} className="text-left px-3 py-2.5 text-xs font-medium text-slate-500 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginated.length === 0 ? (
                <tr><td colSpan={11} className="py-12 text-center text-slate-400 text-sm">검색 결과가 없습니다.</td></tr>
              ) : (
                paginated.map((biz) => (
                  <tr key={biz.code} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-3 py-2.5 font-mono text-xs text-slate-600">{biz.code}</td>
                    <td className="px-3 py-2.5 text-xs text-slate-700">{biz.name}</td>
                    <td className="px-3 py-2.5 text-xs text-slate-700">{biz.tradeName}</td>
                    <td className="px-3 py-2.5 text-xs text-slate-700">{biz.ceo}</td>
                    <td className="px-3 py-2.5 text-xs text-slate-500">{biz.email}</td>
                    <td className="px-3 py-2.5 text-xs text-slate-700">{biz.manager}</td>
                    <td className="px-3 py-2.5 text-xs text-slate-500">{biz.zip}</td>
                    <td className="px-3 py-2.5 text-xs text-slate-500 max-w-[180px] truncate">{biz.address}</td>
                    <td className="px-3 py-2.5 text-xs text-slate-500 whitespace-nowrap">{biz.phone}</td>
                    <td className="px-3 py-2.5">
                      {biz.clientAccess ? (
                        <LinkButton variant="primary" size="sm" href="#" target="_blank">
                          접속
                        </LinkButton>
                      ) : (
                        <LinkButton variant="outline" size="sm" disabled>
                          접속
                        </LinkButton>
                      )}
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => { setSelectedRow(biz); setDetailOpen(true); }}
                          className="p-1 text-slate-400 hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/10 rounded-[3px] transition-colors"
                          title="상세"
                        >
                          <ExternalLink size={12} />
                        </button>
                        <button
                          onClick={() => { setSelectedRow(biz); setDeleteOpen(true); }}
                          className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-[3px] transition-colors"
                          title="삭제"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
          <span className="text-xs text-slate-400">
            총 <strong className="text-slate-700">{filtered.length.toLocaleString()}</strong>건
          </span>
          <Pagination page={page} totalPages={totalPages} onChange={setPage} size="sm" />
        </div>
      </div>

      {/* Delete confirm modal */}
      <Modal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        size="sm"
        footer={
          <>
            <ModalBtn variant="outline" onClick={() => setDeleteOpen(false)}>취소</ModalBtn>
            <ModalBtn variant="danger" onClick={() => setDeleteOpen(false)}>삭제</ModalBtn>
          </>
        }
      >
        <div className="text-center py-2 space-y-3">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <Trash2 size={26} className="text-red-500" />
          </div>
          <p className="font-medium text-slate-800">사업장을 삭제하시겠습니까?</p>
          <p className="text-sm text-slate-500">
            <strong>{selectedRow?.name}</strong> 정보가 영구적으로 삭제됩니다.
          </p>
        </div>
      </Modal>

      {/* Detail modal */}
      {selectedRow && (
        <Modal
          open={detailOpen}
          onClose={() => setDetailOpen(false)}
          size="xl"
          title={`사업장 상세 — ${selectedRow.code}`}
          footer={
            <>
              <ModalBtn variant="outline" onClick={() => setDetailOpen(false)}>닫기</ModalBtn>
              <ModalBtn variant="primary" onClick={() => setDetailOpen(false)}>수정</ModalBtn>
            </>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: '사업자 코드', value: selectedRow.code },
              { label: '사업자명', value: selectedRow.name },
              { label: '상호명', value: selectedRow.tradeName },
              { label: '대표자명', value: selectedRow.ceo },
              { label: '담당자명', value: selectedRow.manager },
              { label: '이메일', value: selectedRow.email },
              { label: '전화번호', value: selectedRow.phone },
              { label: '우편번호', value: selectedRow.zip },
              { label: '주소', value: selectedRow.address },
              { label: '클라이언트 접속', value: selectedRow.clientAccess ? '허용' : '차단' },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="text-xs text-slate-400 block mb-1">{label}</span>
                <span className="text-sm text-slate-800">{value}</span>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}