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

        <div className="notis">
          {tempData.map(data => {
            return (
              <>
               <div className="noti">
                  <img src="/assets/like.svg"/>
                  <div className="body">
                    <div className="title">{data.title}</div>
                    <div className="text">{data.body}</div>
                  </div>
                </div>
                <div className="divide"></div>
              </>
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

  .notis {
    max-height: 300px;
    overflow: scroll;
    overflow-x: hidden;    
  }

  .notis::-webkit-scrollbar {
    width: 5px;
  }

  .notis::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #D9D9D9;
  }

  .notis::-webkit-scrollbar-track {
  }

  .noti {
    display : flex;
    max-height : 120px;
    * {
      margin :5px;
      overflow : hidden;
    }
    img { 
      min-width : 30px;
      
    }
  }
`;
