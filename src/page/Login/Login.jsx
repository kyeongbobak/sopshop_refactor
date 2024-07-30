import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { userToken, isLogin, userType } from "../../atom/Atom";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/LoginOut";
import TabBtnMenu from "../../components/TabBtnMenu/TabBtnMenu";
import * as S from "./LoginStyle";
import logo from "../../assets/img/Logo-SopShop.png";

export default function Login() {
  const [isBuyer, setIsBuyer] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");

  const setUserToken = useSetRecoilState(userToken);
  const setIsLogin = useSetRecoilState(isLogin);
  const setUserType = useSetRecoilState(userType);
  const navigate = useNavigate();

  //유효성 검사를 더 간단하게 처리하기 위해 useForm 사용
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const LoginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUserToken(data.token);
      setIsLogin(true);
      setUserType(data.login_type);
      navigate(`/`);
    },
    onError: (error) => {
      console.log(error);
      setWarningMessage("아이디와 비밀번호가 일치하지 않습니다.");
    },
  });

  // 데이터 변경이나 업데이트를 위해 useMutation 사용
  const handleOnLogin = (data) => {
    data.login_type = isBuyer ? "BUYER" : "SELLER";
    LoginMutation.mutate(data);
  };

  return (
    <S.Wrapper>
      <S.LogoImg to={`/`}>
        <img src={logo} alt="logo" />
      </S.LogoImg>
      <TabBtnMenu isBuyer={isBuyer} setIsBuyer={setIsBuyer} content={"로그인"} />
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
        <S.MButton type="submit">LOG IN</S.MButton>
      </S.Form>
      <S.StyledLinkWrapper>
        <S.StyledLink to={`/signUp`}>CREATE ACCOUNT</S.StyledLink>
      </S.StyledLinkWrapper>
    </S.Wrapper>
  );
}
