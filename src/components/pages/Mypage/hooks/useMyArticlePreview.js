import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import getArticleInfo from '@components/pages/Mypage/utils/myArticlePreviewUtils';

const useMyArticlePreview = hrefLink => {
  const navigate = useNavigate();

  const handleClickMoreButton = () => {
    navigate(`${hrefLink}`);
  };

  return { handleClickMoreButton };
};

export default useMyArticlePreview;
