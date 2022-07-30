import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import constants from '@components/pages/Mypage/constants';
import { useGetMyArticles, useGetMyComments, useGetLikeArticles } from '@components/pages/Mypage/hooks';

const useMypage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const articleType =
    {
      article: constants.ARTICLE,
      comment: constants.COMMENT,
      liked: constants.LIKED,
    }[params.articleType] || 0;

  const { articles } = useGetMyArticles(1);
  const { comments } = useGetMyComments(1);
  const { likeArticles } = useGetLikeArticles(1);

  useEffect(() => {
    if (!articleType && params.articleType) navigate('/error');
  }, [params, articleType, navigate]);

  return { articleType, articles: articles.slice(5), comments: comments.slice(5), likeArticles: likeArticles.slice(5) };
};

export default useMypage;
