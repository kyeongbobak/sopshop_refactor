import { useCallback, useEffect, useState, useMemo } from "react";
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

  // 메인 페이지는 렌더링이 빈번히 발생하는데 비해 주로 변경이 없는 이미지와 데이터를 표시하는 경우가 많기 때문에`useCallback`을 활용하여 불필요한 렌더링을 방지
  const getProductList = useCallback(async () => {
    const res = await getProducts(token);
    console.log(res);
    const mainPageProductList = res.results.slice(0, 10);
    setProductList(mainPageProductList);
  }, [token]);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  // productList가 변경되지 않는 한 동일한 상품 리스트를 반환하기 때문에 `useMemo`을 활용하여 불필요한 리렌더링 방지
  const memoizedProductList = useMemo(
    () => productList.map((list) => <ProductItem key={list.product_id} productId={list.product_id} productImage={list.image} productBrandName={list.store_name} productName={list.product_name} productPrice={list.price} productStock={list.stock} />),
    [productList]
  );

  return (
    <>
      <TopNavBar />
      <SideBar />
      <S.ProductList>{memoizedProductList}</S.ProductList>
      <Footer />
    </>
  );
}
