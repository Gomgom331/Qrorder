function Icon() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g id="Icon">
          <path d="M2.08333 5H7.91667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04167" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[24px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[20px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g id="Icon">
          <path d="M2.08333 5H7.91667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04167" />
          <path d="M5 2.08333V7.91667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04167" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[24px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex gap-[2px] items-center px-[4px] relative rounded-[4px] shrink-0" data-name="Container">
      <Button />
      <Text />
      <Button1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[48px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-right whitespace-nowrap">+1,000원</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="Container">
      <Container1 />
      <Text1 />
    </div>
  );
}