import {NewCard} from "@/components/app/cards/NewCard";
import Link from "next/link";

const NewCardPage = () => {
  return (
    <>
      <div className={"flex flex-row gap-2 text-black self-start"}>
        <Link href={"/app/cards"} className={"border-b"}>Tarjetas</Link>
        <span>/</span>
        <h1 className={"font-semibold"}>Nueva tarjeta</h1>
      </div>
      <NewCard/>
    </>
  );
};

export default NewCardPage;
