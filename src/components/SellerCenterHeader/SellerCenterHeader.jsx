import logo from "../../assets/img/Logo-SopShop.png";
import * as S from "./SellerCenterHeaderStyle";

export default function SellerCenterHeader() {
  return (
    <>
      <S.Wrapper>
        <S.StyledLink to={`/`}>
          <S.LogoImage src={logo} />
        </S.StyledLink>
        <S.Title>판매자 센터</S.Title>
      </S.Wrapper>
    </>
  );
}
