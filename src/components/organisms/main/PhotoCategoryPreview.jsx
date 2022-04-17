import React from "react";
import styled from "styled-components";
import { PhotoArticlePreview } from ".";
import { rem } from "../../../styles/rem";

import { HiThumbUp } from "react-icons/hi";

const data = [
  {
    id: 0,
    title: "이거 지최 저녁임",
    writer: "뱅글뱅글뱅",
    time: Date.now(),
    viewCount: 100,
    likeCount: 2,
    commentCount: 2,
    url: "/assets/images/img-1.jpg",
  },
  {
    id: 1,
    title:
      "긴 제목 긴 제목 긴 제목 긴 제목 긴 제목 긴 제목 긴 제목 긴 제목 긴 제목 긴 제목 긴 제목 긴 제목 긴 제목 ",
    writer: "긴 이름 긴 이름 긴 이름 긴 이름 긴 이름 긴 이름 긴 이름 긴 이름 ",
    time: Date.now(),
    viewCount: 10000,
    likeCount: 2000,
    commentCount: 2000,
    url: "/assets/images/img-2.jpg",
  },
  {
    id: 2,
    title: "이거 지최 저녁임",
    writer: "뱅글뱅글뱅",
    time: Date.now(),
    viewCount: 100,
    likeCount: 2,
    commentCount: 2,
    url: "/assets/images/img-3.jpg",
  },
  {
    id: 3,
    title: "이거 지최 저녁임",
    writer: "뱅글뱅글뱅",
    time: Date.now(),
    viewCount: 100,
    likeCount: 2,
    commentCount: 2,
    url: "/assets/images/img-4.jpg",
  },
];

const PhotoCategoryPreview = () => {
  return (
    <PhotoCategoryPreviewWrapper>
      <div className="title">
        <div className="title-left">
          <HiThumbUp />
          <h2>오늘 뭐 먹지</h2>
        </div>
        <button className="more">{"더 보기 >"}</button>
      </div>
      <div className="preview-container">
        {data.map((article) => (
          <PhotoArticlePreview
            key={article.id}
            title={article.title}
            writer={article.writer}
            time={article.time}
            viewCount={article.viewCount}
            likeCount={article.likeCount}
            commentCount={article.commentCount}
            url={article.url}
          />
        ))}
      </div>
    </PhotoCategoryPreviewWrapper>
  );
};

const PhotoCategoryPreviewWrapper = styled.div`
  width: ${rem(768)};

  margin-top: ${rem(20)};
  padding: ${rem(4)} ${rem(8)};
  border-radius: ${rem(10)};
  box-shadow: ${(props) => props.theme.boxShadow};

  .title {
    padding: ${rem(8)} ${rem(8)};
    display: flex;
    justify-content: space-between;

    .title-left {
      display: flex;
      align-items: center;

      svg {
        font-size: ${rem(16)};
        margin-right: ${rem(6)};
      }

      h2 {
        font-size: ${rem(16)};
      }
    }

    .more {
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }

  .preview-container {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    border-top: ${rem(1)} solid ${(props) => props.theme.lineGray1};

    & > div {
      flex: 0 0 auto;
    }
  }

  ${(props) => props.theme.mobileSize} {
    width: 100%;
  }
`;

export default PhotoCategoryPreview;
