import React from "react";
import * as S from "./CountControlStyle";
import MinusIcon from "../../assets/img/icon-minus-line.png";
import PlusIcon from "../../assets/img/icon-plus-line.png";

export default function CountControl({ count, isStock, onCountChange }) {
  console.log(count);
  const handleOnCount = (increment) => {
    const newCount = count + increment;
    if (newCount < 1) {
      return;
    } else if (newCount > isStock) {
      alert(`이 제품의 최대 구매 가능한 수량은 ${isStock}개 입니다.`);
      return;
    }
    onCountChange(newCount);
  };

  return (
    <>
      <S.Wrapper>
        <div>
          <button onClick={() => handleOnCount(-1)}>
            <img src={MinusIcon} alt="" />
          </button>
          <p>{count}</p>
          <button onClick={() => handleOnCount(+1)}>
            <img src={PlusIcon} alt="" />
          </button>
        </div>
      </S.Wrapper>
    </>
  );
}
