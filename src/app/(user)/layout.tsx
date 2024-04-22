import {FC, PropsWithChildren} from "react";

import {Header} from "@/components/Header";
import {HeaderInfo} from "@/components/HeaderInfo";
import {Navbar} from "@/components/Navbar";

const UserLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Header>
        <HeaderInfo/>
      </Header>
      <div className={"w-full h-full flex flex-row grow"}>
        <aside className={"hidden w-1/3 md:block xl:w-1/4"}>
          <Navbar/>
        </aside>
          <main className={"w-full p-5 flex flex-col grow gap-5 items-center bg-gray-500 md:px-10 xl:px-20"}>
            {children}
          </main>
      </div>
    </>
);
}

export default UserLayout;
