import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Column, CreateDateColumn, Entity, Generated, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IUser } from "../interfaces/iuser.interface";

Entity('TB_USER_AUTHENTICATED')
@Schema()
export class UserAuthenticatedEntity {

    @Prop()
    @PrimaryGeneratedColumn({name: 'COD_USER_AUTHENTICATED', unsigned: true, primaryKeyConstraintName: 'PK_USER_AUTHENTICATED' })
    id: number;

    @Prop()
    @Generated('uuid')
    @Column({ name: 'TXT_UUID', unique: true })
    uuid: string;

    @Prop()
    @Column({ name: 'TXT_NAME' })
    name: string;

    @Prop()
    @Column({ name: 'TXT_TOKEN' })
    token: string;


    @Prop()
    @Column({ name: 'COD_USER' })
    userId: string;

    @Prop()    
    user: IUser;

    @Prop()
    @CreateDateColumn()
    @Column({ name: 'DAT_CREATED_AT' })
    createdAt: Date;
    
    @Prop()
    @UpdateDateColumn()
    @Column({ name: 'DAT_UPDATED_AT' })
    updatedAt: Date;
}

export const UserAuthenticatedSchema = SchemaFactory.createForClass(UserAuthenticatedEntity);