import * as S from "./FooterStyle";
import insta from "../../assets/img/icon-insta.png";
import fb from "../../assets/img/icon-fb.png";
import yt from "../../assets/img/icon-yt.png";

export default function Footer() {
  return (
    <>
      <S.Wrapper>
        <S.TopSection>
          <S.Ul>
            <S.Li>
              <S.StyledLink>회사소개</S.StyledLink>
            </S.Li>
            <S.Li>
              <S.StyledLink>이용약관</S.StyledLink>
            </S.Li>
            <S.Li>
              <S.StyledLink>개인정보처리방침</S.StyledLink>
            </S.Li>
            <S.Li>
              <S.StyledLink>전자금융거래약관</S.StyledLink>
            </S.Li>
            <S.Li>
              <S.StyledLink>청소년보호정책</S.StyledLink>
            </S.Li>
            <S.Li>
              <S.StyledLink>제휴문의</S.StyledLink>
            </S.Li>
          </S.Ul>
          <S.Ul>
            <S.SnSLink>
              <S.SnSLogoImage src={insta} />
            </S.SnSLink>
            <S.SnSLink>
              <S.SnSLogoImage src={fb} />
            </S.SnSLink>
            <S.SnSLink>
              <S.SnSLogoImage src={yt} />
            </S.SnSLink>
          </S.Ul>
        </S.TopSection>
        <S.BottomSection>
          <strong>(주)SopShop</strong>
          <p>서울시 중구 신당동 마린 빌딩 2층</p>
          <p>사업자번호 123-1234-5678</p>
          <p>대표 박효리</p>
        </S.BottomSection>
      </S.Wrapper>
    </>
  );
}
