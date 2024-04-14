import {FC, PropsWithChildren} from "react";

import {Header} from "@/components/Header";
import {Navbar} from "@/components/Navbar";

const UserLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Header>
        <Navbar/>
      </Header>
      <main
        className={"w-full h-full px-5 py-10 flex flex-col grow gap-10 justify-center items-center md:px-20 xl:px-40 xl:py-20"}>
        {children}
      </main>
    </>
  );
}

export default UserLayout;
