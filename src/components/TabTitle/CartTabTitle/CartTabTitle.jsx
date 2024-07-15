import * as S from "./CartTabTitleStyle";

export default function CartTabTitle() {
  return (
    <>
      <S.Wrapper>
        <S.CheckBox type="checkbox" />
        <S.TabTitleItem>상품 정보</S.TabTitleItem>
        <S.TabTitleItem>수량</S.TabTitleItem>
        <S.TabTitleItem>상품 금액</S.TabTitleItem>
      </S.Wrapper>
    </>
  );
}
