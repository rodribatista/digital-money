import Link from "next/link";
import Image from "next/image";

import {icon} from "@/utils/routes";

const DepositPage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Cargar dinero</h1>
      <Link href={"/dashboard/deposit/bank"}
            className={"w-full p-10 flex flex-row gap-5 items-center rounded-md bg-black shadow-md md:p-15"}>
        <Image src={icon.user.src} alt={icon.user.alt} width={35} height={35}/>
        <h2 className={"text-yellow-500 text-xl font-semibold md:text-2xl"}>Transferencia bancaria</h2>
      </Link>
      <Link href={"/dashboard/deposit/card"}
            className={"w-full p-10 flex flex-row gap-5 items-center rounded-md bg-black shadow-md md:p-15"}>
        <Image src={icon.card.src} alt={icon.card.alt} width={35} height={35}/>
        <h2 className={"text-yellow-500 text-xl font-semibold md:text-2xl"}>Seleccionar tarjeta</h2>
      </Link>
    </>
  );
};

export default DepositPage;
