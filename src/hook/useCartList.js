import { useEffect, useState } from "react";
import { getCartList } from "../api/Cart";

const useCartList = (token, userTypeValue) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const getShoppingList = async () => {
      if (token && userTypeValue === "BUYER") {
        const res = await getCartList(token);
        setCartList(res.results);
      }
    };

    getShoppingList();
  }, [token, userTypeValue]);

  const refetch = async () => {
    if (token && userTypeValue === "BUYER") {
      const res = await getCartList(token);
      setCartList(res.results);
    }
  };

  return { cartList, refetch };
};

export default useCartList;
