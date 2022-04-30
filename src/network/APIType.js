import axios from "axios";

export function url(path) {
  // const version = 'v1'; // process.env.REACT_APP_API_VERSION
  // return `https://api.42world.kr${path}`; // 실제 배포 API 서버
  //return `http://api-alpha.42world.kr:8888${path}`; // 개발용 서버, 토큰 하드코딩으로 들어있어야 함.
  //return `http://localhost:8888${path}`; // Live share 할 때 서버
  //return `http://211.183.3.100:8888${path}`; // 가상머신 사용시 사용하는 서버
}

export function AXIOS(option) {
  return axios({
    ...option,
    withCredentials: true,
    headers: {
      // https://api-alpha.42world.kr 로 요청 시 필요. 배포 시에는 주석화
      Authorization: process.env.REACT_APP_MASTER_ACCESS_TOKEN, // 루트에 .env 파일 만든 후 REACT_APP_MASTER_ACCESS_TOKEN을 가져옴.
    },
  });
}
