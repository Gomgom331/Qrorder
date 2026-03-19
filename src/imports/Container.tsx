import svgPaths from "./svg-ydn4iwu0ze";

function Label({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-['Pretendard:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#62748e] text-[12px] top-[0.5px] whitespace-nowrap">{children}</p>
    </div>
  );
}

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
      <div className="h-[60px] relative shrink-0 w-[480px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[20px] relative size-full">
          <div className="h-[27px] relative shrink-0 w-[148.805px]" data-name="Heading 3">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#1d293d] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">공통코드 마스터 수정/등록</p>
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
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-[480px]" data-name="Container">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[20px] relative size-full">
            <div className="content-stretch flex flex-col gap-[16px] h-[208px] items-start relative shrink-0 w-full" data-name="CommonCodeManagement">
              <div className="content-stretch flex flex-col gap-[6px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
                <Label>
                  <span className="leading-[16px]">{`공통코드 `}</span>
                  <span className="leading-[16px] text-[#ff6467]">*</span>
                </Label>
                <div className="bg-[#f1f5f9] h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <p className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-[13px] not-italic text-[#90a1b9] text-[14px] top-[8.5px] whitespace-nowrap">ORDER_STATUS</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[6px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
                <Label>
                  <span className="leading-[16px]">{`공통코드명 `}</span>
                  <span className="leading-[16px] text-[#ff6467]">*</span>
                </Label>
                <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="InputField">
                  <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]" data-name="Text Input">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] relative size-full">
                        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cad5e2] text-[14px] tracking-[-0.1504px] whitespace-nowrap">주문상태</p>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[6px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
                <Label>
                  <span className="leading-[16px]">{`사용여부 `}</span>
                  <span className="leading-[16px] text-[#ff6467]">*</span>
                </Label>
                <div className="h-[36px] relative shrink-0 w-full" data-name="DropdownSelect">
                  <div className="absolute bg-white content-stretch flex h-[36px] items-center left-0 pl-[13px] pr-[37px] py-px rounded-[4px] top-0 w-[440px]" data-name="Button">
                    <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
                        <div className="h-[20px] relative shrink-0 w-[46.789px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                            <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">사용 (Y)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-[414px] size-[14px] top-[11px]" data-name="Text">
                    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                        <div className="absolute inset-[-16.67%_-8.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 4.66667">
                            <path d={svgPaths.p1d8d0700} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[63px] relative shrink-0 w-[480px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-end pr-[20px] pt-[13px] relative size-full">
          <div className="bg-[#ff6b2b] h-[38px] relative rounded-[4px] shrink-0 w-[56.203px]" data-name="ModalBtn">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[28px] not-italic text-[14px] text-center text-white top-[9.5px] tracking-[-0.1504px] whitespace-nowrap">저장</p>
            </div>
          </div>
          <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-[58.203px]" data-name="ModalBtn">
            <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[29px] not-italic text-[#314158] text-[14px] text-center top-[9.5px] tracking-[-0.1504px] whitespace-nowrap">닫기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}