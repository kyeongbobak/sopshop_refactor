import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import CartTabTitle from "../../components/TabTitle/CartTabTitle/CartTabTitle";
import CartContents from "../../components/CartContents/CartContents";
import Footer from "../../components/Footer/Footer";
import * as S from "./CartPageStyle";

export default function CartPage() {
  return (
    <>
      <TopNavBar />
      <SideMenu />
      <S.PageTitle>Cart</S.PageTitle>
      <CartTabTitle />
      <CartContents />
      <Footer />
    </>
  );
}
