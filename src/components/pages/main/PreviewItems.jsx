import PreviewItem from './PreviewItem';

const PreviewItems = ({ articles }) => {
  return (
    <div>
      {articles && articles.map(article => <PreviewItem article={article} />)}
    </div>
  );
};

export default PreviewItems;
