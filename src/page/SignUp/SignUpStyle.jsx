import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const Label = styled.label`
  padding: 12px 0;
  font-size: var(--font-md-size);

  &:nth-child(7) {
    margin-top: 50px;
  }
`;

export const CommonIntputStyle = css`
  height: 54px;
  border: 1px solid var(--gray-color);
  border-radius: 5px;
`;

export const Input = styled.input`
  ${CommonIntputStyle}
  flex-grow: 1;
  font-size: var(--font-md-size);
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 28px;
  }
`;

export const PhoneNumberInput = styled.input`
  ${CommonIntputStyle}
  width: 152px;
`;

export const ConfirmButton = styled.button`
  padding: 17px 37px;
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

export const CheckBox = styled.input``;

export const SectionContents = styled.p`
  span {
    font-weight: var(--font-regular);
  }
`;
