import * as API from './APIType';

const checkInUrl = path => {
  return `${API.url('/ft-checkin')}${path}`;
};

const CheckInService = {
  getClusterStatus: async () => {
    const method = 'GET';
    const url = checkInUrl('');

    return await API.AXIOS({
      method,
      url,
    });
  },
};

export default CheckInService;
