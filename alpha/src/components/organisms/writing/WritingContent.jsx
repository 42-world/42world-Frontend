import React from "react";
import styled from "styled-components";

import "@toast-ui/editor/dist/toastui-editor.css";
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
  const editorRef = React.useRef(null);

  const markdownEditorSetting = () => {
    const editor = editorRef.current;
    editor.getRootElement().classList.add("editor");
    editor.getInstance().removeHook("addImageBlobHook");
    //editor.getInstance().addHook("addImageBlobHook", (blob, callback) => {
    //  (async () => {
    //    ImageService.uploadImage(blob).then((res) => {
    //      callback(res);
    //    });
    //  })();
    //});   마크다운을 통한 이미지 업로드 시 필요한 기능
  };

  React.useEffect(() => {
    if (editorRef.current) {
      markdownEditorSetting();
    }
  }, [editorRef]);

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
      <div className="content">
        <Editor
          previewStyle="vertical"
          initialEditType="wysiwyg"
          onChange={() => {}}
          ref={editorRef}
        />
        <button className="submit">글쓰기</button>
      </div>
    </WritingContentBlock>
  );
};

const WritingContentBlock = styled.div`
  //width: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 0.3rem;

  & > .header {
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
    }
  }

  .content {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-item: stretch;

    .editor {
      flex-grow: 1;
      box-sizing: border-box;
      width: 100%;
      .toastui-editor-dropdown-toolbar {
        flex-wrap: wrap;
        height: auto;
        width: min-content;
      }
      .toastui-editor-popup {
        width: auto;
        max-width: 400px;
        .toastui-editor-file-select-button {
          width: auto;
          padding: 0 4px;
          font-size: 0.7rem;
        }
        @media (max-width: 480px) {
          margin-left: 0px;
        }
      }
    }

    .submit {
      margin-top: 0.5rem;
      width: 100%;
      padding: 0.5rem 0.5rem;
      border: none;
      background-color: #53b7ba;
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 0.3rem;
    }
  }

  ${(props) => props.theme.mobileSize} {
    box-shadow: none;
  }
`;

export default WritingContent;
