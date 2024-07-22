import * as S from "./CartTabTitleStyle";

export default function CartTabTitle() {
  return (
    <>
      <S.Wrapper>
        <S.CheckBox type="checkbox" />
        <S.ProductInfoTitle>상품 정보</S.ProductInfoTitle>
        <S.CountTitle>수량</S.CountTitle>
        <S.ProductPrice>상품 금액</S.ProductPrice>
      </S.Wrapper>
    </>
  );
}
