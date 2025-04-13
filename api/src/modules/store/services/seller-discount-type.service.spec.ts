import { Test, TestingModule } from '@nestjs/testing';
import { SellerDiscountTypeService } from './seller-discount-type.service';

describe('SellerDiscountTypeService', () => {
  let service: SellerDiscountTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerDiscountTypeService],
    }).compile();

    service = module.get<SellerDiscountTypeService>(SellerDiscountTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
