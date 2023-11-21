import { privateApi } from '@/api/axios.service';
import { User } from '@/types';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

interface Auth extends User {
  isLoading: boolean,
}
const getProfile = async (): Promise<User> => {
  const res: User = await privateApi.get("/auth/profile");
  return res
}
const useAuth = (): Auth => {
  const { data, isLoading } = useQuery("profile", getProfile,
    {
      staleTime: 60000,
      cacheTime: 60000
    })
  return { ...data, isLoading } as Auth;
};

export default useAuth;