// 카트에 담긴 상품의 총 금액을 계산하는 함수
export const totalProductPrice = (productInfos, cartList) => {
  const itemInCart = productInfos.filter((product) => cartList.find((list) => list.product_id === product.product_id));
  return itemInCart.reduce((acc, cur, index) => acc + cur.price * cartList[index].quantity, 0);
};

// 카트에 담긴 상품의 총 베송비를을 계산하는 함수
export const totalShippingPrice = (productInfos) => {
  return productInfos.reduce((acc, cur) => acc + cur.shipping_fee, 0);
};
