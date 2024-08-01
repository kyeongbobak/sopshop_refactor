import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
  border-top: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);
  text-align: center;
  font-family: "Pretendard";
  font-size: var(--font-sm-size);
`;

export const CheckBox = styled.input`
  margin: 0 30px;
  width: 16px;
  height: 16px;
`;

export const TabTitleItem = styled.div`
  width: 300px;
`;
