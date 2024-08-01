import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const ProductInfoWrapper = styled.div`
  width: 600px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const ProductImage = styled.img`
  width: 300px;
`;

export const ProductInfoCommonStyle = css`
  font-family: "Pretendard";
  font-size: var(--font-md-size);
`;

export const ProductStoreName = styled.p`
  ${ProductInfoCommonStyle}
  padding-bottom: 10px;
  font-weight: var(--font-extra-bold);
`;
export const ProductName = styled.p`
  ${ProductInfoCommonStyle}
  font-weight: var(--font-medium);
`;

export const OrderDetailCommonStyle = css`
  width: 300px;
  text-align: center;
  font-family: "Pretendard";
  font-size: var(--font-md-size);
  font-weight: var(--font-extra-bold);
`;

export const ProductCount = styled.p`
  ${OrderDetailCommonStyle}
`;

export const ProductPrice = styled.p`
  ${OrderDetailCommonStyle}
`;

export const PayMentMethod = styled.p`
  ${OrderDetailCommonStyle}
`;

export const OrderStatus = styled.p`
  ${OrderDetailCommonStyle}
`;
