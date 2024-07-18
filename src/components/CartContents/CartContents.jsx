import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import { useNavigate } from "react-router-dom";
import useCartList from "../../hook/useCartList";
import useProductDetail from "../../hook/useProductDetail";
import { deleteCartItem, deleteAllCartItem } from "../../api/Cart";
import Modal from "../Modal/Modal";
import CountControl from "../CountControl/CountControl";
import * as S from "./CartContentsStyle";
import * as MS from "../Modal/ModalStyle";
import useModal from "../../hook/useModal";

// 응답 데이터에 고유한 키 값이 없어 uuid 라이브러리 사용
export default function CartList() {
  const [productIds, setProductIds] = useState([]);
  const [count, setCount] = useState([]);
  const [selected, setSelected] = useState([]);
  const { modalState, showModal, closeModal } = useModal();

  const navigator = useNavigate();

  const token = useRecoilValue(userToken);
  const { cartList, refetch } = useCartList(token);
  const { productInfo } = useProductDetail(productIds, token);

  console.log(cartList.length);

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
      return updateCount;
    });
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
    });
  };

  // 장바구니 모두 삭제하기
  const deleteAllCartList = async () => {
    const res = await deleteAllCartItem(token);
    console.log(res);
    refetch();
  };

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
                  <S.ProductBrandName>{product.store_name}</S.ProductBrandName>
                  <S.ProductName>{product.product_name}</S.ProductName>
                  <S.ProductPrice>{product.price.toLocaleString()} 원</S.ProductPrice>
                  <S.ShippingInfo>{product.shipping_method === "DELIVERY" ? "택배배송" : "무료배송"}</S.ShippingInfo>
                </S.ProductInfoWrapper>
                <S.CountControlWrapper>
                  <CountControl key={index} count={count[index]} onCountChange={(newCount) => handleCountChange(index, newCount)} />
                </S.CountControlWrapper>
                <S.ProductPriceWrapper>
                  <S.TotalProductPrice>{product.price.toLocaleString()} 원 </S.TotalProductPrice>
                  <MS.SButton>Order</MS.SButton>
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
            <Modal modalState={modalState} />
            <S.TotalPriceCal>
              <span>Sub Total</span>
              <S.ProductPrice></S.ProductPrice>
              <span>+</span>
              <span>Shipping</span>
              <S.ShippingFee></S.ShippingFee>
              <span>= Total :</span>
              <S.TotalPrice></S.TotalPrice>
            </S.TotalPriceCal>
          </S.Wrapper>
        </>
      )}
    </>
  );
}
