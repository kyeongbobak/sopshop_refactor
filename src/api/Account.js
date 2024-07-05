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
  console.log(userId);
  const res = await Instance.post(`/accounts/signup/valid/username/`, { username: userId });
  return res.data;
};

// 사업자 등록번호 검증하기
export const validateCompanyNumber = async (companyNumber) => {
  console.log(companyNumber);
  const res = await Instance.post(`/accounts/signup/valid/company_registration_number/`, { company_registration_number: companyNumber });
  console.log(res);
  return res.data;
};
