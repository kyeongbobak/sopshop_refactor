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

export const TabItemBtnStyle = css`
  display: block;
  width: 100%;
  height: 67px;
  background-color: var(--light-gray-color);
  padding-top: 20px;
  border: 1px solid var(--gray-color);
  border-bottom: 0;

  box-sizing: border-box;

  cursor: pointer;
  z-index: 2;
`;

export const TabItemBtn = styled.button`
  ${TabItemBtnStyle}

  &.active {
    background-color: white;
    z-index: 4;
    border: 1px solid var(--gray-color);
    border-bottom: 0;
    border-right: 1px solid var(--gray-color);
  }
`;
