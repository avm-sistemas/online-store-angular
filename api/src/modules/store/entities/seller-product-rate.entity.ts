import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Column, CreateDateColumn, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

Entity('TB_SELLER_PRODUCT_RATE')
@Schema()
export class SellerProductRateEntity {

    @Prop()
    @PrimaryGeneratedColumn({name: 'COD_SELLER_PRODUCT_RATE', unsigned: true, primaryKeyConstraintName: 'PK_SELLER_PRODUCT_RATE' })
    id: Number;

    @Prop()
    @Generated('uuid')
    @Column({ name: 'TXT_UUID', unique: true })
    uuid: string;

    @Prop()
    @Column({ name: 'TXT_TITLE' })
    title: string;

    @Prop()
    @Column({ name: 'VAL_REAL_VALUE' })
    value: boolean;

    @Prop()
    @Column({ name: 'BIT_ACTIVE' })
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

export const SellerProductRateSchema = SchemaFactory.createForClass(SellerProductRateEntity);