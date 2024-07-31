import { useEffect, useState } from "react";
import { getCartList } from "../api/Cart";
import { CartListState } from "../atom/Atom";
import { useSetRecoilState } from "recoil";

// 커스텀 훅 useCartList 정의
const useCartList = (token, userTypeValue) => {
  const [cartList, setCartList] = useState([]);

  const setCartListState = useSetRecoilState(CartListState);

  useEffect(() => {
    const getShoppingList = async () => {
      if (token && userTypeValue === "BUYER") {
        const res = await getCartList(token);
        setCartList(res.results);
        setCartListState(res.count);
      }
    };

    getShoppingList();
  }, [token, userTypeValue, setCartListState]);

  const refetch = async () => {
    if (token && userTypeValue === "BUYER") {
      const res = await getCartList(token);
      setCartList(res.results);
      setCartListState(res.count);
    }
  };

  return { cartList, refetch };
};

export default useCartList;
