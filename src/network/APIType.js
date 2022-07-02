import axios from 'axios';

export function url(path) {
  return `${process.env.REACT_APP_BASE_URL}${path}`;
}

export function AXIOS(option) {
  return axios({
    ...option,
    withCredentials: true,
    headers: {
      //Authorization: process.env.REACT_APP_ACCESS_TOKEN,
    },
  });
}

export const apiClient = axios.create({
  header: {
    cache: 'no-cache',
    referrer: 'no-referrer',
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  withCredentials: true,
  data: {},
  baseURL: process.env.REACT_APP_BASE_URL ?? '/',
  timeout: 1000 * 60 * 3, // 3분
});
