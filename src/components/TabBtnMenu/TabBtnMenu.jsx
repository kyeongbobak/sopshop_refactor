import * as L from "./TabBtnMenuStyle";

export default function TabBtn({ IsBuyer, setIsBuyer }) {
  return (
    <L.Tabs>
      <L.TabItem>
        <L.TabItemBtn className={IsBuyer ? "active" : null} onClick={() => setIsBuyer(true)}>
          구매회원 로그인
        </L.TabItemBtn>
      </L.TabItem>
      <L.TabItem>
        <L.TabItemBtn className={IsBuyer ? null : "active"} onClick={() => setIsBuyer(false)}>
          판매회원 로그인
        </L.TabItemBtn>
      </L.TabItem>
    </L.Tabs>
  );
}
