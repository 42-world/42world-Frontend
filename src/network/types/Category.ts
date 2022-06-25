export interface GetCategoriesResponse {
  id: number;
  name: string;
  isAnonymous: boolean;
  isArticleWritable: boolean;
  isArticleReadable: boolean;
  isCommentWritable: boolean;
  isCommentReadable: boolean;
  isReactionable: boolean;
}
