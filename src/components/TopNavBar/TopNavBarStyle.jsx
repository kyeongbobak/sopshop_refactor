import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 150px 70px;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)``;

export const NavBar = styled.ul`
  position: absolute;
  top: 110px;
  right: 70px;
  vertical-align: top;
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: var(--font-lg-size);
  font-weight: var(--font-light);
`;

export const MenuButton = styled.button`
  img {
    width: 32px;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }`;

const slideOut = keyframes`  
from {
  transform: translateX(0);
}
to {
  transform: translateX(100%);
}`;

export const SideNavBarOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.5);

  &.slideIn {
    animation: ${slideIn} 0.6s forwards;
  }

  &.slideOut {
    animation: ${slideOut} 0.6s forwards;
  }
`;

export const SideNavBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: #ffffff;
  z-index: 9999;

  &.slideIn {
    animation: ${slideIn} 0.6s forwards;
  }

  &.slideOut {
    animation: ${slideOut} 0.6s forwards;
  }

  ul {
    font-size: var(--font-lg-size);
    font-weight: var(--font-light);
    padding: 60px 50px;
  }

  li {
    padding: 12px 0;
  }
`;
