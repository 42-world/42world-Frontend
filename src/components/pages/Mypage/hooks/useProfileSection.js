import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '@network';

import { PROFILE_LIST } from '@root/common/constants';
import { useGetUser, useLogout } from '@common/hooks/api/user';

const useProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user: userInfo, refetch } = useGetUser();
  const navigate = useNavigate();
  const logout = useLogout();

  const profilePhoto = PROFILE_LIST[userInfo.character];
  const handleClickAuth = () => {
    if (userInfo.role === 'NOVICE') navigate('/auth');
  };

  const authButtonProps =
    userInfo.role === 'NOVICE'
      ? { btnType: 'auth-42', onClick: handleClickAuth, string: '42인증' }
      : { btnType: 'auth-42-done', onClick: undefined, string: '인증완료' };

  const handleClickPhotoChange = () => {
    setIsModalOpen(true);
  };

  const handleClickLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleClickChar = async id => {
    try {
      await UserService.updateUser({ character: id });
      refetch();
    } catch {
      window.alert('캐릭터 변경 실패, 관리자에게 문의하세요');
    }
  };

  const handleClickClose = () => {
    setIsModalOpen(false);
  };

  return {
    profilePhoto,
    authButtonProps,
    isModalOpen,
    handleClickChar,
    handleClickClose,
    handleClickPhotoChange,
    handleClickLogout,
  };
};

export default useProfileSection;
