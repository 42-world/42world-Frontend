import { atom } from 'recoil';

export const notiModalState = atom<boolean>({
  key: 'notiModalState',
  default: false,
});
