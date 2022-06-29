import { useLocation } from 'react-router-dom';

import constants from 'components/pages/Mypage/constants';

const useMypage = () => {
  const location = useLocation();
  const articleType =
    {
      article: constants.ARTICLE,
      comment: constants.COMMENT,
      liked: constants.LIKED,
    }[location.pathname.split('/')[2]] || 0;

  return { articleType };
};

export default useMypage;
