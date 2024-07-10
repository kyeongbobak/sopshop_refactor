import { useState } from "react";
import * as S from "./DetailPageTabs";

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
          <S.TabItemBtn className={isClicked === "ReturnAndRefund" ? "active" : ""} onClick={() => handleTabClick("ReturnAndRefund")}>
            ReturnAndRefund
          </S.TabItemBtn>
        </S.TabItem>
      </S.Tabs>
      <S.Contents>{menuContents}</S.Contents>
    </>
  );
}
