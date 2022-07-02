import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import BoardHeader from '@common/Board/BoardHeader';
import { ArticleList, Body, Wrapper } from '@components/atoms/Board';
import PreviewArticle from './PreviewArticle';
import { getArticles } from '@common/hooks/api/article';
import { getSearchResults } from '@common/hooks/api/search';
import { PageSelector } from './';

const Board = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const param = useParams();
  const query = new URLSearchParams(location.search).get('q');
  const categoryId = param?.id ? parseInt(param.id) : null;

  const hasQuery = query?.length > 1;
  const { articles: articleList, meta: articlesMeta } = getArticles(categoryId, page, !hasQuery);
  const { articles: searchedArticles, meta: searchedArticlesMeta } = getSearchResults(query, page, hasQuery);

  const articles = hasQuery ? searchedArticles : articleList;
  const meta = hasQuery ? searchedArticlesMeta : articlesMeta;

  return (
    <>
      <CategoryBlock>
        <Wrapper>
          <div className="BoardHeaderWrapper">
            <BoardHeader hasQuery={hasQuery} />
          </div>
          <Body>
            <ArticleList>
              {articles &&
                articles.map((article, id) => (
                  <Link to={`/article/${article.id}`} className="articleList_content" key={id}>
                    <PreviewArticle article={article} />
                  </Link>
                ))}
            </ArticleList>
          </Body>
          <PageSelector currentPage={page} onChangePage={setPage} totalPageCount={meta?.pageCount || 0} />
        </Wrapper>
      </CategoryBlock>
    </>
  );
};

const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: #fff;

  .BoardHeaderWrapper {
    border-bottom: 0.1rem solid #d8d8d8;
  }
  .articleList_content {
    text-decoration: none;
    color: ${props => props.theme.black};
    &:last-child {
      div {
        border: none;
      }
    }
  }
`;

export default Board;
