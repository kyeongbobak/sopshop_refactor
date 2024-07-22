import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyleLink = styled(Link)``;

export const Image = styled.img`
  width: 320px;
  height: 380px;
  object-fit: cover;
`;

export const BrandName = styled.p`
  margin-top: 17px;
  font-size: var(--font-min-size);
  font-weight: var(--font-medium);
  color: var(--box-black-color);
`;
export const Name = styled(Link)`
  display: inline-block;
  margin-top: 15px;
  font-family: "Pretendard";
  font-size: var(--font-sm-size);
  font-weight: var(--font-thin);
`;
export const Price = styled.p`
  margin-top: 15px;
  font-family: "Pretendard";
  font-size: var(--font-md-size);
`;
