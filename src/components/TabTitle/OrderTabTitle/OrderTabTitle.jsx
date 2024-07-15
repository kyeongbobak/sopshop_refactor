import * as C from "../CartTabTitle/CartTabTitleStyle";
import * as S from "./OrderTabTitleStyle";

export default function OrderTabTitle() {
  return (
    <>
      <C.Wrapper>
        <S.TabTitleItem>상품 정보</S.TabTitleItem>
        <S.TabTitleItem>할인</S.TabTitleItem>
        <C.TabTitleItem>배송비</C.TabTitleItem>
        <C.TabTitleItem>주문 금액</C.TabTitleItem>
      </C.Wrapper>
    </>
  );
}
