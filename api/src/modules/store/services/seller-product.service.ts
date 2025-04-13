import { Injectable, NotFoundException } from '@nestjs/common';
import { SellerProductEntity } from '../entities/seller-product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSellerProductDto, UpdateSellerProductDto } from '../dtos/seller-product.dto';

@Injectable()
export class SellerProductService {
    constructor(@InjectModel('Product') private model: Model<SellerProductEntity>) { }
    
    async create(dto: CreateSellerProductDto): Promise<SellerProductEntity> {
        const model = await new this.model(dto);
        return model.save();
    }

    async update(id: string, dto: UpdateSellerProductDto): Promise<SellerProductEntity> {
        const existing = await this.model.findByIdAndUpdate(id, dto, { new: true });
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getAll(): Promise<SellerProductEntity[]> {
        const data = await this.model.find();
        if (!data || data.length == 0) {
            throw new NotFoundException('Data not found!');
        }
        return data;
    }

    async getById(id: string): Promise<SellerProductEntity> {
        const existing = await this.model.findById(id).exec();
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getByUuid(uuid: string): Promise<SellerProductEntity> {
        const existing = await this.model.findOne({
            where: { uuid: uuid }
        }).findById(uuid).exec();
        if (!existing) {
            throw new NotFoundException(`#${uuid} not found`);
        }
        return existing;
    }

    async delete(id: string): Promise<SellerProductEntity> {
        const deleted = await this.model.findByIdAndDelete(id);
        if (!deleted) {
            throw new NotFoundException(`#${id} not found`);
        }
        return deleted;
    }       
}
