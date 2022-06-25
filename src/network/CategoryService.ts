import { AxiosResponse } from 'axios';
import { apiClient } from './APIType';
import { GetCategoriesResponse } from './types/Category';

export const CATEGORY_API_URL = '/categories';

export const getCategories = async (): Promise<
  AxiosResponse<GetCategoriesResponse, any>
> => {
  return apiClient.get<GetCategoriesResponse>(CATEGORY_API_URL);
};

export default { CATEGORY_API_URL, getCategories };