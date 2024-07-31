import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import Footer from "../../components/Footer/Footer";
import * as S from "./MyPageStyle";
import * as CS from "../../page/CartPage/CartPageStyle";
import MyPageTabTitle from "../../components/TabTitle/MyPageTabTitle/MyPageTabTitle";

export default function MyPage() {
  return (
    <>
      <TopNavBar />
      <SideMenu />
      <CS.PageTitle>MyPage</CS.PageTitle>
      <MyPageTabTitle />
      <S.Wrapper></S.Wrapper>
      <Footer />
    </>
  );
}
