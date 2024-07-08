import * as H from "./TopNavBarStyle";
import logo from "../../assets/img/Logo-SopShop.png";
import menuIcon from "../../assets/img/menu_icon.png";
import { isLogin, userToken } from "../../atom/Atom";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { logout } from "../../api/LoginOut";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [sideBarState, setSideBarState] = useState(null);

  const setIsLogin = useSetRecoilState(isLogin);
  const isLoggedIn = useRecoilValue(isLogin);
  const token = useRecoilValue(userToken);

  const navigator = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigator(`/login`);
      setIsLogin(false);
      localStorage.removeItem("recoil-persist");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleOnLogout = async () => {
    logoutMutation.mutate(token);
  };

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
                  {isLoggedIn ? (
                    <button onClick={handleOnLogout}>
                      <H.StyledLink to={`/login`}>Logout</H.StyledLink>
                    </button>
                  ) : (
                    <button>
                      <H.StyledLink to={`/login`}>Login</H.StyledLink>
                    </button>
                  )}
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
