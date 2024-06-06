import { useState } from "react";
import { userToken } from "../../atom/Atom";
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import TabBtnMenu from "../../components/TabBtnMenu/TabBtnMenu";
import * as L from "./LoginStyle";
import logo from "../../assets/img/Logo-SopShop.png";
import { login } from "../../api/LoginOut";

export default function Login() {
  const [IsBuyer, setIsBuyer] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");

  const setUserToken = useSetRecoilState(userToken);
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const handleLogin = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      setUserToken(data.token);
    },
    onError: (error) => {
      console.log(error);
      setWarningMessage(error.message);
    },
  });

  const onSubmitHandler = (data) => {
    console.log(data);
    data.login_type = IsBuyer ? "BUYER" : "SELLER";
    handleLogin.mutate(data);
  };

  return (
    <L.Wrapper>
      <L.Img to={`/signup`}>
        <img src={logo} alt="logo" />
      </L.Img>
      <TabBtnMenu IsBuyer={IsBuyer} setIsBuyer={setIsBuyer} content={"로그인"} />
      <L.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <L.Label htmlFor="userId" className="a11y-hidden">
          아이디
        </L.Label>
        <L.Input
          id="userId"
          type="text"
          placeholder="아이디"
          {...register("username", {
            required: "아이디를 입력해주세요",
          })}
        />
        <L.Label htmlFor="userPassword" className="a11y-hidden">
          비밀번호
        </L.Label>
        <L.Input
          id="userPassword"
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
        />
        <L.ValidMessage>{warningMessage}</L.ValidMessage>
        <L.StyledButton type="submit">LOG IN</L.StyledButton>
      </L.Form>
    </L.Wrapper>
  );
}
