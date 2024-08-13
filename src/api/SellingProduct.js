import axios from "axios";
import { Instance } from "./Instance/Instance";

// 판매하는 상품 불러오기
export const getSellingProducts = async (token) => {
  try {
    const res = await Instance.get(`/api/v1/seller`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 상품 수정하기
export const modifySellingProduct = async (token, formData, productId) => {
  try {
    const res = await Instance.put(`/api/v1/products/${productId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 상품 삭제하기
export const deleteSellingProduct = async (token, productId) => {
  console.log(token, productId);
  try {
    const res = await Instance.delete(`/api/v1/products/${productId}`, {
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

// 상품 등록하기
export const createProduct = async ({ token, formData }) => {
  try {
    const res = await axios.post(`https://openmarket.aroxima.dev/api/v1/products`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
