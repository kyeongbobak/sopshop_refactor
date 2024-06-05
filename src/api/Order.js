import axios from "axios";

// 주문 목록 가져오기
export const getOrderList = async (token) => {
  try {
    const instance = axios.create({
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    const res = await instance.get(`https://openmarket.weniv.co.kr/order/`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// 상품 주문생성하기, 카트 주문생성하기
export const order = async (directOrder, cartOrder, token, orderList) => {
  try {
    const instance = axios.create({
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    const res = orderList.length === 1 ? await instance.post("https://openmarket.weniv.co.kr/order/", directOrder) : await instance.post("https://openmarket.weniv.co.kr/order/", cartOrder);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
