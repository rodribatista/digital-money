"use client";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {FormProvider, useForm} from "react-hook-form";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import {LoginPassForm} from "@/components/auth/LoginPassForm";
import {LoginEmailForm} from "@/components/auth/LoginEmailForm";

export type LoginData = {
  email: string,
  password: string,
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
}).required()

export const LoginForm = () => {

  const params = useSearchParams()

  const loginForm = useForm<LoginData>({
    resolver: yupResolver(schema),
  })

  return (
    <>
      <FormProvider {...loginForm}>
        <form className={"w-full flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
          {params.get("email") ? (
            <>
              <h1 className={"text-2xl text-center"}>Ingresá tu contraseña</h1>
              <LoginPassForm email={params.get("email") || ""}/>
              <div className={"flex flex-row gap-1.5 justify-center"}>
                <p className={"text-base"}>
                  Volver a
                </p>
                <Link href={"/login"}
                      className={"pb-1 border-b-2 border-yellow-500 font-semibold text-center"}>
                  ingresar correo
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className={"text-2xl text-center"}>Ingresá tu correo</h1>
              <LoginEmailForm/>
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
          )}
        </form>
      </FormProvider>
    </>
  )

}
