import { IUser } from "src/modules/user/interfaces/iuser.interface";

export interface ISeller extends IUser {

    rating: number;

    contact: string;

    location: string;
}
