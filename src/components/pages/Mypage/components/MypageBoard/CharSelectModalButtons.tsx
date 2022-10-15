import { User } from '@network/types/User';

interface Props {
  userInfo: User;
  character: string;
  index: number;
  onClick: (id: number) => Promise<void>;
}

const CharSelectModalButtons = ({ userInfo, character, index, onClick }: Props) => {
  return (
    <li key={index}>
      <button onClick={async () => await onClick(index)}>
        <img
          className={index === userInfo.character ? 'selected' : ''}
          alt="profile"
          src={'/assets/CharacterWhiteBG/' + character}
        />
      </button>
    </li>
  );
};

export default CharSelectModalButtons;
