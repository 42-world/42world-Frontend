import { useEffect, useMemo, useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import { ArticleService, ImageService } from '@root/network';
import { URLs } from '@root/common/urls';
import { useGetArticleById } from '@common/hooks/api/article';
import { useGetCategory } from '@common/hooks/api/category';
import { isEmpty } from '@common/utils';

interface InputState {
  title: string;
  content: string;
  categoryId: number;
}

enum InputStateEnum {
  CHANGE_INPUT,
  LOAD_ARTICLE,
}

type InputStateAction = {
  type: InputStateEnum;
  name: string;
  value: any;
};

const reducer = (state: InputState, action: InputStateAction) => {
  switch (action.type) {
    case InputStateEnum.CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case InputStateEnum.LOAD_ARTICLE:
      return {
        ...state,
        title: action.value.title,
        content: action.value.content,
      };
  }
};

interface WritingContentProps {
  categoryId: number;
  articleId?: number;
}

const WritingContent = ({ categoryId, articleId }: WritingContentProps) => {
  const initialState: InputState = { title: '', content: '', categoryId: categoryId };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ArticleWritingHeader state={state} dispatch={dispatch} />
      <ArticleWritingBody state={state} dispatch={dispatch} articleId={articleId} />
    </>
  );
};

interface ArticleWritingHeaderProps {
  state: InputState;
  dispatch: React.Dispatch<InputStateAction>;
  articleId?: number;
}

const ArticleWritingHeader = ({ state, dispatch, articleId }: ArticleWritingHeaderProps) => {
  const { categories } = useGetCategory();
  const writeableCategories = useMemo(() => categories?.filter(category => category.isArticleWritable), [categories]);

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: InputStateEnum.CHANGE_INPUT, name: 'categoryId', value: parseInt(e.target.value) });
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: InputStateEnum.CHANGE_INPUT, name: 'title', value: e.target.value });
  };

  return (
    <div>
      <select name="category" id="category" value={state.categoryId} onChange={handleChangeCategory}>
        {writeableCategories?.map(category => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input name="title" value={state.title} onChange={handleChangeTitle} maxLength={42} />
    </div>
  );
};

interface ArticleWritingBodyProps {
  state: InputState;
  dispatch: React.Dispatch<InputStateAction>;
  articleId?: number;
}

const ArticleWritingBody = ({ state, dispatch, articleId }: ArticleWritingBodyProps) => {
  const navigate = useNavigate();
  const editorRef = useRef<Editor>(null);
  const { article, remove: articleCacheRemove } = useGetArticleById(articleId ?? 0, !isEmpty(articleId));

  const markdownEditorSetting = () => {
    const editor = editorRef.current as Editor;
    editor.getRootElement().classList.add('editor');
    editor.getInstance().removeHook('addImageBlobHook');
    editor.getInstance().addHook('addImageBlobHook', (blob, callback) => {
      (async () => {
        ImageService.uploadImage(blob).then(res => {
          callback(res);
        });
      })();
    });
  };

  const handleChangeContent = () => {
    dispatch({
      type: InputStateEnum.CHANGE_INPUT,
      name: 'content',
      value: editorRef.current?.getInstance().getMarkdown(),
    });
  };

  const validateTitleAndContent = () => {
    if (state.title === '') {
      window.alert('제목을 입력하세요!');
      return;
    }
    if (state.content === '') {
      window.alert('내용을 입력하세요!');
      return;
    }
  };

  const navigateArticle = (articleId: number) => {
    navigate(`${URLs.ARTICLE}/${articleId}`);
  };

  const handleSubmitCreate = async () => {
    validateTitleAndContent();

    try {
      const data = await ArticleService.createArticles({
        title: state.title,
        content: state.content,
        categoryId: state.categoryId,
      });

      navigateArticle(data.id);
    } catch (err) {
      window.alert('글 작성 실패');
    }
  };

  const handleSubmitEdit = async () => {
    validateTitleAndContent();

    try {
      await ArticleService.editArticles(articleId, {
        title: state.title,
        content: state.content,
        categoryId: state.categoryId,
      });

      articleCacheRemove();
      navigateArticle(articleId!);
    } catch (err) {
      window.alert('글 수정 실패');
    }
  };

  const handleSubmit = isEmpty(articleId) ? handleSubmitCreate : handleSubmitEdit;

  useEffect(() => {
    if (editorRef.current) {
      markdownEditorSetting();
    }
  }, [editorRef]);

  useEffect(() => {
    if (article) {
      dispatch({
        type: InputStateEnum.LOAD_ARTICLE,
        name: 'content',
        value: { title: article.title, content: article.content },
      });
      editorRef.current?.getInstance().setMarkdown(article.content);
    }
  }, [article]);

  return (
    <>
      <div>
        <Editor
          ref={editorRef}
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={handleChangeContent}
        />
        <button onClick={handleSubmit}>{isEmpty(articleId) ? '글쓰기' : '수정하기'}</button>
      </div>
    </>
  );
};

export default WritingContent;
