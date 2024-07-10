import * as S from "../ProductItem/ProductItemStyle";

export default function ProductItem({ productId, productImage, productStoreName, productName, productPrice }) {
  return (
    <S.Product>
      <S.StyleLink to={`/products/${productId}`}>
        <S.ProductImage src={productImage} />
      </S.StyleLink>
      <S.ProductStoreName>{productStoreName}</S.ProductStoreName>
      <S.ProductName to={`/products/${productId}`}>{productName}</S.ProductName>
      <S.ProductPrice>{productPrice} 원</S.ProductPrice>
    </S.Product>
  );
}
