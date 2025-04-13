import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductColorController } from './seller-product-color.controller';

describe('SellerProductColorController', () => {
  let controller: SellerProductColorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerProductColorController],
    }).compile();

    controller = module.get<SellerProductColorController>(SellerProductColorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
