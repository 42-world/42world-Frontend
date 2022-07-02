import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { notiModalState } from 'store/notiModal';

import styled from 'styled-components';
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
      <NotiListStyle onClick={onClickNavigation}>
        <img src={img} />
        <div className="body">
          <div className="text">{body}</div>
        </div>
      </NotiListStyle>
      <div className="divide"></div>
    </>
  );
};

export default NotiList;

const NotiListStyle = styled.div`
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
