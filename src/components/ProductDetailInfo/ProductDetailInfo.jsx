import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isLogin, userToken } from "../../atom/Atom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProductDetails } from "../../api/Product";
import { addToCart } from "../../api/Cart";
import useModal from "../../hook/useModal";
import useCartList from "../../hook/useCartList";
import CountControl from "../CountControl/CountControl";
import Modal from "../Modal/Modal";
import * as S from "../../components/ProductDetailInfo/ProductDetailInfoStyle";

export default function ProductDetailInfo() {
  const [product, setProduct] = useState("");
  const [count, setCount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const token = useRecoilValue(userToken);
  const isLoggedIn = useRecoilValue(isLogin);

  const { ProductId } = useParams();

  const { modalState, showModal, closeModal } = useModal();
  const { cartList } = useCartList(token);

  const navigate = useNavigate();

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  useEffect(() => {
    const getProductDetail = async () => {
      const res = await getProductDetails(ProductId);
      console.log(res);
      setProduct(res);
    };
    getProductDetail();
  }, [ProductId]);

  useEffect(() => {
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
        <S.ProductImage src={`${product.image}`} />
        <S.ProductDetailWrapper>
          <S.ProductBrandName>{product.store_name}</S.ProductBrandName>
          <S.ProductName>{product.product_name}</S.ProductName>
          <S.ProductPrice>
            {parseInt(product.price).toLocaleString()} <span>원</span>
          </S.ProductPrice>
          <S.ShippingInfo>{product.shipping_fee === "0" ? "무료배송" : "택배배송"}</S.ShippingInfo>
          <CountControl isStock={product.stock} count={count} onCountChange={handleCountChange} />
          <S.OrderDetail>
            <span>Total Price</span>
            <div>
              <span>총 수량 {count} 개</span>
              <strong>{product.price ? (parseInt(product.price) * count).toLocaleString() : 0}원</strong>
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
