import * as L from "./TabBtnMenuStyle";

export default function TabBtn({ IsBuyer, setIsBuyer, content }) {
  return (
    <L.Tabs>
      <L.TabItem>
        <L.TabItemBtn className={IsBuyer ? "active" : null} onClick={() => setIsBuyer(true)}>
          구매회원 {content}
        </L.TabItemBtn>
      </L.TabItem>
      <L.TabItem>
        <L.TabItemBtn className={IsBuyer ? null : "active"} onClick={() => setIsBuyer(false)}>
          판매회원 {content}
        </L.TabItemBtn>
      </L.TabItem>
    </L.Tabs>
  );
}
