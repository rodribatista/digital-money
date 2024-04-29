import Image from "next/image";
import {useFormContext} from "react-hook-form";

import {icon} from "@/utils/routes";

type InputTextProps = {
  name: string,
  placeholder: string,
}

export const FormSearch = ({name, placeholder}: InputTextProps) => {

  const {
    register,
    formState: {errors}
  } = useFormContext()

  return (
    <form className={"w-full p-5 flex flex-row gap-5 rounded-md bg-white text-black shadow-md md:px-10 xl:px-15"}>
      <Image src={icon.search.src} alt={icon.search.alt} width={20} height={20}/>
      <input type="text"
             className={`w-full bg-white text-black text-base focus:outline-none`}
             {...register(name)} placeholder={placeholder}/>
    </form>
  )

};
