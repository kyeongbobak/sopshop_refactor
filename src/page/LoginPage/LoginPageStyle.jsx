import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 550px;
  margin: 200px auto;
`;

export const LogoImg = styled(Link)`
  display: block;
  text-align: center;
  margin-bottom: 70px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 552px;
  border: 1px solid var(--gray-color);
  padding: 35px;
  margin-top: -1px;
  box-sizing: border-box;
  font-family: "Pretendard";
`;

export const Label = styled.label``;

export const Input = styled.input`
  border-bottom: 1px solid var(--gray-color);
  margin-bottom: 13px;
  padding: 20px 0;
  font-size: var(--font-md-size);
`;

export const ErrorMessage = styled.p`
  color: red;
  font-family: "Pretendard";
  font-weight: var(--font-medium);
  font-size: var(--font-sm-size);
`;

export const MButton = styled.button`
  margin-top: 20px;
  padding: 20px 213px;
  background-color: var(--black-color);
  color: white;
  font-family: "GmarketSans";
  font-size: var(--font-min-size);
  font-weight: var(--font-bold);
`;

export const StyledLinkWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  font-family: "GmarketSans";
  font-size: var(--font-min-size);
  font-weight: var(--font-medium);
`;
