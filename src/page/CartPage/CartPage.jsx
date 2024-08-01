import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import TabTitle from "../../components/TabTitle/TabTitle";
import CartContents from "../../components/CartContents/CartContents";
import Footer from "../../components/Footer/Footer";
import * as S from "./CartPageStyle";

export default function CartPage() {
  const titles = ["상품정보", "수량", "상품금액"];
  const styles = [{ width: 600 }];

  return (
    <>
      <TopNavBar />
      <SideMenu />
      <S.PageTitle>Cart</S.PageTitle>
      <TabTitle titles={titles} showCheckBox={true} styles={styles} />
      <CartContents />
      <Footer />
    </>
  );
}
