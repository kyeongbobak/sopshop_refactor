import axios from "axios";

// 로그인
export const login = async (body) => {
  try {
    const res = await fetch("https://openmarket.weniv.co.kr/accounts/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res.json();
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
