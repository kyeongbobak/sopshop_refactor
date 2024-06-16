import { Instance } from "./Instance/Instance";

// 계정 만들기
export const signUp = async (body) => {
  try {
    const res = await Instance.post(`/accounts/signup/`, body);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 계정 검증하기
export const validateAccount = async (userId) => {
  const res = await Instance.post(`/accounts/signup/valid/username/`, { username: userId });
  return res.data;
};
