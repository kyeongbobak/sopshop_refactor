import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  padding: 10px 0;
  box-shadow: -2px 1px 9px 2px rgba(216, 211, 211, 1);
`;

export const StyledLink = styled(Link)``;

export const LogoImage = styled.img`
  width: 200px;
`;

export const Title = styled.h1`
  font-family: "Pretendard";
  font-size: var(--font-max-size);
`;
