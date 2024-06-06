import axios from "axios";
import { Instance } from "./Instance/Instance";

// 로그인
export const login = async (body) => {
  console.log(body);
  try {
    const res = await Instance.post(`/accounts/login/`, body);
    return res.data;
  } catch (error) {
    console.log("error");
  }
};

// 로그아웃
export const logout = async (token) => {
  try {
    const instance = axios.create({
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    const res = await instance.post("https://openmarket.weniv.co.kr/accounts/logout/");
    return await res.data;
  } catch (error) {
    console.log(error);
  }
};
