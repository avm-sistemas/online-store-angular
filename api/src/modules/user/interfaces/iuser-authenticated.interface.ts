import { IUser } from "./iuser.interface";

export interface IUserAuthenticated {
    id: number;

    uuid: string;

    name: string;

    token: string;

    user: IUser;

    userId: number;    

    createdAt: Date;
    
    updatedAt: Date;    
}