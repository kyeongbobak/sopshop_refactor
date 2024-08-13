import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { getOrderList } from "../../api/Order";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideBar from "../../components/SideBar/SideBar";
import TabTitle from "../../components/TabTitle/TabTitle";
import Footer from "../../components/Footer/Footer";
import * as S from "./MyPageStyle";
import * as CS from "../../page/CartPage/CartPageStyle";
import useProductDetail from "../../hook/useProductDetail";

export default function MyPage() {
  const titles = ["상품정보", "수량", "주문금액", "결제 방법", "주문처리 상태"];
  const styles = [{ width: 600 }, { width: 300 }];

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
      <SideBar />
      <CS.PageTitle>MyPage</CS.PageTitle>
      <TabTitle titles={titles} styles={styles} />
      {orderItem.map((item, index) => (
        <S.Wrapper key={item.order_number}>
          {productInfo[index] && (
            <>
              <S.ProductInfoWrapper key={index}>
                <S.ProductImage src={productInfo[index].image} />
                <div>
                  <S.ProductStoreName>{productInfo[index].store_name}</S.ProductStoreName>
                  <S.ProductName>{productInfo[index].product_name}</S.ProductName>
                </div>
              </S.ProductInfoWrapper>
            </>
          )}

          <S.ProductCount>{item.order_quantity}</S.ProductCount>
          <S.ProductPrice>{item.total_price.toLocaleString()} 원</S.ProductPrice>
          <S.PayMentMethod>{item.payment_method}</S.PayMentMethod>
          <S.OrderStatus>{item.delivery_status}</S.OrderStatus>
        </S.Wrapper>
      ))}
      <Footer />
    </>
  );
}
