import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { search } from "../../api/Product";
import * as S from "./SearchPageStyle";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import ProductItem from "../../components/ProductItem/ProductItem";
import Footer from "../../components/Footer/Footer";

export default function SearchProduct() {
  const { searchKeyword } = useParams();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const getSearchProduct = async () => {
      const res = await search(searchKeyword);
      setSearchResult(res.results);
    };

    getSearchProduct();
  }, [searchKeyword]);

  return (
    <>
      <TopNavBar />
      <S.Wrapper>
        <SideMenu />
        <S.ContentsWrapper>
          <p>
            <span>{searchResult.length}</span> 개의 검색결과
          </p>
          <S.Contents>
            {searchResult.map((product) => (
              <ProductItem key={product.product_id} productId={product.product_id} productImage={product.image} productStoreName={product.store_name} productName={product.product_name} productPrice={product.price} />
            ))}
          </S.Contents>
        </S.ContentsWrapper>
      </S.Wrapper>
      <Footer />
    </>
  );
}
