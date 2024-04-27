"use client";
import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useRouter} from "next/navigation";

import {useAppSelector} from "@/lib/hooks";
import {AppLoader} from "@/components/app/AppLoader";

export const AppCheck: FC<PropsWithChildren> = ({children}) => {

  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);
  const isLogged = useAppSelector((state) => state.auth.isLogged);

  useEffect(() => {
    if (!isLogged) {
      router.replace("/");
      return;
    }
    setTimeout(() => {
      setIsLoaded(true)
    }, 1500);
  }, [isLogged]);

  return isLogged && isLoaded ? (<>{children}</>) : <AppLoader/>;

};
