export type Notification = {
  id: number;
  type: 'NEW_COMMENT' | 'FROM_ADMIN';
  content: string;
  isRead: boolean;
  articleId: number;
  createdAt: Date;
  updatedAt: Date;
};
