import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Column, CreateDateColumn, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

Entity('TB_USER_ADDRESS')
@Schema()
export class UserAddressEntity {

    @Prop()
    @PrimaryGeneratedColumn({name: 'COD_USER_ADDRESS', unsigned: true, primaryKeyConstraintName: 'PK_ADDRESS' })
    id: number;

    @Prop()
    @Generated('uuid')
    @Column({ name: 'TXT_UUID', unique: true })
    uuid: string;

    @Prop()
    @Column({ name: 'TXT_TITLE' })
    title: string;

    @Prop()
    @Column({ name: 'TXT_STREET' })
    street: string;

    @Prop()
    @Column({ name: 'TXT_IDENTIFICATION' })
    identification: string;

    @Prop()
    @Column({ name: 'TXT_COUNTY' })
    county: string;

    @Prop()
    @Column({ name: 'TXT_STATE' })
    state: string;

    @Prop()
    @Column({ name: 'TXT_COUNTRY' })
    country: string;

    @Prop()
    @Column({ name: 'TXT_ZIPCODE' })
    zipcode: string;

    @Prop()
    @CreateDateColumn()
    @Column({ name: 'DAT_CREATED_AT' })
    createdAt: Date;
    
    @Prop()
    @UpdateDateColumn()
    @Column({ name: 'DAT_UPDATED_AT' })
    updatedAt: Date;

    @ManyToOne(() => UserEntity, userList => userList.id)
    user: UserEntity;
  
    @Column()
    userId: number;    

}

export const UserAddressSchema = SchemaFactory.createForClass(UserAddressEntity);