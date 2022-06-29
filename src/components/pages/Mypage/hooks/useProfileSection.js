import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from 'network';

import { profilePhotoUtils } from '../utils';

const useProfileSection = (userInfo, setUserInfo) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const profilePhoto = profilePhotoUtils.getProfilePhoto(userInfo.character ?? 0);
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

  const handleCharClick = async id => {
    try {
      await UserService.updateUser({ character: id });
      window.alert('캐릭터 변경 완료');
      setUserInfo({ ...userInfo, character: id });
    } catch {
      window.alert('캐릭터 변경 실패, 관리자에게 문의하세요');
    }
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  return {
    profilePhoto,
    authButtonProps,
    isModalOpen,
    handleCharClick,
    handleCloseClick,
    handlePhotoChangeClick,
    handleAuthClick,
    handleLogoutClick,
  };
};

export default useProfileSection;
