import { apiClient } from './APIType';

const GET_ACCESS_TOKEN_API_URL = '/auth/github/callback';

const SIGN_OUT_API_URL = '/auth/signout';

const getAuthUrl = (): string => {
  return `${process.env.REACT_APP_BASE_URL}/auth/github`;
};

const getAuthAccessToken = async (code: string) => {
  try {
    const res = await apiClient.get(GET_ACCESS_TOKEN_API_URL, {
      params: { code },
    });
    return res;
  } catch (error) {
    alert(error);
  }
};

const signOut = async () => {
  try {
    await apiClient.delete(SIGN_OUT_API_URL);
  } catch (error) {
    alert(error);
  }
};

export default {
  GET_ACCESS_TOKEN_API_URL,
  SIGN_OUT_API_URL,
  getAuthUrl,
  getAuthAccessToken,
  signOut,
};
