import * as S from "./OrderFormStyle";

export default function OrderForm() {
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
          <S.PhoneInputWrapper>
            <S.Label>휴대폰</S.Label>
            <S.Input />
            <span> - </span>
            <S.Input />
            <span> - </span>
            <S.Input />
          </S.PhoneInputWrapper>
          <div>
            <S.Label>이메일</S.Label>
            <S.Input />
          </div>
        </S.BuyerInfoWrapper>
        <S.Form>
          <S.SectionTitle>배송지 정보</S.SectionTitle>
          <div>
            <S.Label>수령인</S.Label>
            <S.Input />
          </div>
          <div>
            <S.Label>휴대폰</S.Label>
            <S.Input />
            <span> - </span>
            <S.Input />
            <span> - </span>
            <S.Input />
          </div>
          <div>
            <S.Label>배송 주소</S.Label>
            <S.Input />
            <S.Input />
            <S.Input />
          </div>
          <div>
            <S.Label>배송 메세지</S.Label>
            <S.Input />
          </div>
          <div>
            <div>
              <h5>결제 수단</h5>
              <div>
                <label className="a11y-hidden">결제 수단</label>
                <S.Input />
                <S.Input />
                <S.Input />
                <S.Input />
              </div>
            </div>
            <div>
              <S.SectionTitle>최종 결제 정보</S.SectionTitle>
              <div>
                <p>
                  - 상품 금액
                  <span></span>
                </p>
                <p>
                  - 할인 금액
                  <span></span>
                </p>
                <p>
                  - 베송비
                  <span></span>
                </p>
                <p>
                  - 결제금액
                  <span></span>
                </p>
                <S.Input />
                <S.Button>결제하기</S.Button>
              </div>
            </div>
          </div>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
