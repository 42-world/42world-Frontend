/** @jsxImportSource @emotion/react */
import removeMarkdown from 'remove-markdown';
import styled from 'styled-components';
import { css } from '@emotion/react';
import { getArticleTime, isNewArticle } from '@common/utils';
import LikeCount from '@common/Preview/LikeCount';
import CommentCount from '@common/Preview/CommentCount';
import { Article } from '@network/types/Article';

interface PreviewArticleProps {
  article: Article;
  isBestArticle?: boolean;
}

const PreviewArticle = ({ article, isBestArticle = false }: PreviewArticleProps) => {
  const getPlainText = (text: string) => removeMarkdown(text).replaceAll('\\', '');

  return (
    <PreviewArticleDiv>
      <div css={left}>
        <div css={top}>
          {isBestArticle && <img alt="hot " src="assets/hot.svg" />}
          {isNewArticle(article.createdAt) && <img alt="new" src="../../assets/new.svg" />}
          <div css={title}>{article.title}</div>
        </div>
        <div css={middle}>
          <span>{getPlainText(article.content)}</span>
        </div>
        <div css={bottom}>
          {article.writer && <h2>{article.writer.nickname}</h2>}
          <h2 css={info}>{getArticleTime(article.createdAt)}</h2>
          <h2 css={info}>조회수 {article.viewCount}</h2>
        </div>
      </div>
      <div css={countTexts}>
        <LikeCount count={article.likeCount} />
        <CommentCount count={article.commentCount} />
      </div>
    </PreviewArticleDiv>
  );
};

export default PreviewArticle;

const PreviewArticleDiv = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.7rem 0.9rem;
  border-bottom: 1px solid #e6e6e6;
  background-color: #ffffff;
`;

const left = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const top = css`
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 0.2rem;

  & > img {
    margin-right: 0.3rem;
    margin-bottom: 0.1rem;
  }
`;

const title = css`
  width: 0px;
  flex-grow: 1;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.1rem;
`;

const middle = css`
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 0.3rem;

  & > span {
    width: 0px;
    flex-grow: 1;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 0.85rem;
    font-weight: 400;
    align-items: left;
  }
`;

const bottom = css`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  font-size: 0.75rem;
  gap: 5px;
`;

const info = css`
  font-size: 0.6rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 0.5rem;
  width: max-content;
`;

const countTexts = css`
  width: max-content;
  margin-left: auto;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
