import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const ContentsWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;

  p {
    font-size: var(--font-sm-size);
    font-weight: var(--font-light);
  }

  span {
    font-weight: var(--font-regular);
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 50px;
`;
