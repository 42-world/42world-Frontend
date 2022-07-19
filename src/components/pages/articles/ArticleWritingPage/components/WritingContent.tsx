/** @jsxImportSource @emotion/react */

import { useReducer } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import { WritingInputState } from '@components/pages/articles/common/types';
import { writingReducer } from '@components/pages/articles/common/reducer';
import ArticleWritingHeader from './ArticleWritingHeader';
import ArticleWritingBody from './ArticleWritingBody';
import { css } from '@emotion/react';

interface WritingContentProps {
  categoryId: number;
  articleId?: number;
}

const WritingContent = ({ categoryId, articleId }: WritingContentProps) => {
  const initialState: WritingInputState = { title: '', content: '', categoryId: categoryId };
  const [state, dispatch] = useReducer(writingReducer, initialState);

  return (
    <div css={mainStyle}>
      <ArticleWritingHeader state={state} dispatch={dispatch} articleId={articleId} />
      <ArticleWritingBody state={state} dispatch={dispatch} articleId={articleId} />
    </div>
  );
};

const mainStyle = css`
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
  border-radius: 0.3rem;
`;

export default WritingContent;
