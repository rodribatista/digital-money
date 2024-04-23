"use client";
import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useRouter} from "next/navigation";

import {useAppSelector} from "@/lib/hooks";
import {AppLoader} from "@/components/app/AppLoader";

export const AppCheck: FC<PropsWithChildren> = ({children}) => {

  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);
  const authState = useAppSelector((state) => state.auth.authState);

  useEffect(() => {
    if (!authState) {
      router.replace("/");
      return;
    }
    setTimeout(() => {
      setIsLoaded(true)
    }, 1500);
  }, [authState]);

  return authState && isLoaded ? (<>{children}</>) : <AppLoader/>;

};
