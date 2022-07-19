/** @jsxImportSource @emotion/react */

import { Editor } from '@toast-ui/react-editor';
import { WritingInputState, WritingInputStateAction } from '@components/pages/articles/common/types';
import useArticleWritingBody from '@components/pages/articles/ArticleWritingPage/hooks/useArticleWritingBody';
import { css } from '@emotion/react';

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
      <div css={articleWritingBody}>
        <Editor
          ref={editorRef}
          previewStyle="vertical"
          height="300px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={handleChangeContent}
        />
        <button css={submitButton} onClick={handleSubmit}>{isEdit ? '수정하기' : '글쓰기'}</button>
      </div>
    </>
  );
};

const articleWritingBody = css`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  -webkit-box-align: stretch;
  align-items: stretch;
`;

const submitButton = css`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  border: none;
  background-color: rgb(83, 183, 186);
  color: rgb(255, 255, 255);
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.3rem;
`;

export default ArticleWritingBody;
