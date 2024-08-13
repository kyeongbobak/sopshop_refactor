import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import ProductDetailInfo from "../../components/ProductDetailInfo/ProductDetailInfo";
import DetailPageTabs from "../../components/DetailPageTabs/DetailPageStyle";
import * as S from "./ProductDetailPageStyle";

export default function ProductDetailPage() {
  return (
    <>
      <TopNavBar />
      <S.Wrapper>
        <SideBar />
        <S.ContentsWrapper>
          <ProductDetailInfo />
          <DetailPageTabs />
        </S.ContentsWrapper>
      </S.Wrapper>
      <Footer />
    </>
  );
}
