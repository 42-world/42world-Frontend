/** @jsxImportSource @emotion/react */

import { Editor } from '@toast-ui/react-editor';
import { WritingInputState, WritingInputStateAction } from '@components/pages/articles/common/types';
import useArticleWritingBody from '@components/pages/articles/ArticleWritingPage/hooks/useArticleWritingBody';
import { css } from '@emotion/react';
import { ARTICLE_CONTENT_MAX_LENGTH } from '@root/common/constants';

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
          placeholder={`최대 ${ARTICLE_CONTENT_MAX_LENGTH}글자까지 입력 가능합니다.`}
          autofocus={false}
        />
        <button css={submitButton} onClick={handleSubmit}>
          {isEdit ? '수정하기' : '글쓰기'}
        </button>
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

  .editor {
    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
    .toastui-editor-dropdown-toolbar {
      flex-wrap: wrap;
      height: auto;
      width: min-content;
    }
    .toastui-editor-popup {
      width: max-content;
      max-width: 15rem;
      .toastui-editor-file-select-button {
        padding: 0 4px;
        font-size: 0.7rem;
      }
      @media (max-width: 480px) {
        margin-left: -3rem;
      }
    }
  }
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
  cursor: pointer;
`;

export default ArticleWritingBody;
