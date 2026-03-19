import { useState } from 'react';
import { Pagination } from '../components/ui/Pagination';

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[6px] border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
        <p className="text-sm font-medium text-slate-800">{title}</p>
        {desc && <p className="text-xs text-slate-400 mt-0.5">{desc}</p>}
      </div>
      <div className="p-5 space-y-5">{children}</div>
    </div>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">{children}</p>;
}

function DemoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-4 py-3 border-b border-slate-100 last:border-0">
      <span className="w-36 shrink-0 text-xs text-slate-400">{label}</span>
      <div>{children}</div>
    </div>
  );
}

export function PaginationGuide() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(5);
  const [page3, setPage3] = useState(3);
  const [page4, setPage4] = useState(1);
  const [page5, setPage5] = useState(7);
  const [page6, setPage6] = useState(1);
  const [ps, setPs] = useState(10);
  const [tablePage, setTablePage] = useState(1);
  const [tablePs, setTablePs] = useState(10);

  // Fake table data
  const ALL_ROWS = Array.from({ length: 87 }, (_, i) => ({
    id: i + 1,
    name: `스마트버거 ${i + 1}호점`,
    status: i % 3 === 0 ? '점검중' : '정상',
    date: `2026-03-${String((i % 28) + 1).padStart(2, '0')}`,
  }));
  const pagedRows = ALL_ROWS.slice((tablePage - 1) * tablePs, tablePage * tablePs);
  const totalTablePages = Math.ceil(ALL_ROWS.length / tablePs);

  return (
    <div className="p-5 lg:p-6 space-y-4">
      <div>
        <h2 className="text-slate-800">페이지네이션</h2>
        <p className="text-sm text-slate-400 mt-1">
          테두리 없이 깔끔한 스타일 — hover 시 배경만 표시, 현재 페이지는 주황 채움
        </p>
      </div>

      {/* ── 사이즈 ── */}
      <Section title="사이즈 (SM · MD)" desc="SM은 테이블 하단, MD는 페이지 하단 기본 용도">
        <DemoRow label="MD (기본)">
          <Pagination page={page1} totalPages={10} onChange={setPage1} size="md" />
        </DemoRow>
        <DemoRow label="SM">
          <Pagination page={page1} totalPages={10} onChange={setPage1} size="sm" />
        </DemoRow>
      </Section>

      {/* ── 페이지 수 ── */}
      <Section title="페이지 수별 표시" desc="페이지가 많으면 말줄임표(···)로 축약">
        <DemoRow label="전체 5페이지">
          <Pagination page={page4} totalPages={5} onChange={setPage4} />
        </DemoRow>
        <DemoRow label="전체 10페이지 (중간)">
          <Pagination page={page2} totalPages={10} onChange={setPage2} />
        </DemoRow>
        <DemoRow label="전체 20페이지 (중간)">
          <Pagination page={page5} totalPages={20} onChange={setPage5} />
        </DemoRow>
        <DemoRow label="전체 100페이지">
          <Pagination page={page3} totalPages={100} onChange={setPage3} siblingCount={1} />
        </DemoRow>
      </Section>

      {/* ── 옵션 ── */}
      <Section title="옵션 조합" desc="총 건수 · 처음/끝 버튼 · 페이지 크기 선택">
        <DemoRow label="총 건수 표시">
          <Pagination page={page2} totalPages={10} onChange={setPage2} totalCount={187} />
        </DemoRow>
        <DemoRow label="처음/끝 버튼">
          <Pagination page={page2} totalPages={10} onChange={setPage2} showFirstLast />
        </DemoRow>
        <DemoRow label="페이지 크기 선택">
          <Pagination
            page={page6}
            totalPages={Math.ceil(200 / ps)}
            onChange={setPage6}
            totalCount={200}
            pageSize={ps}
            onPageSizeChange={(s) => { setPs(s); setPage6(1); }}
          />
        </DemoRow>
        <DemoRow label="전체 옵션">
          <Pagination
            page={page2}
            totalPages={10}
            onChange={setPage2}
            totalCount={187}
            showFirstLast
            pageSize={20}
            onPageSizeChange={() => {}}
          />
        </DemoRow>
      </Section>

      {/* ── SM 전체 옵션 ── */}
      <Section title="SM + 전체 옵션" desc="테이블 하단 용도 — 컴팩트한 조합">
        <DemoRow label="SM 전체">
          <Pagination
            page={page2}
            totalPages={10}
            onChange={setPage2}
            totalCount={187}
            showFirstLast
            pageSize={20}
            onPageSizeChange={() => {}}
            size="sm"
          />
        </DemoRow>
      </Section>

      {/* ── 실사용: 테이블 연동 ── */}
      <Section title="실사용 예시 — 테이블 연동" desc="87개 더미 데이터를 페이지네이션으로 분할 표시">
        <div className="border border-slate-200 rounded-[4px] overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-2.5 px-4 text-xs font-medium text-slate-500">No.</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium text-slate-500">사업장명</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium text-slate-500">상태</th>
                <th className="text-left py-2.5 px-3 text-xs font-medium text-slate-500">등록일</th>
              </tr>
            </thead>
            <tbody>
              {pagedRows.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="py-2.5 px-4 text-slate-400 text-xs">{row.id}</td>
                  <td className="py-2.5 px-3 text-slate-700">{row.name}</td>
                  <td className="py-2.5 px-3">
                    <span className={`text-xs px-1.5 py-0.5 rounded-[3px] ${row.status === '정상' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-xs text-slate-400">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between gap-2 flex-wrap">
            <span className="text-xs text-slate-400">
              {(tablePage - 1) * tablePs + 1} – {Math.min(tablePage * tablePs, ALL_ROWS.length)} / 총 {ALL_ROWS.length}건
            </span>
            <Pagination
              page={tablePage}
              totalPages={totalTablePages}
              onChange={(p) => setTablePage(p)}
              pageSize={tablePs}
              onPageSizeChange={(s) => { setTablePs(s); setTablePage(1); }}
              showFirstLast
              size="sm"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}