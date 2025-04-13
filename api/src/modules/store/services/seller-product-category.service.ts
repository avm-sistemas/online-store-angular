import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SellerProductCategoryEntity } from '../entities/seller-product-category.entity';
import { CreateSellerProductCategoryDto, UpdateSellerProductCategoryDto } from '../dtos/seller-product-category.dto';

@Injectable()
export class SellerProductCategoryService {
    constructor(@InjectModel('ProductCategory') private model: Model<SellerProductCategoryEntity>) { }
    
    async create(dto: CreateSellerProductCategoryDto): Promise<SellerProductCategoryEntity> {
        const model = await new this.model(dto);
        return model.save();
    }

    async update(id: string, dto: UpdateSellerProductCategoryDto): Promise<SellerProductCategoryEntity> {
        const existing = await this.model.findByIdAndUpdate(id, dto, { new: true });
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getAll(): Promise<SellerProductCategoryEntity[]> {
        const data = await this.model.find();
        if (!data || data.length == 0) {
            throw new NotFoundException('Data not found!');
        }
        return data;
    }

    async getById(id: string): Promise<SellerProductCategoryEntity> {
        const existing = await this.model.findById(id).exec();
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getByUuid(uuid: string): Promise<SellerProductCategoryEntity> {
        const existing = await this.model.findOne({
            where: { uuid: uuid }
        }).findById(uuid).exec();
        if (!existing) {
            throw new NotFoundException(`#${uuid} not found`);
        }
        return existing;
    }

    async delete(id: string): Promise<SellerProductCategoryEntity> {
        const deleted = await this.model.findByIdAndDelete(id);
        if (!deleted) {
            throw new NotFoundException(`#${id} not found`);
        }
        return deleted;
    }        
}
