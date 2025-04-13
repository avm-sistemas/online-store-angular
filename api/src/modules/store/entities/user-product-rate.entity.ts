import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserEntity } from "src/modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SellerProductEntity } from "./seller-product.entity";
import { SellerProductRateEntity } from "./seller-product-rate.entity";

Entity('TB_USER_PRODUCT_RATE')
@Schema()
export class UserProductRateEntity {


    /* 
     * USER ID
     */
    @Prop()    
    @Column({ name: 'COD_USER', nullable: false })
    userId: Number;

    /* 
     * USER
     */
    user: UserEntity;

    /* 
     * RATE ID
     */
    @Prop()
    @Column({ name: 'COD_PRODUCT_RATE', nullable: false })
    rateId: Number;

    /* 
     * RATE
     */
    rate: SellerProductRateEntity;

    /* 
     * PRODUCT ID
     */
    @Prop()    
    @Column({ name: 'COD_PRODUCT', nullable: false })
    productId: Number;

    /* 
     * PRODUCT
     */
    product: SellerProductEntity;

    /* 
     * REAL VALUE => USER PRODUCT RATE
     */
    @Prop()
    @Column({ name: 'VAL_VALUE', nullable: false })
    value: number;

    /* 
     * CREATED DATE
     */
    @Prop()
    @CreateDateColumn()
    @Column({ name: 'DAT_CREATED_AT' })
    createdAt: Date;
    
    /* 
     * UPDATED DATE
     */
    @Prop()
    @UpdateDateColumn()
    @Column({ name: 'DAT_UPDATED_AT' })
    updatedAt: Date;
}

export const UserProductRateSchema = SchemaFactory.createForClass(UserProductRateEntity);

/* 
 * UNIQUE INDEX 'UK_USER_PRODUCT_RATE' IS A DEFINITION RULE
 */
UserProductRateSchema.index({ userId: 1, productId: 1, rateId: 1 }, { unique: true, name: 'UK_USER_PRODUCT_RATE' });
