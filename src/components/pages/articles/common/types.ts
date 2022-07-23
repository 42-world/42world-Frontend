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

export type WritingInputState = {
  title: string;
  content: string;
  categoryId: number;
};

export type WritingInputStateType = 'CHANGE_INPUT' | 'LOAD_ARTICLE';

export type WritingInputStateAction = {
  type: WritingInputStateType;
  name: string;
  value: any;
};
