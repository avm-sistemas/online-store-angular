import { Test, TestingModule } from '@nestjs/testing';
import { SellerDiscountController } from './seller-discount.controller';

describe('SellerDiscountController', () => {
  let controller: SellerDiscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerDiscountController],
    }).compile();

    controller = module.get<SellerDiscountController>(SellerDiscountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
