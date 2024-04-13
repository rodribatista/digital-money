"use client";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useFormContext} from "react-hook-form";

import {FormInput} from "@/components/form/FormInput";

export const LoginEmailForm = () => {

  const router = useRouter()

  const {
    setFocus,
    getValues,
    trigger,
    setError,
    formState: {isValid},
  } = useFormContext()

  useEffect(() => {
    setFocus("email")
  }, [])

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    trigger("email")
      .then((res) => {
        if (res) {
          router.push(`/login?email=${getValues("email")}`)
        } else {
          setError("email",{})
          setFocus("email")
        }
      })
  }

  return (
    <>
      <FormInput type={"text"} name={"email"} placeholder={"johndoe@mailito.com"}/>
      <button onClick={onSubmit}
              className={`w-full py-3 bg-yellow-500 rounded-lg text-black text-center font-semibold`}>
        Continuar
      </button>
    </>
  )

}
