import svgPaths from "./svg-fomtjzogmo";
import imgRectangle25 from "./d54ab77427662727145a8e3a390d456f112e1a81.png";
import imgRectangle51 from "./d57b06c3c6b504c614e9d5d21a45971fa9b3ba56.png";
import imgRectangle56 from "./33c862a05aa287fc5100e9b9bf2310218ed26b39.png";
import imgRectangle52 from "./a725eb9bb313fdc64eaff1333d89db0313301ac0.png";
import imgRectangle53 from "./380efdf2c4d0c04c713c0bae2682028095452430.png";
import imgRectangle54 from "./d0a6b5b2bfd776ee5a9bb5c903b98a4fbe5b7372.png";
import imgRectangle55 from "./d6a13d8c28435df4a0280583c856d8fee9c7bbff.png";
import imgRectangle57 from "./f34b1f9cd15e3745c71303c255cfb6089f876463.png";
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
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[106.76px] text-[#222] text-[14px] top-[681.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">39,000원</p>
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
    <div className="absolute contents left-[324.19px] top-[698.11px]">
      <div className="absolute flex h-[21.391px] items-center justify-center left-[324.19px] top-[698.11px] w-[21.799px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] h-[21.391px] relative rounded-[2px] w-[21.799px]" />
        </div>
      </div>
      <IcRoundPlus className="absolute left-[328.79px] size-[12.597px] top-[702.51px]" />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[273.07px] top-[698.11px]">
      <div className="absolute flex h-[21.391px] items-center justify-center left-[273.07px] top-[698.11px] w-[21.799px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e8ed] h-[21.391px] relative rounded-[2px] w-[21.799px]" />
        </div>
      </div>
      <IconsCommonsMinus className="absolute h-[14.261px] left-[277.61px] overflow-clip top-[701.68px] w-[12.716px]" />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[9.31px] top-[563.45px]">
      <div className="absolute bg-white border border-[#e5e8ed] border-solid h-[40px] left-[9.31px] rounded-[4px] top-[563.45px] w-[340.432px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[45px] text-[#222] text-[12px] top-[582.56px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">옵션 명</p>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[9.31px] top-[563.45px]">
      <Group20 />
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[339.59px] text-[#999] text-[12px] text-right top-[583.45px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">+0원</p>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[9.31px] top-[563.45px]">
      <Group19 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[9.31px] top-[605.48px]">
      <div className="absolute bg-white border border-[#e5e8ed] border-solid h-[40px] left-[9.31px] rounded-[4px] top-[605.48px] w-[340.432px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[45px] text-[#222] text-[12px] top-[624.59px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">옵션 명</p>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[9.31px] top-[605.48px]">
      <Group23 />
      <div className="absolute left-[18.42px] overflow-clip size-[16px] top-[616.45px]" data-name="radio_button_unchecked">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <path d={svgPaths.p3c2cf080} fill="#AEAEB2" id="icon" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[339.59px] text-[#999] text-[12px] text-right top-[625.45px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">+500원</p>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[9.31px] top-[605.48px]">
      <Group22 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[9.31px] top-[647.5px]">
      <div className="absolute bg-white border border-[#e5e8ed] border-solid h-[40px] left-[9.31px] rounded-[4px] top-[647.5px] w-[340.432px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[45px] text-[#222] text-[12px] top-[666.62px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">옵션 명</p>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[9.31px] top-[647.5px]">
      <Group26 />
      <div className="absolute left-[18.42px] overflow-clip size-[16px] top-[658.48px]" data-name="radio_button_unchecked">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <path d={svgPaths.p3c2cf080} fill="#AEAEB2" id="icon" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[339.59px] text-[#999] text-[12px] text-right top-[667.45px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">+1,000원</p>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[9.31px] top-[647.5px]">
      <Group25 />
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-none">장바구니에 담기</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f62fe] flex-[1_0_0] h-[48px] min-w-px relative" data-name="button">
      <div aria-hidden className="absolute border-2 border-[#0f62fe] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[16px] relative size-full">
          <TextContainer11 />
          <div className="[word-break:break-word] flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
            <p className="leading-[0px]">39,000원</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[10.74px] top-[730.11px] w-[339px]">
      <Button />
    </div>
  );
}

function TextContainer12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#121619] text-[12px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        인기메뉴
      </p>
    </div>
  );
}

function TextContainer13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#121619] text-[12px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        추천메뉴
      </p>
    </div>
  );
}

function TextContainer14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#121619] text-[12px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        필수
      </p>
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
        <div className="absolute bg-[rgba(42,42,42,0.54)] h-[800px] left-0 top-0 w-[360px]" />
        <div className="absolute bg-white border border-[#f2f4f8] border-solid h-[651px] left-0 rounded-tl-[4px] rounded-tr-[4px] shadow-[1px_2px_6px_1px_rgba(0,0,0,0.2)] top-[149px] w-[360px]" />
        <div className="absolute flex h-[26.488px] items-center justify-center left-[221.34px] top-[395.61px] w-[129.603px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[26.488px] relative w-[129.603px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="26.488" src={imgRectangle25} width="129.603" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[51.938px] items-center justify-center left-[5.2px] top-[461.26px] w-[340.801px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[51.938px] relative w-[340.801px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="51.938" src={imgRectangle51} width="340.801" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[55.438px] items-center justify-center left-[5.2px] top-[726.17px] w-[348.851px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[55.438px] relative w-[348.851px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="55.438" src={imgRectangle56} width="348.851" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[194px] min-w-[18px] rounded-[2px] size-[20px] top-[398.11px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[26.488px] items-center justify-center left-[275.13px] top-[425.37px] w-[75.813px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[26.488px] relative w-[75.813px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="26.488" src={imgRectangle52} width="75.813" />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[26.488px] items-center justify-center left-[7.09px] top-[394.87px] w-[54.877px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[26.488px] relative w-[54.877px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="26.488" src={imgRectangle53} width="54.877" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[250px] min-w-[18px] rounded-[2px] size-[20px] top-[428px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[9px] min-w-[18px] rounded-[2px] size-[20px] top-[435.5px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">4</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[132.068px] items-center justify-center left-[5.19px] top-[560.04px] w-[348.862px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[132.068px] relative w-[348.862px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="132.068" src={imgRectangle54} width="348.862" />
            </div>
          </div>
        </div>
        <div className="absolute h-[26.392px] left-[266.96px] top-[695.11px] w-[87.086px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="26.392" src={imgRectangle55} width="87.086" />
        </div>
        <div className="absolute bg-[#0f62fe] left-[87.88px] min-w-[18px] rounded-[2px] size-[20px] top-[534.11px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">6</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[77.88px] min-w-[18px] rounded-[2px] size-[20px] top-[701.11px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">8</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[240px] min-w-[18px] rounded-[2px] size-[20px] top-[699.11px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">7</p>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[305.35px] text-[#222] text-[14px] top-[707.45px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">1</p>
        </div>
        <Group16 />
        <Group17 />
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[16.14px] text-[#222] text-[14px] top-[710.11px] w-[93.86px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">수량</p>
        </div>
        <Group18 />
        <Group21 />
        <Group24 />
        <Frame4 />
        <div className="absolute h-0 left-[9.31px] top-[527px] w-[338.689px]">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 338.689 1" width="338.689">
              <path d="M0 0.5H338.689" id="Vector 59" stroke="#E5E8ED" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[9.31px] not-italic text-[#444] text-[12px] top-[489.19px] w-[334.234px]">
          <p className="leading-[16px]">{`메뉴 설명 텍스트메뉴 설명 메뉴 설명메뉴 설명 텍스트메뉴 설명 메뉴 설명메뉴 설명 텍스트메뉴 설명 메뉴 설명메뉴 설명 텍스트메뉴 설명 메뉴 설명메뉴 설명 텍스트메뉴 설명 메뉴 설명 메뉴 설명 텍스트메뉴 설명 `}</p>
        </div>
        <div className="absolute bg-[#e5e8ed] h-[22px] left-[224px] top-[397.11px] w-[60px]" data-name="button">
          <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
              <TextContainer12 />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[67.88px] min-w-[18px] rounded-[2px] size-[20px] top-[398.9px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[26.488px] items-center justify-center left-[114px] top-[152.7px] w-[132px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[26.488px] relative w-[132px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="26.488" src={imgRectangle57} width="132" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0f62fe] left-[254px] min-w-[18px] rounded-[2px] size-[20px] top-[156.74px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#e5e8ed] h-[22px] left-[288px] top-[397.11px] w-[60px]" data-name="button">
          <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
              <TextContainer13 />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#e5e8ed] h-[22px] left-[307.74px] top-[534.45px] w-[42px]" data-name="button">
          <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
              <TextContainer14 />
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[9.31px] text-[#222] text-[16px] top-[408.61px] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">메뉴 명</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] left-[283.97px] text-[#0f62fe] text-[16px] top-[438.61px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">39,000원</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[9.31px] text-[#222] text-[12px] top-[545.45px] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">옵션 카테고리</p>
        </div>
        <div className="absolute bg-[#e5e8ed] h-[200px] left-[-0.12px] top-[183px] w-[360px]" data-name="button">
          <div aria-hidden className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full" />
          </div>
        </div>
        <div className="absolute bg-[#e5e8ed] h-[4.274px] left-[122.73px] rounded-[10px] top-[163.73px] w-[114.539px]" />
        <div className="absolute bg-[#0f62fe] left-[5px] min-w-[18px] rounded-[2px] size-[20px] top-[189.97px]" data-name="화면번호">
          <div aria-hidden className="absolute border-2 border-[#195edf] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[6px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
                <p className="leading-[normal]">5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[12.063px] left-[57.34px] top-[712.46px] w-[19.301px]">
          <div className="absolute inset-[-4.14%_0_-4.14%_-19.08%]">
            <svg className="block size-full" fill="none" height="13.0632" preserveAspectRatio="none" viewBox="0 0 22.9828 13.0632" width="22.9828">
              <path d={svgPaths.pb18e680} fill="#0F62FE" id="Vector 60" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#666] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <Display className="overflow-clip relative shrink-0 size-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[399px]">주문오더 상세옵션</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[10px] relative shrink-0 w-full" data-name="타이틀">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-[432px]">메뉴 상세 및 옵션 선택 팝업</p>
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[16px] text-white">옵션 단일선택</p>
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">{` 메뉴 명`}</p>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">해당 메뉴의 명칭을 표시한다.</p>
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">{` 메뉴 뱃지`}</p>
        </div>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">메뉴명 우측에 해당 메뉴의 상태 라벨(추천, 인기 등)을 표기한다.</p>
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">메뉴 가격</p>
        </div>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">해당 메뉴의 판매 가격을 표시한다. 해당 화면의 가격 정보는 실시간 연동 처리를 진행하지 않는다.</p>
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">메뉴 설명</p>
        </div>
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">해당 메뉴의 상세 설명 문구를 표시한다.</p>
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">메뉴 이미지</p>
        </div>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">해당 메뉴의 대표 이미지를 노출한다. (미등록 시 기본 대체 이미지 표시)</p>
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

function Component38() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">6</p>
      </div>
    </div>
  );
}

function Component37() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component38 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">메뉴 옵션 - 단일선택</p>
        </div>
      </div>
    </div>
  );
}

function Component40() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">
        메뉴에 해당되는 옵션 목록을 노출하며, 사용자 선택 시 1개의 옵션만 선택 가능(단일 선택)하여야 한다.
        <br aria-hidden />
        진입 시 지정된 기본값이 사전에 선택되어 있는 상태로 노출한다.
      </p>
    </div>
  );
}

function Component39() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component40 />
        </div>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component37 />
      <Component39 />
    </div>
  );
}

function Component43() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Component42() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component43 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">수량 선택 (증감 버튼)</p>
        </div>
      </div>
    </div>
  );
}

function Component45() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">(+, -)버튼으로 주문 수량을 증감할 수 있으며, 최소 수량은 1개로 제한되고 수량 변경 시 현재 선택된 옵션 조합 그대로 수량 및 금액이 반영된다.</p>
    </div>
  );
}

function Component44() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component45 />
        </div>
      </div>
    </div>
  );
}

function Component41() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component42 />
      <Component44 />
    </div>
  );
}

function Component48() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">8</p>
      </div>
    </div>
  );
}

function Component47() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component48 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">장바구니 담기 버튼</p>
        </div>
      </div>
    </div>
  );
}

function Component50() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">옵션 및 수량에 따라 계산된 총 금액을 실시간으로 표기하고, 버튼 클릭 시 선택한 항목을 장바구니에 추가한 후 팝업을 닫는다.</p>
    </div>
  );
}

function Component49() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component50 />
        </div>
      </div>
    </div>
  );
}

function Component46() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component47 />
      <Component49 />
    </div>
  );
}

function Component53() {
  return (
    <div className="bg-[#666] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[6px] relative rounded-[2px] shrink-0" data-name="번호">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[12px] text-center text-white">
        <p className="leading-[normal]">9</p>
      </div>
    </div>
  );
}

function Component52() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-번호">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[20px] relative size-full">
          <Component53 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#666] text-[18px]">바텀시트 핸들</p>
        </div>
      </div>
    </div>
  );
}

function Component55() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[12px] items-center min-w-px relative" data-name="설명">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#222] text-[16px]">팝업 상단 핸들 바 클릭 또는 아래로 스와이프(드래그) 시, 시트가 하단으로 내려가며 팝업이 닫힌다.</p>
    </div>
  );
}

function Component54() {
  return (
    <div className="relative shrink-0 w-full" data-name="컨텐츠-내용">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <Component55 />
        </div>
      </div>
    </div>
  );
}

function Component51() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="컨텐츠-박스">
      <div aria-hidden className="absolute border-[#999] border-b border-solid inset-0 pointer-events-none" />
      <Component52 />
      <Component54 />
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
      <Component41 />
      <Component46 />
      <Component51 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="주문오더 - 상세옵션 (단건 및 필수)">
      <div className="content-stretch flex items-start relative size-full">
        <IPhone />
        <Component1 />
      </div>
      <div aria-hidden className="absolute border border-[#999] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}