"use client";
import {useEffect} from "react";
import Link from "next/link";

import {FormProvider, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import {FormButton} from "@/components/form/FormButton";
import FormInput from "@/components/form/FormInput";


type LoginPassParams = {
  email: string,
}

type LoginData = {
  email: string,
  password: string,
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
}).required()

export const LoginPassForm = ({email}: LoginPassParams) => {

  const loginPassForm = useForm<LoginData>({
    resolver: yupResolver(schema),
  })

  const {
    handleSubmit,
    setFocus,
    formState: { errors },
    setValue,
  } = loginPassForm

  useEffect(() => {
    setValue("email", email)
    setFocus("password")
  }, [])

  const onSubmit = (data: LoginData) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <h1 className={"text-2xl text-center"}>Ingresa tu contraseña</h1>
      <FormProvider {...loginPassForm}>
        <form onSubmit={handleSubmit(onSubmit)}
              className={"w-full flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
          <FormInput type={"password"} name={"password"} placeholder={"********"}/>
          <FormButton>Ingresar</FormButton>
        </form>
      </FormProvider>
      <div className={"flex flex-row gap-1.5 justify-center"}>
        <p className={"text-base"}>
          Volver a
        </p>
        <Link href={"/login"}
              className={"pb-1 border-b-2 border-yellow-500 font-semibold text-center"}>
          ingresar email
        </Link>
      </div>
    </>
  )
}
