"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useFormContext} from "react-hook-form";

import {useAppDispatch} from "@/lib/hooks";
import {authLogin} from "@/api/authApi";

import {LoginCredentials} from "@/types/AuthType";

import {FormButton} from "@/components/form/FormButton";
import {FormInput} from "@/components/form/FormInput";

type LoginPassParams = {
  email: string,
}

export const LoginPassForm = ({email}: LoginPassParams) => {

  const router = useRouter()
  const dispatch = useAppDispatch();

  const {
    setValue,
    setFocus,
  } = useFormContext()

  useEffect(() => {
    setValue("email", email)
    setFocus("password")
  }, [])

  const onSubmit = (data: LoginCredentials) => {
    dispatch(authLogin(data))
      .then(() => {
        router.replace("/app/home")
      })
      .catch((error) => alert(error.message))
  }

  return (
    <>
      <FormInput type={"password"} name={"password"} placeholder={"********"}/>
      <FormButton onSubmit={onSubmit}>Ingresar</FormButton>
    </>
  )

}
