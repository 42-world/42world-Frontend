import { useNavigate } from 'react-router-dom';

import getArticleInfo from '@components/pages/Mypage/utils/getArticleInfo';

const useMyArticleBoard = (articleType: number) => {
  const navigate = useNavigate();
  const articleInfo = getArticleInfo(articleType);

  const handleClickGoBack = () => {
    navigate('/mypage');
  };

  return {
    articleInfo,
    handleClickGoBack,
  };
};

export default useMyArticleBoard;
