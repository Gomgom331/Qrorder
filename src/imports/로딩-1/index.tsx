import svgPaths from "./svg-goi3txa2gz";

function Icon() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Icon">
          <path d={svgPaths.p3fa07780} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p2f47d00} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p3be5c200} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p1e1d0d80} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M19.25 19.25V19.26" id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p19925280} id="Vector_6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M2.75 11H2.76" id="Vector_7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M11 2.75H11.01" id="Vector_8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M11 14.6667V14.6767" id="Vector_9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M14.6667 11H15.5833" id="Vector_10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M19.25 11V11.01" id="Vector_11" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d="M11 19.25V18.3333" id="Vector_12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#ff6b2b] col-1 content-stretch flex items-center justify-center ml-0 mt-0 px-[8px] relative rounded-[4px] row-1 size-[38px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="col-1 h-[32px] ml-[48px] mt-[3px] relative row-1 w-[90.695px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[43px] not-italic text-[#ff6b2b] text-[0px] text-center top-[-0.5px] tracking-[0.0703px] whitespace-nowrap">
        <span className="font-['Pretendard:Bold',sans-serif] leading-[32px] text-[24px]">QR</span>
        <span className="font-['Pretendard:Regular',sans-serif] leading-[32px] text-[24px]">order</span>
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container1 />
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] text-center whitespace-nowrap">맛나한식당</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center whitespace-nowrap">테이블</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-[38px] items-center pt-[2px] relative shrink-0 w-[54.688px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Black',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#1d293d] text-[36px] text-center whitespace-nowrap">3번</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start px-[32px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120.688px]" data-name="Container">
      <Paragraph />
      <ContainerMargin />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] whitespace-nowrap">메뉴를 불러오는 중</p>
    </div>
  );
}

function CiLoading() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ci:loading">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="ci:loading">
          <path d={svgPaths.pa2dfa00} id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <CiLoading />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[320px] relative shrink-0 w-[320px]" data-name="Container">
      <Group />
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#ff6b2b] left-[317.2px] opacity-6 rounded-[33554400px] size-[288px] top-[-115.2px]" data-name="Container" />;
}

function Container7() {
  return <div className="absolute bg-[#ff6b2b] left-[-89.6px] opacity-4 rounded-[33554400px] size-[224px] top-[739.6px]" data-name="Container" />;
}

function LoadingScreen() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[840px] items-center justify-center left-0 min-h-[840px] overflow-clip px-[24px] top-0 w-[402px]" data-name="LoadingScreen">
      <Container />
      <Container6 />
      <Container7 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="로딩">
      <LoadingScreen />
    </div>
  );
}