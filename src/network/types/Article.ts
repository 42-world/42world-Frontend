import { Category } from './Category';
import { Pagination } from './Pagination';
import { User } from './User';

export type Article = {
  id: number;
  title: string;
  content: string;
  view_count: number;
  categoryId: number;
  category: Category;
  writerId: number;
  writer: User;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export interface GetArticleSearchRequest {
  q: string;
  page?: number;
  take?: number;
  order?: 'ASC' | 'DESC';
}

export interface GetArticleSearchResponse extends Pagination<Article> {}
