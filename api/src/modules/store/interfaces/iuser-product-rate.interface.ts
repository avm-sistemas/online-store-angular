import { IUser } from "src/modules/user/interfaces/iuser.interface";
import { ISellerProduct } from "./iseller-product.interface";
import { ISellerProductRate } from "./iseller-product-rate.interface";

export interface IUserProductRate {

    user: IUser;
    product: ISellerProduct,
    rate: ISellerProductRate
    
}