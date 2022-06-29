import { ModalPortal, profileUtils } from '../utils';
import MypageButton from 'components/pages/Mypage/components/MypageButton';

import { StyledCharSelectModal } from '../styles';

const CharSelectModal = ({ userInfo, handleCharClick, handleCloseClick }) => {
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
                      className={char.id === userInfo.character ? 'selected' : ''}
                      alt="profile"
                      src={'/assets/CharacterWhiteBG/' + char.image}
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
