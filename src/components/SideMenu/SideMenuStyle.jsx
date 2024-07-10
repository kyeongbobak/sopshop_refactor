import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 170px;
  margin-right: 70px;
  font-size: var(--font-md-size);

  ul {
    font-size: var(--font-md-size);
    padding-left: 70px;
  }

  li {
    margin-top: 15px;
    font-weight: var(--font-light);
  }

  li:nth-child(4) {
    margin-top: 80px;
  }

  div {
    margin: 40px 0 0 25px;

    &:nth-child(1) {
      color: var(--main-color);
    }
  }
`;

export const StyledLink = styled(Link)``;

export const BrandName = styled(Link)`
  display: flex;
  margin-bottom: 15px;

  &.active {
    color: var(--main-color);
    font-weight: var(--font-bold);
  }
`;
