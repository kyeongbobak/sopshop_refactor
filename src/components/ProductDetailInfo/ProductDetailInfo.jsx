import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isLogin, userToken } from "../../atom/Atom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProductDetails } from "../../api/Product";
import { addToCart } from "../../api/Cart";
import useModal from "../../hook/useModal";
import * as S from "../../components/ProductDetailInfo/ProductDetailInfoStyle";
import CountControl from "../CountControl/CountControl";
import Modal from "../Modal/Modal";
import useCartList from "../../hook/useCartList";

export default function ProductDetailInfo() {
  const { ProductId } = useParams();
  const [detailInfo, setDetailInfo] = useState("");
  const [count, setCount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const { modalState, showModal, closeModal } = useModal();

  const token = useRecoilValue(userToken);
  const { cartList } = useCartList(token);
  const isLoggedIn = useRecoilValue(isLogin);
  const navigate = useNavigate();

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  useEffect(() => {
    const getProductDetail = async () => {
      const res = await getProductDetails(ProductId);
      console.log(res);
      setDetailInfo(res);
    };
    getProductDetail();
  }, [ProductId]);

  useEffect(() => {
    // if (cartList.length === 0) return;
    const data = cartList.map((i) => i.product_id);
    const isProductInCart = data.includes(parseInt(ProductId));
    console.log(isProductInCart);
    setIsInCart(isProductInCart);
  }, [cartList, ProductId]);

  const addToShoppingCart = async () => {
    const body = {
      product_id: `${parseInt(ProductId)}`,
      quantity: `${count}`,
      check: isInCart,
    };
    const res = await addToCart(token, body);
    console.log(res);
  };

  const directOrder = () => {
    addToShoppingCart();
    navigate(`/order`);
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
          <CountControl isStock={detailInfo.stock} count={count} onCountChange={handleCountChange} />
          <S.OrderDetail>
            <span>Total Price</span>
            <div>
              <span>총 수량 {count} 개</span>
              <strong>{detailInfo.price ? (parseInt(detailInfo.price) * count).toLocaleString() : 0}원</strong>
            </div>
          </S.OrderDetail>
          <S.ButtonWrapper>
            {isLoggedIn ? (
              <S.BuyButton onClick={() => directOrder()}>Buy Now</S.BuyButton>
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
            {isLoggedIn ? (
              <>
                {isInCart ? (
                  <S.MButton
                    onClick={() =>
                      showModal({
                        text: "아니오",
                        submitText: "예",
                        onCancel: closeModal,
                        onSubmit: () => {
                          addToShoppingCart();
                          navigate(`/cart`);
                        },
                        content: "이미 장바구니에 있는 상품입니다. 장바구니로 이동할까요?",
                      })
                    }
                  >
                    Add To Cart
                  </S.MButton>
                ) : (
                  <S.MButton
                    onClick={() => {
                      addToShoppingCart();
                      navigate(`/cart`);
                    }}
                  >
                    Add To Cart
                  </S.MButton>
                )}
              </>
            ) : (
              <S.MButton
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
                Add To Cart
              </S.MButton>
            )}
            <Modal modalState={modalState} />
          </S.ButtonWrapper>
        </S.ProductDetailWrapper>
      </S.Wrapper>
    </>
  );
}
