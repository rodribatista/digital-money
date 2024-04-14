import Link from "next/link";

import {AppLinks} from "@/components/app/AppLinks";

const HomePage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Inicio</h1>
      <div className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black md:p-10 xl:p-15"}>
        <div className={"flex flex-row gap-5 self-end"}>
          <Link href={"/app/cards"} className={"border-b text-sm"}>Ver tarjetas</Link>
          <Link href={"#"} className={"border-b text-sm"}>Ver CVU</Link>
        </div>
        <div className={"flex flex-col gap-5"}>
          <h2 className={"text-xl"}>Dinero disponible</h2>
          <span className={"w-fit p-5 rounded-full border-2 border-yellow-500 text-4xl font-semibold"}>$ 6.890.534,17</span>
        </div>
      </div>
      <div className={"w-full flex flex-col gap-5 xl:flex-row"}>
        <AppLinks linkTo={"/app/deposit"}>Ingresar dinero</AppLinks>
        <AppLinks linkTo={"/app/payment"}>Pago de servicios</AppLinks>
      </div>
    </>
  );
};

export default HomePage;
