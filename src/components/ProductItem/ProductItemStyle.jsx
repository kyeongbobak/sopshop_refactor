import styled from "styled-components";
import { Link } from "react-router-dom";

export const Product = styled.li``;

export const ProductImage = styled.img`
  width: 320px;
  height: 380px;
  object-fit: cover;
`;
export const ProductStoreName = styled.p`
  color: var(--box-black-color);
  font-size: var(--font-min-size);
  font-weight: var(--font-medium);
  margin-top: 17px;
`;
export const ProductName = styled(Link)`
  font-family: "Pretendard";
  display: inline-block;
  font-size: var(--font-sm-size);
  font-weight: var(--font-thin);
  margin-top: 15px;
`;
export const ProductPrice = styled.p`
  font-size: var(--font-md-size);
  font-family: "Pretendard";
  margin-top: 15px;
`;
