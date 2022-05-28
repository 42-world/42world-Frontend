import axios from 'axios';

export function url(path) {
  return `${process.env.REACT_APP_BASE_URL}${path}`;
}

export function AXIOS(option) {
  return axios({
    ...option,
    withCredentials: true,
    headers: {
      Authorization: process.env.REACT_APP_ACCESS_TOKEN,
    },
  });
}
