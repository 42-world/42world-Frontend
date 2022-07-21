import { useGetCategory } from '@root/common/hooks/api/category';
import URLs from '@common/urls';
import { isEmpty } from '@root/common/utils';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type UseArticleListHeader = (hasQuery: boolean) => {
  search: string;
  isWriteable: boolean;
  handleSubmitSearch: (e: React.FormEvent) => void;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCreateArticle: () => void;
  getTitle: () => string;
};

const useArticleListHeader: UseArticleListHeader = (hasQuery: boolean) => {
  const navigate = useNavigate();
  const param = useParams();
  const { categories } = useGetCategory();
  const [search, setSearch] = useState('');
  const categoryId = param?.id ? parseInt(param.id) : null;
  const category = categories?.find(c => c.id === categoryId);
  const categoryName = category?.name ?? '';
  const isWriteable = category?.isArticleWritable ?? false;

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search === '') return;
    if (categoryId) {
      navigate(`/category/${categoryId}?q=${search}`);
    } else {
      navigate(`/category?q=${search}`);
    }
    setSearch('');
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleCreateArticle = () => {
    navigate(`${URLs.WRITING}?categoryId=${categoryId}`);
  };

  const getTitle = () => {
    if (hasQuery) {
      return isEmpty(categoryName) ? '전체 게시판 검색 결과' : `${categoryName} 검색 결과`;
    }
    return isEmpty(categoryName) ? '' : categoryName;
  };

  return {
    search,
    isWriteable,
    handleSubmitSearch,
    handleChangeSearch,
    handleCreateArticle,
    getTitle,
  };
};

export default useArticleListHeader;
