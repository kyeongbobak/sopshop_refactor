import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideBar from "../../components/SideBar/SideBar";

import CartContents from "../../components/CartContents/CartContents";
import Footer from "../../components/Footer/Footer";
import * as S from "./CartPageStyle";

export default function CartPage() {
  return (
    <>
      <TopNavBar />
      <SideBar />
      <S.PageTitle>Cart</S.PageTitle>
      <CartContents />
      <Footer />
    </>
  );
}
