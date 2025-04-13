import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductRateController } from './seller-product-rate.controller';

describe('SellerProductRateController', () => {
  let controller: SellerProductRateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerProductRateController],
    }).compile();

    controller = module.get<SellerProductRateController>(SellerProductRateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
