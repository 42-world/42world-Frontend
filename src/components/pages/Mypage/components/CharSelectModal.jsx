import { Modal } from '@mui/material';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { UserService } from 'network';
import { userState } from 'store/user';
import profileUtils from '../utils/profileUtils';

import MypageButton from 'components/pages/Mypage/components/MypageButton';

import { StyledCharSelectModal } from '../styles';

const CharSelectModal = ({ isOpen, setIsOpen }) => {
  //const curUser = auth.curUser;
  const PICTURE_DIR = '/assets/CharacterWhiteBG/';
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [charID, setCharID] = useState(userInfo ? userInfo.character : 0);

  const handleCharClick = async id => {
    try {
      const response = await UserService.updateUser({ character: id });
      window.alert('캐릭터 변경 완료');
      console.log(response);
      setCharID(id);
      setUserInfo([{ ...userInfo, character: id }]);
      //auth.setIsLoading(true);
    } catch (e) {
      console.log(e);
      window.alert('캐릭터 변경 실패, 관리자에게 문의하세요');
    }
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen}>
      <StyledCharSelectModal>
        <h2>캐릭터 선택</h2>
        <hr />
        <div>
          <div className="char-list">
            {profileUtils.PROFILE_LIST.map(char => (
              <div key={char.id} onClick={() => handleCharClick(char.id)}>
                <img className={char.id === charID ? 'selected' : ''} alt="profile" src={PICTURE_DIR + char.image} />
              </div>
            ))}
          </div>
          <MypageButton onClick={handleCloseClick}>닫기</MypageButton>
        </div>
      </StyledCharSelectModal>
    </Modal>
  );
};

export default CharSelectModal;
