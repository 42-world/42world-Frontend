import { useGetCategory } from '@root/common/hooks/api/category';
import { isEmpty } from '@root/common/utils';
import { useMemo } from 'react';
import {
  WritingInputState,
  WritingInputStateAction,
  WritingInputStateEnum,
} from '@components/pages/articles/common/types';

interface ArticleWritingHeaderProps {
  state: WritingInputState;
  dispatch: React.Dispatch<WritingInputStateAction>;
  articleId?: number;
}

const ArticleWritingHeader = ({ state, dispatch, articleId }: ArticleWritingHeaderProps) => {
  const { categories } = useGetCategory();
  const writeableCategories = useMemo(() => categories?.filter(category => category.isArticleWritable), [categories]);
  const isEdit = !isEmpty(articleId);

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: WritingInputStateEnum.CHANGE_INPUT, name: 'categoryId', value: parseInt(e.target.value) });
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: WritingInputStateEnum.CHANGE_INPUT, name: 'title', value: e.target.value });
  };

  return (
    <div>
      <select name="category" id="category" value={state.categoryId} onChange={handleChangeCategory} disabled={isEdit}>
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

export default ArticleWritingHeader;
