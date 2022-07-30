import constants from '@components/pages/Mypage/constants';

const getArticleInfo = articleType => {
  return (
    {
      [constants.ARTICLE]: { link: 'article', title: '내 게시글' },
      [constants.COMMENT]: { link: 'comment', title: '내 댓글' },
      [constants.LIKED]: { link: 'liked', title: '좋아요한 글' },
    }[articleType] || { link: '', title: '' }
  );
};

export default getArticleInfo;
