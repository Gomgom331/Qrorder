import svgPaths from "./svg-uqxggx3xmd";
import imgImage from "./6844961b26a70721aa1a92bd713a9a3ac7398f97.png";
import imgImage1 from "./60f77338728f20f010c44809e912da950d9fd135.png";
import imgImage2 from "./60203fb2369be0153fa81d32a7b56c18d1a91504.png";
import imgImage3 from "./09fbd140a149c355407d043ea110e26aa7d8117b.png";
import imgImage4 from "./09ab5c9379bf4e91da80b5c246aef283b2c70de8.png";
import imgImage5 from "./a0f3de1756ebc93b2aedffccfa84a3e058df0b33.png";
import imgImage6 from "./1485a54cdf29ad4175d1646637b75fabc3cc0029.png";
import imgImage7 from "./bdd166f8c149516aac281382140a357b69ee7f17.png";
import imgImage8 from "./2c2e438b43b1346bcb5345c50fda0184d796e038.png";
import imgImage9 from "./4fe7da932a3a2b40db27daf353dd22035c6c28bf.png";
import imgImage10 from "./a7501dd70954ee0163159ee93400844a24ae1ca2.png";

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] tracking-[0.3px] whitespace-nowrap">한식</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">5개</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f8fafc] border-[#e2e8f0] border-b border-solid border-t content-stretch flex items-center justify-between px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Text />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (불고기 정식)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
        <g id="Icon">
          <path d={svgPaths.p1c3d0700} id="Vector" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function BadgeChip() {
  return (
    <div className="bg-[#fef2f2] border border-[#ffe2e2] border-solid content-stretch flex gap-[2px] h-full items-center px-[6px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="BadgeChip">
      <Icon />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#fb2c36] text-[10px] whitespace-nowrap">인기</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
        <g clipPath="url(#clip0_0_24)" id="Icon">
          <path d={svgPaths.p1eb6d000} id="Vector" stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeChip1() {
  return (
    <div className="bg-[#fffbeb] border border-[#fef3c6] border-solid content-stretch flex gap-[2px] h-full items-center px-[6px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="BadgeChip">
      <Icon1 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#fe9a00] text-[10px] whitespace-nowrap">추천</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] h-[21px] items-start relative shrink-0 w-[287px]" data-name="Container">
      <BadgeChip />
      <BadgeChip1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">불고기 정식</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-start overflow-clip pt-[2px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] w-[287px]">국내산 소고기를 특제 양념에 재워 구운 불고기와 밥, 국, 반찬이 함께 나옵니다.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">12,000원</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Button - 메뉴 추가">
      <Icon2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Button />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col items-start min-w-px py-[2px] relative" data-name="Container">
      <Container7 />
      <ContainerMargin />
    </div>
  );
}

function MenuItemCard() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-1 self-stretch shrink-0" data-name="MenuItemCard">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (김치찌개)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
        <g id="Icon">
          <path d={svgPaths.p1c3d0700} id="Vector" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function BadgeChip2() {
  return (
    <div className="bg-[#fef2f2] border border-[#ffe2e2] border-solid content-stretch flex gap-[2px] h-full items-center px-[6px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="BadgeChip">
      <Icon3 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#fb2c36] text-[10px] whitespace-nowrap">인기</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-[287px]" data-name="Container">
      <BadgeChip2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">김치찌개</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-start overflow-clip pt-[2px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] w-[287px]">2년 이상 숙성한 묵은지로 끓인 얼큰하고 깊은 맛의 김치찌개. 공기밥 포함.</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">8,000원</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Button - 메뉴 추가">
      <Icon4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Button1 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col items-start min-w-px py-[2px] relative" data-name="Container">
      <Container12 />
      <ContainerMargin1 />
    </div>
  );
}

function MenuItemCard1() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-2 self-stretch shrink-0" data-name="MenuItemCard">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (된장찌개)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">된장찌개</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col h-[19.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">구수한 재래식 된장으로 끓인 두부 된장찌개. 공기밥 포함.</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <Paragraph5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <ParagraphMargin />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">8,000원</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Button - 메뉴 추가">
      <Icon5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Button2 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col items-start min-w-px py-[2px] relative" data-name="Container">
      <Container17 />
      <ContainerMargin2 />
    </div>
  );
}

function MenuItemCard2() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-3 self-stretch shrink-0" data-name="MenuItemCard">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (비빔밥)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
        <g clipPath="url(#clip0_0_24)" id="Icon">
          <path d={svgPaths.p1eb6d000} id="Vector" stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeChip3() {
  return (
    <div className="bg-[#fffbeb] border border-[#fef3c6] border-solid content-stretch flex gap-[2px] h-full items-center px-[6px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="BadgeChip">
      <Icon6 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#fe9a00] text-[10px] whitespace-nowrap">추천</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
        <g clipPath="url(#clip0_0_22)" id="Icon">
          <path d={svgPaths.pe90b770} id="Vector" stroke="#AD46FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
        <defs>
          <clipPath id="clip0_0_22">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeChip4() {
  return (
    <div className="bg-[#faf5ff] border border-[#f3e8ff] border-solid content-stretch flex gap-[2px] h-full items-center px-[6px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="BadgeChip">
      <Icon7 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#ad46ff] text-[10px] whitespace-nowrap">한정수량</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[4px] h-[21px] items-start relative shrink-0 w-[287px]" data-name="Container">
      <BadgeChip3 />
      <BadgeChip4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">비빔밥</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-col h-[19.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">고소한 참기름과 고추장으로 비벼 먹는 전통 돌솥 비빔밥.</p>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <Paragraph7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Paragraph6 />
      <ParagraphMargin1 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">9,000원</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Button - 메뉴 추가">
      <Icon8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Button3 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col items-start min-w-px py-[2px] relative" data-name="Container">
      <Container21 />
      <ContainerMargin3 />
    </div>
  );
}

function MenuItemCard3() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-4 self-stretch shrink-0" data-name="MenuItemCard">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Image4() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (제육볶음)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image4 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
        <g clipPath="url(#clip0_0_22)" id="Icon">
          <path d={svgPaths.pe90b770} id="Vector" stroke="#AD46FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
        <defs>
          <clipPath id="clip0_0_22">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeChip5() {
  return (
    <div className="bg-[#faf5ff] border border-[#f3e8ff] border-solid content-stretch flex gap-[2px] h-full items-center px-[6px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="BadgeChip">
      <Icon9 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#ad46ff] text-[10px] whitespace-nowrap">한정수량</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-[287px]" data-name="Container">
      <BadgeChip5 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">제육볶음</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col h-[19.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">매콤달콤한 양념에 볶은 제육볶음. 공기밥 및 반찬 포함.</p>
    </div>
  );
}

function ParagraphMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <Paragraph9 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Paragraph8 />
      <ParagraphMargin2 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">11,000원</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Button - 메뉴 추가">
      <Icon10 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Button4 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container28 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col items-start min-w-px py-[2px] relative" data-name="Container">
      <Container26 />
      <ContainerMargin4 />
    </div>
  );
}

function MenuItemCard4() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-5 self-stretch shrink-0" data-name="MenuItemCard">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white grid grid-cols-[_403px] grid-rows-[_____152.25px_152.25px_107.75px_132.75px_132.75px] relative shrink-0 w-full" data-name="Container">
      <MenuItemCard />
      <MenuItemCard1 />
      <MenuItemCard2 />
      <MenuItemCard3 />
      <MenuItemCard4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] tracking-[0.3px] whitespace-nowrap">일식</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">4개</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#f8fafc] border-[#e2e8f0] border-b border-solid border-t content-stretch flex items-center justify-between px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Text6 />
    </div>
  );
}

function Image5() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (돈까스)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image5 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
        <g id="Icon">
          <path d={svgPaths.p1c3d0700} id="Vector" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function BadgeChip6() {
  return (
    <div className="bg-[#fef2f2] border border-[#ffe2e2] border-solid content-stretch flex gap-[2px] h-full items-center px-[6px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="BadgeChip">
      <Icon11 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#fb2c36] text-[10px] whitespace-nowrap">인기</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-[287px]" data-name="Container">
      <BadgeChip6 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">돈까스</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col h-[19.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">바삭하게 튀긴 국내산 등심 돈까스. 소스, 샐러드, 공기밥 포함.</p>
    </div>
  );
}

function ParagraphMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <Paragraph11 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Paragraph10 />
      <ParagraphMargin3 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">10,000원</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Button - 메뉴 추가">
      <Icon12 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Button5 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col items-start min-w-px py-[2px] relative" data-name="Container">
      <Container35 />
      <ContainerMargin5 />
    </div>
  );
}

function MenuItemCard5() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-1 self-stretch shrink-0" data-name="MenuItemCard">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[72px] opacity-60 relative shrink-0 w-full" data-name="Image (우동)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[rgba(0,0,0,0.7)] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">품절</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex items-center justify-center left-0 size-[72px] top-0" data-name="Container">
      <Text8 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image6 />
      <Container39 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">우동</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col h-[19.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">부드러운 면발의 따뜻한 일본식 우동.</p>
    </div>
  );
}

function ParagraphMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <Paragraph13 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph12 />
      <ParagraphMargin4 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">7,000원</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text9 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col h-full items-start justify-between min-w-px py-[2px] relative" data-name="Container">
      <Container41 />
      <ContainerMargin6 />
    </div>
  );
}

function MenuItemCard6() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-2 self-stretch shrink-0" data-name="MenuItemCard">
      <Container38 />
      <Container40 />
    </div>
  );
}

function Image7() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (카레라이스)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image7 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
        <g clipPath="url(#clip0_0_24)" id="Icon">
          <path d={svgPaths.p1eb6d000} id="Vector" stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeChip7() {
  return (
    <div className="bg-[#fffbeb] border border-[#fef3c6] border-solid content-stretch flex gap-[2px] h-full items-center px-[6px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="BadgeChip">
      <Icon13 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#fe9a00] text-[10px] whitespace-nowrap">추천</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-[287px]" data-name="Container">
      <BadgeChip7 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">카레라이스</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col h-[19.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">부드러운 감자와 당근이 들어간 진한 일본식 카레라이스.</p>
    </div>
  );
}

function ParagraphMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <Paragraph15 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Paragraph14 />
      <ParagraphMargin5 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">8,500원</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Button - 메뉴 추가">
      <Icon14 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Button6 />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container47 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col items-start min-w-px py-[2px] relative" data-name="Container">
      <Container45 />
      <ContainerMargin7 />
    </div>
  );
}

function MenuItemCard7() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-3 self-stretch shrink-0" data-name="MenuItemCard">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Image8() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (돈까스 정식)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image8 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
        <g clipPath="url(#clip0_0_24)" id="Icon">
          <path d={svgPaths.p1eb6d000} id="Vector" stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadgeChip8() {
  return (
    <div className="bg-[#fffbeb] border border-[#fef3c6] border-solid content-stretch flex gap-[2px] h-full items-center px-[6px] py-[2px] relative rounded-[33554400px] shrink-0" data-name="BadgeChip">
      <Icon15 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#fe9a00] text-[10px] whitespace-nowrap">추천</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-[287px]" data-name="Container">
      <BadgeChip8 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">돈까스 정식</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-start overflow-clip pt-[2px] relative shrink-0 w-[287px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] w-[287px]">바삭한 등심 돈까스에 공기밥, 된장국, 샐러드가 함께 나옵니다.</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">13,000원</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Button - 메뉴 추가">
      <Icon16 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Button7 />
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container52 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col items-start min-w-px py-[2px] relative" data-name="Container">
      <Container50 />
      <ContainerMargin8 />
    </div>
  );
}

function MenuItemCard8() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-4 self-stretch shrink-0" data-name="MenuItemCard">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white grid grid-cols-[_403px] grid-rows-[____132.75px_97px_132.75px_152.25px] relative shrink-0 w-full" data-name="Container">
      <MenuItemCard5 />
      <MenuItemCard6 />
      <MenuItemCard7 />
      <MenuItemCard8 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] tracking-[0.3px] whitespace-nowrap">음료</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">1개</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#f8fafc] border-[#e2e8f0] border-b border-solid border-t content-stretch flex items-center justify-between px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Text12 />
    </div>
  );
}

function Image9() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (레몬에이드)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image9 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">레몬에이드</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex flex-col h-[19.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">신선한 레몬으로 만든 상큼하고 시원한 레몬에이드.</p>
    </div>
  );
}

function ParagraphMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <Paragraph19 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph18 />
      <ParagraphMargin6 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">4,500원</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Button - 메뉴 추가">
      <Icon17 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text13 />
      <Button8 />
    </div>
  );
}

function ContainerMargin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container60 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col items-start min-w-px py-[2px] relative" data-name="Container">
      <Container59 />
      <ContainerMargin9 />
    </div>
  );
}

function MenuItemCard9() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-1 self-stretch shrink-0" data-name="MenuItemCard">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-white grid grid-cols-[_403px] grid-rows-[_107.75px] relative shrink-0 w-full" data-name="Container">
      <MenuItemCard9 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container56 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] tracking-[0.3px] whitespace-nowrap">디저트</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">1개</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#f8fafc] border-[#e2e8f0] border-b border-solid border-t content-stretch flex items-center justify-between px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Text14 />
    </div>
  );
}

function Image10() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image (티라미수)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 size-[72px]" data-name="Container">
      <Image10 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">티라미수</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex flex-col h-[19.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">마스카포네 치즈와 에스프레소가 어우러진 이탈리안 디저트.</p>
    </div>
  );
}

function ParagraphMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph:margin">
      <Paragraph21 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph20 />
      <ParagraphMargin7 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">5,500원</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[rgba(255,107,43,0.09)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Button - 메뉴 추가">
      <Icon18 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text15 />
      <Button9 />
    </div>
  );
}

function ContainerMargin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container68 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-[287_0_0] flex-col items-start min-w-px py-[2px] relative" data-name="Container">
      <Container67 />
      <ContainerMargin10 />
    </div>
  );
}

function MenuItemCard10() {
  return (
    <div className="bg-white border-[#f1f5f9] border-b border-solid col-1 content-stretch flex gap-[12px] items-start justify-self-stretch px-[16px] py-[12px] relative row-1 self-stretch shrink-0" data-name="MenuItemCard">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-white grid grid-cols-[_403px] grid-rows-[_107.75px] relative shrink-0 w-full" data-name="Container">
      <MenuItemCard10 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container64 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[96px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container29 />
      <Container53 />
      <Container61 />
    </div>
  );
}

function CustomerMenuPage() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col h-[840px] items-start left-0 overflow-clip pt-[192px] top-0 w-[403px]" data-name="CustomerMenuPage">
      <Container />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_29)" id="Icon">
          <path d={svgPaths.p61f9880} id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p266da370} id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12d64e80} id="Vector_3" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute bg-[rgba(255,107,43,0.07)] border border-[rgba(255,107,43,0.14)] border-solid content-stretch flex items-center justify-center left-[12px] rounded-[6px] size-[40px] top-[10px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex flex-col h-[17.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">맛나한식당</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-[rgba(255,107,43,0.07)] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[3px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#ff6b2b] text-[10px] whitespace-nowrap">3번 테이블</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
        <g clipPath="url(#clip0_0_14)" id="Icon">
          <path d={svgPaths.p39fe300} id="Vector" stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p36363d00} id="Vector_2" stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2eafe360} id="Vector_3" stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2c304f80} id="Vector_4" stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">2명 이용중</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center pt-[2px] relative shrink-0 w-[379px]" data-name="Container">
      <Text16 />
      <Icon20 />
      <Text17 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] py-[8px] top-[50px] w-[379px]" data-name="Container">
      <Paragraph22 />
      <Container72 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.pa1c60e0} id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p351ec080} id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[rgba(255,107,43,0.06)] border border-[rgba(255,107,43,0.14)] border-solid content-stretch flex gap-[6px] h-[32px] items-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon21 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ff6b2b] text-[12px] text-center whitespace-nowrap">직원호출</p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p14261880} id="Vector" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2e18600} id="Vector_2" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.75V3.25" id="Vector_3" stroke="#FF6B2B" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[rgba(255,107,43,0.06)] border border-[rgba(255,107,43,0.14)] border-solid content-stretch flex gap-[6px] h-[32px] items-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon22 />
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ff6b2b] text-[12px] text-center whitespace-nowrap">주문내역</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[214.03px] top-[14px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[108.5px] relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Container71 />
      <Container73 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Icon">
          <path d={svgPaths.p220e9c00} id="Vector" stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1de9fb00} id="Vector_2" stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-[330_0_0] flex-col h-[20px] items-start justify-center min-w-px overflow-clip relative" data-name="Text Input">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#90a1b9] text-[14px] w-full">메뉴 검색</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#f1f5f9] border border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] relative rounded-[6px] shrink-0 w-[379px]" data-name="Container">
      <Icon23 />
      <TextInput />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] px-[12px] relative shrink-0 w-full" data-name="Container">
      <Container75 />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#ff6b2b] content-stretch flex flex-col h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">전체</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">한식</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">일식</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">중식</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">양식</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">분식</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">음료</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">디저트</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">사이드</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">주류</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[6px] h-[38px] items-start overflow-clip pb-[10px] px-[12px] relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
    </div>
  );
}

function CustomerMenuPage1() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-b border-solid content-stretch flex flex-col items-start left-0 top-0 w-[403px]" data-name="CustomerMenuPage">
      <Container69 />
      <Container74 />
      <Container76 />
    </div>
  );
}

function Container79() {
  return <div className="bg-[#e2e8f0] h-[4px] relative rounded-[33554400px] shrink-0 w-[40px]" data-name="Container" />;
}

function Container78() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[8px] pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Container79 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_36)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="#45556C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="#45556C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ec07880} id="Vector_3" stroke="#45556C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pl-[8px] relative shrink-0 w-[57px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">장바구니</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#ff6b2b] content-stretch flex flex-col items-center min-w-[20px] px-[6px] py-[2px] relative rounded-[3px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">4</p>
    </div>
  );
}

function TextMargin() {
  return (
    <div className="content-stretch flex items-start pl-[8px] relative shrink-0" data-name="Text:margin">
      <Text19 />
    </div>
  );
}

function Container80() {
  return (
    <div className="border-[#f1f5f9] border-b border-solid content-stretch flex items-center px-[16px] py-[10px] relative shrink-0 w-full" data-name="Container">
      <Icon24 />
      <Text18 />
      <TextMargin />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex flex-[301.125_0_0] flex-col items-start min-w-px relative" data-name="Paragraph">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Pretendard:SemiBold',sans-serif] leading-[19.25px] line-through not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">비빔밥</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">27,000원</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[371px]" data-name="Container">
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#d72b2b] text-[10px] whitespace-nowrap">현재 품절된 메뉴입니다</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Pretendard:Regular',sans-serif] leading-[16px] line-through not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">9,000원</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
        <g id="Icon">
          <path d="M8.25 2.75L2.75 8.25" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14583" />
          <path d="M2.75 2.75L8.25 8.25" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14583" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-[#d72b2b] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="Button - 삭제">
      <Icon25 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between pt-[8px] relative shrink-0 w-[371px]" data-name="Container">
      <Text20 />
      <Button22 />
    </div>
  );
}

function Container83() {
  return (
    <div className="border-[#f1f5f9] border-b border-solid content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container84 />
      <Paragraph25 />
      <Container85 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex flex-[301.125_0_0] flex-col items-start min-w-px relative" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">불고기 정식</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b2b] text-[14px] whitespace-nowrap">14,000원</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[371px]" data-name="Container">
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[371px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">국 추가 (+2,000원)</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">12,000원</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
        <g id="Icon">
          <path d="M8.25 2.75L2.75 8.25" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14583" />
          <path d="M2.75 2.75L8.25 8.25" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14583" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#d72b2b] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="Button - 삭제">
      <Icon26 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[24px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1d293d] text-[14px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
        <g id="Icon">
          <path d="M2.29167 5.5H8.70833" id="Vector" stroke="#45556C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14583" />
          <path d="M5.5 2.29167V8.70833" id="Vector_2" stroke="#45556C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14583" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="Button - 수량 증가">
      <Icon27 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Button23 />
      <Text22 />
      <Button24 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between pt-[8px] relative shrink-0 w-[371px]" data-name="Container">
      <Text21 />
      <Container89 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Paragraph28 />
      <Container88 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Container86 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-[179_0_0] flex-col items-start min-h-px overflow-clip px-[16px] relative w-full" data-name="Container">
      <Container82 />
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#62748e] text-[14px] whitespace-nowrap">총 결제 금액</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#ff6b2b] text-[18px] whitespace-nowrap">41,000원</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-[#c1c7cd] content-stretch flex h-[48px] items-center justify-center relative rounded-[6px] shrink-0 w-[371px]" data-name="Button">
      <p className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">주문하기</p>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Button:margin">
      <Button25 />
    </div>
  );
}

function Container90() {
  return (
    <div className="border-[#f1f5f9] border-solid border-t content-stretch flex flex-col items-start pb-[32px] pt-[12px] px-[16px] relative shrink-0 w-full" data-name="Container">
      <Container91 />
      <ButtonMargin />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] flex flex-col h-[377px] items-start left-0 max-h-[688.7999877929688px] rounded-tl-[12px] rounded-tr-[12px] top-[463px] w-[403px]" data-name="Container">
      <Container78 />
      <Container80 />
      <Container81 />
      <Container90 />
    </div>
  );
}

function CartSheet() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] h-[840px] left-0 top-0 w-[403px]" data-name="CartSheet">
      <Container77 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="품절안내">
      <CustomerMenuPage />
      <CustomerMenuPage1 />
      <CartSheet />
    </div>
  );
}