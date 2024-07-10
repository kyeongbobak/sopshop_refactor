import { useState } from "react";
import * as S from "./CountControlStyle";
import MinusIcon from "../../assets/img/icon-minus-line.png";
import PlusIcon from "../../assets/img/icon-plus-line.png";

export default function CountControl({ isStock }) {
  const [count, setCount] = useState(1);

  const handleOnCount = (count) => {
    setCount((prev) => {
      const newCount = prev + count;
      if (newCount < 1) {
        return 1;
      } else if (newCount > isStock) {
        alert(`이 제품의 최대 구매 가능한 수량은 ${newCount - 1}개 입니다.`);
        return isStock;
      }
      return newCount;
    });
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
