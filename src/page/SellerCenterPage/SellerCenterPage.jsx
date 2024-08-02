import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { getSellingProducts } from "../../api/SellingProduct";
import TabTitle from "../../components/TabTitle/TabTitle";
import SellerCenterHeader from "../../components/SellerCenterHeader/SellerCenterHeader";
import SellerCenterSideMenu from "../../components/SellerCenterSideMenu/SellerCenterSideMenu";
import kyoPlate from "../../assets/img/kyoplate.png";
import * as S from "./SellerCenterPageStyle";

export default function SellerCenterPage() {
  const titles = ["상품정보", "판매가격", "수정", "삭제"];
  const styles = [{ width: 800 }, { width: 300 }, {}];
  const [orderItem, setOrderItem] = useState([]);
  console.log(orderItem);
  const token = useRecoilValue(userToken);

  useEffect(() => {
    const OrderList = async () => {
      const res = await getSellingProducts(token);
      console.log(res);
      setOrderItem(res);
    };
    OrderList();
  }, [token]);

  // const modifyProduct = async () => {
  //   const res = await modifySellingProduct(token, productId);
  //   console.log(res);
  // };

  // const deleteProduct = async () => {
  //   const res = await deleteSellingProduct(token, productId);
  //   console.log(res);
  // };

  return (
    <>
      <SellerCenterHeader />
      <SellerCenterSideMenu />
      <S.Wrapper>
        <TabTitle titles={titles} styles={styles} />
        <S.SellingProductWrapper>
          <S.ProductInfoWrapper>
            <S.ProductImage src={kyoPlate} />
            <S.ProductDetailsWrapper>
              <S.ProductName>kyo plate</S.ProductName>
              <S.ProductStock>Qty : 1</S.ProductStock>
            </S.ProductDetailsWrapper>
          </S.ProductInfoWrapper>
          <S.ProductPrice>7,500원</S.ProductPrice>
          <S.ButtonWrapper>
            <S.ModifyBtn>수정</S.ModifyBtn>
          </S.ButtonWrapper>
          <S.ButtonWrapper>
            <S.DeleteBtn>삭제</S.DeleteBtn>
          </S.ButtonWrapper>
        </S.SellingProductWrapper>
      </S.Wrapper>
    </>
  );
}
