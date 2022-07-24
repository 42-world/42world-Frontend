import { User } from './User';

export type Comment = {
  id: number;
  content: string;
  likeCount: number;
  articleId: number;
  writerId: number;
  writer: User;
  isLike: boolean;
  isSelf: boolean;
  createdAt: Date;
  updatedAt: Date;
};
