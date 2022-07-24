import { AxiosResponse } from 'axios';
import { apiClient } from './APIType';
import { Category } from './types/Category';

export const CATEGORY_API_URL = '/categories';

export const getCategories = async (): Promise<AxiosResponse<Category[], any>> => {
  return apiClient.get<Category[]>(CATEGORY_API_URL);
};

export default { CATEGORY_API_URL, getCategories };
