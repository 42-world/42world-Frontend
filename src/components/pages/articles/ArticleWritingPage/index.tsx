/** @jsxImportSource @emotion/react */

import { useParams } from 'react-router-dom';
import qs from 'qs';

import { isEmpty } from '@root/common/utils';
import WritingContent from './components/WritingContent';
import Board from '@components/pages/articles/common/Board';
import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

const ArticleWritingPage = () => {
  const { id } = useParams();
  const { categoryId } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const categoryIdNumber = isEmpty(categoryId) ? 1 : parseInt(categoryId as string);
  const articleId = isEmpty(id) ? undefined : parseInt(id as string);

  return (
    <Board categoryId={categoryIdNumber}>
      <main css={innerWritingBlock}>
        <WritingContent categoryId={categoryIdNumber} articleId={articleId} />
      </main>
    </Board>
  );
};

const mainWritingBlock = css`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 1100px;
`;

const innerWritingBlock = css`
  margin: 0 0.8rem;
  width: 100%;
  max-width: calc(((100% - 15.2rem) - 9rem) - 1.6rem);

  @media screen and (max-width: 1020px) {
    max-width: calc(100% - 15.2rem);
  }

  ${theme.mobileSize} {
    max-width: 100%;
    margin: 0;
  }
`;

export default ArticleWritingPage;
