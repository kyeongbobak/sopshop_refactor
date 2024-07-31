import * as CS from "../../../components/TabTitle/CartTabTitle/CartTabTitleStyle";

export default function MyPageTabTitle() {
  return (
    <>
      <CS.Wrapper>
        <CS.ProductInfoTitle>상품정보</CS.ProductInfoTitle>
        <CS.TabItemTitle>수량</CS.TabItemTitle>
        <CS.TabItemTitle>주문 금액</CS.TabItemTitle>
        <CS.TabItemTitle>결제 방법</CS.TabItemTitle>
        <CS.TabItemTitle>주문처리 상태</CS.TabItemTitle>
      </CS.Wrapper>
    </>
  );
}
