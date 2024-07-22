import styled, { css } from "styled-components";

export const Tabs = styled.ul`
  display: table;
  width: 100%;
  font-family: "Pretendard";
  font-size: var(--font-md-size);
  text-align: center;
`;

export const TabItem = styled.li`
  display: table-cell;
`;

export const CommonTabItemBtnStyle = css`
  width: 100%;
  height: 67px;
  border: 1px solid var(--gray-color);
  z-index: 2;
  background-color: var(--light-gray-color);
  cursor: pointer;
`;

export const TabItemBtn = styled.button`
  ${CommonTabItemBtnStyle}

  &.active {
    border: 1px solid var(--gray-color);
    border-bottom: 0;
    background-color: white;
  }
`;
