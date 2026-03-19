import React from "react";

interface ScrollBoxProps {
  children: React.ReactNode;
  className?: string;
  variant?: "main" | "subtle";
  style?: React.CSSProperties;
}

/**
 * 스크롤박스 컴포넌트
 * 
 * @param variant
 * - "main" (기본값): 큰 틀의 메인 스크롤에 사용. 더 진한 스크롤바 (scroll-box 클래스)
 * - "subtle": 스크롤 안의 서브 스크롤에 사용. 더 연한 스크롤바 (subtle-box 클래스)
 * 
 * @example
 * // 메인 페이지 스크롤
 * <ScrollBox variant="main" className="h-full">
 *   <div>콘텐츠</div>
 * </ScrollBox>
 * 
 * // 테이블 내부 스크롤
 * <ScrollBox variant="subtle" className="max-h-96">
 *   <table>...</table>
 * </ScrollBox>
 */
export function ScrollBox({
  children,
  className = "",
  variant = "main",
  style,
}: ScrollBoxProps) {
  const variantClass = variant === "main" ? "scroll-box" : "subtle-box";

  return (
    <div className={`${variantClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
