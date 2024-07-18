import { useEffect, useState } from "react";
import { getCartList } from "../api/Cart";

const getShoppingList = async (token, setCartList) => {
  const res = await getCartList(token, setCartList);
  setCartList(res.results);
};

// 커스텀 훅 useCartList 정의
const useCartList = (token) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    if (token) {
      getShoppingList(token, setCartList);
    }
  }, [token]);

  const refetch = () => {
    getShoppingList(token, setCartList);
  };

  return { cartList, refetch };
};

export default useCartList;
