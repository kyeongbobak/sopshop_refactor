import { useCallback, useEffect, useState } from "react";

import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { getSellingProducts, deleteSellingProduct } from "../../api/SellingProduct";
import { useNavigate } from "react-router-dom";
import TabTitle from "../../components/TabTitle/TabTitle";
import SellerCenterHeader from "../../components/SellerCenterHeader/SellerCenterHeader";
import SellerCenterSideMenu from "../../components/SellerCenterSideMenu/SellerCenterSideMenu";
import * as S from "./SellerCenterPageStyle";

export default function SellerCenterPage() {
  const titles = ["상품정보", "판매가격", "수정", "삭제"];
  const styles = [{ width: 800 }, { width: 300 }];
  const [sellingProduct, setSellingProduct] = useState([]);
  const [productId, setProductId] = useState([]);

  const token = useRecoilValue(userToken);
  const navigator = useNavigate();

  const sellingProductList = useCallback(async () => {
    const res = await getSellingProducts(token);
    console.log(res);
    setSellingProduct(res.results);
    const productIds = res.results.map((product) => product.product_id);
    setProductId(productIds);
  }, [token]);

  useEffect(() => {
    sellingProductList();
  }, [sellingProductList]);

  const deleteProduct = async (index) => {
    console.log(productId[index]);
    const res = await deleteSellingProduct(token, productId[index]);
    sellingProductList();
    return res;
  };

  return (
    <>
      <SellerCenterHeader />
      <SellerCenterSideMenu />
      <S.Wrapper>
        <TabTitle titles={titles} styles={styles} />
        {sellingProduct.map((product, index) => (
          <S.SellingProductWrapper key={index}>
            <S.ProductInfoWrapper>
              <S.ProductImage src={product.image} />
              <S.ProductDetailsWrapper>
                <S.ProductName>{product.product_name}</S.ProductName>
                <S.ProductStock>
                  <span>Qty : </span>
                  {product.stock}
                </S.ProductStock>
              </S.ProductDetailsWrapper>
            </S.ProductInfoWrapper>
            <S.ProductPrice>{product.price.toLocaleString()} 원</S.ProductPrice>
            <S.ButtonWrapper>
              <S.ModifyBtn onClick={() => navigator(`/productMakePage/modify/${index}`)}>수정</S.ModifyBtn>
            </S.ButtonWrapper>
            <S.ButtonWrapper>
              <S.DeleteBtn onClick={() => deleteProduct(index)}>삭제</S.DeleteBtn>
            </S.ButtonWrapper>
          </S.SellingProductWrapper>
        ))}
      </S.Wrapper>
    </>
  );
}
