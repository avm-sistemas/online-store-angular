import { ApiProperty } from "@nestjs/swagger";
import { IUserAuthenticated } from "../interfaces/iuser-authenticated.interface";
import { IUser } from "../interfaces/iuser.interface";

export class UserAuthenticatedDto implements IUserAuthenticated {

    @ApiProperty()
    id: number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    token: string;

    @ApiProperty()
    user: IUser;

    @ApiProperty()
    userId: number;    

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

export class CreateUserAuthenticatedDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    token: string;

    @ApiProperty()
    user: IUser;

    @ApiProperty()
    userId: number;    

    createdAt: Date;
    
    updatedAt: Date;
}

export class UpdateUserAuthenticatedDto implements CreateUserAuthenticatedDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    token: string;
    
    user: IUser;

    @ApiProperty()
    userId: number;    

    createdAt: Date;

    updatedAt: Date;

}

export class DeleteUserAuthenticatedDto implements UpdateUserAuthenticatedDto {

    @ApiProperty()    
    id: number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    token: string;

    @ApiProperty()
    user: IUser;

    @ApiProperty()
    userId: number;    

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}