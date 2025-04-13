import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Entity, PrimaryGeneratedColumn, Generated, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

Entity('TB_SELLER')
@Schema()
export class SellerEntity {

    @Prop()
    @PrimaryGeneratedColumn({name: 'COD_SELLER', unsigned: true, primaryKeyConstraintName: 'PK_SELLER' })
    id: Number;

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

}

export const SellerSchema = SchemaFactory.createForClass(SellerEntity);