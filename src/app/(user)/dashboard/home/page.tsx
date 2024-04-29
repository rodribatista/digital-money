import {AppLinks} from "@/components/dash/AppLinks";
import {MoneyInfo} from "@/components/dash/home/MoneyInfo";
import {LastActivity} from "@/components/dash/home/LastActivity";

const HomePage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Inicio</h1>
      <MoneyInfo/>
      <div className={"w-full flex flex-col gap-5 xl:flex-row"}>
        <AppLinks linkTo={"/dashboard/deposit"}>Ingresar dinero</AppLinks>
        <AppLinks linkTo={"/dashboard/payment"}>Pago de servicios</AppLinks>
      </div>
      <LastActivity/>
    </>
  );
};

export default HomePage;
