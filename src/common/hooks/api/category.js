import { useQuery } from 'react-query';
import { CategoryService } from '@network';

export const CATEGORY_URL = '/category';
export const CATEGORIES_URL = '/categories';

export const getCategory = () => {
  const { isError, data } = useQuery([CATEGORIES_URL], CategoryService.getCategories);

  return { isError, categories: data?.data ?? [] };
};
