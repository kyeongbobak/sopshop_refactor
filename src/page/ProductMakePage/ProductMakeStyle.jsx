import styled, { css } from "styled-components";

export const WrapperCommonStyle = css`
  div {
    display: flex;
  }

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    background-color: var(--gray-color);
    font-family: "Pretendard";
    font-size: var(--font-min-size);
    color: white;
    text-align: center;
  }
`;

export const InputCommonStyle = css`
  width: 170px;
  height: 35px;
  border: 1px solid var(--gray-color);
  display: flex;
`;

export const Wrapper = styled.div`
  width: 1280px;
  height: 884px;
  margin: 100px 0 0 23%;
`;

export const ProductImageWrapper = styled.div``;

export const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    display: inline-block;
    padding-bottom: 6px;
    font-family: "Pretendard";
    font-size: var(--font-sm-size);
  }
`;

export const ProductNameWrapper = styled.div`
  ${WrapperCommonStyle}
`;

export const ProductPriceWrapper = styled.div`
  ${WrapperCommonStyle}
`;

export const DeliveryMethodWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  button {
    width: 220px;
    height: 35px;
    font-family: "Pretendard";
    font-size: var(--font-min-size);
    text-align: center;
  }
`;

export const ShippingFeeWrapper = styled.div`
  ${WrapperCommonStyle}
`;

export const StockWrapper = styled.div`
  ${WrapperCommonStyle}
`;

export const Form = styled.form`
  display: flex;
  gap: 40px;
`;

export const Label = styled.label`
  div {
    width: 454px;
    height: 454px;
    background-color: var(--gray-color);
    text-align: center;
    padding-top: 202px;
    box-sizing: border-box;
  }
`;

export const ProductImage = styled.img`
  width: 454px;
  height: 454px;
  object-fit: cover;
`;

export const IconImage = styled.img``;

export const ProductNameInput = styled.input`
  width: 826px;
  height: 35px;
  border: 1px solid var(--gray-color);
`;

export const Input = styled.input`
  ${InputCommonStyle}
`;

export const DeliveryBtn = styled.button`
  background-color: var(--black-color);
  color: white;
`;

export const DirectDeliveryBtn = styled.button`
  border: 1px solid var(--gray-color);
  margin-left: 10px;
`;
