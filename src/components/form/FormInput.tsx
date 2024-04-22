import {useFormContext} from "react-hook-form";

type InputTextProps = {
  type: string,
  name: string,
  placeholder: string,
  onFocus?: () => void,
}

export const FormInput = ({type, name, placeholder, onFocus}: InputTextProps) => {

  const {
    register,
    formState: {errors}
  } = useFormContext()

  return (
    <input type={type} onFocus={onFocus}
           className={`p-3 border border-gray-300 rounded-md text-black text-base focus:outline-2 ${errors[name] ? "focus:outline-red-500" : "focus:outline-yellow-500"}`}
           {...register(name)} placeholder={placeholder}/>
  )

}
