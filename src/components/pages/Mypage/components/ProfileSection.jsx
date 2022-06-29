import MypageButton from 'components/pages/Mypage/components/MypageButton';

import { useProfileSection } from '../hooks';
import CharSelectModal from './CharSelectModal';

import { StyledProfileSection } from '../styles';

const PICTURE_DIR = '/assets/CharacterWhiteBG/';

const ProfileSection = ({ userInfo, setUserInfo }) => {
  const { profilePhoto, authButtonProps, isModalOpen, setIsModalOpen, handlePhotoChangeClick, handleLogoutClick } =
    useProfileSection(userInfo, setUserInfo);

  return (
    <StyledProfileSection>
      <div className="mypage-photo-sect">
        <img alt={profilePhoto} src={`${PICTURE_DIR + profilePhoto}`} />
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
      {isModalOpen && <CharSelectModal userInfo={userInfo} setUserInfo={setUserInfo} setIsModalOpen={setIsModalOpen} />}
    </StyledProfileSection>
  );
};

export default ProfileSection;
