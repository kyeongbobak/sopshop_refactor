import DaumPostcode from "react-daum-postcode";
import * as S from "./ZipCodeSearchModalStyle";

export default function ZipCodeSearchModal({ onComplete }) {
  const completeHandler = (data) => {
    onComplete(data);
  };

  return (
    <>
      <S.Wrapper>
        <DaumPostcode onComplete={completeHandler} />
      </S.Wrapper>
    </>
  );
}
