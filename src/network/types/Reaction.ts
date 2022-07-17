export interface ArticleReactionResponse {
  likeCount: number;
  isLike: boolean;
}

export interface CommentReactionRequest {
  articleId: number;
  commentId: number;
}

export interface CommentReactionResponse {
  likeCount: number;
  isLike: boolean;
}
