import { Instance } from "../api/Instance/Instance";

// 장바구니 목록 보기
export const getCartList = async (token) => {
  console.log(token);
  try {
    const res = await Instance.get("/api/v1/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 물건 넣기
export const addToCart = async (token, body) => {
  console.log(body);
  try {
    const res = await Instance.post(`/api/v1/cart`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// // 장바구니 수량 수정하기
// export const modifyCartQuantity = async (token, body, modifiedCartItemId) => {
//   try {
//     const instance = axios.create({
//       headers: {
//         Authorization: `JWT ${token}`,
//       },
//     });

//     const res = await instance.put(`https://openmarket.weniv.co.kr/cart/${modifiedCartItemId}/`, body);
//     return await res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // 장바구니 전부 삭제하기
// export const deleteAllCartItem = async (token) => {
//   try {
//     const instance = axios.create({
//       headers: {
//         Authorization: `JWT ${token}`,
//       },
//     });
//     const res = await instance.delete(`https://openmarket.weniv.co.kr/cart/`);
//     return await res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // 장바구니 개별 삭제하기
// export const deleteCartItem = async (token, cartItemId) => {
//   try {
//     const instance = axios.create({
//       headers: {
//         Authorization: `JWT ${token}`,
//       },
//     });

//     const res = await instance.delete(`https://openmarket.weniv.co.kr/cart/${cartItemId}`);
//     return await res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
