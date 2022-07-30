import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { mypageCurPageState } from '@components/pages/Mypage/store';
import { useGetMyArticles, useGetMyComments, useGetLikeArticles } from '@components/pages/Mypage/hooks';

const useMypageBoard = () => {
  const { articles } = useGetMyArticles();
  const { comments } = useGetMyComments();
  const { likeArticles } = useGetLikeArticles();
  const setCurrentPage = useSetRecoilState(mypageCurPageState);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return { articles: articles.slice(0, 5), comments: comments.slice(0, 5), likeArticles: likeArticles.slice(0, 5) };
};

export default useMypageBoard;
