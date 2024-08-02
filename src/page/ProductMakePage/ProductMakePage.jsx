import { useState } from "react";
import { useForm } from "react-hook-form";
import SellerCenterHeader from "../../components/SellerCenterHeader/SellerCenterHeader";
import SellerCenterSideMenu from "../../components/SellerCenterSideMenu/SellerCenterSideMenu";
import uploadImage from "../../assets/img/image.png";
import * as S from "./ProductMakeStyle";

export default function ProductMakePage() {
  const [imagePreview, setImagePreview] = useState(null);

  const { register, handleSubmit, watch } = useForm();

  const handleImageChange = (e) => {
    //
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("image", file);
    console.log(formData);

    //
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <SellerCenterHeader />
      <SellerCenterSideMenu />
      <S.Wrapper>
        <S.Form>
          <S.ProductImageWrapper>
            <S.Label htmlFor="file-input">
              {imagePreview ? (
                //
                <S.ProductImage src={imagePreview} alt="상품 이미지 미리보기" />
              ) : (
                <div>
                  <S.IconImage src={uploadImage} alt="uploadImage" />
                </div>
              )}
            </S.Label>
            <input id="file-input" type="file" hidden onChange={handleImageChange} />
          </S.ProductImageWrapper>
          <S.ProductDetailWrapper>
            <S.ProductNameWrapper>
              <span>상품명</span>
              <S.ProductNameInput
                {...register("productName", {
                  maxLength: 50,
                })}
              />
            </S.ProductNameWrapper>
            <S.ProductPriceWrapper>
              <span>판매가</span>
              <div>
                <S.Input />
                <strong>원</strong>
              </div>
            </S.ProductPriceWrapper>
            <S.DeliveryMethodWrapper>
              <span>배송방법</span>
              <S.ButtonWrapper>
                <S.DeliveryBtn>택배, 소포, 등기</S.DeliveryBtn>
                <S.DirectDeliveryBtn>직접 배송(화물 배달)</S.DirectDeliveryBtn>
              </S.ButtonWrapper>
            </S.DeliveryMethodWrapper>
            <S.ShippingFeeWrapper>
              <span>기본 배송비</span>
              <div>
                <S.Input />
                <strong>원</strong>
              </div>
            </S.ShippingFeeWrapper>
            <S.StockWrapper>
              <span>재고</span>
              <div>
                <S.Input />
                <strong>개</strong>
              </div>
            </S.StockWrapper>
          </S.ProductDetailWrapper>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
