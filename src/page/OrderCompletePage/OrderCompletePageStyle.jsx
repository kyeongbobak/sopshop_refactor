import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 18px 0;
  border-top: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);
  font-size: var(--font-lg-size);
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
`;

export const Section = styled.section`
  margin: 30px 0;
`;

export const OrderInfoWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const ProductInfoWrapper = styled.div`
  height: 574px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  p {
    font-family: "Pretendard";
  }
`;

export const OrderDetailWrapper = styled.div`
  width: 500px;

  div,
  p,
  span {
    font-family: "Pretendard";
  }
`;

export const DeliveryInfoWrapper = styled.div``;

export const PayMentMethodWrapper = styled.div`
  border-bottom: 1px solid #d4d7da;
  p {
    padding-bottom: 20px;
  }
`;

export const TotalPriceWrapper = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
`;

export const ProductImage = styled.img`
  width: 480px;
  height: 586px;
  object-fit: cover;
`;

export const ProductInfoCommonStyle = css`
  padding-bottom: 8px;
  font-size: var(--font-lg-size);
  font-weight: var(--font-light);
  color: #7a7a7b;
`;

export const ProductName = styled.p`
  padding-bottom: 10px;
  font-size: var(--font-lg-size);
  font-weight: var(--font-medium);
`;

export const ProductPrice = styled.p`
  font-size: var(--font-lg-size);
  font-weight: var(--font-light);
  color: #d24139;
`;

export const ProductInfo = styled.p`
  ${ProductInfoCommonStyle}
  margin-top: 30px;
`;

export const ProductStoreName = styled.p`
  ${ProductInfoCommonStyle}
`;

export const StyledLink = styled(Link)`
  display: flex;
  margin-top: auto;
  font-size: var(--font-lg-size);
  font-weight: var(--font-light);
  text-decoration: underline;
`;

export const TitleCommonStyle = css`
  font-size: var(--font-max-size);
  font-weight: var(--font-medium);
`;

export const SectionTitle = styled.h2`
  ${TitleCommonStyle}
`;

export const OrderDetailTitle = styled.h3`
  ${TitleCommonStyle}
  margin: 20px 0;
`;

export const OrderNumber = styled.div`
  p {
    padding: 20px 0;
    font-weight: var(--font-semi-bold);
  }

  border-bottom: 1px solid #d4d7da;
`;

export const DeliveryStatus = styled.div`
  span {
    display: inline-block;
    font-weight: var(--font-bold);
    padding-bottom: 10px;
  }

  p {
    padding-bottom: 20px;
  }
`;

export const DeliveryAddress = styled.div`
  border-bottom: 1px solid #d4d7da;

  span {
    display: inline-block;
    font-weight: var(--font-bold);
    padding-bottom: 10px;
  }
`;

export const Receiver = styled.div`
  padding: 3px 0;
`;

export const Address = styled.div`
  padding: 3px 0;
`;

export const PhoneNumber = styled.div`
  padding: 3px 0px 20px 0px;
`;

export const OrderPrice = styled.div``;

export const ShippingFee = styled.div``;

export const TotalPice = styled.div`
  span,
  p {
    font-size: 22px;
    font-weight: var(--font-bold);
  }
`;
