import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../../atom/Atom";
import { getOrderList } from "../../../api/Order";
import useCartList from "../../../hook/useCartList";
import * as CS from "../../../components/TabTitle/CartTabTitle/CartTabTitleStyle";

export default function MyPageTabTitle() {
  const token = useRecoilValue(userToken);
  console.log(token);

  const { cartList } = useCartList(token);
  console.log(cartList);

  useEffect(() => {
    const OrderList = async () => {
      const res = await getOrderList(token);
      console.log(res);
      return res;
    };

    OrderList();
  }, [token]);

  return (
    <>
      <CS.Wrapper>
        <CS.ProductInfoTitle>상품정보</CS.ProductInfoTitle>
        <CS.TabItemTitle>수량</CS.TabItemTitle>
        <CS.TabItemTitle>상품 금액</CS.TabItemTitle>
        <CS.TabItemTitle>주문처리 상태</CS.TabItemTitle>
        <CS.TabItemTitle>배송구분</CS.TabItemTitle>
      </CS.Wrapper>
    </>
  );
}
