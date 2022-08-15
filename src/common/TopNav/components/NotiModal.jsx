/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

import NotiList from './NotiList';
import { NotificationService } from '@network';
import { theme } from '@styles/theme';

const NotiModal = () => {
  const [noti, setNoti] = useState([
    {
      id: 61,
      type: 'NEW_COMMENT',
      content: '게시글 a 에 새로운 댓글이 달렸습니다.\n엔터1\n엔터2\n엔터3',
      articleId: 78,
      isRead: false,
      createdAt: '2022-07-22T17:11:27.103Z',
      updatedAt: '2022-07-22T17:11:27.103Z',
    },
    {
      id: 60,
      type: 'NEW_COMMENT',
      content: '게시글 a 에 새로운 댓글이 달렸습니다.\nd\nasdf\nasdf\nasdf\nasd\nfasd\nfa\nasdfagdfgsdgdfg\n',
      articleId: 78,
      isRead: false,
      createdAt: '2022-07-22T17:11:00.167Z',
      updatedAt: '2022-07-22T17:11:00.167Z',
    },
    {
      id: 61,
      type: 'NEW_COMMENT',
      content: '게시글 a 에 새로운 댓글이 달렸습니다.\n엔터1\n엔터2\n엔터3',
      articleId: 78,
      isRead: false,
      createdAt: '2022-07-22T17:11:27.103Z',
      updatedAt: '2022-07-22T17:11:27.103Z',
    },
    {
      id: 60,
      type: 'NEW_COMMENT',
      content:
        '게시글 a 에 새로운 댓글이 달렸습니다.\nd\nasdf\nasdf\nasdf\nasd\nfasd\nfa\nasdfagdfgsdgdfg\n게시글 a 에 새로운 댓글이 달렸습니다.\nd\nasdf\nasdf\nasdf\nasd\nfasd\nfa\nasdfagdfgsdgdfg\n게시글 a 에 새로운 댓글이 달렸습니다.\nd\nasdf\nasdf\nasdf\nasd\nfasd\nfa\nasdfagdfgsdgdfg\n',
      articleId: 78,
      isRead: false,
      createdAt: '2022-07-22T17:11:00.167Z',
      updatedAt: '2022-07-22T17:11:00.167Z',
    },
    {
      id: 61,
      type: 'NEW_COMMENT',
      content: '게시글 a 에 새로운 댓글이 달렸습니다.\n엔터1\n엔터2\n엔터3',
      articleId: 78,
      isRead: false,
      createdAt: '2022-07-22T17:11:27.103Z',
      updatedAt: '2022-07-22T17:11:27.103Z',
    },
    {
      id: 60,
      type: 'NEW_COMMENT',
      content: '게시글 a 에 새로운 댓글이 달렸습니다.\nd\nasdf\nasdf\nasdf\nasd\nfasd\nfa\nasdfagdfgsdgdfg11111\n',
      articleId: 78,
      isRead: false,
      createdAt: '2022-07-22T17:11:00.167Z',
      updatedAt: '2022-07-22T17:11:00.167Z',
    },
  ]);

  const getNoti = async () => {
    const result = await NotificationService.getNotifications();
    console.log(result);
    //setNoti(result);
  };

  useEffect(() => {
    getNoti();
  }, []);

  return (
    noti && (
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
    )
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
