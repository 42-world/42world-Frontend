/** @jsxImportSource @emotion/react */

import { User } from '@network/types/User';
import { charSelectButton, charSelectImage } from '@components/pages/Mypage/styles/CharSelectModalButtons.styles';

interface Props {
  userInfo: User;
  character: string;
  index: number;
  onClick: (id: number) => Promise<void>;
}

const CharSelectModalButtons = ({ userInfo, character, index, onClick }: Props) => {
  return (
    <li key={index}>
      <button css={charSelectButton} onClick={async () => await onClick(index)}>
        <img
          css={charSelectImage(index === userInfo.character)}
          alt="profile"
          src={'/assets/CharacterWhiteBG/' + character}
        />
      </button>
    </li>
  );
};

export default CharSelectModalButtons;
