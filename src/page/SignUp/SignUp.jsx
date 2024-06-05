import { useState } from "react";
import TabBtnMenu from "../../components/TabBtnMenu/TabBtnMenu";
import * as LS from "../Login/LoginStyle";
import * as L from "../Login/LoginStyle";
import * as S from "../SignUp/SignUpStyle";
import logo from "../../assets/img/Logo-SopShop.png";

export default function SignUp() {
  const [IsBuyer, setIsBuyer] = useState(true);

  return (
    <>
      <LS.Wrapper>
        <L.Img to={`/login`}>
          <img src={logo} alt="logo" />
        </L.Img>
        <TabBtnMenu IsBuyer={IsBuyer} setIsBuyer={setIsBuyer} content={"가입"} />
        <LS.Form>
          <S.Label>아이디</S.Label>
          <S.Wrapper>
            <S.Input />
            <S.Button>중복확인</S.Button>
          </S.Wrapper>
          <S.Label>비밀번호</S.Label>
          <S.Input />
          <S.Label>비밀번호</S.Label>
          <S.Input />
          <S.Label>이름</S.Label>
          <S.Input />
          <S.Label>휴대폰 번호</S.Label>
          <S.Wrapper>
            <S.PhoneNumberInput />
            <S.PhoneNumberInput />
            <S.PhoneNumberInput />
          </S.Wrapper>
          <LS.StyledButton>SIGN IN</LS.StyledButton>
        </LS.Form>
      </LS.Wrapper>
    </>
  );
}
