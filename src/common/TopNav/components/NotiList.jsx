/** @jsxImportSource @emotion/react */

import { BiCommentDots } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { css } from '@emotion/react';
import { theme } from '@styles/theme';

const NotiList = ({ type, body, articleId }) => {
  const navi = useNavigate();
  const onClickNavigation = () => {
    // UserItems - StyledMenuButton 컴포넌트의 Onclick 이벤트 핸들러가 중첩해서 발생하는 이슈
    // 하위 컴포넌트에서 setIsOpen을 아예 사용하지 않기로
    navi(`article/${articleId}`);
  };
  return (
    <>
      <div css={notiList} onClick={onClickNavigation}>
        <BiCommentDots color={theme.textBlue} size={'60px'} />
        <div className="body">
          <div className="text">{body}</div>
        </div>
      </div>
      <div className="divide"></div>
    </>
  );
};
export default NotiList;

const notiList = css`
  display: flex;
  max-height: 120px;
  padding: 10px;
  * {
    margin: 5px;
    overflow: hidden;
  }
`;
