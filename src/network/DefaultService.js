import * as API from './APIType';

const bestUrl = path => {
  return `${API.url('/best')}${path}`;
};

const reactiontUrl = path => {
  return `${API.url('/reaction')}${path}`;
};

const DefaultService = {
  best: {
    /**
     *
     * @returns
     */
    getAuth: async () => {
      const method = 'POST';
      const url = bestUrl('/github');

      let response;
      try {
        response = await API.AXIOS({
          method,
          url,
        });
      } catch (error) {
        return error;
      }
      return response.data;
    },
  },
  reaction: {
    /**
     * **GET** User Auth
     * @returns
     * `200` : success \
     * `other` : fail
     */
    getAuth: async () => {
      const method = 'GET';
      const url = reactiontUrl('/github');

      let response;
      try {
        response = await API.AXIOS({
          method,
          url,
        });
      } catch (error) {
        return error;
      }
      return response.data;
    },
  },
};

export default DefaultService;
