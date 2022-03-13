import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineMessage } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";
import { timeLeft } from "../../apis/time";

const GlobalArticleCard = ({ article }) => {
  return (
    <GlobalArticleCardBlock>
      <div className="head">
        <Link to={`/article/${article.key}`} className="title">
          {article.title}
        </Link>
      </div>
      <div className="body">
        <Link to={`/article/${article.key}`} className="content">
          {article.content}
        </Link>
        <div className="info">
          <Link to={`/article/${article.key}`} className="company">
            {article.author.company.name}
          </Link>
          <Link to={`/article/${article.key}`}>·</Link>
          <Link to={`/article/${article.key}`} className="nickname">
            {article.author.nickname}
          </Link>
        </div>
      </div>
      <div className="foot">
        <div className="left">
          <Link to={`/article/${article.key}`} className="count">
            <AiOutlineEye className="icon" size="16" />
            {article.viewCount}
          </Link>
          <Link to={`/article/${article.key}`} className="count">
            <FiThumbsUp className="icon" size="16" />
            {article.thumbupCount}
          </Link>
          <Link to={`/article/${article.key}`} className="count">
            <AiOutlineMessage className="icon" size="16" />
            {article.commentCount}
          </Link>
        </div>
        <div className="right">
          <Link to={`/article/${article.key}`}>
            {timeLeft(article.createdAt)}
          </Link>
          <BsFillBookmarkFill className="icon" size="16" />
        </div>
      </div>
    </GlobalArticleCardBlock>
  );
};

const GlobalArticleCardBlock = styled.article`
  padding: 20px;
  border-bottom: 1px solid #eee;
  a {
    color: #222;
  }
  &:nth-child(2n - 1) {
    border-right: 1px solid #eee;
  }
  .head {
    .title {
      display: block;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.4em;
      margin-top: 1px;
      height: 52px;
      margin-bottom: 0;
    }
  }
  .body {
    .content {
      margin-top: 4px;
      color: #222;
      display: block;
      font-size: 14px;
      line-height: 1.25em;
    }
    .info {
      margin-top: 20px;
      display: block;
    }
  }
  .foot {
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
    opacity: 0.4;
    .count {
      margin-right: 15px;
      .icon {
        position: relative;
        top: 1px;
      }
    }
  }
`;
export default GlobalArticleCard;
