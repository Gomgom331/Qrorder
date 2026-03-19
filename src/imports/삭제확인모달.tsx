import clsx from "clsx";
import svgPaths from "./svg-ot3vc5pbq6";
type ButtonProps = {
  additionalClassNames?: string;
  text: string;
  additionalClassNames1?: string;
};

function Button({ children, additionalClassNames = "", text, additionalClassNames1 = "" }: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className={clsx("h-[31px] relative shrink-0 w-[71px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={clsx("content-stretch flex items-center justify-center px-[12px] relative size-full", additionalClassNames)}>
          <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0" data-name="Text Container">
            <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[14px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="삭제 확인 모달">
      <div aria-hidden="true" className="absolute border border-[#f2f4f8] border-solid inset-0 pointer-events-none shadow-[1px_2px_6px_0px_rgba(0,0,0,0.2)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center pb-[16px] pt-[24px] px-[16px] relative size-full">
          <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#333] text-[16px] text-center w-[min-content]">
            <p className="mb-0">초기화하시겠습니까?</p>
            <p>(초기 비밀번호는 SN111111 입니다.)</p>
          </div>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <Button additionalClassNames="bg-[#e5e8ed]" text="확인" additionalClassNames1="py-[16px]" />
            <Button text="닫기" additionalClassNames1="py-[8px]" />
          </div>
          <div className="absolute flex items-center justify-center left-[227.2px] size-[26.593px] top-[1.7px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
            <div className="flex-none rotate-45">
              <div className="overflow-clip relative size-[18.804px]" data-name="icon / commons / add">
                <div className="absolute inset-[18.75%_46.88%]" data-name="Vector (Stroke)">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.17528 11.7528">
                    <path clipRule="evenodd" d={svgPaths.p10589d32} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
                <div className="absolute inset-[46.88%_18.75%]" data-name="Vector (Stroke)">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7528 1.17528">
                    <path clipRule="evenodd" d={svgPaths.p9ccba80} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}