import { useEffect, useState } from "react";
import { getCartList } from "../api/Cart";

// 장바구니 목록 담아오는 동일한 api 함수 hook으로 추가
const useCartList = (token) => {
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    if (token) {
      const getShoppingList = async () => {
        const res = await getCartList(token);
        console.log(res.results);
        setCartList(res.results);
      };
      getShoppingList();
    }
  }, [token]);

  return { cartList };
};

export default useCartList;
