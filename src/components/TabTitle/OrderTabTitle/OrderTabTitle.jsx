import * as C from "../CartTabTitle/CartTabTitleStyle";
import * as S from "./OrderTabTitleStyle";

export default function OrderTabTitle() {
  return (
    <>
      <C.Wrapper>
        <S.ProductInfoTitle>상품 정보</S.ProductInfoTitle>
        <S.DisCountTitle>할인</S.DisCountTitle>
        <S.ShippingFeeTitle>배송비</S.ShippingFeeTitle>
        <S.OrderPriceTitle>주문 금액</S.OrderPriceTitle>
      </C.Wrapper>
    </>
  );
}
