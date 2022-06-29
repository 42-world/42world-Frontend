import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { UserService } from 'network';
import { userState } from 'store/user';
import { ModalPortal, profileUtils } from '../utils';
import MypageButton from 'components/pages/Mypage/components/MypageButton';

import { StyledCharSelectModal } from '../styles';

const CharSelectModal = ({ userInfo, setUserInfo, setIsModalOpen }) => {
  const PICTURE_DIR = '/assets/CharacterWhiteBG/';
  const charID = userInfo.character ?? 0;

  const handleCharClick = async id => {
    try {
      const response = await UserService.updateUser({ character: id });
      window.alert('캐릭터 변경 완료');
      setUserInfo({ ...userInfo, character: id });
    } catch (_) {
      window.alert('캐릭터 변경 실패, 관리자에게 문의하세요');
    }
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalPortal>
      <StyledCharSelectModal>
        <div className="char-select-modal-container">
          <h2>캐릭터 선택</h2>
          <hr />
          <div className="char-select-inner">
            <ul className="char-list">
              {profileUtils.PROFILE_LIST.map(char => (
                <li key={char.id}>
                  <button onClick={() => handleCharClick(char.id)}>
                    <img
                      className={char.id === charID ? 'selected' : ''}
                      alt="profile"
                      src={PICTURE_DIR + char.image}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <MypageButton onClick={handleCloseClick}>닫기</MypageButton>
          </div>
        </div>
      </StyledCharSelectModal>
    </ModalPortal>
  );
};

export default CharSelectModal;
