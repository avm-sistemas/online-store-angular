import { IUser } from "src/modules/user/interfaces/iuser.interface";
import { ISellerProductRate } from "../interfaces/iseller-product-rate.interface";
import { ISellerProduct } from "../interfaces/iseller-product.interface";
import { IUserProductRate } from "../interfaces/iuser-product-rate.interface";
import { ApiProperty } from "@nestjs/swagger";


export class UserProductRateDto implements IUserProductRate {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    //

    @ApiProperty()
    user: IUser;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    product: ISellerProduct;

    @ApiProperty()
    productId: number;

    @ApiProperty()
    rate: ISellerProductRate;

    @ApiProperty()
    rateId: number;
}

export class CreateUserProductRateDto {

    @ApiProperty()
    user: IUser;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    product: ISellerProduct;

    @ApiProperty()
    productId: number;

    @ApiProperty()
    rate: ISellerProductRate;

    @ApiProperty()
    rateId: number;
}

export class UpdateUserProductRateDto implements CreateUserProductRateDto {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    //
    
    @ApiProperty()
    user: IUser;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    product: ISellerProduct;

    @ApiProperty()
    productId: number;

    @ApiProperty()
    rate: ISellerProductRate;

    @ApiProperty()
    rateId: number;    

}

export class DeleteUserProductRateDto implements UserProductRateDto {

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    //
    
    @ApiProperty()
    user: IUser;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    product: ISellerProduct;

    @ApiProperty()
    productId: number;

    @ApiProperty()
    rate: ISellerProductRate;

    @ApiProperty()
    rateId: number;
  
}