import { useNavigate } from 'react-router-dom';
import PreviewItem from './PreviewItem';

const PreviewArticleItem = ({ item }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/article/${item.id}`);
  };
  return <PreviewItem onClickHandler={onClick} item={item} />;
};

export default PreviewArticleItem;
