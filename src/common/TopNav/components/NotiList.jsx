/** @jsxImportSource @emotion/react */

import { BiCommentDots } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { css } from '@emotion/react';
import { theme } from '@styles/theme';

import { notiModalState } from '@root/store/notiModal';

const NotiList = ({ type, body, articleId }) => {
  const navi = useNavigate();
  const setModalTarget = useSetRecoilState(notiModalState);

  const onClickNavigation = () => {
    setModalTarget(null);
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
