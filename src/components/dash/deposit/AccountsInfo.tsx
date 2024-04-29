"use client";
import {useAppSelector} from "@/lib/hooks";

import {CopyToClipboard} from "@/components/dash/deposit/CopyToClipboard";

export const AccountsInfo = () => {

  const {accountInfo} = useAppSelector(state => state.auth);

  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-black shadow-md md:p-10 xl:p-15"}>
      <p>Copia tu CVU o Alias para ingresar o transferir dinero desde otra cuenta</p>
      <AccountInfo name={"CVU"} value={accountInfo.cvu}/>
      <div className={"border-b"}></div>
      <AccountInfo name={"Alias"} value={accountInfo.alias}/>
    </section>
  );
};

type AccountInfoProps = {
  name: string,
  value: string,
};

const AccountInfo = ({name, value}: AccountInfoProps) => {
  return (
    <div className={"flex flex-row justify-between items-center gap-2"}>
      <div>
        <h2 className={"font-bold text-xl text-yellow-500"}>{name}</h2>
        <span className={"text-lg"}>{value}</span>
      </div>
      <CopyToClipboard value={value}/>
    </div>
  );
};
