import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1280px;
  margin: 0px auto;
`;

export const TotalPriceCal = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);
  span,
  p {
    font-family: "Pretendard";
    font-size: var(--font-lg-size);
    font-weight: var(--font-semi-bold);
  }
`;

export const ProductPrice = styled.p``;

export const TotalPrice = styled.p``;

export const ShippingFee = styled.p``;
