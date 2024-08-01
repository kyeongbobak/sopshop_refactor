import { Instance } from "./Instance/Instance";

export const getSellingProducts = async (token) => {
  console.log(token);
  try {
    const res = await Instance.get(`/api/v1/seller`, {
      Authorization: `Bearer ${token}`,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
