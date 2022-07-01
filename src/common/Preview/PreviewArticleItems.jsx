import PreviewArticleItem from './PreviewArticleItem';

const PreviewArticleItems = ({ items }) => {
  return <div>{items && items.slice(0, 6).map(item => <PreviewArticleItem item={item} />)}</div>;
};

export default PreviewArticleItems;
