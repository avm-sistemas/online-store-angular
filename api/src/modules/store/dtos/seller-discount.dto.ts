import { ApiProperty } from "@nestjs/swagger";
import { ISeller } from "../interfaces/iseller.interface";
import { ISellerDiscountType } from "../interfaces/iseller-discount-type.interface";
import { ISellerDiscount } from "../interfaces/iseller-discount.interface";

export class SellerDiscountDto implements ISellerDiscount {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    discountType: ISellerDiscountType;

    @ApiProperty()
    discountTypeId: number;

    @ApiProperty()
    value: number;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    seller: ISeller;
}

export class CreateSellerDiscountDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    discountTypeId: number;

    @ApiProperty()
    value: number;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}

export class UpdateSellerDiscountDto implements CreateSellerDiscountDto {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    discountType: ISellerDiscountType;

    @ApiProperty()
    discountTypeId: number;

    @ApiProperty()
    value: number;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    seller: ISeller;    

}

export class DeleteSellerDiscountDto implements SellerDiscountDto {
    
    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    discountType: ISellerDiscountType;

    @ApiProperty()
    discountTypeId: number;

    @ApiProperty()
    value: number;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    seller: ISeller;

}