import { useEffect, useState } from 'react';

import MypageButton from 'components/pages/Mypage/components/MypageButton';
import AuthButton from './AuthButton';
import { getUser } from 'common/hooks/api/user';

import CharSelectModal from './CharSelectModal';
import Logout from './Logout';
import { AuthService } from 'network';
import profileUtils from '../../../utils/profileUtils';

import { StyledProfileSection } from '../styles';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from 'store/user';

const PICTURE_DIR = '/assets/CharacterWhiteBG/';

const ProfileSection = ({ imgID, userName }) => {
  const [profilePhoto, setProfilePhoto] = useState('bora.png');
  const [isOpen, setIsOpen] = useState(false);
  const setUserState = useSetRecoilState(userState);
  const navigate = useNavigate();
  const { user } = getUser();

  const authButtonProps =
    user.role === 'NOVICE'
      ? { btnType: 'auth-42', onClick: handleAuthClick, string: '42인증' }
      : { btnType: 'auth-42-done', onClick: undefined, string: '인증완료' };

  useEffect(() => {
    setProfilePhoto(profileUtils.getProfilePhoto(imgID));
  }, [imgID]);

  const handlePhotoChangeClick = () => {
    setIsOpen(true);
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
        <h1>{userName}</h1>
        <div className="mypage-auth-button">
          <MypageButton btnType={authButtonProps.btnType} onClick={authButtonProps.onClick}>
            {authButtonProps.string}
          </MypageButton>
          <MypageButton onClick={handleLogoutClick}>로그아웃</MypageButton>
        </div>
      </div>
      <CharSelectModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </StyledProfileSection>
  );
};

export default ProfileSection;
