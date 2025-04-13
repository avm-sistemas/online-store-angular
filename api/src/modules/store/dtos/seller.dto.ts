import { ApiProperty } from "@nestjs/swagger";
import { ISeller } from "../interfaces/iseller.interface";
import { IUserAddress } from "src/modules/user/interfaces/iuser-address.interface";

export class SellerDto implements ISeller {
    
    username: string;
    password: string;

    @ApiProperty()
    rating: number;

    @ApiProperty()
    contact: string;

    @ApiProperty()
    location: string;

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    userAddresses: IUserAddress[];
}

export class CreateSellerDto {

    @ApiProperty()
    rating: number;

    @ApiProperty()
    contact: string;

    @ApiProperty()
    location: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    userAddresses?: IUserAddress[];
}

export class UpdateSellerDto implements CreateSellerDto {

    @ApiProperty()
    rating: number;

    @ApiProperty()
    contact: string;

    @ApiProperty()
    location: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
    
    userAddresses: IUserAddress[];

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;
}

export class DeleteUserDto implements SellerDto {

    username: string;
    password: string;

    @ApiProperty()
    rating: number;

    @ApiProperty()
    contact: string;

    @ApiProperty()
    location: string;

    @ApiProperty()
    id: Number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    userAddresses: IUserAddress[];    
}