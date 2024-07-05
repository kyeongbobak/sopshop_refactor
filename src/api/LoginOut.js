import { Instance } from "./Instance/Instance";

// 로그인
export const login = async (body) => {
  console.log(body);
  try {
    const res = await Instance.post(`/api/v1/accounts/login`, body);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error");
  }
};

// 로그아웃
export const logout = async (token) => {
  try {
    const res = await Instance.post(`/api/v1/accounts/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    console.log(res.detail);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
