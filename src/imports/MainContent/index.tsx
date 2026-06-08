import svgPaths from "./svg-mkjgn1o1xn";

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[0.5px] whitespace-nowrap">메뉴</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4.008px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[0.5px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">메뉴 정보 관리</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4.008px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-[0.5px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[65.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[0.5px] whitespace-nowrap">메뉴 관리</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Navigation">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[4px] top-0 w-[880.492px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[36px] pr-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cad5e2] text-[14px] tracking-[-0.1504px] whitespace-nowrap">카테고리를 입력해주세요</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="flex-[1_0_0] h-[14px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
              <path d={svgPaths.p30c27980} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
          <div className="absolute inset-[-23.26%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.675 3.675">
              <path d={svgPaths.p31a7b600} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex items-center left-[12px] size-[14px] top-[11px]" data-name="Text">
      <Icon />
    </div>
  );
}

function InputField() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[880.492px]" data-name="InputField">
      <TextInput />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[18.5px] not-italic text-[#314158] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">초기화</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[36px] relative rounded-[4px] shrink-0 w-[66.305px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] py-px relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="flex-[1_0_0] h-[14px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
              <path d={svgPaths.p30c27980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
          <div className="absolute inset-[-23.26%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.675 3.675">
              <path d={svgPaths.p31a7b600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[12px] not-italic text-[14px] text-center text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">조회</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff6b2b] flex-[1_0_0] h-[36px] min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[14px] relative size-full">
          <Text7 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-start left-[888.49px] top-0 w-[148.508px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <InputField />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[70px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[-0.67px] whitespace-nowrap">카테고리 관리</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="flex-[1_0_0] h-[13px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.54px_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.66667 1.08333">
              <path d="M0.541667 0.541667H8.125" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-0.54px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.08333 8.66667">
              <path d="M0.541667 0.541667V8.125" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[10.5px] not-italic text-[12px] text-center text-white top-[0.5px] whitespace-nowrap">신규</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ff6b2b] flex-[1_0_0] h-[28px] min-w-px relative rounded-[3px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center px-[10px] relative size-full">
          <Text10 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[10.5px] not-italic text-[#314158] text-[12px] text-center top-[0.5px] whitespace-nowrap">삭제</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[28px] relative rounded-[3px] shrink-0 w-[42.742px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] py-px relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[108.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[40.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[0.667px] px-[16px] relative size-full">
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return <div className="absolute bg-white border border-[#cad5e2] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />;
}

function CheckboxField() {
  return (
    <div className="h-[15px] relative shrink-0 w-[14px]" data-name="CheckboxField">
      <Text13 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="h-full relative shrink-0" data-name="Header Cell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13px] py-[10px] relative size-full">
          <CheckboxField />
        </div>
      </div>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0 w-[319px]" data-name="Header Cell">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">카테고리명</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Header Cell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">사용 여부</p>
        </div>
      </div>
    </div>
  );
}

function HeaderCell3() {
  return <div className="h-[42.667px] relative shrink-0 w-[46px]" data-name="Header Cell" />;
}

function TableRow() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="Table Row">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <HeaderCell />
      </div>
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Text14() {
  return <div className="absolute bg-white border border-[#cad5e2] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />;
}

function CheckboxField1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[14px]" data-name="CheckboxField">
      <Text14 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="h-full relative shrink-0" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[11px] relative size-full">
          <CheckboxField1 />
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="flex-[1_0_0] h-[40.333px] min-w-px relative" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Consolas:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] left-[12px] text-[#45556c] text-[12px] top-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wght" 400' }}>
        음식
      </p>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#f0fdf4] h-[20px] relative rounded-[3px] shrink-0 w-[36.75px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-[18.5px] not-italic text-[#00a63e] text-[12px] text-center top-[1.67px] whitespace-nowrap">사용</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[60px] py-[8px] relative shrink-0 w-[129px]" data-name="Table Cell">
      <Text15 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_444_3166)" id="Icon">
          <path d={svgPaths.p5c60b40} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.75 2.91667L11.0833 5.25" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_444_3166">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute left-[12px] rounded-[4px] size-[22px] top-[10.33px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="h-[44px] relative shrink-0 w-[46px]" data-name="Table Cell">
      <Button4 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden className="absolute border-[#ff6b2b] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <TableCell />
      </div>
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="bg-[#fff7f4] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Body">
      <TableRow1 />
    </div>
  );
}

function Text16() {
  return <div className="absolute bg-white border border-[#cad5e2] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />;
}

function CheckboxField2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[14px]" data-name="CheckboxField">
      <Text16 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="h-full relative shrink-0" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[11px] relative size-full">
          <CheckboxField2 />
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="flex-[1_0_0] h-[40.333px] min-w-px relative" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Consolas:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] left-[12px] text-[#45556c] text-[12px] top-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wght" 400' }}>
        음료수
      </p>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#f0fdf4] h-[20px] relative rounded-[3px] shrink-0 w-[36.75px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-[18.5px] not-italic text-[#00a63e] text-[12px] text-center top-[1.67px] whitespace-nowrap">사용</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[60px] py-[8px] relative shrink-0 w-[129px]" data-name="Table Cell">
      <Text17 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_444_3166)" id="Icon">
          <path d={svgPaths.p5c60b40} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.75 2.91667L11.0833 5.25" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_444_3166">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute left-[12px] rounded-[4px] size-[22px] top-[10.33px]" data-name="Button">
      <Icon4 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="h-[44px] relative shrink-0 w-[46px]" data-name="Table Cell">
      <Button5 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <TableCell4 />
      </div>
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden className="absolute border-[#f1f5f9] border-[0.67px] border-solid inset-0 pointer-events-none" />
      <TableRow2 />
    </div>
  );
}

function Text18() {
  return <div className="absolute bg-white border border-[#cad5e2] border-solid left-0 rounded-[3px] size-[14px] top-px" data-name="Text" />;
}

function CheckboxField3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[14px]" data-name="CheckboxField">
      <Text18 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="h-full relative shrink-0" data-name="Table Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[11px] relative size-full">
          <CheckboxField3 />
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="flex-[1_0_0] h-[40.333px] min-w-px relative" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Consolas:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] left-[12px] text-[#45556c] text-[12px] top-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wght" 400' }}>
        리뷰
      </p>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#f1f5f9] h-[20px] relative rounded-[3px] shrink-0 w-[47.115px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-[24px] not-italic text-[#62748e] text-[12px] text-center top-[1.67px] whitespace-nowrap">미사용</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[55px] py-[10px] relative shrink-0 w-[129px]" data-name="Table Cell">
      <Text19 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_444_3166)" id="Icon">
          <path d={svgPaths.p5c60b40} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.75 2.91667L11.0833 5.25" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_444_3166">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute left-[12px] rounded-[4px] size-[22px] top-[10.33px]" data-name="Button">
      <Icon5 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="h-[44px] relative shrink-0 w-[46px]" data-name="Table Cell">
      <Button6 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Table Row">
      <div className="flex flex-row items-center self-stretch">
        <TableCell8 />
      </div>
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableBody2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden className="absolute border-[#f1f5f9] border-[0.67px] border-solid inset-0 pointer-events-none" />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[524px]" data-name="Table">
      <TableHeader />
      <TableBody />
      <TableBody1 />
      <TableBody2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip pr-[-93.667px] relative w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[771px] items-start p-[0.667px] relative rounded-[6px] shrink-0 w-[527px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container4 />
      <Container7 />
    </div>
  );
}

function Text20() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[-0.67px] whitespace-nowrap">메뉴 관리</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text20 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M10.5 8.75L7 5.25L3.5 8.75" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="opacity-40 relative rounded-[3px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="opacity-40 relative rounded-[3px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[46.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[23.5px] not-italic text-[#45556c] text-[0px] text-center top-[-1.5px] tracking-[-0.3125px] whitespace-nowrap">
          <span className="font-['Pretendard:Medium',sans-serif] leading-[16px] text-[16px]">+</span>
          <span className="font-['Pretendard:Medium',sans-serif] leading-[16px] text-[12px]">{` 행추가`}</span>
        </p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[28px] opacity-40 relative rounded-[3px] shrink-0 w-[66.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Text21 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[46.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[23.5px] not-italic text-[#45556c] text-[0px] text-center top-[-1.5px] tracking-[-0.3125px] whitespace-nowrap">
          <span className="font-['Pretendard:Medium',sans-serif] leading-[16px] text-[16px]">−</span>
          <span className="font-['Pretendard:Medium',sans-serif] leading-[16px] text-[12px]">{` 행삭제`}</span>
        </p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-px opacity-40 relative rounded-[3px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[10.5px] not-italic text-[#314158] text-[12px] text-center top-[0.5px] whitespace-nowrap">저장</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[28px] opacity-40 relative rounded-[3px] shrink-0 w-[42.742px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] py-px relative size-full">
        <Text23 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[247.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative size-full">
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[40.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[0.667px] px-[16px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0 w-[97px]" data-name="Header Cell">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">메뉴 명</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative shrink-0 w-[94px]" data-name="Header Cell">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">메뉴 가격</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[43px] py-[10px] relative shrink-0 w-[97px]" data-name="Header Cell">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center whitespace-nowrap">메뉴 설명</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[43px] py-[10px] relative shrink-0 w-[93px]" data-name="Header Cell">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center whitespace-nowrap">상세 옵션</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[43px] py-[10px] relative shrink-0 w-[98px]" data-name="Header Cell">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] text-center whitespace-nowrap">옵션 사용 여부</p>
    </div>
  );
}

function HeaderCell9() {
  return <div className="h-[42.667px] relative shrink-0 w-[46px]" data-name="Header Cell" />;
}

function TableRow4() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex items-center left-0 top-0 w-[525px]" data-name="Table Row">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
      <HeaderCell9 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[37px] left-[0.33px] top-[-0.33px] w-[525px]" data-name="Table Header">
      <TableRow4 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Table Cell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Consolas:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wght" 400' }}>
            쌀국수
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Table Cell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Consolas:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">12,900</p>
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Table Cell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[22px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">고수 옵션있음</p>
        </div>
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Table Cell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[67px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">있음</p>
        </div>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="bg-[#f0fdf4] h-[20px] relative rounded-[3px] shrink-0 w-[36.75px]" data-name="Text">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pretendard:Regular',sans-serif] leading-[16px] left-[18.5px] not-italic text-[#00a63e] text-[12px] text-center top-[1.67px] whitespace-nowrap">사용</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Table Cell">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[60px] py-[8px] relative size-full">
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_444_3166)" id="Icon">
          <path d={svgPaths.p5c60b40} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.75 2.91667L11.0833 5.25" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_444_3166">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[22px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[10px] relative shrink-0" data-name="Table Cell">
      <Button12 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableBody3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[0.33px] top-[42.33px] w-[525px]" data-name="Table Body">
      <TableRow5 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[152.667px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader1 />
      <TableBody3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[771px] items-start p-[0.667px] relative rounded-[6px] shrink-0 w-[527px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container9 />
      <Table1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative shrink-0">
      <Container3 />
      <Container8 />
    </div>
  );
}

function CommonCodeManagement() {
  return (
    <div className="h-[937px] relative shrink-0 w-full" data-name="CommonCodeManagement">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Navigation />
        <Container />
        <Frame />
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Main Content">
      <CommonCodeManagement />
    </div>
  );
}