import { ApiProperty } from "@nestjs/swagger";
import { ISellerProductCategory } from "../interfaces/iseller-product-category.interface";


export class SellerProductCategoryDto implements ISellerProductCategory {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}

export class CreateSellerProductCategoryDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;


}

export class UpdateSellerProductCategoryDto implements CreateSellerProductCategoryDto {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;


}

export class DeleteSellerProductCategoryDto implements SellerProductCategoryDto {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
  
}