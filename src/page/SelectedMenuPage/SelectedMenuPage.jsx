import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../api/Product";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideBar from "../../components/SideBar/SideBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import Footer from "../../components/Footer/Footer";
import * as MS from "../MainPage/MainPageStyle";
import * as S from "./SelectedMenuPageStyle";

export default function SelectedMenuPage() {
  const [productList, setProductList] = useState([]);

  const { selectedMenu } = useParams();

  useEffect(() => {
    const getBrandProductList = async () => {
      const res = await getProducts();
      const data = res.results;
      const selectedBrandProducts = data.filter((i) => i.store_name === selectedMenu);
      setProductList(selectedBrandProducts);
    };

    getBrandProductList();
  }, [selectedMenu]);

  return (
    <>
      <TopNavBar />
      <SideBar />
      <div>
        <S.Wrapper>
          <S.MenuContentsWrapper>
            <S.MenuName>{selectedMenu}</S.MenuName>
            {productList.length === 0 ? (
              <S.Contents>Empty</S.Contents>
            ) : (
              <MS.ProductList>
                {productList.map((list) => (
                  <ProductItem key={list.product_id} productId={list.product_id} productImage={list.image} productBrandName={list.store_name} productName={list.product_name} productPrice={list.price} />
                ))}
              </MS.ProductList>
            )}
          </S.MenuContentsWrapper>
        </S.Wrapper>
        <Footer />
      </div>
    </>
  );
}
