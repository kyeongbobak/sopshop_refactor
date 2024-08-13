import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import useProductDetail from "../../hook/useProductDetail";
import { getOrderList } from "../../api/Order";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import * as S from "./OrderCompletePageStyle";
import * as CS from "../CartPage/CartPageStyle";

export default function OrderCompletePage() {
  const [orderList, setOrderList] = useState([]);

  const token = useRecoilValue(userToken);

  useEffect(() => {
    const OrderList = async () => {
      const res = await getOrderList(token);
      setOrderList(res.results.slice(0, 1));
    };
    OrderList();
  }, [token]);

  const productId = orderList.length > 0 ? orderList[0].order_items : [];
  const { productInfo } = useProductDetail(productId, token);
  const product = productInfo.length > 0 ? productInfo[0] : null;

  return (
    <>
      <TopNavBar />
      <SideBar />
      <CS.PageTitle>Order Result</CS.PageTitle>
      <S.Wrapper>
        <S.Section>
          {product && (
            <S.OrderInfoWrapper>
              <S.ProductImage src={product.image} />
              <S.ProductInfoWrapper>
                <S.ProductName>{product.product_name}</S.ProductName>
                <S.ProductPrice>{product.price.toLocaleString()} 원</S.ProductPrice>
                <S.ProductInfo>
                  <span>제품 상세정보 : </span>
                  {product.products_info}
                </S.ProductInfo>
                <S.ProductStoreName>
                  <span>브랜드 명 : </span>
                  {product.store_name}
                </S.ProductStoreName>
                <S.StyledLink to={`/Review`}>Review</S.StyledLink>
              </S.ProductInfoWrapper>
            </S.OrderInfoWrapper>
          )}
        </S.Section>
        <S.Section>
          <S.OrderDetailWrapper>
            {orderList.length > 0 && orderList[0] ? (
              <>
                <S.SectionTitle>Order Details</S.SectionTitle>
                <S.OrderNumber>
                  <p>
                    <span> 주문 번호 : </span>
                    {orderList[0].order_number}
                  </p>
                </S.OrderNumber>
                <S.DeliveryInfoWrapper>
                  <S.OrderDetailTitle>Delivery</S.OrderDetailTitle>
                  <S.DeliveryStatus>
                    <span>배송 상태</span>
                    <p>{orderList[0].delivery_status}</p>
                  </S.DeliveryStatus>
                  <S.DeliveryAddress>
                    <span>배송지 주소</span>
                    <S.Receiver>수령인 : {orderList[0].receiver}</S.Receiver>
                    <S.Address>주소 : {orderList[0].address}</S.Address>
                    <S.PhoneNumber>휴대폰 번호 :{orderList[0].receiver_phone_number}</S.PhoneNumber>
                  </S.DeliveryAddress>
                  <S.PayMentMethodWrapper>
                    <S.OrderDetailTitle>PayMent</S.OrderDetailTitle>
                    <p>{orderList[0].payment_method}</p>
                  </S.PayMentMethodWrapper>
                </S.DeliveryInfoWrapper>
              </>
            ) : null}
            {product && (
              <>
                <S.TotalPriceWrapper>
                  <S.OrderDetailTitle>Total</S.OrderDetailTitle>
                  <S.OrderPrice>
                    <span>총 주문 상품: </span>
                    <p>{product.price.toLocaleString()} 원</p>
                  </S.OrderPrice>
                  <S.ShippingFee>
                    <span>배송비</span>
                    <p>{product.shipping_fee.toLocaleString()} 원</p>
                  </S.ShippingFee>
                  <S.TotalPice>
                    <span>합계</span>
                    <p>{(product.price + product.shipping_fee).toLocaleString()} 원</p>
                  </S.TotalPice>
                </S.TotalPriceWrapper>
              </>
            )}
          </S.OrderDetailWrapper>
        </S.Section>
      </S.Wrapper>
      <Footer />
    </>
  );
}
