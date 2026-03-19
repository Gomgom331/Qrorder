import clsx from "clsx";
import svgPaths from "./svg-ibuzkkk75d";
import imgRectangle16 from "figma:asset/6be18da59c735e690cb5db91a8bd02d79f5ed8a2.png";
type Wrapper2Props = {
  text: string;
};

function Wrapper2({ children, text }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex h-full items-center justify-center px-[12px] py-[16px] relative">
        <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-normal justify-center relative shrink-0 text-[#999] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[normal]">{children}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">{children}</div>
    </div>
  );
}

function Helper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("bg-[#666] content-stretch flex items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0", additionalClassNames)}>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Desktop1TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Desktop1Text({ text, additionalClassNames = "" }: Desktop1TextProps) {
  return (
    <div className={clsx("absolute bg-[#0f62fe] min-w-[18px] rounded-[2px] size-[20px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      <Wrapper>
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">{text}</p>
        </div>
      </Wrapper>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]">
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {"Cell Text"}
        </p>
      </div>
    </div>
  );
}
type ContentTextProps = {
  text: string;
};

function ContentText({ text }: ContentTextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">
          <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame4Helper() {
  return <Wrapper1 additionalClassNames="font-['Roboto:Regular',sans-serif]">{`>`}</Wrapper1>;
}
type Frame4TextProps = {
  text: string;
};

function Frame4Text({ text }: Frame4TextProps) {
  return <Wrapper1 additionalClassNames="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif]">{text}</Wrapper1>;
}

function Vector() {
  return (
    <div className="absolute inset-[96.62%_44.93%_0_50.42%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector" />
      </svg>
    </div>
  );
}
type ControlsProps = {
  className?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  selected?: boolean;
  type?: "Checkbox" | "Radio" | "Toggle";
};

function Controls({ className, disabled = false, indeterminate = false, selected = false, type = "Checkbox" }: ControlsProps) {
  const isCheckboxAndNotIndeterminate = type === "Checkbox" && !indeterminate;
  const isCheckboxAndSelectedAndIndeterminate = type === "Checkbox" && selected && indeterminate;
  const isRadioAndIndeterminate = type === "Radio" && indeterminate;
  const isToggleAndNotIndeterminate = type === "Toggle" && !indeterminate;
  return (
    <div className={className || `relative ${isToggleAndNotIndeterminate ? "h-[20px] w-[32px]" : "size-[20px]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className={`relative shrink-0 ${isToggleAndNotIndeterminate ? "h-[16px] w-[32px]" : "size-[16px]"}`}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isToggleAndNotIndeterminate ? "0 0 32 16" : "0 0 16 16"}>
              <g id="Frame 60">
                <rect fill={type === "Toggle" && !disabled && !selected && !indeterminate ? "var(--fill-0, #697077)" : disabled && ((type === "Checkbox" && selected) || (type === "Toggle" && !indeterminate)) ? "var(--fill-0, #A2A9B0)" : !disabled && selected && (type === "Checkbox" || (type === "Toggle" && !indeterminate)) ? "var(--fill-0, #0F62FE)" : undefined} height={isToggleAndNotIndeterminate ? "16" : "15"} rx={isToggleAndNotIndeterminate ? "8" : isRadioAndIndeterminate ? "7.5" : undefined} stroke={type === "Radio" && !disabled && indeterminate ? "var(--stroke-0, #0F62FE)" : disabled && ((type === "Checkbox" && !selected && !indeterminate) || (type === "Radio" && indeterminate)) ? "var(--stroke-0, #A2A9B0)" : type === "Checkbox" && !disabled && !selected && !indeterminate ? "var(--stroke-0, #121619)" : undefined} width={isToggleAndNotIndeterminate ? "32" : "15"} x={isCheckboxAndNotIndeterminate || isCheckboxAndSelectedAndIndeterminate || isRadioAndIndeterminate ? "0.5" : undefined} y={isCheckboxAndNotIndeterminate || isCheckboxAndSelectedAndIndeterminate || isRadioAndIndeterminate ? "0.5" : undefined} />
                {(isRadioAndIndeterminate || isToggleAndNotIndeterminate) && <circle cx={type === "Toggle" && selected && !indeterminate ? "24" : "8"} cy="8" fill={type === "Toggle" && disabled && !indeterminate ? "var(--fill-0, #697077)" : type === "Toggle" && !disabled && !indeterminate ? "var(--fill-0, white)" : type === "Radio" && disabled && indeterminate ? "var(--fill-0, #A2A9B0)" : "var(--fill-0, #0F62FE)"} id="Ellipse 123" opacity={type === "Radio" && !selected && indeterminate ? "0" : undefined} r={isToggleAndNotIndeterminate ? "6" : "4"} />}
                {type === "Checkbox" && selected && <rect height="15" stroke={type === "Checkbox" && disabled && selected ? "var(--stroke-0, #A2A9B0)" : "var(--stroke-0, #0F62FE)"} width="15" x="0.5" y="0.5" />}
                {type === "Checkbox" && (!indeterminate || (selected && indeterminate)) && <path d={isCheckboxAndSelectedAndIndeterminate ? "M12 9V7H4V9L12 9Z" : svgPaths.pe78ef72} fill="var(--fill-0, white)" id="Union" opacity={type === "Checkbox" && !selected && !indeterminate ? "0" : undefined} />}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="변경이력조회">
      <div className="content-stretch flex items-start relative size-full">
        <div className="h-[1024px] relative shrink-0 w-[1440px]" data-name="Desktop - 1">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute content-stretch flex gap-[12px] items-center left-[1205px] top-[100px]">
              <div className="bg-[#f9f9f9] h-[48px] relative shrink-0" data-name="button">
                <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
                <Wrapper2 text="초기화" />
              </div>
              <div className="bg-[#e5e8ed] h-[48px] relative shrink-0" data-name="button">
                <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
                <Wrapper2 text="조회" />
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[56.5px] py-[16px] top-[168px]" data-name="tab">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Text Container">
                <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] w-[110px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  변경이력목록
                </p>
              </div>
            </div>
            <Desktop1Text text="2" additionalClassNames="left-[1207px] top-[75px]" />
            <div className="absolute h-[49px] left-[1205px] top-[99px] w-[102px]">
              <img alt="" className="absolute block max-w-none size-full" height="49" src={imgRectangle16} width="102" />
            </div>
            <div className="absolute content-stretch flex gap-[6px] items-center leading-[0] left-[56.5px] text-[14px] top-[60.34px]">
              <Frame4Text text="시스템" />
              <Frame4Helper />
              <Frame4Text text="시스템 관리" />
              <Frame4Helper />
              <div className="flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#222] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">변경이력조회</p>
              </div>
            </div>
            <div className="absolute bg-[#0f62fe] left-[30.5px] min-w-[18px] rounded-[2px] size-[20px] top-[58.34px]" data-name="화면번호">
              <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
              <Wrapper>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                  <p className="leading-[normal]">1</p>
                </div>
              </Wrapper>
            </div>
            <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.927px] left-[54.5px] top-[51.34px] w-[258.526px]" />
            <div className="absolute bg-white h-[751px] left-[51px] top-[221px] w-[1354px]" data-name="Table">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row #Table-Fixed-Row">
                  <div className="flex flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
                        <Controls className="relative shrink-0 size-[20px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="변경구분" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="메뉴명" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="수정내용" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="수정일자" />
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
                  <div className="flex flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
                        <Controls className="relative shrink-0 size-[20px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
                  <div className="flex flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
                        <Controls className="relative shrink-0 size-[20px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
                  <div className="flex flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
                        <Controls className="relative shrink-0 size-[20px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
                  <div className="flex flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
                        <Controls className="relative shrink-0 size-[20px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#dde1e6] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="absolute bg-white h-[48px] left-[56.5px] top-[102px] w-[401px]" data-name="Field">
              <div aria-hidden="true" className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / jam-icons / outline & logos / search">
                    <div className="absolute inset-[10.41%_13.73%_13.73%_10.41%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2053 18.2053">
                        <path d={svgPaths.pe8f0280} fill="var(--fill-0, #697077)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#697077] text-[16px] w-[114px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    검색어
                  </p>
                </div>
              </div>
            </div>
            <Desktop1Text text="3" additionalClassNames="left-[30.5px] top-[104px]" />
            <div className="absolute border-2 border-[#0f62fe] border-dashed h-[62.927px] left-[56.5px] top-[94.34px] w-[416.172px]" />
          </div>
          <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[471px]" data-name="화면구성">
          <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
          <div className="bg-[#0f62fe] min-h-[100px] relative shrink-0 w-full" data-name="화면구성-타이틀">
            <div className="flex flex-col justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start justify-center min-h-[inherit] p-[20px] relative w-full">
                <div className="content-stretch flex flex-col gap-[10px] items-start py-[10px] relative shrink-0 w-full" data-name="타이틀">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                    <div className="overflow-clip relative shrink-0 size-[24px]">
                      {"web" === "mobile" && (
                        <div className="absolute bottom-[11.11%] left-1/4 right-1/4 top-[11.11%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 18.6667">
                            <path d={svgPaths.p1c2b9a0} fill={"white" === "white" ? "var(--fill-0, white)" : "var(--fill-0, #111111)"} id="Vector" />
                          </svg>
                        </div>
                      )}
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <g id="Vector" />
                      </svg>
                      {"web" === "web" && "white" === "black" && (
                        <div className="absolute inset-[16.01%_9.85%_1.43%_12.88%]" data-name="Group">
                          <Vector />
                          <div className="absolute inset-[0_0_19.25%_0]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5 22.6667">
                              <path d={svgPaths.pee03e00} fill="var(--fill-0, #111111)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      )}
                      {"web" === "web" && "white" === "white" && (
                        <div className="absolute inset-[16.01%_9.85%_1.43%_12.88%]" data-name="Group">
                          <Vector />
                          <div className="absolute inset-[0_0_19.25%_0]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5455 16">
                              <path d={svgPaths.p407b400} fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[399px]">변경이력조회</p>
                  </div>
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular','Noto_Sans_KR:Bold',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[432px]">
                    <span className="leading-[normal]">시스템/시스템관리/</span>
                    <span className="font-['Inter:Bold','Noto_Sans_KR:Regular','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal]">변경이력조회</span>
                  </p>
                </div>
                <div className="h-0 relative shrink-0 w-[424.483px]" data-name="설명">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 424.483 1">
                      <g id="ì¤ëª">
                        <line id="Line 1" stroke="var(--stroke-0, white)" x2="424.483" y1="0.5" y2="0.5" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="content-center flex flex-wrap gap-y-[12px] items-center relative shrink-0 w-full" data-name="설명">
                  <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[16px] text-white">text - 설명</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <Helper>
                <Text text="1" additionalClassNames="size-[18px]" />
                <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">메뉴 경로</p>
              </Helper>
              <Helper1>
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
                  <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px] whitespace-pre-wrap">{`상단 메뉴 경로는 현재 화면의 위치를 표시하기 위한  Breadcrumb이며 이동 기능은 제공하지 않음`}</p>
                </div>
              </Helper1>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <Helper>
                <Text text="2" additionalClassNames="h-[18px] w-[20px]" />
                <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">초기화 버튼</p>
              </Helper>
              <Helper1>
                <Text1 text="초기화 요청 시, 리로드를 진행한다. 이때 데이터셋의 잔여 데이터가 존재하지 않도록 주의하여야 한다." />
              </Helper1>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <Helper>
                <Text text="3" additionalClassNames="h-[18px] w-[20px]" />
                <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">조회 버튼</p>
              </Helper>
              <Helper1>
                <Text1 text="검색어는 searchKeyword 파라미터로 송수신 하여야 하며, 변경이력목록 데이터에만 반영된다." />
              </Helper1>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}