import { userToken } from "../../atom/Atom";
import { useRecoilValue } from "recoil";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import CartTabTitle from "../../components/TabTitle/CartTabTitle/CartTabTitle";
import CartList from "../../components/CartList/CartList";
import Footer from "../../components/Footer/Footer";
import useCartList from "../../hook/useCartList";
import * as S from "../../page/CartPage/CartPageStyle";

export default function CartPage() {
  const token = useRecoilValue(userToken);
  const { cartList } = useCartList(token);

  return (
    <>
      <TopNavBar />
      <CartTabTitle />
      <CartList />
      <S.Wrapper>
        <S.TotalPriceCal>
          <span>Sub Total</span>
          <S.ProductPrice></S.ProductPrice>
          <span>+</span>
          <span>Shipping</span>
          <S.ShippingFee></S.ShippingFee>
          <span>= Total :</span>
          <S.TotalPrice></S.TotalPrice>
        </S.TotalPriceCal>
      </S.Wrapper>
      <Footer />
    </>
  );
}
