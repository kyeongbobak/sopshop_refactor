import * as H from "./TopNavBarStyle";
import logo from "../../assets/img/Logo-SopShop.png";
import menuIcon from "../../assets/img/menu_icon.png";
import { useState } from "react";

export default function Header() {
  const [sideBarState, setSideBarState] = useState(null);

  return (
    <>
      <H.Wrapper>
        <H.StyledLink to="/">
          <H.LogoImage src={logo} alt="SopShop Logo" />
        </H.StyledLink>
        <H.NavBar>
          <li>
            <H.StyledLink to="/cart">Cart</H.StyledLink>
          </li>
          <li>
            <H.MenuButton
              onClick={() => {
                setSideBarState("slideIn");
              }}
            >
              <img src={menuIcon} alt="open-menu" />
            </H.MenuButton>
          </li>
        </H.NavBar>

        {sideBarState && (
          <>
            <H.SideNavBarOverlay
              className={sideBarState}
              onClick={() => {
                setSideBarState("slideOut");
              }}
            ></H.SideNavBarOverlay>
            <H.SideNavBar className={sideBarState}>
              <ul>
                <li>
                  <H.StyledLink to={`/login`}>Login</H.StyledLink>
                </li>
                <li>
                  <H.StyledLink to={`/signUp`}>Join</H.StyledLink>
                </li>
                <li>
                  <H.StyledLink>My Page</H.StyledLink>
                </li>
                <li>
                  <H.StyledLink>Order</H.StyledLink>
                </li>
              </ul>
            </H.SideNavBar>
          </>
        )}
      </H.Wrapper>
    </>
  );
}
