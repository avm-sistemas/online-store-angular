import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductImageController } from './seller-product-image.controller';

describe('SellerProductImageController', () => {
  let controller: SellerProductImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerProductImageController],
    }).compile();

    controller = module.get<SellerProductImageController>(SellerProductImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
