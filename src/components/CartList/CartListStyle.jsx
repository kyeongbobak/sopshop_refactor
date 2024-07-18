import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  margin: 0 auto;
`;

export const CheckBox = styled.input`
  margin: 0 250px 0 31px;
  width: 16px;
  height: 16px;
`;

export const CartListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  p {
    font-family: "Pretendard";
  }
`;

export const ProductBrandName = styled.p`
  font-size: var(--font-sm-size);
  font-weight: var(--font-extra-bold);
  color: var(--black-color);
`;

export const ProductName = styled.p`
  font-size: var(--font-sm-size);
  margin-top: 20px;
`;

export const ShippingInfo = styled.p`
  font-size: var(--font-md-size);
  font-weight: var(--font-semi-bold);
  margin-top: 20px;
`;

export const ProductPrice = styled.p`
  font-size: var(--font-md-size);
  font-weight: var(--font-semi-bold);
  margin-top: 20px;
`;

export const CountControlWrapper = styled.div`
  margin: 0 74px;
`;

export const ProductPriceWrapper = styled.div`
  width: 300px;
  text-align: center;
`;

export const TotalProductPrice = styled.p`
  font-family: "Pretendard";
  font-size: var(--font-md-size);
  font-weight: var(--font-semi-bold);
  margin-bottom: 28px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 80px 0 50px 0;
  justify-content: end;

  button {
    font-size: var(--font-sm-size);
  }
`;
