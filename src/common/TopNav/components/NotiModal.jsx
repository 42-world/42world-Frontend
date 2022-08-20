/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import NotiList from './NotiList';
import { NotificationService } from '@network';
import { theme } from '@styles/theme';

const NotiModal = () => {
  const [noti, setNoti] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await NotificationService.getNotifications();
      setNoti(result);
    })();
  }, []);

  return (
    <div css={ModalStyle}>
      <div css={ModalTitleStyle}>알림</div>
      <div css={ModalNotiItemListStyle}>
        <div css={ModalNotiItemListWrapperStyle}>
          {noti.map(data => {
            return <NotiList type={data.type} body={data.content} articleId={data.articleId} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NotiModal;

const ModalStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  max-width: 20rem;
  padding: 1rem;
`;

const ModalTitleStyle = css`
  width: 100%;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid ${theme.lineGray1};

  font-size: 1.1rem;
  font-weight: 800;
`;

const ModalNotiItemListStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${theme.lineGray1};
  }
`;

const ModalNotiItemListWrapperStyle = css`
  max-height: 15rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;
