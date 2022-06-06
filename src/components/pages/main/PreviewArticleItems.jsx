import PreviewArticleItem from './PreviewArticleItem';

const PreviewArticleItems = ({ items }) => {
  return (
    <div>{items && items.map(item => <PreviewArticleItem item={item} />)}</div>
  );
};

export default PreviewArticleItems;
