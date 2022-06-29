import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserService } from 'network';
import constants from 'components/pages/Mypage/constants';

const useMyArticlePreview = articleType => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const articleInfo = {
    [constants.ARTICLE]: { link: 'article', fetchFunc: UserService.getMyArticles(1), title: '내 게시글' },
    [constants.COMMENT]: { link: 'comment', fetchFunc: UserService.getMyComments(1), title: '내 댓글' },
    [constants.LIKED]: { link: 'liked', fetchFunc: UserService.getLikeArticles(1), title: '좋아요한 글' },
  }[articleType] || { link: '', fetchFunc: undefined, title: '' };

  const fetchMyArticles = async () => {
    const response = await articleInfo.fetchFunc;
    setArticles(response.data && response.data.slice(0, 5));
  };

  const handleClickMoreButton = () => {
    navigate(`./${articleInfo.link}`);
  };

  useEffect(() => {
    fetchMyArticles();
  }, [articleType]);

  return { articles, articleInfo, handleClickMoreButton };
};

export default useMyArticlePreview;
