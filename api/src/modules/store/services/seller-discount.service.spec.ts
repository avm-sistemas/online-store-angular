import { Test, TestingModule } from '@nestjs/testing';
import { SellerDiscountService } from './seller-discount.service';

describe('SellerDiscountService', () => {
  let service: SellerDiscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerDiscountService],
    }).compile();

    service = module.get<SellerDiscountService>(SellerDiscountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
