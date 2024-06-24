import * as H from "./TopNavBarStyle";
import LogoImage from "../../assets/img/Logo-SopShop.png";
import MenuIcon from "../../assets/img/menu_icon.png";
import { useState } from "react";

export default function Header() {
  const [sideNavBar, setSideNavBar] = useState(false);

  return (
    <>
      <H.Wrapper>
        <H.StyledLink to="/">
          <H.LogoImage src={LogoImage} alt="SopShop Logo" />
        </H.StyledLink>
        <H.NavBar>
          <li>
            <H.StyledLink to="/cart">Cart</H.StyledLink>
          </li>
          <li>
            <H.MenuButton onClick={() => setSideNavBar(true)}>
              <img src={MenuIcon} alt="open-menu" />
            </H.MenuButton>
          </li>
        </H.NavBar>
        <H.SideNavBarOverlay onClick={() => setSideNavBar(false)} className={sideNavBar ? "slideIn" : "slideOut"}></H.SideNavBarOverlay>
        <H.SideNavBar className={sideNavBar ? "slideIn" : "slideOut"}>
          <li>Login</li>
          <li>Join</li>
          <li>MyPage</li>
          <li>Order</li>
        </H.SideNavBar>
      </H.Wrapper>
    </>
  );
}
