import { useState } from "react";
import TabBtnMenu from "../../components/TabBtnMenu/TabBtnMenu";
import * as L from "./LoginStyle";
import logo from "../../assets/img/Logo-SopShop.png";

export default function Login() {
  const [IsBuyer, setIsBuyer] = useState(true);

  return (
    <>
      <L.Wrapper>
        <L.Img to={`/signup`}>
          <img src={logo} alt="logo" />
        </L.Img>
        <TabBtnMenu IsBuyer={IsBuyer} setIsBuyer={setIsBuyer} content={"로그인"} />
        <L.Form>
          <L.Label htmlFor="userId" className="a11y-hidden">
            아이디
          </L.Label>
          <L.Input id="userId" type="text" placeholder="아이디" />
          <L.Label htmlFor="userPassword" className="a11y-hidden">
            비밀번호
          </L.Label>
          <L.Input id="userPassword" type="password" placeholder="비밀번호" />
          <L.StyledButton>LOG IN</L.StyledButton>
        </L.Form>
      </L.Wrapper>
    </>
  );
}
