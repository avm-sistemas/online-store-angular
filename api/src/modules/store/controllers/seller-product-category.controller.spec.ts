import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductCategoryController } from './seller-product-category.controller';

describe('SellerProductCategoryController', () => {
  let controller: SellerProductCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerProductCategoryController],
    }).compile();

    controller = module.get<SellerProductCategoryController>(SellerProductCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
