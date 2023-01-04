import { assets } from '@styles/assets';

export const PICTURE_DIR = '/assets/CharacterWhiteBG/';

export const MAIN_BACKGROUND_IMG = 'https://42world.s3.ap-northeast-2.amazonaws.com/main_background.jpeg';

// TODO: file naming을 인덱스로 관리하면 좀 더 편할 것 같음
export const PROFILE_LIST = [
  'bbo.png',
  'babybbo.png',
  'nana.png',
  'babynana.png',
  'ddub.png',
  'babyddub.png',
  'bora.png',
  'babybora.png',
  'hyeonkim.png',
  'babyhyeonkim.png',
  'seongparcat.png',
  'seongparcat2.png',
];

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
    name: '42gg',
    link: 'https://42gg.kr/',
    desc: '42좋은 42서울인을 위한 탁구 생활',
    icon: assets.sidebar['42gg'],
  },
  {
    name: '집현전',
    link: 'https://42library.kr/',
    desc: '함께 만들어가는 42서울 도서관',
    icon: assets.sidebar['42jiphyeonjeon'],
  },
  {
    name: '42cabi',
    link: 'https://cabi.42seoul.io/',
    desc: '카뎃들을 위한 사물함 대여 서비스',
    icon: assets.sidebar['cabi'],
  },
];

export const ARTICLE_TITLE_MAX_LENGTH = 42;
export const ARTICLE_CONTENT_MAX_LENGTH = 4242;
