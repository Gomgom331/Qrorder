import clsx from "clsx";
import svgPaths from "./svg-p19hge0zin";
type TextProps = {
  additionalClassNames?: string;
};

function Text({ children, additionalClassNames = "" }: React.PropsWithChildren<TextProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">{children}</div>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={clsx("min-h-px min-w-px relative", additionalClassNames)}>
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
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper4 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper4 additionalClassNames={clsx("min-h-px min-w-px relative", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper4 additionalClassNames={clsx("h-[16px] relative", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper1Props = {
  additionalClassNames?: string;
};
type ButtonProps = {
  text: string;
};

function Button({ children, text }: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className="flex-[140.5_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[58.146px] py-[0.667px] relative size-full">
          <Wrapper1 additionalClassNames="h-[20px]" additionalClassNames="w-[24.208px]">
            <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[12.5px] not-italic text-[#314158] text-[14px] text-center top-[-0.67px] whitespace-nowrap">{text}</p>
          </Wrapper1>
        </div>
      </div>
    </div>
  );
}

function Icon4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[11px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Icon" opacity="0.5">
          {children}
        </g>
      </svg>
    </div>
  );
}
type Icon3Props = {
  additionalClassNames?: string;
};

function Icon3({ children, additionalClassNames = "" }: React.PropsWithChildren<Icon3Props>) {
  return (
    <div className={clsx("size-[18px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Vector2({ children }: React.PropsWithChildren<{}>) {
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

function Vector1({ children }: React.PropsWithChildren<{}>) {
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

function Vector({ children }: React.PropsWithChildren<{}>) {
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

function Wrapper({ children }: React.PropsWithChildren<{}>) {
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
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#45556c] text-[12px] top-[-0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextInputTextProps = {
  text: string;
};

function TextInputText({ text }: TextInputTextProps) {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] relative size-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#45556c] text-[14px] whitespace-nowrap">{text}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}
type LabelText1Props = {
  text: string;
};

function LabelText1({ text }: LabelText1Props) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-[-0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[-0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type Depth1GroupTextProps = {
  text: string;
  additionalClassNames?: string;
};

function Depth1GroupText({ text, additionalClassNames = "" }: Depth1GroupTextProps) {
  return (
    <Wrapper1 additionalClassNames="h-[20px]">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.67px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}

function Icon2() {
  return (
    <Wrapper>
      <path d={svgPaths.p23079900} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
    </Wrapper>
  );
}
type TextText5Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText5({ text, additionalClassNames = "" }: TextText5Props) {
  return (
    <Wrapper4 additionalClassNames={clsx("h-[20px] min-h-px min-w-px relative", additionalClassNames)}>
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#cad5e2] text-[14px] top-[-0.67px] whitespace-nowrap">{text}</p>
    </Wrapper4>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full">
      <Vector>
        <path d={svgPaths.p48af40} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </Vector>
      <Vector>
        <path d={svgPaths.p30908200} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </Vector>
    </div>
  );
}
type Icon10VectorProps = {
  additionalClassNames?: string;
};

function Icon10Vector({ additionalClassNames = "" }: Icon10VectorProps) {
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
type TextText4Props = {
  text: string;
};

function TextText4({ text }: TextText4Props) {
  return (
    <div className="absolute h-[12px] left-[6px] top-[2px] w-[33.271px]">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[12px] left-[17px] not-italic text-[#1447e6] text-[12px] text-center top-[-0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_59_2526)" id="Icon">
          <path d={svgPaths.p27b3900} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 2.5L9.5 4.5" id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_59_2526">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
type TextText3Props = {
  text: string;
};

function TextText3({ text }: TextText3Props) {
  return (
    <div className="absolute h-[12px] left-[6px] top-[2px] w-[26.135px]">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[12px] left-[13.5px] not-italic text-[#45556c] text-[12px] text-center top-[-0.33px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TableCellText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText2({ text, additionalClassNames = "" }: TableCellText2Props) {
  return (
    <div className={clsx("absolute left-[629.8px] top-0 w-[156.938px]", additionalClassNames)}>
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[12px] not-italic text-[#45556c] text-[14px] top-[11.67px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TableCellText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText1({ text, additionalClassNames = "" }: TableCellText1Props) {
  return (
    <div className={clsx("absolute left-[283.29px] top-0 w-[211.844px]", additionalClassNames)}>
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[12px] not-italic text-[#314158] text-[14px] top-[11.67px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText({ text, additionalClassNames = "" }: TableCellTextProps) {
  return (
    <div className={clsx("absolute left-[40px] top-0 w-[243.292px]", additionalClassNames)}>
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-[12px] not-italic text-[#45556c] text-[12px] top-[14px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeaderCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeaderCellText({ text, additionalClassNames = "" }: HeaderCellTextProps) {
  return (
    <div className={clsx("absolute h-[40.667px] top-0", additionalClassNames)}>
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[12px] not-italic text-[#62748e] text-[12px] top-[11.83px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextText2Props = {
  text: string;
};

function TextText2({ text }: TextText2Props) {
  return (
    <Wrapper3 additionalClassNames="flex-[1_0_0] h-[20px]">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[-0.67px] whitespace-nowrap">{text}</p>
    </Wrapper3>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <Wrapper1 additionalClassNames="h-[20px]" additionalClassNames="w-[24.208px]">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[12.5px] not-italic text-[14px] text-center text-white top-[-0.67px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <Wrapper4 additionalClassNames={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[-0.33px] whitespace-nowrap">{text}</p>
    </Wrapper4>
  );
}

export default function Qrorder() {
  return (
    <div className="bg-white relative size-full" data-name="qrorder">
      <div className="absolute bg-white content-stretch flex flex-col h-[939.333px] items-start left-0 overflow-clip top-0 w-[1319.333px]" data-name="Body">
        <div className="bg-[#f1f5f9] h-[939.333px] relative shrink-0 w-full" data-name="Layout">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-start pl-[240px] relative size-full">
              <Wrapper3 additionalClassNames="flex-[1079.333_0_0] h-[939.333px]">
                <div className="absolute content-stretch flex flex-col h-[883.333px] items-start left-0 overflow-clip top-[56px] w-[1079.333px]" data-name="Main Content">
                  <div className="h-[584.333px] relative shrink-0 w-full" data-name="PaymentPlanManagement">
                    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
                      <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Navigation">
                        <TextText text="시스템" additionalClassNames="w-[31.115px]" />
                        <TextText text="/" additionalClassNames="w-[4.01px]" />
                        <TextText text="결제관리" additionalClassNames="w-[41.49px]" />
                        <TextText text="/" additionalClassNames="w-[4.01px]" />
                        <Wrapper2 additionalClassNames="shrink-0 w-[62.229px]">
                          <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[-0.33px] whitespace-nowrap">결제요금관리</p>
                        </Wrapper2>
                      </div>
                      <div className="bg-white h-[69.333px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                        <div className="content-stretch flex flex-col items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
                          <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
                            <div className="absolute h-[36px] left-0 top-0 w-[842.156px]" data-name="InputField">
                              <div className="absolute bg-white h-[36px] left-0 rounded-[4px] top-0 w-[842.156px]" data-name="Text Input">
                                <div className="content-stretch flex items-center overflow-clip pl-[36px] pr-[12px] relative rounded-[inherit] size-full">
                                  <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cad5e2] text-[14px] whitespace-nowrap">결제 요금 코드, 결제 요금 명으로 검색</p>
                                </div>
                                <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              </div>
                              <div className="absolute content-stretch flex items-center left-[12px] size-[14px] top-[11px]" data-name="Text">
                                <Wrapper5 additionalClassNames="flex-[1_0_0] h-[14px]">
                                  <Vector1>
                                    <path d={svgPaths.p30c27980} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                  </Vector1>
                                  <Vector2>
                                    <path d={svgPaths.p31a7b600} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                  </Vector2>
                                </Wrapper5>
                              </div>
                            </div>
                            <div className="absolute content-stretch flex gap-[8px] h-[36px] items-start left-[850.16px] top-0 w-[147.844px]" data-name="Container">
                              <div className="h-[36px] relative rounded-[4px] shrink-0 w-[65.635px]" data-name="Button">
                                <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[14.667px] py-[0.667px] relative size-full">
                                  <Wrapper1 additionalClassNames="h-[20px]" additionalClassNames="w-[36.302px]">
                                    <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[18.5px] not-italic text-[#314158] text-[14px] text-center top-[-0.67px] whitespace-nowrap">초기화</p>
                                  </Wrapper1>
                                </div>
                              </div>
                              <div className="bg-[#ff6b2b] h-[36px] relative rounded-[4px] shrink-0 w-[74.208px]" data-name="Button">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[14px] relative size-full">
                                  <Text additionalClassNames="size-[14px]">
                                    <Wrapper5 additionalClassNames="flex-[1_0_0] h-[14px]">
                                      <Vector1>
                                        <path d={svgPaths.p30c27980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                      </Vector1>
                                      <Vector2>
                                        <path d={svgPaths.p31a7b600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                      </Vector2>
                                    </Wrapper5>
                                  </Text>
                                  <TextText1 text="조회" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white h-[403px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                        <div className="content-stretch flex flex-col items-start p-[0.667px] relative size-full">
                          <div className="h-[48.667px] relative shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex items-center justify-between pb-[0.667px] px-[16px] relative size-full">
                                <div className="h-[20px] relative shrink-0 w-[120.531px]" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                                    <TextText2 text="결제 요금 목록" />
                                    <Wrapper1 additionalClassNames="h-[20px]" additionalClassNames="bg-[rgba(255,107,43,0.1)] rounded-[3px] w-[33.094px]">
                                      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[8px] not-italic text-[#ff6b2b] text-[12px] top-[1.67px] whitespace-nowrap">7건</p>
                                    </Wrapper1>
                                  </div>
                                </div>
                                <div className="h-[28px] relative shrink-0 w-[107.833px]" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
                                    <div className="bg-[#ff6b2b] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[3px]" data-name="Button">
                                      <div className="flex flex-row items-center justify-center size-full">
                                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[10px] relative size-full">
                                          <Text additionalClassNames="size-[13px]">
                                            <Wrapper5 additionalClassNames="flex-[1_0_0] h-[13px]">
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
                                            </Wrapper5>
                                          </Text>
                                          <Wrapper2 additionalClassNames="shrink-0 w-[20.75px]">
                                            <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[10.5px] not-italic text-[12px] text-center text-white top-[-0.33px] whitespace-nowrap">신규</p>
                                          </Wrapper2>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="h-[28px] opacity-40 relative rounded-[3px] shrink-0 w-[42.083px]" data-name="Button">
                                      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[3px]" />
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.667px] py-[0.667px] relative size-full">
                                        <Wrapper2 additionalClassNames="shrink-0 w-[20.75px]">
                                          <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[10.5px] not-italic text-[#cad5e2] text-[12px] text-center top-[-0.33px] whitespace-nowrap">삭제</p>
                                        </Wrapper2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-[353px] overflow-clip relative shrink-0 w-full" data-name="Table">
                            <div className="absolute h-[40.667px] left-0 top-0 w-[1030px]" data-name="Table Header">
                              <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-b-[0.667px] border-solid h-[40.667px] left-0 top-0 w-[1030px]" data-name="Table Row">
                                <div className="absolute h-[40.667px] left-0 top-0 w-[40px]" data-name="Header Cell">
                                  <div className="absolute h-[15px] left-[13px] top-[10px] w-[14px]" data-name="CheckboxField">
                                    <div className="absolute bg-white border-[#cad5e2] border-[0.667px] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />
                                  </div>
                                </div>
                                <HeaderCellText text="결제 요금 코드" additionalClassNames="left-[40px] w-[243.292px]" />
                                <HeaderCellText text="결제 요금 명" additionalClassNames="left-[283.29px] w-[211.844px]" />
                                <div className="absolute h-[40.667px] left-[495.14px] top-0 w-[134.667px]" data-name="Header Cell">
                                  <p className="-translate-x-full absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[123.25px] not-italic text-[#62748e] text-[12px] text-right top-[11.83px] whitespace-nowrap">결제 요금</p>
                                </div>
                                <HeaderCellText text="결제 요금 단위" additionalClassNames="left-[629.8px] w-[156.938px]" />
                                <div className="absolute h-[40.667px] left-[786.74px] top-0 w-[179.26px]" data-name="Header Cell">
                                  <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[90.04px] not-italic text-[#62748e] text-[12px] text-center top-[11.83px] whitespace-nowrap">라이센스기간(월)</p>
                                </div>
                                <div className="absolute h-[40.667px] left-[966px] top-0 w-[64px]" data-name="Header Cell" />
                              </div>
                            </div>
                            <div className="absolute h-[312.333px] left-0 top-[40.67px] w-[1030px]" data-name="Table Body">
                              <div className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid h-[44.667px] left-0 top-0 w-[1030px]" data-name="Table Row">
                                <div className="absolute h-[44.667px] left-0 top-0 w-[40px]" data-name="Table Cell">
                                  <div className="absolute h-[15px] left-[12px] top-[12.17px] w-[14px]" data-name="CheckboxField">
                                    <div className="absolute bg-white border-[#cad5e2] border-[0.667px] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />
                                  </div>
                                </div>
                                <TableCellText text="BASIC_MONTHLY" additionalClassNames="h-[44.667px]" />
                                <TableCellText1 text="베이직 월간" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[495.14px] top-0 w-[134.667px]" data-name="Table Cell">
                                  <p className="-translate-x-full absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[122.69px] not-italic text-[#1d293d] text-[14px] text-right top-[11.67px] whitespace-nowrap">29,000</p>
                                </div>
                                <TableCellText2 text="원/월" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[786.74px] top-0 w-[179.26px]" data-name="Table Cell">
                                  <div className="absolute bg-[#f1f5f9] h-[16px] left-[70.56px] rounded-[3px] top-[15px] w-[38.135px]" data-name="Tag">
                                    <TextText3 text="1개월" />
                                  </div>
                                </div>
                                <div className="absolute h-[44.667px] left-[966px] top-0 w-[64px]" data-name="Table Cell">
                                  <div className="absolute content-stretch flex items-center justify-center left-[12px] px-[6px] rounded-[4px] size-[24px] top-[10.33px]" data-name="Button">
                                    <Icon />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid h-[44.667px] left-0 top-[44.67px] w-[1030px]" data-name="Table Row">
                                <div className="absolute h-[44.667px] left-0 top-0 w-[40px]" data-name="Table Cell">
                                  <div className="absolute h-[15px] left-[12px] top-[12.17px] w-[14px]" data-name="CheckboxField">
                                    <div className="absolute bg-white border-[#cad5e2] border-[0.667px] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />
                                  </div>
                                </div>
                                <TableCellText text="BASIC_YEARLY" additionalClassNames="h-[44.667px]" />
                                <TableCellText1 text="베이직 연간" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[495.14px] top-0 w-[134.667px]" data-name="Table Cell">
                                  <p className="-translate-x-full absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[123.04px] not-italic text-[#1d293d] text-[14px] text-right top-[11.67px] whitespace-nowrap">290,000</p>
                                </div>
                                <TableCellText2 text="원/년" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[786.74px] top-0 w-[179.26px]" data-name="Table Cell">
                                  <div className="absolute bg-[#dbeafe] h-[16px] left-[66.99px] rounded-[3px] top-[15px] w-[45.271px]" data-name="Tag">
                                    <TextText4 text="12개월" />
                                  </div>
                                </div>
                                <div className="absolute h-[44.667px] left-[966px] top-0 w-[64px]" data-name="Table Cell">
                                  <div className="absolute content-stretch flex items-center justify-center left-[12px] px-[6px] rounded-[4px] size-[24px] top-[10.33px]" data-name="Button">
                                    <Icon />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid h-[44.667px] left-0 top-[89.33px] w-[1030px]" data-name="Table Row">
                                <div className="absolute h-[44.667px] left-0 top-0 w-[40px]" data-name="Table Cell">
                                  <div className="absolute h-[15px] left-[12px] top-[12.17px] w-[14px]" data-name="CheckboxField">
                                    <div className="absolute bg-white border-[#cad5e2] border-[0.667px] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />
                                  </div>
                                </div>
                                <TableCellText text="PRO_MONTHLY" additionalClassNames="h-[44.667px]" />
                                <TableCellText1 text="프로 월간" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[495.14px] top-0 w-[134.667px]" data-name="Table Cell">
                                  <p className="-translate-x-full absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[123.52px] not-italic text-[#1d293d] text-[14px] text-right top-[11.67px] whitespace-nowrap">59,000</p>
                                </div>
                                <TableCellText2 text="원/월" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[786.74px] top-0 w-[179.26px]" data-name="Table Cell">
                                  <div className="absolute bg-[#f1f5f9] h-[16px] left-[70.56px] rounded-[3px] top-[15px] w-[38.135px]" data-name="Tag">
                                    <TextText3 text="1개월" />
                                  </div>
                                </div>
                                <div className="absolute h-[44.667px] left-[966px] top-0 w-[64px]" data-name="Table Cell">
                                  <div className="absolute content-stretch flex items-center justify-center left-[12px] px-[6px] rounded-[4px] size-[24px] top-[10.33px]" data-name="Button">
                                    <Icon />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid h-[44.667px] left-0 top-[134px] w-[1030px]" data-name="Table Row">
                                <div className="absolute h-[44.667px] left-0 top-0 w-[40px]" data-name="Table Cell">
                                  <div className="absolute h-[15px] left-[12px] top-[12.17px] w-[14px]" data-name="CheckboxField">
                                    <div className="absolute bg-white border-[#cad5e2] border-[0.667px] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />
                                  </div>
                                </div>
                                <TableCellText text="PRO_YEARLY" additionalClassNames="h-[44.667px]" />
                                <TableCellText1 text="프로 연간" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[495.14px] top-0 w-[134.667px]" data-name="Table Cell">
                                  <p className="-translate-x-full absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[122.88px] not-italic text-[#1d293d] text-[14px] text-right top-[11.67px] whitespace-nowrap">590,000</p>
                                </div>
                                <TableCellText2 text="원/년" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[786.74px] top-0 w-[179.26px]" data-name="Table Cell">
                                  <div className="absolute bg-[#dbeafe] h-[16px] left-[66.99px] rounded-[3px] top-[15px] w-[45.271px]" data-name="Tag">
                                    <TextText4 text="12개월" />
                                  </div>
                                </div>
                                <div className="absolute h-[44.667px] left-[966px] top-0 w-[64px]" data-name="Table Cell">
                                  <div className="absolute content-stretch flex items-center justify-center left-[12px] px-[6px] rounded-[4px] size-[24px] top-[10.33px]" data-name="Button">
                                    <Icon />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid h-[44.667px] left-0 top-[178.67px] w-[1030px]" data-name="Table Row">
                                <div className="absolute h-[44.667px] left-0 top-0 w-[40px]" data-name="Table Cell">
                                  <div className="absolute h-[15px] left-[12px] top-[12.17px] w-[14px]" data-name="CheckboxField">
                                    <div className="absolute bg-white border-[#cad5e2] border-[0.667px] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />
                                  </div>
                                </div>
                                <TableCellText text="ENTERPRISE_MONTHLY" additionalClassNames="h-[44.667px]" />
                                <TableCellText1 text="엔터프라이즈 월간" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[495.14px] top-0 w-[134.667px]" data-name="Table Cell">
                                  <p className="-translate-x-full absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[123.29px] not-italic text-[#1d293d] text-[14px] text-right top-[11.67px] whitespace-nowrap">99,000</p>
                                </div>
                                <TableCellText2 text="원/월" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[786.74px] top-0 w-[179.26px]" data-name="Table Cell">
                                  <div className="absolute bg-[#f1f5f9] h-[16px] left-[70.56px] rounded-[3px] top-[15px] w-[38.135px]" data-name="Tag">
                                    <TextText3 text="1개월" />
                                  </div>
                                </div>
                                <div className="absolute h-[44.667px] left-[966px] top-0 w-[64px]" data-name="Table Cell">
                                  <div className="absolute content-stretch flex items-center justify-center left-[12px] px-[6px] rounded-[4px] size-[24px] top-[10.33px]" data-name="Button">
                                    <Icon />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid h-[44.667px] left-0 top-[223.33px] w-[1030px]" data-name="Table Row">
                                <div className="absolute h-[44.667px] left-0 top-0 w-[40px]" data-name="Table Cell">
                                  <div className="absolute h-[15px] left-[12px] top-[12.17px] w-[14px]" data-name="CheckboxField">
                                    <div className="absolute bg-white border-[#cad5e2] border-[0.667px] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />
                                  </div>
                                </div>
                                <TableCellText text="ENTERPRISE_YEARLY" additionalClassNames="h-[44.667px]" />
                                <TableCellText1 text="엔터프라이즈 연간" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[495.14px] top-0 w-[134.667px]" data-name="Table Cell">
                                  <p className="-translate-x-full absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[123.65px] not-italic text-[#1d293d] text-[14px] text-right top-[11.67px] whitespace-nowrap">990,000</p>
                                </div>
                                <TableCellText2 text="원/년" additionalClassNames="h-[44.667px]" />
                                <div className="absolute h-[44.667px] left-[786.74px] top-0 w-[179.26px]" data-name="Table Cell">
                                  <div className="absolute bg-[#dbeafe] h-[16px] left-[66.99px] rounded-[3px] top-[15px] w-[45.271px]" data-name="Tag">
                                    <TextText4 text="12개월" />
                                  </div>
                                </div>
                                <div className="absolute h-[44.667px] left-[966px] top-0 w-[64px]" data-name="Table Cell">
                                  <div className="absolute content-stretch flex items-center justify-center left-[12px] px-[6px] rounded-[4px] size-[24px] top-[10.33px]" data-name="Button">
                                    <Icon />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute h-[44.333px] left-0 top-[268px] w-[1030px]" data-name="Table Row">
                                <div className="absolute h-[44.333px] left-0 top-0 w-[40px]" data-name="Table Cell">
                                  <div className="absolute h-[15px] left-[12px] top-[12.17px] w-[14px]" data-name="CheckboxField">
                                    <div className="absolute bg-white border-[#cad5e2] border-[0.667px] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />
                                  </div>
                                </div>
                                <TableCellText text="STARTER_MONTHLY" additionalClassNames="h-[44.333px]" />
                                <TableCellText1 text="스타터 월간" additionalClassNames="h-[44.333px]" />
                                <div className="absolute h-[44.333px] left-[495.14px] top-0 w-[134.667px]" data-name="Table Cell">
                                  <p className="-translate-x-full absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[123.02px] not-italic text-[#1d293d] text-[14px] text-right top-[11.67px] whitespace-nowrap">0</p>
                                </div>
                                <TableCellText2 text="무료" additionalClassNames="h-[44.333px]" />
                                <div className="absolute h-[44.333px] left-[786.74px] top-0 w-[179.26px]" data-name="Table Cell">
                                  <div className="absolute bg-[#f1f5f9] h-[16px] left-[70.56px] rounded-[3px] top-[15px] w-[38.135px]" data-name="Tag">
                                    <TextText3 text="1개월" />
                                  </div>
                                </div>
                                <div className="absolute h-[44.333px] left-[966px] top-0 w-[64px]" data-name="Table Cell">
                                  <div className="absolute content-stretch flex items-center justify-center left-[12px] px-[6px] rounded-[4px] size-[24px] top-[10.33px]" data-name="Button">
                                    <Icon />
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
                <div className="absolute bg-white border-[#e2e8f0] border-b-[0.667px] border-solid h-[56px] left-0 top-0 w-[1079.333px]" data-name="Header">
                  <div className="absolute content-stretch flex flex-col items-start left-[16px] pt-[6px] px-[6px] rounded-[4px] size-[32px] top-[11.67px]" data-name="Button">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <Icon10Vector additionalClassNames="bottom-1/2 top-1/2" />
                      <Icon10Vector additionalClassNames="bottom-3/4 top-1/4" />
                      <Icon10Vector additionalClassNames="bottom-1/4 top-3/4" />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex h-[20px] items-center left-[68px] top-[17.67px] w-[76.021px]" data-name="Navigation">
                    <TextText2 text="시스템 게시판" />
                  </div>
                  <div className="absolute left-[880.54px] rounded-[4px] size-[30px] top-[12.67px]" data-name="Button">
                    <Icon3 additionalClassNames="absolute left-[6px] top-[6px]">
                      <path d={svgPaths.p985d280} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p2ac55e70} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </Icon3>
                    <div className="absolute bg-[#fb2c36] left-[18px] rounded-[22369600px] size-[8px] top-[4px]" data-name="Text" />
                  </div>
                  <div className="absolute content-stretch flex gap-[8px] h-[44px] items-center left-[930.54px] pl-[10px] rounded-[4px] top-[5.67px] w-[132.792px]" data-name="Button">
                    <div className="bg-[#ff6b2b] relative rounded-[4px] shrink-0 size-[28px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">관</p>
                      </div>
                    </div>
                    <div className="h-[32px] relative shrink-0 w-[54.792px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                        <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
                          <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[14px] left-0 not-italic text-[#314158] text-[14px] top-[-0.33px] whitespace-nowrap">관리자</p>
                        </div>
                        <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
                          <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[-0.33px] whitespace-nowrap">슈퍼 어드민</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[14px]" data-name="Icon">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <g id="Icon">
                          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Wrapper3>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0f172a] content-stretch flex flex-col h-[939.333px] items-start left-0 top-0 w-[240px]" data-name="SidebarContent">
        <div className="h-[62.667px] relative shrink-0 w-[240px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute bg-[#ff6b2b] content-stretch flex items-center justify-center left-[16px] px-[6px] rounded-[4px] size-[30px] top-[16px]" data-name="Container">
              <Icon3 additionalClassNames="relative shrink-0">
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
              </Icon3>
            </div>
            <div className="absolute h-[28px] left-[56px] top-[17px] w-[68.031px]" data-name="Text">
              <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#ff6b2b] text-[0px] text-[18px] top-[-0.33px] whitespace-nowrap">
                <span className="leading-[28px]">QR</span>
                <span className="font-['Pretendard:Regular',sans-serif] leading-[28px] text-white">order</span>
              </p>
            </div>
            <div className="absolute bg-[#1d293d] h-[19px] left-[134.03px] rounded-[3px] top-[21.5px] w-[43.458px]" data-name="Text">
              <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#62748e] text-[10px] top-[2.33px] whitespace-nowrap">ADMIN</p>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[200px] pt-[4px] px-[4px] rounded-[4px] size-[24px] top-[19px]" data-name="Button">
              <Icon1 />
            </div>
          </div>
        </div>
        <Wrapper5 additionalClassNames="flex-[816_0_0] w-[240px]">
          <div className="absolute content-stretch flex h-[40px] items-center left-[6px] pl-[16px] rounded-[4px] top-[12px] w-[228px]" data-name="Link">
            <Wrapper1 additionalClassNames="h-[20px]" additionalClassNames="w-[48.406px]">
              <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#cad5e2] text-[14px] top-[-0.67px] whitespace-nowrap">대시보드</p>
            </Wrapper1>
          </div>
          <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[6px] px-[16px] rounded-[4px] top-[54px] w-[232px]" data-name="Depth1Group">
            <TextText5 text="주문 관리" additionalClassNames="flex-[179_0_0]" />
            <Icon2 />
          </div>
          <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[6px] px-[16px] rounded-[4px] top-[96px] w-[232px]" data-name="Depth1Group">
            <TextText5 text="QR 매장 관리" additionalClassNames="flex-[179_0_0]" />
            <Icon2 />
          </div>
          <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[6px] px-[16px] rounded-[4px] top-[138px] w-[232px]" data-name="Depth1Group">
            <TextText5 text="메뉴 관리" additionalClassNames="flex-[179_0_0]" />
            <Icon2 />
          </div>
          <div className="absolute h-[206px] left-[4px] top-[180px] w-[232px]" data-name="Depth1Group">
            <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] h-[40px] items-center left-[2px] px-[16px] rounded-[4px] top-0 w-[232px]" data-name="Button">
              <Wrapper3 additionalClassNames="flex-[179_0_0] h-[20px]">
                <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-[-0.67px] whitespace-nowrap">시스템</p>
              </Wrapper3>
              <Wrapper>
                <path d={svgPaths.pa029e20} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </Wrapper>
            </div>
            <div className="absolute border-[rgba(255,255,255,0.1)] border-l-[0.667px] border-solid h-[164px] left-[16px] top-[42px] w-[216px]" data-name="Container">
              <div className="absolute content-stretch flex gap-[8px] h-[28px] items-center left-[10px] px-[12px] rounded-[3px] top-0 w-[209.333px]" data-name="Depth2Group">
                <Wrapper2 additionalClassNames="flex-[166.333_0_0] min-h-px min-w-px">
                  <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[-0.33px] whitespace-nowrap">시스템 관리</p>
                </Wrapper2>
                <Icon4>
                  <path d={svgPaths.p1a78e480} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
                </Icon4>
              </div>
              <div className="absolute h-[58px] left-[6px] top-[30px] w-[209.333px]" data-name="Depth2Group">
                <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] h-[28px] items-center left-[4px] px-[12px] rounded-[3px] top-0 w-[209.333px]" data-name="Button">
                  <Wrapper2 additionalClassNames="flex-[166.333_0_0] min-h-px min-w-px">
                    <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.9)] top-[-0.33px] whitespace-nowrap">결제관리</p>
                  </Wrapper2>
                  <Icon4>
                    <path d={svgPaths.p26a1c040} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="0.916667" />
                  </Icon4>
                </div>
                <div className="absolute content-stretch flex flex-col h-[28px] items-start left-[12px] pl-[12.667px] pr-[4px] top-[30px] w-[197.333px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-l-[0.667px] border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#ff6b2b] h-[28px] relative rounded-[3px] shrink-0 w-full" data-name="Link">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center pl-[12px] relative size-full">
                        <Wrapper2 additionalClassNames="shrink-0 w-[62.229px]">
                          <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[12px] text-white top-[-0.33px] whitespace-nowrap">결제요금관리</p>
                        </Wrapper2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex h-[36px] items-center left-[10px] pl-[12px] rounded-[4px] top-[90px] w-[201.333px]" data-name="Link">
                <Depth1GroupText text="관리자 관리" additionalClassNames="w-[64.021px]" />
              </div>
              <div className="absolute content-stretch flex h-[36px] items-center left-[10px] pl-[12px] rounded-[4px] top-[128px] w-[201.333px]" data-name="Link">
                <Depth1GroupText text="통계" additionalClassNames="w-[24.208px]" />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[6px] px-[16px] rounded-[4px] top-[390px] w-[232px]" data-name="Depth1Group">
            <div className="relative shrink-0 size-[16px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_59_2550)" id="Icon">
                  <path d={svgPaths.p18faf400} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
                <defs>
                  <clipPath id="clip0_59_2550">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <TextText5 text="UI 가이드" additionalClassNames="flex-[147_0_0]" />
            <Icon2 />
          </div>
        </Wrapper5>
        <div className="h-[60.667px] relative shrink-0 w-[240px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12.667px] px-[16px] relative size-full">
            <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute bg-[#ff6b2b] content-stretch flex items-center justify-center left-0 rounded-[4px] size-[32px] top-[2px]" data-name="Container">
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">관</p>
              </div>
              <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[44px] top-0 w-[85.76px]" data-name="Container">
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Container">
                  <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-[-0.67px] whitespace-nowrap">관리자</p>
                </div>
                <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Container">
                  <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#62748e] text-[12px] top-[-0.33px] whitespace-nowrap">admin_manager</p>
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
      <div className="absolute h-[939.333px] left-0 top-0 w-[1319.333px]" data-name="Modal">
        <div className="absolute bg-[rgba(0,0,0,0.5)] h-[939.333px] left-0 top-0 w-[1319.333px]" data-name="Container" />
        <div className="absolute bg-white content-stretch flex flex-col h-[845.396px] items-start left-[339.67px] rounded-[8px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-[46.97px] w-[640px]" data-name="Container">
          <div className="h-[59.667px] relative shrink-0 w-[640px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[0.667px] px-[20px] relative size-full">
              <Wrapper1 additionalClassNames="h-[27px] w-[102.135px]">
                <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#1d293d] text-[18px] top-[-1px] whitespace-nowrap">결제 요금 상세</p>
              </Wrapper1>
              <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
                  <Icon1 />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[785.729_0_0] min-h-px min-w-px relative w-[640px]" data-name="Container">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[20px] pr-[35.333px] pt-[16px] relative size-full">
                <div className="content-stretch flex flex-col gap-[20px] h-[816.333px] items-start relative shrink-0 w-full" data-name="PaymentPlanManagement">
                  <div className="bg-[#eff6ff] h-[100.333px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
                      <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
                        <p className="absolute font-['Pretendard:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#1c398e] text-[14px] top-[-0.67px] whitespace-nowrap">💡 메뉴 정보</p>
                      </div>
                      <div className="h-[39px] relative shrink-0 w-full" data-name="Paragraph">
                        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#193cb8] text-[12px] top-[-0.33px] w-[540px]">{`시스템 > 결제관리 > 결제요금관리 화면의 리스트를 선택한 후에 나타나는 Breadcrumb/Nav 아래 기능을 제공합니다.`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
                    <LabelText text="주기별 버튼" />
                    <div className="content-stretch flex gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
                      <Button text="주간" />
                      <div className="bg-[#ff6b2b] flex-[139.167_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[57.479px] relative size-full">
                            <TextText1 text="신규" />
                          </div>
                        </div>
                      </div>
                      <Button text="삭제" />
                      <Button text="조회" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[362px] items-start relative shrink-0 w-full" data-name="Container">
                    <LabelText text="결제 요금 정보" />
                    <div className="content-stretch flex flex-col gap-[12px] h-[338px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex flex-col gap-[6px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
                        <LabelText1 text="결제 요금 코드" />
                        <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="InputField">
                          <TextInputText text="BASIC_MONTHLY" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[6px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
                        <LabelText1 text="결제 요금 명" />
                        <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="InputField">
                          <TextInputText text="베이직 월간" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[6px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
                        <LabelText1 text="결제 요금" />
                        <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="InputField">
                          <TextInputText text="29,000" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[6px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
                        <LabelText1 text="결제 요금 단위" />
                        <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="InputField">
                          <TextInputText text="원/월" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[6px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
                        <LabelText1 text="라이센스기간(월)" />
                        <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="InputField">
                          <TextInputText text="1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[43.5px] items-start relative shrink-0 w-full" data-name="Container">
                    <LabelText text="선규" />
                    <ParagraphText text="선규는 searchKeyword 검색어(리터에 속함)를 주욱 수 있는 엔트리와 동일합니다." />
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[43.5px] items-start relative shrink-0 w-full" data-name="Container">
                    <LabelText text="계산식 선택 및 조회" />
                    <ParagraphText text="생성하는 searchKeyword를 요청하는 기 체증적에 있을 수 있는 엔트리와 동일합니다." />
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[43.5px] items-start relative shrink-0 w-full" data-name="Container">
                    <LabelText text="삭제" />
                    <ParagraphText text="선규의 계획코드 테이블의 이전 주욱 수 있는 엔트리와 동일합니다." />
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[43.5px] items-start relative shrink-0 w-full" data-name="Container">
                    <LabelText text="레코딩스 선택 상세" />
                    <ParagraphText text="레코딩스 선택 후 상세 화면 참고 시, confirm 동일합니다." />
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