import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { userType } from "../../atom/Atom";
import TabBtnMenu from "../../components/TabBtnMenu/TabBtnMenu";
import * as LS from "../Login/LoginStyle";
import * as S from "../SignUp/SignUpStyle";
import logo from "../../assets/img/Logo-SopShop.png";
import { signUp, validateAccount } from "../../api/Account";
import checkOffIcon from "../../assets/img/icon-check-off.png";
import checkOnIcon from "../../assets/img/icon-check-on.png";
import { useSetRecoilState } from "recoil";

export default function SignUp() {
  const [IsBuyer, setIsBuyer] = useState(true);
  const [DuplicateMessage, setDuplicateMessage] = useState("");
  const setUserType = useSetRecoilState(userType);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm();

  console.log(errors);

  // watch 함수를 활용하여 실시간으로 비밀번호 일치 여부 확인하여 사용자 경험 개선
  const password = watch("password", "");
  const passwordConfirm = watch("password2", "");

  const verifyUsernameMutation = useMutation({
    mutationFn: validateAccount,
    onSuccess: (data) => {
      if (data.Success) {
        setDuplicateMessage(data.Success);
      } else if (data.FAIL_Message) {
        setDuplicateMessage(data.FAIL_Message);
      }
    },
    // 불필요한 api 호흡을 줄이자
    // useFormHook 사용시 errors라는 객체는 각 필드의 유효성 검사 결과를 담는데, 이 에러 객체를 활용
    onError: (error) => {
      console.log(error);
      if (error.response.data.errors.Username[0] === "UsernameMaxLength") {
        setDuplicateMessage("ID는 20자 이내여야 합니다.");
      } else if (error.response.data.errors.Username[0] === "UsernamePattern") {
        setDuplicateMessage("ID는 영어 소문자, 대문자, 숫자만 가능합니다.");
      } else {
        setDuplicateMessage("아이디를 입력하세요.");
      }
    },
  });

  // setError를 사용한 이유는 컴포넌트 전체를 다시 렌더링할 필요없이 해당 부분만 업데이트가 가능하기 때문에
  useEffect(() => {
    if (password !== passwordConfirm && passwordConfirm) {
      setError("PasswordConfirm", {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않습니다",
      });
    } else {
      clearErrors("PasswordConfirm");
    }
  }, [setError, clearErrors, password, passwordConfirm]);

  const SingUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log(data);
      setUserType(data.type);
      alert("회원가입에 성공하셨습니다.");
      navigate(`/login`);
    },
    onError: (errors) => {
      console.log(errors);
    },
  });

  const verifyUserName = async () => {
    const { username } = getValues();
    console.log(username);
    await verifyUsernameMutation.mutate(username);
  };

  const handleOnSignUp = (data) => {
    const { frontNumber, secondNumber, lastNumber } = getValues();
    data.phone_number = [frontNumber, secondNumber, lastNumber].join("");
    SingUpMutation.mutate(data);
  };

  return (
    <>
      <LS.Wrapper>
        <LS.LogoImg to={`/login`}>
          <img src={logo} alt="logo" />
        </LS.LogoImg>
        <TabBtnMenu IsBuyer={IsBuyer} setIsBuyer={setIsBuyer} content={"가입"} />
        <LS.Form onSubmit={handleSubmit(handleOnSignUp)}>
          <S.Label htmlFor="id">아이디</S.Label>
          <S.Wrapper>
            <S.Input
              id="username"
              type="text"
              {...register("username", {
                required: "아이디를 입력해주세요",
              })}
              onFocus={() => setDuplicateMessage("")}
            />
            <S.ConfirmButton type="button" onClick={verifyUserName}>
              중복확인
            </S.ConfirmButton>
          </S.Wrapper>
          {errors.username && <LS.ErrorMessage>{errors.username.message}</LS.ErrorMessage>}
          <LS.ErrorMessage>{DuplicateMessage}</LS.ErrorMessage>
          <S.PasswordInputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Input
              type="password"
              {...register("password", {
                required: "비밀번호를 입력해주세요",
              })}
            />
            {password ? <S.PasswordCheckIcon src={checkOnIcon} alt="checkIcon" /> : <S.PasswordCheckIcon src={checkOffIcon} alt="checkIcon" />}
            {errors.password && <LS.ErrorMessage>{errors.password.message}</LS.ErrorMessage>}
            <S.Label>비밀번호 확인</S.Label>
            <S.Input type="password" {...register("password2")} />
            {password === passwordConfirm && passwordConfirm ? <S.PasswordConfirmIcon src={checkOnIcon} alt="checkOn" /> : <S.PasswordConfirmIcon src={checkOffIcon} alt="checkIcon" />}
            {password !== passwordConfirm && <LS.ErrorMessage>{errors.PasswordConfirm?.message}</LS.ErrorMessage>}
          </S.PasswordInputWrapper>
          {errors.password && <LS.ErrorMessage>{errors.password.message}</LS.ErrorMessage>}
          <S.Label>이름</S.Label>
          <S.Input {...register("name")} />
          <S.Label>휴대폰 번호</S.Label>
          <S.Wrapper>
            <S.PhoneNumberInput {...register("frontNumber")} />
            <S.PhoneNumberInput {...register("secondNumber")} />
            <S.PhoneNumberInput {...register("lastNumber")} />
          </S.Wrapper>
          <S.Section>
            <S.CheckBox type="checkbox" required />
            <S.SectionContents>
              sopshop의 <span>이용약관</span> 및 <span>개인 정보 처리 방침</span>에 대한 내용을 확인하였고 동의합니다.
            </S.SectionContents>
          </S.Section>
          <LS.SubmitButton type="submit">SIGN IN</LS.SubmitButton>
        </LS.Form>
      </LS.Wrapper>
    </>
  );
}
