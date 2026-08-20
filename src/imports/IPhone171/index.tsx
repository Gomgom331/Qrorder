function Frame() {
  return <div className="absolute h-[16px] left-[127.69px] top-[421.5px] w-[71px]" />;
}

export default function IPhone() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 17 - 1">
      <Frame />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] left-[181.93px] text-[#222] text-[18px] text-center top-[384.38px] w-[241.516px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">주문 시간이 초과되었습니다</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[181.93px] text-[#999] text-[14px] text-center top-[422.12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0 whitespace-pre">{`장시간 활동이 없어 안전하게 연결을 종료했습니다. `}</p>
        <p className="leading-[normal] whitespace-pre">QR코드를 다시 찍어 주문을 진행해 주세요.</p>
      </div>
    </div>
  );
}