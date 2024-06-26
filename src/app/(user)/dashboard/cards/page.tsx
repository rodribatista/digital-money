import Link from "next/link";
import Image from "next/image";

import {CardsList} from "@/components/dash/cards/CardsList";

import {icon} from "@/utils/routes";

const CardsPage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Tarjetas</h1>
      <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black shadow-md md:p-10 xl:p-15"}>
        <h2 className={"text-lg md:text-xl"}>Agregá tu tarjeta de débito o crédito</h2>
        <Link  href={"/dashboard/cards/new"} className={"w-fit flex flex-row items-center gap-3"}>
          <Image src={icon.plus.src} alt={icon.plus.alt} width={40} height={40}/>
          <span className={"text-yellow-500 text-2xl font-semibold"}>Nueva tarjeta</span>
        </Link>
      </section>
      <CardsList/>
    </>
  );
};

export default CardsPage;
