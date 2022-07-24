import * as API from './APIType';

const commentUrl = path => {
  return `${API.url('/comments')}${path}`;
};

const CommentService = {
  /**
   * **CREATE** Comments
   * @param {{content: string,articleId: number}} newComments
   * @returns {Promise<[{
   * id: number,
   * content: string,
   * articleId: number,
   * writerId: number,
   * writer: {
   * id: number,
   * nickname: string,
   * oauthToken: string,
   * isAuthenticated: true,
   * lastLogin: Date,
   * role: CADET,
   * character: 5,
   * deletedAt: Date,
   * createdAt: Date,
   * updatedAt: Date},
   * deletedAt: Date,
   * createdAt: Date,
   * updatedAt: Date}]>}
   * comments
   * `200` : success
   * `401` : fail
   */
  createComment: async newComment => {
    const method = 'POST';
    const url = commentUrl('');
    const body = newComment;

    let response;
    try {
      response = await API.AXIOS({
        method,
        data: body,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data; // 응답에 writer 객체의 nickname이 안넘어옴.
  },
  /**
   * **UPDATE** Comments with Comments ID
   * @param {string} commentsId
   * @param {{content: string}} updateComments
   * @returns {{
   * id: number,
   * content: string,
   * articleId: number,
   * writerId: number,
   * writer: {
   * id: number,
   * nickname: string,
   * oauthToken: string,
   * isAuthenticated: true,
   * lastLogin: Date,
   * role: CADET,
   * character: 5,
   * deletedAt: Date,
   * createdAt: Date,
   * updatedAt: Date},
   * deletedAt: Date,
   * createdAt: Date,
   * updatedAt: Date}}
   * comments
   * `200` : success
   * `401` : fail
   */
  updateComments: async (updateComments, commentsId) => {
    const method = 'PUT';
    const url = commentUrl(`/${commentsId}`);
    const body = updateComments;

    let response;
    try {
      response = await API.AXIOS({
        method,
        body,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  deleteComment: async commentId => {
    const method = 'DELETE';
    const url = commentUrl(`/${commentId}`);

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
};

export default CommentService;
