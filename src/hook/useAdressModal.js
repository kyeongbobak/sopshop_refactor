import { useState } from "react";

const useAdressModal = () => {
  const [modalState, setModalState] = useState({
    isVisible: false,
  });

  const completeHander = (data) => {
    console.log(data);
  };
};

export default useAdressModal;
