import { useState } from "react";
import * as S from "./SellerCenterSideMenuStyle";

export default function SellerCenterSideMenu() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <S.Wrapper>
        <ul>
          <li onClick={() => setSelected("SellingProducts")} className={selected === "SellingProducts" ? "active" : ""}>
            <S.StyledLink to={``}>판매중인 상품</S.StyledLink>
          </li>
          <li onClick={() => setSelected("Order&Delivery")} className={selected === "Order&Delivery" ? "active" : ""}>
            <S.StyledLink>주문 / 배송</S.StyledLink>
          </li>
          <li onClick={() => setSelected("Q&A/Reviews")} className={selected === "Q&A/Reviews" ? "active" : ""}>
            <S.StyledLink>문의 / 리뷰</S.StyledLink>
          </li>
          <li onClick={() => setSelected("Analytics")} className={selected === "Analytics" ? "active" : ""}>
            <S.StyledLink>통계</S.StyledLink>
          </li>
          <li onClick={() => setSelected("ShopSettings")} className={selected === "ShopSettings" ? "active" : ""}>
            <S.StyledLink>스토어 설정</S.StyledLink>
          </li>
          <li onClick={() => setSelected("AddProduct")} className={selected === "AddProduct" ? "active" : ""}>
            <S.StyledLink to={``}>상품 등록</S.StyledLink>
          </li>
        </ul>
      </S.Wrapper>
    </>
  );
}
