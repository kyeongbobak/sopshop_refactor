import styled, { css } from "styled-components";

export const InputCommonStyle = css`
  width: 334px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid var(--black-color);
  font-size: var(--font-md-size);
`;

export const BorderCommonStyle = css`
  border-bottom: 1px solid var(--black-color);
  padding: 10px;
`;

export const Wrapper = styled.div`
  width: 1280px;
  margin: 100px auto;
  font-family: "Pretendard";
`;

export const BuyerInfoWrapper = styled.div`
  div {
    ${BorderCommonStyle}
  }
`;

export const ReceiverInfoWrapper = styled.div`
  ${BorderCommonStyle}
`;

export const PhoneInfoWrapper = styled.div`
  span {
    padding: 0px 9px;
  }
`;

export const ReceiverPhoneInfoWrapper = styled.div`
  ${BorderCommonStyle}

  span {
    padding: 0px 9px;
  }
`;

export const AddressInfoWrapper = styled.div`
  ${BorderCommonStyle}
  display: flex;
`;

export const DeliveryMessageWrapper = styled.div`
  ${BorderCommonStyle}
`;

export const AddressWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PayMentInfoWrapper = styled.div`
  display: flex;
  margin-top: 108px;
  justify-content: center;
  gap: 40px;
`;

export const PayOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid var(--black-color);

  p {
    padding: 0 20px 0 10px;
    font-family: "Pretendard";
    font-size: var(--font-md-size);
  }
`;

export const PayMentWrapper = styled.div`
  margin: 18px 0;
  padding: 30px;
  border: 1px solid var(--black-color);
  p {
    display: flex;
    justify-content: space-between;
    font-family: "Pretendard";
    font-size: var(--font-md-size);
    padding-bottom: 14px;
  }
`;

export const AgreeMentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-md-size);
  margin-top: 50px;

  span {
    margin-left: 10px;
  }
`;

export const PayMentMethodSection = styled.div`
  width: 710px;
`;

export const PayMentDetailSection = styled.div`
  width: 480px;
`;

export const SubTitle = styled.h2`
  padding-bottom: 18px;
  border-bottom: 1px solid var(--black-color);
  font-size: var(--font-max-size);
`;

export const SectionTitle = styled.h3`
  padding: 18px 0;
  margin-top: 40px;
  border-bottom: 1px solid var(--black-color);
  font-size: var(--font-lg-size);
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: inline-block;
  width: 80px;
  padding-right: 15px;
  font-size: var(--font-md-size);
`;

export const Input = styled.input`
  ${InputCommonStyle}
`;

export const FrontNumberInput = styled.input`
  ${InputCommonStyle}
  width: 80px;
`;

export const PhoneNumberInput = styled.input`
  ${InputCommonStyle}
  width: 100px;
`;

export const ZipCodeAddressInput = styled.input`
  ${InputCommonStyle}
  width: 170px;
  height: 40px;
`;

export const StreetAddressInput = styled.input`
  ${InputCommonStyle}
  margin: 10px 0;
`;

export const DetailAddressInput = styled.input`
  ${InputCommonStyle}
`;

export const PayOptionInput = styled.input``;

export const AgreeMentInput = styled.input``;

export const ZipCodeSearchBtn = styled.button`
  width: 154px;
  height: 40px;
  margin-left: 10px;
  font-size: var(--font-md-size);
  text-align: center;
  color: var(--white-color);
  background-color: var(--black-color);
`;

export const PayMentBtn = styled.button`
  width: 220px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: 100px;
  text-align: center;
  background-color: var(--black-color);
  font-size: var(--font-md-size);
  color: var(--white-color);
`;

export const ShippingFee = styled.p`
  border-bottom: 1px solid var(--black-color);
  margin-bottom: 29px;
`;

export const PayMentPrice = styled.p`
  span {
    font-size: 20px;
    font-weight: var(--font-bold);
  }
`;
