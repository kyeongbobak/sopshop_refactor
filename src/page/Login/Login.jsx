import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userToken, isLogin, userType } from "../../atom/Atom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/LoginOut";
import TabBtnMenu from "../../components/TabBtnMenu/TabBtnMenu";
import * as S from "./LoginStyle";
import logo from "../../assets/img/Logo-SopShop.png";

export default function Login() {
  const [IsBuyer, setIsBuyer] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");
  const setUserToken = useSetRecoilState(userToken);
  const setIsLogin = useSetRecoilState(isLogin);
  const setUserType = useSetRecoilState(userType);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const LoginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      setUserToken(data.token);
      setIsLogin(true);
      setUserType(data.user_type);
      navigate(`/`);
    },
    onError: (error) => {
      console.log(error);
      setWarningMessage("아이디와 비밀번호가 일치하지 않습니다.");
    },
  });

  // 데이터 변경이나 업데이트를 위해 useMutation 사용
  const handleOnLogin = (data) => {
    console.log(data);
    data.login_type = IsBuyer ? "BUYER" : "SELLER";
    LoginMutation.mutate(data);
  };

  return (
    <S.Wrapper>
      <S.LogoImg to={`/`}>
        <img src={logo} alt="logo" />
      </S.LogoImg>
      <TabBtnMenu IsBuyer={IsBuyer} setIsBuyer={setIsBuyer} content={"로그인"} />
      <S.Form onSubmit={handleSubmit(handleOnLogin)}>
        <S.Label htmlFor="userId" className="a11y-hidden">
          아이디
        </S.Label>
        <S.Input
          id="userId"
          type="text"
          placeholder="아이디"
          {...register("username", {
            required: "아이디를 입력해주세요",
            onChange: () => setWarningMessage(""),
          })}
        />
        {errors.username && <S.ErrorMessage>{errors.username.message}</S.ErrorMessage>}
        <S.Label htmlFor="userPassword" className="a11y-hidden">
          비밀번호
        </S.Label>
        <S.Input
          id="userPassword"
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            onChange: () => setWarningMessage(""),
          })}
        />
        {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
        <S.ErrorMessage>{warningMessage}</S.ErrorMessage>
        <S.SubmitButton type="submit">LOG IN</S.SubmitButton>
      </S.Form>
    </S.Wrapper>
  );
}
