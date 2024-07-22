import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const OrderListWrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    font-family: "Pretendard";
    font-size: var(--font-md-size);
  }
`;

export const ProductInfo = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 40px 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;

    p {
      font-family: "Pretendard";
      padding-bottom: 20px;
    }
  }
`;

export const Image = styled.img`
  width: 104px;
  height: 104px;
  object-fit: cover;
`;

export const Name = styled.p`
  font-weight: var(--font-semi-bold);
`;

export const OrderListCommonStyle = css`
  width: 300px;
  font-weight: var(--font-semi-bold);
  font-size: var(--font-sm-size);
  text-align: center;
`;

export const DisCount = styled.div`
  width: 180px;
  text-align: center;
`;

export const ShippingMethod = styled.div`
  ${OrderListCommonStyle}
`;

export const OrderPrice = styled.div`
  ${OrderListCommonStyle}
`;
