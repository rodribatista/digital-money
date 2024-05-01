"use client";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";

export const SelectAmount = () => {

  const router = useRouter();

  const {
    setFocus,
    getValues,
    watch,
    register} = useFormContext()
  const [continueForm, setContinueForm] = useState(false)

  useEffect(() => {
    if (!getValues("card_id")) {
      router.push("/dashboard/deposit/card?step=0")
    }
    setFocus("amount")
  }, []);

  useEffect(() => {
    if (getValues("amount")) {
      setContinueForm(true)
      return;
    }
    setContinueForm(false)
  }, [watch("amount")]);

  const handleContinue = () => {
    router.push("/dashboard/deposit/card?step=2")
  }

  return (
    <>
      <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black shadow-md md:p-10 xl:p-15"}>
        <h2 className={"text-2xl text-yellow-500 font-semibold"}>¿Cuánto querés ingresar a la cuenta?</h2>
        <div className={"w-full p-5 flex flex-row gap-5 items-center rounded-md bg-white text-black md:p-10"}>
          <span className={"text-xl"}>$</span>
          <input type={"number"} placeholder={"0"} {...register("amount")}
                 className={`w-full bg-transparent text-xl text-black text-base focus:border-0}`}/>
        </div>
      </section>
      <button
        className={"w-full py-5 bg-yellow-500 rounded-md text-black text-center font-semibold shadow-md disabled:bg-gray-500 hover:cursor-pointer"}
        disabled={!continueForm} onClick={handleContinue}>
        Continuar
      </button>
    </>
  );

};
