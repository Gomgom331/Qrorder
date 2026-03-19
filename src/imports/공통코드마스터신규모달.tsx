import clsx from "clsx";
import svgPaths from "./svg-g21ots36k2";

function TextField({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">{children}</div>
    </div>
  );
}
type ButtonProps = {
  additionalClassNames?: string;
};

function Button({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className={clsx("h-[31px] relative shrink-0 w-[71px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e5e8ed] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">{children}</div>
    </div>
  );
}
type FieldProps = {
  additionalClassNames?: string;
};

function Field({ additionalClassNames = "" }: FieldProps) {
  return (
    <div className={clsx("h-[48px] relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper>
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#697077] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
      </Wrapper>
    </div>
  );
}
type TextContainerTextProps = {
  text: string;
};

function TextContainerText({ text }: TextContainerTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <p className="font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#121619] text-[14px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="공통코드 마스터 신규 모달">
      <div className="absolute bg-white border border-[#f2f4f8] border-solid h-[362px] left-0 shadow-[1px_2px_6px_1px_rgba(0,0,0,0.2)] top-0 w-[457px]" />
      <div className="absolute content-stretch flex gap-[6px] h-[23.309px] items-center justify-center left-[116px] top-[318.2px] w-[214.365px]">
        <Button additionalClassNames="bg-[#e5e8ed]">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainerText text="저장" />
          </div>
        </Button>
        <Button>
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
            <TextContainerText text="닫기" />
          </div>
        </Button>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[16px] h-[137.201px] items-center left-[39px] top-[22.69px] w-[368px]" data-name="Form / 5 fields + button + description">
        <TextField>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label and Field">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              공통코드*
            </p>
            <Field additionalClassNames="bg-[#ddd]" />
          </div>
        </TextField>
        <TextField>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label and Field">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              공통코드명*
            </p>
            <Field additionalClassNames="bg-[#f2f4f8]" />
          </div>
        </TextField>
      </div>
      <div className="absolute flex h-[38.749px] items-center justify-center left-[407px] top-[5.11px] w-[38.518px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-[45.17deg] skew-x-[0.34deg]">
          <div className="overflow-clip relative size-[27.318px]" data-name="icon / commons / add">
            <div className="absolute inset-[18.75%_46.88%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 15">
                <path clipRule="evenodd" d={svgPaths.p3c5fb040} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
            <div className="absolute inset-[46.88%_18.75%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.5">
                <path clipRule="evenodd" d={svgPaths.p6bc53f0} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[40px] top-[213.72px] w-[368px]" data-name="Text Field">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label and Field">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              사용여부*
            </p>
            <div className="bg-[#f2f4f8] h-[48px] relative shrink-0 w-full" data-name="Field">
              <div aria-hidden="true" className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
              <Wrapper>
                <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#697077] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Y
                </p>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / jam-icons / outline & logos / chevron-down">
                  <div className="absolute inset-[33.58%_21.92%_34.47%_22.51%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3386 7.66907">
                      <path d={svgPaths.p1d45b280} fill="var(--fill-0, #697077)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}