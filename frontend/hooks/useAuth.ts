import { privateApi } from '@/api/axios.service';
import { addUser, removeUser } from '@/redux/features/user.reducer';
import { AppDispatch, RootState } from '@/redux/store';
import { User } from '@/types';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

interface Auth extends User {
  isLoading: boolean,
  logout: () => void
}

const getProfile = async (): Promise<User> => {
  const res: User = await privateApi.get("/auth/profile");
  return res
}

const useAuth = (): Auth => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isSuccess } = useQuery("profile", getProfile,
    {
      staleTime: 60000,
      cacheTime: 60000,
      retry: 1
    })

  const logout = async () => {
    await privateApi("/auth/logout")
    dispatch(removeUser());
  }
  return {
    ...data,
    isLoading,
    logout
  } as Auth;
};

export default useAuth;