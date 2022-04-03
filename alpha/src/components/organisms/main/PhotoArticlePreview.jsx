import React from "react";
import dayjs from "dayjs";

import styled from "styled-components";

import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { rem } from "../../../styles/rem";

const PhotoArticlePreview = ({
  title,
  writer,
  time,
  viewCount,
  likeCount,
  commentCount,
  url,
}) => {
  const getArticleTime = (time) =>
    dayjs(time).isSame(dayjs(), "day")
      ? dayjs(time).format("HH:mm")
      : dayjs(time).format("MM/DD");

  const handleHugeCount = (count) => {
    const strCount = count.toString();
    if (strCount.length > 6) {
      return `${(count / 1000000).toFixed(0)}m`;
    } else if (strCount.length > 3) return `${count / 1000}k`;
    return count;
  };
  return (
    <PhotoArticlePreviewWrapper imageUrl={url}>
      <h3>{title}</h3>
      <div className="infos">
        <span className="writer">{writer}</span>
        <span>{getArticleTime(time)}</span>
        <span className="icon">
          <AiFillEye />
          <span>{handleHugeCount(viewCount)}</span>
        </span>
        <span className="like icon">
          <AiOutlineHeart />
          <span>{handleHugeCount(likeCount)}</span>
        </span>
        <span className="comment icon">
          <BiCommentDots />
          <span>{handleHugeCount(commentCount)}</span>
        </span>
      </div>
    </PhotoArticlePreviewWrapper>
  );
};

const PhotoArticlePreviewWrapper = styled.div`
  width: ${rem(200)};
  height: ${rem(200)};
  padding: ${rem(8)};
  margin: ${rem(2)};
  border-radius: ${rem(10)};
  background-image: url(${(props) => props.imageUrl});
  background-size: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${(props) => props.theme.textWhite};

  h3 {
    overflow: hidden;
    white-space: nowrap;
    font-size: ${rem(16)};
    text-overflow: ellipsis;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${rem(10)};

    .writer {
      width: ${rem(48)};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .like {
      color: ${(props) => props.theme.buttonRed1};
    }

    .comment {
      color: ${(props) => props.theme.buttonBlue2};
    }

    .icon > svg {
      vertical-align: middle;
      margin-right: ${rem(2)};
    }
  }

  &: hover {
    cursor: pointer;
  }
`;

export default PhotoArticlePreview;
