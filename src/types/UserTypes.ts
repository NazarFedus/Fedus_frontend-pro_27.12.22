export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  geo: TGeo;
}

type TAddress = Record<"street" | "suite" | "city" | "zipcode", string>;
type TGeo = Record<"lat" | "lng", string>;
