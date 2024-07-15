import { useState } from "react";
import * as S from "./DetailPageTabs";

// 상세페이지 하단 탭 부분 컴포넌트 분리
export default function DetailPageTabs() {
  const [isClicked, setIsClicked] = useState("Review");
  const [menuContents, setMenuContents] = useState("Review");

  const handleTabClick = (TabTitle) => {
    setIsClicked(TabTitle);
    setMenuContents(TabTitle);
  };

  return (
    <>
      <S.Tabs>
        <S.TabItem>
          <S.TabItemBtn className={isClicked === "Review" ? "active" : ""} onClick={() => handleTabClick("Review")}>
            Review
          </S.TabItemBtn>
        </S.TabItem>
        <S.TabItem>
          <S.TabItemBtn className={isClicked === "Q&A" ? "active" : ""} onClick={() => handleTabClick("Q&A")}>
            Q&A
          </S.TabItemBtn>
        </S.TabItem>
        <S.TabItem>
          <S.TabItemBtn className={isClicked === "Returns / Refund" ? "active" : ""} onClick={() => handleTabClick("Returns / Refund")}>
            Returns / Refund
          </S.TabItemBtn>
        </S.TabItem>
      </S.Tabs>
      <S.Contents>{menuContents}</S.Contents>
    </>
  );
}
