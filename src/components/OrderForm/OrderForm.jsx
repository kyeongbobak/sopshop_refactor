import { useForm } from "react-hook-form";
import * as LS from "../../page/Login/LoginStyle";
import * as S from "./OrderFormStyle";
import { useEffect } from "react";

export default function OrderForm() {
  const {
    register,
    watch,

    formState: { errors },
  } = useForm();
  const frontNumber = watch("frontNumber", "");
  const secondNumber = watch("secondNumber", "");
  const lastNumber = watch("lastNumber", "");

  console.log(frontNumber, secondNumber, lastNumber);

  const phoneNumber = [frontNumber, secondNumber, lastNumber].join("");
  console.log(phoneNumber);

  useEffect(() => {}, []);

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
            <S.FrontNumberInput {...register("frontNumber", { required: "번호를 입력해주세요." })} />
            <span> - </span>
            <S.PhoneNumberInput {...register("secondNumber")} />
            <span> - </span>
            <S.PhoneNumberInput {...register("lastNumber")} />
          </S.PhoneInfoWrapper>
          {errors.frontNumber && <LS.ErrorMessage>{errors.frontNumber.message}</LS.ErrorMessage>}
          <div>
            <S.Label>이메일</S.Label>
            <S.Input />
          </div>
        </S.BuyerInfoWrapper>
        <S.SectionTitle>배송지 정보</S.SectionTitle>
        <S.Form>
          <S.ReceiverInfoWrapper>
            <S.Label>수령인</S.Label>
            <S.Input />
          </S.ReceiverInfoWrapper>
          <S.ReceiverPhoneInfoWrapper>
            <S.Label>휴대폰</S.Label>
            <S.FrontNumberInput />
            <span> - </span>
            <S.PhoneNumberInput />
            <span> - </span>
            <S.PhoneNumberInput />
          </S.ReceiverPhoneInfoWrapper>
          <S.AddressInfoWrapper>
            <S.Label>배송 주소</S.Label>
            <S.AddressWrapper>
              <div>
                <S.ZipCodeAddressInput />
                <S.ZipCodeSearchBtn>우편번호 조회</S.ZipCodeSearchBtn>
              </div>
              <S.StreetAddressInput />
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
