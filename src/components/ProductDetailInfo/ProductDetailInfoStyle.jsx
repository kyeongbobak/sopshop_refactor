import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const ProductDetailWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const ProductImage = styled.img`
  width: 600px;
  height: 720px;
  object-fit: cover;
`;

export const ProductBrandName = styled.p`
  margin-bottom: 16px;
  font-size: var(--font-md-size);
  font-weight: var(--font-bold);
`;

export const ProductName = styled.p`
  font-family: "Pretendard";
  font-size: var(--font-max-size);
  font-weight: var(--font-extra-light);
`;

export const ProductPrice = styled.p`
  margin-top: 20px;
  font-size: var(--font-max-size);
  span {
    font-size: var(--font-lg-size);
    font-weight: var(--font-light);
  }
`;

export const OrderDetail = styled.div`
  display: flex;
  font-family: "Pretendard";
  font-size: var(--font-lg-size);
  justify-content: space-between;
  padding-top: 30px;
  margin-top: auto;

  span {
    font-weight: var(--font-extra-light);
  }

  strong {
    font-size: var(--font-max-size);
    &::before {
      display: inline-block;
      content: "";
      width: 2px;
      height: 15px;
      background-color: var(--black-color);
      margin: 0 12px;
    }
  }
`;

export const ShippingInfo = styled.p`
  padding-bottom: 20px;
  margin-top: 138px;
  border-bottom: 1px solid var(--gray-color);
  font-family: "Pretendard";
  font-size: var(--font-md-size);
  color: var(--black-color);
`;

export const ProductTotalPrice = styled.p`
  font-size: var(--font-max-size);
`;

export const ButtonCommonStyle = css`
  padding: 19px 0;
  margin-top: 22px;
  text-align: center;
  font-size: var(--font-sm-size);
  font-weight: var(--font-medium);
`;

export const BuyButton = styled.button`
  ${ButtonCommonStyle}
  width: 516px;
  background-color: var(--black-color);
  color: var(--white-color);
`;

export const MButton = styled.button`
  ${ButtonCommonStyle}
  width: 200px;
  margin-left: 8px;
  border: 1px solid var(--black-color);
  color: var(--black-color);
`;
