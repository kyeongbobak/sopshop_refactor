import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import CartTabTitle from "../../components/TabTitle/CartTabTitle/CartTabTitle";
import Footer from "../../components/Footer/Footer";
import useCartList from "../../hook/useCartList";

export default function CartPage() {
  const token = useRecoilValue(userToken);
  const { cartList } = useCartList(token);
  console.log(cartList);

  return (
    <>
      <TopNavBar />
      <CartTabTitle />
      <Footer />
    </>
  );
}
