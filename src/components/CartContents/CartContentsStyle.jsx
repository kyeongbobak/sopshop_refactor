import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  margin: 0 auto;
`;

export const ContentsWrapper = styled.div`
  text-align: center;
  button {
    margin-bottom: 300px;
    padding: 15px 30px;
    border: 1px solid #222;
    font-size: var(--font-sm-size);
    font-weight: var(--font-medium);
  }
`;

export const Contents = styled.div`
  margin: 200px 0 30px 0;
  text-align: center;
  color: var(--gray-color);
  font-size: var(--font-md-size);
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

export const BrandName = styled.p`
  font-size: var(--font-sm-size);
  font-weight: var(--font-extra-bold);
  color: var(--black-color);
`;

export const CommonPStyle = css`
  font-size: var(--font-md-size);
  margin-top: 20px;
`;

export const Name = styled.p`
  ${CommonPStyle}
`;

export const ShippingInfo = styled.p`
  ${CommonPStyle}
  font-weight: var(--font-semi-bold);
`;

export const Price = styled.p`
  ${CommonPStyle}
  font-weight: var(--font-semi-bold);
`;

export const CountControlWrapper = styled.div`
  margin: 0 74px;
`;

export const ProductPriceWrapper = styled.div`
  width: 300px;
  text-align: center;
`;

export const ButtonCommonStyle = css`
  font-size: var(--font-sm-size);
  text-align: center;
  border: 1px solid #222;
`;

export const SelectOrderButton = styled.button`
  ${ButtonCommonStyle}
  background-color: var(--black-color);
  color: var(--white-color);
  padding: 10px 30px;
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
  margin: 30px 0 30px 0;
  justify-content: end;

  button {
    font-size: var(--font-sm-size);
  }
`;

export const TotalPriceCal = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);
  gap: 10px;

  span {
    font-size: var(--font-md-size);
    font-weight: var(--font-regular);
  }

  p {
    font-family: "Pretendard";
    font-size: var(--font-lg-size);
    font-weight: var(--font-semi-bold);
  }
`;

export const AllOrderButton = styled.button`
  ${ButtonCommonStyle}
  width: 100px;
  margin: 50px auto;
  padding: 15px 20px;
`;
