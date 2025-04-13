import { ApiProperty } from "@nestjs/swagger";
import { ISeller } from "../interfaces/iseller.interface";
import { ISellerDiscountType } from "../interfaces/iseller-discount-type.interface";

export class SellerDiscountTypeDto implements ISellerDiscountType {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    isPercentual: boolean;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    seller: ISeller;

}

export class CreateSellerDiscountTypeDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    isPercentual: boolean;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;
    
    @ApiProperty()
    updatedAt: Date;

}

export class UpdateSellerDiscountTypeDto implements CreateSellerDiscountTypeDto {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    isPercentual: boolean;
}

export class DeleteSellerDiscountTypeDto implements SellerDiscountTypeDto {
    
    @ApiProperty()
    seller: ISeller;

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    isPercentual: boolean;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;
    
    @ApiProperty()
    updatedAt: Date;

}