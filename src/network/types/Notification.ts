export type Notification = {
  id: number;
  type: string;
  content: string;
  isRead: boolean;
  articleId: number;
  createdAt: Date;
  updatedAt: Date;
};
