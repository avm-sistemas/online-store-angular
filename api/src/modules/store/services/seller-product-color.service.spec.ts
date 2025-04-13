import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductColorService } from './seller-product-color.service';

describe('SellerProductColorService', () => {
  let service: SellerProductColorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerProductColorService],
    }).compile();

    service = module.get<SellerProductColorService>(SellerProductColorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
