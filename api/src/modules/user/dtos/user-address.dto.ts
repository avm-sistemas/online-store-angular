import { ApiProperty } from "@nestjs/swagger";
import { IUserAddress } from "../interfaces/iuser-address.interface";
import { UserDto } from "./user.dto";

export class UserAddressDto implements IUserAddress {

    @ApiProperty()
    id: number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    street: string;

    @ApiProperty()
    identification: string;

    @ApiProperty()
    county: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    country: string;

    @ApiProperty()
    zipcode: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    user: UserDto;

    @ApiProperty()
    userId: number;

}

export class CreateUserAddressDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    street: string;

    @ApiProperty()
    identification: string;

    @ApiProperty()
    county: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    country: string;

    @ApiProperty()
    zipcode: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    user: UserDto;

    @ApiProperty()
    userId: number;

}

export class UpdateUserAddressDto implements UserAddressDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    street: string;

    @ApiProperty()
    identification: string;

    @ApiProperty()
    county: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    country: string;

    @ApiProperty()
    zipcode: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    user: UserDto;

    @ApiProperty()
    userId: number;    
}

export class DeleteUserAddressDto implements UserAddressDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    street: string;

    @ApiProperty()
    identification: string;
    
    @ApiProperty()
    county: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    country: string;

    @ApiProperty()
    zipcode: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    user: UserDto;

    @ApiProperty()
    userId: number;    
}