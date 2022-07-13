import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { css } from '@emotion/react';

import { notiModalState } from '@root/store/notiModal';

const getImage = type => {
  switch (type) {
    case 'NEW_COMMENT':
      return '/assets/comment.svg';
  }
};
const NotiList = ({ type, body, articleId }) => {
  const img = getImage(type);
  const navi = useNavigate();
  const setModalTarget = useSetRecoilState(notiModalState);

  const onClickNavigation = () => {
    setModalTarget(null);
    navi(`article/${articleId}`);
  };
  return (
    <>
      <div css={notiList} onClick={onClickNavigation}>
        <img src={img} />
        <div className="body">
          <div className="text">{body}</div>
        </div>
      </div>
      <div className="divide"></div>
    </>
  );
};

export default NotiList;

const notiList = css.div`
  display: flex;
  max-height: 120px;
  * {
    margin: 5px;
    overflow: hidden;
  }
  img {
    min-width: 30px;
    min-height: 30px;
  }
`;
