import { AxiosResponse } from 'axios';
import { apiClient } from './APIType';

const FT_AUTH_API_URL = '/intra-auth';

const createFtAuth = async (
  intraId: string,
): Promise<AxiosResponse<void, any> | undefined> => {
  try {
    const res = await apiClient.post<void>(FT_AUTH_API_URL, { intraId });

    return res;
  } catch (error: any) {
    alert(error.response.data.message);
  }
};

export default { FT_AUTH_API_URL, createFtAuth };
