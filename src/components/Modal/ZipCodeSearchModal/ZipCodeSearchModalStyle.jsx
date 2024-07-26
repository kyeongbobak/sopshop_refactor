import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px; /* 모달 너비 */
  height: 500px; /* 모달 높이 */
`;
