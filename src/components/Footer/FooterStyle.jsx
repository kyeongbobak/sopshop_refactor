import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 0 30px 0 30px;
  font-family: "Pretendard";
  font-size: var(--font-sm-size);

  ul > li:nth-child(3) > a {
    font-weight: var(--font-extra-bold);
  }
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 200px 0 22px;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 30px;
  border-top: 1px solid var(--gray-color);
  line-height: 30px;

  strong {
    font-weight: var(--font-extra-bold);
  }

  strong,
  p {
    font-family: "Pretendard";
  }
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  cursor: pointer;

  + li::before {
    content: "|";
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
  }
`;

export const StyledLink = styled(Link)``;

export const SnSLink = styled(Link)`
  margin-right: 10px;
`;

export const SnSLogoImage = styled.img`
  width: 32px;
`;
