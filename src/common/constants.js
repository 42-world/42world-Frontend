import { assets } from '@styles/assets';

export const PICTURE_DIR = '/assets/CharacterWhiteBG/';

// TODO: file naming을 인덱스로 관리하면 좀 더 편할 것 같음
export const PROFILE_LIST = {
  0: 'bbo.png',
  1: 'bora.png',
  2: 'ddub.png',
  3: 'nana.png',
  4: 'bongsuni.png',
  5: 'hyeonkim.png',
  6: 'babybbo.png',
  7: 'babynana.png',
  8: 'babybora.png',
  9: 'babyddub.png',
  10: 'babyhyeonkim.png',
};

export const SITEMAP = [
  {
    name: '팔만코딩경',
    link: 'https://80000coding.oopy.io/',
    desc: '개발에 관련된 것을 모두 모아!',
    icon: assets.sidebar['80000co'],
  },
  {
    name: 'Humans of 42',
    link: 'https://humansof42.com/',
    desc: '42Seoul의 이야기를 전합니다',
    icon: assets.sidebar['humansof42'],
  },
  {
    name: 'Giggle Forest',
    link: 'https://giggleforest.com/',
    desc: '귀여운 아바타로 대화해보세요',
    icon: assets.sidebar['giggle'],
  },
  {
    name: '42DoProject',
    link: 'https://42doproject.com/',
    desc: '42서울 사이드 프로젝트 플랫폼',
    icon: assets.sidebar['42doproject'],
  },
  {
    name: '42SWIM',
    link: 'https://swim.42seoul.io/',
    desc: '42서울의 Q&A 커뮤니티',
    icon: assets.sidebar['42swim'],
  },
  {
    name: '42Psychic',
    link: 'https://devfor.fun/',
    desc: '당신의 평가자를 점쳐보세요...',
    icon: assets.sidebar['42psychic'],
  },
  {
    name: '42Blind',
    link: 'https://42blind.com',
    desc: '42카뎃들을 위한 익명 소통공간',
    icon: assets.sidebar['42blind'],
  },
];
