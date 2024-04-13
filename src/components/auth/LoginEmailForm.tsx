"use client";
import {useEffect} from "react";
import Link from "next/link";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/navigation";

type LoginData = {
  email: string,
}

const schema = yup.object({
  email: yup.string().email().required(),
}).required()

export const LoginEmailForm = () => {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    setFocus("email")
  }, [])

  const onSubmit = (data: LoginData) => {
    router.push(`/login?email=${data.email}`)
  }

  return (
    <>
      <h1 className={"text-2xl text-center"}>Ingresa tu email</h1>
      <form onSubmit={handleSubmit(onSubmit)}
            className={"w-full flex flex-col gap-5 md:w-2/3 xl:w-1/2"}>
        <input type={"text"}
               className={`p-3 border border-gray-300 rounded-md text-black text-base focus:outline-2 ${errors.email ? "focus:outline-red-500" : "focus:outline-yellow-500"}`}
               {...register("email")} placeholder="johndoe@mailito.com"/>
        <button className={"py-3 bg-yellow-500 rounded-lg text-black text-center font-semibold"}
                type="submit">Continuar
        </button>
        <div className={"flex flex-row gap-2 justify-center"}>
          <p className={"text-base"}>
            ¿No tienes cuenta?
          </p>
          <Link href={"/signup"}
                className={"pb-1 border-b-2 border-yellow-500 font-semibold text-center"}>
            Crear cuenta
          </Link>
        </div>
      </form>
    </>
  )
}
