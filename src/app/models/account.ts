import { Customer } from "./customer";

export interface Account {
    type:string,
    id:string,
    balance:number,
    createdAt:string,
    status:string,
    customerDTO:Customer
}
