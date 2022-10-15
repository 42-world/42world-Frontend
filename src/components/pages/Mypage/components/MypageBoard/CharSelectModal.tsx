/** @jsxImportSource @emotion/react */

import { Dispatch, SetStateAction } from 'react';

import { ModalPortal } from '@components/pages/Mypage/utils';
import { PROFILE_LIST } from '@common/constants';
import { User } from '@network/types/User';
import { useCharSelectModal } from '@components/pages/Mypage/hooks';
import MypageButton from '@components/pages/Mypage/components/MypageBoard/MypageButton';
import CharSelectModalButtons from './CharSelectModalButtons';

import {
  charSelectInnerContainer,
  charSelectList,
  charSelectModalContainer,
  charSelectModalWrapper,
} from '@components/pages/Mypage/styles/CharSelectModal.styles';

interface IProps {
  userInfo: User;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const CharSelectModal = ({ userInfo, setIsModalOpen }: IProps) => {
  const { handleClickChar, handleClickClose, modalRef } = useCharSelectModal(setIsModalOpen);

  return (
    <ModalPortal>
      <div css={charSelectModalWrapper}>
        <div css={charSelectModalContainer} ref={modalRef}>
          <h2>캐릭터 선택</h2>
          <hr />
          <div css={charSelectInnerContainer}>
            <ul css={charSelectList}>
              {PROFILE_LIST.map((character, index) => (
                <CharSelectModalButtons
                  userInfo={userInfo}
                  character={character}
                  index={index}
                  key={`character-${index}`}
                  onClick={handleClickChar}
                />
              ))}
            </ul>
            <MypageButton onClick={handleClickClose} btnType={null}>
              닫기
            </MypageButton>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default CharSelectModal;
