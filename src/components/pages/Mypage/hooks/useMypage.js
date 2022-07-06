import { useNavigate, useParams } from 'react-router-dom';

import constants from 'components/pages/Mypage/constants';
import { useEffect } from 'react';

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
  }, [params, articleType]);

  return { articleType };
};

export default useMypage;
