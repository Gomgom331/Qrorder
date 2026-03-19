import clsx from "clsx";
import svgPaths from "./svg-lak6t06ftu";
import imgRectangle16 from "figma:asset/410f4c424589f3ded4c223b476be8709ba3edf19.png";
import imgRectangle17 from "figma:asset/c79b71a5d9b4964e556b52ad824b4a9e4ba0ca1d.png";
import imgRectangle26 from "figma:asset/406e9b35785be5c5fb394ca91d2e67dc7db0edd3.png";
import imgRectangle28 from "figma:asset/48df68aeeea3d54a582f0fcba16fb3a7c4762c3c.png";
import imgRectangle24 from "figma:asset/6d1b494902b398a42c076118da77dff3e12eb170.png";
import imgRectangle25 from "figma:asset/91c2c53cafca84151b1fb5f006e2241c3f5f1e15.png";
import imgRectangle18 from "figma:asset/e35291e6ef1e40f4f518689316f71ea690df29b6.png";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
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
    <div className="bg-[#f9f9f9] h-[48px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
      <Wrapper2>
        <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        </div>
      </Wrapper2>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Helper1() {
  return (
    <Wrapper>
      <Helper text="생성, 삭제, 수정 된 데이터의 경우 각각 newItems, delItems, updateItems 배열에 담아두어야 한다." text1="데이터 생성, 삭제, 수정 후 저장 할 경우 상기 3개의 배열을 모두 전송해야한다." />
    </Wrapper>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">
        {text}
        <br aria-hidden="true" />
        {text1}
      </p>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">{text}</p>
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
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Desktop1Image1Props = {
  additionalClassNames?: string;
};

function Desktop1Image1({ additionalClassNames = "" }: Desktop1Image1Props) {
  return (
    <div className={clsx("absolute h-[49px] top-[545px] w-[111px]", additionalClassNames)}>
      <img alt="" className="absolute block max-w-none size-full" height="49" src={imgRectangle26} width="111" />
    </div>
  );
}
type Desktop1ImageProps = {
  additionalClassNames?: string;
};

function Desktop1Image({ additionalClassNames = "" }: Desktop1ImageProps) {
  return (
    <div className={clsx("absolute h-[49px] w-[86px]", additionalClassNames)}>
      <img alt="" className="absolute block max-w-none size-full" height="49" src={imgRectangle17} width="86" />
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("bg-[#666] content-stretch flex items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0", additionalClassNames)}>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">{text}</p>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute bg-[#0f62fe] min-w-[18px] rounded-[2px] size-[20px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      <Text1 text={text} />
    </div>
  );
}
type TextContainerText2Props = {
  text: string;
};

function TextContainerText2({ text }: TextContainerText2Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[36px] items-end overflow-clip relative shrink-0 w-full">
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
  );
}

function Cell1() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Wrapper1>
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {"????"}
        </p>
      </Wrapper1>
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
    <Wrapper1>
      <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </Wrapper1>
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
type TextContainerText1Props = {
  text: string;
};

function TextContainerText1({ text }: TextContainerText1Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] w-[110px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function TextContainerText({ text }: TextContainerTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function VectorStroke() {
  return (
    <div className="absolute inset-[46.88%_18.75%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.5">
        <path clipRule="evenodd" d={svgPaths.p6bc53f0} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
      </svg>
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
  const isCheckboxAndDisabledAndNotSelectedAndNotIndeterminate = type === "Checkbox" && disabled && !selected && !indeterminate;
  const isCheckboxAndDisabledAndSelectedAndIndeterminate = type === "Checkbox" && disabled && selected && indeterminate;
  const isCheckboxAndDisabledAndSelectedAndNotIndeterminate = type === "Checkbox" && disabled && selected && !indeterminate;
  const isCheckboxAndNotDisabledAndNotSelectedAndNotIndeterminate = type === "Checkbox" && !disabled && !selected && !indeterminate;
  const isCheckboxAndNotDisabledAndSelectedAndIndeterminate = type === "Checkbox" && !disabled && selected && indeterminate;
  const isCheckboxAndNotDisabledAndSelectedAndNotIndeterminate = type === "Checkbox" && !disabled && selected && !indeterminate;
  const isRadioAndDisabledAndNotSelectedAndIndeterminate = type === "Radio" && disabled && !selected && indeterminate;
  const isRadioAndDisabledAndSelectedAndIndeterminate = type === "Radio" && disabled && selected && indeterminate;
  const isRadioAndNotDisabledAndNotSelectedAndIndeterminate = type === "Radio" && !disabled && !selected && indeterminate;
  const isRadioAndNotDisabledAndSelectedAndIndeterminate = type === "Radio" && !disabled && selected && indeterminate;
  const isToggleAndNotDisabledAndNotSelectedAndNotIndeterminate = type === "Toggle" && !disabled && !selected && !indeterminate;
  const isToggleAndNotIndeterminateAndIsNotDisabledAndSelectedOrNot = type === "Toggle" && !indeterminate && ((!disabled && selected) || (!disabled && !selected) || (disabled && selected) || (disabled && !selected));
  return (
    <div className={className || `relative ${isToggleAndNotIndeterminateAndIsNotDisabledAndSelectedOrNot ? "h-[20px] w-[32px]" : "size-[20px]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className={`relative shrink-0 ${isToggleAndNotIndeterminateAndIsNotDisabledAndSelectedOrNot ? "h-[16px] w-[32px]" : "size-[16px]"}`}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isToggleAndNotIndeterminateAndIsNotDisabledAndSelectedOrNot ? "0 0 32 16" : "0 0 16 16"}>
              <g id="Frame 60">
                <rect fill={isToggleAndNotDisabledAndNotSelectedAndNotIndeterminate ? "var(--fill-0, #697077)" : disabled && ((type === "Checkbox" && selected && !indeterminate) || (type === "Checkbox" && selected && indeterminate) || (type === "Toggle" && selected && !indeterminate) || (type === "Toggle" && !selected && !indeterminate)) ? "var(--fill-0, #A2A9B0)" : !disabled && selected && ((type === "Checkbox" && !indeterminate) || (type === "Checkbox" && indeterminate) || (type === "Toggle" && !indeterminate)) ? "var(--fill-0, #0F62FE)" : undefined} height={isToggleAndNotIndeterminateAndIsNotDisabledAndSelectedOrNot ? "16" : "15"} rx={isToggleAndNotIndeterminateAndIsNotDisabledAndSelectedOrNot ? "8" : type === "Radio" && indeterminate && ((!disabled && selected) || (!disabled && !selected) || (disabled && selected) || (disabled && !selected)) ? "7.5" : undefined} stroke={type === "Radio" && !disabled && indeterminate && [true, false].includes(selected) ? "var(--stroke-0, #0F62FE)" : disabled && ((type === "Checkbox" && !selected && !indeterminate) || (type === "Radio" && selected && indeterminate) || (type === "Radio" && !selected && indeterminate)) ? "var(--stroke-0, #A2A9B0)" : isCheckboxAndNotDisabledAndNotSelectedAndNotIndeterminate ? "var(--stroke-0, #121619)" : undefined} width={isToggleAndNotIndeterminateAndIsNotDisabledAndSelectedOrNot ? "32" : "15"} x={isCheckboxAndNotDisabledAndNotSelectedAndNotIndeterminate || isCheckboxAndNotDisabledAndSelectedAndNotIndeterminate || isCheckboxAndNotDisabledAndSelectedAndIndeterminate || isCheckboxAndDisabledAndNotSelectedAndNotIndeterminate || isCheckboxAndDisabledAndSelectedAndNotIndeterminate || isCheckboxAndDisabledAndSelectedAndIndeterminate || isRadioAndNotDisabledAndSelectedAndIndeterminate || isRadioAndNotDisabledAndNotSelectedAndIndeterminate || isRadioAndDisabledAndSelectedAndIndeterminate || isRadioAndDisabledAndNotSelectedAndIndeterminate ? "0.5" : undefined} y={isCheckboxAndNotDisabledAndNotSelectedAndNotIndeterminate || isCheckboxAndNotDisabledAndSelectedAndNotIndeterminate || isCheckboxAndNotDisabledAndSelectedAndIndeterminate || isCheckboxAndDisabledAndNotSelectedAndNotIndeterminate || isCheckboxAndDisabledAndSelectedAndNotIndeterminate || isCheckboxAndDisabledAndSelectedAndIndeterminate || isRadioAndNotDisabledAndSelectedAndIndeterminate || isRadioAndNotDisabledAndNotSelectedAndIndeterminate || isRadioAndDisabledAndSelectedAndIndeterminate || isRadioAndDisabledAndNotSelectedAndIndeterminate ? "0.5" : undefined} />
                {(isRadioAndNotDisabledAndSelectedAndIndeterminate || isRadioAndNotDisabledAndNotSelectedAndIndeterminate || isRadioAndDisabledAndSelectedAndIndeterminate || isRadioAndDisabledAndNotSelectedAndIndeterminate || (type === "Toggle" && !disabled && selected && !indeterminate) || isToggleAndNotDisabledAndNotSelectedAndNotIndeterminate || (type === "Toggle" && disabled && selected && !indeterminate) || (type === "Toggle" && disabled && !selected && !indeterminate)) && <circle cx={type === "Toggle" && selected && !indeterminate && [false, true].includes(disabled) ? "24" : "8"} cy="8" fill={type === "Toggle" && disabled && !indeterminate && [true, false].includes(selected) ? "var(--fill-0, #697077)" : type === "Toggle" && !disabled && !indeterminate && [true, false].includes(selected) ? "var(--fill-0, white)" : type === "Radio" && disabled && indeterminate && [true, false].includes(selected) ? "var(--fill-0, #A2A9B0)" : "var(--fill-0, #0F62FE)"} id="Ellipse 123" opacity={type === "Radio" && !selected && indeterminate && [false, true].includes(disabled) ? "0" : undefined} r={isToggleAndNotIndeterminateAndIsNotDisabledAndSelectedOrNot ? "6" : "4"} />}
                {type === "Checkbox" && selected && ((!disabled && !indeterminate) || (!disabled && indeterminate) || (disabled && !indeterminate) || (disabled && indeterminate)) && <rect height="15" stroke={type === "Checkbox" && disabled && selected && [false, true].includes(indeterminate) ? "var(--stroke-0, #A2A9B0)" : "var(--stroke-0, #0F62FE)"} width="15" x="0.5" y="0.5" />}
                {type === "Checkbox" && ((!disabled && !selected && !indeterminate) || (!disabled && selected && !indeterminate) || (!disabled && selected && indeterminate) || (disabled && !selected && !indeterminate) || (disabled && selected && !indeterminate) || (disabled && selected && indeterminate)) && <path d={type === "Checkbox" && selected && indeterminate && [false, true].includes(disabled) ? "M12 9V7H4V9L12 9Z" : svgPaths.pe78ef72} fill="var(--fill-0, white)" id="Union" opacity={type === "Checkbox" && !selected && !indeterminate && [false, true].includes(disabled) ? "0" : undefined} />}
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
    <div className="bg-white relative size-full" data-name="규칙 관리">
      <div className="content-stretch flex items-start relative size-full">
        <div className="h-[1024px] relative shrink-0 w-[1440px]" data-name="Desktop - 1">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute content-stretch flex gap-[12px] items-center left-[911px] top-[100px]">
              <Button text="초기화" />
              <div className="bg-[#e5e8ed] h-[48px] relative shrink-0" data-name="button">
                <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
                <Wrapper2>
                  <TextContainerText text="신규" />
                </Wrapper2>
              </div>
              <div className="bg-[#e5e8ed] h-[48px] relative shrink-0" data-name="button">
                <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
                <Wrapper2>
                  <TextContainerText text="삭제" />
                </Wrapper2>
              </div>
              <Button text="저장" />
              <div className="bg-[#e5e8ed] h-[48px] relative shrink-0" data-name="button">
                <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
                <Wrapper2>
                  <TextContainerText text="조회" />
                </Wrapper2>
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[56.5px] py-[16px] top-[168px]" data-name="tab">
              <TextContainerText1 text="규칙 목록" />
            </div>
            <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[55px] py-[16px] top-[554px]" data-name="tab">
              <TextContainerText1 text="규칙 상세 목록" />
            </div>
            <Text text="2" additionalClassNames="left-[913px] top-[75px]" />
            <Text text="7" additionalClassNames="left-[28px] top-[462px]" />
            <div className="absolute h-[49px] left-[911px] top-[99px] w-[102px]">
              <img alt="" className="absolute block max-w-none size-full" height="49" src={imgRectangle16} width="102" />
            </div>
            <Desktop1Image additionalClassNames="left-[1221px] top-[99px]" />
            <Desktop1Image1 additionalClassNames="left-[1045px]" />
            <Desktop1Image1 additionalClassNames="left-[1168px]" />
            <div className="absolute h-[49px] left-[1290px] top-[545px] w-[54px]">
              <img alt="" className="absolute block max-w-none size-full" height="49" src={imgRectangle28} width="54" />
            </div>
            <Desktop1Image additionalClassNames="left-[1025px] top-[99px]" />
            <Desktop1Image additionalClassNames="left-[1123px] top-[100px]" />
            <Text text="3" additionalClassNames="left-[1221px] top-[75px]" />
            <Text text="4" additionalClassNames="left-[1027px] top-[75px]" />
            <Text text="5" additionalClassNames="left-[1123px] top-[75px]" />
            <div className="absolute content-stretch flex gap-[6px] items-center leading-[0] left-[56.5px] text-[14px] top-[60.34px]">
              <Frame4Text text="시스템" />
              <Frame4Helper />
              <Frame4Text text="시스템 관리" />
              <Frame4Helper />
              <div className="flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#222] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">규칙 관리</p>
              </div>
            </div>
            <Desktop1Text text="1" additionalClassNames="left-[30.5px] top-[58.34px]" />
            <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.927px] left-[54.5px] top-[51.34px] w-[258.526px]" />
            <div className="absolute bg-white h-[313px] left-[50.5px] top-[221px] w-[1354px]" data-name="Table">
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
                      <ContentText text="규칙 코드" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="규칙 명" />
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
            <div className="absolute bg-white h-[313px] left-[51px] top-[607px] w-[1354px]" data-name="Table">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[47px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row #Table-Fixed-Row">
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell1 />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell1 />
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <Cell1 />
                  </div>
                </div>
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
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
            <Text text="6" additionalClassNames="left-[30.5px] top-[104px]" />
            <div className="absolute border-2 border-[#0f62fe] border-dashed h-[62.927px] left-[56.5px] top-[94.34px] w-[416.172px]" />
            <div className="absolute h-[49px] left-[51px] top-[462px] w-[1354px]">
              <img alt="" className="absolute block max-w-none size-full" height="49" src={imgRectangle24} width="1354" />
            </div>
            <div className="absolute h-[314px] left-[51px] top-[606px] w-[1354px]">
              <img alt="" className="absolute block max-w-none size-full" height="314" src={imgRectangle25} width="1354" />
            </div>
            <div className="absolute content-stretch flex gap-[12px] items-center left-[1046px] top-[545px]">
              <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="IconButton">
                <div aria-hidden="true" className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon Container">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / commons / add">
                    <div className="absolute inset-[18.75%_46.88%]" data-name="Vector (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 15">
                        <path clipRule="evenodd" d={svgPaths.p3c5fb040} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
                      </svg>
                    </div>
                    <VectorStroke />
                  </div>
                </div>
                <TextContainerText2 text="행추가" />
              </div>
              <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="IconButton">
                <div aria-hidden="true" className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon Container">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icons / commons/ minus">
                    <VectorStroke />
                  </div>
                </div>
                <TextContainerText2 text="행삭제" />
              </div>
              <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="IconButton">
                <div aria-hidden="true" className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
                <TextContainerText2 text="저장" />
              </div>
            </div>
            <Text text="8" additionalClassNames="left-[28px] top-[608px]" />
            <Text text="9" additionalClassNames="left-[1018px] top-[548px]" />
            <Desktop1Text text="10" additionalClassNames="left-[1269px] top-[531px]" />
            <Desktop1Text text="10" additionalClassNames="left-[1269px] top-[531px]" />
            <Desktop1Text text="11" additionalClassNames="left-[1348px] top-[531px]" />
            <div className="absolute contents left-[1317px] top-[74px]">
              <div className="absolute h-[50px] left-[1317px] top-[99px] w-[88px]">
                <img alt="" className="absolute block max-w-none size-full" height="50" src={imgRectangle18} width="88" />
              </div>
              <Text text="6" additionalClassNames="left-[1318.82px] top-[74px]" />
            </div>
            <div className="absolute contents left-[1297px] top-[243px]">
              <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.834px] left-[1366.84px] top-[275.83px] w-[31.94px]" />
              <div className="absolute bg-[#0f62fe] h-[20px] left-[1297px] min-w-[18px] rounded-[2px] top-[243px] w-[25px]" data-name="화면번호">
                <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                <Text1 text="12" />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[1360.66px] not-italic text-[#0f62fe] text-[12px] text-center top-[253px] whitespace-nowrap">
                <p className="leading-[normal]">수정모달 열림</p>
              </div>
              <div className="absolute h-[33.409px] left-[1308.44px] top-[263.3px] w-[52.219px]">
                <div className="absolute inset-[-2.99%_-1.92%_-22.04%_-1.92%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.2188 41.7732">
                    <path d={svgPaths.p1841c00} fill="var(--stroke-0, #0F62FE)" id="Vector 1" />
                  </svg>
                </div>
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
                      {"web" === "mobile" && ["black", "white"].includes("white") && (
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
                    <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[399px]">규칙 관리</p>
                  </div>
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-[432px]">시스템/시스템관리/규칙 관리</p>
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
                    <Text2 text="1" additionalClassNames="size-[18px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">메뉴 경로</p>
                  </div>
                </div>
              </div>
              <Wrapper>
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
                  <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px] whitespace-pre-wrap">{`상단 메뉴 경로는 현재 화면의 위치를 표시하기 위한  Breadcrumb이며 이동 기능은 제공하지 않음`}</p>
                </div>
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="2" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">초기화 버튼</p>
                  </div>
                </div>
              </div>
              <Wrapper>
                <Text3 text="초기화 요청 시, 리로드를 진행한다. 이때 데이터셋의 잔여 데이터가 존재하지 않도록 주의하여야 한다." />
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="3" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">저장</p>
                  </div>
                </div>
              </div>
              <Helper1 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="4" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">신규</p>
                  </div>
                </div>
              </div>
              <Wrapper>
                <Text3 text="신규 버튼 클릭 시 마스터코드 데이터를 등록 할 수 있는 신규 팝업이 등장한다." />
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="5" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">삭제</p>
                  </div>
                </div>
              </div>
              <Wrapper>
                <Helper text="체크박스 선택 후 삭제 버튼 클릭 시, 선택한 규칙 목록 데이터에 대한 삭제 진행 전, Confirm 팝업이 등장한다." text1="선택한 항목이 존재하지 않은 경우에 작동 시 알림창 노티." />
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="6" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">검색어 입력 및 조회</p>
                  </div>
                </div>
              </div>
              <Wrapper>
                <Text3 text="검색어는 searchKeyword 파라미터로 송수신 하여야 하며, 관리자 목록 데이터에만 반영된다." />
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="7" additionalClassNames="h-[18px] w-[19px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">상세 데이터 조회</p>
                  </div>
                </div>
              </div>
              <Wrapper>
                <Text3 text="생성된 마스터코드 데이터를 클릭 시, 상세코드 데이터 조회 기능이 작동한다. 이떄, 각 규칙마다 데이터가 다르기 떄문에 상세 그리드의 화면이 변경되어야 한다." />
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="8" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">상세 데이터 로직</p>
                  </div>
                </div>
              </div>
              <Wrapper>
                <Text3 text="상세코드의 경우, 마스터코드 데이터를 선택 한 이후부터 행추가, 행삭제, 저장 등의 기능을 사용 할 수 있다." />
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="9" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">행추가</p>
                  </div>
                </div>
              </div>
              <Wrapper>
                <Text3 text="데이터를 신규 추가 할 시, 마스터코드 sysId의 값을 상세코드데이터 linkSysId 컬럼에 바인딩 시켜주어야 한다." />
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="10" additionalClassNames="h-[18px] w-[26px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">행삭제</p>
                  </div>
                </div>
              </div>
              <Wrapper>
                <Text3 text="행을 먼저 선택한 후 삭제를 누르면 선택한 항목이 삭제가 된다." />
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="11" additionalClassNames="h-[18px] w-[24px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">저장</p>
                  </div>
                </div>
              </div>
              <Helper1 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
            <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
              <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[10px] items-center px-[20px] relative w-full">
                    <Text2 text="12" additionalClassNames="h-[18px] w-[25px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">마스터 규칙 수정</p>
                  </div>
                </div>
              </div>
              <Wrapper>
                <Text3 text="생성된 마스터코드 데이터를 수정 아이콘 클릭 시, 수정 팝업이 등장한다." />
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}