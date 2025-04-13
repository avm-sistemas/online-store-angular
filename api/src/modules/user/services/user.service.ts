import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserLogin } from '../interfaces/iuser.interface';
import { UserAuthenticatedService } from './user-authenticated.service';
import { CreateUserAuthenticatedDto } from '../dtos/user-authenticated.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private model: Model<UserEntity>,
                private readonly authService: UserAuthenticatedService) { }

    async login(dto: IUserLogin): Promise<UserEntity> {
        const existing = await this.model.findOne({
            where: { username: dto.username, password: dto.password }
        }).exec();        
        if (!existing) {
            throw new NotFoundException(`#${dto.username} not found`);
        } else {
            try {

                var authenticated = new CreateUserAuthenticatedDto();
                authenticated.name = existing.name;
                authenticated.userId = existing.id;                        
                authenticated.token = 'TOKEN';
                var userAuthed = await this.authService.create(authenticated);
                console.log('authenticated', (userAuthed.id > 0 ? 'yes' : 'false'));

            } catch (error) {
                
            }
        }
        return existing;
    }



    // CRUD

    async create(dto: CreateUserDto): Promise<UserEntity> {
        const model = await new this.model(dto);
        return model.save();
    }

    async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
        const existing = await this.model.findByIdAndUpdate(id, dto, { new: true });
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getAll(): Promise<UserEntity[]> {
        const data = await this.model.find();
        if (!data || data.length == 0) {
            throw new NotFoundException('Data not found!');
        }
        return data;
    }

    async getById(id: string): Promise<UserEntity> {
        const existing = await this.model.findById(id).exec();
        if (!existing) {
            throw new NotFoundException(`#${id} not found`);
        }
        return existing;
    }

    async getByUuid(uuid: string): Promise<UserEntity> {
        const existing = await this.model.findOne({
            where: { uuid: uuid }
        }).findById(uuid).exec();
        if (!existing) {
            throw new NotFoundException(`#${uuid} not found`);
        }
        return existing;
    }

    async delete(id: string): Promise<UserEntity> {
        const deleted = await this.model.findByIdAndDelete(id);
        if (!deleted) {
            throw new NotFoundException(`#${id} not found`);
        }
        return deleted;
    }    
}
