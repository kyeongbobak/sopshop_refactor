import { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isLogin, userToken, orderType } from "../../atom/Atom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProductDetails } from "../../api/Product";
import { addToCart, modifyCartQuantity } from "../../api/Cart";
import useAlertModal from "../../hook/useAlertModal";
import useCartList from "../../hook/useCartList";
import CountControl from "../CountControl/CountControl";
import AlertModal from "../../components/Modal/AlertModal/AlertModal";
import * as S from "../../components/ProductDetailInfo/ProductDetailInfoStyle";

export default function ProductDetailInfo() {
  const [product, setProduct] = useState("");
  const [count, setCount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const token = useRecoilValue(userToken);
  const isLoggedIn = useRecoilValue(isLogin);
  const setOrderType = useSetRecoilState(orderType);

  const { productId } = useParams();
  const { modalState, showModal, closeModal } = useAlertModal();
  const { cartList } = useCartList(token);

  const findCartItem = cartList.find((i) => i.product_id === parseInt(productId));
  const findItemCount = findCartItem ? findCartItem.quantity : 0;

  const navigate = useNavigate();

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  useEffect(() => {
    const getProductDetail = async () => {
      const res = await getProductDetails(productId);
      setProduct(res);
    };
    getProductDetail();
  }, [productId]);

  console.log(product);

  useEffect(() => {
    if (cartList.length === 0) return;

    const data = cartList.map((i) => i.product_id);
    const isProductInCart = data.includes(parseInt(productId));
    setIsInCart(isProductInCart);
  }, [cartList, productId]);

  const addToShoppingCart = async () => {
    const body = {
      product_id: `${parseInt(productId)}`,
      quantity: `${count}`,
      check: isInCart,
    };
    const res = await addToCart(token, body);
    return res;
  };

  const modifyCount = async () => {
    const addCount = findItemCount + count;

    const body = {
      product_id: productId,
      quantity: addCount,
    };
    const res = await modifyCartQuantity(token, body, findCartItem.cart_item_id);
    navigate(`/order`);
    console.log(res);
    return res;
  };

  const directOrder = () => {
    addToShoppingCart();
    setOrderType("direct_order");
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
          <CountControl isStock={product.stock} count={product.stock === 0 ? 0 : count} onCountChange={handleCountChange} />
          <S.OrderDetail>
            <span>Total Price</span>
            <div>
              <span>총 수량 {count} 개</span>
              <strong>{product.price ? (parseInt(product.price) * count).toLocaleString() : 0}원</strong>
            </div>
          </S.OrderDetail>
          {product.stock === 0 ? (
            <>
              <S.SoldOutBtn>SOLD OUT</S.SoldOutBtn>
            </>
          ) : (
            <S.ButtonWrapper>
              {isLoggedIn ? (
                <S.BuyBtn
                  onClick={() => {
                    isInCart ? modifyCount() : directOrder();
                  }}
                >
                  Buy Now
                </S.BuyBtn>
              ) : (
                <S.BuyBtn
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
                </S.BuyBtn>
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
                            modifyCount();
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
              <AlertModal modalState={modalState} />
            </S.ButtonWrapper>
          )}
        </S.ProductDetailWrapper>
      </S.Wrapper>
    </>
  );
}
