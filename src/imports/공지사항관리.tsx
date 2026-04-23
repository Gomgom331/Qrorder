import svgPaths from "./svg-ft32rhej82";

function TextContainer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        초기화
      </p>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        신규
      </p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        삭제
      </p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        조회
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[1011.5px] top-[102px]">
      <div className="bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
        <TextContainer />
      </div>
      <div className="bg-[#e5e8ed] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <TextContainer1 />
      </div>
      <div className="bg-[#e5e8ed] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <TextContainer2 />
      </div>
      <div className="bg-[#e5e8ed] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <TextContainer3 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 60">
          <rect height="15" stroke="var(--stroke-0, #121619)" width="15" x="0.5" y="0.5" />
          <path d={svgPaths.pe78ef72} fill="var(--fill-0, white)" id="Union" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame3 />
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            제목
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            내용
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            등록자
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            등록일자
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            수정일자
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] size-full" />
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content6 />
    </div>
  );
}

function RowTableFixedRow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row #Table-Fixed-Row">
      <div className="flex flex-row items-end self-stretch">
        <Cell />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell1 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell2 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell3 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell4 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell5 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell6 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 60">
          <rect height="15" stroke="var(--stroke-0, #121619)" width="15" x="0.5" y="0.5" />
          <path d={svgPaths.pe78ef72} fill="var(--fill-0, white)" id="Union" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame4 />
      </div>
    </div>
  );
}

function TabelCheckBoxCell() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content9 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content10 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content11 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content12 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icons / commons / pencil">
        <div className="absolute inset-[21.34%_21.34%_9.37%_9.37%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0859 11.0859">
            <path clipRule="evenodd" d={svgPaths.p30c5080} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[9.38%_9.38%_74.62%_74.62%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.56008 2.56039">
            <path clipRule="evenodd" d={svgPaths.p1535be00} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <IconContainer />
    </div>
  );
}

function Cell12() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content13 />
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-row items-end self-stretch">
        <TabelCheckBoxCell />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell7 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell8 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell9 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell10 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell11 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell12 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 60">
          <rect height="15" stroke="var(--stroke-0, #121619)" width="15" x="0.5" y="0.5" />
          <path d={svgPaths.pe78ef72} fill="var(--fill-0, white)" id="Union" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame5 />
      </div>
    </div>
  );
}

function TabelCheckBoxCell1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content14 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content15 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content16 />
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content17 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content18 />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content19 />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icons / commons / pencil">
        <div className="absolute inset-[21.34%_21.34%_9.37%_9.37%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0859 11.0859">
            <path clipRule="evenodd" d={svgPaths.p30c5080} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[9.38%_9.38%_74.62%_74.62%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.56008 2.56039">
            <path clipRule="evenodd" d={svgPaths.p1535be00} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <IconContainer1 />
    </div>
  );
}

function Cell18() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content20 />
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-row items-end self-stretch">
        <TabelCheckBoxCell1 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell13 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell14 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell15 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell16 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell17 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell18 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 60">
          <rect height="15" stroke="var(--stroke-0, #121619)" width="15" x="0.5" y="0.5" />
          <path d={svgPaths.pe78ef72} fill="var(--fill-0, white)" id="Union" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame6 />
      </div>
    </div>
  );
}

function TabelCheckBoxCell2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content21 />
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content22 />
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content23 />
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content24 />
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content25 />
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content26 />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icons / commons / pencil">
        <div className="absolute inset-[21.34%_21.34%_9.37%_9.37%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0859 11.0859">
            <path clipRule="evenodd" d={svgPaths.p30c5080} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[9.38%_9.38%_74.62%_74.62%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.56008 2.56039">
            <path clipRule="evenodd" d={svgPaths.p1535be00} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <IconContainer2 />
    </div>
  );
}

function Cell24() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content27 />
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-row items-end self-stretch">
        <TabelCheckBoxCell2 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell19 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell20 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell21 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell22 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell23 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell24 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 60">
          <rect height="15" stroke="var(--stroke-0, #121619)" width="15" x="0.5" y="0.5" />
          <path d={svgPaths.pe78ef72} fill="var(--fill-0, white)" id="Union" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame7 />
      </div>
    </div>
  );
}

function TabelCheckBoxCell3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content28 />
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content29 />
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content30 />
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content31 />
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content32 />
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content33 />
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icons / commons / pencil">
        <div className="absolute inset-[21.34%_21.34%_9.37%_9.37%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0859 11.0859">
            <path clipRule="evenodd" d={svgPaths.p30c5080} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[9.38%_9.38%_74.62%_74.62%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.56008 2.56039">
            <path clipRule="evenodd" d={svgPaths.p1535be00} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <IconContainer3 />
    </div>
  );
}

function Cell30() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content34 />
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-row items-end self-stretch">
        <TabelCheckBoxCell3 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell25 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell26 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell27 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell28 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell29 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell30 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 60">
          <rect height="15" stroke="var(--stroke-0, #121619)" width="15" x="0.5" y="0.5" />
          <path d={svgPaths.pe78ef72} fill="var(--fill-0, white)" id="Union" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content35() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame8 />
      </div>
    </div>
  );
}

function TabelCheckBoxCell4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="tabelCheckBoxCell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content35 />
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content36 />
    </div>
  );
}

function Content37() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content37 />
    </div>
  );
}

function Content38() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content38 />
    </div>
  );
}

function Content39() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content39 />
    </div>
  );
}

function Content40() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[17px] pt-[12px] px-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content40 />
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icons / commons / pencil">
        <div className="absolute inset-[21.34%_21.34%_9.37%_9.37%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0859 11.0859">
            <path clipRule="evenodd" d={svgPaths.p30c5080} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[9.38%_9.38%_74.62%_74.62%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.56008 2.56039">
            <path clipRule="evenodd" d={svgPaths.p1535be00} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content41() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <IconContainer4 />
    </div>
  );
}

function Cell36() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content41 />
    </div>
  );
}

function Row4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-row items-end self-stretch">
        <TabelCheckBoxCell4 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell31 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell32 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell33 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell34 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell35 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell36 />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="absolute bg-white h-[759px] left-[56.5px] top-[216px] w-[1351px]" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RowTableFixedRow />
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dde1e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] w-[150px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        공지사항 목록
      </p>
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[56.5px] py-[16px] top-[168px]" data-name="tab">
      <TextContainer4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex font-normal gap-[6px] items-center leading-[0] left-[56.5px] text-[#999] text-[14px] top-[60.34px] whitespace-nowrap">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">게시판</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{`>`}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">공지사항 관리</p>
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-white h-[1024px] relative shrink-0 w-[1440px]" data-name="Desktop - 1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-white content-stretch flex gap-[8px] h-[48px] items-center left-[56.5px] px-[16px] py-[12px] top-[102px] w-[401px]" data-name="Field">
          <div aria-hidden="true" className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / jam-icons / outline & logos / search">
            <div className="absolute inset-[10.41%_13.73%_13.73%_10.41%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2053 18.2053">
                <path d={svgPaths.pe8f0280} fill="var(--fill-0, #697077)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#697077] text-[16px] w-[114px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            검색어
          </p>
        </div>
        <Frame />
        <Table />
        <Tab />
        <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[30.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[104px]" data-name="화면번호">
          <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
            <p className="leading-[normal]">2</p>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[30.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[58.34px]" data-name="화면번호">
          <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">7</p>
          </div>
        </div>
        <div className="absolute border-2 border-[#0f62fe] border-dashed h-[62.927px] left-[56.5px] top-[94.34px] w-[416.172px]" />
        <div className="absolute border-2 border-[#0f62fe] border-dashed h-[31px] left-[54.5px] top-[51px] w-[596px]" />
        <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1008.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[69px]" data-name="화면번호">
          <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
            <p className="leading-[normal]">1</p>
          </div>
        </div>
        <div className="absolute border-2 border-[#0f62fe] border-dashed h-[62.927px] left-[1008.41px] top-[94.34px] w-[109.086px]" />
        <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.834px] left-[1370.5px] top-[271.83px] w-[31.94px]" />
        <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1121.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[69px]" data-name="화면번호">
          <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
            <p className="leading-[normal]">4</p>
          </div>
        </div>
        <div className="absolute border-2 border-[#0f62fe] border-dashed h-[62.927px] left-[1121.5px] top-[94.34px] w-[93px]" />
        <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1219.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[69px]" data-name="화면번호">
          <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
            <p className="leading-[normal]">6</p>
          </div>
        </div>
        <div className="absolute border-2 border-[#0f62fe] border-dashed h-[62.927px] left-[1219.5px] top-[94.34px] w-[93px]" />
        <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[30.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[172px]" data-name="화면번호">
          <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
            <p className="leading-[normal]">3</p>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1300.66px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[239px]" data-name="화면번호">
          <div aria-hidden="true" className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
            <p className="leading-[normal]">5</p>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[1364.32px] not-italic text-[#0f62fe] text-[12px] text-center top-[249px] whitespace-nowrap">
          <p className="leading-[normal]">수정모달 열림</p>
        </div>
        <div className="absolute h-[33.409px] left-[1312.11px] top-[259.3px] w-[52.219px]">
          <div className="absolute inset-[-2.99%_-1.92%_-22.04%_-1.92%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.2188 41.7732">
              <path d={svgPaths.p1841c00} fill="var(--stroke-0, #0F62FE)" id="Vector 1" />
            </svg>
          </div>
        </div>
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="display">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[16.01%_9.85%_1.43%_12.88%]" data-name="Group">
          <div className="absolute inset-[96.62%_44.93%_0_50.42%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_0_19.25%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5455 16">
              <path d={svgPaths.p407b400} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-white">공지사항 관리</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[10px] relative shrink-0 w-full" data-name="타이틀">
      <Frame1 />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-full">게시판/공지사항 관리</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-0 relative shrink-0 w-[424.483px]" data-name="설명">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 424.483 1">
          <g id="ì¤ëª">
            <line id="Line 1" stroke="var(--stroke-0, white)" x2="424.483" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-center flex flex-wrap gap-y-[12px] items-center relative shrink-0 w-full" data-name="설명">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[16px] text-white">text - 설명</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#0f62fe] min-h-[100px] relative shrink-0 w-full" data-name="화면구성-타이틀">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center min-h-[inherit] p-[20px] relative size-full">
          <Component3 />
          <Component4 />
          <Component5 />
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-[#666] content-stretch flex items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0 size-[18px]" data-name="번호">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component9 />
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">초기화 버튼</p>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">초기화 요청 시, 리로드를 진행한다. 이때 데이터셋의 잔여 데이터가 존재하지 않도록 주의하여야 한다.</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component11 />
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component8 />
      <Component10 />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component7 />
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0 w-[20px]" data-name="번호">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[20px] relative shrink-0 w-[472px]" data-name="컨텐츠-번호">
      <Component15 />
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">검색어 입력 및 조회</p>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">검색어는 searchKeyword 파라미터로 송수신 하여야 한다.</p>
    </div>
  );
}

function Component16() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component17 />
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component14 />
      <Component16 />
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component13 />
    </div>
  );
}

function Component21() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0 w-[20px]" data-name="번호">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component21 />
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">공지사항목록</p>
        </div>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">공지사항은는 행추가, 삭제가 아닌 모달 팝업으로 데이터의 CRU가 이루어진다.</p>
    </div>
  );
}

function Component22() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component23 />
        </div>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component20 />
      <Component22 />
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component19 />
    </div>
  );
}

function Component27() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0 w-[20px]" data-name="번호">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component27 />
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">신규 버튼</p>
        </div>
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">신규 버튼 클릭 시 공지사항 데이터를 등록 할 수 있는 신규 팝업이 등장한다.</p>
    </div>
  );
}

function Component28() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component29 />
        </div>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component26 />
      <Component28 />
    </div>
  );
}

function Component24() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component25 />
    </div>
  );
}

function Component33() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0 w-[20px]" data-name="번호">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component33 />
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">수정 버튼</p>
        </div>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">생성된 공지사항 데이터 리스트 우측 수정 아이콘을 누를시 수정 팝업이 등장한다.</p>
    </div>
  );
}

function Component34() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component35 />
        </div>
      </div>
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component32 />
      <Component34 />
    </div>
  );
}

function Component30() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component31 />
    </div>
  );
}

function Component39() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0 w-[20px]" data-name="번호">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">6</p>
      </div>
    </div>
  );
}

function Component38() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component39 />
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">체크박스 선택 삭제</p>
        </div>
      </div>
    </div>
  );
}

function Component41() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px]">체크박스 선택 후 삭제 버튼 클릭 시, 선택한 공지사항 데이터에 대한 삭제 진행 전, Confirm 팝업이 등장한다.</p>
    </div>
  );
}

function Component40() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component41 />
        </div>
      </div>
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component38 />
      <Component40 />
    </div>
  );
}

function Component36() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component37 />
    </div>
  );
}

function Component45() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0 w-[19px]" data-name="번호">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Component44() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component45 />
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px not-italic relative text-[#666] text-[18px]">메뉴 경로</p>
        </div>
      </div>
    </div>
  );
}

function Component47() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-h-px min-w-px relative" data-name="설명">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[16px] whitespace-pre-wrap">{`상단 메뉴 경로는 현재 화면의 위치를 표시하기 위한  Breadcrumb이며 이동 기능은 제공하지 않음`}</p>
    </div>
  );
}

function Component46() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component47 />
        </div>
      </div>
    </div>
  );
}

function Component43() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component44 />
      <Component46 />
    </div>
  );
}

function Component42() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden="true" className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component43 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[471px]" data-name="화면구성">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
      <Component2 />
      <Component6 />
      <Component12 />
      <Component18 />
      <Component24 />
      <Component30 />
      <Component36 />
      <Component42 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f1f1f1] relative size-full" data-name="공지사항 관리">
      <div className="content-stretch flex items-start relative size-full">
        <Desktop />
        <Component1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}