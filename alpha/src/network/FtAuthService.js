import * as API from './APIType';

const ftauthUrl = path => {
  return `${API.url('/ft-auth')}${path}`;
};

const FtAuthService = {
  /**
   * **POST** User FtAuth
   * @param {string} intraId
   * @returns
   * `200` : success \
   * `other` : fail
   */
  createFtAuth: async intraId => {
    const method = 'POST';
    const url = ftauthUrl('');
    const data = { intraId };

    let response;
    try {
      response = await API.AXIOS({
        method,
        data: data,
        url,
      });
    } catch (error) {
      alert(error.response.data.message);
    }
    return response.data;
  },
};

export default FtAuthService;
