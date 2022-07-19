import { apiClient } from './APIType';

const GET_ACCESS_TOKEN_API_URL = '/auth/github/callback';

const SIGN_OUT_API_URL = '/auth/signout';

const getAuthUrl = (): string => {
  return `${process.env.REACT_APP_BASE_URL}/auth/github`;
};

const getAuthAccessToken = async (code: string) => {
  const res = await apiClient.get(GET_ACCESS_TOKEN_API_URL, {
    params: { code },
  });
  return res;
};

const signOut = async () => {
  await apiClient.delete(SIGN_OUT_API_URL);
};

export default {
  GET_ACCESS_TOKEN_API_URL,
  SIGN_OUT_API_URL,
  getAuthUrl,
  getAuthAccessToken,
  signOut,
};
