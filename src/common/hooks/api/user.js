import { useQuery, useQueryClient } from 'react-query';
import { UserService } from '@network';
import { AuthService } from '@root/network';

export const USER_URL = '/user';
export const USERS_URL = '/users';
export const USERS_ME_URL = '/users/me';

export const useGetUser = () => {
  const { isError, data, refetch } = useQuery([USERS_ME_URL], UserService.getUser, { cacheTime: 10 * 1000 });
  return { isError, user: data?.data ?? {}, refetch };
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return async () => {
    await AuthService.signOut();
    queryClient.invalidateQueries();
    queryClient.clear();
  };
};
