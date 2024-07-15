import { useEffect, useState } from "react";
import { getProductDetails } from "../api/Product";

// 커스텀 훅 useProductDetail 정의
const useProductDetail = (productId, token) => {
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    const getProductInfo = async () => {
      const res = await getProductDetails(productId);
      console.log(res);
      setProductInfo(res);
    };
    getProductInfo();
  }, [productId, token]);

  return { productInfo };
};

export default useProductDetail;
