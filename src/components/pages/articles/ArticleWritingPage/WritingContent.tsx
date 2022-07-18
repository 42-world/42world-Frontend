import { useGetCategory } from '@common/hooks/api/category';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useMemo } from 'react';

const WritingContent = () => {
  return (
    <>
      <ArticleWritingHeader />
      <ArticleWritingBody />
    </>
  );
};

const ArticleWritingHeader = () => {
  const { categories } = useGetCategory();
  const writeableCategories = useMemo(() => categories?.filter(category => category.isArticleWritable), [categories]);

  return (
    <>
      <div>Category</div>
      <div>Title</div>
    </>
  );
};

const ArticleWritingBody = () => {
  return (
    <>
      <div>Body</div>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </>
  );
};

export default WritingContent;
