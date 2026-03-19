import clsx from "clsx";
import svgPaths from "./svg-09y4x8mhpy";
import imgRectangle16 from "figma:asset/57f3339d32bc2f63f4ee17a7070af05c5e0edfce.png";
import imgRectangle17 from "figma:asset/b6f3273f8532afa4745a8f7118bbe7d46d781039.png";
import imgRectangle22 from "figma:asset/a84f7eb796a7c51bb8c6c876ecccc764b7f1ea72.png";
import imgRectangle18 from "figma:asset/28652ff3e5ebae88e3f93ca847f82c4394c26b6e.png";
import imgRectangle19 from "figma:asset/7cbc153de6a8361926342a65668443bdbeb01296.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
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
      <Wrapper1>
        <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        </div>
      </Wrapper1>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">{children}</div>
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
type Desktop1ImageProps = {
  additionalClassNames?: string;
};

function Desktop1Image({ additionalClassNames = "" }: Desktop1ImageProps) {
  return (
    <div className={clsx("absolute h-[63px] top-[91px] w-[94.32px]", additionalClassNames)}>
      <img alt="" className="absolute block max-w-none size-full" height="63" src={imgRectangle17} width="94.32" />
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
type TextContainerTextProps = {
  text: string;
};

function TextContainerText({ text }: TextContainerTextProps) {
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
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative">
          <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
          <ContentText1 text="Combo" />
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative">
          <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
          <ContentText1 text="Button" />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <ContentText1 text="Cell Text" />
    </div>
  );
}
type ContentText1Props = {
  text: string;
};

function ContentText1({ text }: ContentText1Props) {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type ContentTextProps = {
  text: string;
};

function ContentText({ text }: ContentTextProps) {
  return (
    <Wrapper>
      <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </Wrapper>
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

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="관리자 관리">
      <div className="content-stretch flex items-start relative size-full">
        <div className="h-[1024px] relative shrink-0 w-[1440px]" data-name="Desktop - 1">
          <div className="overflow-clip relative rounded-[inherit] size-full">
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
            <div className="absolute content-stretch flex gap-[12px] items-center left-[1106.5px] top-[98px]">
              <Button text="초기화" />
              <Button text="저장" />
              <div className="bg-[#e5e8ed] h-[48px] relative shrink-0" data-name="button">
                <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
                <Wrapper1>
                  <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {"조회"}
                    </p>
                  </div>
                </Wrapper1>
              </div>
            </div>
            <div className="absolute bg-white h-[751px] left-[56.5px] top-[216px] w-[1351px]" data-name="Table">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[47px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row #Table-Fixed-Row">
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <Wrapper>
                        <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] w-[104px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          사용자 아이디*
                        </p>
                      </Wrapper>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="사용자 명*" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="사업장*" />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
                    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
                      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
                      <ContentText text="비밀번호 초기화" />
                    </div>
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
            <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[56.5px] py-[16px] top-[168px]" data-name="tab">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Text Container">
                <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] w-[111px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  관리자 목록
                </p>
              </div>
            </div>
            <Desktop1Text text="2" additionalClassNames="left-[30.5px] top-[104px]" />
            <div className="absolute border-2 border-[#0f62fe] border-dashed h-[62.927px] left-[56.5px] top-[94.34px] w-[416.172px]" />
            <div className="absolute content-stretch flex gap-[12px] items-center left-[1172.5px] top-[158px]">
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
                <TextContainerText text="행추가" />
              </div>
              <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="IconButton">
                <div aria-hidden="true" className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon Container">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icons / commons/ minus">
                    <VectorStroke />
                  </div>
                </div>
                <TextContainerText text="행삭제" />
              </div>
            </div>
            <Desktop1Text text="1" additionalClassNames="left-[1102.5px] top-[66px]" />
            <Desktop1Text text="4" additionalClassNames="left-[1149.5px] top-[158px]" />
            <Desktop1Text text="7" additionalClassNames="left-[1129.5px] top-[268px]" />
            <div className="absolute h-[63px] left-[1102.5px] top-[92px] w-[109px]">
              <img alt="" className="absolute block max-w-none size-full" height="63" src={imgRectangle16} width="109" />
            </div>
            <Desktop1Image additionalClassNames="left-[1216.68px]" />
            <div className="absolute h-[20px] left-[1078.5px] top-[271px] w-[44px]">
              <img alt="" className="absolute block max-w-none size-full" height="20" src={imgRectangle22} width="44" />
            </div>
            <Desktop1Text text="3" additionalClassNames="left-[1220.5px] top-[66px]" />
            <Desktop1Image additionalClassNames="left-[1315.68px]" />
            <Desktop1Text text="2" additionalClassNames="left-[1319.5px] top-[66px]" />
            <div className="absolute content-stretch flex gap-[6px] items-center leading-[0] left-[56.5px] text-[14px] top-[60.34px]">
              <Frame4Text text="시스템" />
              <Frame4Helper />
              <Frame4Text text="시스템 관리" />
              <Frame4Helper />
              <div className="flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#222] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[normal]">관리자 관리</p>
              </div>
            </div>
            <div className="absolute h-[54px] left-[1175.5px] top-[158px] w-[109px]">
              <img alt="" className="absolute block max-w-none size-full" height="54" src={imgRectangle18} width="109" />
            </div>
            <div className="absolute h-[54px] left-[1172.5px] top-[158px] w-[237px]">
              <img alt="" className="absolute block max-w-none size-full" height="54" src={imgRectangle19} width="237" />
            </div>
            <Desktop1Text text="5" additionalClassNames="left-[1414.5px] top-[158px]" />
            <div className="absolute bg-[#0f62fe] left-[30.5px] min-w-[18px] rounded-[2px] size-[20px] top-[58.34px]" data-name="화면번호">
              <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
              <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                    <p className="leading-[normal]">6</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.927px] left-[54.5px] top-[51.34px] w-[258.526px]" />
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
                    <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[400px]">관리자 조회</p>
                  </div>
                  <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-[432px]">시스템/시스템관리/관리자 관리</p>
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
                    <Text text="1" additionalClassNames="size-[18px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">초기화 버튼</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <Text1 text="초기화 요청 시, 리로드를 진행한다. 이때 데이터셋의 잔여 데이터가 존재하지 않도록 주의하여야 한다." />
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
                    <Text text="2" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">검색어 입력 및 조회</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <Text1 text="검색어는 searchKeyword 파라미터로 송수신 하여야 하며, 관리자 목록 데이터에만 반영된다." />
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
                    <Text text="3" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">저장</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
                      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px] whitespace-pre-wrap">
                        행추가, 생성, 삭제, 수정 된 데이터의 경우 각각 newItems, delItems, updateItems 배열에 담아두어야 한다.
                        <br aria-hidden="true" />
                        데이터 생성, 삭제, 수정 후 저장 할 경우 상기 3개의 배열을 모두 전송해야한다.행삭제 로 등록, 삭제, 수정 처리
                        <br aria-hidden="true" />
                        <br aria-hidden="true" />
                        저장을 진행할 때, 초기 비밀번호는 SN111111 입니다. Alert 모달 필요.
                      </p>
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
                    <Text text="4" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">행추가</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
                      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">
                        행추가로 데이터를 신규 추가 할 시, 상세코드의 sysId는 백엔드 단에서 ULID 데이터를 넣어주어야 한다.
                        <br aria-hidden="true" />
                        저장되지 않고 추가된 데이터의 경우 비밀번호 초기화 버튼 비활성화 필요.
                      </p>
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
                    <Text text="5" additionalClassNames="h-[18px] w-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">저장</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <Text1 text="행추가, 행삭제 로 CUD 처리" />
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
                    <Text text="6" additionalClassNames="h-[18px] w-[20px]" />
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
                    <Text text="7" additionalClassNames="h-[18px] w-[19px]" />
                    <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">비밀번호 초기화 버튼</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] relative w-full">
                    <Text1 text="해당 버튼을 누를 시, 선택한 관리자 계정의 비밀번호가 초기화 돱니다. 그 전에 Confirm 모달 필요." />
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