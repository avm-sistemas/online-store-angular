import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductService } from './seller-product.service';

describe('SellerProductService', () => {
  let service: SellerProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerProductService],
    }).compile();

    service = module.get<SellerProductService>(SellerProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
