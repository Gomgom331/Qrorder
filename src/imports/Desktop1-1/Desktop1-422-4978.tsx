import svgPaths from "./svg-4qv1bsvio4";
import imgRectangle16 from "./cbfd9c7e52d071a431ce0e3677db80f51d400f79.png";
import imgRectangle22 from "./0c3cb3bda1edbe5f03ecc900dab46e825c045815.png";
import imgRectangle26 from "./c2f53b25b64055703bf1cdca4baea6596bfe9b59.png";

function TextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#21272a] text-[16px] tracking-[0.5px] w-[110px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        테이블 관리
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

function Frame2() {
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
        <p className="leading-[normal]">테이블 관리</p>
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

function Group() {
  return (
    <div className="absolute contents left-[1200.73px] top-[63px]">
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[1201.73px] min-w-[18px] px-[6px] rounded-[2px] top-[64px] w-[23.124px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">2</p>
        </div>
      </div>
      <div className="absolute h-[63px] left-[1204.04px] top-[90px] w-[114.462px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="63" src={imgRectangle16} width="114.462" />
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
            테이블 이름
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
            좌석 개수
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

function Content4() {
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

function Cell4() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content4 />
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
      <Cell4 />
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

function Content5() {
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
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[566px]" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#121619] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
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

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
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

function Content8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Y/N
      </p>
    </div>
  );
}

function Cell8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content9 />
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <TabelCheckBoxCell />
      <Cell5 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
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

function Content10() {
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
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content10 />
    </div>
  );
}

function Content11() {
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
      <Content11 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative shrink-0 w-[160px]" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#121619] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cell Text
      </p>
    </div>
  );
}

function Cell10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content12 />
    </div>
  );
}

function Content13() {
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
      <Content13 />
    </div>
  );
}

function Content14() {
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
      <Content14 />
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <TabelCheckBoxCell1 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
      <Cell12 />
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

function Content15() {
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
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content15 />
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

function Cell13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content16 />
    </div>
  );
}

function Content17() {
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

function Cell15() {
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

function Cell16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Cell">
      <div aria-hidden className="absolute border-[#dde1e6] border-solid border-t inset-0 pointer-events-none" />
      <Content19 />
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-end overflow-clip relative shrink-0 w-full" data-name=".Row">
      <TabelCheckBoxCell2 />
      <Cell13 />
      <Cell14 />
      <Cell15 />
      <Cell16 />
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

function TextContainer3() {
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
      <TextContainer3 />
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

function TextContainer4() {
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

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[1079.5px] top-[153.5px]">
      <IconButton />
      <IconButton1 />
      <div className="bg-[#e5e8ed] content-stretch flex h-[48px] items-center justify-center px-[12px] py-[16px] relative shrink-0" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <TextContainer5 />
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="border border-[#999] border-solid relative size-full" data-name="Desktop - 1">
      <Tab />
      <Frame2 />
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
      <Frame />
      <Group />
      <Table />
      <Frame1 />
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[64.389px] left-[95.5px] top-[207.61px] w-[327.25px]" />
      <div className="absolute bg-[#0f62fe] content-stretch flex h-[20px] items-center justify-center left-[397.75px] min-w-[18px] px-[6px] rounded-[2px] top-[179px] w-[25px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">4</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1075.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[124.5px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">5</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1173.5px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[124.5px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">6</p>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] content-stretch flex items-center justify-center left-[1416.73px] min-w-[18px] px-[6px] rounded-[2px] size-[20px] top-[150px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
          <p className="leading-[normal]">7</p>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[1207.19px] not-italic text-[12px] text-center text-white top-[134.5px] w-[8.132px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="absolute h-[54px] left-[1075.5px] top-[150.5px] w-[118px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="54" src={imgRectangle22} width="118" />
      </div>
      <div className="absolute h-[54px] left-[1323.5px] top-[150.5px] w-[90.237px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="54" src={imgRectangle26} width="90.237" />
      </div>
    </div>
  );
}