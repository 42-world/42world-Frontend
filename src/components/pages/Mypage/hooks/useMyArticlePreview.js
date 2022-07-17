import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import getArticleInfo from '@components/pages/Mypage/utils/myArticlePreviewUtils';

const useMyArticlePreview = articleType => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const articleInfo = getArticleInfo(articleType);

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
