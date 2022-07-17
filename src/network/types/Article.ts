import { Category } from './Category';
import { Pagination } from './Pagination';
import { User } from './User';

export type Article = {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  categoryId: number;
  category: Category;
  writerId: number;
  writer: User;
  likeCount: number;
  commentCount: number;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export interface GetArticleSearchRequest {
  q: string;
  categoryId?: number;
  page?: number;
  take?: number;
  order?: 'ASC' | 'DESC';
}

export interface GetArticleSearchResponse extends Pagination<Article> {}
