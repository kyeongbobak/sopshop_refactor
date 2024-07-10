import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const ProductImage = styled.img`
  width: 600px;
  height: 620px;
  object-fit: cover;
`;

export const ProductDetailWrapper = styled.div`
  width: 600px;
`;

export const ProductBrandName = styled.p`
  font-size: var(--font-md-size);
  font-weight: var(--font-bold);
  margin-bottom: 16px;
`;

export const ProductName = styled.p`
  font-family: "Pretendard";
  font-size: var(--font-max-size);
  font-weight: var(--font-extra-light);
`;

export const ProductPrice = styled.p`
  font-size: var(--font-max-size);
  margin-top: 20px;
  span {
    font-size: var(--font-lg-size);
    font-weight: var(--font-light);
  }
`;

export const ShippingInfo = styled.p`
  font-family: "Pretendard";
  font-size: var(--font-md-size);
  color: var(--black-color);
  margin-top: 138px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--gray-color);
`;

export const ProductCountWrapper = styled.div``;

export const ProductTotalPrice = styled.p`
  font-size: var(--font-max-size);
`;

export const ButtonWrapper = styled.div``;

export const BuyButton = styled.button``;

export const MButton = styled.button``;
