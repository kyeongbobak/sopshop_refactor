import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLogin, userToken, userType } from "../../atom/Atom";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/LoginOut";
import useCartList from "../../hook/useCartList";
import * as S from "./TopNavBarStyle";
import shoppingBagIcon from "../../assets/img/icon-shopping-bag.png";
import logo from "../../assets/img/Logo-SopShop.png";
import menuIcon from "../../assets/img/menu_icon.png";

// 사이드바 추가
export default function Header() {
  const [sideBarState, setSideBarState] = useState(null);
  const [listCount, setListCount] = useState("");

  const setIsLogin = useSetRecoilState(isLogin);
  const isLoggedIn = useRecoilValue(isLogin);
  const token = useRecoilValue(userToken);
  const userTypeValue = useRecoilValue(userType);

  console.log(userTypeValue);

  const { cartList, refetch } = useCartList(token, userTypeValue);

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

  useEffect(() => {
    setListCount(cartList.length);
  }, [cartList]);

  useEffect(() => {
    refetch();
  }, [refetch]);

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
                  <p>판매자 센터</p>
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
                  Cart <span>{listCount}</span>
                </S.StyledLink>
              </li>
              <li>
                <S.MenuBtn
                  onClick={() => {
                    setSideBarState("slideIn");
                  }}
                >
                  <img src={menuIcon} alt="open-menu" />
                </S.MenuBtn>
              </li>
            </S.NavBar>
            {sideBarState && (
              <>
                <S.SideNavBarOverlay
                  className={sideBarState}
                  onClick={() => {
                    setSideBarState("slideOut");
                  }}
                ></S.SideNavBarOverlay>
                <S.SideNavBar className={sideBarState}>
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
                      <S.StyledLink>My Page</S.StyledLink>
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
