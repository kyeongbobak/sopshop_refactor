import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import useCartList from "../../hook/useCartList";
import CountControl from "../CountControl/CountControl";
import * as S from "./CartProductListStyle";
import useProductDetail from "../../hook/useProductDetail";

// 응답 데이터에 고유한 키 값이 없어 uuid 라이브러리 사용
export default function CartProductList() {
  const [productIds, setProductIds] = useState([]);
  const [count, setCount] = useState([]);
  const token = useRecoilValue(userToken);

  const { cartList } = useCartList(token);
  const { productInfo } = useProductDetail(productIds, token);

  useEffect(() => {
    const productId = cartList.map((i) => i.product_id);
    setProductIds(productId);
    setCount(Array(cartList.length).fill(1));
  }, [cartList]);

  const handleCountChange = (index, newCount) => {
    setCount((prevCount) => {
      const newCounts = [...prevCount];
      newCounts[index] = newCount;
      return newCounts;
    });
  };

  return (
    <>
      <S.Wrapper>
        {productInfo.map((product, index) => (
          <div key={uuidv4()}>
            <S.CheckBox key={uuidv4()} />
            <S.ProductBrandName>{product.store_name}</S.ProductBrandName>
            <S.ProductName>{product.product_name}</S.ProductName>
            <S.ProductPrice>{product.price.toLocaleString()} 원</S.ProductPrice>
            <S.ShippingInfo>{product.shipping_method === "DELIVERY" ? "택배배송" : "무료배송"}</S.ShippingInfo>
            <CountControl key={index} count={count[index]} onCountChange={(newCount) => handleCountChange(index, newCount)} />
            <S.ProductPrice>{product.price + product.shipping_fee}</S.ProductPrice>
            <S.OrderButton></S.OrderButton>
          </div>
        ))}
      </S.Wrapper>
    </>
  );
}
