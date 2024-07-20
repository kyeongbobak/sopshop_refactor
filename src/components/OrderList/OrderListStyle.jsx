import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const OrderListWrapper = styled.div`
  display: flex;
  align-items: center;

  div:nth-child(1) {
    width: 500px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 40px 0;
  }

  p {
    font-family: "Pretendard";
    font-size: var(--font-md-size);
  }
`;

export const Image = styled.img`
  width: 104px;
  height: 104px;
  object-fit: cover;
`;

export const BrandName = styled.p`
  padding-bottom: 20px;
`;

export const Name = styled.p`
  font-weight: var(--font-semi-bold);
  padding-bottom: 20px;
`;

export const CommonPStyle = css`
  font-weight: var(--font-semi-bold);
  text-align: center;
`;

export const DisCount = styled.p`
  ${CommonPStyle}
  width: 180px;
`;

export const ShippingInfo = styled.p`
  ${CommonPStyle}
  width: 300px;
`;

export const TotalPrice = styled.p`
  ${CommonPStyle}
  width: 300px;
`;

export const TotalOrderPrice = styled.div``;
