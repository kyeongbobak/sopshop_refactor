import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white-color);
  width: 360px;
  padding: 50px 70px 40px;
  border: 1px solid var(--gray-color);

  font-size: 17px;
  line-height: 22px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  p {
    text-align: center;
    font-family: "Pretendard";
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 220px;
  margin-top: 30px;
  z-index: 101;
  font-family: "Pretendard";
`;

export const SButton = styled.button`
  width: 60px;
  padding: 10px 20px;
  background-color: var(--black-color);
  color: var(--white-color);
  font-size: var(--font-sm-size);
  text-align: center;
`;
