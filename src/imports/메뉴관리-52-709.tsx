import clsx from "clsx";
import svgPaths from "./svg-89i0xo3hkc";

function Button1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[28px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7px] relative size-full">{children}</div>
    </div>
  );
}

function Icon4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[14px] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper4 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper4 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper4>;
}

function Text({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2 additionalClassNames="h-[17.5px] w-[46.219px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-['Pretendard:Medium',sans-serif] font-medium leading-[0] left-[23.5px] not-italic text-[#45556c] text-[0px] text-center top-[-1.5px] tracking-[-0.3125px] whitespace-nowrap">{children}</p>
    </Wrapper2>
  );
}

function Vector1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]">
      <div className="absolute inset-[-23.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.675 3.675">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Vector({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Icon3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type LinkProps = {
  additionalClassNames?: string;
};

function Link({ children, additionalClassNames = "" }: React.PropsWithChildren<LinkProps>) {
  return (
    <div className={clsx("h-[28px] relative rounded-[3px] shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ButtonProps = {
  additionalClassNames?: string;
};

function Button({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className={clsx("h-[36px] relative rounded-[3px] shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Icon1Vector({ children }: React.PropsWithChildren<{}>) {
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
type Icon2Props = {
  additionalClassNames?: string;
};

function Icon2({ children, additionalClassNames = "" }: React.PropsWithChildren<Icon2Props>) {
  return (
    <div className={clsx("size-[18px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[13px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon" opacity="0.6">
          {children}
        </g>
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("flex-[1_0_0] h-[30px] min-h-px min-w-px relative rounded-[4px]", additionalClassNames)}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}
type TextInputText1Props = {
  text: string;
};

function TextInputText1({ text }: TextInputText1Props) {
  return (
    <Wrapper additionalClassNames="bg-white">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#314158] text-[12px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type TextInputTextProps = {
  text: string;
};

function TextInputText({ text }: TextInputTextProps) {
  return (
    <Wrapper additionalClassNames="bg-[#f8fafc]">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type HeaderCellProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function HeaderCell({ text, text1, additionalClassNames = "" }: HeaderCellProps) {
  return (
    <div className={clsx("absolute h-[36.5px] top-0 w-[297.648px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-['Pretendard:Medium',sans-serif] font-medium leading-[0] left-[12px] not-italic text-[#62748e] text-[12px] top-[10.5px] whitespace-nowrap">
        <span className="leading-[16px]">{text}</span>
        <span className="leading-[16px] text-[#ff6467]">{text1}</span>
      </p>
    </div>
  );
}
type TextText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText2({ text, additionalClassNames = "" }: TextText2Props) {
  return (
    <Wrapper4 additionalClassNames={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[0.5px] whitespace-nowrap">{text}</p>
    </Wrapper4>
  );
}
type Icon9VectorProps = {
  additionalClassNames?: string;
};

function Icon9Vector({ additionalClassNames = "" }: Icon9VectorProps) {
  return (
    <div className={clsx("absolute left-[16.67%] right-[16.67%]", additionalClassNames)}>
      <div className="absolute inset-[-0.83px_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.66667">
          <path d="M0.833333 0.833333H14.1667" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <Wrapper1>
      <path d={svgPaths.p23079900} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
    </Wrapper1>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <Wrapper3 additionalClassNames="h-[20px]">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#cad5e2] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </Wrapper3>
  );
}

function Helper() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className="flex items-center justify-center relative shrink-0 size-[11px]">
      <div className="-rotate-90 flex-none">
        <Icon />
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <Wrapper3 additionalClassNames="h-[16px]">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-[rgba(144,161,185,0.9)] top-[0.5px] whitespace-nowrap">{text}</p>
    </Wrapper3>
  );
}
type Depth3LinkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function Depth3LinkText({ text, additionalClassNames = "" }: Depth3LinkTextProps) {
  return (
    <Wrapper4 additionalClassNames={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-[0.5px] whitespace-nowrap">{text}</p>
    </Wrapper4>
  );
}
type IconProps = {
  additionalClassNames?: string;
};

function Icon({ additionalClassNames = "" }: IconProps) {
  return (
    <div className={clsx("relative size-[11px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.p26a1c040} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function MynauiUserSolid({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[16px]"} data-name="mynaui:user-solid">
      <div className="absolute inset-[15.62%_15.63%_11.02%_15.63%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11.7362">
          <path d={svgPaths.p153d4780} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="메뉴 관리">
      <div className="absolute bg-[#f1f5f9] content-stretch flex items-start left-0 overflow-clip top-0 w-[1359px]" data-name="Layout">
        <div className="bg-[#0f172a] h-[993px] relative shrink-0 w-[240px]" data-name="SidebarContent">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
            <div className="h-[63px] relative shrink-0 w-[240px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div className="absolute bg-[#ff6b2b] content-stretch flex items-center justify-center left-[16px] px-[6px] rounded-[4px] size-[30px] top-[16px]" data-name="Container">
                  <Icon2 additionalClassNames="relative shrink-0">
                    <path d={svgPaths.pc757200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p2100a540} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p8231240} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p387be517} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M15.75 15.75V15.7575" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p53a6e80} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M2.25 9H2.2575" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M9 2.25H9.0075" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M9 12V12.0075" id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M12 9H12.75" id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M15.75 9V9.0075" id="Vector_11" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M9 15.75V15" id="Vector_12" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </Icon2>
                </div>
                <div className="absolute h-[28px] left-[56px] top-[17px] w-[68.023px]" data-name="Text">
                  <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#ff6b2b] text-[0px] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">
                    <span className="font-['Pretendard:Bold',sans-serif] leading-[28px]">QR</span>
                    <span className="font-['Pretendard:Regular',sans-serif] leading-[28px] text-white">order</span>
                  </p>
                </div>
                <div className="absolute bg-[#1d293d] h-[19px] left-[134.02px] rounded-[3px] top-[21.5px] w-[43.461px]" data-name="Text">
                  <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#62748e] text-[10px] top-[2.5px] tracking-[0.1172px] whitespace-nowrap">ADMIN</p>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[200px] pt-[4px] px-[4px] rounded-[4px] size-[24px] top-[19px]" data-name="Button">
                  <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <Icon1Vector>
                      <path d={svgPaths.p48af40} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </Icon1Vector>
                    <Icon1Vector>
                      <path d={svgPaths.p30908200} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </Icon1Vector>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Navigation">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] h-full items-start overflow-clip px-[2px] relative rounded-[inherit]">
                <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0" data-name="Depth1Group">
                  <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[4px] shrink-0 w-[232px]" data-name="Button">
                    <Wrapper3 additionalClassNames="h-[20px]">
                      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">시스템</p>
                    </Wrapper3>
                    <Wrapper1>
                      <path d={svgPaths.pa029e20} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                    </Wrapper1>
                  </div>
                  <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[216px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-l border-solid inset-0 pointer-events-none" />
                    <div className="h-[219px] relative shrink-0 w-full" data-name="Depth2Group">
                      <div className="content-stretch flex flex-col items-start px-[3px] relative size-full">
                        <Button additionalClassNames="bg-[rgba(255,255,255,0.1)]">
                          <Wrapper3 additionalClassNames="h-[16px]">
                            <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.9)] top-[0.5px] whitespace-nowrap">시스템 관리</p>
                          </Wrapper3>
                          <Icon additionalClassNames="shrink-0" />
                        </Button>
                        <div className="absolute content-stretch flex flex-col gap-[2px] h-[167px] items-start left-[12px] pl-[13px] pr-[4px] top-[41px] w-[197px]" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-l border-solid inset-0 pointer-events-none" />
                          <Link>
                            <Depth3LinkText text="공통코드 관리" additionalClassNames="w-[54.867px]" />
                          </Link>
                          <Link>
                            <Depth3LinkText text="사업장 조회" additionalClassNames="w-[65.242px]" />
                          </Link>
                          <Link>
                            <Depth3LinkText text="관리자 관리" additionalClassNames="w-[65.242px]" />
                          </Link>
                          <Link additionalClassNames="bg-[#ff6b2b]">
                            <Wrapper2 additionalClassNames="h-[16px] w-[54.867px]">
                              <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-white top-[0.5px] whitespace-nowrap">메뉴 관리</p>
                            </Wrapper2>
                          </Link>
                          <Link>
                            <Depth3LinkText text="메시지 관리" additionalClassNames="w-[65.242px]" />
                          </Link>
                          <Link>
                            <Depth3LinkText text="규칙 관리" additionalClassNames="w-[65.242px]" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Button>
                      <TextText text="결제 관리" />
                      <Helper />
                    </Button>
                    <Button>
                      <TextText text="이력 관리" />
                      <Helper />
                    </Button>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[4px] shrink-0 w-[232px]" data-name="Depth1Group">
                  <TextText1 text="결제 관리" />
                  <Icon1 />
                </div>
                <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[4px] shrink-0 w-[232px]" data-name="Depth1Group">
                  <TextText1 text="이력 관리" />
                  <Icon1 />
                </div>
              </div>
            </div>
            <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[13px] px-[16px] relative size-full">
                <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute bg-[#ff6b2b] content-stretch flex items-center justify-center left-0 rounded-[4px] size-[32px] top-[2px]" data-name="Container">
                    <MynauiUserSolid className="relative shrink-0 size-[16px]" />
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[44px] top-0 w-[95.742px]" data-name="Container">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">관리자</p>
                    </div>
                    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-[0.5px] whitespace-nowrap">admin</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-[185px] pt-[4px] px-[4px] size-[23px] top-[6.5px]" data-name="Button">
                    <div className="h-[15px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
                        <div className="absolute inset-[-5.56%_-16.67%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 12.5">
                            <path d={svgPaths.pc230b00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[29.17%_12.5%_29.17%_66.67%]" data-name="Vector">
                        <div className="absolute inset-[-10%_-20%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.375 7.5">
                            <path d={svgPaths.p1ab2b100} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1/2 left-[37.5%] right-[12.5%] top-1/2" data-name="Vector">
                        <div className="absolute inset-[-0.63px_-8.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 1.25">
                            <path d="M8.125 0.625H0.625" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
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
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
            <div className="bg-white relative shrink-0 w-full" data-name="Header">
              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[20px] items-center px-[16px] py-[12px] relative w-full">
                  <div className="content-stretch flex flex-col items-start pt-[6px] px-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <Icon9Vector additionalClassNames="bottom-1/2 top-1/2" />
                      <Icon9Vector additionalClassNames="bottom-3/4 top-1/4" />
                      <Icon9Vector additionalClassNames="bottom-1/4 top-3/4" />
                    </div>
                  </div>
                  <div className="content-stretch flex font-['Pretendard:Medium',sans-serif] gap-[20px] h-[20px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.1504px] w-[76.016px] whitespace-nowrap" data-name="Navigation">
                    <p className="relative shrink-0 text-[#ff6b2b]">시스템</p>
                    <p className="relative shrink-0 text-[#1d293d]">게시판</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[936px] rounded-[4px] size-[30px] top-[12.5px]" data-name="Button">
              <Icon2 additionalClassNames="absolute left-[6px] top-[6px]">
                <path d={svgPaths.p985d280} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p2ac55e70} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </Icon2>
              <div className="absolute bg-[#fb2c36] left-[18px] rounded-[16777200px] size-[8px] top-[4px]" data-name="Text" />
            </div>
            <div className="absolute content-stretch flex gap-[8px] h-[44px] items-center left-[986px] px-[10px] rounded-[4px] top-[5.5px] w-[132.789px]" data-name="Button">
              <div className="bg-[#ff6b2b] relative rounded-[4px] shrink-0 size-[28px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <MynauiUserSolid className="relative shrink-0 size-[16px]" />
                </div>
              </div>
              <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                  <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
                    <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[14px] left-0 not-italic text-[#314158] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">관리자</p>
                  </div>
                  <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
                    <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[0.5px] whitespace-nowrap">김철수</p>
                  </div>
                </div>
              </div>
              <Icon3>
                <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </Icon3>
            </div>
            <div className="absolute content-stretch flex flex-col h-[937px] items-start left-0 overflow-clip top-[56px]" data-name="Main Content">
              <div className="content-stretch flex flex-col gap-[16px] h-[937px] items-start pt-[24px] px-[24px] relative shrink-0 w-[1119px]" data-name="CommonCodeManagement">
                <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Navigation">
                  <TextText2 text="시스템" additionalClassNames="w-[31.117px]" />
                  <TextText2 text="/" additionalClassNames="w-[4.008px]" />
                  <TextText2 text="시스템 관리" additionalClassNames="w-[54.867px]" />
                  <TextText2 text="/" additionalClassNames="w-[4.008px]" />
                  <Wrapper2 additionalClassNames="h-[16px] w-[65.156px]">
                    <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[0.5px] whitespace-nowrap">메뉴관리</p>
                  </Wrapper2>
                </div>
                <div className="bg-white h-[70px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
                    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute h-[36px] left-0 top-0 w-[880.492px]" data-name="InputField">
                        <div className="absolute bg-white h-[36px] left-0 rounded-[4px] top-0 w-[880.492px]" data-name="Text Input">
                          <div className="content-stretch flex items-center overflow-clip pl-[36px] pr-[12px] relative rounded-[inherit] size-full">
                            <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cad5e2] text-[14px] tracking-[-0.1504px] whitespace-nowrap">사용자 아이디, 사용자 명으로 검색</p>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        </div>
                        <div className="absolute content-stretch flex items-center left-[12px] size-[14px] top-[11px]" data-name="Text">
                          <Icon4>
                            <Vector>
                              <path d={svgPaths.p30c27980} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                            </Vector>
                            <Vector1>
                              <path d={svgPaths.p31a7b600} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                            </Vector1>
                          </Icon4>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex gap-[8px] h-[36px] items-start left-[888.49px] top-0 w-[148.508px]" data-name="Container">
                        <div className="h-[36px] relative rounded-[4px] shrink-0 w-[66.305px]" data-name="Button">
                          <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] py-px relative size-full">
                            <Wrapper2 additionalClassNames="h-[20px] w-[36.305px]">
                              <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[18.5px] not-italic text-[#314158] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">초기화</p>
                            </Wrapper2>
                          </div>
                        </div>
                        <div className="bg-[#ff6b2b] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[14px] relative size-full">
                              <div className="relative shrink-0 size-[14px]" data-name="Text">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                                  <Icon4>
                                    <Vector>
                                      <path d={svgPaths.p30c27980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                    </Vector>
                                    <Vector1>
                                      <path d={svgPaths.p31a7b600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                    </Vector1>
                                  </Icon4>
                                </div>
                              </div>
                              <Wrapper2 additionalClassNames="h-[20px] w-[24.203px]">
                                <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[12px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">조회</p>
                              </Wrapper2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[767px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <div className="content-stretch flex flex-col items-start p-px relative size-full">
                    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                      <div className="absolute content-stretch flex h-[20px] items-center left-[16px] top-[14px] w-[105.578px]" data-name="Container">
                        <Wrapper3 additionalClassNames="h-[20px]">
                          <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">메뉴 목록</p>
                        </Wrapper3>
                      </div>
                      <div className="absolute content-stretch flex gap-[4px] h-[28px] items-center left-[805.82px] top-[10px] w-[247.18px]" data-name="Container">
                        <Button1>
                          <Icon3>
                            <path d="M10.5 8.75L7 5.25L3.5 8.75" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          </Icon3>
                        </Button1>
                        <Button1>
                          <Icon3>
                            <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          </Icon3>
                        </Button1>
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
                            <Wrapper2 additionalClassNames="h-[16px] w-[20.742px]">
                              <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[10.5px] not-italic text-[#314158] text-[12px] text-center top-[0.5px] whitespace-nowrap">저장</p>
                            </Wrapper2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[251px] overflow-clip relative shrink-0 w-full" data-name="Table">
                      <div className="absolute h-[36.5px] left-0 top-0 w-[1069px]" data-name="Table Header">
                        <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-b border-solid h-[36.5px] left-0 top-0 w-[1069px]" data-name="Table Row">
                          <HeaderCell text="메뉴코드" text1="*" additionalClassNames="left-0" />
                          <HeaderCell text="메뉴 명" text1="*" additionalClassNames="left-[297.65px]" />
                          <div className="absolute h-[36.5px] left-[595.3px] top-0 w-[329.703px]" data-name="Header Cell">
                            <p className="absolute font-['Inter:Medium',sans-serif] font-['Pretendard:Medium',sans-serif] font-medium leading-[0] left-[12px] not-italic text-[#62748e] text-[12px] top-[10.5px] whitespace-nowrap">
                              <span className="leading-[16px]">{`메뉴주소 `}</span>
                              <span className="leading-[16px] text-[#ff6467]">*</span>
                            </p>
                          </div>
                          <div className="absolute h-[36.5px] left-[925px] top-0 w-[144px]" data-name="Header Cell" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-0 top-[36.5px] w-[1069px]" data-name="Table Body">
                        <div className="bg-[#f8fafc] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
                          <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                          <div className="h-[43px] relative shrink-0 w-[297.648px]" data-name="Table Cell">
                            <div className="absolute content-stretch flex h-[30px] items-center left-[8px] top-[6.5px] w-[281.648px]" data-name="InputField">
                              <TextInputText text="MENU001" />
                            </div>
                          </div>
                          <div className="h-[43px] relative shrink-0 w-[297.648px]" data-name="Table Cell">
                            <div className="absolute content-stretch flex h-[30px] items-center left-[8px] top-[6.5px] w-[281.648px]" data-name="InputField">
                              <TextInputText1 text="햄버거" />
                            </div>
                          </div>
                          <div className="h-[43px] relative shrink-0 w-[297.648px]" data-name="Table Cell">
                            <div className="absolute content-stretch flex h-[30px] items-center left-[8px] top-[6.5px] w-[281.648px]" data-name="InputField">
                              <TextInputText1 text="햄버거" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
                          <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                          <div className="h-[43px] relative shrink-0 w-[297.648px]" data-name="Table Cell">
                            <div className="absolute content-stretch flex h-[30px] items-center left-[8px] top-[6.5px] w-[281.648px]" data-name="InputField">
                              <TextInputText text="MENU001" />
                            </div>
                          </div>
                          <div className="h-[43px] relative shrink-0 w-[297.648px]" data-name="Table Cell">
                            <div className="absolute content-stretch flex h-[30px] items-center left-[8px] top-[6.5px] w-[281.648px]" data-name="InputField">
                              <TextInputText1 text="햄버거" />
                            </div>
                          </div>
                          <div className="h-[43px] relative shrink-0 w-[297.648px]" data-name="Table Cell">
                            <div className="absolute content-stretch flex h-[30px] items-center left-[8px] top-[6.5px] w-[281.648px]" data-name="InputField">
                              <TextInputText1 text="햄버거" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#fff8f4] content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
                          <div aria-hidden="true" className="absolute border-[#ff6b2b] border-l-2 border-solid inset-0 pointer-events-none" />
                          <div className="h-[43px] relative shrink-0 w-[297.648px]" data-name="Table Cell">
                            <div className="absolute content-stretch flex h-[30px] items-center left-[8px] top-[6.5px] w-[281.648px]" data-name="InputField">
                              <TextInputText text="MENU001" />
                            </div>
                          </div>
                          <div className="h-[43px] relative shrink-0 w-[297.648px]" data-name="Table Cell">
                            <div className="absolute content-stretch flex h-[30px] items-center left-[8px] top-[6.5px] w-[281.648px]" data-name="InputField">
                              <TextInputText1 text="햄버거" />
                            </div>
                          </div>
                          <div className="h-[43px] relative shrink-0 w-[297.648px]" data-name="Table Cell">
                            <div className="absolute content-stretch flex h-[30px] items-center left-[8px] top-[6.5px] w-[281.648px]" data-name="InputField">
                              <TextInputText1 text="햄버거" />
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
        </div>
      </div>
    </div>
  );
}