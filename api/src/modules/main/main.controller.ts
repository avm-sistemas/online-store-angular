import { Controller, Get, HttpStatus, Render, Res } from '@nestjs/common';
import { MainService } from './main.service';
import { IResponse } from '../shared/interfaces/iresponse.interface';

@Controller()
export class MainController {
  constructor(private readonly service: MainService) {}

  @Get()  
    async getHealth(@Res() response): Promise<IResponse> {
      try {
          const data = await this.service.getHealth();
          return response.status(HttpStatus.OK).json({
              success: true,
              message: 'Healthly!',
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
