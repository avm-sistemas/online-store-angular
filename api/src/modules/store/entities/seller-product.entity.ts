import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Entity, PrimaryGeneratedColumn, Generated, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { SellerEntity } from "./seller.entity";
import { SellerProductCategoryEntity } from "./seller-product-category.entity";
import { SellerProductColorEntity } from "./seller-product-color.entity";

Entity('TB_SELLER_PRODUCT')
@Schema()
export class SellerProductEntity {

    @Prop()
    @PrimaryGeneratedColumn({name: 'COD_SELLER_PRODUCT', unsigned: true, primaryKeyConstraintName: 'PK_SELLER_PRODUCT' })
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
    category: SellerProductCategoryEntity;

    @Prop()
    @Column({ name: 'COD_CATEGORY' })
    categoryId: number;

    @Prop()
    @Column({ name: 'VAL_PRICE' })
    price: number;

    @Prop()
    @Column({ name: 'COD_DISCOUNT' })
    discountId: number;

    @Prop()
    @Column({ name: 'VAL_DISCOUNT' })
    discount: number;

    @Prop()
    @Column({ name: 'URL_IMAGE' })
    image: string;

    @Prop()
    @Column({ name: 'COD_COLOR' })
    colorId: number;

    @Prop()
    color: SellerProductColorEntity;

    @Prop()
    @Column({ name: 'TXT_DESCRIPTION' })
    description: string;

    @Prop()
    @CreateDateColumn()
    @Column({ name: 'DAT_CREATED_AT' })
    createdAt: Date;
    
    @Prop()
    @UpdateDateColumn()
    @Column({ name: 'DAT_UPDATED_AT' })
    updatedAt: Date;
 }

export const SellerProductSchema = SchemaFactory.createForClass(SellerProductEntity);