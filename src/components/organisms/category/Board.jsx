import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ArticleService } from '../../../network';
import { ArticleList, Body, Wrapper } from '../../atoms/Board';
import { PageSelector } from './';
import BoardHeader from './BoardHeader';
import PreviewArticle from './PreviewArticle';

const Board = () => {
  const [Articles, setArticles] = useState(null);
  const [page, setPage] = useState(1);
  const [articleCount, setArticleCount] = useState(10);
  const loca = useLocation();

  const categoryId = loca.pathname.split('/')[2];

  useEffect(() => {
    setArticleCount(10);
    (async () => {
      const { data } = await ArticleService.getArticlesByCategoryId(categoryId, page, articleCount);
      // const data = await ArticleService.getArticles(categoryId, page);
      setArticles(data);
    })();
    // eslint-disable-next-line
  }, [categoryId, page, articleCount]);
  return (
    <>
      <CategoryBlock>
        <Wrapper>
          <div className="BoardHeaderWrapper">
            <BoardHeader />
          </div>
          <Body>
            <ArticleList>
              {Articles &&
                Articles.map((article, id) => (
                  <Link to={`/article/${article.id}`} className="articleList_content" key={id}>
                    <PreviewArticle article={article} />
                  </Link>
                ))}
            </ArticleList>
          </Body>
          <PageSelector curPage={page} setCurPage={setPage} categoryId={categoryId} articleCount={articleCount} />
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
