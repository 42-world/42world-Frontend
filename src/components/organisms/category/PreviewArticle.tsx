/** @jsxImportSource @emotion/react */
import removeMarkdown from 'remove-markdown';
import styled from 'styled-components';
import { css } from '@emotion/react';
import { getArticleTime, isNewArticle } from 'common/utils';
import LikeCount from 'common/Preview/LikeCount';
import CommentCount from 'common/Preview/CommentCount';
import { Article } from 'network/types/Article';

interface PreviewArticleProps {
  article: Article;
  isBestArticle?: boolean;
}

const PreviewArticle = ({ article, isBestArticle = false }: PreviewArticleProps) => {
  const getPlainText = (text: string) => removeMarkdown(text).replaceAll('\\', '');

  return (
    <PreviewArticleDiv>
      <div css={top}>
        {isBestArticle && <img alt="hot " src="assets/hot.svg" />}
        {isNewArticle(article.createdAt) && <img alt="new" src="../../assets/new.svg" />}
        {article.title}
      </div>
      <div css={middle}>{getPlainText(article.content)}</div>
      <div css={bottom}>
        {article.writer && <h2>{article.writer.nickname}</h2>}
        <h2 css={info}>{getArticleTime(article.createdAt)}</h2>
        <h2 css={info}>조회수 {article.viewCount}</h2>

        <div css={countTexts}>
          <LikeCount count={article.likeCount} />
          <CommentCount count={article.commentCount} />
        </div>
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.9rem 0.3rem 0.9rem;
  border-bottom: 1px solid #e6e6e6;
  background-color: #ffffff;
`;

const top = css`
  display: flex;
  font-size: 0.95rem;
  font-weight: 700;
  align-items: center;
  margin-bottom: 0.15rem;
  width: 100%;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const middle = css`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 400;
  align-items: left;
  width: 100%;

  word-break: break-all;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const bottom = css`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  height: 2em;
`;

const info = css`
  font-size: 0.6rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 0.5rem;
  width: max-content;
`;

const countTexts = css`
  margin-left: auto;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
