function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center whitespace-nowrap">테이블</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col h-[38px] items-center pt-[2px] relative shrink-0 w-[54.688px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Black',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#1d293d] text-[36px] text-center whitespace-nowrap">3번</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start px-[32px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

export default function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative size-full" data-name="Container:margin">
      <Container />
    </div>
  );
}