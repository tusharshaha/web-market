import { privateApi } from '@/api/axios.service';
import { User } from '@/types';
import { useEffect, useState } from 'react';

interface Auth extends User {
  isLoading: boolean,
}

const useAuth = (): Auth => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    privateApi("/auth/profile")
      .then(data => setUser(data))
      .finally(() => setIsLoading(false));
  }, [])
  return { ...user, isLoading } as Auth;
};

export default useAuth;