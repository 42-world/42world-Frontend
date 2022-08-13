const CharSelectModalButtons = ({ userInfo, entry, onClick }) => {
  return (
    <li key={entry[0]}>
      <button onClick={() => onClick(Number(entry[0]))}>
        <img
          className={entry[0] === userInfo.character ? 'selected' : ''}
          alt="profile"
          src={'/assets/CharacterWhiteBG/' + entry[1]}
        />
      </button>
    </li>
  );
};

export default CharSelectModalButtons;
