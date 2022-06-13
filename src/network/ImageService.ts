import { apiClient } from './APIType';
import axios from 'axios';

const IMAGE_API_URL = '/image';

interface GetUploadUrlResponse {
  uploadUrl: string;
}

const getUploadUrl = async (): Promise<string> => {
  const { data } = await apiClient.post<GetUploadUrlResponse>(IMAGE_API_URL);

  const { uploadUrl } = data;
  return uploadUrl;
};

const uploadImage = async (image: any): Promise<string> => {
  const uploadUrl = await getUploadUrl(); // 이미지 업로드 할 url 생성

  await axios.put(uploadUrl, image);

  return uploadUrl.split('?')[0]; // 업로드 된 이미지 링크를 return
};

export default { IMAGE_API_URL, getUploadUrl, uploadImage };
