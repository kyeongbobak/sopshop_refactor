import * as S from "./TabBtnMenuStyle";

export default function TabBtn({ IsBuyer, setIsBuyer, content }) {
  return (
    <S.Tabs>
      <S.TabItem>
        <S.TabItemBtn className={IsBuyer ? "active" : null} onClick={() => setIsBuyer(true)}>
          구매회원 {content}
        </S.TabItemBtn>
      </S.TabItem>
      <S.TabItem>
        <S.TabItemBtn className={IsBuyer ? null : "active"} onClick={() => setIsBuyer(false)}>
          판매회원 {content}
        </S.TabItemBtn>
      </S.TabItem>
    </S.Tabs>
  );
}
