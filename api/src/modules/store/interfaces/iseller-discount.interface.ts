import { ISellerDiscountType } from "./iseller-discount-type.interface";
import { ISeller } from "./iseller.interface";

export interface ISellerDiscount {

    id: Number;

    uuid: string;

    title: string;

    content: string;

    description: string;

    discountType: ISellerDiscountType;

    discountTypeId: number;

    value: number;

    active: boolean;

    createdAt: Date;
    
    updatedAt: Date;

    seller: ISeller;
}