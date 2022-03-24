import React from "react";
import styled from "styled-components";

import { Editor } from "@toast-ui/react-editor";

const WritingContent = ({ articleInfo }) => {
  const communityList = [
    "자유게시판",
    "익명게시판1",
    "익명게시판2",
    "지듣노[지최가 듣는 노래]",
    "42Chelin",
    "고양이게시판",
    "강아지게시판",
  ];

  return (
    <WritingContentBlock>
      <div className="header">
        <select name="community" id="community">
          {communityList.map((community) => (
            <option key={community}>{community}</option>
          ))}
        </select>
        <input
          type="text"
          name="title"
          id="title"
          value={articleInfo.title}
          placeholder="제목을 입력하세요"
        />
      </div>
      <div className="content"></div>
    </WritingContentBlock>
  );
};

const WritingContentBlock = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.3rem;

  .header {
    display: flex;
    flex-direction: column;
    select {
      width: max-content;
      padding: 0.3rem 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    input {
      width: 100%;
      padding: 0.5rem 0.5rem;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  }

  .content {
  }
`;

export default WritingContent;
