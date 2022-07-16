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
    <>
      <NotiListStyle onClick={onClickNavigation}>
        <BiCommentDots color={theme.textBlue} size={'40px'} />
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
