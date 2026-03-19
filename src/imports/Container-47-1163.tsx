import clsx from "clsx";

function Button({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[28px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7px] relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Text({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="h-[17.5px] w-[46.219px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-['Pretendard:Medium',sans-serif] font-medium leading-[0] left-[23.5px] not-italic text-[#45556c] text-[0px] text-center top-[-1.5px] tracking-[-0.3125px] whitespace-nowrap">{children}</p>
    </Wrapper>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-[20px] relative shrink-0 w-[193.742px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
          <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">공통코드 상세</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[28px] relative shrink-0 w-[247.18px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
          <Button>
            <Icon>
              <path d="M10.5 8.75L7 5.25L3.5 8.75" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </Icon>
          </Button>
          <Button>
            <Icon>
              <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </Icon>
          </Button>
          <div className="h-[28px] relative rounded-[3px] shrink-0 w-[66.219px]" data-name="Button">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
              <Text>
                <span className="leading-[16px] text-[16px]">+</span>
                <span className="leading-[16px] text-[12px]">{` 행추가`}</span>
              </Text>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[3px]" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
                <Text>
                  <span className="leading-[16px] text-[16px]">−</span>
                  <span className="leading-[16px] text-[12px]">{` 행삭제`}</span>
                </Text>
              </div>
            </div>
          </div>
          <div className="h-[28px] relative rounded-[3px] shrink-0 w-[42.742px]" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[3px]" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] py-px relative size-full">
              <Wrapper additionalClassNames="h-[16px] w-[20.742px]">
                <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[10.5px] not-italic text-[#314158] text-[12px] text-center top-[0.5px] whitespace-nowrap">저장</p>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}