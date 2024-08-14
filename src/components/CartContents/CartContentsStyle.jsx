import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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

export const CartListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const ActionBtnWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0 30px 0;
  justify-content: end;

  button {
    font-size: var(--font-sm-size);
  }
`;

export const NavigationBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 50px;

  button {
    padding: 15px 20px;
  }
`;

export const CountControlWrapper = styled.div`
  margin: 0 74px;
`;

export const ProductPriceWrapper = styled.div`
  width: 300px;
  text-align: center;
`;

export const Contents = styled.div`
  margin: 200px 0 30px 0;
  text-align: center;
  font-size: var(--font-md-size);
  color: var(--gray-color);
`;

export const CheckBox = styled.input`
  margin: 0 250px 0 31px;
  width: 16px;
  height: 16px;
`;

export const ProductInfoCommonStyle = css`
  font-family: "Pretendard";
  font-size: var(--font-md-size);
  margin-top: 20px;
`;

export const StoreName = styled.div`
  ${ProductInfoCommonStyle}
  font-family: "Pretendard";
  font-size: var(--font-sm-size);
  font-weight: var(--font-extra-bold);
  color: var(--black-color);
`;

export const StyledLink = styled(Link)`
  ${ProductInfoCommonStyle}
`;

export const Price = styled.div`
  ${ProductInfoCommonStyle}
  font-weight: var(--font-semi-bold);
`;

export const ShippingMethod = styled.div`
  ${ProductInfoCommonStyle}
  font-weight: var(--font-semi-bold);
`;

export const ButtonCommonStyle = css`
  font-size: var(--font-sm-size);
  text-align: center;
  border: 1px solid #222;
`;

export const SelectOrderBtn = styled.button`
  ${ButtonCommonStyle}
  background-color: var(--black-color);
  color: var(--white-color);
  padding: 10px 30px;
`;

export const AllOrderBtn = styled.button`
  ${ButtonCommonStyle}
  width: 100px;
`;

export const GoToMainBtn = styled.button`
  ${ButtonCommonStyle}
`;

export const TotalProductPrice = styled.p`
  font-family: "Pretendard";
  font-size: var(--font-md-size);
  font-weight: var(--font-semi-bold);
  margin-bottom: 28px;
`;

export const TotalPriceCal = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);
  gap: 10px;
  font-family: "Pretendard";

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
