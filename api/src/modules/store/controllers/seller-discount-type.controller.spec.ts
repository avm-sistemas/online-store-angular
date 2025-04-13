import { Test, TestingModule } from '@nestjs/testing';
import { SellerDiscountTypeController } from './seller-discount-type.controller';

describe('SellerDiscountTypeController', () => {
  let controller: SellerDiscountTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerDiscountTypeController],
    }).compile();

    controller = module.get<SellerDiscountTypeController>(SellerDiscountTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
