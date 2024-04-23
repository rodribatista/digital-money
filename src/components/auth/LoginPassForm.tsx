"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useFormContext} from "react-hook-form";

import {useAppDispatch} from "@/lib/hooks";
import {setAuthState} from "@/store/authSlice";

import {FormButton} from "@/components/form/FormButton";
import {FormInput} from "@/components/form/FormInput";
import {LoginData} from "@/components/auth/LoginForm";

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

  const onSubmit = (data: LoginData) => {
    const ok = confirm(JSON.stringify(data))
    if (ok) {
      dispatch(setAuthState(true))
      router.replace("/app/home")
    }
  }

  return (
    <>
      <FormInput type={"password"} name={"password"} placeholder={"********"}/>
      <FormButton onSubmit={onSubmit}>Ingresar</FormButton>
    </>
  )

}
