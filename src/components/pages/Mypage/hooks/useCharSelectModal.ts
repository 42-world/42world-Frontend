import { Dispatch, SetStateAction } from 'react';

import UserService from '@network/UserService';
import { useClickOutside } from '@components/pages/Mypage/hooks';
import { useGetUser } from '@root/common/hooks/api/user';

const useCharSelectModal = (setIsModalOpen: Dispatch<SetStateAction<boolean>>) => {
  const { user, refetch } = useGetUser();

  const handleClickChar = async (id: number) => {
    try {
      await UserService.updateUser({ nickname: user.nickname, character: id });
      refetch();
    } catch {
      window.alert('캐릭터 변경 실패, 관리자에게 문의하세요');
    }
  };

  const handleClickClose = () => {
    setIsModalOpen(false);
  };

  const { ref: modalRef } = useClickOutside(handleClickClose);

  return { handleClickChar, handleClickClose, modalRef };
};

export default useCharSelectModal;
