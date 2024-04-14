import {AppLinks} from "@/components/app/AppLinks";
import {MoneyInfo} from "@/components/app/home/MoneyInfo";
import {LastActivity} from "@/components/app/home/LastActivity";

const HomePage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Inicio</h1>
      <MoneyInfo/>
      <div className={"w-full flex flex-col gap-5 xl:flex-row"}>
        <AppLinks linkTo={"/app/deposit"}>Ingresar dinero</AppLinks>
        <AppLinks linkTo={"/app/payment"}>Pago de servicios</AppLinks>
      </div>
      <LastActivity/>
    </>
  );
};

export default HomePage;
