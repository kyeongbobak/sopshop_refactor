import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userToken = atom({
  key: "userToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const isLogin = atom({
  key: "isLogin",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userType = atom({
  key: "userType",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
