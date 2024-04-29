"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useFormContext} from "react-hook-form";
import {authSwal} from "@/lib/sweet";

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
    authSwal.fire({
      title: "Iniciando sesión...",
      showConfirmButton: false,
      allowOutsideClick: false,
      willOpen() {
        authSwal.showLoading();
      },
    });
    dispatch(authLogin(data))
      .then(() => {
        authSwal.close();
        router.replace("/dashboard/home");
      })
      .catch((error) => {
        authSwal.fire({
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
