"use client";
import {useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

import {FormProvider, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import {FormButton} from "@/components/form/FormButton";
import FormInput from "@/components/form/FormInput";

type LoginEmail = {
  email: string,
}

const schema = yup.object({
  email: yup.string().email().required(),
}).required()

export const LoginEmailForm = () => {

  const router = useRouter()

  const loginEmailForm = useForm<LoginEmail>({
    resolver: yupResolver(schema),
  })

  const {
    handleSubmit,
    setFocus,
    formState: { errors },
  } = loginEmailForm

  useEffect(() => {
    setFocus("email")
  }, [])

  const onSubmit = (data: LoginEmail) => {
    router.push(`/login?email=${data.email}`)
  }

  return (
    <>
      <h1 className={"text-2xl text-center"}>Ingresa tu email</h1>
      <FormProvider {...loginEmailForm}>
        <form onSubmit={handleSubmit(onSubmit)}
              className={"w-full flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
          <FormInput type={"text"} name={"email"} placeholder={"johndoe@mailito.com"}/>
          <FormButton>Continuar</FormButton>
        </form>
      </FormProvider>
      <div className={"flex flex-row gap-2 justify-center"}>
        <p className={"text-base"}>
          ¿No tienes cuenta?
        </p>
        <Link href={"/signup"}
              className={"pb-1 border-b-2 border-yellow-500 font-semibold text-center"}>
          Crear cuenta
        </Link>
      </div>
    </>
  )
}
