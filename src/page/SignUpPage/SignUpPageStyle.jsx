import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    width: 28px;
    position: absolute;
    margin: 55px 0px 0px 440px;
  }
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  gap: 8px;

  img {
    width: 18px;
    position: absolute;
    margin-left: -27px;
    margin-top: -15px;
  }

  input {
    width: 150px;
    text-align: center;
    font-size: var(--font-md-size);
  }

  ul {
    width: 155px;
    height: 150px;
    border: 1px solid var(--gray-color);
    border-radius: 5px;
    font-size: var(--font-md-size);
    margin-top: 10px;
    overflow-y: auto;
    position: absolute;
    background-color: white;
  }

  ul::-webkit-scrollbar {
    width: 12px;
  }

  ul::-webkit-scrollbar-track {
    background: var(--light-gray-color);
  }

  ul::-webkit-scrollbar-thumb {
    background: var(--gray-color);
    border: 3px solid transparent;
    border-radius: 10px;
    background-clip: padding-box;
  }

  li {
    text-align: center;
    cursor: pointer;
    padding: 10px 0px;
    margin-left: 10px;
  }
`;

export const Label = styled.label`
  padding: 12px 0;
  font-size: var(--font-md-size);
`;

export const CommonIntputStyle = css`
  height: 54px;
  border: 1px solid var(--gray-color);
  border-radius: 2px;
  margin-bottom: 13px;
`;

export const Input = styled.input`
  ${CommonIntputStyle}
  flex-grow: 1;
  font-size: var(--font-md-size);
`;

export const FrontNumberInput = styled.input`
  ${CommonIntputStyle}
  position: relative;
`;

export const PhoneNumberInput = styled.input`
  ${CommonIntputStyle}
`;

export const ConfirmBtn = styled.button`
  height: 57px;
  padding: 0px 37px;
  border-radius: 5px;
  background-color: var(--main-color);
  font-size: var(--font-md-size);
  color: var(--white-color);
  text-align: center;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  gap: 5px;
  font-family: "Pretendard";
  font-size: var(--font-min-size);
  font-weight: var(--font-extra-light);
`;

export const SellerInputSection = styled.div`
  display: flex;
  flex-direction: column;

  & label:nth-child(1) {
    margin-top: 50px;
  }
`;

export const SectionContents = styled.p`
  span {
    font-weight: var(--font-regular);
  }
`;
