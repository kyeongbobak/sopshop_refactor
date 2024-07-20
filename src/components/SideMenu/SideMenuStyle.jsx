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
  padding: 10px 15px 10px 15px;
  margin-left: 70px;
  border: none;
  border-bottom: 1px solid var(--black-color);
  outline: none;
  font-size: var(--font-sm-size);
  margin-top: 100px;
  position: relative;
`;
