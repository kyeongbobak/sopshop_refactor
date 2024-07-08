import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { getProducts } from "../../api/Product";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import Footer from "../../../src/components/Footer/Footer";
import * as S from "../MainPage/MainPageStyle";
import ProductItem from "../../components/ProductItem/ProductItem";

export default function MainPage() {
  const token = useRecoilValue(userToken);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const res = await getProducts(token);
      const mainPageProductList = res.results.slice(0, 10);
      setProductList(mainPageProductList);
    };

    getProductList();
  }, [token]);

  return (
    <>
      <TopNavBar />
      <S.Wrapper>
        <SideMenu />
        <S.ProductList>
          {productList.map((product) => (
            <ProductItem key={product.product_id} productId={product.product_id} productImage={product.image} productStoreName={product.store_name} productName={product.product_name} productPrice={product.price} />
          ))}
        </S.ProductList>
      </S.Wrapper>
      <Footer />
    </>
  );
}
