/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import NotiList from './NotiList';
import { Notification } from '@network/types/Notification';
import { notiModalState } from '@root/store/notiModal';

import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

interface Props {
  noti: Notification[] | null;
}

const NotiModal = ({ noti }: Props) => {
  const modalRef = useRef<HTMLInputElement>(null);

  const setIsOpen = useSetRecoilState(notiModalState);
  const clickModalOutside = (e: any) => {
    const target = e.target;

    if (!modalRef?.current?.contains(target) && target.className !== 'alarm-icon') {
      setIsOpen(false);
    }
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
          {noti.map((data: Notification) => {
            return <NotiList type={data.type} body={data.content} articleId={data.articleId} isRead={data.isRead} />;
          })}
        </div>
      </div>
    )
  );
};

export default NotiModal;

const modal = css`
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  animation: fadeInLeft 0.5s;

  background-color: #fff;
  color: black;
  position: absolute;
  z-index: 100;
  font-size: 20px;
  text-align: left;

  max-width: 300px;
  max-height: 400px;
  margin-top: 20px;
  right: -10px;
  border: 2px solid #979797;
  border-radius: 0.5rem;
  padding: 10px;

  box-shadow: ${theme.boxShadow};
  .divide {
    border-bottom: 2px solid #d9d9d9;
    width: 270px;
  }
  .main-title {
    font-weight: bold;
    background: white;
    padding: 10px;
  }

  @media screen and (max-width: 880px) {
    display: none;
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
