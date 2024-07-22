import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 0;

  div {
    width: 150px;
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid var(--gray-color);
  }

  button {
    width: 50px;
  }

  p {
    width: 50px;
    padding: 15px 0;
    border-left: 1px solid var(--gray-color);
    border-right: 1px solid var(--gray-color);
    font-size: var(--font-sm-size);
  }
`;
