"use client";
import {useEffect} from "react";
import {useFormContext} from "react-hook-form";

import {FormButton} from "@/components/form/FormButton";
import {FormInput} from "@/components/form/FormInput";
import {LoginData} from "@/components/auth/LoginForm";

type LoginPassParams = {
  email: string,
}

export const LoginPassForm = ({email}: LoginPassParams) => {

  const {
    setValue,
    setFocus,
  } = useFormContext()

  useEffect(() => {
    setValue("email", email)
    setFocus("password")
  }, [])

  const onSubmit = (data: LoginData) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <FormInput type={"password"} name={"password"} placeholder={"********"}/>
      <FormButton onSubmit={onSubmit}>Ingresar</FormButton>
    </>
  )

}
