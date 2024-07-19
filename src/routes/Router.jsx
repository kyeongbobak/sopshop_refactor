import { Route, Routes } from "react-router-dom";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import MainPage from "../page/MainPage/MainPage";
import SearchPage from "../page/SearchPage/SearchPage";
import SelectedMenuPage from "../page/SelectedMenuPage/SelectedMenuPage.jsx/SelectedMenuPage";
import ProductDetail from "../page/ProductDetailPage/ProductDetailPage";
import CartPage from "../page/CartPage/CartPage";
import OrderPage from "../page/OrderPage/OrderPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/:selectedMenu" element={<SelectedMenuPage />}></Route>
        <Route path="/search/:searchKeyword" element={<SearchPage />}></Route>
        <Route path="/products/:ProductId" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
      </Routes>
    </>
  );
}
