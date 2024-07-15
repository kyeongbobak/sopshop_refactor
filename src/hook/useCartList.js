import { useEffect, useState } from "react";
import { getCartList } from "../api/Cart";

// 커스텀 훅 useCartList 정의
const useCartList = (token) => {
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    if (token) {
      const getShoppingList = async () => {
        const res = await getCartList(token);
        setCartList(res.results);
      };
      getShoppingList();
    }
  }, [token]);

  return { cartList };
};

export default useCartList;
