import Link from "next/link";

import {Header} from "@/components/Header";

const LandingPage = () => {
  return (
    <>
      <Header homeUrl={"/"}>
        <div className={"flex flex-row gap-2"}>
          <Link href={"/login"}
                className={"py-2 px-3 border-2 border-yellow-500 rounded-lg font-semibold text-center"}>
            Ingresar
          </Link>
          <Link href={"/signup"}
                className={"py-2 px-3 bg-yellow-500 rounded-lg text-black text-center font-semibold"}>
            Crear cuenta
          </Link>
        </div>
      </Header>
      <main className={"relative w-full p-5 flex flex-col grow justify-between bg-landing-image bg-cover bg-center md:p-20 xl:px-40"}>
        <section className={"w-2/3 pt-10 mb-10 flex flex-col gap-5 md:w-1/2"}>
          <h3 className={"font-semibold text-2xl md:text-4xl xl:text-5xl"}>De ahora en adelante, haces más con tu dinero</h3>
          <div className={"w-1/5 border-t-4 border-yellow-500 md:w-1/4"}></div>
          <h4 className={"font-semibold text-xl text-yellow-500 md:text-2xl xl:text-3xl"}>Tu nueva <strong>billetera virtual</strong></h4>
        </section>
        <section className={"flex flex-col gap-5 self-center z-20 md:w-2/3 xl:flex-row"}>
          <div className={"w-full p-5 bg-white rounded-xl text-black flex flex-col gap-2 md:p-7 md:gap-5"}>
            <h2 className={"pb-2 font-semibold text-xl border-b-2 border-yellow-500 md:text-2xl xl:text-3xl"}>Transferí dinero</h2>
            <p className={"text-sm md:text-base"}>Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir
              transferencias y nuclear tu capital en nuestra billetera virtual.</p>
          </div>
          <div className={"w-full p-5 bg-white rounded-xl text-black flex flex-col gap-2 md:p-7 md:gap-5"}>
            <h2 className={"pb-2 font-semibold text-xl border-b-2 border-yellow-500 md:text-2xl xl:text-3xl"}>Pago de servicios</h2>
            <p className={"text-sm md:text-base"}>Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel.</p>
          </div>
        </section>
        <div className={"absolute bottom-0 left-0 w-full h-2/5 rounded-t-2xl bg-yellow-500 z-10 md:h-1/3 xl:h-1/4"}></div>
      </main>
    </>
  );
}

export default LandingPage;
