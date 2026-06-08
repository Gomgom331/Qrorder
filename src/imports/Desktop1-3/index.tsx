import svgPaths from "./svg-sy3u2tctj2";

function TextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] w-[110px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        옵션 관리
      </p>
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center left-[50px] py-[16px] top-[167px] w-[122px]" data-name="tab">
      <TextContainer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex gap-[6px] items-center leading-[0] left-[55.5px] text-[14px] top-[59.34px]">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 관리</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`>`}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 정보 관리</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`>`}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#222] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">옵션 관리</p>
      </div>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        초기화
      </p>
    </div>
  );
}

function TextContainer2() {
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
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center right-[28.5px] top-[calc(50%-390px)]">
      <div className="bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
        <TextContainer1 />
      </div>
      <div className="bg-[#e5e8ed] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <TextContainer2 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            메뉴 명
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function RowTableFixedRow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[47px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row #Table-Fixed-Row">
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content1 />
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[36px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell1 />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content2 />
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[36px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell2 />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content3 />
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[36px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell3 />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="absolute bg-white h-[739px] left-[50px] top-[220px] w-[294px]" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RowTableFixedRow />
        <Row />
        <Row1 />
        <Row2 />
      </div>
      <div aria-hidden className="absolute border border-[#dde1e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            옵션 그룹 명
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            필수 선택
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            사용 여부
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content6 />
    </div>
  );
}

function Content7() {
  return <div className="h-[48px] relative shrink-0 w-[40px]" data-name="Content" />;
}

function Cell7() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content7 />
    </div>
  );
}

function RowTableFixedRow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-end overflow-clip relative shrink-0 w-full" data-name=".Row #Table-Fixed-Row">
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell4 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell5 />
      </div>
      <Cell6 />
      <div className="flex flex-row items-end self-stretch">
        <Cell7 />
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
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

function Cell9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content9 />
    </div>
  );
}

function Content10() {
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
      <Content10 />
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

function Content11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <IconContainer />
    </div>
  );
}

function Cell11() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content11 />
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell8 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell9 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell10 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell11 />
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
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

function Cell13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content13 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content14 />
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

function Content15() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <IconContainer1 />
    </div>
  );
}

function Cell15() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content15 />
    </div>
  );
}

function Row4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell12 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell13 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell14 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell15 />
      </div>
    </div>
  );
}

function Content16() {
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

function Cell17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content17 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content18 />
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

function Content19() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <IconContainer2 />
    </div>
  );
}

function Cell19() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content19 />
    </div>
  );
}

function Row5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell16 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell17 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell18 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell19 />
      </div>
    </div>
  );
}

function Table1() {
  return (
    <div className="absolute bg-white h-[325px] left-[366px] top-[220px] w-[1038px]" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RowTableFixedRow1 />
        <Row3 />
        <Row4 />
        <Row5 />
      </div>
      <div aria-hidden className="absolute border border-[#dde1e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Content20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            옵션 명
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell20() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content20 />
    </div>
  );
}

function Content21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            옵션 가격
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell21() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content21 />
    </div>
  );
}

function Content22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            옵션 설명
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell22() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content22 />
    </div>
  );
}

function Content23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            기본선택 사용여부
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell23() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content23 />
    </div>
  );
}

function Content24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#121619] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            사용 여부
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell24() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content24 />
    </div>
  );
}

function Content25() {
  return <div className="h-[48px] relative shrink-0 w-[40px]" data-name="Content" />;
}

function Cell25() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content25 />
    </div>
  );
}

function RowTableFixedRow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-end overflow-clip relative shrink-0 w-full" data-name=".Row #Table-Fixed-Row">
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
      <Cell24 />
      <div className="flex flex-row items-end self-stretch">
        <Cell25 />
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content26 />
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content27 />
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
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

function Cell29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content29 />
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content30 />
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

function Content31() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <IconContainer3 />
    </div>
  );
}

function Cell31() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content31 />
    </div>
  );
}

function Row6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
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
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell30 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell31 />
      </div>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content32 />
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content33 />
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content34 />
    </div>
  );
}

function Content35() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content35 />
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content36 />
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

function Content37() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <IconContainer4 />
    </div>
  );
}

function Cell37() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content37 />
    </div>
  );
}

function Row7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
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
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell36 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell37 />
      </div>
    </div>
  );
}

function Table2() {
  return (
    <div className="absolute bg-white h-[326px] left-[366px] top-[633px] w-[1038px]" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RowTableFixedRow2 />
        <Row6 />
        <Row7 />
      </div>
      <div aria-hidden className="absolute border border-[#dde1e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <div className="bg-[#e5e8ed] col-1 h-[48px] ml-0 mt-0 relative row-1 w-[52.295px]" />
      <div className="col-1 ml-[14.15px] mt-[12px] overflow-clip relative row-1 size-[24px]" data-name="icons / commons / menus / chevron-down">
        <div className="absolute inset-[33.58%_21.92%_34.47%_22.51%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3386 7.66907">
            <path d={svgPaths.p1d45b280} fill="var(--fill-0, #21272A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#e5e8ed] col-1 h-[48px] ml-0 mt-0 relative row-1 w-[52.295px]" />
      <div className="col-1 ml-[14.15px] mt-[12px] overflow-clip relative row-1 size-[24px]" data-name="icons / commons / menus / chevron-down">
        <div className="absolute inset-[33.58%_21.92%_34.47%_22.51%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3386 7.66907">
            <path d={svgPaths.p1d45b280} fill="var(--fill-0, #21272A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / commons / add">
        <div className="absolute inset-[18.75%_46.88%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 15">
            <path clipRule="evenodd" d={svgPaths.p3c5fb040} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[46.88%_18.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.5">
            <path clipRule="evenodd" d={svgPaths.p6bc53f0} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
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
      <IconContainer5 />
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

function IconContainer6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icons / commons/ minus">
        <div className="absolute inset-[46.88%_18.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.5">
            <path clipRule="evenodd" d={svgPaths.p6bc53f0} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
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
      <IconContainer6 />
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
    <div className="absolute content-stretch flex gap-[12px] items-center left-[945.41px] top-[577px]">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="flex-none rotate-180">
          <Group1 />
        </div>
      </div>
      <Group />
      <IconButton />
      <IconButton2 />
      <div className="bg-[#e5e8ed] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <TextContainer5 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <div className="bg-[#e5e8ed] col-1 h-[48px] ml-0 mt-0 relative row-1 w-[52.295px]" />
      <div className="col-1 ml-[14.15px] mt-[12px] overflow-clip relative row-1 size-[24px]" data-name="icons / commons / menus / chevron-down">
        <div className="absolute inset-[33.58%_21.92%_34.47%_22.51%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3386 7.66907">
            <path d={svgPaths.p1d45b280} fill="var(--fill-0, #21272A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#e5e8ed] col-1 h-[48px] ml-0 mt-0 relative row-1 w-[52.295px]" />
      <div className="col-1 ml-[14.15px] mt-[12px] overflow-clip relative row-1 size-[24px]" data-name="icons / commons / menus / chevron-down">
        <div className="absolute inset-[33.58%_21.92%_34.47%_22.51%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3386 7.66907">
            <path d={svgPaths.p1d45b280} fill="var(--fill-0, #21272A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / commons / add">
        <div className="absolute inset-[18.75%_46.88%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 15">
            <path clipRule="evenodd" d={svgPaths.p3c5fb040} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[46.88%_18.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.5">
            <path clipRule="evenodd" d={svgPaths.p6bc53f0} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        행추가
      </p>
    </div>
  );
}

function IconButton4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="IconButton">
      <div aria-hidden className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
      <IconContainer7 />
      <TextContainer6 />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center relative shrink-0" data-name="IconButton">
      <div aria-hidden className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
      <IconButton4 />
    </div>
  );
}

function IconContainer8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icons / commons/ minus">
        <div className="absolute inset-[46.88%_18.75%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.5">
            <path clipRule="evenodd" d={svgPaths.p6bc53f0} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        행삭제
      </p>
    </div>
  );
}

function IconButton5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="IconButton">
      <div aria-hidden className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
      <IconContainer8 />
      <TextContainer7 />
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        저장
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[945.41px] top-[155.69px]">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="flex-none rotate-180">
          <Group2 />
        </div>
      </div>
      <Group3 />
      <IconButton3 />
      <IconButton5 />
      <div className="bg-[#e5e8ed] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <TextContainer8 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[1296px] top-[244.96px]">
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.834px] left-[1366.84px] top-[278.79px] w-[31.94px]" />
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[1297px] min-w-[18px] px-[6px] rounded-[2px] top-[245.96px] w-[26px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">10</p>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[1360.66px] not-italic text-[#0f62fe] text-[12px] text-center top-[255.96px] whitespace-nowrap">
        <p className="leading-[normal]">수정모달 열림</p>
      </div>
      <div className="absolute h-[33.409px] left-[1308.44px] top-[266.26px] w-[52.219px]">
        <div className="absolute inset-[-2.99%_-1.92%_-22.04%_-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.2188 41.7732">
            <path d={svgPaths.p1841c00} fill="var(--stroke-0, #0F62FE)" id="Vector 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[1296px] top-[655.96px]">
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.834px] left-[1366.84px] top-[689.79px] w-[31.94px]" />
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[1297px] min-w-[18px] px-[6px] rounded-[2px] top-[656.96px] w-[26px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">10</p>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[1360.66px] not-italic text-[#0f62fe] text-[12px] text-center top-[666.96px] whitespace-nowrap">
        <p className="leading-[normal]">수정모달 열림</p>
      </div>
      <div className="absolute h-[33.409px] left-[1308.44px] top-[677.26px] w-[52.219px]">
        <div className="absolute inset-[-2.99%_-1.92%_-22.04%_-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.2188 41.7732">
            <path d={svgPaths.p1841c00} fill="var(--stroke-0, #0F62FE)" id="Vector 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="border border-[#999] border-solid relative size-full" data-name="Desktop - 1">
      <Tab />
      <Frame1 />
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[29.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[57.34px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">1</p>
        </div>
      </div>
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.927px] left-[53.5px] top-[50.34px] w-[290.654px]" />
      <div className="absolute bg-white content-stretch flex gap-[8px] h-[48px] items-center left-[55.5px] px-[16px] py-[12px] top-[101px] w-[401px]" data-name="Field">
        <div aria-hidden className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / jam-icons / outline & logos / search">
          <div className="absolute inset-[10.41%_13.73%_13.73%_10.41%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2053 18.2053">
              <path d={svgPaths.pe8f0280} fill="var(--fill-0, #697077)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#697077] text-[16px] w-[114px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          검색어
        </p>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[29.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[103px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">3</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[19.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[272px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">8</p>
        </div>
      </div>
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[63px] left-[55px] top-[93px] w-[420.589px]" />
      <Frame />
      <Table />
      <Table1 />
      <Table2 />
      <Frame2 />
      <Frame3 />
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[57.166px] left-[944.48px] top-[572.31px] w-[467.025px]" />
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[57.166px] left-[944.48px] top-[151px] w-[467.025px]" />
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[914.8px] min-w-[18px] px-[6px] rounded-[2px] top-[573.04px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">4</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[914.8px] min-w-[18px] px-[6px] rounded-[2px] top-[151.73px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">4</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[885.3px] min-w-[18px] px-[6px] rounded-[2px] top-[573.04px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">5</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[885.3px] min-w-[18px] px-[6px] rounded-[2px] top-[151.73px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">5</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[855.8px] min-w-[18px] px-[6px] rounded-[2px] top-[573.04px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">6</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[855.8px] min-w-[18px] px-[6px] rounded-[2px] top-[151.73px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">6</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[826.3px] min-w-[18px] px-[6px] rounded-[2px] top-[573.04px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">7</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[826.3px] min-w-[18px] px-[6px] rounded-[2px] top-[151.73px] w-[22px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">7</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(15,98,254,0.06)] border-2 border-[#0f62fe] border-dashed h-[50.616px] left-[47px] top-[260.38px] w-[302.489px]" />
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[333.308px] left-[358.63px] top-[211.69px] w-[1052.875px]" />
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[338.496px] left-[366px] top-[629px] w-[1045.5px]" />
      <div className="absolute bg-[rgba(15,98,254,0.08)] border-2 border-[#0f62fe] border-dashed h-[60.845px] left-[349.49px] top-[356.19px] w-[1081.511px]" />
      <div className="absolute h-[23px] left-[347px] top-[274px] w-[23.251px]">
        <div className="absolute inset-[-32.02%_-4.3%_-4.35%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.251 31.364">
            <path d={svgPaths.p248d1300} fill="var(--stroke-0, #0F62FE)" id="Vector 13" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[319.298px] items-center justify-center left-[333.81px] top-[383.56px] w-[30.738px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[319.298px] relative w-[30.738px]">
            <div className="absolute inset-[-2.31%_-3.25%_-0.31%_-3.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7376 327.662">
                <path d={svgPaths.p3b199900} fill="var(--stroke-0, #0F62FE)" id="Vector 14" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[304px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[384.11px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">9</p>
        </div>
      </div>
      <Group4 />
      <Group5 />
    </div>
  );
}