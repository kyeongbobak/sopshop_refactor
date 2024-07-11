import styled from "styled-components";

export const Tabs = styled.ul`
  display: flex;
  width: 1250px;
  margin-top: 141px;
`;

export const TabItem = styled.li`
  /*  */
  width: 100%;
  text-align: center;
  font-size: var(--font-sm-size);
`;

export const TabItemBtn = styled.button`
  width: 100%;
  padding: 19px 0;
  cursor: pointer;
  border-bottom: 6px solid #e0e0e0;

  &.active {
    border-bottom: 6px solid var(--black-color);
  }
`;

export const Contents = styled.div`
  height: 300px;
  font-size: var(--font-md-size);
  padding: 20px;
`;
