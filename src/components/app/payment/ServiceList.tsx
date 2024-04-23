import {ServiceItem} from "@/components/app/payment/ServiceItem";

export type Service = {
  id: number,
  name: string,
  image: string,
};

const services: Service[] = [
  {
    id: 1,
    name: "Claro",
    image: "/service-claro.svg",
  },
  {
    id: 2,
    name: "Personal",
    image: "/service-personal.svg",
  },
  {
    id: 3,
    name: "Cablevision",
    image: "/service-cablevision.svg",
  },
  {
    id: 4,
    name: "Edenor",
    image: "/service-edenor.svg",
  },
  {
    id: 5,
    name: "Edesur",
    image: "/service-edesur.svg",
  },
  {
    id: 6,
    name: "Metrogas",
    image: "/service-metrogas.svg",
  },
  {
    id: 7,
    name: "Telecentro",
    image: "/service-telecentro.svg",
  },
  {
    id: 8,
    name: "Movistar",
    image: "/service-movistar.svg",
  },
  {
    id: 9,
    name: "Telecom",
    image: "/service-telecom.svg",
  },
  {
    id: 10,
    name: "OSDE",
    image: "/service-osde.svg",
  }
];

export const ServiceList = () => {
  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
      <h2 className={"pb-5 border-b border-gray-500 text-xl font-semibold"}>Más recientes</h2>
      <ul className={"flex flex-col gap-5"}>
        {services.map((service) => <ServiceItem key={service.id} {...service}/>)}
      </ul>
      <span className={"text-sm text-gray-700"}>* Se permite un máximo de 10 tarjetas por usuario.</span>
    </section>
  );
};
