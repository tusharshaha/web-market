import { privateApi, publicApi } from "@/lib/api/axios.service";
import { addUser, removeUser } from "@/lib/redux/features/user.reducer";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { User } from "@/types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Auth extends User {
  isLoading: boolean;
  logout: () => void;
  getProfile: (setIsFetch?: React.Dispatch<React.SetStateAction<boolean>>) => void;
}

const useAuth = (): Auth => {
  const [isLoading, setIsloading] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const getProfile = (
    setIsFetch: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsloading(true);
    privateApi
      .get<any, User>("/auth/profile")
      .then((data) => {
        dispatch(addUser(data));
      })
      .finally(() => {
        setIsloading(false);
        typeof setIsFetch === "function" && setIsFetch(false)
      });
  };

  const logout = async () => {
    await publicApi.post("/auth/logout", {}, { withCredentials: true });
    dispatch(removeUser());
  };
  return {
    ...user,
    isLoading,
    logout,
    getProfile,
  } as Auth;
};

export default useAuth;
