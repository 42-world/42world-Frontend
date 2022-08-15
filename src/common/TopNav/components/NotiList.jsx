/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { BiCommentDots } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { theme } from '@styles/theme';
import styled from 'styled-components';

import { notiModalState } from '@root/store/notiModal';

const NotiList = ({ type, body, articleId }) => {
  const navi = useNavigate();
  const setModalTarget = useSetRecoilState(notiModalState);

  const onClickNavigation = () => {
    setModalTarget(null);
    navi(`article/${articleId}`);
  };
  return (
    <div css={NotiItemStyle} onClick={onClickNavigation}>
      <BiCommentDots css={NotiItemIconStyle} />
      <div css={NotiItemContentStyle}>{body}</div>
    </div>
  );
};

export default NotiList;

const NotiItemStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 0.5rem;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${theme.buttonBlue1};
  }
`;

const NotiItemIconStyle = css`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.7rem;

  color: ${theme.textBlue};
`;

const NotiItemContentStyle = css`
  font-size: 0.8rem;
  font-weight: 400;
  width: 13rem;
`;
