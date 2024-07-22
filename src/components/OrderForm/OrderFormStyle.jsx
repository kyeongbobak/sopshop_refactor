import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1280px;
  margin: 100px auto;
  font-family: "Pretendard";
`;

export const BuyerInfoWrapper = styled.div`
  div {
    border-bottom: 1px solid var(--black-color);
    padding: 10px 0;
  }
`;

export const PhoneInputWrapper = styled.div`
  input:nth-child(2) {
    width: 80px;
  }

  input:nth-child(4),
  input:nth-child(6) {
    width: 100px;
  }

  span {
    margin: 0 9px;
  }
`;

export const SubTitle = styled.h2`
  padding-bottom: 18px;
  border-bottom: 1px solid var(--black-color);
  font-size: var(--font-max-size);
`;

export const SectionTitle = styled.h3`
  padding: 18px 0;
  margin-top: 40px;
  border-bottom: 1px solid var(--black-color);
  font-size: var(--font-lg-size);
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: inline-block;
  width: 80px;
  padding-right: 15px;
  font-size: var(--font-md-size);
`;

export const Input = styled.input`
  width: 334px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid var(--black-color);
  font-size: var(--font-md-size);
`;

export const Button = styled.button``;
