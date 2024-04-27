"use client";
import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {useAppDispatch} from "@/lib/hooks";
import {getAccessToken} from "@/utils/auth";
import {userSetToken} from "@/store/authSlice";
import {getUserData} from "@/api/userApi";

export const AppCheck: FC<PropsWithChildren> = ({children}) => {

  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const access_token = getAccessToken();
    dispatch(userSetToken(access_token))
    dispatch(getUserData(access_token))
      .then(() => setIsLoaded(true))
      .catch(() => setIsLoaded(false))
  }, [])

  return isLoaded ? (<>{children}</>) : (
    <div className={"w-full h-full flex flex-row grow justify-center items-center"}>
      Cargando...
    </div>
  );

};
