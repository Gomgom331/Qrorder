import svgPaths from "./svg-scnnd9ptr7";
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
    <div className="absolute contents left-[275.13px] top-[310.56px]">
      <div className="absolute flex items-center justify-center left-[275.13px] size-[24px] top-[310.56px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] relative rounded-[2px] size-[24px]" />
        </div>
      </div>
      <MaterialSymbolsInfoOutline className="absolute left-[281.38px] rounded-[2px] size-[11.497px] top-[316.81px]" />
    </div>
  );
}

function Group3() {
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

function Group4() {
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
      <Group3 />
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

function Group6() {
  return (
    <div className="absolute contents left-[275.13px] top-[392.11px]">
      <div className="absolute flex items-center justify-center left-[275.13px] size-[24px] top-[392.11px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] relative rounded-[2px] size-[24px]" />
        </div>
      </div>
      <MaterialSymbolsInfoOutline className="absolute left-[281.38px] rounded-[2px] size-[11.497px] top-[398.36px]" />
    </div>
  );
}

function Group7() {
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

function Group5() {
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
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group9() {
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

function Group8() {
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
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[304.87px] top-[589.11px]">
      <div className="absolute flex items-center justify-center left-[304.87px] size-[24px] top-[589.11px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] relative rounded-[2px] size-[24px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[309.87px] size-[14px] top-[594.11px]" />
    </div>
  );
}

function Group10() {
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
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[304.87px] top-[669.11px]">
      <div className="absolute flex items-center justify-center left-[304.87px] size-[24px] top-[669.11px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] relative rounded-[2px] size-[24px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[309.87px] size-[14px] top-[674.11px]" />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[23px] top-[634.11px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[661.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 명</p>
      </div>
      <div className="absolute bg-[#e5e8ed] left-[23px] rounded-[4px] size-[70px] top-[634.11px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full" />
        </div>
      </div>
      <Group13 />
    </div>
  );
}

function Group15() {
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

function Group14() {
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
      <Group15 />
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25.21px] top-[233px]" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#121619] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        카테고리1
      </p>
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25.21px] top-[523px]" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#121619] text-[14px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        카테고리2
      </p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[324.31px] top-[619.92px]">
      <div className="absolute flex h-[21.391px] items-center justify-center left-[324.31px] top-[619.92px] w-[21.799px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] h-[21.391px] relative rounded-[2px] w-[21.799px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[328.91px] size-[12.597px] top-[624.31px]" />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[324.31px] top-[682.26px]">
      <div className="absolute flex h-[21.391px] items-center justify-center left-[324.31px] top-[682.26px] w-[21.799px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] h-[21.391px] relative rounded-[2px] w-[21.799px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[328.91px] size-[12.597px] top-[686.66px]" />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[273.49px] top-[620.05px]">
      <div className="absolute flex h-[21.391px] items-center justify-center left-[273.49px] top-[620.05px] w-[21.799px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#d72b2b] h-[21.391px] relative rounded-[2px] w-[21.799px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[274.97px] size-[18.829px] top-[621.33px]">
        <div className="flex-none rotate-45">
          <div className="overflow-clip relative size-[13.314px]" data-name="icon / commons / add">
            <div className="absolute inset-[18.75%_46.88%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" height="8.32124" preserveAspectRatio="none" viewBox="0 0 0.832124 8.32124" width="0.832124">
                <path clipRule="evenodd" d={svgPaths.p14b4b000} fill="white" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
            <div className="absolute inset-[46.88%_18.75%]" data-name="Vector (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" height="0.832124" preserveAspectRatio="none" viewBox="0 0 8.32124 0.832124" width="8.32124">
                <path clipRule="evenodd" d={svgPaths.p1768a180} fill="white" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[273.19px] top-[619.92px]">
      <div className="absolute flex h-[21.391px] items-center justify-center left-[273.19px] top-[619.92px] w-[21.799px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] h-[21.391px] relative rounded-[2px] w-[21.799px]" />
        </div>
      </div>
      <IconsCommonsMinus className="absolute h-[14.261px] left-[277.73px] overflow-clip top-[623.48px] w-[12.716px]" />
      <Group17 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[324.31px] top-[652.51px]">
      <div className="absolute flex h-[21.391px] items-center justify-center left-[324.31px] top-[652.51px] w-[21.799px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] h-[21.391px] relative rounded-[2px] w-[21.799px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[328.91px] size-[12.597px] top-[656.9px]" />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[273.19px] top-[652.51px]">
      <div className="absolute flex h-[21.391px] items-center justify-center left-[273.19px] top-[652.51px] w-[21.799px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] h-[21.391px] relative rounded-[2px] w-[21.799px]" />
        </div>
      </div>
      <IconsCommonsMinus className="absolute h-[14.261px] left-[277.73px] overflow-clip top-[656.07px] w-[12.716px]" />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[13.23px] top-[652.51px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[305.47px] text-[#222] text-[14px] top-[661.84px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">2</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[13.23px] text-[#222] text-[14px] top-[663.2px] w-[95.649px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">컵</p>
      </div>
      <Group20 />
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[273.19px] top-[682.26px]">
      <div className="absolute flex h-[21.391px] items-center justify-center left-[273.19px] top-[682.26px] w-[21.799px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] h-[21.391px] relative rounded-[2px] w-[21.799px]" />
        </div>
      </div>
      <IconsCommonsMinus className="absolute h-[14.261px] left-[277.73px] overflow-clip top-[685.83px] w-[12.716px]" />
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[16px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        호출하기
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center left-[10.26px] top-[730.11px] w-[339px]">
      <div className="bg-[#0f62fe] flex-[1_0_0] h-[48px] min-w-px relative" data-name="button">
        <div aria-hidden className="absolute border-2 border-[#0f62fe] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[9.71px] top-[422.92px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[9.71px] text-[#222] text-[16px] top-[432.42px] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">직원호출</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p26bb8c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">물</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p26bb8c00} fill="#121619" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">앞접시</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p26bb8c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">컵</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p26bb8c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">냅킨</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p26bb8c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">물티슈</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer4 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p26bb8c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">수저</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p26bb8c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">젓가락</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer6 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p26bb8c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">반찬추가</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer7 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.84%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p26bb8c00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">소스추가</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer8 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="bg-[rgba(103,80,164,0.08)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 15 16.6667" width="15">
            <path d={svgPaths.p24b4e5b2} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">직원호출</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-[#0f62fe] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer9 />
    </div>
  );
}

function IPhone() {
  return (
    <div className="bg-white h-[800px] overflow-clip relative shrink-0 w-[360px]" data-name="iPhone 17 - 1">
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
      <Group4 />
      <Group5 />
      <Group8 />
      <Group10 />
      <Group12 />
      <Group14 />
      <TextContainer9 />
      <TextContainer10 />
      <div className="absolute h-0 left-[26.42px] top-[513.08px] w-[316.328px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316.328 1" width="316.328">
            <path d="M0 0.5H316.328" id="Vector 58" stroke="#E5E8ED" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[rgba(42,42,42,0.54)] h-[800px] left-[0.39px] top-0 w-[360px]" />
      <div className="absolute bg-white border border-[#f2f4f8] border-solid h-[401.636px] left-[0.39px] rounded-tl-[4px] rounded-tr-[4px] shadow-[1px_2px_6px_1px_rgba(0,0,0,0.2)] top-[398.36px] w-[360px]" />
      <div className="absolute h-0 left-[12.71px] top-[608.11px] w-[336.934px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 336.934 1" width="336.934">
            <path d="M0 0.5H336.934" id="Vector 57" stroke="#E5E8ED" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[305.47px] text-[#222] text-[14px] top-[629.25px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">1</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[305.47px] text-[#222] text-[14px] top-[691.6px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">2</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[13.23px] text-[#222] text-[14px] top-[630.61px] w-[95.649px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">물</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[13.23px] text-[#222] text-[14px] top-[692.96px] w-[95.649px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">젓가락</p>
      </div>
      <Group16 />
      <Group22 />
      <Group19 />
      <Group24 />
      <Group23 />
      <Frame4 />
      <Group18 />
      <div className="absolute bg-[#e5e8ed] h-[4.274px] left-[123.13px] rounded-[10px] top-[406.84px] w-[114.539px]" />
      <div className="absolute h-[48px] left-[10px] top-[453.03px]" data-name="Button - elevated">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content />
          </div>
        </div>
      </div>
      <div className="absolute h-[48px] left-[88px] top-[453.03px]" data-name="Button - elevated">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content1 />
          </div>
        </div>
      </div>
      <div className="absolute h-[48px] left-[192px] top-[453.03px]" data-name="Button - elevated">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content2 />
          </div>
        </div>
      </div>
      <div className="absolute h-[48px] left-[270px] top-[453.03px]" data-name="Button - elevated">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content3 />
          </div>
        </div>
      </div>
      <div className="absolute h-[48px] left-[10px] top-[501.03px]" data-name="Button - elevated">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content4 />
          </div>
        </div>
      </div>
      <div className="absolute h-[48px] left-[114px] top-[501.03px]" data-name="Button - elevated">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content5 />
          </div>
        </div>
      </div>
      <div className="absolute h-[48px] left-[205px] top-[501.03px]" data-name="Button - elevated">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content6 />
          </div>
        </div>
      </div>
      <div className="absolute h-[48px] left-[10px] top-[549.03px]" data-name="Button - elevated">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content7 />
          </div>
        </div>
      </div>
      <div className="absolute h-[48px] left-[127px] top-[549.03px]" data-name="Button - elevated">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content8 />
          </div>
        </div>
      </div>
      <div className="absolute cursor-pointer h-[48px] left-[244px] top-[549.03px]" data-name="Button - elevated">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Display className="overflow-clip relative shrink-0 size-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[399px]">주문오더 직원호출</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[10px] relative shrink-0 w-full" data-name="타이틀">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-[432px]">메뉴추가 및 직원호출</p>
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[16px] text-white">text - 설명</p>
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">{` `}</p>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">{` `}</p>
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

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[471px]" data-name="화면구성">
      <div aria-hidden className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
      <Component2 />
      <Component6 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="주문오더 - 메뉴추가+직원호출">
      <div className="content-stretch flex items-start relative size-full">
        <IPhone />
        <Component1 />
      </div>
      <div aria-hidden className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}