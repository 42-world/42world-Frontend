/** @jsxImportSource @emotion/react */

import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, useParams } from 'react-router-dom';
import { css } from '@emotion/react';

import { useGetArticles } from '@common/hooks/api/article';
import { useGetSearchResults } from '@common/hooks/api/search';
import PageSelector from '@common/PageSelector';
import { serializeFormQuery } from '@common/utils';
import ArticleList from './components/ArticleList';
import ArticleListHeader from './components/ArticleListHeader';
import Board from '../common/Board';
import { block } from '../common/styles';
import { theme } from '@styles/theme';

const ArticleListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const param = useParams();
  const [page, setPage] = useState(1);
  const query = new URLSearchParams(location.search).get('q');

  const categoryId = param?.id ? parseInt(param.id) : null;
  const hasQuery = query?.length >= 1;
  const { articles: articleList, meta: articlesMeta } = useGetArticles(categoryId, page, !hasQuery);
  const { articles: searchedArticles, meta: searchedArticlesMeta } = useGetSearchResults(
    query,
    categoryId,
    page,
    hasQuery,
  );

  const articles = hasQuery ? searchedArticles : articleList;
  const meta = hasQuery ? searchedArticlesMeta : articlesMeta;

  const handleChange = value => {
    setPage(value);
    setSearchParams({ ...serializeFormQuery(searchParams), page: value });
  };

  useEffect(() => {
    setPage(parseInt(searchParams.get('page')) || 1);
  }, [searchParams]);

  return (
    <Board categoryId={categoryId}>
      <div css={[block, articleListStyle]}>
        <div css={categoryBlock}>
          <ArticleListHeader hasQuery={hasQuery} />
          <ArticleList articles={articles} categoryId={categoryId} />
          <PageSelector currentPage={page} onChangePage={handleChange} totalPageCount={meta?.pageCount || 0} />
        </div>
      </div>
    </Board>
  );
};

const categoryBlock = css`
  display: flex;
  flex-direction: column;

  border-radius: 0.3rem;
  box-shadow: ${theme.boxShadow};
  background-color: #fff;
  text-decoration: none;
`;

const articleListStyle = css`
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

export default ArticleListPage;
