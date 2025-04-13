import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductRateService } from './seller-product-rate.service';

describe('SellerProductRateService', () => {
  let service: SellerProductRateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerProductRateService],
    }).compile();

    service = module.get<SellerProductRateService>(SellerProductRateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
