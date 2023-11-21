import { privateApi } from '@/api/axios.service';
import { User } from '@/types';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

interface Auth extends User {
  isLoading: boolean,
  logout: () => void
}

const getProfile = async (): Promise<User> => {
  const res: User = await privateApi.get("/auth/profile");
  return res
}

const useAuth = (): Auth => {
  const [user, setUser] = useState<User | {}>({});
  const { data, isLoading } = useQuery("profile", getProfile,
    {
      staleTime: 60000,
      cacheTime: 60000,
      retry: 1
    })
  useEffect(() => {
    setUser(data as User);
  }, [data])

  const logout = async () => {
    await privateApi("/auth/logout")
    setUser({});
  }
  return {
    ...user,
    isLoading,
    logout
  } as Auth;
};

export default useAuth;