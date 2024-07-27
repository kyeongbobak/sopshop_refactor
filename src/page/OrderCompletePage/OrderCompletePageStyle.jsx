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
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
`;

export const Section = styled.section`
  width: 600px;
  margin: 30px 0;
`;

export const OrderInfoWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const ProductInfoWrapper = styled.div`
  p {
    font-family: "Pretendard";
  }
`;

export const OrderDetailWrapper = styled.div`
  div,
  p,
  span {
    font-family: "Pretendard";
  }
`;

export const DeliveryInfoWrapper = styled.div``;

export const PayMentMethodWrapper = styled.div``;

export const TotalPriceWrapper = styled.div``;

export const ProductImage = styled.img`
  width: 320px;
  height: 380px;
  object-fit: cover;
`;

export const ProductInfoCommonStyle = css`
  padding-bottom: 8px;
  font-size: var(--font-lg-size);
  font-weight: var(--font-light);
  color: #7a7a7b;
`;

export const ProductName = styled.p`
  margin-top: 30px;
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
  display: inline-block;
  margin-top: 30px;
  font-size: var(--font-lg-size);
  font-weight: var(--font-light);
  text-decoration: underline;
`;

export const TitleCommonStyle = css`
  font-size: var(--font-max-size);
  font-weight: var(--font-medium);
  margin: 20px 0;
`;

export const SectionTitle = styled.h2`
  ${TitleCommonStyle}
`;

export const OrderDetailTitle = styled.h3`
  ${TitleCommonStyle}
`;

export const OrderNumber = styled.div``;

export const DeliveryStatus = styled.div``;

export const DeliveryAddress = styled.div``;

export const Receiver = styled.div``;

export const Address = styled.div``;

export const PhoneNumber = styled.div``;
export const OrderPrice = styled.div``;

export const ShippingFee = styled.div``;

export const TotalPice = styled.div``;
