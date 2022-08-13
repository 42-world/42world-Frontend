import MypageButton from '@components/pages/Mypage/components/MypageBoard/MypageButton';
import { ModalPortal } from '@components/pages/Mypage/utils';
import { PROFILE_LIST } from '@common/constants';
import { useClickOutside } from '@components/pages/Mypage/hooks';

import { StyledCharSelectModal } from '@components/pages/Mypage/styles';

import CharSelectModalButtons from './CharSelectModalButtons';

const CharSelectModal = ({ userInfo, handleClickChar, handleClickClose }) => {
  const { ref: modalRef } = useClickOutside(handleClickClose);

  return (
    <ModalPortal>
      <StyledCharSelectModal>
        <div className="char-select-modal-container" ref={modalRef}>
          <h2>캐릭터 선택</h2>
          <hr />
          <div className="char-select-inner">
            <ul className="char-list">
              {Object.entries(PROFILE_LIST).map(entry => (
                <CharSelectModalButtons userInfo={userInfo} entry={entry} onClick={handleClickChar} />
              ))}
            </ul>
            <MypageButton onClick={handleClickClose}>닫기</MypageButton>
          </div>
        </div>
      </StyledCharSelectModal>
    </ModalPortal>
  );
};

export default CharSelectModal;
