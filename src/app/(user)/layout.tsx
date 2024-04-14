import {FC, PropsWithChildren} from "react";

import {Header} from "@/components/Header";
import {HeaderInfo} from "@/components/HeaderInfo";
import Navbar from "@/components/Navbar";

const UserLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Header>
        <HeaderInfo/>
      </Header>
      <div className={"w-full h-full flex flex-row grow"}>
        <aside className={"hidden w-1/4 md:block"}>
          <Navbar/>
        </aside>
        <main
          className={"w-full p-5 flex flex-col grow justify-center items-center"}>
          {children}
        </main>
      </div>
    </>
  );
}

export default UserLayout;
