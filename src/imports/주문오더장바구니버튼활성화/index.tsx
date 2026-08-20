import svgPaths from "./svg-w8y0qllq0t";
import imgRectangle16 from "./4187a5bf3aca257d117698ceb4891e8e40a9cdef.png";
import imgRectangle19 from "./3f64987da7b86e57b13f2c53c254d21a988c41fe.png";
import imgRectangle20 from "./366d0cb1b7e167984e7190f2ed1f9f674179c5e8.png";
import imgRectangle21 from "./3cdc307445baf2e949674558268ea930a3928072.png";
import imgRectangle17 from "./19a585ea0124af7494cf3abcab414874bdf39f7e.png";
import imgRectangle25 from "./a786ca1ca6c6f0c45954fa67f05bc5c42be3cfa1.png";
import imgRectangle23 from "./d15c929921635169ad38b34498dfea5a3477256a.png";
import imgRectangle22 from "./a93305447029b93043bf2fa8542ae9652df42676.png";
import imgRectangle24 from "./baf787bad844d45e5d2ddb1e718b6fe2ce0a8e99.png";
import imgRectangle26 from "./d6a363946727b54337d9221a78c63295d3844874.png";
type DisplayProps = {
  className?: string;
  color?: "white";
  display?: "web";
};

function Display({ className, color = "white", display = "web" }: DisplayProps) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"}>
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Vector" />
      </svg>
      <div className="absolute inset-[16.01%_9.85%_1.43%_12.88%]" data-name="Group">
        <div className="absolute inset-[96.62%_44.93%_0_50.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <g id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_0_19.25%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 18.5455 16" width="18.5455">
            <path d={svgPaths.p407b400} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IcRoundPlus({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[14px]"} data-name="ic:round-plus">
      <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="8.16667" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667" width="8.16667">
          <path d={svgPaths.p39caba80} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function MaterialSymbolsInfoOutline({ className }: { className?: string }) {
  return (
    <div className={className || "relative rounded-[2px] size-[11.497px]"} data-name="material-symbols:info-outline">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="9.58052" preserveAspectRatio="none" viewBox="0 0 9.58052 9.58052" width="9.58052">
          <path d={svgPaths.p1334dd00} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[74.5px] top-[33px]">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">매장 명</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center left-[74.5px] top-[54px]">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#999] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">10번 테이블</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[23.5px] top-[83px]">
      <div className="relative shrink-0 size-[24px]" data-name="fluent:people-28-filled">
        <div className="absolute inset-[17.86%_7.14%_14.29%_7.14%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.2857" preserveAspectRatio="none" viewBox="0 0 20.5714 16.2857" width="20.5714">
            <path d={svgPaths.p186f6f00} fill="#999999" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#999] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">2명 주문중</p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#121619] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        주문내역
      </p>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#121619] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        직원호출
      </p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#121619] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        카테고리1
      </p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#121619] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        카테고리2
      </p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#121619] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        카테고리3
      </p>
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#121619] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        카테고리2
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-center left-[25px] overflow-clip top-[182px] w-[321px]">
      <div className="bg-[#e5e8ed] h-[30px] relative shrink-0 w-[80px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer2 />
          </div>
        </div>
      </div>
      <div className="bg-[#e5e8ed] h-[30px] relative shrink-0 w-[80px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer3 />
          </div>
        </div>
      </div>
      <div className="bg-[#e5e8ed] h-[30px] relative shrink-0 w-[80px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer4 />
          </div>
        </div>
      </div>
      <div className="bg-[#e5e8ed] h-[30px] relative shrink-0 w-[80px]" data-name="button">
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

function Group() {
  return (
    <div className="absolute contents left-[360.23px] top-[366.17px]">
      <div className="absolute flex h-[24px] items-center justify-center left-[360.23px] top-[366.17px] w-[23.465px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] h-[24px] relative rounded-[2px] w-[23.465px]" />
        </div>
      </div>
      <MaterialSymbolsInfoOutline className="absolute left-[366.28px] rounded-[2px] size-[11.368px] top-[372.48px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[389.31px] top-[366.17px]">
      <div className="absolute flex h-[24px] items-center justify-center left-[389.31px] top-[366.17px] w-[23.465px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] h-[24px] relative rounded-[2px] w-[23.465px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[394.12px] size-[13.843px] top-[371.25px]" />
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#121619] text-[12px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        인기메뉴
      </p>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#121619] text-[12px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        추천메뉴
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[304.87px] top-[310.56px]">
      <div className="absolute flex items-center justify-center left-[304.87px] size-[24px] top-[310.56px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] relative rounded-[2px] size-[24px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[309.87px] size-[14px] top-[315.56px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[23px] top-[263px]">
      <div className="absolute bg-[#e5e8ed] h-[22px] left-[158.77px] top-[263px] w-[58.662px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer6 />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#e5e8ed] h-[22px] left-[221.34px] top-[263px] w-[58.662px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer7 />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[107.76px] text-[#999] text-[12px] top-[296.88px] w-[205.62px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 설명 텍스트메뉴 설명 텍스트메뉴...</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[274px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 명</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[322.56px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">39,000원</p>
      </div>
      <div className="absolute bg-[#e5e8ed] left-[23px] rounded-[4px] size-[70px] top-[263px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full" />
        </div>
      </div>
      <Group2 />
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#121619] text-[12px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        추천메뉴
      </p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[304.87px] top-[392.11px]">
      <div className="absolute flex items-center justify-center left-[304.87px] size-[24px] top-[392.11px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] relative rounded-[2px] size-[24px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[309.87px] size-[14px] top-[397.11px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[23px] top-[344.56px]">
      <div className="absolute bg-[#e5e8ed] h-[22px] left-[158.77px] top-[344.56px] w-[58.662px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer8 />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[107.76px] text-[#999] text-[12px] top-[378.44px] w-[205.62px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 설명 텍스트메뉴 설명 텍스트메뉴...</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[355.56px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 명</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[404.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">39,000원</p>
      </div>
      <div className="absolute bg-[#e5e8ed] left-[23px] rounded-[4px] size-[70px] top-[344.56px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full" />
        </div>
      </div>
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[304.87px] top-[461.11px]">
      <div className="absolute flex items-center justify-center left-[304.87px] size-[24px] top-[461.11px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] relative rounded-[2px] size-[24px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[309.87px] size-[14px] top-[466.11px]" />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[23px] top-[426.11px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[453.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 명</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[473.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">39,000원</p>
      </div>
      <div className="absolute bg-[#e5e8ed] left-[23px] rounded-[4px] size-[70px] top-[426.11px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full" />
        </div>
      </div>
      <Group7 />
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#121619] text-[12px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        인기메뉴
      </p>
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#121619] text-[12px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        추천메뉴
      </p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[23px] top-[554.11px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[581.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 명</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[601.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">39,000원</p>
      </div>
      <div className="absolute bg-[#e5e8ed] left-[23px] rounded-[4px] size-[70px] top-[554.11px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full" />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[46.5px] not-italic text-[12px] text-black top-[581.5px] whitespace-nowrap">품절</p>
      <div className="absolute bg-[#e5e8ed] h-[22px] left-[158.77px] top-[570.11px] w-[58.662px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer9 />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#e5e8ed] h-[22px] left-[221.34px] top-[570.11px] w-[58.662px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#121619] text-[12px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        인기메뉴
      </p>
    </div>
  );
}

function TextContainer12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#121619] text-[12px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        추천메뉴
      </p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[23px] top-[634.11px]">
      <div className="absolute bg-[#e5e8ed] left-[23px] rounded-[4px] size-[70px] top-[634.11px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full" />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[46.5px] not-italic text-[12px] text-black top-[661.5px] whitespace-nowrap">품절</p>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[107.76px] text-[#999] text-[12px] top-[668.44px] w-[205.62px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 설명 텍스트메뉴 설명 텍스트메뉴...</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[645.56px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 명</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[694.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">39,000원</p>
      </div>
      <div className="absolute bg-[#e5e8ed] h-[22px] left-[158.77px] top-[635px] w-[58.662px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer11 />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#e5e8ed] h-[22px] left-[221.34px] top-[635px] w-[58.662px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[304.87px] top-[749.11px]">
      <div className="absolute flex items-center justify-center left-[304.87px] size-[24px] top-[749.11px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] relative rounded-[2px] size-[24px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[309.87px] size-[14px] top-[754.11px]" />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[23px] top-[714.11px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[741.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 명</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[761.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">39,000원</p>
      </div>
      <div className="absolute bg-[#e5e8ed] left-[23px] rounded-[4px] size-[70px] top-[714.11px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full" />
        </div>
      </div>
      <Group11 />
    </div>
  );
}

function TextContainer13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25.21px] top-[233px]" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#121619] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        카테고리1
      </p>
    </div>
  );
}

function TextContainer14() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25.21px] top-[523px]" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#121619] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        카테고리2
      </p>
    </div>
  );
}

function TextContainer15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[16px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1개 담음
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center left-[10.5px] top-[730.11px] w-[339px]">
      <div className="bg-[#0f62fe] flex-[1_0_0] h-[48px] min-w-px relative" data-name="button">
        <div aria-hidden className="absolute border-2 border-[#0f62fe] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Shopping cart">
              <div className="absolute inset-[4.17%_4.17%_8.33%_4.17%]" data-name="Icon">
                <div className="absolute inset-[-4.76%_-4.55%]">
                  <svg className="block size-full" fill="none" height="23" preserveAspectRatio="none" viewBox="0 0 24 23" width="24">
                    <path d={svgPaths.p2572cd80} id="Icon" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <TextContainer15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function IPhone() {
  return (
    <div className="bg-white h-[800px] relative shrink-0 w-[360px]" data-name="iPhone 17 - 1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <div className="absolute bg-[#e5e8ed] h-[30px] left-[266px] top-[80px] w-[80px]" data-name="button">
          <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
              <TextContainer />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#e5e8ed] h-[30px] left-[180px] top-[80px] w-[80px]" data-name="button">
          <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
              <TextContainer1 />
            </div>
          </div>
        </div>
        <Frame5 />
        <div className="absolute bg-[#e5e8ed] left-[21px] rounded-[4px] size-[40px] top-[29px]" data-name="button">
          <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full" />
          </div>
        </div>
        <div className="absolute bg-white h-[48px] left-[25px] top-[120px] w-[323px]" data-name="Field">
          <div aria-hidden className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[12px] relative size-full">
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
        <Group />
        <Group1 />
        <Group3 />
        <Group4 />
        <Group6 />
        <Group8 />
        <Group9 />
        <Group10 />
        <TextContainer13 />
        <TextContainer14 />
        <div className="absolute h-0 left-[26.42px] top-[513.08px] w-[316.328px]">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316.328 1" width="316.328">
              <path d="M0 0.5H316.328" id="Vector 58" stroke="#E5E8ED" />
            </svg>
          </div>
        </div>
        <div className="absolute flex h-[30px] items-center justify-center left-[13.81px] top-[80px] w-[119.791px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[30px] relative w-[119.791px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgRectangle16} width="119.791" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[50px] items-center justify-center left-[14.6px] top-[24px] w-[139.396px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[50px] relative w-[139.396px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="50" src={imgRectangle19} width="139.396" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[50px] items-center justify-center left-[14.6px] top-[120px] w-[333.396px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[50px] relative w-[333.396px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="50" src={imgRectangle20} width="333.396" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[50px] items-center justify-center left-[14.6px] top-[174px] w-[333.396px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[50px] relative w-[333.396px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="50" src={imgRectangle21} width="333.396" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[30px] items-center justify-center left-[178px] top-[80px] w-[82px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[30px] relative w-[82px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgRectangle17} width="82" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[138.77px] min-w-[18px] rounded-[2px] size-[20px] top-[80px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[160px] min-w-[18px] rounded-[2px] size-[20px] top-[24px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[178.1px] min-w-[18px] rounded-[2px] size-[20px] top-[54px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[22.5px] items-center justify-center left-[158.77px] top-[634.75px] w-[121.234px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[22.5px] relative w-[121.234px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="22.5" src={imgRectangle25} width="121.234" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] h-[20px] left-[283.87px] min-w-[18px] rounded-[2px] top-[636px] w-[26px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[302px] size-[30px] top-[389.17px]">
          <div className="-scale-y-100 flex-none">
            <div className="relative size-[30px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgRectangle23} width="30" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[276.1px] min-w-[18px] rounded-[2px] size-[20px] top-[394.11px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">8</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[30px] items-center justify-center left-[266px] top-[80px] w-[82px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[30px] relative w-[82px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgRectangle17} width="82" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[266.1px] min-w-[18px] rounded-[2px] size-[20px] top-[54px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">4</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[318.87px] min-w-[18px] rounded-[2px] size-[20px] top-[129px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[318.87px] min-w-[18px] rounded-[2px] size-[20px] top-[182px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">6</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[318.87px] min-w-[18px] rounded-[2px] size-[20px] top-[263px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">7</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[86.556px] items-center justify-center left-[15.6px] top-[254px] w-[333.396px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[86.556px] relative w-[333.396px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="86.556" src={imgRectangle22} width="333.396" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[320.96px] min-w-[18px] rounded-[2px] size-[20px] top-[556.64px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[80.003px] items-center justify-center left-[15.6px] top-[548.92px] w-[333.396px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[80.003px] relative w-[333.396px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="80.003" src={imgRectangle24} width="333.396" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] h-[20px] left-[324px] min-w-[18px] rounded-[2px] top-[702px] w-[25px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">11</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[59.78px] items-center justify-center left-[5.56px] top-[724.33px] w-[349.253px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[59.78px] relative w-[349.253px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="59.78" src={imgRectangle26} width="349.253" />
            </div>
          </div>
        </div>
        <Frame4 />
      </div>
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Display className="overflow-clip relative shrink-0 size-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[399px]">주문오더 장바구니</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[10px] relative shrink-0 w-full" data-name="타이틀">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-[432px]">장바구니 버튼 활성화</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-0 relative shrink-0 w-[424.483px]" data-name="설명">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 424.483 1" width="424.483">
          <g id="ì¤ëª">
            <line id="Line 1" stroke="white" x2="424.483" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-center flex flex-wrap gap-y-[12px] items-center relative shrink-0 w-full" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[16px] text-white">메뉴 리스트</p>
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
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">접속 매장, 테이블 정보 표기</p>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">사용자가 현재 이용 중인 매장과 테이블 정보를 식별할 수 있도록 상단에 고정 노출합니다.</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component7 />
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component15 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">실시간 주문 인원 현황</p>
        </div>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">해당 QR 테이블의 실시간 주문 인원 현황을 조회한다.</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component13 />
    </div>
  );
}

function Component21() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">직원호출 및 품목 요청</p>
        </div>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">직원호출 버튼 클릭 시 직원호출 및 요청 품목 선택 창을 노출한다. 이때 요청 항목 선택 없이 단순 직원호출 요청도 가능하여야 한다.</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component19 />
    </div>
  );
}

function Component27() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">주문내역 조회</p>
        </div>
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">주문내역 버튼 클릭 시 주문 완료된 메뉴 리스트 창을 노출한다. 각 항목별 메뉴명, 선택 옵션, 수량 및 금액 정보가 명시 됨.</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component25 />
    </div>
  );
}

function Component33() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">검색어 입력 및 조회</p>
        </div>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">검색어 입력 후 조회 시, 입력한 메뉴명이 포함된 메뉴 리스트를 필터링하여 노출한다. 검색어와 일치하는 메뉴가 없는 경우 예외 처리 화면을 출력하여야 한다.</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component31 />
    </div>
  );
}

function Component39() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">카테고리 스크롤 목록</p>
        </div>
      </div>
    </div>
  );
}

function Component41() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">카테고리 바 영역은 좌우 스크롤(스와이프)을 지원한다. 특정 카테고리 탭 클릭 시, 하단 메뉴 리스트 영역이 해당 카테고리 위치로 자동 스크롤되어야 한다.</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component37 />
    </div>
  );
}

function Component44() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Component43() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component44 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">메뉴 기본 정보 표기</p>
        </div>
      </div>
    </div>
  );
}

function Component46() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">각 메뉴 항목별로 메뉴명, 판매 가격, 상세 설명 정보를 명시한다. 가격 표기 시 천 단위 콤마(,)를 적용하고, 설명이 길 경우 줄바꿈 또는 말줄임 처리 규정을 따른다.</p>
    </div>
  );
}

function Component45() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component46 />
        </div>
      </div>
    </div>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component43 />
      <Component45 />
    </div>
  );
}

function Component50() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function Component49() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component50 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">메뉴 추가 버튼</p>
        </div>
      </div>
    </div>
  );
}

function Component52() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">메뉴 추가 버튼 클릭 시, 해당 메뉴의 설명, 가격 확인 및 옵션, 수량을 선택할 수 있는 팝업 창을 노출한다. 사용자는 원하는 옵션과 수량을 지정하여 주문 항목에 추가할 수 있어야 한다.</p>
    </div>
  );
}

function Component51() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component52 />
        </div>
      </div>
    </div>
  );
}

function Component48() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component49 />
      <Component51 />
    </div>
  );
}

function Component47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-solid border-t inset-0 pointer-events-none" />
      <Component48 />
    </div>
  );
}

function Component56() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">9</p>
      </div>
    </div>
  );
}

function Component55() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component56 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">품절 상태</p>
        </div>
      </div>
    </div>
  );
}

function Component58() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">{`해당 메뉴가 품절 상태일 경우, 메뉴 추가 버튼을 미노출 처리하고 메뉴 이미지 영역에 '품절' 오버레이를 노출한다. 이때 해당 메뉴의 추가 팝업 진입 및 주문 동작은 제한되어야 한다.`}</p>
    </div>
  );
}

function Component57() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component58 />
        </div>
      </div>
    </div>
  );
}

function Component54() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component55 />
      <Component57 />
    </div>
  );
}

function Component53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-solid border-t inset-0 pointer-events-none" />
      <Component54 />
    </div>
  );
}

function Component62() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">10</p>
      </div>
    </div>
  );
}

function Component61() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component62 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">메뉴 뱃지</p>
        </div>
      </div>
    </div>
  );
}

function Component64() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">특정 메뉴에 지정된 상태 정보(예: 추천, 인기, 신메뉴 등)를 나타내는 메뉴 라벨을 표시한다. 해당 라벨은 메뉴 카드 및 메뉴 상세 화면의 식별하기 쉬운 위치에 노출됨</p>
    </div>
  );
}

function Component63() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component64 />
        </div>
      </div>
    </div>
  );
}

function Component60() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component61 />
      <Component63 />
    </div>
  );
}

function Component59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-solid border-t inset-0 pointer-events-none" />
      <Component60 />
    </div>
  );
}

function Component68() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">11</p>
      </div>
    </div>
  );
}

function Component67() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component68 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">하단 주문 버튼</p>
        </div>
      </div>
    </div>
  );
}

function Component70() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">최소 1개 이상의 메뉴가 선택/추가되면 하단 주문 고정 버튼(Sticky Button)이 활성화되어 노출된다. 버튼 내부 텍스트는 선택된 메뉴의 총 수량을 기준으로 실시간 업데이트되어야 한다.</p>
    </div>
  );
}

function Component69() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component70 />
        </div>
      </div>
    </div>
  );
}

function Component66() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component67 />
      <Component69 />
    </div>
  );
}

function Component65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-solid border-t inset-0 pointer-events-none" />
      <Component66 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[471px]" data-name="화면구성">
      <div aria-hidden className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
      <Component2 />
      <Component6 />
      <Component12 />
      <Component18 />
      <Component24 />
      <Component30 />
      <Component36 />
      <Component42 />
      <Component47 />
      <Component53 />
      <Component59 />
      <Component65 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="주문오더 - 장바구니 버튼 활성화">
      <div className="content-stretch flex items-start relative size-full">
        <IPhone />
        <Component1 />
      </div>
      <div aria-hidden className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}