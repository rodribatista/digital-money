"use client";
import {FC, PropsWithChildren, useEffect} from "react";
import {useRouter} from "next/navigation";

import {useAppDispatch} from "@/lib/hooks";
import {userLoggedIn} from "@/store/authSlice";

export const AuthCheck: FC<PropsWithChildren> = ({children}) => {

  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
      dispatch(userLoggedIn(accessToken))
      router.replace("/app/home");
    }
  }, []);

  return  <>{children}</>;

};
