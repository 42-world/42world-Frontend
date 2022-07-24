import { useQuery } from 'react-query';
import { CategoryService } from '@root/network';
import { Category } from '@root/network/types/Category';

export const CATEGORY_URL = '/category';
export const CATEGORIES_URL = '/categories';

type GetCategory = () => { isError: Boolean; categories?: Category[] };

type GetCategoryName = (categoryId: number, categories?: Category[]) => string | undefined;

export const useGetCategory: GetCategory = () => {
  const { isError, data = { data: [] } } = useQuery([CATEGORIES_URL], CategoryService.getCategories);
  const categories = data.data.filter(category => category.isArticleReadable === true);

  return { isError, categories: categories };
};

export const getCategoryName: GetCategoryName = (categoryId, categories) => {
  const category = categories?.find(category => category.id == categoryId);
  return category?.name;
};
