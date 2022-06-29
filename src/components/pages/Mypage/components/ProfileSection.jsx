import MypageButton from 'components/pages/Mypage/components/MypageButton';
import CharSelectModal from 'components/pages/Mypage/components/CharSelectModal';

import { useProfileSection } from 'components/pages/Mypage/hooks';

import { StyledProfileSection } from 'components/pages/Mypage/styles';

const ProfileSection = ({ userInfo, setUserInfo }) => {
  const {
    profilePhoto,
    authButtonProps,
    isModalOpen,
    handleCharClick,
    handleCloseClick,
    handlePhotoChangeClick,
    handleLogoutClick,
  } = useProfileSection(userInfo, setUserInfo);

  return (
    <StyledProfileSection>
      <div className="mypage-photo-sect">
        <img alt={profilePhoto} src={'/assets/CharacterWhiteBG/' + profilePhoto} />
        <MypageButton btnType="change-photo" onClick={handlePhotoChangeClick}>
          사진 변경
        </MypageButton>
      </div>
      <div className="mypage-auth-sect">
        <h1>{userInfo.nickname}</h1>
        <div className="mypage-auth-button">
          <MypageButton btnType={authButtonProps.btnType} onClick={authButtonProps.onClick}>
            {authButtonProps.string}
          </MypageButton>
          <MypageButton onClick={handleLogoutClick}>로그아웃</MypageButton>
        </div>
      </div>
      {isModalOpen && (
        <CharSelectModal userInfo={userInfo} handleCharClick={handleCharClick} handleCloseClick={handleCloseClick} />
      )}
    </StyledProfileSection>
  );
};

export default ProfileSection;
