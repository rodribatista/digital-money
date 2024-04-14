import Link from "next/link";

export const MoneyInfo = () => {
  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black shadow-md md:p-10 xl:p-15"}>
      <div className={"flex flex-row gap-5 self-end"}>
        <Link href={"/app/cards"} className={"border-b text-sm"}>Ver tarjetas</Link>
        <Link href={"#"} className={"border-b text-sm"}>Ver CVU</Link>
      </div>
      <div className={"flex flex-col gap-5"}>
        <h2 className={"text-xl"}>Dinero disponible</h2>
        <span
          className={"w-fit p-5 rounded-full border-2 border-yellow-500 text-4xl font-semibold"}>
          $ 6.890.534,17
        </span>
      </div>
    </section>
  );
};
