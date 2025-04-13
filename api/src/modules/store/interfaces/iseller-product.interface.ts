import { ISellerProductCategory } from "./iseller-product-category.interface";
import { ISellerProductColor } from "./iseller-product-color.interface";
import { ISeller } from "./iseller.interface";

export interface ISellerProduct {

    id: Number;

    uuid: string;

    title: string;

    category: ISellerProductCategory;

    categoryId: number;

    price: number;

    discountId: number;

    discount: number;

    image: string;

    colorId: number;

    color: ISellerProductColor;

    description: string;
    
    seller: ISeller;

    stock: number;

    freeShipping: boolean;

    createdAt: Date;
    
    updatedAt: Date;
 }
