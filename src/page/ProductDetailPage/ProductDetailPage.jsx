import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import Footer from "../../components/Footer/Footer";
import ProductDetailInfo from "../../components/ProductDetailInfo/ProductDetailInfo";
import DetailPageTabs from "../../components/DetailPageTabs/DetailPageStyle";
import * as S from "./ProductDetailPageStyle";

export default function ProductDetailPage() {
  return (
    <>
      <TopNavBar />
      <S.Wrapper>
        <SideMenu />
        <S.ContentsWrapper>
          <ProductDetailInfo />
          <DetailPageTabs />
        </S.ContentsWrapper>
      </S.Wrapper>
      <Footer />
    </>
  );
}
