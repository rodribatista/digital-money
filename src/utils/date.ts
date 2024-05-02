interface DateHandler {
  [key: string]: string;
}

const Weekday: DateHandler = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
}

const Month: DateHandler = {
  0: "Enero",
  1: "Febrero",
  2: "Marzo",
  3: "Abril",
  4: "Mayo",
  5: "Junio",
  6: "Julio",
  7: "Agosto",
  8: "Septiembre",
  9: "Octubre",
  10: "Noviembre",
  11: "Diciembre",
}

export const getShortDate = (date: Date): string => {
  return `${date.getDate()} ${Month[date.getMonth()]} ${date.getFullYear()}`
};

export const getFullDate = (date: Date): string => {
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `
    ${Weekday[date.getDay()]}, ${date.getDate()} ${Month[date.getMonth()]} ${date.getFullYear()} ${hours}:${minutes}`;
};
