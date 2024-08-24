"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {userSetAccountInfo} from "@/store/authSlice";

import {getUserInitialData} from "@/api/userApi";
import {AppLinks} from "@/components/dash/AppLinks";

import {icon} from "@/utils/routes";

export const PaymentSuccess = () => {

  const router = useRouter();

  const dispatch = useAppDispatch();
  const {accessToken} = useAppSelector(state => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserInitialData(accessToken))
        .then((data) => {
          dispatch(userSetAccountInfo(data))
        })
        .catch(() => {
          router.refresh();
        });
    }
  }, [accessToken]);

  return (
    <section className={"w-full p-10 flex flex-col gap-10 items-center rounded-md bg-black shadow-md md:p-15 xl:p-20"}>
      <Image
        src={icon.check.src}
        alt={icon.check.alt}
        width={120}
        height={0}
      />
      <div className={"w-full flex flex-col gap-10 items-center md:w-1/2 xl:w-1/3 "}>
        <div className={"w-full flex flex-col gap-5"}>
          <h1 className={"text-4xl font-bold text-center"}>Pago realizado con éxito.</h1>
        </div>
        <AppLinks linkTo={"/dashboard/home"}>Volver al inicio</AppLinks>
      </div>
    </section>
  );

};
