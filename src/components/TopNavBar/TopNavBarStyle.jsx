import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 70px;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)``;

export const NavBar = styled.ul`
  position: absolute;
  top: 60px;
  right: 70px;
  vertical-align: top;
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: var(--font-max-size);
  font-weight: var(--font-light);
`;

export const MenuButton = styled.button`
  img {
    width: 35px;
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
    animation: ${slideIn} 0.3s forwards;
  }

  &.slideOut {
    animation: ${slideOut} 0.3s forwards;
  }
`;

export const SideNavBar = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background: #ffffff;
  z-index: 9999;

  &.slideIn {
    animation: ${slideIn} 0.3s forwards;
  }

  &.slideOut {
    animation: ${slideOut} 0.3s forwards;
  }
`;
