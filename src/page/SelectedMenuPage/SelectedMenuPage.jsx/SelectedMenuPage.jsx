import { useCallback, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../api/Product";
import * as MS from "../../MainPage/MainPageStyle";
import * as S from "./SelectedMenuPageStyle";
import TopNavBar from "../../../components/TopNavBar/TopNavBar";
import SideMenu from "../../../components/SideMenu/SideMenu";
import ProductItem from "../../../components/ProductItem/ProductItem";
import Footer from "../../../components/Footer/Footer";

export default function SelectedMenuPage() {
  const { selectedMenu } = useParams();
  const [productList, setProductList] = useState([]);

  const getBrandProductList = useCallback(async () => {
    const res = await getProducts();
    const data = res.results;
    const SelectedBrandProducts = data.filter((i) => i.store_name === selectedMenu);
    setProductList(SelectedBrandProducts);
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
            <MS.ProductList>{memoizedBrandProductList}</MS.ProductList>
            {!!productList && <S.Contents>Empty</S.Contents>}
          </S.MenuContentsWrapper>
        </S.Wrapper>
        <Footer />
      </div>
    </>
  );
}
