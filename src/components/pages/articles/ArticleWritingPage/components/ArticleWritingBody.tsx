import { Editor } from '@toast-ui/react-editor';
import { WritingInputState, WritingInputStateAction } from '@components/pages/articles/common/types';
import useArticleWritingBody from '@components/pages/articles/ArticleWritingPage/hooks/useArticleWritingBody';

interface ArticleWritingBodyProps {
  state: WritingInputState;
  dispatch: React.Dispatch<WritingInputStateAction>;
  articleId?: number;
}

const ArticleWritingBody = ({ state, dispatch, articleId }: ArticleWritingBodyProps) => {
  const { editorRef, handleChangeContent, handleSubmit, isEdit } = useArticleWritingBody({
    state,
    dispatch,
    articleId,
  });

  return (
    <>
      <div>
        <Editor
          ref={editorRef}
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={handleChangeContent}
        />
        <button onClick={handleSubmit}>{isEdit ? '수정하기' : '글쓰기'}</button>
      </div>
    </>
  );
};

export default ArticleWritingBody;
