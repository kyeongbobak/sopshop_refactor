import * as S from "./ProductDetailPageStyle";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import Footer from "../../components/Footer/Footer";
import ProductDetailInfo from "../../components/ProductDetailInfo/ProductDetailInfo";

export default function ProductDetail() {
  return (
    <>
      <TopNavBar />
      <S.Wrapper>
        <SideMenu />
        <S.ContentsWrapper>
          <ProductDetailInfo />
        </S.ContentsWrapper>
      </S.Wrapper>
      <Footer />
    </>
  );
}
