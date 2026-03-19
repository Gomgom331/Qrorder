import clsx from "clsx";
import svgPaths from "./svg-zy9fgx4ff5";
import imgRectangle16 from "figma:asset/ca5f3821861ddc7871e58379476d4e3c9b5e9335.png";
import imgRectangle17 from "figma:asset/86227376e98cf052f6ce7b007d3ac77ff05bbe36.png";
import imgRectangle18 from "figma:asset/86309e9fa4fb0a5d0b392318651976526a01d30d.png";
import imgRectangle19 from "figma:asset/beaebf1ba4e290e91f6d15dfd0ee484961da03f1.png";
import imgRectangle20 from "figma:asset/e6058136732d9420d20e87fda948efff1943cbb0.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex h-full items-center justify-center px-[12px] py-[16px] relative">{children}</div>
    </div>
  );
}
type ButtonProps = {
  text: string;
};

function Button({ children, text }: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className="bg-[#e5e8ed] h-[48px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
      <Wrapper>
        <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">{text}</p>
    </div>
  );
}

function Frame4Helper() {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] whitespace-nowrap">
      <p className="leading-[normal]">{`>`}</p>
    </div>
  );
}
type Frame4TextProps = {
  text: string;
};

function Frame4Text({ text }: Frame4TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] whitespace-nowrap">
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("bg-[#666] content-stretch flex items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0", additionalClassNames)}>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={additionalClassNames}>
      <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
            <p className="leading-[normal]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return <Text2 text={text} additionalClassNames={clsx("absolute bg-[#0f62fe] h-[20px] min-w-[18px] rounded-[2px] w-[19.604px]", additionalClassNames)} />;
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return <Text2 text={text} additionalClassNames={clsx("absolute bg-[#0f62fe] min-w-[18px] rounded-[2px] size-[20px]", additionalClassNames)} />;
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]">
        <p className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {"Cell Textㅍ"}
        </p>
      </div>
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

function Vector() {
  return (
    <div className="absolute inset-[96.62%_44.93%_0_50.42%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector" />
      </svg>
    </div>
  );
}

function IconsCommonsPencil({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons / commons / pencil">
      <div className="absolute inset-[21.34%_21.34%_9.37%_9.37%]" data-name="Vector (Stroke)">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6289 16.6289">
          <path clipRule="evenodd" d={svgPaths.p201c9d00} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[9.38%_9.38%_74.62%_74.62%]" data-name="Vector (Stroke)">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.84012 3.84059">
          <path clipRule="evenodd" d={svgPaths.p18e5ab80} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
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
    <div className="bg-white relative size-full" data-name="시스템 / 결제 관리 / 쿠폰 관리">
      <div className="content-stretch flex items-start relative size-full">
        <div className="h-[1024px] relative shrink-0 w-[1440px]" data-name="Desktop - 1">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute bg-white h-[756px] left-[56.5px] top-[216px] w-[1354px]" data-name="Table">
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
                      <ContentText text="쿠폰코드(couponCd)" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="쿠폰명(couponNm)" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="쿠폰적용일자(startDate)" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="쿠폰종료일자(endDate)" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="사용 여부" />
                    </div>
                  </div>
                  <div className="flex flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[40px]" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <div className="h-[47px] relative shrink-0 w-full" data-name="Content">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center px-[12px] py-[16px] size-full" />
                        </div>
                      </div>
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
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
                        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
                          <IconsCommonsPencil className="overflow-clip relative shrink-0 size-[16px]" />
                        </div>
                      </div>
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
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell />
                  </div>
                  <div className="flex flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
                        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
                          <IconsCommonsPencil className="overflow-clip relative shrink-0 size-[16px]" />
                        </div>
                      </div>
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
                    <Cell1 />
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
                  <div className="flex flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
                        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
                          <IconsCommonsPencil className="overflow-clip relative shrink-0 size-[16px]" />
                        </div>
                      </div>
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
                    <Cell1 />
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
                  <div className="flex flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
                        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
                          <IconsCommonsPencil className="overflow-clip relative shrink-0 size-[16px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#dde1e6] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center right-[29.5px] top-[calc(50%-390px)]">
              <div className="bg-[#f9f9f9] h-[48px] relative shrink-0" data-name="button">
                <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
                <Wrapper>
                  <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {"초기화"}
                    </p>
                  </div>
                </Wrapper>
              </div>
              <Button text="신규" />
              <Button text="삭제" />
              <Button text="조회" />
            </div>
            <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[56.5px] py-[16px] top-[168px]" data-name="tab">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Text Container">
                <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] w-[119px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  쿠폰 목록
                </p>
              </div>
            </div>
            <div className="absolute contents left-[1009.5px] top-[64px]">
              <Text text="2" additionalClassNames="left-[1009.5px] top-[64px]" />
              <div className="absolute h-[63px] left-[1009.5px] top-[90px] w-[109px]">
                <img alt="" className="absolute block max-w-none size-full" height="63" src={imgRectangle16} width="109" />
              </div>
            </div>
            <div className="absolute contents left-[1119.5px] top-[64px]">
              <Text text="5" additionalClassNames="left-[1119.5px] top-[64px]" />
              <div className="absolute h-[63px] left-[1121.5px] top-[90px] w-[99px]">
                <img alt="" className="absolute block max-w-none size-full" height="63" src={imgRectangle17} width="99" />
              </div>
            </div>
            <div className="absolute contents left-[1219.5px] top-[64px]">
              <Text1 text="7" additionalClassNames="left-[1219.5px] top-[64px]" />
              <div className="absolute h-[63px] left-[1221.46px] top-[90px] w-[97.04px]">
                <img alt="" className="absolute block max-w-none size-full" height="63" src={imgRectangle18} width="97.04" />
              </div>
            </div>
            <div className="absolute contents left-[59.5px] top-[223px]">
              <div className="absolute h-[33px] left-[59.5px] top-[223px] w-[34px]">
                <img alt="" className="absolute block max-w-none size-full" height="33" src={imgRectangle19} width="34" />
              </div>
            </div>
            <Text1 text="7" additionalClassNames="left-[33.5px] top-[228px]" />
            <div className="absolute content-stretch flex gap-[6px] items-center leading-[0] left-[56.5px] text-[14px] top-[60.34px]">
              <Frame4Text text="시스템" />
              <Frame4Helper />
              <Frame4Text text="결제 관리" />
              <Frame4Helper />
              <div className="flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#222] w-[103px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">쿠폰 관리</p>
              </div>
            </div>
            <div className="absolute bg-[#0f62fe] left-[30.5px] min-w-[18px] rounded-[2px] size-[20px] top-[58.34px]" data-name="화면번호">
              <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                    <p className="leading-[normal]">1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.927px] left-[54.5px] top-[51.34px] w-[258.526px]" />
            <div className="absolute h-[35px] left-[1375.5px] top-[270px] w-[28px]">
              <img alt="" className="absolute block max-w-none size-full" height="35" src={imgRectangle20} width="28" />
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
            <Text text="3" additionalClassNames="left-[30.5px] top-[104px]" />
            <div className="absolute border-2 border-[#0f62fe] border-dashed h-[62.927px] left-[56.5px] top-[94.34px] w-[416.172px]" />
            <Text text="6" additionalClassNames="left-[1301.66px] top-[239px]" />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[1365.32px] not-italic text-[#0f62fe] text-[12px] text-center top-[249px] whitespace-nowrap">
              <p className="leading-[normal]">수정모달 열림</p>
            </div>
            <div className="absolute h-[21px] left-[1312px] top-[260.5px] w-[63.5px]">
              <div className="absolute inset-[0_-0.79%_-17.53%_-0.79%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.5 24.682">
                  <path d={svgPaths.p5650700} fill="var(--stroke-0, #0F62FE)" id="Vector 12" />
                </svg>
              </div>
            </div>
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
                    <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[400px]">쿠폰 관리</p>
                  </div>
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-[432px]">시스템 / 결제 관리 / 쿠폰 관리</p>
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
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text3 text="1" additionalClassNames="size-[18px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">메뉴 경로</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
                      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px] whitespace-pre-wrap">{`상단 메뉴 경로는 현재 화면의 위치를 표시하기 위한  Breadcrumb이며 이동 기능은 제공하지 않음`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text3 text="2" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">초기화 버튼</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <Text4 text="초기화 요청 시, 리로드를 진행한다. 이때 데이터셋의 잔여 데이터가 존재하지 않도록 주의하여야 한다." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text3 text="3" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">검색어 입력 및 조회</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <Text4 text="검색어는 searchKeyword 파라미터로 송수신 하여야 한다." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text3 text="4" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">쿠폰 모달</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
                      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px] whitespace-pre-wrap">{`쿠폰은 모달 팝업으로 데이터의 CRU가 이루어진다.  `}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text3 text="5" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">신규 버튼</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
                      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">{`신규 버튼 클릭 시 쿠폰 데이터를 등록 할 수 있는 신규 팝업이 등장한다. `}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text3 text="6" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">수정 아이콘 클릭</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <Text4 text="생성된 결제요금 데이터를 수정 아이콘 클릭 시, 수정 팝업이 등장한다." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text3 text="7" additionalClassNames="h-[18px] w-[19px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">삭제 버튼</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <Text4 text="체크박스 선택 후 삭제 버튼 클릭 시, 선택한 마스터코드 데이터에 대한 삭제 진행 전, Confirm 팝업이 등장한다." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}