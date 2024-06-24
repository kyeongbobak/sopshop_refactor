import * as F from "./FooterStyle";
import Insta from "../../assets/img/icon-insta.png";
import FB from "../../assets/img/icon-fb.png";
import YT from "../../assets/img/icon-yt.png";

export default function Footer() {
  return (
    <>
      <F.Wrapper>
        <F.TopSection>
          <F.Ul>
            <F.Li>
              <F.StyledLink>회사소개</F.StyledLink>
            </F.Li>
            <F.Li>
              <F.StyledLink>이용약관</F.StyledLink>
            </F.Li>
            <F.Li>
              <F.StyledLink>개인정보처리방침</F.StyledLink>
            </F.Li>
            <F.Li>
              <F.StyledLink>전자금융거래약관</F.StyledLink>
            </F.Li>
            <F.Li>
              <F.StyledLink>청소년보호정책</F.StyledLink>
            </F.Li>
            <F.Li>
              <F.StyledLink>제휴문의</F.StyledLink>
            </F.Li>
          </F.Ul>
          <F.Ul>
            <F.SnSLink>
              <F.SnSLogoImage src={Insta} />
            </F.SnSLink>
            <F.SnSLink>
              <F.SnSLogoImage src={FB} />
            </F.SnSLink>
            <F.SnSLink>
              <F.SnSLogoImage src={YT} />
            </F.SnSLink>
          </F.Ul>
        </F.TopSection>
        <F.BottomSection>
          <strong>(주)SopShop</strong>
          <p>서울시 중구 신당동 마린 빌딩 2층</p>
          <p>사업자번호 123-1234-5678</p>
          <p>대표 박효리</p>
        </F.BottomSection>
      </F.Wrapper>
    </>
  );
}
