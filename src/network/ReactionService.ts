import { apiClient } from './APIType';
import { ArticleReactionResponse, CommentReactionRequest, CommentReactionResponse } from './types/Reaction';

const ARTICLE_REACTION_API_URL = 'reactions/articles';

const articleReaction = async (id: number): Promise<ArticleReactionResponse> => {
  const res = await apiClient.post<ArticleReactionResponse>(`${ARTICLE_REACTION_API_URL}/${id}`);

  return res.data;
};

const commentReaction = async ({ articleId, commentId }: CommentReactionRequest): Promise<CommentReactionResponse> => {
  const res = await apiClient.post(`${ARTICLE_REACTION_API_URL}/${articleId}/comments/${commentId}`);

  return res.data;
};

export default { articleReaction, commentReaction };
