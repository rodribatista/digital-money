import {HeaderLogo} from "@/components/HeaderLogo";

type HeaderProps = {
  homeUrl: string,
  children: React.ReactNode,
};

export const Header = ({homeUrl, children, }: HeaderProps) => {
  return (
    <header className={"p-5 flex flex-row justify-between bg-transparent md:px-20 xl:px-40"}>
      <HeaderLogo onClickUrl={homeUrl}/>
      {children}
    </header>
  );
};
