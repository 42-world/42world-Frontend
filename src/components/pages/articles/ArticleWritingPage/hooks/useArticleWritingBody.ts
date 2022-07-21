import React, { useRef, useEffect } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { useNavigate } from 'react-router-dom';

import { useGetArticleById } from '@common/hooks/api/article';
import {
  WritingInputState,
  WritingInputStateAction,
  WritingInputStateEnum,
} from '@components/pages/articles/common/types';
import { isEmpty } from '@common/utils';
import { ArticleService, ImageService } from '@root/network';
import URLs from '@common/urls';
import { ARTICLE_CONTENT_MAX_LENGTH, ARTICLE_TITLE_MAX_LENGTH } from '@common/constants';

interface UseArticleWritingBodyProps {
  state: WritingInputState;
  dispatch: React.Dispatch<WritingInputStateAction>;
  articleId?: number;
}

type UseArticleWriingBody = (props: UseArticleWritingBodyProps) => {
  editorRef: React.RefObject<Editor>;
  handleSubmit: () => Promise<void>;
  handleChangeContent: () => void;
  isEdit: boolean;
};

const useArticleWritingBody: UseArticleWriingBody = ({ state, dispatch, articleId }: UseArticleWritingBodyProps) => {
  const navigate = useNavigate();
  const editorRef = useRef<Editor>(null);
  const { article, remove: articleCacheRemove } = useGetArticleById(articleId ?? 0, !isEmpty(articleId));
  const isEdit = !isEmpty(articleId);

  const markdownEditorSetting = () => {
    const editor = editorRef.current as Editor;
    editor.getRootElement().classList.add('editor');
    editor.getInstance().removeHook('addImageBlobHook');
    editor.getInstance().addHook('addImageBlobHook', (blob, callback) => {
      ImageService.uploadImage(blob).then(res => {
        callback(res);
      });
    });
  };

  const handleChangeContent = () => {
    dispatch({
      type: WritingInputStateEnum.CHANGE_INPUT,
      name: 'content',
      value: editorRef.current?.getInstance().getMarkdown(),
    });
  };

  const handleSubmitCreate = async () => {
    if (!validateTitleAndContent()) return;

    try {
      const data = await ArticleService.createArticles({
        title: state.title,
        content: state.content,
        categoryId: state.categoryId,
      });

      articleCacheRemove();
      navigateArticle(data.id);
    } catch (err) {
      window.alert('글 작성 실패');
    }
  };

  const handleSubmitEdit = async () => {
    if (!validateTitleAndContent()) return;

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

  const validateTitleAndContent = () => {
    if (state.title === '') {
      window.alert('제목을 입력하세요!');
      return false;
    }
    if (state.content === '') {
      window.alert('내용을 입력하세요!');
      return false;
    }
    if (state.title.length > ARTICLE_TITLE_MAX_LENGTH) {
      window.alert(`글 제목은 최대 ${ARTICLE_TITLE_MAX_LENGTH}까지 입력가능합니다!`);
    }
    if (state.content.length > ARTICLE_CONTENT_MAX_LENGTH) {
      window.alert(`글 내용은 최대 ${ARTICLE_CONTENT_MAX_LENGTH}까지 입력가능합니다!`);
      return false;
    }
    return true;
  };

  const navigateArticle = (articleId: number) => {
    navigate(`${URLs.ARTICLE}/${articleId}`);
  };

  const handleSubmit = isEdit ? handleSubmitEdit : handleSubmitCreate;

  useEffect(() => {
    if (editorRef.current) {
      markdownEditorSetting();
    }
  }, [editorRef]);

  useEffect(() => {
    if (article) {
      dispatch({
        type: WritingInputStateEnum.LOAD_ARTICLE,
        name: 'content',
        value: { title: article.title, content: article.content },
      });
      editorRef.current?.getInstance().setMarkdown(article.content);
    }
  }, [article]);

  return {
    editorRef,
    handleSubmit,
    handleChangeContent,
    isEdit,
  };
};

export default useArticleWritingBody;
