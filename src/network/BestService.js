import * as API from './APIType';

const bestUrl = path => {
  return `${API.url('/best')}${path}`;
};

const BestService = {
  /**
   * @param {number} count **option** 가져올 게시글 수
   * @returns {Promise<[{
   * id: number,
   * articleId: number,
   * article: Article,
   * createAt: Date,
   * updateAt: Date,
   * }]>} 인기글 목록
   */
  getBestArticle: async count => {
    const method = 'GET';
    const url = bestUrl(`?limit=${count}`);
    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      console.log('error');
    }
    return response.data;
  },
};

export default BestService;
