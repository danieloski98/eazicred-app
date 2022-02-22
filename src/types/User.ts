import { ISMELoans } from "./SMEloans";

export interface IUser {
  email: string;
  firstname: string;
  lastname: string;
  token: string;
  phone: string;
  id: string;
  SMEloans: ISMELoans[];
  paydayloans: any[];
}
