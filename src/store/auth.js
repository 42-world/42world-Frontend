import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: { isLoading: false, state: 200, curUser: null },
});
