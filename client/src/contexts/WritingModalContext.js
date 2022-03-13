import { createContext } from "react";

export const WritingModalContext = createContext({
  isShowWritingModal: false,
  setIsShowWritingModal: () => {},
});

export const Confirm = createContext({
  confirm: false,
  setConfirm: () => {},
});
