import React from 'react';
import {useFormContext} from "react-hook-form";

type FormButtonProps = {
  onSubmit: (data: any) => void,
  children: React.ReactNode
}

export const FormButton = ({onSubmit, children}: FormButtonProps) => {

  const {
    handleSubmit,
  } = useFormContext()

  return (
    <button className={"w-full py-3 bg-yellow-500 rounded-lg text-black text-center font-semibold"}
            onClick={handleSubmit(onSubmit)}>
      {children}
    </button>
  )

}
