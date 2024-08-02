import styled, { css } from "styled-components";

export const ButtonCommonStyle = css`
  width: 80px;
  height: 30px;
  text-align: center;
  font-family: "Pretendard";
  font-size: var(--font-sm-size);
`;

export const Wrapper = styled.div`
  width: 1280px;
  height: 884px;
  margin: 100px 0 0 23%;
  border-right: 1px solid var(--black-color);
  border-left: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);
`;

export const SellingProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const ProductInfoWrapper = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  box-sizing: border-box;
`;

export const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "Pretendard";
  font-size: var(--font-md-size);
`;

export const ProductImage = styled.img`
  width: 130px;
`;

export const ProductName = styled.p`
  font-size: var(--font-md-size);
  font-weight: var(--font-extra-bold);
`;

export const ProductStock = styled.p``;

export const ProductPrice = styled.p`
  width: 320px;
  text-align: center;
  font-family: "Pretendard";
  font-size: var(--font-md-size);
`;

export const ButtonWrapper = styled.div`
  width: 300px;
  text-align: center;
`;

export const ModifyBtn = styled.button`
  ${ButtonCommonStyle}
  background-color: var(--black-color);
  color: white;
`;
export const DeleteBtn = styled.button`
  ${ButtonCommonStyle}
  background-color: var(--white-color);
  border: 1px solid var(--black-color);
`;
