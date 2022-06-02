import { Typography } from '@mui/material';
import styled from 'styled-components';

const tempData = [
  { title: '자유게시판', body: '제목입니다 글에 새로운 댓글이 달렸어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 인기글이 되었어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 인기글이 되었어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 인기글이 되었어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 인기글이 되었어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 인기글이 되었어요' },
  { title: '자유게시판', body: '저 오늘 싸이봄ㅋㅋ 글이 인기글이 되었어요' },
];
const NotiModal = () => {
  return (
    <Typography>
      <ModalStyle>
        <div className="main-title divide">알림</div>
        <div className="notis">
          {tempData.map(data => {
            return (
              <div className="noti">
                <div className="title">{data.title}</div>
                <div className="divide">{data.body}</div>
              </div>
            );
          })}
        </div>
      </ModalStyle>
    </Typography>
  );
};

export default NotiModal;

const ModalStyle = styled.div`
  font-size: 20px;
  max-width: 300px;
  max-height: 400px;

  .main-title {
    width: 290px;
  }
  .divide {
    border-bottom: 1px solid gray;
  }
  .title,
  .main-title {
    font-weight: bold;
    background: white;
  }

  .notis {
    max-height: 350px;
    overflow: scroll;
    overflow-x: hidden;
  }

  .notis::-webkit-scrollbar {
    width: 8px;
  }

  .notis::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: gray;
  }

  .notis::-webkit-scrollbar-track {
  }
`;
