import { ApiProperty } from "@nestjs/swagger";
import { ISeller } from "../interfaces/iseller.interface";
import { ISellerProduct } from "../interfaces/iseller-product.interface";
import { ISellerProductCategory } from "../interfaces/iseller-product-category.interface";
import { ISellerProductColor } from "../interfaces/iseller-product-color.interface";

export class SellerProductDto implements ISellerProduct {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    category: ISellerProductCategory;

    @ApiProperty()
    categoryId: number;

    @ApiProperty()
    price: number;

    @ApiProperty()
    discountId: number;

    @ApiProperty()
    discount: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    colorId: number;

    @ApiProperty()
    color: ISellerProductColor;

    @ApiProperty()
    description: string;

    @ApiProperty()
    seller: ISeller;

    @ApiProperty()
    stock: number;

    @ApiProperty()
    freeShipping: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}

export class CreateSellerProductDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    category: ISellerProductCategory;

    @ApiProperty()
    categoryId: number;

    @ApiProperty()
    price: number;

    @ApiProperty()
    discountId: number;

    @ApiProperty()
    discount: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    colorId: number;

    @ApiProperty()
    color: ISellerProductColor;

    @ApiProperty()
    description: string;

    @ApiProperty()
    seller: ISeller;

    @ApiProperty()
    stock: number;

    @ApiProperty()
    freeShipping: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}

export class UpdateSellerProductDto implements CreateSellerProductDto {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    category: ISellerProductCategory;

    @ApiProperty()
    categoryId: number;

    @ApiProperty()
    price: number;

    @ApiProperty()
    discountId: number;

    @ApiProperty()
    discount: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    colorId: number;

    @ApiProperty()
    color: ISellerProductColor;

    @ApiProperty()
    description: string;

    @ApiProperty()
    seller: ISeller;

    @ApiProperty()
    stock: number;

    @ApiProperty()
    freeShipping: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}

export class DeleteSellerProductDto implements SellerProductDto {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    category: ISellerProductCategory;

    @ApiProperty()
    categoryId: number;

    @ApiProperty()
    price: number;

    @ApiProperty()
    discountId: number;

    @ApiProperty()
    discount: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    colorId: number;

    @ApiProperty()
    color: ISellerProductColor;

    @ApiProperty()
    description: string;

    @ApiProperty()
    seller: ISeller;

    @ApiProperty()
    stock: number;

    @ApiProperty()
    freeShipping: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
  
}