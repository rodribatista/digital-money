"use client";
import {useSearchParams} from "next/navigation";
import {LoginPassForm} from "@/components/auth/LoginPassForm";
import {LoginEmailForm} from "@/components/auth/LoginEmailForm";

export const LoginForm = () => {

  const params = useSearchParams()

  return params.get("email") ?
    <LoginPassForm email={params.get("email") || ""}/> : <LoginEmailForm/>

}
