import { Dispatch, SetStateAction } from 'react';

import { ModalPortal } from '@components/pages/Mypage/utils';
import { StyledCharSelectModal } from '@components/pages/Mypage/styles';
import { PROFILE_LIST } from '@common/constants';
import { User } from '@network/types/User';
import { useCharSelectModal } from '@components/pages/Mypage/hooks';

import MypageButton from '@components/pages/Mypage/components/MypageBoard/MypageButton';
import CharSelectModalButtons from './CharSelectModalButtons';

interface IProps {
  userInfo: User;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const CharSelectModal = ({ userInfo, setIsModalOpen }: IProps) => {
  const { handleClickChar, handleClickClose, modalRef } = useCharSelectModal(setIsModalOpen);

  return (
    <ModalPortal>
      <StyledCharSelectModal>
        <div className="char-select-modal-container" ref={modalRef}>
          <h2>캐릭터 선택</h2>
          <hr />
          <div className="char-select-inner">
            <ul className="char-list">
              {PROFILE_LIST.map((character, index) => (
                <CharSelectModalButtons
                  userInfo={userInfo}
                  character={character}
                  index={index}
                  onClick={handleClickChar}
                />
              ))}
            </ul>
            <MypageButton onClick={handleClickClose} btnType={null}>
              닫기
            </MypageButton>
          </div>
        </div>
      </StyledCharSelectModal>
    </ModalPortal>
  );
};

export default CharSelectModal;
