function SoldoutModal() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="SoldoutModal">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[20.625px] not-italic relative shrink-0 text-[#222] text-[15px] text-center whitespace-nowrap">주문하시겠습니까?</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start overflow-clip relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">총 결제 금액</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#ff6467] text-[11px] whitespace-nowrap">9,000원</p>
    </div>
  );
}

function TextAlign() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-end min-w-px relative" data-name="Text:align">
      <Text />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <TextAlign />
    </div>
  );
}

function SoldoutModal1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-full" data-name="SoldoutModal">
      <Container1 />
    </div>
  );
}

function SoldoutModalMargin() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full" data-name="SoldoutModal:margin">
      <SoldoutModal1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-w-px relative rounded-[6px]" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[#475569] text-[15px] text-center whitespace-nowrap">취소</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff6b2b] content-stretch flex flex-[1_0_0] h-[40px] items-center justify-center min-w-px relative rounded-[6px]" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">주문하기</p>
    </div>
  );
}

function SoldoutModal2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="SoldoutModal">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] flex flex-col items-start p-[24px] relative rounded-[12px] size-full" data-name="Container">
      <SoldoutModal />
      <SoldoutModalMargin />
      <SoldoutModal2 />
    </div>
  );
}