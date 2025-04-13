import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { SellerService } from '../services/seller.service';
import { IResponse } from 'src/modules/shared/interfaces/iresponse.interface';
import { CreateSellerDto, DeleteUserDto, UpdateSellerDto } from '../dtos/seller.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Seller')
@Controller('seller')
export class SellerController {

    constructor(private readonly service: SellerService) {
    }

    @Get()
    async getAll(@Res() response): Promise<IResponse> {        
        try {
            const data = await this.service.getAll();
            return response.status(HttpStatus.OK).json({
                success: true,
                message: 'All data found successfully',
                error: null,
                data: data
            });
        } catch (err) {
            return response.status(err.status).json({
                    success: false,
                    message: 'Error occurred',
                    error: err.response,
                    data: null
            });
        }
    }

    @Get('/:id')
    async getById(@Res() response, @Param('id') id: string): Promise<IResponse> {        
        try {
            const data = await this.service.getById(id);
            return response.status(HttpStatus.OK).json({
                success: true,
                message: 'Data found successfully',
                error: null,
                data: data
            });
        } catch (err) {
            return response.status(err.status).json({
                    success: false,
                    message: 'Error occurred',
                    error: err.response,
                    data: null
            });
        }
    }

    @Get('/:uuid')
    async getByUuid(@Res() response, @Param('uuid') uuid: string): Promise<IResponse> {        
        try {
            const data = await this.service.getByUuid(uuid);
            return response.status(HttpStatus.OK).json({
                success: true,
                message: 'Data found successfully',
                error: null,
                data: data
            });
        } catch (err) {
            return response.status(err.status).json({
                    success: false,
                    message: 'Error occurred',
                    error: err.response,
                    data: null
            });
        }
    }

    @Post()
    async create(@Res() response, @Body() dto: CreateSellerDto): Promise<IResponse> { 
        try {
            const data = await this.service.create(dto);
            return response.status(HttpStatus.OK).json({
                success: true,
                message: 'Created successfully',
                error: null,
                data: data
            });
        } catch (err) {
            return response.status(err.status).json({
                    success: false,
                    message: 'Error occurred',
                    error: err.response,
                    data: null
            });
        }
    }

    @Put()
    async update(@Res() response, @Body() dto: UpdateSellerDto): Promise<IResponse> {        
        try {
            const data = await this.service.update(dto.id.toString(), dto);
            return response.status(HttpStatus.OK).json({
                success: true,
                message: 'Updated successfully',
                error: null,
                data: data
            });
        } catch (err) {
            return response.status(err.status).json({
                    success: false,
                    message: 'Error occurred',
                    error: err.response,
                    data: null
            });
        }
    }

    @Delete()
    async delete(@Res() response, @Body() dto: DeleteUserDto): Promise<IResponse> {        
        try {
            const data = await this.service.delete(dto.id.toString());
            return response.status(HttpStatus.OK).json({
                success: true,
                message: 'Deleted successfully',
                error: null,
                data: data
            });
        } catch (err) {
            return response.status(err.status).json({
                    success: false,
                    message: 'Error occurred',
                    error: err.response,
                    data: null
            });
        }

    }    
}
