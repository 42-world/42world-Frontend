import { ARTICLE_TYPE } from '@components/pages/Mypage/utils';

const getArticleInfo = articleType => {
  return (
    {
      [ARTICLE_TYPE.ARTICLE]: { link: 'article', title: '내 게시글' },
      [ARTICLE_TYPE.COMMENT]: { link: 'comment', title: '내 댓글' },
      [ARTICLE_TYPE.LIKED]: { link: 'liked', title: '좋아요한 글' },
    }[articleType] || { link: '', title: '' }
  );
};

export default getArticleInfo;
