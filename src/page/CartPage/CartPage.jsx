import TopNavBar from "../../components/TopNavBar/TopNavBar";
import CartTabTitle from "../../components/TabTitle/CartTabTitle/CartTabTitle";
import Footer from "../../components/Footer/Footer";
import CartProductList from "../../components/CartProductList/CartProductList";

export default function CartPage() {
  return (
    <>
      <TopNavBar />
      <CartTabTitle />
      <CartProductList />
      <Footer />
    </>
  );
}
