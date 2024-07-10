import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../api/Product";
import * as S from "../../components/ProductDetailInfo/ProductDetailInfoStyle";
import CountControl from "../CountControl/CountControl";

export default function ProductDetailInfo() {
  const { ProductId } = useParams();
  const [detailInfo, setDetailInfo] = useState({});

  useEffect(() => {
    const getProductDetail = async () => {
      const res = await getProductDetails(ProductId);
      console.log(res);
      setDetailInfo(res);
    };

    getProductDetail();
  }, [ProductId]);

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
          <CountControl isStock={detailInfo.stock} />
          <S.ProductTotalPrice></S.ProductTotalPrice>
          <S.ButtonWrapper>
            <S.BuyButton>Buy Now</S.BuyButton>
            <S.MButton>Add To Cart</S.MButton>
          </S.ButtonWrapper>
        </S.ProductDetailWrapper>
      </S.Wrapper>
    </>
  );
}
