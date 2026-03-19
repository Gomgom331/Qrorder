import svgPaths from "./svg-6afpudp2dl";

function IconVector({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-1/4">
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
          {children}
        </svg>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <div className="h-[59px] relative shrink-0 w-[360px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] relative size-full">
          <div className="h-[27px] relative shrink-0 w-[31.117px]" data-name="Heading 3">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#1d293d] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">알림</p>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
              <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                <IconVector>
                  <path d={svgPaths.p48af40} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </IconVector>
                <IconVector>
                  <path d={svgPaths.p30908200} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </IconVector>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-[360px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start px-[20px] relative size-full">
          <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">초기화하시겠습니까?</p>
          </div>
          <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">비밀번호가 초기화됩니다.</p>
          </div>
        </div>
      </div>
      <div className="h-[63px] relative shrink-0 w-[360px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-end pr-[20px] pt-[13px] relative size-full">
          <div className="bg-[#ff6b2b] h-[38px] relative rounded-[4px] shrink-0 w-[56.203px]" data-name="ModalBtn">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[28.5px] not-italic text-[14px] text-center text-white top-[8.5px] whitespace-nowrap">확인</p>
            </div>
          </div>
          <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-[58.203px]" data-name="ModalBtn">
            <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[29.5px] not-italic text-[#314158] text-[14px] text-center top-[8.5px] whitespace-nowrap">닫기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}