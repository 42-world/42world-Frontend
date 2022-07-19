import { css } from '@emotion/react';
import { Typography } from '@mui/material';

import NotiList from './NotiList';

const NotiModal = ({ noti }) => {
  return (
    noti && (
      <Typography>
        <div css={modal}>
          <div className="main-title">알람</div>
          <div className="divide"></div>
          <div css={notiLists}>
            {noti.map(data => {
              return <NotiList type={data.type} body={data.content} articleId={data.articleId} />;
            })}
          </div>
        </div>
      </Typography>
    )
  );
};

export default NotiModal;

const modal = css`
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

const notiLists = css`
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
