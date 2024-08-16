import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken, userType } from "../../atom/Atom";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { deleteCartItem, deleteAllCartItem, modifyCartQuantity } from "../../api/Cart";
import useCartList from "../../hook/useCartList";
import useAlertModal from "../../hook/useAlertModal";
import useProductDetail from "../../hook/useProductDetail";
import TabTitle from "../../components/TabTitle/TabTitle";
import AlertModal from "../../components/Modal/AlertModal/AlertModal";
import CountControl from "../CountControl/CountControl";
import * as S from "./CartContentsStyle";

export default function CartContents() {
  const [productIds, setProductIds] = useState([]);
  const [count, setCount] = useState([]);
  const [selected, setSelected] = useState([]);

  const titles = ["상품정보", "수량", "상품금액"];
  const styles = [{ width: 600 }];

  const token = useRecoilValue(userToken);
  const userTypeValue = useRecoilValue(userType);

  const { cartList, refetch } = useCartList(token, userTypeValue);
  const { productInfo } = useProductDetail(token, productIds);
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
    return res;
  };

  const handleCheckBox = (index) => {
    setSelected((prevSelected) => {
      // if (index === 100) {
      //   return cartList.map((_, i) => i);
      // } else
      if (!prevSelected.includes(index)) {
        return [...prevSelected, index];
      }
    });
  };

  // 장바구니 개별 삭제하기
  const deleteCartList = async () => {
    selected.forEach(async (index) => {
      const cartItemId = cartList[index].cart_item_id;
      const res = await deleteCartItem(token, cartItemId);
      refetch();
      setSelected([]);
      return res;
    });
  };

  // 장바구니 모두 삭제하기
  const deleteAllCartList = async () => {
    const res = await deleteAllCartItem(token);
    refetch();
    return res;
  };

  // 개별구매
  const cartOneOrder = async (index) => {
    console.log(index);
    console.log(cartList);
    const body = {
      product_id: cartList[index].product_id,
      quantity: cartList[index].quantity,
      is_active: true,
    };
    const res = modifyCartQuantity(token, body, cartList[index].cart_item_id);
    navigator("/order");
    console.log(res);
  };

  // 전체 구매
  const cartAllOrder = async () => {
    const promises = cartList.map((item) => {
      const body = {
        product_id: item.product_id,
        quantity: item.quantity,
        is_active: true,
      };
      return modifyCartQuantity(token, body, item.cart_item_id);
    });

    const results = await Promise.all(promises);
    console.log(results);
    navigator(`/order`);
  };

  // 응답 데이터에 고유한 키 값이 없어 uuid 라이브러리 사용
  return (
    <>
      {cartList.length === 0 ? (
        <>
          <S.ContentsWrapper>
            <TabTitle titles={titles} showCheckBox={true} styles={styles} />
            <S.Contents>Empty</S.Contents>
            <button onClick={() => navigator(`/`)}> Go Shopping</button>
          </S.ContentsWrapper>
        </>
      ) : (
        <>
          <S.Wrapper>
            <TabTitle titles={titles} showCheckBox={true} styles={styles} handleCheckBox={handleCheckBox} />
            {productInfo.map((product, index) => (
              <S.CartListWrapper key={uuidv4()}>
                <S.CheckBox key={uuidv4()} type="checkbox" checked={selected.includes(index)} onChange={() => handleCheckBox(index)} />
                <S.ProductInfoWrapper>
                  <S.StoreName>{product.store_name}</S.StoreName>
                  <S.StyledLink to={`/products/${product.product_id}`}>{product.product_name}</S.StyledLink>
                  <S.Price>{product.price.toLocaleString()} 원</S.Price>
                  <S.ShippingMethod>{product.shipping_method === "DELIVERY" ? "택배배송" : "무료배송"}</S.ShippingMethod>
                </S.ProductInfoWrapper>
                <S.CountControlWrapper>
                  <CountControl key={index} count={count[index]} onCountChange={(newCount) => handleCountChange(index, newCount)} />
                </S.CountControlWrapper>
                <S.ProductPriceWrapper>
                  {cartList[index] && <S.TotalProductPrice>{(cartList[index].quantity * product.price).toLocaleString()} 원</S.TotalProductPrice>}
                  <S.SelectOrderBtn onClick={() => cartOneOrder(index)}>Order</S.SelectOrderBtn>
                </S.ProductPriceWrapper>
              </S.CartListWrapper>
            ))}
            <S.ActionBtnWrapper>
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
            </S.ActionBtnWrapper>
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
            <S.NavigationBtnWrapper>
              <S.AllOrderBtn onClick={() => cartAllOrder()}>All Order</S.AllOrderBtn>
              <S.GoToMainBtn onClick={() => navigator(`/`)}>Go to Shopping</S.GoToMainBtn>
            </S.NavigationBtnWrapper>
          </S.Wrapper>
        </>
      )}
    </>
  );
}
