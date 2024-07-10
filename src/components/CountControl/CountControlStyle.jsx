import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid var(--gray-color);
  div {
    width: 150px;
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid var(--gray-color);

    text-align: center;
  }

  button {
    width: 50px;
  }
  p {
    width: 50px;
    font-size: var(--font-sm-size);
    border-left: 1px solid var(--gray-color);
    border-right: 1px solid var(--gray-color);
    padding: 15px 0;
  }
`;
