import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: absolute;
  padding-left: 60px;
  margin-top: 100px;

  ul {
  }

  li {
    width: 210px;
    padding: 15px;
    font-family: "Pretendard";
    font-size: var(--font-lg-size);
    border-radius: 5px;
    text-align: center;
  }

  li:nth-child(1) {
    background-color: var(--main-color);

    &.active {
      background-color: var(--gray-color);
      transition: background-color 0.3s ease, color 0.3s ease;
    }
  }

  .active {
    background-color: var(--gray-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export const SubTitle = styled.h2``;

export const StyledLink = styled(Link)``;
