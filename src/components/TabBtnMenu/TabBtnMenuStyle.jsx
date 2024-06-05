import styled, { css } from "styled-components";

export const Tabs = styled.ul`
  display: table;
  width: 100%;
  font-size: var(--font-lg-size);
  text-align: center;
`;

export const TabItem = styled.li`
  display: table-cell;
`;

export const CommonTabItemBtnStyle = css`
  width: 100%;
  height: 67px;
  background-color: var(--light-gray-color);
  border: 1px solid var(--gray-color);
  cursor: pointer;
  z-index: 2;
`;

export const TabItemBtn = styled.button`
  ${CommonTabItemBtnStyle}

  &.active {
    background-color: white;
    border: 1px solid var(--gray-color);
    border-bottom: 0;
  }
`;
