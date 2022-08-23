import { useNavigate } from 'react-router-dom';

const useMyArticlePreview = (hrefLink: string) => {
  const navigate = useNavigate();

  const handleClickMoreButton = () => {
    navigate(`${hrefLink}`);
  };

  return { handleClickMoreButton };
};

export default useMyArticlePreview;
