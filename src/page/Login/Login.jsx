import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userToken, isLogin, userType } from "../../atom/Atom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/LoginOut";
import TabBtnMenu from "../../components/TabBtnMenu/TabBtnMenu";
import * as L from "./LoginStyle";
import logo from "../../assets/img/Logo-SopShop.png";

export default function Login() {
  const [IsBuyer, setIsBuyer] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmitHandler = (data) => {
    console.log(data);
    data.login_type = IsBuyer ? "BUYER" : "SELLER";
    LoginMutation.mutate(data);
  };

  const setUserToken = useSetRecoilState(userToken);
  const setIsLogin = useSetRecoilState(isLogin);
  const setUserType = useSetRecoilState(userType);

  const navigate = useNavigate();

  const LoginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      setUserToken(data.token);
      setIsLogin(true);
      setUserType(data.user_type);
      navigate(`/signup`);
    },
    onError: (error) => {
      console.log(error);
      setWarningMessage("아이디와 비밀번호가 일치하지 않습니다.");
    },
  });

  return (
    <L.Wrapper>
      <L.LogoImg to={`/signup`}>
        <img src={logo} alt="logo" />
      </L.LogoImg>
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
            onChange: () => setWarningMessage(""),
          })}
        />
        {errors.username && <L.ErrorMessage>{errors.username.message}</L.ErrorMessage>}
        <L.Label htmlFor="userPassword" className="a11y-hidden">
          비밀번호
        </L.Label>
        <L.Input
          id="userPassword"
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            onChange: () => setWarningMessage(""),
          })}
        />
        {errors.password && <L.ErrorMessage>{errors.password.message}</L.ErrorMessage>}
        <L.ErrorMessage>{warningMessage}</L.ErrorMessage>
        <L.SubmitButton type="submit">LOG IN</L.SubmitButton>
      </L.Form>
    </L.Wrapper>
  );
}
