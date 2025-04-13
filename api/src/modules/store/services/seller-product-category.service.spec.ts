import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductCategoryService } from './seller-product-category.service';

describe('SellerProductCategoryService', () => {
  let service: SellerProductCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerProductCategoryService],
    }).compile();

    service = module.get<SellerProductCategoryService>(SellerProductCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
