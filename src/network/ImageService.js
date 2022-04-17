import axios from 'axios';
import * as API from './APIType';

const imageUrl = () => {
  return `${API.url('/image')}`;
};

const ImageService = {
  getUploadUrl: async () => {
    try {
      const method = 'POST';
      const url = imageUrl();

      const { data } = await API.AXIOS({
        method,
        url,
      });
      const { uploadUrl } = data;
      return uploadUrl;
    } catch (err) {
      console.log('Error: ', err);
      console.error(err);
    }
  },

  uploadImage: async image => {
    try {
      const uploadUrl = await ImageService.getUploadUrl(); // 이미지 업로드 할 url 생성

      const blobData = image;

      await axios.put(uploadUrl, blobData); // 이미지 업로드

      return uploadUrl.split('?')[0]; // 업로드 된 이미지 링크를 return
    } catch (err) {
      console.log('Error: ', err);
      console.error(err);
    }
  },
};

export default ImageService;
