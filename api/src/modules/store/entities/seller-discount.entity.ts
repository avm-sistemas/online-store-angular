import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Column, CreateDateColumn, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SellerEntity } from "./seller.entity";
import { SellerDiscountTypeEntity } from "./seller-discount-type.entity";

Entity('TB_SELLER_DISCOUNT')
@Schema()
export class SellerDiscountEntity {

    @Prop()
    @PrimaryGeneratedColumn({name: 'COD_COLOR', unsigned: true, primaryKeyConstraintName: 'PK_COLOR' })
    id: Number;

    @Prop()
    @Generated('uuid')
    @Column({ name: 'TXT_UUID', unique: true })
    uuid: string;

    @Prop()
    seller: SellerEntity;

    @Prop()
    @Column({ name: 'TXT_TITLE' })
    title: string;

    @Prop()
    @Column({ name: 'TXT_CONTENT' })
    content: string;

    @Prop()
    @Column({ name: 'TXT_DESCRIPTION' })
    description: string;

    @Prop()
    discountType: SellerDiscountTypeEntity;

    @Prop()
    @Column({ name: 'COD_DISCOUNT_TYPE' })
    discountTypeId: number;

    @Prop()
    @Column({ name: 'VAL_VALUE' })
    value: number;

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

export const SellerDiscountSchema = SchemaFactory.createForClass(SellerDiscountEntity);