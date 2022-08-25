import { atom } from 'recoil';

const mypageCurPageState = atom({
  key: 'mypage-curPageState',
  default: 1,
});

export default mypageCurPageState;
