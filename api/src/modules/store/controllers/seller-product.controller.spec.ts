import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductController } from './seller-product.controller';

describe('SellerProductController', () => {
  let controller: SellerProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerProductController],
    }).compile();

    controller = module.get<SellerProductController>(SellerProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
