import * as S from "./TabBtnMenuStyle";

export default function TabBtn({ isBuyer, setIsBuyer, content }) {
  return (
    <S.Tabs>
      <S.TabItem>
        <S.TabItemBtn className={isBuyer ? "active" : null} onClick={() => setIsBuyer(true)}>
          구매회원 {content}
        </S.TabItemBtn>
      </S.TabItem>
      <S.TabItem>
        <S.TabItemBtn className={isBuyer ? null : "active"} onClick={() => setIsBuyer(false)}>
          판매회원 {content}
        </S.TabItemBtn>
      </S.TabItem>
    </S.Tabs>
  );
}
