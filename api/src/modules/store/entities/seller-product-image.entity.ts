import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Column, CreateDateColumn, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

Entity('TB_SELLER_PRODUCT_IMAGE')
@Schema()
export class SellerProductImageEntity {

    @Prop()
    @PrimaryGeneratedColumn({name: 'COD_SELLER_PRODUCT_IMAGE', unsigned: true, primaryKeyConstraintName: 'PK_SELLER_PRODUCT_IMAGE' })
    id: Number;

    @Prop()
    @Generated('uuid')
    @Column({ name: 'TXT_UUID', unique: true })
    uuid: string;

    @Prop()
    @Column({ name: 'TXT_TITLE' })
    title: string;

    @Prop()
    @Column({ name: 'TXT_CONTENT' })
    content: string;

    @Prop()
    @Column({ name: 'URL_RESOURCE' })
    url: string;

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

export const SellerProductImageSchema = SchemaFactory.createForClass(SellerProductImageEntity);