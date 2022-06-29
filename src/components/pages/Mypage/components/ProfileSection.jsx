import { useEffect, useState } from 'react';

import MypageButton from 'components/pages/Mypage/components/MypageButton';
import { getUser } from 'common/hooks/api/user';

import CharSelectModal from './CharSelectModal';
import { AuthService } from 'network';
import { profileUtils } from '../utils';

import { StyledProfileSection } from '../styles';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from 'store/user';

const PICTURE_DIR = '/assets/CharacterWhiteBG/';

const ProfileSection = ({ user }) => {
  const profilePhoto = profileUtils.getProfilePhoto(user.character ?? 1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setUserState = useSetRecoilState(userState);
  const navigate = useNavigate();

  const authButtonProps =
    user.role === 'NOVICE'
      ? { btnType: 'auth-42', onClick: handleAuthClick, string: '42인증' }
      : { btnType: 'auth-42-done', onClick: undefined, string: '인증완료' };

  const handlePhotoChangeClick = () => {
    setIsModalOpen(true);
  };

  const handleAuthClick = () => {
    if (user.role === 'NOVICE') navigate('/auth');
  };

  const handleLogoutClick = async () => {
    setUserState(null);
    await AuthService.signOut();

    navigate('/');
  };

  return (
    <StyledProfileSection>
      <div className="mypage-photo-sect">
        <img alt={profilePhoto} src={`${PICTURE_DIR + profilePhoto}`} />
        <MypageButton btnType="change-photo" onClick={handlePhotoChangeClick}>
          사진 변경
        </MypageButton>
      </div>
      <div className="mypage-auth-sect">
        <h1>{user.nickname}</h1>
        <div className="mypage-auth-button">
          <MypageButton btnType={authButtonProps.btnType} onClick={authButtonProps.onClick}>
            {authButtonProps.string}
          </MypageButton>
          <MypageButton onClick={handleLogoutClick}>로그아웃</MypageButton>
        </div>
      </div>
      {isModalOpen && <CharSelectModal setIsModalOpen={setIsModalOpen} />}
    </StyledProfileSection>
  );
};

export default ProfileSection;
