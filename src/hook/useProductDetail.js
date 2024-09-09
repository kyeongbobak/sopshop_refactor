import { useEffect, useState } from "react";
import { getProductDetails } from "../api/Product";

// 커스텀 훅 useProductDetail 정의
const useProductDetail = (token, productIds) => {
  console.log(productIds);
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    const getProductInfo = async () => {
      const promises = productIds.map((i) => getProductDetails(i));
      const results = await Promise.all(promises);
      setProductInfo(results);
    };
    getProductInfo();
  }, [productIds, token]);

  return { productInfo };
};

export default useProductDetail;
