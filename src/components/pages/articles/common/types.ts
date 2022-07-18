import { Article } from '@root/network/types/Article';
import { User } from '@root/network/types/User';

export interface ArticleProps {
  article: Article;
}

export interface StringProps {
  [key: string]: string;
}
export interface NumberProps {
  [key: string]: number;
}

export interface IdProps {
  articleId: number;
  categoryId: number;
}
