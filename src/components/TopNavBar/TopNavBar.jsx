import * as H from "./TopNavBarStyle";
import logo from "../../assets/img/Logo-SopShop.png";
import menuIcon from "../../assets/img/menu_icon.png";
import { isLogin, userToken } from "../../atom/Atom";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { logout } from "../../api/LoginOut";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useCartList from "../../hook/useCartList";

// 사이드바 추가
export default function Header() {
  const [sideBarState, setSideBarState] = useState(null);

  const setIsLogin = useSetRecoilState(isLogin);
  const isLoggedIn = useRecoilValue(isLogin);
  const token = useRecoilValue(userToken);
  const { cartList } = useCartList(token);

  const navigator = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigator(`/login`);
      setIsLogin(false);
      localStorage.clear();
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
            <H.StyledLink to="/cart">
              Cart <span>{cartList.length}</span>
            </H.StyledLink>
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
                  <H.StyledLink to={`/order`}>Order</H.StyledLink>
                </li>
              </ul>
            </H.SideNavBar>
          </>
        )}
      </H.Wrapper>
    </>
  );
}
