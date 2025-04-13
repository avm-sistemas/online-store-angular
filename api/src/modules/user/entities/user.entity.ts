import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Column, CreateDateColumn, Entity, Generated, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserAddressEntity } from "./user-address.entity";

Entity('TB_USER')
@Schema()
export class UserEntity {

    @Prop()
    @PrimaryGeneratedColumn({name: 'COD_USER', unsigned: true, primaryKeyConstraintName: 'PK_USER' })
    id: number;

    @Prop()
    @Generated('uuid')
    @Column({ name: 'TXT_UUID', unique: true })
    uuid: string;

    @Prop()
    @Column({ name: 'TXT_NAME' })
    name: string;

    @Prop()
    @Column({ name: 'BIT_ACTIVE', default: true })
    active: boolean;

    @Prop()
    @CreateDateColumn()
    @Column({ name: 'DAT_CREATED_AT' })
    createdAt: Date;
    
    @Prop()
    @UpdateDateColumn()
    @Column({ name: 'DAT_UPDATED_AT' })
    updatedAt: Date;

    @OneToMany(() => UserAddressEntity, userAddress => userAddress)
    addresses: UserAddressEntity[];

}

export const UserSchema = SchemaFactory.createForClass(UserEntity);