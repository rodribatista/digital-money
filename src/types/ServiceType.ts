export type Service = {
  id: number,
  name: string,
  date: string,
  invoice_value?: number,
};

export enum ServiceType {
  RECENT, SEARCHED,
}

export type ServiceListType = {
  type: ServiceType,
  list: Service[]
};
