import { Instance } from "../api/Instance/Instance";

// 주문 목록 가져오기
export const getOrderList = async (token) => {
  try {
    const res = await Instance.get(`/api/v1/order/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return await res.data;
  } catch (error) {
    console.log("error", error);
  }
};

// export const order = async (directOrder, cartOrder, token, orderList) => {
//   try {
//     const instance = axios.create({
//       headers: {
//         Authorization: `JWT ${token}`,
//       },
//     });
//     const res = orderList.length === 1 ? await instance.post("https://openmarket.weniv.co.kr/order/", directOrder) : await instance.post("https://openmarket.weniv.co.kr/order/", cartOrder);
//     const data = await res.data;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// 상품 주문생성하기, 카트 주문생성하기
export const order = async (directOrder, cartOrder, token, orderList) => {
  try {
    const res =
      orderList.length === 1
        ? await Instance.post("api/v1/order/", directOrder)
        : await Instance.post("api/v1/order/", cartOrder, {
            headers: {
              Authorization: `JWT ${token}`,
            },
          });
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};
