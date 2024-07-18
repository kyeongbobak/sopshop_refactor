import TopNavBar from "../../components/TopNavBar/TopNavBar";
import CartTabTitle from "../../components/TabTitle/CartTabTitle/CartTabTitle";
import CartContents from "../../components/CartContents/CartContents";
import Footer from "../../components/Footer/Footer";

export default function CartPage() {
  return (
    <>
      <TopNavBar />
      <CartTabTitle />
      <CartContents />
      <Footer />
    </>
  );
}
