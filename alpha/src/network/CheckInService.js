import * as API from './APIType';

const checkInUrl = path => {
  return `${API.url('/ft-checkin')}${path}`;
};

const CheckInService = {
  curCheckInStatus: async () => {
    const method = 'GET';
    const url = checkInUrl('');
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

export default CheckInService;
