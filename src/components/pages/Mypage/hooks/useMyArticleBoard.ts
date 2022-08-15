import { useNavigate } from 'react-router-dom';

import getArticleInfo from '@components/pages/Mypage/utils/getArticleInfo';
import MyArticleList from '../components/MyArticleBoard/MyArticleList';
import MyCommentList from '../components/MyArticleBoard/MyCommentList';
import LikeArticleList from '../components/MyArticleBoard/LikeArticleList';
import { ARTICLE_TYPE } from '@components/pages/Mypage/utils';

const useMyArticleBoard = (articleType: number) => {
  const navigate = useNavigate();
  const articleInfo = getArticleInfo(articleType);

  const handleClickGoBack = () => {
    navigate('/mypage');
  };

  const innerComponent = {
    [ARTICLE_TYPE.ARTICLE]: MyArticleList(),
    [ARTICLE_TYPE.COMMENT]: MyCommentList(),
    [ARTICLE_TYPE.LIKED]: LikeArticleList(),
  }[articleType];

  return {
    articleInfo,
    handleClickGoBack,
    innerComponent,
  };
};

export default useMyArticleBoard;
