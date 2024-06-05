// 계정 만들기
export const signUp = async (body) => {
  try {
    const res = await fetch("https://openmarket.weniv.co.kr/accounts/signup/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return { res, data };
  } catch (error) {
    console.log(error);
  }
};

// 계정 검증하기
export const validateAccount = async (userId) => {
  try {
    const res = await fetch("https://openmarket.weniv.co.kr/accounts/signup/valid/username/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: userId }),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
