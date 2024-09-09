import { useState } from "react";

// 커스텀 훅 useAlertModal 정의
const useAlertModal = () => {
  const [modalState, setModalState] = useState({
    isVisible: false,
    text: "예",
    submitText: "아니오",
    onCancel: () => closeModal(),
    onSubmit: () => {},
    content: "",
  });

  const showModal = (config) => {
    setModalState({
      isVisible: true,
      ...config,
    });
  };

  const closeModal = () => {
    setModalState((prevState) => ({
      ...prevState,
      isVisible: false,
    }));
  };

  return { modalState, showModal, closeModal };
};

export default useAlertModal;
