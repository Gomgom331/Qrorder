import clsx from "clsx";
import svgPaths from "./svg-bkv0p24b1m";
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
type Form5FieldsButtonDescriptionTextFieldProps = {
  additionalClassNames?: string;
};

function Form5FieldsButtonDescriptionTextField({ children, additionalClassNames = "" }: React.PropsWithChildren<Form5FieldsButtonDescriptionTextFieldProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f2f4f8] h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c1c7cd] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper1>{children}</Wrapper1>
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
type LabelAndFieldTextProps = {
  text: string;
};

function LabelAndFieldText({ text }: LabelAndFieldTextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <Wrapper>
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#697077] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {"0000-00-00"}
        </p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icons / commons / calendar">
          <div className="absolute inset-[12.5%_6.25%_6.25%_6.25%]" data-name="Vector (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19.5">
              <path clipRule="evenodd" d={svgPaths.p958d00} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
            </svg>
          </div>
          <IconsCommonsCalendarVector additionalClassNames="left-[53.13%] right-[37.5%]" />
          <IconsCommonsCalendarVector additionalClassNames="left-[68.75%] right-[21.88%]" />
          <Helper additionalClassNames="absolute inset-[56.25%_37.5%_34.38%_53.13%]" />
          <Helper additionalClassNames="absolute inset-[56.25%_21.88%_34.38%_68.75%]" />
          <Helper additionalClassNames="absolute inset-[56.25%_68.75%_34.38%_21.88%]" />
          <Helper additionalClassNames="absolute inset-[56.25%_53.13%_34.38%_37.5%]" />
          <Helper additionalClassNames="absolute inset-[71.88%_68.75%_18.75%_21.88%]" />
          <Helper additionalClassNames="absolute inset-[71.88%_53.13%_18.75%_37.5%]" />
          <Helper additionalClassNames="absolute inset-[71.88%_37.5%_18.75%_53.13%]" />
          <IconsCommonsCalendarVectorStroke additionalClassNames="inset-[6.25%_71.88%_81.25%_21.88%]" />
          <IconsCommonsCalendarVectorStroke additionalClassNames="inset-[6.25%_21.88%_81.25%_71.88%]" />
          <div className="absolute inset-[28.13%_9.38%_65.63%_9.38%]" data-name="Vector (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 1.5">
              <path clipRule="evenodd" d="M0 0H19.5V1.5H0V0Z" fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
            </svg>
          </div>
        </div>
      </Wrapper>
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
      <Wrapper1>
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#697077] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</p>
      </Wrapper1>
    </div>
  );
}
type IconsCommonsCalendarVectorStrokeProps = {
  additionalClassNames?: string;
};

function IconsCommonsCalendarVectorStroke({ additionalClassNames = "" }: IconsCommonsCalendarVectorStrokeProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 3">
        <path clipRule="evenodd" d={svgPaths.p36f29c00} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
      </svg>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.25 2.25">
        <path d={svgPaths.p3edb5980} fill="var(--fill-0, #21272A)" id="Vector" />
      </svg>
    </div>
  );
}
type IconsCommonsCalendarVectorProps = {
  additionalClassNames?: string;
};

function IconsCommonsCalendarVector({ additionalClassNames = "" }: IconsCommonsCalendarVectorProps) {
  return <Helper additionalClassNames={clsx("absolute bottom-1/2 top-[40.63%]", additionalClassNames)} />;
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[58px] items-center justify-center px-[20px] py-[40px] relative size-full" data-name="쿠폰 관리 신규 모달">
      <div aria-hidden="true" className="absolute border border-[#f2f4f8] border-solid inset-0 pointer-events-none shadow-[1px_2px_6px_0px_rgba(0,0,0,0.2)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[368px]" data-name="Form / 5 fields + button + description">
        <Form5FieldsButtonDescriptionTextField additionalClassNames="w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label and Field">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              쿠폰 코드*
            </p>
            <Field additionalClassNames="bg-[rgba(221,221,221,0.87)]" />
          </div>
        </Form5FieldsButtonDescriptionTextField>
        <Form5FieldsButtonDescriptionTextField additionalClassNames="w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label and Field">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              쿠폰명*
            </p>
            <Field additionalClassNames="bg-[#f2f4f8]" />
          </div>
        </Form5FieldsButtonDescriptionTextField>
        <LabelAndFieldText text="쿠폰 적용 일자*" />
        <LabelAndFieldText text="쿠폰 종료 일자*" />
        <Form5FieldsButtonDescriptionTextField additionalClassNames="w-[368px]">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label and Field">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#21272a] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              사용여부*
            </p>
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
        </Form5FieldsButtonDescriptionTextField>
      </div>
      <div className="content-stretch flex gap-[6px] h-[44.171px] items-center justify-center relative shrink-0 w-full">
        <Button additionalClassNames="bg-[#e5e8ed]">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <TextContainerText text="확인" />
          </div>
        </Button>
        <Button>
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
            <TextContainerText text="닫기" />
          </div>
        </Button>
      </div>
      <div className="absolute flex h-[37.893px] items-center justify-center left-[389.24px] top-[21.97px] w-[38.518px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="flex-none rotate-[44.53deg] skew-x-[-0.94deg]">
          <div className="overflow-clip relative size-[27.016px]" data-name="icon / commons / add">
            <div className="absolute inset-[18.75%_46.88%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.68851 16.8851">
                <path clipRule="evenodd" d={svgPaths.p30ac1400} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
            <div className="absolute inset-[46.88%_18.75%]" data-name="Vector (Stroke)">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8851 1.68851">
                <path clipRule="evenodd" d={svgPaths.p23ef7f00} fill="var(--fill-0, #21272A)" fillRule="evenodd" id="Vector (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}