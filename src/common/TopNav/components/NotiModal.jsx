import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

import NotiList from './NotiList';
import { NotificationService } from '@network';

const NotiModal = () => {
  const [noti, setNoti] = useState(null);

  const getNoti = async () => {
    const result = await NotificationService.getNotifications();
    setNoti(result);
  };
  useEffect(async () => {
    getNoti();
  }, []);
  return (
    noti && (
      <Typography>
        <ModalStyle>
          <div className="main-title">알림</div>
          <div className="divide"></div>
          <NotiLists>
            {noti.map(data => {
              return <NotiList type={data.type} body={data.content} articleId={data.articleId} />;
            })}
          </NotiLists>
        </ModalStyle>
      </Typography>
    )
  );
};

export default NotiModal;

const ModalStyle = styled.div`
  font-size: 20px;
  max-width: 300px;
  max-height: 400px;
  padding: 10px;

  .divide {
    border-bottom: 2px solid #d9d9d9;
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
  cursor: pointer;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d9d9d9;
  }
`;
