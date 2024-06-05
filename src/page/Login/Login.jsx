import * as L from "./LoginStyle";
import TabBtnMenu from "../../components/TabBtnMenu/TabBtnMenu";
import logo from "../../assets/img/Logo-SopShop.png";
import { useState } from "react";

export default function Login() {
  const [IsBuyer, setIsBuyer] = useState(true);

  return (
    <>
      <L.Container>
        <L.Img to={`/signUp`}>
          <img src={logo} alt="" />
        </L.Img>
        <TabBtnMenu IsBuyer={IsBuyer} setIsBuyer={setIsBuyer} />
      </L.Container>
    </>
  );
}
