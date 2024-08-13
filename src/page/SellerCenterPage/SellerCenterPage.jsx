import { useCallback, useEffect, useState } from "react";

import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { getSellingProducts, modifySellingProduct, deleteSellingProduct } from "../../api/SellingProduct";
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

  const sellingProductList = useCallback(async () => {
    const res = await getSellingProducts(token);
    setSellingProduct(res.results);
    const productIds = res.results.map((product) => product.product_id);
    setProductId(productIds);
  }, [token]);

  useEffect(() => {
    sellingProductList();
  }, [sellingProductList]);

  const modifyProduct = async (index) => {
    const product = sellingProduct[index];
    const formData = new FormData();
    formData.append("product_name", `${product.product_name}`);
    formData.append("image", `${product.image}`);
    formData.append("price", `${product.price}`);
    formData.append("shipping_method", `${product.shipping_method}`);
    formData.append("shipping_fee", `${product.shipping_fee}`);
    formData.append("stock", 30);
    formData.append("product_info", "");
    const res = await modifySellingProduct(token, formData, productId[index]);
    sellingProductList();
    return res;
  };

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
              <S.ModifyBtn onClick={() => modifyProduct(index)}>수정</S.ModifyBtn>
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
