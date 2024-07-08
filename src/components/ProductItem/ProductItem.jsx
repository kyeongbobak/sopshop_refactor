import * as P from "../ProductItem/ProductItemStyle";

export default function ProductItem({ productId, productImage, productStoreName, productName, productPrice }) {
  return (
    <P.Product>
      <P.ProductImage src={productImage} />
      <P.ProductStoreName>{productStoreName}</P.ProductStoreName>
      <P.ProductName to={`/products/${productId}`}>{productName}</P.ProductName>
      <P.ProductPrice>{productPrice} 원</P.ProductPrice>
    </P.Product>
  );
}
