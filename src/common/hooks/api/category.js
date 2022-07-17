import { useQuery } from 'react-query';
import { CategoryService } from '@network';

export const CATEGORY_URL = '/category';
export const CATEGORIES_URL = '/categories';

export const useGetCategory = () => {
  const { isError, data = { data: [] } } = useQuery([CATEGORIES_URL], CategoryService.getCategories);

  return { isError, categories: data.data };
};

export const getCategoryName = (categories, categoryId) => {
  const category = categories.find(category => category.id == categoryId);
  return category?.name;
};
