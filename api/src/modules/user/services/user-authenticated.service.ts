import { Injectable, NotFoundException } from '@nestjs/common';
import { UserAuthenticatedEntity } from '../entities/user-authenticate.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserAuthenticatedDto, UpdateUserAuthenticatedDto } from '../dtos/user-authenticated.dto';

@Injectable()
export class UserAuthenticatedService {
    constructor(@InjectModel('UserAuthenticated') private model: Model<UserAuthenticatedEntity>) { }
    
    async create(dto: CreateUserAuthenticatedDto): Promise<UserAuthenticatedEntity> {
        const model = await new this.model(dto);
        return model.save();
    }

    async update(id: string, dto: UpdateUserAuthenticatedDto): Promise<UserAuthenticatedEntity> {
        const existing = await this.model.findByIdAndUpdate(id, dto, { new: true });
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getAll(): Promise<UserAuthenticatedEntity[]> {
        const data = await this.model.find();
        if (!data || data.length == 0) {
            throw new NotFoundException('Data not found!');
        }
        return data;
    }

    async getById(id: string): Promise<UserAuthenticatedEntity> {
        const existing = await this.model.findById(id).exec();
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getByUuid(uuid: string): Promise<UserAuthenticatedEntity> {
        const existing = await this.model.findOne({
            where: { uuid: uuid }
        }).findById(uuid).exec();
        if (!existing) {
            throw new NotFoundException(`#${uuid} not found`);
        }
        return existing;
    }

    async delete(id: string): Promise<UserAuthenticatedEntity> {
        const deleted = await this.model.findByIdAndDelete(id);
        if (!deleted) {
            throw new NotFoundException(`#${id} not found`);
        }
        return deleted;
    }    
}    
