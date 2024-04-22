import {CopyToClipboard} from "@/components/app/profile/CopyToClipboard";

export const AccountsInfo = () => {
  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black shadow-md md:p-10 xl:p-15"}>
      <p>Copia tu CVU o Alias para ingresar o transferir dinero desde otra cuenta</p>
      <div className={"pb-5 flex flex-row justify-between items-center gap-2 border-b"}>
        <AccountInfo name={"CVU"} value={"0000002100075320000000"}/>
        <CopyToClipboard value={"0000002100075320000000"}/>
      </div>
      <div className={"flex flex-row justify-between items-center gap-2"}>
        <AccountInfo name={"Alias"} value={"estealiasnoexiste"}/>
        <CopyToClipboard value={"estealiasnoexiste"}/>
      </div>
    </section>
  );
};

type AccountInfoProps = {
  name: string,
  value: string,
};

const AccountInfo = ({name, value}: AccountInfoProps) => {
  return (
    <div>
      <h2 className={"font-bold text-xl text-yellow-500"}>{name}</h2>
      <span className={"text-lg"}>{value}</span>
    </div>
  );
};
