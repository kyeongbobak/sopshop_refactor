import { useCallback, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../api/Product";
import TopNavBar from "../../../components/TopNavBar/TopNavBar";
import SideMenu from "../../../components/SideMenu/SideMenu";
import ProductItem from "../../../components/ProductItem/ProductItem";
import Footer from "../../../components/Footer/Footer";
import * as MS from "../../MainPage/MainPageStyle";
import * as S from "./SelectedMenuPageStyle";

export default function SelectedMenuPage() {
  const [productList, setProductList] = useState([]);

  const { selectedMenu } = useParams();

  const getBrandProductList = useCallback(async () => {
    const res = await getProducts();
    const data = res.results;
    const selectedBrandProducts = data.filter((i) => i.store_name === selectedMenu);
    setProductList(selectedBrandProducts);
  }, [selectedMenu]);

  useEffect(() => {
    getBrandProductList();
  }, [getBrandProductList]);

  // 성능 최적화를 위해 useMemo 사용
  const memoizedBrandProductList = useMemo(
    () => productList.map((list) => <ProductItem key={list.product_id} productId={list.product_id} productImage={list.image} productBrandName={list.store_name} productName={list.product_name} productPrice={list.price} />),
    [productList]
  );

  return (
    <>
      <TopNavBar />
      <SideMenu />
      <div>
        <S.Wrapper>
          <S.MenuContentsWrapper>
            <S.MenuName>{selectedMenu}</S.MenuName>
            {productList.length === 0 ? <S.Contents>Empty</S.Contents> : <MS.ProductList>{memoizedBrandProductList}</MS.ProductList>}
          </S.MenuContentsWrapper>
        </S.Wrapper>
        <Footer />
      </div>
    </>
  );
}
