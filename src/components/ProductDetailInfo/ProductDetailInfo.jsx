import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../atom/Atom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProductDetails } from "../../api/Product";
import useModal from "../../hook/useModal";
import * as S from "../../components/ProductDetailInfo/ProductDetailInfoStyle";
import CountControl from "../CountControl/CountControl";
import Modal from "../Modal/Modal";

export default function ProductDetailInfo() {
  const { ProductId } = useParams();
  const [detailInfo, setDetailInfo] = useState({});
  const [count, setCount] = useState(0);
  const { modalState, showModal, closeModal } = useModal();
  console.log(modalState);

  const isLoggedIn = useRecoilValue(isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    const getProductDetail = async () => {
      const res = await getProductDetails(ProductId);
      console.log(res);
      setDetailInfo(res);
    };

    getProductDetail();
  }, [ProductId]);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <>
      <S.Wrapper>
        <S.ProductImage src={`${detailInfo.image}`} />
        <S.ProductDetailWrapper>
          <S.ProductBrandName>{detailInfo.store_name}</S.ProductBrandName>
          <S.ProductName>{detailInfo.product_name}</S.ProductName>
          <S.ProductPrice>
            {parseInt(detailInfo.price).toLocaleString()} <span>원</span>
          </S.ProductPrice>
          <S.ShippingInfo>{detailInfo.shipping_fee === "0" ? "무료배송" : "택배배송"}</S.ShippingInfo>
          <CountControl isStock={detailInfo.stock} onCountChange={handleCountChange} />
          <S.OrderDetail>
            <span>Total Price</span>
            <div>
              <span>총 수량 {count} 개</span>
              <strong>{detailInfo.price ? (parseInt(detailInfo.price) * count).toLocaleString() : 0}원</strong>
            </div>
          </S.OrderDetail>
          <S.ButtonWrapper>
            {isLoggedIn ? (
              <S.BuyButton onClick={() => navigate(`/cart`)}>Buy Now</S.BuyButton>
            ) : (
              <S.BuyButton
                onClick={() =>
                  showModal({
                    text: "아니오",
                    submitText: "예",
                    onCancel: closeModal,
                    onSubmit: () => navigate(`/login`),

                    content: "로그인이 필요한 서비스입니다. 로그인 하시겠습니까? ",
                  })
                }
              >
                Buy Now
              </S.BuyButton>
            )}
            <S.MButton>Add To Cart</S.MButton>
            <Modal modalState={modalState} />
          </S.ButtonWrapper>
        </S.ProductDetailWrapper>
      </S.Wrapper>
    </>
  );
}
