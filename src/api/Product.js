import { Instance } from "./Instance/Instance";

// 상품 전체 불러오기
export const getProducts = async (token) => {
  try {
    const res = await Instance.get(`/api/v1/products/`, {
      Authorization: `Bearer ${token}`,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 상품 디테일
export const getProductContents = async (productId) => {
  try {
    const res = await fetch(`https://openmarket.weniv.co.kr/products/${productId}/`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// 상품 검색하기
export const search = async (setSearchedProductCount, setSearchResults, searchKeyword) => {
  try {
    const res = await fetch(`https://openmarket.weniv.co.kr/products/?search=${searchKeyword}`, {
      method: "GET",
    });

    const data = await res.json();
    setSearchedProductCount(data.count);
    setSearchResults(data.results);
  } catch (error) {
    console.error(error);
  }
};
