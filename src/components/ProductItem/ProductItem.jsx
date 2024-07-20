import * as S from "../ProductItem/ProductItemStyle";

export default function ProductItem({ productId, productImage, productBrandName, productName, productPrice }) {
  return (
    <S.Product>
      <S.StyleLink to={`/products/${productId}`}>
        <S.Image src={productImage} />
      </S.StyleLink>
      <S.BrandName>{productBrandName}</S.BrandName>
      <S.Name to={`/products/${productId}`}>{productName}</S.Name>
      <S.Price>{productPrice} 원</S.Price>
    </S.Product>
  );
}
