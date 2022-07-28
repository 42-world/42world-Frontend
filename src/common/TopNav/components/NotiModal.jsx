/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import NotiList from './NotiList';

import { css } from '@emotion/react';

const NotiModal = ({ noti, handleCloseModal }) => {
  const modalRef = useRef(null);

  const clickModalOutside = e => {
    const target = e.target;
    if (!modalRef.current.contains(target) && target.className.baseVal !== 'alarm-icon') handleCloseModal();
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);

    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });

  return (
    noti && (
      <div css={modal} ref={modalRef}>
        <div className="main-title">알람</div>
        <div className="divide"></div>
        <div css={notiLists}>
          {noti.map(data => {
            return <NotiList type={data.type} body={data.content} articleId={data.articleId} />;
          })}
        </div>
      </div>
    )
  );
};

export default NotiModal;

const modal = css`
  position: relative;
  background-color: #fff;
  position: absolute;
  z-index: 100;
  // left: 75%;
  font-size: 20px;
  max-width: 300px;
  max-height: 400px;
  margin: 80px;
  border: 2px solid #979797;
  border-radius: 20px;
  padding: 10px;
  box-shadow: -2px 2px 4px grey;
  .divide {
    border-bottom: 2px solid #d9d9d9;
    width: 270px;
  }
  .main-title {
    font-weight: bold;
    background: white;
    padding: 10px;
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
