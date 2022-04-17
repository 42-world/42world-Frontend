import * as API from './APIType';

const reactionUrl = path => {
  return `${API.url('/reactions/articles')}${path}`;
};

const ReactionService = {
  /**
   *
   * @param {number} id article id
   * @returns
   */
  createArticleReactionHeart: async id => {
    const method = 'POST';
    const url = reactionUrl(`/${id}`);
    const response = await API.AXIOS({
      method,
      url,
    });
    return response.data;
  },

  /**
   *
   * @param {number} articleId
   * @param {number} commentId
   * @returns
   */
  createCommentReactionHeart: async (articleId, commentId) => {
    const method = 'POST';
    const url = reactionUrl(`/${articleId}/comments/${commentId}`);
    const response = await API.AXIOS({
      method,
      url,
    });
    return response.data;
  },
};

export default ReactionService;
