"use client";
import {useEffect} from 'react';
import {useRouter, useSearchParams} from "next/navigation";

export const SignupSuccessButton = () => {

  const router = useRouter();
  const params = useSearchParams()

  useEffect(() => {
    if (!params.has("email")) {
      router.replace("/login")
    }
  }, []);

  const handleContinue = () => {
    router.replace(`/login?email=${params.get("email")}`)
  }

  return (
    <button className={`w-full py-3 bg-yellow-500 rounded-lg text-black text-center font-semibold`}
            onClick={handleContinue}>
        Continuar
    </button>
  );
};
