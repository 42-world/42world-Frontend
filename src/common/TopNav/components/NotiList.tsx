/** @jsxImportSource @emotion/react */

import { BiCommentDots } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { Notification } from '@network/types/Notification';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

interface IProps {
  type: string;
  body: string;
  articleId: number;
  isRead: boolean;
}
interface styledProps {
  bg: string;
}

const NotiList = ({ type, body, articleId, isRead }: IProps) => {
  console.log({ type, body, articleId, isRead });
  const navi = useNavigate();
  const onClickNavigation = () => {
    navi(`article/${articleId}`);
  };

  const backgroundColor = isRead ? theme.backgroundGray2 : theme.backgroundWhite;
  return (
    <>
      <NotiListStyle bg={backgroundColor} onClick={onClickNavigation}>
        <BiCommentDots css={NotiItemIconStyle} />
        <text css={NotiItemContentStyle}>{body}</text>
      </NotiListStyle>
      <div className="divide"></div>
    </>
  );
};
export default NotiList;

// props를 전달해 주기 위해 부득히하게 styled-component를 사용.
const NotiListStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background-color: ${(props: styledProps) => props.bg};
  &:hover {
    background-color: ${theme.buttonBlue1};
  }
  * {
    margin: 3px;
    overflow: hidden;
  }
`;

const NotiItemIconStyle = css`
  min-width: 1.8rem;
  min-height: 1.8rem;
  margin-right: 0.7rem;
  color: ${theme.textBlue};
`;

const NotiItemContentStyle = css`
  font-size: 0.8rem;
  font-weight: 400;
  width: 13rem;
`;
