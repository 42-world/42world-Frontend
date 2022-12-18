/** @jsxImportSource @emotion/react */

import { BiCommentDots } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

interface Props {
  type: string;
  body: string;
  articleId: number;
  isRead: boolean;
}

const NotiList = ({ body, articleId, isRead }: Props) => {
  const navi = useNavigate();
  const onClickNavigation = () => {
    navi(`article/${articleId}`);
  };

  const backgroundColor = isRead ? theme.backgroundGray2 : theme.backgroundWhite;
  return (
    <>
      <div css={NotiListStyle(backgroundColor)} onClick={onClickNavigation}>
        <BiCommentDots css={NotiItemIconStyle} />
        <text css={NotiItemContentStyle}>{body}</text>
      </div>
      <div css={divider}></div>
    </>
  );
};
export default NotiList;

// props를 전달해 주기 위해 부득이하게 styled 방식 사용.
const NotiListStyle = (backgroundColor: string) => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background-color: ${backgroundColor};
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

const divider = css`
  border-bottom: 2px solid #d9d9d9;
  width: 270px;
`;
