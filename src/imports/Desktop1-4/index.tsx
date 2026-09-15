import svgPaths from "./svg-kcdrgle91e";
import imgRectangle16 from "./b60df201d3bc9b2ea690718fbe888a17ae465a2d.png";

function IconsCommonsMinus({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="icons / commons/ minus">
      <div className="absolute inset-[46.88%_18.75%]" data-name="Vector (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 15 1.5" width="15">
          <path clipRule="evenodd" d={svgPaths.p6bc53f0} fill="#21272A" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function IconCommonsAdd({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="icon / commons / add">
      <div className="absolute inset-[18.75%_46.88%]" data-name="Vector (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 1.5 15" width="1.5">
          <path clipRule="evenodd" d={svgPaths.p3c5fb040} fill="#21272A" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[46.88%_18.75%]" data-name="Vector (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 15 1.5" width="15">
          <path clipRule="evenodd" d={svgPaths.p6bc53f0} fill="#21272A" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function IconsCommonsMenusChevronDown({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="icons / commons / menus / chevron-down">
      <div className="absolute inset-[33.58%_21.92%_34.47%_22.51%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="7.66907" preserveAspectRatio="none" viewBox="0 0 13.3386 7.66907" width="13.3386">
          <path d={svgPaths.p1d45b280} fill="#21272A" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type ControlsProps = {
  className?: string;
  disabled?: "False";
  indeterminate?: "False";
  selected?: "False";
  type?: "Checkbox";
};

function Controls({ className, disabled = "False", indeterminate = "False", selected = "False", type = "Checkbox" }: ControlsProps) {
  return (
    <div className={className || "relative size-[20px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="relative shrink-0 size-[16px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
              <g id="Frame 60">
                <rect height="15" stroke="#121619" width="15" x="0.5" y="0.5" />
                <path d={svgPaths.pe78ef72} fill="white" id="Union" opacity="0" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex gap-[6px] items-center leading-[0] left-[55.5px] text-[14px] top-[59.34px] whitespace-nowrap">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`>`}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 정보 관리</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`>`}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#222]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">직원호출 관리</p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        초기화
      </p>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        조회
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center right-[34px] top-[calc(50%-390px)]">
      <div className="bg-[#f9f9f9] h-[48px] relative shrink-0" data-name="button">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer />
          </div>
        </div>
      </div>
      <div className="bg-[#e5e8ed] h-[48px] relative shrink-0" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] w-[110px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        직원호출 관리
      </p>
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center left-[50px] py-[16px] top-[167px] w-[122px]" data-name="tab">
      <TextContainer2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <Controls className="relative shrink-0 size-[20px]" />
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            호출 명
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            선택 방식
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            사용여부
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content3 />
    </div>
  );
}

function RowTableFixedRow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row #Table-Fixed-Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <Controls className="relative shrink-0 size-[20px]" />
    </div>
  );
}

function TabelCheckBoxCell() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Combo
      </p>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Y/N
      </p>
    </div>
  );
}

function Cell6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content7 />
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <TabelCheckBoxCell />
      <Cell4 />
      <Cell5 />
      <Cell6 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <Controls className="relative shrink-0 size-[20px]" />
    </div>
  );
}

function TabelCheckBoxCell1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content9 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Combo
      </p>
    </div>
  );
}

function Cell8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content10 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Y/N
      </p>
    </div>
  );
}

function Cell9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content11 />
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <TabelCheckBoxCell1 />
      <Cell7 />
      <Cell8 />
      <Cell9 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <Controls className="relative shrink-0 size-[20px]" />
    </div>
  );
}

function TabelCheckBoxCell2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content12 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content13 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Combo
      </p>
    </div>
  );
}

function Cell11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content14 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Y/N
      </p>
    </div>
  );
}

function Cell12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content15 />
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <TabelCheckBoxCell2 />
      <Cell10 />
      <Cell11 />
      <Cell12 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <Controls className="relative shrink-0 size-[20px]" />
    </div>
  );
}

function TabelCheckBoxCell3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content16 />
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content17 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Combo
      </p>
    </div>
  );
}

function Cell14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content18 />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Y/N
      </p>
    </div>
  );
}

function Cell15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content19 />
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <TabelCheckBoxCell3 />
      <Cell13 />
      <Cell14 />
      <Cell15 />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <Controls className="relative shrink-0 size-[20px]" />
    </div>
  );
}

function TabelCheckBoxCell4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content20 />
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content21 />
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Combo
      </p>
    </div>
  );
}

function Cell17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content22 />
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Y/N
      </p>
    </div>
  );
}

function Cell18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content23 />
    </div>
  );
}

function Row4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <TabelCheckBoxCell4 />
      <Cell16 />
      <Cell17 />
      <Cell18 />
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <Controls className="relative shrink-0 size-[20px]" />
    </div>
  );
}

function TabelCheckBoxCell5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content24 />
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content25 />
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Combo
      </p>
    </div>
  );
}

function Cell20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content26 />
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Y/N
      </p>
    </div>
  );
}

function Cell21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content27 />
    </div>
  );
}

function Row5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <TabelCheckBoxCell5 />
      <Cell19 />
      <Cell20 />
      <Cell21 />
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <Controls className="relative shrink-0 size-[20px]" />
    </div>
  );
}

function TabelCheckBoxCell6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content28 />
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content29 />
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Combo
      </p>
    </div>
  );
}

function Cell23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content30 />
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Y/N
      </p>
    </div>
  );
}

function Cell24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content31 />
    </div>
  );
}

function Row6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <TabelCheckBoxCell6 />
      <Cell22 />
      <Cell23 />
      <Cell24 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute bg-white h-[768px] left-[55px] top-[215px] w-[1351px]" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RowTableFixedRow />
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
        <Row6 />
      </div>
      <div aria-hidden className="absolute border border-[#dde1e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group1() {
  return (
    <div className="flex items-center justify-center leading-[0] relative shrink-0">
      <div className="flex-none rotate-180">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
          <div className="bg-[#e5e8ed] col-1 h-[48px] ml-0 mt-0 relative row-1 w-[52.295px]" />
          <IconsCommonsMenusChevronDown className="col-1 ml-[14.15px] mt-[12px] overflow-clip relative row-1 size-[24px]" />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#e5e8ed] col-1 h-[48px] ml-0 mt-0 relative row-1 w-[52.295px]" />
      <IconsCommonsMenusChevronDown className="col-1 ml-[14.15px] mt-[12px] overflow-clip relative row-1 size-[24px]" />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon Container">
      <IconCommonsAdd className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        행추가
      </p>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="IconButton">
      <div aria-hidden className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
      <IconContainer />
      <TextContainer3 />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center relative shrink-0" data-name="IconButton">
      <div aria-hidden className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
      <IconButton1 />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon Container">
      <IconsCommonsMinus className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        행삭제
      </p>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="IconButton">
      <div aria-hidden className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
      <IconContainer1 />
      <TextContainer4 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        저장
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[945.41px] top-[155.69px]">
      <Group1 />
      <Group />
      <IconButton />
      <IconButton2 />
      <div className="bg-[#e5e8ed] h-[48px] relative shrink-0" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[1196.5px] top-[63px]">
      <div className="absolute bg-[#0f62fe] left-[1197.5px] min-w-[18px] rounded-[2px] size-[20px] top-[64px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
              <p className="leading-[normal]">2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[63px] left-[1197.5px] top-[90px] w-[109px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="63" src={imgRectangle16} width="109" />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[1306.5px] top-[63px]">
      <div className="absolute bg-[#0f62fe] left-[1307.5px] min-w-[18px] rounded-[2px] size-[20px] top-[64px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
              <p className="leading-[normal]">3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[63px] left-[1307.5px] top-[90px] w-[109px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="63" src={imgRectangle16} width="109" />
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="border border-[#999] border-solid relative size-full" data-name="Desktop - 1">
      <Frame1 />
      <div className="absolute bg-white h-[48px] left-[55.5px] top-[101px] w-[401px]" data-name="Field">
        <div aria-hidden className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / jam-icons / outline & logos / search">
              <div className="absolute inset-[10.41%_13.73%_13.73%_10.41%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="18.2053" preserveAspectRatio="none" viewBox="0 0 18.2053 18.2053" width="18.2053">
                  <path d={svgPaths.pe8f0280} fill="#697077" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#697077] text-[16px] w-[114px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              검색어
            </p>
          </div>
        </div>
      </div>
      <Frame />
      <Tab />
      <Table />
      <Frame2 />
      <div className="absolute bg-[#0f62fe] left-[29.5px] min-w-[18px] rounded-[2px] size-[20px] top-[57.34px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.927px] left-[53.5px] top-[50.34px] w-[290.654px]" />
      <div className="absolute bg-[#0f62fe] left-[29.5px] min-w-[18px] rounded-[2px] size-[20px] top-[103px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
              <p className="leading-[normal]">3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[63px] left-[55px] top-[93px] w-[420.589px]" />
      <Group2 />
      <Group3 />
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[57.166px] left-[944.48px] top-[151px] w-[467.025px]" />
      <div className="absolute bg-[#0f62fe] h-[20px] left-[914.8px] min-w-[18px] rounded-[2px] top-[151.73px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
              <p className="leading-[normal]">4</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] h-[20px] left-[885.3px] min-w-[18px] rounded-[2px] top-[151.73px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
              <p className="leading-[normal]">5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] h-[20px] left-[855.8px] min-w-[18px] rounded-[2px] top-[151.73px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">6</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] h-[20px] left-[826.3px] min-w-[18px] rounded-[2px] top-[151.73px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[60.845px] left-[48.73px] top-[303.58px] w-[1360.765px]" />
      <div className="absolute bg-[#0f62fe] left-[24.96px] min-w-[18px] rounded-[2px] size-[20px] top-[325px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}