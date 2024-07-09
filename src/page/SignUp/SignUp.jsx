import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { userType } from "../../atom/Atom";
import TabBtnMenu from "../../components/TabBtnMenu/TabBtnMenu";
import * as LS from "../Login/LoginStyle";
import * as S from "../SignUp/SignUpStyle";
import logo from "../../assets/img/Logo-SopShop.png";
import upArrow from "../../assets/img/icon-up-arrow.png";
import downArrow from "../../assets/img/icon-down-arrow.png";
import { signUp, validateAccount, validateCompanyNumber } from "../../api/Account";
import checkOffIcon from "../../assets/img/icon-check-off.png";
import checkOnIcon from "../../assets/img/icon-check-on.png";

export default function SignUp() {
  const [IsBuyer, setIsBuyer] = useState(true);
  const [DuplicateMessage, setDuplicateMessage] = useState("");
  const [activeOption, setActiveOption] = useState(false);

  const frontNumberList = ["010", "011", "016", "017", "018", "019"];

  const setUserType = useSetRecoilState(userType);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  // watch 함수를 활용하여 실시간으로 비밀번호 일치 여부 확인하여 사용자 경험 개선
  const password = watch("password", "");
  const passwordConfirm = watch("password2", "");

  // 계정 검증하기
  const verifyUsernameMutation = useMutation({
    // 데이터를 서버로 전송하고, 이에 대한 성공 또는 실패 상태를 좀 더 쉽게 관리하기 위해 데이터를 검증의 목적으로 useMutation 사용
    mutationFn: validateAccount,
    onSuccess: (data) => {
      if (data.Success) {
        setDuplicateMessage(data.Success);
      } else if (data.FAIL_Message) {
        setDuplicateMessage(data.FAIL_Message);
      }
    },

    onError: (error) => {
      if (error.response.data.errors.Username[0] === "UsernameMaxLength") {
        setDuplicateMessage("ID는 20자 이내여야 합니다.");
      } else if (error.response.data.errors.Username[0] === "UsernamePattern") {
        setDuplicateMessage("ID는 영어 소문자, 대문자, 숫자만 가능합니다.");
      } else {
        setDuplicateMessage("아이디를 입력하세요.");
      }
    },
  });

  // 사업자등록번호 검증하기
  const verifyCompanyNumberMutation = useMutation({
    // 데이터를 검증의 목적으로 useMutation 사용
    mutationFn: validateCompanyNumber,
    onSuccess: (data) => {
      console.log(data);
      if (data.Success) {
        setDuplicateMessage(data.Success);
      } else if (data.FAIL_Message) {
        setDuplicateMessage(data.FAIL_Message);
      }
    },
    onError: () => {
      setDuplicateMessage("유효하지 않은 사업자 등록번호입니다. 10자리를 입력해 주세요.");
    },
  });

  // 비밀번호 유효성검사
  useEffect(() => {
    if (password !== passwordConfirm && passwordConfirm) {
      // setError를 사용한 이유는 컴포넌트 전체를 다시 렌더링할 필요없이 해당 부분만 업데이트가 가능하기 때문에
      setError("passwordConfirm", {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않습니다",
      });
    } else if (password.length < 8) {
      setError("passwordConfirm", {
        type: "password-maxlength",
        message: "비밀번호는 8자 이상이어야 합니다.",
      });
    } else if (password.search(/[a-z]/gi) < 0) {
      setError("passwordConfirm", {
        type: "password-Pattern",
        message: "비밀번호는 한개 이상의 영소문자가 필수적으로 들어가야 합니다.",
      });
    } else if (password.search(/[0-9]/gi) < 0) {
      setError("passwordConfirm", {
        type: "password-Pattern",
        message: "비밀번호는 한개 이상의 숫자가 필수적으로 들어가야 합니다.",
      });
    } else {
      clearErrors();
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
    await verifyUsernameMutation.mutate(username);
  };

  const verifyCompanyNumber = async () => {
    const { companyNumber } = getValues();
    await verifyCompanyNumberMutation.mutate(companyNumber);
  };

  const handleOnSignUp = (data) => {
    const { frontNumber, secondNumber, lastNumber } = getValues();
    data.phone_number = [frontNumber, secondNumber, lastNumber].join("");
    SingUpMutation.mutate(data);
  };

  return (
    <>
      <LS.Wrapper>
        <LS.LogoImg to={`/`}>
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
            {password !== passwordConfirm && <LS.ErrorMessage>{errors.passwordConfirm?.message}</LS.ErrorMessage>}
          </S.PasswordInputWrapper>
          {errors.password && <LS.ErrorMessage>{errors.password.message}</LS.ErrorMessage>}
          <S.Label>이름</S.Label>
          <S.Input {...register("name")} />
          <S.Label>휴대폰 번호</S.Label>
          <S.Wrapper>
            <S.PhoneInputWrapper>
              <div>
                <S.FrontNumberInput {...register("frontNumber")} defaultValue={"010"} />
                <button onClick={() => setActiveOption(!activeOption)}>{activeOption ? <img src={downArrow} alt="upArrow" /> : <img src={upArrow} alt="upArrow" />}</button>
                {activeOption && (
                  <ul>
                    {frontNumberList.map((value, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setValue("frontNumber", value);
                          setActiveOption(false);
                        }}
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <S.PhoneNumberInput {...register("secondNumber")} />
              <S.PhoneNumberInput {...register("lastNumber")} />
            </S.PhoneInputWrapper>
          </S.Wrapper>
          {!IsBuyer && (
            <S.SellerInputSection>
              <S.Label htmlFor="id">사업자 등록번호</S.Label>
              <S.Wrapper>
                <S.Input
                  id="companyNumber"
                  type="text"
                  {...register("companyNumber", {
                    required: "사업자 등록번호를 추가해주세요.",
                  })}
                  onFocus={() => setDuplicateMessage("")}
                />
                <S.ConfirmButton type="button" onClick={verifyCompanyNumber}>
                  인증
                </S.ConfirmButton>
              </S.Wrapper>
              {errors.companyNumber && <LS.ErrorMessage>{errors.companyNumber.message}</LS.ErrorMessage>}
              <LS.ErrorMessage>{DuplicateMessage}</LS.ErrorMessage>
              <S.Label>스토어 이름</S.Label>
              <S.Input />
            </S.SellerInputSection>
          )}
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
