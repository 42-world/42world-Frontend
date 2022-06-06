import PreviewArticleItem from './PreviewArticleItem';

const PreviewItems = ({ items }) => {
  return (
    <div>{items && items.map(item => <PreviewArticleItem item={item} />)}</div>
  );
};

export default PreviewItems;
