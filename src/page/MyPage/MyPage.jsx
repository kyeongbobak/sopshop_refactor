import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { getOrderList } from "../../api/Order";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import MyPageTabTitle from "../../components/TabTitle/MyPageTabTitle/MyPageTabTitle";
import Footer from "../../components/Footer/Footer";
import * as S from "./MyPageStyle";
import * as CS from "../../page/CartPage/CartPageStyle";
import useProductDetail from "../../hook/useProductDetail";

export default function MyPage() {
  const [orderItem, setOrderItem] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const token = useRecoilValue(userToken);

  const { productInfo } = useProductDetail(token, productIds);

  useEffect(() => {
    const OrderList = async () => {
      const res = await getOrderList(token);
      setOrderItem(res.results.slice(0, 4));
      const productItems = res.results.map((i) => i.order_items).flat();
      setProductIds(productItems);
      return res;
    };

    OrderList();
  }, [token]);

  return (
    <>
      <TopNavBar />
      <SideMenu />
      <CS.PageTitle>MyPage</CS.PageTitle>
      <MyPageTabTitle />
      {orderItem.map((item, index) => (
        <S.Wrapper key={item.order_number}>
          {productInfo[index] && (
            <>
              <S.ProductInfoWrapper key={index}>
                <S.ProductImage src={productInfo[index].image} />
                <S.ProductStoreName>{productInfo[index].store_name}</S.ProductStoreName>
                <S.ProductName>{productInfo[index].product_name}</S.ProductName>
              </S.ProductInfoWrapper>
            </>
          )}
          <S.ProductCount>{item.order_quantity}</S.ProductCount>
          <S.ProductPrice>{item.total_price}</S.ProductPrice>
          <S.PayMentMethod>{item.payment_method}</S.PayMentMethod>
          <S.OrderStatus>{item.delivery_status}</S.OrderStatus>
        </S.Wrapper>
      ))}
      <Footer />
    </>
  );
}
