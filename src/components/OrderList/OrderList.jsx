import { useState, useEffect } from "react";
import { userToken } from "../../atom/Atom";
import { useRecoilValue } from "recoil";
import useCartList from "../../hook/useCartList";
import useProductDetail from "../../hook/useProductDetail";
import * as S from "./OrderListStyle";

export default function OrderList() {
  const token = useRecoilValue(userToken);
  const [productIds, setProductIds] = useState([]);
  const [count, setCount] = useState([]);
  const { cartList } = useCartList(token);
  const { productInfo } = useProductDetail(productIds, token);

  useEffect(() => {
    const productId = cartList.map((i) => i.product_id);
    const quantity = cartList.map((i) => i.quantity);
    setProductIds(productId);
    setCount(quantity);
  }, [cartList]);

  return (
    <>
      {productInfo.map((product, index) => (
        <S.OrderListWrapper key={index}>
          <div>
            <S.Image src={product.image} />
            <div>
              <S.BrandName>{product.store_name}</S.BrandName>
              <S.Name>{product.product_name}</S.Name>
              <p>
                <span>Qty :</span>
                {count[index]}
              </p>
            </div>
          </div>
          <S.DisCount>0</S.DisCount>
          <S.ShippingInfo>{product.shipping_fee === 0 ? "무료배송" : product.shipping_fee.toLocaleString()} 원</S.ShippingInfo>
          <S.TotalPrice>{(product.price * count[index]).toLocaleString()} 원</S.TotalPrice>
        </S.OrderListWrapper>
      ))}
    </>
  );
}
