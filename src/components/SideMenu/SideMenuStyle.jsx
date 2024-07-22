import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 170px;
  margin-left: 1%;
  position: fixed;
  z-index: 1000;
  font-size: var(--font-md-size);
  ul {
    font-size: var(--font-md-size);
    padding-left: 70px;
  }

  div {
    margin: 40px 0 0 25px;

    &:nth-child(1) {
      color: var(--main-color);
    }
  }

  li {
    margin-top: 15px;
    font-weight: var(--font-light);
  }

  li:nth-child(4) {
    margin-top: 80px;
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

export const Form = styled.form`
  span {
    font-size: var(--font-sm-size);
    font-weight: var(--font-extra-light);
    position: absolute;
    margin: 80px 0 0 70px;
  }
`;

export const Input = styled.input`
  width: 110px;
  position: relative;
  padding: 10px 15px 10px 15px;
  margin: 100px 0 0 70px;
  border-bottom: 1px solid var(--black-color);
  font-size: var(--font-sm-size);
`;
