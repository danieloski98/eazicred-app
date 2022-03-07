import { IPaydayloan } from "./Paydayloans";
import { ISMELoans } from "./SMEloans";

export interface IUser {
  email: string;
  firstname: string;
  lastname: string;
  token: string;
  phone: string;
  id: string;
  smeloans: ISMELoans[];
  paydayloans: IPaydayloan[];
}
