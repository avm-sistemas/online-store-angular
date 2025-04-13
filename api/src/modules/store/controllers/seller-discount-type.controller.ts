import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { IResponse } from 'src/modules/shared/interfaces/iresponse.interface';
import { CreateSellerDiscountTypeDto, DeleteSellerDiscountTypeDto, UpdateSellerDiscountTypeDto } from '../dtos/seller-discount-type.dto';
import { SellerDiscountTypeService } from '../services/seller-discount-type.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Discount Type')
@Controller('seller-discount-type')
export class SellerDiscountTypeController {
    constructor(private readonly service: SellerDiscountTypeService) {
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
    async create(@Res() response, @Body() dto: CreateSellerDiscountTypeDto): Promise<IResponse> { 
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
    async update(@Res() response, @Body() dto: UpdateSellerDiscountTypeDto): Promise<IResponse> {        
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
    async delete(@Res() response, @Body() dto: DeleteSellerDiscountTypeDto): Promise<IResponse> {        
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
