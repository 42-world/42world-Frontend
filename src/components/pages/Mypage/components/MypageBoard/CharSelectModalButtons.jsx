const CharSelectModalButtons = ({ userInfo, character, index, onClick }) => {
  return (
    <li key={index}>
      <button onClick={() => onClick(index)}>
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
