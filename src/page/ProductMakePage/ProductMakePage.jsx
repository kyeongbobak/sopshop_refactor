import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import SellerCenterHeader from "../../components/SellerCenterHeader/SellerCenterHeader";
import SellerCenterSideMenu from "../../components/SellerCenterSideMenu/SellerCenterSideMenu";
import uploadImage from "../../assets/img/image.png";
import * as S from "./ProductMakeStyle";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../../api/SellingProduct";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { useNavigate } from "react-router-dom";

export default function ProductMakePage() {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectImage, setSelectImage] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState("");

  const token = useRecoilValue(userToken);

  const fileInputRef = useRef(null);

  const { register, handleSubmit, getValues } = useForm();

  const navigator = useNavigate();

  const handleUploadImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setSelectImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const createMutation = useMutation({
    mutationFn: async ({ token, formData }) => createProduct({ token, formData }),
    onSuccess: (data) => {
      const productId = data.product_id;
      navigator(`/products/${productId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleCreateProduct = () => {
    const { productName, price, shippingFee, stock } = getValues();

    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("image", selectImage);
    formData.append("price", price);
    formData.append("shipping_method", deliveryMethod);
    formData.append("shipping_fee", shippingFee);
    formData.append("stock", stock);
    formData.append("product_info", "앞접시나 반찬접시");

    createMutation.mutate({ token, formData });
  };

  return (
    <>
      <SellerCenterHeader />
      <SellerCenterSideMenu />
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(handleCreateProduct)}>
          <S.Section>
            <S.ProductImageWrapper>
              {imagePreview ? (
                <S.ProductImage src={imagePreview} alt="상품 이미지 미리보기" />
              ) : (
                <S.PreviewImage>
                  <S.IconImage src={uploadImage} alt="uploadImage" onClick={handleUploadImage} />
                </S.PreviewImage>
              )}
              <input id="file-input" type="file" hidden ref={fileInputRef} onChange={handleImageChange} />
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
                  <S.Input {...register("price")} />
                  <strong>원</strong>
                </div>
              </S.ProductPriceWrapper>
              <S.DeliveryMethodWrapper>
                <span>배송방법</span>
                <S.ButtonWrapper>
                  <button
                    type="button"
                    onClick={() => {
                      setDeliveryMethod("택배");
                    }}
                    className={deliveryMethod === "택배" ? "active" : ""}
                  >
                    택배
                  </button>
                </S.ButtonWrapper>
              </S.DeliveryMethodWrapper>
              <S.ShippingFeeWrapper>
                <span>기본 배송비</span>
                <div>
                  <S.Input {...register("shippingFee")} />
                  <strong>원</strong>
                </div>
              </S.ShippingFeeWrapper>
              <S.StockWrapper>
                <span>재고</span>
                <div>
                  <S.Input {...register("stock")} />
                  <strong>개</strong>
                </div>
              </S.StockWrapper>
            </S.ProductDetailWrapper>
          </S.Section>
          <S.Section>
            <S.ProductDetailInfoWrapper>
              <span>상품 상세 정보</span>
              <S.InfoContents>Editor</S.InfoContents>
              <S.BtnWrapper>
                <S.CancelBtn>취소</S.CancelBtn>
                <S.SavedBtn type="submit">저장하기</S.SavedBtn>
              </S.BtnWrapper>
            </S.ProductDetailInfoWrapper>
          </S.Section>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
