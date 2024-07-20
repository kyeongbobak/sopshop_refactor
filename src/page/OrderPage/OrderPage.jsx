import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import TabTitle from "../../components/TabTitle/OrderTabTitle/OrderTabTitle";
import OrderList from "../../components/OrderList/OrderList";
import Footer from "../../components/Footer/Footer";

export default function OrderPage() {
  return (
    <>
      <TopNavBar />
      <SideMenu />
      <TabTitle />
      <OrderList />
      <Footer />
    </>
  );
}
