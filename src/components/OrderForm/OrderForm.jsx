import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { orderType, userToken, userType } from "../../atom/Atom";
import { useForm } from "react-hook-form";
import { order } from "../../api/Order";
import { totalProductPrice, totalShippingPrice } from "../../utils/calculate";
import useCartList from "../../hook/useCartList";
import useProductDetail from "../../hook/useProductDetail";
import ZipCodeSearchModal from "../../components/Modal/ZipCodeSearchModal/ZipCodeSearchModal";
import * as LS from "../../page/LoginPage/LoginPageStyle";
import * as S from "./OrderFormStyle";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const [isSearched, setIsSearched] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [paymentMethod, setPayMentMethod] = useState("");
  const [productIds, setProductIds] = useState([]);
  const [counts, setCounts] = useState([]);

  const navigator = useNavigate();

  const token = useRecoilValue(userToken);
  const orderState = useRecoilValue(orderType);
  const userTypeValue = useRecoilValue(userType);

  const { cartList, cartProducts } = useCartList(token, userTypeValue);
  const { productInfo } = useProductDetail(token, cartProducts);

  useEffect(() => {
    const productIdArray = cartList.map((i) => i.product_id);
    const countArray = cartList.map((i) => i.quantity);

    setProductIds(productIdArray);
    setCounts(countArray);
  }, [cartList]);

  const productId = productIds.join("");
  const quantity = counts.join("");

  const sumProductPrice = totalProductPrice(productInfo, cartList);
  const sumShipping = totalShippingPrice(productInfo);

  const totalOrderProductPrice = sumProductPrice + sumShipping;

  const {
    register,
    watch,
    handleSubmit,
    getValues,
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

  // 우편 번호 조회
  const getAdress = (data) => {
    setIsSearched(false);
    setZipCode(data.zonecode);
    setStreetAddress(data.address);
  };

  const submitPayMent = async () => {
    const { receiver, receiverFrontNumber, receiverSecondNumber, receiverLastNumber, detailAddress, deliveryMessage } = getValues();

    const phoneNumber = [receiverFrontNumber, receiverSecondNumber, receiverLastNumber].join("");
    const address = [zipCode, streetAddress, detailAddress].join("");

    // 바로 구매하기
    const cartAllOrder = {
      order_kind: orderState,
      receiver: receiver,
      receiver_phone_number: phoneNumber,
      address: address,
      address_message: deliveryMessage,
      payment_method: paymentMethod,
      total_price: totalOrderProductPrice,
    };

    const cartOneOrder = {
      product_id: productId,
      quantity: quantity,
      order_kind: orderState,
      receiver: receiver,
      receiver_phone_number: phoneNumber,
      address: address,
      address_message: deliveryMessage,
      payment_method: paymentMethod,
      total_price: totalOrderProductPrice,
    };

    const body = orderState === "cart_order" ? cartAllOrder : cartOneOrder;

    const res = await order(body, token);

    if (res) {
      navigator(`/`);
    }
    return res;
  };

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
        <S.Form onSubmit={handleSubmit(submitPayMent)}>
          <S.ReceiverInfoWrapper>
            <S.Label>수령인</S.Label>
            <S.Input {...register("receiver")} />
          </S.ReceiverInfoWrapper>
          <S.ReceiverPhoneInfoWrapper>
            <S.Label>휴대폰</S.Label>
            <S.FrontNumberInput maxLength={3} {...register("receiverFrontNumber")} />
            <span> - </span>
            <S.PhoneNumberInput maxLength={4} {...register("receiverSecondNumber")} />
            <span> - </span>
            <S.PhoneNumberInput maxLength={4} {...register("receiverLastNumber")} />
          </S.ReceiverPhoneInfoWrapper>
          <S.AddressInfoWrapper>
            <S.Label>배송 주소</S.Label>
            <S.AddressWrapper>
              <div>
                <S.ZipCodeAddressInput {...register("zipCode")} value={zipCode} readOnly />
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
              <S.StreetAddressInput {...register("streetAddress")} value={streetAddress} readOnly />
              <S.DetailAddressInput {...register("detailAddress")} />
            </S.AddressWrapper>
          </S.AddressInfoWrapper>
          <S.DeliveryMessageWrapper>
            <S.Label>배송 메세지</S.Label>
            <S.Input {...register("deliveryMessage")} />
          </S.DeliveryMessageWrapper>
          <S.PayMentInfoWrapper>
            <S.PayMentMethodSection>
              <S.SectionTitle>결제 수단</S.SectionTitle>
              <S.PayOptionWrapper>
                <S.PayOptionInput type="radio" onClick={() => setPayMentMethod("CARD")} checked={paymentMethod === "CARD"} readOnly />
                <p>신용 / 체크카드</p>
                <S.PayOptionInput type="radio" onClick={() => setPayMentMethod("DEPOSIT")} checked={paymentMethod === "DEPOSIT"} readOnly />
                <p>무통장 입금</p>
                <S.PayOptionInput type="radio" onClick={() => setPayMentMethod("PHONE_PAYMENT")} checked={paymentMethod === "PHONE_PAYMENT"} readOnly />
                <p>휴대폰 결제</p>
                <S.PayOptionInput type="radio" onClick={() => setPayMentMethod("NAVERPAY")} checked={paymentMethod === "NAVERPAY"} readOnly />
                <p>네이버페이</p>
                <S.PayOptionInput type="radio" onClick={() => setPayMentMethod("KAKAOPAY")} checked={paymentMethod === "KAKAOPAY"} readOnly />
                <p>카카오페이</p>
              </S.PayOptionWrapper>
            </S.PayMentMethodSection>
            <S.PayMentDetailSection>
              <S.SectionTitle>최종 결제 정보</S.SectionTitle>
              <S.PayMentWrapper>
                <p>
                  - 상품 금액
                  <span>{sumProductPrice.toLocaleString()} 원</span>
                </p>
                <p>
                  - 할인 금액
                  <span>0 원</span>
                </p>
                <S.ShippingFee>
                  - 베송비
                  <span>{sumShipping.toLocaleString()} 원</span>
                </S.ShippingFee>
                <S.PayMentPrice>
                  - 결제
                  <span>{totalOrderProductPrice.toLocaleString()} 원</span>
                </S.PayMentPrice>
                <S.AgreeMentWrapper>
                  <S.AgreeMentInput type="checkbox" />
                  <span>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</span>
                </S.AgreeMentWrapper>
                <S.PayMentBtn type="submit">PAYMENT</S.PayMentBtn>
              </S.PayMentWrapper>
            </S.PayMentDetailSection>
          </S.PayMentInfoWrapper>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
