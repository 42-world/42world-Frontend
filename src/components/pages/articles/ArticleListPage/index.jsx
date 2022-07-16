/** @jsxImportSource @emotion/react */

import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, useParams } from 'react-router-dom';
import { css } from '@emotion/react';

import { serializeFormQuery } from '@root/common/utils';
import { useGetArticles } from '@common/hooks/api/article';
import { useGetSearchResults } from '@common/hooks/api/search';
import PageSelector from '@root/common/PageSelector';
import ArticleList from './components/ArticleList';
import ArticleListHeader from './components/ArticleListHeader';
import Board from '../common/Board';
import { block } from '../common/styles';

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
    setPage(searchParams.get('page'));
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

  width: 12rem;

  border-radius: 0.3rem;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: #fff;
  text-decoration: none;
`;

const articleListStyle = css`
  width: 12rem;
  min-width: 12rem;
`;

export default ArticleListPage;
