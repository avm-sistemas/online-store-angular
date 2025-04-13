import { Test, TestingModule } from '@nestjs/testing';
import { UserProductRateService } from './user-product-rate.service';

describe('UserProductRateService', () => {
  let service: UserProductRateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProductRateService],
    }).compile();

    service = module.get<UserProductRateService>(UserProductRateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
