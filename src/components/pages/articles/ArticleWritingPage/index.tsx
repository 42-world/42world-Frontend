/** @jsxImportSource @emotion/react */

import { useParams } from 'react-router-dom';
import qs from 'qs';

import { isEmpty } from '@root/common/utils';
import WritingContent from './components/WritingContent';
import Board from '@components/pages/articles/common/Board';
import { css } from '@emotion/react';

const ArticleWritingPage = () => {
  const { id } = useParams();
  const { categoryId } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const categoryIdNumber = isEmpty(categoryId) ? 1 : parseInt(categoryId as string);
  const articleId = isEmpty(id) ? undefined : parseInt(id as string);

  return (
    <Board categoryId={categoryIdNumber}>
      <main css={mainWritingBlock}>
        <div css={innerWritingBlock}>
          <WritingContent categoryId={categoryIdNumber} articleId={articleId} />
        </div>
      </main>
    </Board>
  );
};

const mainWritingBlock = css`
  display: flex;
  flex-direction: row;

  margin-top: 1.5rem;
  margin: auto;

  width: 100%;
  max-width: 1100px;
`;

const innerWritingBlock = css`
  margin: 0 0.8rem;
  width: 100%;
`;

export default ArticleWritingPage;
