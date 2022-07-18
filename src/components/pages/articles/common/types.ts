import { Article } from '@root/network/types/Article';

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
