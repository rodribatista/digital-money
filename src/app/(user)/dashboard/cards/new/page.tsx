import {NewCard} from "@/components/dash/cards/NewCard";
import Link from "next/link";

const NewCardPage = () => {
  return (
    <>
      <div className={"flex flex-row gap-2 text-black self-start"}>
        <Link href={"/dashboard/cards"} className={"border-b"}>Tarjetas</Link>
        <span>/</span>
        <h1 className={"font-semibold"}>Nueva tarjeta</h1>
      </div>
      <NewCard/>
    </>
  );
};

export default NewCardPage;
