import axios from "axios";

// 상품 전체 불러오기
export const getProducts = async (token) => {
  try {
    const promises = [];
    if (token) {
      const instance = axios.create({
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      promises.push(instance.get("https://openmarket.weniv.co.kr/products/?page=4"));
      promises.push(instance.get("https://openmarket.weniv.co.kr/products/?page=5"));
      promises.push(instance.get("https://openmarket.weniv.co.kr/products/?page=6"));
    } else {
      promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=4"));
      promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=5"));
      promises.push(fetch("https://openmarket.weniv.co.kr/products/?page=6"));
    }
    const res = await Promise.all(promises);
    const data = await Promise.all(res.map((res) => (token ? res.data : res.json())));
    const mergedData = data.flatMap((result) => result.results);
    const newArray = mergedData.filter((i) => i.store_name === "FLOPS" || i.store_name === "Ditto" || i.store_name === "Too_much_shop");

    return newArray;
  } catch (error) {
    console.log("error");
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
