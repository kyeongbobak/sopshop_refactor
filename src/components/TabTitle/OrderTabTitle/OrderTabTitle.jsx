import * as CS from "../../../components/TabTitle/CartTabTitle/CartTabTitleStyle";
import * as S from "./OrderTabTitleStyle";

export default function OrderTabTitle() {
  return (
    <>
      <CS.Wrapper>
        <S.ProductInfoTitle>상품 정보</S.ProductInfoTitle>
        <S.DisCountTitle>할인</S.DisCountTitle>
        <CS.TabItemTitle>배송비</CS.TabItemTitle>
        <CS.TabItemTitle>주문 금액</CS.TabItemTitle>
      </CS.Wrapper>
    </>
  );
}
