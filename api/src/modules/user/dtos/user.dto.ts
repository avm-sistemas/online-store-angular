import { ApiProperty } from "@nestjs/swagger";
import { IUser } from "../interfaces/iuser.interface";
import { IUserAddress } from "../interfaces/iuser-address.interface";

export class UserDto implements IUser {

    @ApiProperty()    
    id: number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    userAddresses: IUserAddress[];
}

export class CreateUserDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    userAddresses: IUserAddress[];

}

export class UpdateUserDto implements UserDto {

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    id: number;

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

    @ApiProperty()
    userAddresses: IUserAddress[];
}

export class DeleteUserDto implements UserDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    userAddresses: IUserAddress[];    
}
