import * as S from "./CartTabTitleStyle";

export default function CartTabTitle() {
  return (
    <>
      <S.Wrapper>
        <S.CheckBox type="checkbox" />
        <S.ProductInfoTitle>상품 정보</S.ProductInfoTitle>
        <S.TabItemTitle>수량</S.TabItemTitle>
        <S.TabItemTitle>상품 금액</S.TabItemTitle>
      </S.Wrapper>
    </>
  );
}
