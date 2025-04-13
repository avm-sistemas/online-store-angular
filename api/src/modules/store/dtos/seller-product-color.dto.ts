import { ApiProperty } from "@nestjs/swagger";
import { ISellerProductColor } from "../interfaces/iseller-product-color.interface";


export class SellerProductColorDto implements ISellerProductColor {

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

export class CreateSellerProductColorDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

export class UpdateSellerProductColorDto implements CreateSellerProductColorDto {

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

export class DeleteSellerProductColorDto implements SellerProductColorDto {

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