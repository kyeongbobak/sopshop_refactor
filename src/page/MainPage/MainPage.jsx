import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { getProducts } from "../../api/Product";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideBar from "../../components/SideBar/SideBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import Footer from "../../../src/components/Footer/Footer";
import * as S from "../MainPage/MainPageStyle";

export default function MainPage() {
  const [productList, setProductList] = useState([]);

  const token = useRecoilValue(userToken);

  useEffect(() => {
    const getProductList = async () => {
      const res = await getProducts(token);
      console.log(res);
      const mainPageProductList = res.results.slice(0, 10);
      setProductList(mainPageProductList);
    };

    getProductList();
  }, [token]);

  return (
    <>
      <TopNavBar />
      <SideBar />
      <S.ProductList>
        {productList.map((list) => (
          <ProductItem key={list.product_id} productId={list.product_id} productImage={list.image} productBrandName={list.store_name} productName={list.product_name} productPrice={list.price} productStock={list.stock} />
        ))}
      </S.ProductList>
      <Footer />
    </>
  );
}
