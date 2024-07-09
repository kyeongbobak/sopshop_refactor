import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../api/Product";
import * as S from "../../components/ProductDetailInfo/ProductDetailInfoStyle";

export default function ProductDetailInfo() {
  const { ProductId } = useParams();
  const [detailInfo, setDetailInfo] = useState("");

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
          <S.ProductBrandName></S.ProductBrandName>
          <S.ProductName></S.ProductName>
          <S.ProductPrice></S.ProductPrice>
          <S.ShippingInfo></S.ShippingInfo>
          <S.ProductCount></S.ProductCount>
          <S.ProductTotalPrice></S.ProductTotalPrice>
          <S.ButtonWrapper>
            <S.BuyButton></S.BuyButton>
            <S.MButton></S.MButton>
          </S.ButtonWrapper>
        </S.ProductDetailWrapper>
      </S.Wrapper>
    </>
  );
}
