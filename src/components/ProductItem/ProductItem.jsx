import * as S from "../ProductItem/ProductItemStyle";

export default function ProductItem({ productId, productImage, productBrandName, productName, productPrice, productStock }) {
  console.log(productStock);
  return (
    <li>
      <S.StyleLink to={`/products/${productId}`}>
        <S.Image src={productImage} />
      </S.StyleLink>
      <S.BrandName>{productBrandName}</S.BrandName>
      <S.Name to={`/products/${productId}`}>{productName}</S.Name>
      <S.Price>{productStock === 0 ? "SOLD OUT" : `${productPrice} 원`}</S.Price>
    </li>
  );
}
