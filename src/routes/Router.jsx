import { Route, Routes } from "react-router-dom";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import MainPage from "../page/MainPage/MainPage";
import SelectedMenuPage from "../page/SelectedMenuPage/SelectedMenuPage.jsx/SelectedMenuPage";
import ProductDetail from "../page/ProductDetailPage/ProductDetailPage";
import CartPage from "../page/CartPage/CartPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/:selectedMenu" element={<SelectedMenuPage />}></Route>
        <Route path="/products/:ProductId" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </>
  );
}
