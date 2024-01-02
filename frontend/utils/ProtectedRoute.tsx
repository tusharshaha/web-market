import React, { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";

const ProtectedRoute = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const Protected: React.FC<P> = (props) => {
    const router = useRouter();
    const [isFetch, setIsFetch] = useState(true);
    const { email, getProfile } = useAuth();
    const register = router.pathname === "/register";
    useEffect(() => {
      if (!email) {
        getProfile(setIsFetch);
      } else {
        setIsFetch(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);
    
    if (register) {
      if(email){
        router.replace("/");
        return null;
      }else{
        return <Component {...props} />
      }
    }
    if (email && !register) {
      return <Component {...props} />;
    }
    if (isFetch) {
      return <h3>Loading...</h3>;
    }
    if (!email) {
      router.replace("/register");
      return null;
    }
    return null
  };

  return Protected;
};

export default ProtectedRoute;
