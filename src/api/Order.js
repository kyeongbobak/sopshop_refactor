import { Instance } from "../api/Instance/Instance";

// 주문 목록 가져오기
export const getOrderList = async (token) => {
  try {
    const res = await Instance.get(`/api/v1/order/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.data;
  } catch (error) {
    console.log("error", error);
  }
};

// 상품 주문생성하기, 카트 주문생성하기
export const order = async (directOrder, token) => {
  try {
    const res = await Instance.post("/api/v1/order/", directOrder, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};
