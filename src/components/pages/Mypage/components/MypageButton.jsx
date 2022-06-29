import { StyledMypageButton } from 'components/pages/Mypage/styles';

const MypageButton = ({ btnType, onClick, children }) => {
  return (
    <StyledMypageButton btnType={btnType} onClick={onClick}>
      {children}
    </StyledMypageButton>
  );
};

export default MypageButton;
