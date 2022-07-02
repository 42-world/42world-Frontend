import { useQuery } from 'react-query';
import { UserService } from 'network';

export const USER_URL = '/user';
export const USERS_URL = '/users';
export const USERS_ME_URL = '/users/me';

export const getUser = () => {
  const { isError, data } = useQuery([USERS_ME_URL], UserService.getUser);
  return { isError, user: data?.data ?? {} };
};
