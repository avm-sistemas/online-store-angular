import { ISeller } from "./iseller.interface";

export interface ISellerDiscountType {

    id: Number;

    uuid: string;

    title: string;

    description: string;

    isPercentual: boolean;

    active: boolean;

    createdAt: Date;
    
    updatedAt: Date;

    seller: ISeller;
}