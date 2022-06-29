import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../../../store/user';
import { profileUtils } from '../utils';

const useProfileSection = user => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setUserState = useSetRecoilState(userState);
  const navigate = useNavigate();

  const profilePhoto = profileUtils.getProfilePhoto(user.character ?? 1);
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
