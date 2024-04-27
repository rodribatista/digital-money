"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useFormContext} from "react-hook-form";
import {appSwal} from "@/lib/sweet";

import {useAppDispatch} from "@/lib/hooks";
import {authLogin} from "@/api/authApi";

import {LoginCredentials} from "@/types/AuthType";

import {FormButton} from "@/components/form/FormButton";
import {FormInput} from "@/components/form/FormInput";

type LoginPassParams = {
  email: string,
};

export const LoginPassForm = ({email}: LoginPassParams) => {

  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    setValue,
    setFocus,
  } = useFormContext();

  useEffect(() => {
    setValue("email", email)
    setFocus("password")
  }, [])

  const onSubmit = (data: LoginCredentials) => {
    appSwal.fire({
      title: "Iniciando sesión...",
      showConfirmButton: false,
      allowOutsideClick: false,
      willOpen() {
        appSwal.showLoading();
      },
    });
    dispatch(authLogin(data))
      .then(() => {
        appSwal.fire({
          icon: "success",
          title: "¡Bienvenido!",
          text: "Serás redirigido en un momento...",
          showConfirmButton: false,
          allowOutsideClick: false,
          timer: 1000
        }).then(() => {
          router.replace("/app/home");
        });
      })
      .catch((error) => {
        appSwal.fire({
          icon: "error",
          title: "Ooops... algo salió mal",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  return (
    <>
      <FormInput type={"password"} name={"password"} placeholder={"********"}/>
      <FormButton onSubmit={onSubmit}>Ingresar</FormButton>
    </>
  )

};
