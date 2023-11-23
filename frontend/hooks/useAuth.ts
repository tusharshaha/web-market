import { privateApi } from '@/api/axios.service';
import { addUser, removeUser } from '@/redux/features/user.reducer';
import { AppDispatch, RootState } from '@/redux/store';
import { User } from '@/types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Auth extends User {
  isLoading: boolean,
  logout: () => void,
  getProfile: () => void,
}

const useAuth = (): Auth => {
  const [isLoading, setIsloading] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const getProfile = () => {
    setIsloading(true)
    privateApi.get<any, User>("/auth/profile")
      .then((data) => dispatch(addUser(data)))
      .finally(() => setIsloading(false))
  }

  const logout = async () => {
    await privateApi.get("/auth/logout")
    dispatch(removeUser());
  }
  return {
    ...user,
    isLoading,
    logout,
    getProfile
  } as Auth;
};

export default useAuth;