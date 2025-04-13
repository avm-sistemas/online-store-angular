import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductImageService } from './seller-product-image.service';

describe('SellerProductImageService', () => {
  let service: SellerProductImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerProductImageService],
    }).compile();

    service = module.get<SellerProductImageService>(SellerProductImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
