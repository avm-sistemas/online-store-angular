import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Column, CreateDateColumn, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SellerEntity } from "./seller.entity";

Entity('TB_SELLER_PRODUCT_CATEGORY')
@Schema()
export class SellerProductCategoryEntity {

    @Prop()
    @PrimaryGeneratedColumn({name: 'COD_SELLER_PRODUCT_CATEGORY', unsigned: true, primaryKeyConstraintName: 'PK_SELLER_PRODUCT_CATEGORY' })
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

export const SellerProductCategorySchema = SchemaFactory.createForClass(SellerProductCategoryEntity);