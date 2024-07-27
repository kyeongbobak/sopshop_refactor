import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { deleteCartItem, deleteAllCartItem, modifyCartQuantity } from "../../api/Cart";
import useCartList from "../../hook/useCartList";
import useAlertModal from "../../hook/useAlertModal";
import useProductDetail from "../../hook/useProductDetail";
import AlertModal from "../../components/Modal/AlertModal/AlertModal";
import CountControl from "../CountControl/CountControl";
import * as S from "./CartContentsStyle";

export default function CartList() {
  const [productIds, setProductIds] = useState([]);
  const [count, setCount] = useState([]);
  const [selected, setSelected] = useState([]);

  const token = useRecoilValue(userToken);

  const { cartList, refetch } = useCartList(token);
  const { productInfo } = useProductDetail(productIds, token);
  const { modalState, showModal, closeModal } = useAlertModal();

  const navigator = useNavigate();

  const sumProductPrice = productInfo.map((i) => i.price).reduce((acc, cur, i) => acc + cur * count[i], 0);
  const sumShipping = productInfo.map((i) => i.shipping_fee).reduce((acc, cur) => acc + cur, 0);

  useEffect(() => {
    const productId = cartList.map((i) => i.product_id);
    const quantity = cartList.map((i) => i.quantity);
    setProductIds(productId);
    setCount(quantity);
  }, [cartList]);

  const handleCountChange = (index, newCount) => {
    setCount((prevCount) => {
      const updateCount = [...prevCount];
      updateCount[index] = newCount;
      modifyCount(index, newCount);
      return updateCount;
    });
  };

  // 장바구니 수량 수정하기
  const modifyCount = async (index, newCount) => {
    const body = {
      product_id: cartList[index].product_id,
      quantity: newCount,
    };
    const res = await modifyCartQuantity(token, body, cartList[index].cart_item_id);
    console.log(res);
  };

  const handleCheckBox = (index) => {
    setSelected((prevSelected) => {
      console.log(prevSelected);
      if (!selected.includes(index)) {
        return [...selected, index];
      }
    });
  };

  // 장바구니 개별 삭제하기
  const deleteCartList = async () => {
    selected.forEach(async (index) => {
      const cartItemId = cartList[index].cart_item_id;
      const res = await deleteCartItem(token, cartItemId);
      console.log(res);
      refetch();
      setSelected([]);
    });
  };

  // 장바구니 모두 삭제하기
  const deleteAllCartList = async () => {
    const res = await deleteAllCartItem(token);
    console.log(res);
    refetch();
  };

  // 응답 데이터에 고유한 키 값이 없어 uuid 라이브러리 사용
  return (
    <>
      {cartList.length === 0 ? (
        <>
          <S.ContentsWrapper>
            <S.Contents>Empty</S.Contents>
            <button onClick={() => navigator(`/`)}> Go Shopping</button>
          </S.ContentsWrapper>
        </>
      ) : (
        <>
          <S.Wrapper>
            {productInfo.map((product, index) => (
              <S.CartListWrapper key={uuidv4()}>
                <S.CheckBox key={uuidv4()} type="checkbox" checked={selected.includes(index)} onChange={() => handleCheckBox(index)} />
                <S.ProductInfoWrapper>
                  <S.StoreName>{product.store_name}</S.StoreName>
                  <S.Name>{product.product_name}</S.Name>
                  <S.Price>{product.price.toLocaleString()} 원</S.Price>
                  <S.ShippingMethod>{product.shipping_method === "DELIVERY" ? "택배배송" : "무료배송"}</S.ShippingMethod>
                </S.ProductInfoWrapper>
                <S.CountControlWrapper>
                  <CountControl key={index} count={count[index]} onCountChange={(newCount) => handleCountChange(index, newCount)} />
                </S.CountControlWrapper>
                <S.ProductPriceWrapper>
                  {cartList[index] && <S.TotalProductPrice>{(cartList[index].quantity * product.price).toLocaleString()} 원</S.TotalProductPrice>}
                  <S.SelectOrderBtn>Order</S.SelectOrderBtn>
                </S.ProductPriceWrapper>
              </S.CartListWrapper>
            ))}
            <S.ButtonWrapper>
              <button
                onClick={() => {
                  showModal({
                    text: "아니오",
                    submitText: "예",
                    onCancel: closeModal,
                    onSubmit: () => {
                      deleteCartList();
                      closeModal();
                    },
                    content: "상품을 삭제하시겠습니까?",
                  });
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  showModal({
                    text: "아니오",
                    submitText: "예",
                    onCancel: closeModal,
                    onSubmit: () => {
                      deleteAllCartList();
                      closeModal();
                    },
                    content: "장바구니를 비우시겠습니까?",
                  });
                }}
              >
                Empty
              </button>
            </S.ButtonWrapper>
            <AlertModal modalState={modalState} />
            <S.TotalPriceCal>
              <span>Sub Total</span>
              <p>{sumProductPrice.toLocaleString()} 원</p>
              <span>+</span>
              <span>Shipping</span>
              <p>{sumShipping.toLocaleString()} 원</p>
              <span>= Total :</span>
              <p>{(sumProductPrice + sumShipping).toLocaleString()} 원</p>
            </S.TotalPriceCal>
            <S.AllOrderBtn>All Order</S.AllOrderBtn>
          </S.Wrapper>
        </>
      )}
    </>
  );
}
