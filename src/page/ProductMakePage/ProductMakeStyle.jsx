import styled, { css } from "styled-components";

export const WrapperCommonStyle = css`
  div {
    display: flex;
  }

  span {
    display: block;
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

export const ProductImageWrapper = styled.div`
  margin-right: 40px;
`;

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
    width: 207px;
    height: 40px;
    font-family: "Pretendard";
    font-size: var(--font-min-size);
    text-align: center;
    border: 1px solid var(--gray-color);

    &.active {
      background-color: var(--black-color);
      color: white;
    }
  }
`;

export const ShippingFeeWrapper = styled.div`
  ${WrapperCommonStyle}
`;

export const StockWrapper = styled.div`
  ${WrapperCommonStyle}
`;

export const ProductDetailInfoWrapper = styled.div`
  font-family: "Pretendard";
  margin-top: 45px;
  padding-bottom: 150px;

  span {
    display: inline-block;
    margin-bottom: 10px;
    font-size: var(--font-md-size);
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  button {
    width: 200px;
    height: 60px;
    text-align: center;
    margin-top: 45px;
    font-size: var(--font-md-size);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  display: flex;
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
  width: 600px;
  height: 35px;
  border: 1px solid var(--gray-color);
`;

export const Input = styled.input`
  ${InputCommonStyle}
`;

export const InfoContents = styled.div`
  width: 1280px;
  height: 700px;
  padding-top: 350px;
  text-align: center;
  background-color: var(--light-gray-color);
  box-sizing: border-box;
  font-size: var(--font-lg-size);
`;

export const CancelBtn = styled.button`
  border: 1px solid var(--gray-color);
`;

export const SavedBtn = styled.button`
  background-color: var(--main-color);
  margin-left: 10px;
`;
