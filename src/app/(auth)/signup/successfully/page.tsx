import Image from "next/image";

import {SignupSuccessButton} from "@/components/auth/SignupSuccessfuly";

const SignupSuccessPage = () => {
  return (
    <div className={"w-3/4 flex flex-col gap-10 items-center md:w-1/2 xl:w-1/4"}>
      <Image
        src={"/icon-check.svg"}
        alt={"Icono de éxito"}
        width={120}
        height={0}
      />
      <h1 className={"text-4xl font-bold text-center"}>Registro Exitoso</h1>
      <p className={"text-base text-center"}>
        Hemos enviado un correo de confirmación para validar tu email, por favor revisalo para iniciar sesión.
      </p>
      <SignupSuccessButton/>
    </div>
  );
}

export default SignupSuccessPage;
