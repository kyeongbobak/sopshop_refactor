# SopShop_Refactor

## 리팩토링 목적

- 수정하기 쉽게 변경하여 향후 기능 추가나 수정 시 개발자의 작업 효율성 증가
- 커스텀 훅과 모듈화를 통해서 코드 중복을 최소화
- React Query, Recoil을 도입하여 성능을 개선하고, 불필요한 렌더링을 방지

## 리팩토링 기간

- 기간 : 2024년 7월 18일 ~ 2024년 8월 19일
  <br/>

## 폴더구조

```
└── src
    ├── api
        ├── Instance
    ├── assets
        ├── font
        ├── img
    ├── atom
    ├── components
        ├── CartContents
        ├── CountControl
        ├── DetailPageTabs
        ├── Modal
            ├── AlertModal
            ├── ZipCodeSearchModal
        ├── ProductDetailInfo
        ├── ProductItem
        ├── Sidebar
        ├── TabBtnMenu
        ├── TabTitle
        ├── TopNavBar
    ├── hook
    ├── pages
        ├── CartPage
        ├── LoginPage
        ├── MainPage
        ├── MyPage
        ├── OrderCompletePage
        ├── OrderPage
        ├── BuyerSearchPage
        ├── ProductDetailPage
        ├── ProductMakePage
        ├── SearchPage
        ├── SelectedMenuPage
        ├── SellerCenterPage
        ├── SignUpPage
    ├── routes
    ├── style
```

<br/>

## 추가 구현 기능

| **슬라이드 사이드 메뉴**                  |
| :---------------------------------------- |
| ![판매자 회원가입](/public/gif/slide.gif) |

- 사이드 메뉴 버튼 클릭 시, 슬라이드 애니메이션 통해 메뉴가 표시
- 사용자가 원하는 페이지로 쉽게 접근 할 수 있도록 하여 사용자 경험 개선

| **판매자 로그인**                               |
| :---------------------------------------------- |
| ![판매자 회원가입](/public/gif/sellerLogin.gif) |

| **판매자 회원가입**                              |
| :----------------------------------------------- |
| ![판매자 회원가입](/public/gif/sellerSignUp.gif) |

- 구매회원 회원가입과 판매회원 회원가입 탭 간의 전환 가능
- 사업자 등록번호 10자리 이상 입력할 경우 경고 메세지 표시
- 사용자가 입력한 사업자 등록번호가 유효할 경우 확인 메세지 표시
- 회원가입 성공 시 성공메세지 표시와 함께 로그인 페이지로 리디렉션

| **판매자 상품 수정 / 삭제**                                  |
| :----------------------------------------------------------- |
| ![상품 수량 수정/삭제](/public/gif/editAndDeleteProduct.gif) |

| **판매자 상품 등록**                      |
| :---------------------------------------- |
| ![상품 등록](/public/gif/productMake.gif) |

- 상품 등록 완료 시, 등록된 상품 정보가 담긴 상품 상세 페이지로 리디렉션

## 주요 변경 사항

##### 1. 코드 구조 개선

기존 코드에서는 중복되는 UI와 로직이 여러 페이지에서 걸쳐 반복적으로 사용되고 있었습니다. 이를 해결하기 위해 **CountControl**, **DetailPageTabs**, **TabTitle**, **TopNavBar** 등과 같이 **재사용 가능한 컴포넌트**로 따로 분리하였습니다. 이로 인해 다음과 같은 개선이 이루어졌습니다.

- **재사용 가능한 컴포넌트** : 중복되는 UI와 기능을 모듈화하여 다른 페이지에서도 쉽게 재사용할 수 있도록 하였으며, 중복 코드가 제거되고, 유지보수의 효율성이 향상되었습니다.

  ##### 코드 예시

  ```javascript
  import React from "react";
  import * as S from "./CountControlStyle";
  import MinusIcon from "../../assets/img/icon-minus-line.png";
  import PlusIcon from "../../assets/img/icon-plus-line.png";

  // 수량 조절 기능을 담당하는 CountControl 컴포넌트
  export default function CountControl({ count, isStock, onCountChange }) {
    const handleOnCount = (increment) => {
      const newCount = count + increment;
      if (newCount < 1) {
        return;
      } else if (newCount > isStock) {
        alert(`이 제품의 최대 구매 가능한 수량은 ${isStock}개 입니다.`);
        return;
      }
      onCountChange(newCount);
    };

    return (
      <>
        <S.Wrapper>
          <div>
            <button onClick={() => handleOnCount(-1)}>
              <img src={MinusIcon} alt="" />
            </button>
            <p>{count}</p>
            <button onClick={() => handleOnCount(+1)}>
              <img src={PlusIcon} alt="" />
            </button>
          </div>
        </S.Wrapper>
      </>
    );
  }
  ```

  ```javascript
  // 카트에 담긴 상품의 총 금액을 계산하는 함수
  export const totalProductPrice = (productInfos, cartList) => {
    const itemInCart = productInfos.filter((product) => cartList.find((list) => list.product_id === product.product_id));
    return itemInCart.reduce((acc, cur, index) => acc + cur.price * cartList[index].quantity, 0);
  };

  // 카트에 담긴 상품의 총 베송비를을 계산하는 함수
  export const totalShippingPrice = (productInfos) => {
    return productInfos.reduce((acc, cur) => acc + cur.shipping_fee, 0);
  };
  ```

##### 2. 페이지 의존성 감소

리팩토링 전에는 **페이지 중심 설계**로 인해 각 페이지 내에서 UI와 로직을 모두 처리하고 있어, 복잡성과 의존성이 높았습니다. 이를 개선하기 위해서 UI 구성 요소를 단위로 컴포넌트를 분리하고, 페이지는 이를 조립하는 방식으로 변경했습니다. 이로 인해 다음과 같은 개선이 이루어졌습니다.

- **페이지 의존성 감소** : 페이지 구성 요소를 독립적으로 관리할 수 있게 되어, 다른 페이지와의 결합도를 낮출 수 있었습니다.
- **수정과 유지보수 용이성** : 수정이 필요한 경우에도 관련된 컴포넌트만 변경하면 되므로 유지보수성이 크게 향상되었습니다.

##### 3. 커스텀 훅을 통한 코드 중복 제거와 재사용성 증가

기존의 카트 리스트와 상품 정보를 가져오는 로직이 단일 컴포넌트에 집중되어 있어 복잡성과 중복 코드가 발생했습니다. 이를 해결하기 위해서 `useCartList`, `useProductDetail`이 라는 커스텀 훅을 도입했습니다. 이로 인해 다음과 같은 개선이 이루어졌습니다.

- **중복 로직 제거** : 카트 리스트에서 상품 ID를 추출한 뒤, 해당 ID로 상품 정보를 가져오는 부분을 각각의 훅으로 분리하여 중복 코드를 제거하고 로직을 모듈화했습니다.
- **재사용성 증가** : 커스텀 훅을 사용함으로써 해당 로직을 다른 페이지나 컴포넌트에서도 쉽게 재사용할 수 있게 되었습니다. 예를 들어 여러 페이지에서 동일한 카트 리스트와 상품 정보를 가져와야할 때, 각 페이지에서 커스텀 훅을 호출함으로써 코드의 일관성을 유지할 수 있습니다. 이를 통해 유지보수성과 확장성이 더욱 향상되었습니다. 또한 로직 변경 시, 수정 범위가 넓은 부분 또한 커스텀 훅을 도입하고 상태 관리가 분리됨으로써 향후 수정이나 기능 확장이 더 용이해졌습니다.

  ##### 코드 예시

  ```javascript
  import { useEffect, useState } from "react";
  import { getCartList } from "../api/Cart";

  // 카트에 담긴 상품 ID를 추출하는 커스텀 훅 useCartList 정의
  const useCartList = (token, userTypeValue) => {
    const [cartList, setCartList] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
      const getShoppingList = async () => {
        if (token && userTypeValue === "BUYER") {
          const res = await getCartList(token);
          setCartList(res.results);
          const productId = res.results.map((item) => item.product_id);
          setCartProducts(productId);
        }
      };

      getShoppingList();
    }, [token, userTypeValue]);

    // refetch 함수를 통해 카트 목록이 변경될 경우, 데이터 재호출이 필요하면 API 호출하도록 최적화, 불필요한 API 호출을 줄여 성능 향상
    const refetch = async () => {
      if (token && userTypeValue === "BUYER") {
        const res = await getCartList(token);
        setCartList(res.results);
        const productId = res.results.map((list) => list.product_id);
        setCartProducts(productId);
      }
    };

    // 카트에 담긴 상품 목록, 카트 목록을 다시 가져오는 함수, 카트에 담긴 상품 ID 리스트
    return { cartList, refetch, cartProducts };
  };

  export default useCartList;
  ```

  ```javascript
  import { useEffect, useState } from "react";
  import { getProductDetails } from "../api/Product";

  // 상품 정보를 불러오는 커스텀 훅 useProductDetail 정의
  const useProductDetail = (token, productIds) => {
    console.log(productIds);
    const [productInfo, setProductInfo] = useState([]);
    useEffect(() => {
      const getProductInfo = async () => {
        const promises = productIds.map((i) => getProductDetails(i));
        // 각 상품 ID에 대해서 개별적으로 `getProductDetails`를 호출하는 대신 카트에 있는 여러가지의 상품 정보를 한꺼번에 불러올 수 있도록 Promise.all()을 사용하여 상품 정보를 병렬로 불러오는 로직을 추가
        // API 호출 속도를 최적화하고, 로딩 시간을 단축 이를 통해 사용자 경험 개선
        const results = await Promise.all(promises);
        setProductInfo(results);
      };
      getProductInfo();
    }, [productIds, token]);

    return { productInfo };
  };

  export default useProductDetail;
  ```

  ```javascript
  import { useState } from "react";

  // 알림 모달의 상태를 관리하는 커스텀 훅 useAlertModal 정의
  const useAlertModal = () => {
    const [modalState, setModalState] = useState({
      isVisible: false,
      text: "예",
      submitText: "아니오",
      onCancel: () => closeModal(),
      onSubmit: () => {},
      content: "",
    });

    const showModal = (config) => {
      setModalState({
        isVisible: true,
        ...config,
      });
    };

    const closeModal = () => {
      setModalState((prevState) => ({
        ...prevState,
        isVisible: false,
      }));
    };

    return { modalState, showModal, closeModal };
  };

  export default useAlertModal;
  ```

## 적용 기술

##### 1. Recoil을 통한 지역 상태 관리

- ##### 사용 이유

리팩토링 전, `Context API`를 사용하여 상태 관리를 하였지만, 이로 인해 상태를 사용하는 컴포넌트 뿐만 아니라 해당 사항을 포함하는 모든 하위 컴포넌트까지 불필요하게 리렌더링 되는 문제 발생으로 인해 `Recoil`을 도입

- ##### 장점
- 복잡한 Provider 구조를 만들 필요가 없이 `atom`을 선언하여 전역 상태를 쉽게 설정
- `recoilPersist()` 를 사용하여 로그인하여 새로고침이나 페이지 이동 후에도 상태(로그인 상태, 사용자 유형, 토큰)을 간편하게 유지
- `useRecoilState` 또는 `useRecoilValue`를 사용하여 간단하게 상태를 가져오고 업데이트 할 수 있음
- 상태를 사용하는 컴포넌트만 리렌더링 되므로 성능 최적화 가능
  <br/>

##### 2. React Hook Form 사용

- ##### 사용 이유

리팩토링 전, 로그인, 회원가입 시 여러 입력 필드를 각각 `useState`를 사용하여 상태를 따로 관리하였지만, 이로 인해 코드가 복잡해지고 가독성이 떨어지는 문제가 발생 이러한 문제를 해결하기 위해 `React Hook Form`을 사용

- ##### 장점

- `React Hook Form`에서 `register`와 `handleSubmit`를 사용하여 입력 필드 값을 한번에 관리하여 코드 복잡성 줄이고 가독성을 높임
- 입력 필드에 대한 유효성 검사를 간단하게 설정
- `watch`, `setError`, `clearError`의 활용을 통해 더 빠르고 유연한 사용자 경험 제공
- `setValue`를 통해 데이터를 폼 필드에 자동으로 설정하고, 폼 데이터 관리를 간결하게 처리

##### 1. 사용자가 입력할 때, 실시간으로 비밀번호와 휴대폰 번호 유효성 검사를 확인

![실시간 유효성 검사](/public/gif/realTimeValidation.gif)

##### 코드 예시

```javascript
SignUpPage.jsx 중에서

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// 기타 import

export default function SignUpPage() {

// ... 기존 코드

const {
register,
handleSubmit,
watch,
setError,
clearErrors,
getValues,
setValue,
formState: { errors },
} = useForm();

// ... 기존코드

const userPassword = watch("password", "");
const userPasswordConfirm = watch("passwordConfirm", "");
const frontNumber = watch("frontNumber", "");
const middleNumber = watch("middleNumber", "");
const endNumber = watch("endNumber", "");

// ... 기존 코드

useEffect(() => {
if (middleNumber || endNumber) {
  if (!/^\d{11}$/.test(phoneNumber)) {
    setError("phoneNumber", { type: "phoneNumber-Pattern", message: "휴대폰 번호는 10자리 또는 11자리 숫자여야 합니다." });
  } else {
    clearErrors("phoneNumber");
  }
}

if (userPassword && userPasswordConfirm) {
  if (userPassword !== userPasswordConfirm) {
    setError("passwordConfirm", { type: "matched-password", message: "비밀번호가 일치하지 않습니다." });
    } else {
      clearErrors("passwordConfirm");
    }
  }
}, [setError, clearErrors, phoneNumber, frontNumber, middleNumber, endNumber, userPassword, userPasswordConfirm]);
.
.
// ... 기존 코드
}
```

- `watch` 함수를 사용하여 실시간으로 특정 필드의 값을 추적 가능
- `setError`와 `clearErrors`를 사용하여 에러 상태를 관리함으로써 컴포넌트 자체가 다시 렌더링되지 않고 에러가 발생한 필드만 업데이트 가능하게 하여 성능을 최적화

##### 2. 판매자 센터에서 상품 수정 클릭 시, 해당 상품의 정보가 폼 필드에 자동으로 채워짐

![폼 필드 자동 입력](/public/gif/autoFillProductInfo.gif)

##### 코드 예시

```javascript

ProductMakePage.jsx 중에서

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// . . 기타 import

useEffect(() => {
  const selectedProduct = async () => {
    const res = await getSellingProducts(token);
    const product = res.results.find((_, index) => index === Number(productId));

    setModifyingProduct(product);

    if (product) {
      setValue("productName", product.product_name);
      setValue("price", product.price);
      setDeliveryMethod(product.shipping_method);
      setValue("shippingFee", product.shipping_fee);
      setValue("stock", product.stock);
      setImagePreview(product.image);
    }

    return res;
  };
  if (action === "modify") {
    selectedProduct();
  }
}, [token, action, setValue, productId]);

// ... 기존 코드
```

- `setValue`를 통해 데이터를 일일히 입력할 필요 없이 폼 필드를 자동으로 채우는 것 뿐만 아니라 필드에 채워진 데이터를 자유롭게 수정할 수 있게 하여 사용자 경험 개선

##### 3. React Query와 useMutation을 이용한 API 처리 간소화

- ##### 사용 이유

  기존에는 API 요청의 성공, 실패 상태를 수동으로 처리하고, 조건에 따라 동적으로 데이터를 구성한 후 비동기 요청하는 과정이 매우 복잡하게 유지되어 React Query와 useMutation 사용

- ##### 장점

  - 성공, 실패에 대한 처리를 `onSuccess`, `onError` 콜백을 통해 자동으로 처리
  - 상태에 따라 데이터를 업데이트 하고, 그에 따라 동적으로 API 요청을 간결하게 처리

  ##### 1. 사용자의 상태에 따라 동적으로 요청 본문 구성

  ##### 코드 예시

  ```javascript

  LoginPage.jsx 중에서

  import { useState } from "react"
  import { useMutation } from "@tanstack/react-query";
  import { useForm } from "react-hook-form";
  import { sellerSignUp, signUp, validateAccount, validateCompanyNumber } from "../../api/Account";

  // . . 기타 import

  export default function LoginPage() {
  const [isBuyer, setIsBuyer] = useState(true);

  // ... 기존 코드

  const LoginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUserToken(data.token);
      setIsLogin(true);
      setUserType(data.login_type);
      navigate(`/`);
    },
    onError: (error) => {
      console.log(error);
      setWarningMessage("아이디와 비밀번호가 일치하지 않습니다.");
    },
  });

  const handleOnLogin = (data) => {
    data.login_type = isBuyer ? "BUYER" : "SELLER";
    LoginMutation.mutate(data);
  };

  // ... 기존 코드

  }
  ```

  - 사용자 유형에 따라 login_type을 설정하고, 상품 등록 시에는 입력된 데이터에 따라 요청 본문을 동적으로 변경하여 코드 간소화

  ##### 2. 사용자의 상태에 따른 요청 처리

  ##### 코드 예시

  ```javascript

  SignUpPage.jsx 중에서

  import { useState } from "react"
  import { useMutation } from "@tanstack/react-query";
  import { useForm } from "react-hook-form";
  import { sellerSignUp, signUp, validateAccount, validateCompanyNumber } from "../../api/Account";

  // . . 기타 import

  export default function LoginPage() {
  const [isBuyer, setIsBuyer] = useState(true);

  // ... 기존 코드

   const SingUpMutation = useMutation({
    mutationFn: isBuyer ? signUp : sellerSignUp,
    onSuccess: (data) => {
      console.log(data);
      setUserType(data.type);
      alert("회원가입에 성공하셨습니다.");
      navigate(`/login`);
    },
    onError: (errors) => {
      console.log(errors);
    },
  });

  const handleOnSignUp = (data) => {
    data.phone_number = phoneNumber;
    SingUpMutation.mutate(data);
  };

  // ... 기존 코드

  }
  ```

  - 사용자 유형에 따라 요청 로직을 분기할 필요 없이 동적으로 함수를 선택하여 API 요청을 간단하게 처리

##### 4. CSS-in-JS를 활용한 UI 간소화
