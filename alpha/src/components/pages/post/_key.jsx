import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { MainContainer as MC } from "../../atoms/global";
import Breadcrumb from "../../organisms/Article/Breadcrumb";
import { AiOutlineEye, AiOutlineMessage } from "react-icons/ai";
import { BsFillBookmarkFill, BsStopwatch } from "react-icons/bs";
import { FiThumbsUp, FiMoreHorizontal } from "react-icons/fi";
import CommentCard from "../../organisms/Article/CommentCard";
import RecommendArticleList from "../../organisms/Article/RecommendArticleList";
import InputComment from "../../organisms/Article/InputComment";
import { useNavigate, useLocation } from "react-router-dom";
import { getArticle } from "../../../apis/article";

const _key = () => {
  const [article, setArticle] = useState({});
  const currentPath = decodeURI(useLocation().pathname).split("/")[2];
  useEffect(() => {
    (async () => {
      const params = {
        key: currentPath,
      };
      const data = await getArticle(params);
    })();
  }, []);
  return (
    <MainContainer>
      <main>
        <Breadcrumb title="닭" slug="오늘의인기글" />
        <h1>제목</h1>
        <div className="company">
          <span style={{ color: "#37acc9" }}>KAKAO</span>
          <span>·</span>
          <span>세발자</span>
        </div>

        <div clasName="info">
          <div className="left">
            <span>
              <BsStopwatch className="icon" size="16" />
              어제
            </span>
            <span>
              <AiOutlineEye className="icon" size="16" />
              152
            </span>
            <span>
              <AiOutlineMessage className="icon" size="16" />
              15
            </span>
          </div>

          <div className="right">
            <span>
              <BsFillBookmarkFill className="icon" size="16" />
            </span>
            <span>
              <FiMoreHorizontal className="icon" size="16" />
            </span>
          </div>
        </div>
        <div className="content">고기 먹고 싶어라</div>
        <picture className="article-image">
          {/* <img
          :src="`https://blind-clone-coding.s3.ap-northeast-2.amazonaws.com/${article.articleImgAddress}`"
          :alt="article.articleImgAddress"
        /> */}
        </picture>

        <div className="action">
          <div className="left">
            <span>
              <FiThumbsUp className="icon" size="16" />
              15
            </span>
            <span>
              <AiOutlineMessage className="icon" size="16" />5
            </span>
          </div>
        </div>
        <section className="comment">
          <h5>댓글 55</h5>
          <InputComment />
          <div className="comment-list">
            <CommentCard />
          </div>
        </section>
      </main>
      <RecommendArticleList />
    </MainContainer>
  );
};

const MainContainer = styled(MC)`
  h1 {
    font-size: 24px;
    margin: 0;
    line-height: 32px;
  }
  h5 {
    font-size: 16px;
  }
  .company {
    font-size: 14px;
    margin: 15px 0;
  }
  .info,
  .action {
    opacity: 0.4;
    color: #222;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    .left,
    .right {
      display: flex;
      gap: 20px;
      .icon {
        position: relative;
        top: 1.5px;
      }
    }
  }
  .content {
    padding: 30px 0;
    white-space: pre-line;
    line-height: 28px;
  }
`;

export default _key;
