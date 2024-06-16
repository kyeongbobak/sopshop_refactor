import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import TabBtnMenu from "../../components/TabBtnMenu/TabBtnMenu";
import * as LS from "../Login/LoginStyle";
import * as S from "../SignUp/SignUpStyle";
import logo from "../../assets/img/Logo-SopShop.png";
import { validateAccount } from "../../api/Account";

export default function SignUp() {
  const [IsBuyer, setIsBuyer] = useState(true);
  const { register, handleSubmit, getValues } = useForm();
  const [DuplicateMessage, setDuplicateMessage] = useState("");

  const verifyUsernameMutation = useMutation({
    mutationFn: validateAccount,
    onSuccess: (data) => {
      console.log(data);
      setDuplicateMessage(data.Success);
    },
    onError: (data) => {
      setDuplicateMessage(data.response.data.FAIL_Message);
    },
  });

  const verifyUserName = async () => {
    const { userId } = getValues();
    await verifyUsernameMutation.mutate(userId);
  };

  // const SignUpMutation = useMutation({
  //   mutationFn: signUp,
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  // });

  const handleOnSignUp = (data) => {
    console.log(data);
    const { FrontNumber, SecondNumber, LastNumber } = getValues();
    const phoneNumber = FrontNumber.concat(SecondNumber).concat(LastNumber);
    console.log(phoneNumber);
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
            <S.SignUpInput id="id" type="text" {...register("userId")} onFocus={() => setDuplicateMessage("")} />
            <S.Button type="button" onClick={verifyUserName}>
              중복확인
            </S.Button>
          </S.Wrapper>
          <LS.ErrorMessage>{DuplicateMessage}</LS.ErrorMessage>
          <S.PasswordWrapper>
            <S.Label>비밀번호</S.Label>
            <S.SignUpInput type="password" />
            <S.Label>비밀번호</S.Label>
            <S.SignUpInput type="password" />
          </S.PasswordWrapper>
          <S.Label>이름</S.Label>
          <S.SignUpInput />
          <S.Label>휴대폰 번호</S.Label>
          <S.Wrapper>
            <S.PhoneNumberInput {...register("FrontNumber")} />
            <S.PhoneNumberInput {...register("SecondNumber")} />
            <S.PhoneNumberInput {...register("LastNumber")} />
          </S.Wrapper>
          <S.Section>
            <S.CheckBox type="checkbox" required />
            <S.SectionContents>
              sopshop의 <span>이용약관</span> 및 <span>개인 정보 처리 방침</span>에 대한 내용을 확인하였고 동의합니다.
            </S.SectionContents>
          </S.Section>
          <LS.SubmitButton>SIGN IN</LS.SubmitButton>
        </LS.Form>
      </LS.Wrapper>
    </>
  );
}
