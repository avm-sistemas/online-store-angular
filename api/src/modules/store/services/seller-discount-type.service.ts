import { Injectable, NotFoundException } from '@nestjs/common';
import { SellerDiscountTypeEntity } from '../entities/seller-discount-type.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSellerDiscountTypeDto, UpdateSellerDiscountTypeDto } from '../dtos/seller-discount-type.dto';

@Injectable()
export class SellerDiscountTypeService {
    constructor(@InjectModel('DiscountType') private model: Model<SellerDiscountTypeEntity>) { }
    
    async create(dto: CreateSellerDiscountTypeDto): Promise<SellerDiscountTypeEntity> {
        const model = await new this.model(dto);
        return model.save();
    }

    async update(id: string, dto: UpdateSellerDiscountTypeDto): Promise<SellerDiscountTypeEntity> {
        const existing = await this.model.findByIdAndUpdate(id, dto, { new: true });
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getAll(): Promise<SellerDiscountTypeEntity[]> {
        const data = await this.model.find();
        if (!data || data.length == 0) {
            throw new NotFoundException('Data not found!');
        }
        return data;
    }

    async getById(id: string): Promise<SellerDiscountTypeEntity> {
        const existing = await this.model.findById(id).exec();
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getByUuid(uuid: string): Promise<SellerDiscountTypeEntity> {
        const existing = await this.model.findOne({
            where: { uuid: uuid }
        }).findById(uuid).exec();
        if (!existing) {
            throw new NotFoundException(`#${uuid} not found`);
        }
        return existing;
    }

    async delete(id: string): Promise<SellerDiscountTypeEntity> {
        const deleted = await this.model.findByIdAndDelete(id);
        if (!deleted) {
            throw new NotFoundException(`#${id} not found`);
        }
        return deleted;
    }    
}
