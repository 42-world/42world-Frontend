import { useQuery, useQueryClient } from 'react-query';
import { UserService } from '@network';

export const USER_URL = '/user';
export const USERS_URL = '/users';
export const USERS_ME_URL = '/users/me';

export const useGetUser = () => {
  const { isError, data } = useQuery([USERS_ME_URL], UserService.getUser);
  return { isError, user: data?.data ?? {} };
};

export const useGetClearUser = () => {
  const queryClient = useQueryClient();

  return () => {
    queryClient.removeQueries(USERS_ME_URL);
    queryClient.clear();
  };
};
