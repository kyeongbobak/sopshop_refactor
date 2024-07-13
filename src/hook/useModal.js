const { useState } = require("react");

const useModal = () => {
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

export default useModal;
