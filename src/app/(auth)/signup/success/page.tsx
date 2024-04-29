import Image from "next/image";

import {SignupSuccessButton} from "@/components/auth/SignupSuccessButton";

import {icon} from "@/utils/routes";

const SignupSuccessPage = () => {
  return (
    <div className={"w-3/4 flex flex-col gap-10 items-center md:w-1/2 xl:w-1/3"}>
      <Image
        src={icon.check.src}
        alt={icon.check.alt}
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
