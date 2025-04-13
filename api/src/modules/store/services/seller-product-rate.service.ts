import { Injectable, NotFoundException } from '@nestjs/common';
import { SellerProductRateEntity } from '../entities/seller-product-rate.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSellerProductRateDto, UpdateSellerProductRateDto } from '../dtos/seller-product-rate.dto';

@Injectable()
export class SellerProductRateService {
    constructor(@InjectModel('ProductRate') private model: Model<SellerProductRateEntity>) { }
    
    async create(dto: CreateSellerProductRateDto): Promise<SellerProductRateEntity> {
        const model = await new this.model(dto);
        return model.save();
    }

    async update(id: string, dto: UpdateSellerProductRateDto): Promise<SellerProductRateEntity> {
        const existing = await this.model.findByIdAndUpdate(id, dto, { new: true });
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getAll(): Promise<SellerProductRateEntity[]> {
        const data = await this.model.find();
        if (!data || data.length == 0) {
            throw new NotFoundException('Data not found!');
        }
        return data;
    }

    async getById(id: string): Promise<SellerProductRateEntity> {
        const existing = await this.model.findById(id).exec();
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getByUuid(uuid: string): Promise<SellerProductRateEntity> {
        const existing = await this.model.findOne({
            where: { uuid: uuid }
        }).findById(uuid).exec();
        if (!existing) {
            throw new NotFoundException(`#${uuid} not found`);
        }
        return existing;
    }

    async delete(id: string): Promise<SellerProductRateEntity> {
        const deleted = await this.model.findByIdAndDelete(id);
        if (!deleted) {
            throw new NotFoundException(`#${id} not found`);
        }
        return deleted;
    }       
}
