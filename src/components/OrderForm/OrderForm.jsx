import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ZipCodeSearchModal from "../../components/Modal/ZipCodeSearchModal/ZipCodeSearchModal";
import * as LS from "../../page/Login/LoginStyle";
import * as S from "./OrderFormStyle";

export default function OrderForm() {
  const [isSearched, setIsSearched] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  const getAdress = (data) => {
    console.log(data);
    setIsSearched(false);
    setZipCode(data.zonecode);
    setStreetAddress(data.address);
  };

  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const email = watch("email");

  // 이메일 유효성 검사
  useEffect(() => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("email", {
        type: "manual",
        message: "이메일 주소에 '@' 기호를 포함시켜 주세요.",
      });
    } else {
      clearErrors("email");
    }
  }, [email, setError, clearErrors]);

  return (
    <>
      <S.Wrapper>
        <S.SubTitle>배송정보</S.SubTitle>
        <S.BuyerInfoWrapper>
          <S.SectionTitle>주문자 정보</S.SectionTitle>
          <div>
            <S.Label>이름</S.Label>
            <S.Input />
          </div>
          <S.PhoneInfoWrapper>
            <S.Label>휴대폰</S.Label>
            <S.FrontNumberInput {...register("frontNumber")} maxLength={3} />
            <span> - </span>
            <S.PhoneNumberInput {...register("secondNumber")} maxLength={4} />
            <span> - </span>
            <S.PhoneNumberInput {...register("lastNumber")} maxLength={4} />
          </S.PhoneInfoWrapper>
          <S.EmailInfoWrapper>
            <S.Label>이메일</S.Label>
            <S.Input {...register("email")} />
            {errors.email && <LS.ErrorMessage>{errors.email.message}</LS.ErrorMessage>}
          </S.EmailInfoWrapper>
        </S.BuyerInfoWrapper>
        <S.SectionTitle>배송지 정보</S.SectionTitle>
        <S.Form>
          <S.ReceiverInfoWrapper>
            <S.Label>수령인</S.Label>
            <S.Input />
          </S.ReceiverInfoWrapper>
          <S.ReceiverPhoneInfoWrapper>
            <S.Label>휴대폰</S.Label>
            <S.FrontNumberInput maxLength={3} />
            <span> - </span>
            <S.PhoneNumberInput maxLength={4} />
            <span> - </span>
            <S.PhoneNumberInput maxLength={4} />
          </S.ReceiverPhoneInfoWrapper>
          <S.AddressInfoWrapper>
            <S.Label>배송 주소</S.Label>
            <S.AddressWrapper>
              <div>
                <S.ZipCodeAddressInput value={zipCode} readOnly />
                <S.ZipCodeSearchBtn
                  type="button"
                  onClick={() => {
                    setIsSearched(true);
                  }}
                >
                  우편번호 조회
                </S.ZipCodeSearchBtn>
              </div>
              {isSearched && <ZipCodeSearchModal onComplete={getAdress} />}
              <S.StreetAddressInput value={streetAddress} readOnly />
              <S.DetailAddressInput />
            </S.AddressWrapper>
          </S.AddressInfoWrapper>
          <S.DeliveryMessageWrapper>
            <S.Label>배송 메세지</S.Label>
            <S.Input />
          </S.DeliveryMessageWrapper>
          <S.PayMentInfoWrapper>
            <S.PayMentMethodSection>
              <S.SectionTitle>결제 수단</S.SectionTitle>
              <S.PayOptionWrapper>
                <S.PayOptionInput type="radio" />
                <p>신용 / 체크카드</p>
                <S.PayOptionInput type="radio" />
                <p>무통장 입금</p>
                <S.PayOptionInput type="radio" />
                <p>휴대폰 결제</p>
                <S.PayOptionInput type="radio" />
                <p>네이버페이</p>
                <S.PayOptionInput type="radio" />
                <p>카카오페이</p>
              </S.PayOptionWrapper>
            </S.PayMentMethodSection>
            <S.PayMentDetailSection>
              <S.SectionTitle>최종 결제 정보</S.SectionTitle>
              <S.PayMentWrapper>
                <p>
                  - 상품 금액
                  <span>46,500 원</span>
                </p>
                <p>
                  - 할인 금액
                  <span>0 원</span>
                </p>
                <S.ShippingFee>
                  - 베송비
                  <span>0 원</span>
                </S.ShippingFee>
                <S.PayMentPrice>
                  - 결제
                  <span>46,500 원</span>
                </S.PayMentPrice>
                <S.AgreeMentWrapper>
                  <S.AgreeMentInput type="checkbox" />
                  <span>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</span>
                </S.AgreeMentWrapper>
                <S.PayMentBtn>PAYMENT</S.PayMentBtn>
              </S.PayMentWrapper>
            </S.PayMentDetailSection>
          </S.PayMentInfoWrapper>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
