import { UserService } from '@network';
import constants from '@components/pages/Mypage/constants';

const getArticleInfo = articleType => {
  return (
    {
      [constants.ARTICLE]: { link: 'article', fetchFunc: UserService.getMyArticles(1), title: '내 게시글' },
      [constants.COMMENT]: { link: 'comment', fetchFunc: UserService.getMyComments(1), title: '내 댓글' },
      [constants.LIKED]: { link: 'liked', fetchFunc: UserService.getLikeArticles(1), title: '좋아요한 글' },
    }[articleType] || { link: '', fetchFunc: undefined, title: '' }
  );
};

export default getArticleInfo;
