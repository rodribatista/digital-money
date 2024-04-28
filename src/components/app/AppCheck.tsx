"use client";
import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useRouter} from "next/navigation";

import {useAppDispatch} from "@/lib/hooks";
import {getAccessToken} from "@/utils/auth";
import {userSetToken} from "@/store/authSlice";
import {getUserData} from "@/api/userApi";

import {AppLoader} from "@/components/app/AppLoader";
import {authSwal} from "@/lib/sweet";

export const AppCheck: FC<PropsWithChildren> = ({children}) => {

  const router = useRouter();

  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const access_token = getAccessToken();
    dispatch(userSetToken(access_token))
    dispatch(getUserData(access_token))
      .then(() => setIsLoaded(true))
      .catch((error) => {
        setIsLoaded(false)
        authSwal.fire({
          icon: "error",
          title: "Ooops... algo salió mal",
          text: error.message,
          showConfirmButton: true,
          allowOutsideClick: false,
          confirmButtonText: "Ir a iniciar sesión",
        }).then((result) => {
          if (result.isConfirmed) {
            router.replace("/login")
          }
        });
      })
  }, [])

  return isLoaded ? (<>{children}</>) : (
    <div className={"w-full h-full flex flex-row grow justify-center items-center"}>
      <AppLoader/>
    </div>
  );

};
