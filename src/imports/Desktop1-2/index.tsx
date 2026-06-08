import svgPaths from "./svg-5q603r25e2";
import imgRectangle22 from "./0c3cb3bda1edbe5f03ecc900dab46e825c045815.png";
import imgRectangle25 from "./7c691f86ed43ab9de6946c17fa640c8a8fe742fd.png";

function TextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] w-[110px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        QR 코드 관리
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
        <p className="leading-[normal]">매장 관리</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`>`}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">테이블 정보 관리</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`>`}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#222] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">QR 코드 관리</p>
      </div>
    </div>
  );
}

function Frame2() {
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
        <Frame2 />
      </div>
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
            테이블 번호
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
            비고
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
    <div className="h-[47px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full" />
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content3 />
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
      <div className="flex flex-row items-end self-stretch">
        <Cell3 />
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

function Content4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame3 />
      </div>
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
        Cell Text
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

function MaterialSymbolsPrint({ className }: { className?: string }) {
  return (
    <div className={className || "relative shrink-0 size-[24px]"} data-name="material-symbols:print">
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <path d={svgPaths.p1565e180} fill="var(--fill-0, #21272A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <MaterialSymbolsPrint />
    </div>
  );
}

function Cell6() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content7 />
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[56px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-row items-end self-stretch">
        <TabelCheckBoxCell />
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

function Content8() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame4 />
      </div>
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
        Cell Text
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
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <div className="relative shrink-0 size-[24px]" data-name="material-symbols:print">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p1565e180} fill="var(--fill-0, #21272A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content11 />
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[56px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-row items-end self-stretch">
        <TabelCheckBoxCell1 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell7 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
        <Cell8 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <Cell9 />
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

function Content12() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame5 />
      </div>
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
        Cell Text
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
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <div className="relative shrink-0 size-[24px]" data-name="material-symbols:print">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p1565e180} fill="var(--fill-0, #21272A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cell12() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content15 />
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[56px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-row items-end self-stretch">
        <TabelCheckBoxCell2 />
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

function Content16() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame6 />
      </div>
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
        Cell Text
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
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <div className="relative shrink-0 size-[24px]" data-name="material-symbols:print">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p1565e180} fill="var(--fill-0, #21272A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cell15() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content19 />
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[56px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-row items-end self-stretch">
        <TabelCheckBoxCell3 />
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

function Content20() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] py-[14px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Controls">
        <Frame7 />
      </div>
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
        Cell Text
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
    <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[16px] relative shrink-0" data-name="Content">
      <div className="relative shrink-0 size-[24px]" data-name="material-symbols:print">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p1565e180} fill="var(--fill-0, #21272A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[40px]" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content23 />
    </div>
  );
}

function Row4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[56px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <div className="flex flex-row items-end self-stretch">
        <TabelCheckBoxCell4 />
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
      </div>
      <div aria-hidden className="absolute border border-[#dde1e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconContainer() {
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

function TextContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        행추가
      </p>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="IconButton">
      <div aria-hidden className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
      <IconContainer />
      <TextContainer1 />
    </div>
  );
}

function IconContainer1() {
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

function TextContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        행삭제
      </p>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="IconButton">
      <div aria-hidden className="absolute border border-[#eef0f2] border-solid inset-0 pointer-events-none" />
      <IconContainer1 />
      <TextContainer2 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        QR 출력
      </p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        저장
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[951px] top-[153.5px]">
      <IconButton />
      <IconButton1 />
      <div className="bg-[#e5e8ed] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <TextContainer3 />
      </div>
      <div className="bg-[#e5e8ed] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <TextContainer4 />
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
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[63px] left-[55px] top-[93px] w-[420.589px]" />
      <Table />
      <Frame />
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[947px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[124.5px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">4</p>
        </div>
      </div>
      <div className="absolute h-[54px] left-[947px] top-[150.5px] w-[118px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="54" src={imgRectangle22} width="118" />
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1069px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[124.5px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">5</p>
        </div>
      </div>
      <div className="absolute h-[54px] left-[1069px] top-[150.5px] w-[118px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="54" src={imgRectangle22} width="118" />
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1192.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[124.5px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">6</p>
        </div>
      </div>
      <div className="absolute h-[54px] left-[1192.5px] top-[150.5px] w-[118px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="54" src={imgRectangle22} width="118" />
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1314.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[124.5px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">7</p>
        </div>
      </div>
      <div className="absolute h-[54px] left-[1314.5px] top-[150.5px] w-[96.968px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="54" src={imgRectangle25} width="96.968" />
      </div>
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.834px] left-[1366px] top-[273.83px] w-[31.94px]" />
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1296.16px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[241px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">8</p>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[1353.5px] not-italic text-[#0f62fe] text-[12px] text-center top-[251px] whitespace-nowrap">
        <p className="leading-[normal]">QR 단일출력</p>
      </div>
      <div className="absolute h-[33.409px] left-[1307.61px] top-[261.3px] w-[52.219px]">
        <div className="absolute inset-[-2.99%_-1.92%_-22.04%_-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.2188 41.7732">
            <path d={svgPaths.p1841c00} fill="var(--stroke-0, #0F62FE)" id="Vector 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}