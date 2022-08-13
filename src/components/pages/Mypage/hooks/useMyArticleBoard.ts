import { useNavigate } from 'react-router-dom';

import getArticleInfo from '@components/pages/Mypage/utils/getArticleInfo';
import MyArticleList from '../components/MyArticleBoard/MyArticleList';
import MyCommentList from '../components/MyArticleBoard/MyCommentList';
import LikeArticleList from '../components/MyArticleBoard/LikeArticleList';
import constants from '../constants';

const useMyArticleBoard = (articleType: number) => {
  const navigate = useNavigate();
  const articleInfo = getArticleInfo(articleType);

  const handleClickGoBack = () => {
    navigate('/mypage');
  };

  const innerComponent = {
    [constants.ARTICLE]: MyArticleList(),
    [constants.COMMENT]: MyCommentList(),
    [constants.LIKED]: LikeArticleList(),
  }[articleType];

  return {
    articleInfo,
    handleClickGoBack,
    innerComponent,
  };
};

export default useMyArticleBoard;
