import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../api/Product";
import * as S from "../../components/ProductDetailInfo/ProductDetailInfoStyle";
import CountControl from "../CountControl/CountControl";

export default function ProductDetailInfo() {
  const { ProductId } = useParams();
  const [detailInfo, setDetailInfo] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getProductDetail = async () => {
      const res = await getProductDetails(ProductId);
      console.log(res);
      setDetailInfo(res);
    };

    getProductDetail();
  }, [ProductId]);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <>
      <S.Wrapper>
        <S.ProductImage src={`${detailInfo.image}`} />
        <S.ProductDetailWrapper>
          <S.ProductBrandName>{detailInfo.store_name}</S.ProductBrandName>
          <S.ProductName>{detailInfo.product_name}</S.ProductName>
          <S.ProductPrice>
            {parseInt(detailInfo.price).toLocaleString()} <span>원</span>
          </S.ProductPrice>
          <S.ShippingInfo>{detailInfo.shipping_fee === "0" ? "무료배송" : "택배배송"}</S.ShippingInfo>
          <CountControl isStock={detailInfo.stock} onCountChange={handleCountChange} />
          <S.OrderDetail>
            <span>Total Price</span>
            <div>
              <span>총 수량 {count} 개</span>
              <strong>{detailInfo.price ? (parseInt(detailInfo.price) * count).toLocaleString() : 0}원</strong>
            </div>
          </S.OrderDetail>
          <S.ButtonWrapper>
            <S.BuyButton>Buy Now</S.BuyButton>
            <S.MButton>Add To Cart</S.MButton>
          </S.ButtonWrapper>
        </S.ProductDetailWrapper>
      </S.Wrapper>
    </>
  );
}
