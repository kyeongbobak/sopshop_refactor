import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const ProductImage = styled.img`
  width: 600px;
  height: 720px;
  object-fit: cover;
`;

export const ProductDetailWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
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

export const ButtonWrapper = styled.div`
  display: flex;
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
  border: 1px solid var(--black-color);
  margin-left: 8px;
  color: var(--black-color);
`;
