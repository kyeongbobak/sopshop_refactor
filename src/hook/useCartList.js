import { useEffect, useState } from "react";
import { getCartList } from "../api/Cart";

// 커스텀 훅 useCartList 정의
const useCartList = (token, userTypeValue) => {
  const [cartList, setCartList] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getShoppingList = async () => {
      if (token && userTypeValue === "BUYER") {
        const res = await getCartList(token);
        setCartList(res.results);
        const productId = res.results.map((item) => item.product_id);
        setCartProducts(productId);
      }
    };

    getShoppingList();
  }, [token, userTypeValue]);

  const refetch = async () => {
    if (token && userTypeValue === "BUYER") {
      const res = await getCartList(token);
      setCartList(res.results);
      const productId = res.results.map((list) => list.product_id);
      setCartProducts(productId);
    }
  };

  return { cartList, refetch, cartProducts };
};

export default useCartList;
