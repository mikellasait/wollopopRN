import { useCallback, useEffect, useState } from "react";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

import useUserStore from "@/store/userStore";
import { storage } from "@/store/mmkv";
import { useRouter } from "expo-router";

const useAuth = () => {
  const userStore = useUserStore();
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (storage.contains("user")) {
      setIsAuth(true);
    }
  }, []);

  const login = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      storage.set("user", JSON.stringify({ ...userInfo.user, idToken: userInfo.idToken }));
      userStore.login({ ...userInfo.user, idToken: userInfo.idToken });
      router.back();
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }, [userStore]);

  const logout = useCallback(async () => {
    try {
      await GoogleSignin.signOut();
      userStore.logout();
      setIsAuth(false);
      storage.delete("user");
    } catch (error) {
      console.error(error);
    }
  }, [userStore]);

  return { login, logout, isAuth };
};

export default useAuth;
