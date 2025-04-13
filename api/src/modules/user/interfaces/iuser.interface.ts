import { IUserAddress } from "./iuser-address.interface";

export interface IUser {
    id: number;

    uuid: string;

    name: string;

    username: string;

    password: string;

    active: boolean;

    createdAt: Date;
    
    updatedAt: Date;

    userAddresses: IUserAddress[];
}

export interface IUserLogin {

    username: string;

    password: string;
}