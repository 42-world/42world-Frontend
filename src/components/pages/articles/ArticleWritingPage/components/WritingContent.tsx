import { useReducer } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import { WritingInputState } from '@components/pages/articles/common/types';
import { writingReducer } from '@components/pages/articles/common/reducer';
import ArticleWritingHeader from './ArticleWritingHeader';
import ArticleWritingBody from './ArticleWritingBody';

interface WritingContentProps {
  categoryId: number;
  articleId?: number;
}

const WritingContent = ({ categoryId, articleId }: WritingContentProps) => {
  const initialState: WritingInputState = { title: '', content: '', categoryId: categoryId };
  const [state, dispatch] = useReducer(writingReducer, initialState);

  return (
    <>
      <ArticleWritingHeader state={state} dispatch={dispatch} articleId={articleId} />
      <ArticleWritingBody state={state} dispatch={dispatch} articleId={articleId} />
    </>
  );
};

export default WritingContent;
