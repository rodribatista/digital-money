import {FC, PropsWithChildren} from 'react';

export const FormButton: FC<PropsWithChildren> = ({children}) => {
  return (
    <button className={"w-full py-3 bg-yellow-500 rounded-lg text-black text-center font-semibold"}
            type="submit">
      {children}
    </button>
  )
}
