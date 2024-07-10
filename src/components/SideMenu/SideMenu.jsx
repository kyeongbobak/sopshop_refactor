import { useState } from "react";
import * as S from "./SideMenuStyle";

export default function SideMenu() {
  const [selected, setSelected] = useState("FLOPS");

  return (
    <S.Wrapper>
      <ul>
        <li>
          <S.StyledLink to={`/About`}>About</S.StyledLink>
        </li>
        <li>
          <S.StyledLink to={`/`}>Shop</S.StyledLink>
        </li>
        <div>
          <li>
            <S.BrandName to={`/FLOPS`} className={selected === "FLOPS" ? "active" : ""} onClick={() => setSelected("FLOPS")}>
              FLOPS
            </S.BrandName>
          </li>
          <li>
            <S.BrandName to={`/Ditto`} className={selected === "Ditto" ? "active" : ""} onClick={() => setSelected("Ditto")}>
              Ditto
            </S.BrandName>
          </li>
          <li>
            <S.BrandName to={`/Too_much_shop`} className={selected === "Too_much_shop" ? "active" : ""} onClick={() => setSelected("Too_much_shop")}>
              Too_much_shop
            </S.BrandName>
          </li>
        </div>
        <li>
          <S.StyledLink to={`/Notice`}>Notice</S.StyledLink>
        </li>
        <li>
          <S.StyledLink to={`/Q&A`}>Q & A</S.StyledLink>
        </li>
        <li>
          <S.StyledLink to={`/Review`}>Review</S.StyledLink>
        </li>
      </ul>
    </S.Wrapper>
  );
}
