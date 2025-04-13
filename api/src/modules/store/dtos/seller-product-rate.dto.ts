import { ApiProperty } from "@nestjs/swagger";
import { ISellerProductRate } from "../interfaces/iseller-product-rate.interface";


export class SellerProductRateDto implements ISellerProductRate {
    
    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    value: boolean;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}

export class CreateSellerProductRateDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    value: boolean;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;    

}

export class UpdateSellerProductRateDto implements CreateSellerProductRateDto {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    value: boolean;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;    

}

export class DeleteSellerProductRateDto implements SellerProductRateDto {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    value: boolean;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;    
  
}