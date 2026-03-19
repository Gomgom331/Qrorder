import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">{children}</div>
    </div>
  );
}

function Text({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-[20.742px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper additionalClassNames="h-[20px] w-[129.773px]">
        <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">규칙 목록</p>
          </div>
        </div>
      </Wrapper>
      <div className="h-[28px] relative shrink-0 w-[108.484px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
          <div className="bg-[#ff6b2b] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[3px]" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[10px] relative size-full">
                <Wrapper additionalClassNames="size-[13px]">
                  <div className="flex-[1_0_0] h-[13px] min-h-px min-w-px relative" data-name="Icon">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
                        <div className="absolute inset-[-0.54px_-7.14%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.66667 1.08333">
                            <path d="M0.541667 0.541667H8.125" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
                        <div className="absolute inset-[-7.14%_-0.54px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.08333 8.66667">
                            <path d="M0.541667 0.541667V8.125" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Wrapper>
                <Text>
                  <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[10.5px] not-italic text-[12px] text-center text-white top-[0.5px] whitespace-nowrap">신규</p>
                </Text>
              </div>
            </div>
          </div>
          <div className="h-[28px] relative rounded-[3px] shrink-0 w-[42.742px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[3px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] py-px relative size-full">
              <Text>
                <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[10.5px] not-italic text-[#314158] text-[12px] text-center top-[0.5px] whitespace-nowrap">삭제</p>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}