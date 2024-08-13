import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CartListState, isLogin, userToken, userType } from "../../atom/Atom";

import { useNavigate } from "react-router-dom";
import { logout } from "../../api/LoginOut";

import * as S from "./TopNavBarStyle";
import shoppingBagIcon from "../../assets/img/icon-shopping-bag.png";
import logo from "../../assets/img/Logo-SopShop.png";
import menuIcon from "../../assets/img/menu_icon.png";

export default function TopNavBar() {
  const [sideMenuState, setSideMenuState] = useState(null);

  const setIsLogin = useSetRecoilState(isLogin);
  const isLoggedIn = useRecoilValue(isLogin);
  const token = useRecoilValue(userToken);
  const userTypeValue = useRecoilValue(userType);
  const cartListLength = useRecoilValue(CartListState);

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
      {userTypeValue === "SELLER" ? (
        <>
          <S.Wrapper>
            <S.StyledLink to="/">
              <S.LogoImage src={logo} alt="SopShop Logo" />
            </S.StyledLink>
            <S.NavBar>
              <li>
                <S.MenuLinkBtn>
                  <img src={shoppingBagIcon} alt="shoppingBagIcon" />
                  <S.StyledLink to={`/sellerCenter`}>
                    <span>판매자 센터</span>
                  </S.StyledLink>
                </S.MenuLinkBtn>
              </li>
              <li>
                {isLoggedIn ? (
                  <button onClick={handleOnLogout}>
                    <S.StyledLink to={`/login`}>Logout</S.StyledLink>
                  </button>
                ) : (
                  <button>
                    <S.StyledLink to={`/login`}>Login</S.StyledLink>
                  </button>
                )}
              </li>
            </S.NavBar>
          </S.Wrapper>
        </>
      ) : (
        <>
          <S.Wrapper>
            <S.StyledLink to="/">
              <S.LogoImage src={logo} alt="SopShop Logo" />
            </S.StyledLink>
            <S.NavBar>
              <li>
                <S.StyledLink to="/cart">
                  Cart <span>{cartListLength}</span>
                </S.StyledLink>
              </li>
              <li>
                <S.MenuBtn
                  onClick={() => {
                    setSideMenuState("slideIn");
                  }}
                >
                  <img src={menuIcon} alt="open-menu" />
                </S.MenuBtn>
              </li>
            </S.NavBar>
            {sideMenuState && (
              <>
                <S.SideNavBarOverlay
                  className={sideMenuState}
                  onClick={() => {
                    setSideMenuState("slideOut");
                  }}
                ></S.SideNavBarOverlay>
                <S.SideNavBar className={sideMenuState}>
                  <ul>
                    <li>
                      {isLoggedIn ? (
                        <button onClick={handleOnLogout}>
                          <S.StyledLink to={`/login`}>Logout</S.StyledLink>
                        </button>
                      ) : (
                        <button>
                          <S.StyledLink to={`/login`}>Login</S.StyledLink>
                        </button>
                      )}
                    </li>
                    <li>
                      <S.StyledLink to={`/signUp`}>Join</S.StyledLink>
                    </li>
                    <li>
                      <S.StyledLink to={`/myPage`}>My Page</S.StyledLink>
                    </li>
                    <li>
                      <S.StyledLink to={`/order`}>Order</S.StyledLink>
                    </li>
                  </ul>
                </S.SideNavBar>
              </>
            )}
          </S.Wrapper>
        </>
      )}
    </>
  );
}
