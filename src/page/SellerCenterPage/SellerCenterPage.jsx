import SellerCenterHeader from "../../components/SellerCenterHeader/SellerCenterHeader";
import SellerCenterSideMenu from "../../components/SellerCenterSideMenu/SellerCenterSideMenu";
import * as S from "./SellerCenterPageStyle";

export default function SellerCenterPage() {
  return (
    <>
      <SellerCenterHeader />
      <SellerCenterSideMenu />
      <S.Wrapper></S.Wrapper>
    </>
  );
}
