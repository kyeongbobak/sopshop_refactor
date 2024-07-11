const { useState } = require("react");

const useModal = () => {
  const [modalState, setModalState] = useState({
    isVisible: false,
    text: "",
    submitText: "",
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
