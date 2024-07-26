import * as S from "./AlertModalStyle";

export default function AlertModal({ modalState }) {
  if (!modalState.isVisible) {
    return null;
  }

  return (
    <S.Wrapper>
      <S.ContentsWrapper>
        <p>{modalState.content}</p>
        <S.ButtonWrapper>
          <S.SButton onClick={modalState.onCancel}>{modalState.text}</S.SButton>
          <S.SButton onClick={modalState.onSubmit}>{modalState.submitText}</S.SButton>
        </S.ButtonWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
