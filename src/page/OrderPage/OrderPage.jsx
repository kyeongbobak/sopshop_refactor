import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import TabTitle from "../../components/TabTitle/OrderTabTitle/OrderTabTitle";
import OrderList from "../../components/OrderList/OrderList";
import OrderForm from "../../components/OrderForm/OrderForm";
import Footer from "../../components/Footer/Footer";
import * as CS from "../../page/CartPage/CartPageStyle";

export default function OrderPage() {
  return (
    <>
      <TopNavBar />
      <SideMenu />
      <CS.PageTitle>Order</CS.PageTitle>
      <TabTitle />
      <OrderList />
      <OrderForm />
      <Footer />
    </>
  );
}
