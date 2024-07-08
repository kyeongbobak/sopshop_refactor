import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { getProducts } from "../../api/Product";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import Footer from "../../../src/components/Footer/Footer";
import * as M from "../MainPage/MainPageStyle";
import ProductItem from "../../components/ProductItem/ProductItem";

export default function MainPage() {
  const token = useRecoilValue(userToken);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const res = await getProducts(token);
      console.log(res.results);
      setProductList(res.results);
    };

    getProductList();
  }, [token]);

  return (
    <>
      <TopNavBar />
      <M.ProductList>
        {productList.map((product) => (
          <ProductItem key={product.product_id} productImage={product.image} productStoreName={product.store_name} productName={product.product_name} productPrice={product.price} />
        ))}
      </M.ProductList>
      <Footer />
    </>
  );
}
