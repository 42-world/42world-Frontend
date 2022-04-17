// import { getArticleTime, isNewArticle } from 'Utils/dayjsUtils';
import removeMarkdown from "remove-markdown";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SmsOutlined from "@mui/icons-material/SmsOutlined";

import styled from "styled-components";
import dayjs from "dayjs";

const getArticleTime = (time) =>
  dayjs(time).isSame(dayjs(), "day")
    ? dayjs(time).format("HH:mm")
    : dayjs(time).format("MM/DD");

const isNewArticle = (time) => dayjs().isBefore(dayjs(time).add(12, "hour"));

const PreviewArticle = ({ article, isBestArticle, onClickArticle }) => {
  const getPlainText = (text) => removeMarkdown(text).replaceAll("\\", "");

  return (
    <PreviewArticleDiv
      button
      divider
      className="article"
      onClick={onClickArticle}
      article={article}
    >
      <div className="top">
        {isBestArticle && <img alt="hot " src="assets/hot.svg" />}
        {isNewArticle(article.createdAt) && (
          <img alt="new" src="assets/new.svg" />
        )}
        {article.title}
      </div>
      <div className="middle">{getPlainText(article.content)}</div>
      <div className="bottom">
        {article.writer && <h2>{article.writer.nickname}</h2>}
        <h2>{getArticleTime(article.createdAt)}</h2>
        <h2>조회수 {article.viewCount}</h2>

        <div className="liked_icon">
          <FavoriteBorderIcon />
          {article.likeCount}
        </div>
        <div className="comment_icon">
          <SmsOutlined />
          {article.commentCount}
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

  .top {
    display: flex;
    font-size: 0.95rem;
    font-weight: 700;
    align-items: center;
    margin-bottom: 0.15rem;
    width: 100%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .top > * {
    padding-right: 0.3rem;
  }
  .middle {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 400;
    align-items: left;
    width: 100%;

    word-break: break-all;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .bottom {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: left;
    height: 2em;
    h2 {
      font-size: 0.6rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.5);
      margin-right: 0.5rem;
      width: max-content;
      //padding-top: 0.5rem;
    }

    div {
      margin-left: 0.5rem;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.3rem;
      svg {
        width: 1.4rem;
        margin-right: 0.1rem;
      }
    }

    .liked_icon {
      margin-left: auto;
      margin-bottom: 0.1rem;
      color: #df867d;
    }

    .comment_icon {
      color: #53b7ba;
    }
  }
`;
