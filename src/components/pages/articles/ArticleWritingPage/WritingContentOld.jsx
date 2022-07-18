import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import { ArticleService, ImageService } from '@network';
import { useGetCategory } from '@common/hooks/api/category';

import styled from 'styled-components';

const WritingContentOld = ({ articleContent, articleTitle }) => {
  const [title, setTitle] = useState(articleTitle);
  const [content, setContent] = useState(articleContent);
  const [articleId, setArticleId] = useState(null);
  const [categoryId, setCategoryId] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  // TODO : 로딩 상태에 따라 로딩 컴포넌트 추가
  // eslint-disable-next-line
  const { isError, categories } = useGetCategory();
  const editorRef = useRef(null);
  const titleRef = useRef(null);
  const categoryRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const markdownEditorSetting = () => {
    const editor = editorRef.current;
    editor.getRootElement().classList.add('editor');
    editor.getInstance().removeHook('addImageBlobHook');
    editor.getInstance().addHook('addImageBlobHook', (blob, callback) => {
      (async () => {
        ImageService.uploadImage(blob).then(res => {
          callback(res);
        });
      })();
    }); // 마크다운을 통한 이미지 업로드 시 필요한 기능
  };

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleChangeContent = e => {
    setContent(editorRef.current.getInstance().getMarkdown());
  };

  let handleClickSubmit = async () => {
    setContent(editorRef.current.getInstance().getMarkdown());

    if (title === '') {
      alert('제목을 입력하세요!');
      return;
    }
    if (content === '') {
      alert('내용을 입력하세요!');
      return;
    }

    // 이동한 뒤에 API 실행됨
    if (!articleId) {
      await ArticleService.createArticles({
        title: title,
        content: content,
        // TODO : 현재 카테고리를 관리하는 state 추가
        categoryId: categoryId, // + 붙이면 number 타입
      });
    } else {
      await ArticleService.editArticles(articleId, {
        title: title,
        content: content,
        categoryId: categoryId,
      });
    }
    navigate(-1);
  };

  useEffect(() => {
    const { article } = location.state;
    if (!article) return;
    setTitle(article.title);
    setContent(article.content);
    setCategoryId(article.categoryId);
    setArticleId(article.id);
    categoryRef.current.disabled = true;
    titleRef.current.disabled = true;
    editorRef.current.getInstance().setMarkdown(article.content);
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      markdownEditorSetting();
    }
  }, [editorRef]);

  useEffect(() => {
    if (categoryRef) {
      categoryRef.current.value = categoryId;
    }
  }, [categoryId, categoryRef]);

  useEffect(() => {
    setCategoryList(categories.filter(category => category.isArticleWritable));
  }, [categories]);

  return (
    <WritingContentBlock>
      <div className="header">
        <select name="category" id="category" ref={categoryRef} defaultValue={categoryId}>
          {categoryList.map((item, idx) => (
            <option value={item.id} selected={item.id == categoryId} key={idx}>
              {item.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChangeTitle}
          placeholder="제목을 입력하세요"
          value={title}
          ref={titleRef}
        />
      </div>
      <div className="content">
        <Editor
          previewStyle="vertical"
          initialEditType="wysiwyg"
          placeholder="내용을 입력하세요"
          onChange={handleChangeContent}
          ref={editorRef}
        />
        <button className="submit" onClick={handleClickSubmit}>
          글쓰기
        </button>
      </div>
    </WritingContentBlock>
  );
};

const WritingContentBlock = styled.div`
  padding: 1rem;
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadow};
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
    align-items: stretch;

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

  ${props => props.theme.mobileSize} {
    box-shadow: none;
  }
`;

export default WritingContentOld;
