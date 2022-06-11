import NotiList from './NotiList'
import { Typography } from '@mui/material';

import styled from 'styled-components';

const tempData = [
  { title: '자유게시판', body: '제목입니다 글에 새로운 댓글이 달렸어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 글이asfasfasfas글이asfasfasfas 되었어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 인기글이 되었어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 인기글이 되었어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 인기글이 되었어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이asfasfasfas 인기글이 되었어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 인기글이 되었어요' },
];

const NotiModal = () => {
  return (
    <Typography>
      <ModalStyle>
        <div className="main-title">알림</div>
        <div className="divide"></div>
      <NotiLists>
          {tempData.map(data => {
            return (
            <NotiList title={data.title} body={data.body}/>
            );
          })}
      </NotiLists>
      </ModalStyle>
    </Typography>
  );
};

export default NotiModal;

const ModalStyle = styled.div`
  font-size: 20px;
  max-width: 300px;
  max-height: 400px;
  padding : 10px;

  .divide {
    border-bottom: 2px solid  #D9D9D9;
    width: 270px;
  }
  .title,
  .main-title {
    font-weight: bold;
    background: white;
  }
`;

const NotiLists = styled.div`

  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;    


::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #D9D9D9;
}


`