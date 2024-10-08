import { useState, useEffect } from "react";
import { userToken, userType } from "../../atom/Atom";
import { useRecoilValue } from "recoil";
import useCartList from "../../hook/useCartList";
import useProductDetail from "../../hook/useProductDetail";
import { totalProductPrice, totalShippingPrice } from "../../utils/calculate";
import * as S from "./OrderListStyle";
import * as CS from "../CartContents/CartContentsStyle";

export default function OrderList() {
  const [count, setCount] = useState([]);
  const [cartOneOrder, setCartOneOrder] = useState([]);

  const token = useRecoilValue(userToken);
  const userTypeValue = useRecoilValue(userType);

  const { cartList, cartProducts } = useCartList(token, userTypeValue);
  const { productInfo } = useProductDetail(token, cartProducts);

  const sumProductPrice = totalProductPrice(productInfo, cartList);
  const sumShipping = totalShippingPrice(productInfo);

  useEffect(() => {
    const selectedOrderItem = cartList.filter((item) => item.is_active === true);
    const selectedProductId = selectedOrderItem.map((i) => i.product_id);
    const cartOrderProduct = productInfo.filter((i) => selectedProductId.includes(i.product_id));
    setCartOneOrder(cartOrderProduct);
  }, [cartList, productInfo]);

  useEffect(() => {
    const quantity = cartList.map((i) => i.quantity);

    setCount(quantity);
  }, [cartList]);

  return (
    <>
      {cartList.length === 0 ? (
        <S.Wrapper>
          <S.Contents>주문 내역이 없습니다.</S.Contents>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          {cartOneOrder.length > 0
            ? cartOneOrder.map((product, index) => (
                <S.OrderListWrapper key={index}>
                  <S.ProductInfo>
                    <S.Image src={product.image} alt={product.product_name} />
                    <div>
                      <p>{product.store_name}</p>
                      <S.Name>{product.product_name}</S.Name>
                      <p>
                        <span>Qty : </span>
                        {count[index]}
                      </p>
                    </div>
                  </S.ProductInfo>
                  <S.DisCount>0</S.DisCount>
                  <S.ShippingMethod>{product.shipping_fee === 0 ? "무료배송" : `${product.shipping_fee.toLocaleString()} 원`}</S.ShippingMethod>
                  <S.OrderPrice>{(product.price * count[index]).toLocaleString()} 원</S.OrderPrice>
                </S.OrderListWrapper>
              ))
            : productInfo.map((product, index) => (
                <S.OrderListWrapper key={index}>
                  <S.ProductInfo>
                    <S.Image src={product.image} alt={product.product_name} />
                    <div>
                      <p>{product.store_name}</p>
                      <S.Name>{product.product_name}</S.Name>
                      <p>
                        <span>Qty : </span>
                        {count[index]}
                      </p>
                    </div>
                  </S.ProductInfo>
                  <S.DisCount>0</S.DisCount>
                  <S.ShippingMethod>{product.shipping_fee === 0 ? "무료배송" : `${product.shipping_fee.toLocaleString()} 원`}</S.ShippingMethod>
                  <S.OrderPrice>{(product.price * count[index]).toLocaleString()} 원</S.OrderPrice>
                </S.OrderListWrapper>
              ))}
          <CS.TotalPriceCal>
            <span>Total Product Price</span>
            <p>{sumProductPrice.toLocaleString()} 원</p>
            <span>+</span>
            <span>Total Shipping Fee</span>
            <p>{sumShipping.toLocaleString()} 원</p>
            <span> Total Order Price :</span>
            <p>{(sumProductPrice + sumShipping).toLocaleString()} 원</p>
          </CS.TotalPriceCal>
        </S.Wrapper>
      )}
    </>
  );
}
