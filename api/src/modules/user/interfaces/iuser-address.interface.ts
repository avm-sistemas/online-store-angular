import { IUser } from "./iuser.interface";

export interface IUserAddress {
    id: number;

    uuid: string;

    title: string;

    street: string;

    identification: string;

    county: string;

    state: string;

    country: string;

    zipcode: string;

    createdAt: Date;
    
    updatedAt: Date;

    user: IUser;
  
    userId: number;
}