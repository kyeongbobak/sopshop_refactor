import { useEffect } from "react";
// useState
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { getSellingProducts } from "../../api/SellingProduct";
// modifySellingProduct, deleteSellingProduct
import TabTitle from "../../components/TabTitle/TabTitle";
import SellerCenterHeader from "../../components/SellerCenterHeader/SellerCenterHeader";
import SellerCenterSideMenu from "../../components/SellerCenterSideMenu/SellerCenterSideMenu";
import kyoPlate from "../../assets/img/kyoplate.png";
import * as S from "./SellerCenterPageStyle";

export default function SellerCenterPage() {
  const titles = ["상품정보", "판매가격", "수정", "삭제"];
  const styles = [{ width: 800 }, { width: 300 }, {}];
  // const [sellingProduct, setSellingProduct] = useState([]);
  const token = useRecoilValue(userToken);

  useEffect(() => {
    const sellingProductList = async () => {
      const res = await getSellingProducts(token);
      console.log(res);
      // setSellingProduct(res);
    };
    sellingProductList();
  }, [token]);

  // const modifyProduct = async (index) => {
  //   console.log(index);
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
          <S.ButtonWrapper>{/* <S.ModifyBtn onClick={() => modifyProduct(index)}>수정</S.ModifyBtn> */}</S.ButtonWrapper>
          <S.ButtonWrapper>{/* <S.DeleteBtn onClick={() => deleteProduct(index)}>삭제</S.DeleteBtn> */}</S.ButtonWrapper>
        </S.SellingProductWrapper>
      </S.Wrapper>
    </>
  );
}
