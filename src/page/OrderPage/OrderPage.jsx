import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideBar from "../../components/SideBar/SideBar";
import TabTitle from "../../components/TabTitle/TabTitle";
import OrderList from "../../components/OrderList/OrderList";
import OrderForm from "../../components/OrderForm/OrderForm";
import Footer from "../../components/Footer/Footer";
import * as CS from "../../page/CartPage/CartPageStyle";

export default function OrderPage() {
  const titles = ["상품정보", "할인", "배송비", "주문금액"];
  const styles = [{ width: 500 }, { width: 180 }, { width: 300 }];

  return (
    <>
      <TopNavBar />
      <SideBar />
      <CS.PageTitle>Order</CS.PageTitle>
      <TabTitle titles={titles} styles={styles} />
      <OrderList />
      <OrderForm />
      <Footer />
    </>
  );
}
