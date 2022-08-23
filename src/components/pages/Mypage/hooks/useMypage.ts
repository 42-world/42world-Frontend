import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { ARTICLE_TYPE } from '@components/pages/Mypage/utils';

const useMypage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const articleType =
    {
      article: ARTICLE_TYPE.ARTICLE,
      comment: ARTICLE_TYPE.COMMENT,
      liked: ARTICLE_TYPE.LIKED,
    }[params.articleType ?? 'myPage'] || 0;

  useEffect(() => {
    if (!articleType && params.articleType) navigate('/error');
  }, [params, articleType, navigate]);

  return { articleType };
};

export default useMypage;
