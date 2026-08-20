import svgPaths from "./svg-ch1t6p4frj";
import imgRectangle53 from "./97217c59240dce23c0a28043fed6874ff05998d8.png";
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

function MdiClock({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[12px]"} data-name="mdi:clock">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <path d={svgPaths.p30654300} fill="#0F62FE" id="Vector" />
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

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center left-[74.5px] top-[33px]">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">매장 명</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center left-[74.5px] top-[54px]">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#999] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">10번 테이블</p>
      </div>
    </div>
  );
}

function Frame4() {
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

function Frame7() {
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

function Group3() {
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

function Group4() {
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

function Group5() {
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

function Group6() {
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
      <Group4 />
      <Group5 />
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

function Group8() {
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

function Group9() {
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

function Group7() {
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
      <Group8 />
      <Group9 />
    </div>
  );
}

function Group11() {
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

function Group10() {
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
      <Group11 />
    </div>
  );
}

function Group13() {
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

function Group12() {
  return (
    <div className="absolute contents left-[23px] top-[554.11px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[581.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">메뉴 명</p>
      </div>
      <div className="absolute bg-[#e5e8ed] left-[23px] rounded-[4px] size-[70px] top-[554.11px]" data-name="button">
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

function Group14() {
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
      <Group15 />
    </div>
  );
}

function Group17() {
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

function Group16() {
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
      <Group17 />
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

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Top">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#21272a] text-[42px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        회원가입
      </p>
    </div>
  );
}

function LabelAndField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label and Field">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        아이디
      </p>
      <div className="bg-[#f2f4f8] h-[48px] relative shrink-0 w-full" data-name="Field">
        <div aria-hidden className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#697077] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              ID를 입력하세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelAndField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label and Field">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        이메일
      </p>
      <div className="bg-[#f2f4f8] h-[48px] relative shrink-0 w-full" data-name="Field">
        <div aria-hidden className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#697077] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              이메일을 입력하세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelAndField2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label and Field">
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        비밀번호
      </p>
      <div className="bg-[#f2f4f8] h-[48px] relative shrink-0 w-full" data-name="Field">
        <div aria-hidden className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#697077] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              비밀번호를 입력하세요
            </p>
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / jam-icons / outline & logos / eye">
              <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="12.0001" preserveAspectRatio="none" viewBox="0 0 20 12.0001" width="20">
                  <path d={svgPaths.p2e9a45f0} fill="#697077" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelAndField3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label and Field">
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        비밀번호 확인
      </p>
      <div className="bg-[#f2f4f8] h-[48px] relative shrink-0 w-full" data-name="Field">
        <div aria-hidden className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-px relative text-[#697077] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              비밀번호를 다시 입력하세요
            </p>
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / jam-icons / outline & logos / eye">
              <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="12.0001" preserveAspectRatio="none" viewBox="0 0 20 12.0001" width="20">
                  <path d={svgPaths.p2e9a45f0} fill="#697077" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[16px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        이전
      </p>
    </div>
  );
}

function TextContainer12() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[16px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        가입하기
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[#999] flex-[1_0_0] h-[48px] min-w-px relative" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer11 />
          </div>
        </div>
      </div>
      <div className="bg-[#0f62fe] flex-[1_0_0] h-[48px] min-w-px relative" data-name="button">
        <div aria-hidden className="absolute border-2 border-[#0f62fe] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Form2FieldsCheckboxButton() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pt-[24px] relative shrink-0 w-full" data-name="Form / 2 fields + checkbox + button">
      <div className="relative shrink-0 w-full" data-name="Text Field">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
          <LabelAndField />
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Text Field">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
          <LabelAndField1 />
        </div>
      </div>
      <LabelAndField2 />
      <LabelAndField3 />
      <Frame5 />
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-center justify-center left-[379px] p-[80px] top-[159.5px] w-[680px]" data-name="1-1 안내자 뷰">
      <div aria-hidden className="absolute border border-[#dde1e6] border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 w-full" data-name="Section Text">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center relative size-full">
            <Top />
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[18px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              서비스 이용을 위한 계정을 생성합니다.
            </p>
          </div>
        </div>
      </div>
      <Form2FieldsCheckboxButton />
    </div>
  );
}

function TextContainer13() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[14px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        확인
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[697.99px] top-[563.41px]">
      <div className="bg-[#e5e8ed] h-[31px] relative shrink-0 w-[71px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[602px] top-[459.76px]">
      <div className="absolute bg-white border border-[#f2f4f8] border-solid h-[149.486px] left-[603px] shadow-[1px_2px_6px_1px_rgba(0,0,0,0.2)] top-[460.76px] w-[260.976px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[733.49px] not-italic text-[#333] text-[16px] text-center top-[511.5px] w-[175.012px] whitespace-pre-wrap">
        {`회원가입이 정상적으로 `}
        <br aria-hidden />
        완료되었습니다.
      </p>
      <Frame1 />
      <IconCommonsAdd className="absolute flex items-center justify-center left-[831.64px] size-[26.593px] top-[464.41px]" />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[17.2px] top-[311.64px]">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[180px] text-[#222] text-[14px] text-center top-[327.64px] w-[325.6px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0">{`동일한 테이블에서 선주문이 완료되어 취소되었습니다. `}</p>
        <p className="leading-[normal]">주문 내역을 확인해 주세요.</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[180px] text-[#0f62fe] text-[14px] text-center top-[377.44px] w-[325.6px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">10:52 접수 완료</p>
      </div>
      <MdiClock className="absolute left-[118.88px] size-[12px] top-[371.5px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-1px] top-[-1px]">
      <div className="absolute bg-white border border-[#f2f4f8] border-solid h-[800px] left-0 rounded-tl-[4px] rounded-tr-[4px] shadow-[1px_2px_6px_1px_rgba(0,0,0,0.2)] top-0 w-[360px]" />
      <Group18 />
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[0] left-[180px] not-italic text-[#333] text-[18px] text-center top-[255.14px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">{`이미 같은 테이블에서 `}</p>
        <p className="leading-[normal] whitespace-pre">주문이 접수되었습니다</p>
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute border border-[#999] border-solid h-[800px] left-[-0.24px] overflow-clip top-0 w-[360px]" data-name="Desktop - 1">
      <Component11 />
      <div className="absolute bg-[rgba(42,42,42,0.54)] h-[1024px] left-[-1px] top-[-1px] w-[1440px]" />
      <Group1 />
      <Group2 />
      <div className="absolute border-2 border-[#0f62fe] border-dashed h-[30.203px] left-[106.5px] top-[360.3px] w-[132.85px]" />
    </div>
  );
}

function Frame6() {
  return <div className="absolute h-[48px] left-[10.38px] top-[730.11px] w-[339px]" />;
}

function TextContainer14() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#0f62fe] text-[16px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        메인화면으로 이동
      </p>
    </div>
  );
}

function TextContainer15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[16px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        주문내역 확인하기
      </p>
    </div>
  );
}

function IPhone() {
  return (
    <div className="bg-white flex-[1_0_0] h-[800px] min-w-px overflow-clip relative" data-name="iPhone 17 - 1">
      <Frame2 />
      <Frame3 />
      <Frame4 />
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
      <Frame7 />
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
      <Group3 />
      <Group6 />
      <Group7 />
      <Group10 />
      <Group12 />
      <Group14 />
      <Group16 />
      <TextContainer9 />
      <TextContainer10 />
      <Desktop />
      <Frame6 />
      <div className="absolute h-[48px] left-[10.38px] top-[412.94px] w-[339px]" data-name="button">
        <div aria-hidden className="absolute border-2 border-[#0f62fe] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer14 />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] h-[48px] left-[10.38px] top-[467.81px] w-[339px]" data-name="button">
        <div aria-hidden className="absolute border-2 border-[#0f62fe] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainer15 />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[53.387px] items-center justify-center left-[7.03px] top-[410.11px] w-[345.033px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[53.387px] relative w-[345.033px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="53.387" src={imgRectangle53} width="345.033" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[53.387px] items-center justify-center left-[7.03px] top-[465.11px] w-[345.033px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[53.387px] relative w-[345.033px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="53.387" src={imgRectangle53} width="345.033" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] left-[301.64px] min-w-[18px] rounded-[2px] size-[20px] top-[383.64px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
              <p className="leading-[normal]">2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] left-[80.88px] min-w-[18px] rounded-[2px] size-[20px] top-[366.17px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
              <p className="leading-[normal]">1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[15.471px] left-[322.28px] top-[396.07px] w-[14.366px]">
        <div className="absolute inset-[-35.7%_-5.22%_0_-5.22%]">
          <svg className="block size-full" fill="none" height="20.9942" preserveAspectRatio="none" viewBox="0 0 15.8663 20.9942" width="15.8663">
            <path d={svgPaths.p3f897100} fill="#0F62FE" id="Vector 63" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] left-[301.64px] min-w-[18px] rounded-[2px] size-[20px] top-[522.05px]" data-name="화면번호">
        <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
              <p className="leading-[normal]">3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[16.153px] left-[322.28px] top-[518.33px] w-[14.366px]">
        <div className="absolute inset-[0_-5.22%_-34.19%_-5.22%]">
          <svg className="block size-full" fill="none" height="21.6757" preserveAspectRatio="none" viewBox="0 0 15.8663 21.6757" width="15.8663">
            <path d={svgPaths.p30db7780} fill="#0F62FE" id="Vector 64" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Display className="overflow-clip relative shrink-0 size-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[399px]">주문오더 장바구니 - 주문처리(실패)</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[10px] relative shrink-0 w-full" data-name="타이틀">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-[432px]">주문 접수 실패 상태</p>
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[16px] text-white">동일 테이블에서 가장 먼저 처리된 주문의 접수 시각을 표기하여 중복 주문 방지 사유에 대한 명확한 기준을 제공</p>
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

function Component10() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component10 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">주문 접수 완료 시간</p>
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">
        동일 테이블에서 최초로 주문이 정상 접수 완료된 시간을 표기함
        <br aria-hidden />
        (HH:mm)
      </p>
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component13 />
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component9 />
      <Component12 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component8 />
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

function Component18() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component18 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">메인페이지 이동 버튼</p>
        </div>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">메인화면으로 이동 버튼 클릭 시 메인페이지(메뉴 리스트)로 이동한다.</p>
    </div>
  );
}

function Component19() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component20 />
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component17 />
      <Component19 />
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component16 />
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component15 />
    </div>
  );
}

function Component25() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component25 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">주문내역 확인버튼</p>
        </div>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">메인페이지로 이동하되, 주문 내역 슬라이드/바텀시트가 활성화(Open)된 상태로 노출된다.</p>
    </div>
  );
}

function Component26() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component27 />
        </div>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <Component24 />
      <Component26 />
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component23 />
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="화면구성-컨텐츠">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component22 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[471px]" data-name="화면구성">
      <div aria-hidden className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
      <Component2 />
      <Component6 />
      <Component14 />
      <Component21 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="주문오더 - 주문처리(실패)">
      <div className="content-stretch flex items-start relative size-full">
        <IPhone />
        <Component1 />
      </div>
      <div aria-hidden className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}