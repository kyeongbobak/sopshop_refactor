import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "../../atom/Atom";
import useCartList from "../../hook/useCartList";
import useProductDetail from "../../hook/useProductDetail";
import { modifyCartQuantity, deleteCartItem } from "../../api/Cart";
import Modal from "../Modal/Modal";
import CountControl from "../CountControl/CountControl";
import * as S from "./CartListStyle";
import * as MS from "../Modal/ModalStyle";
import useModal from "../../hook/useModal";

// 응답 데이터에 고유한 키 값이 없어 uuid 라이브러리 사용
export default function CartList() {
  const [productIds, setProductIds] = useState([]);

  const [count, setCount] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modifyQuantiy, setModifyQuantity] = useState(0);
  const { modalState, showModal, closeModal } = useModal();

  const token = useRecoilValue(userToken);

  const { cartList, refetch } = useCartList(token);
  const { productInfo } = useProductDetail(productIds, token);
  console.log(cartList);

  useEffect(() => {
    const productId = cartList.map((i) => i.product_id);
    const quantity = cartList.map((i) => i.quantity);
    setProductIds(productId);
    setCount(quantity);
  }, [cartList]);

  const handleCountChange = (index, newCount) => {
    console.log(index, newCount);
    setCount((prevCount) => {
      const updateCount = [...prevCount];
      updateCount[index] = newCount;
      return modifiyCount(updateCount);
    });
  };

  const modifiyCount = async (updateCount) => {
    console.log(updateCount);
    const body = {
      product_id: "",
      quantity: "",
    };

    const res = await modifyCartQuantity(token, updateCount);
    console.log(res);
  };

  const deleteCartList = async (index) => {
    setSelected(index);
    console.log(index);
    console.log(cartList);
    const cartItemId = cartList[selected].cart_item_id;
    console.log(cartItemId);
    const res = await deleteCartItem(token, cartItemId);
    console.log(res);

    refetch();
  };

  return (
    <>
      <S.Wrapper>
        {productInfo.map((product, index) => (
          <S.CartListWrapper key={uuidv4()}>
            <S.CheckBox
              key={uuidv4()}
              type="checkbox"
              onClick={() => {
                setSelected(index);
              }}
            />
            <Modal modalState={modalState}></Modal>
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
              <button>Empty</button>
            </S.ButtonWrapper>
            <Modal modalState={modalState} />
          </S.CartListWrapper>
        ))}
      </S.Wrapper>
    </>
  );
}
