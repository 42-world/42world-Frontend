import { useNavigate } from 'react-router-dom';

const useMyArticlePreview = hrefLink => {
  const navigate = useNavigate();

  const handleClickMoreButton = () => {
    navigate(`${hrefLink}`);
  };

  return { handleClickMoreButton };
};

export default useMyArticlePreview;
