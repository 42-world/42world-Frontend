import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { profileUtils } from '../utils';

const useProfileSection = (userInfo, setUserInfo) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const profilePhoto = profileUtils.getProfilePhoto(userInfo.character ?? 0);
  const authButtonProps =
    userInfo.role === 'NOVICE'
      ? { btnType: 'auth-42', onClick: handleAuthClick, string: '42인증' }
      : { btnType: 'auth-42-done', onClick: undefined, string: '인증완료' };

  const handlePhotoChangeClick = () => {
    setIsModalOpen(true);
  };

  const handleAuthClick = () => {
    if (user.role === 'NOVICE') navigate('/auth');
  };

  const handleLogoutClick = async () => {
    setUserInfo(null);
    await AuthService.signOut();

    navigate('/');
  };

  return {
    profilePhoto,
    authButtonProps,
    isModalOpen,
    setIsModalOpen,
    handlePhotoChangeClick,
    handleAuthClick,
    handleLogoutClick,
  };
};

export default useProfileSection;
