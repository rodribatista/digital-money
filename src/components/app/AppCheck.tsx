"use client";
import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {getAccessToken} from "@/utils/auth";
import {useAppDispatch} from "@/lib/hooks";
import {userSetToken} from "@/store/authSlice";

export const AppCheck: FC<PropsWithChildren> = ({children}) => {

  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(userSetToken(getAccessToken()))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 1500);
  }, []);

  return isLoaded ? (<>{children}</>) : (
    <div className={"w-full h-full flex flex-row grow justify-center items-center"}>
      Cargando...
    </div>
  );

};
