import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import constants from '@components/pages/Mypage/constants';

const useMypage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const articleType =
    {
      article: constants.ARTICLE,
      comment: constants.COMMENT,
      liked: constants.LIKED,
    }[params.articleType] || 0;

  useEffect(() => {
    if (!articleType && params.articleType) navigate('/error');
  }, [params, articleType, navigate]);

  return { articleType };
};

export default useMypage;
