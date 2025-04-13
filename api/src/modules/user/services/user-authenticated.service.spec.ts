import { Test, TestingModule } from '@nestjs/testing';
import { UserAuthenticatedService } from './user-authenticated.service';

describe('UserAuthenticatedService', () => {
  let service: UserAuthenticatedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAuthenticatedService],
    }).compile();

    service = module.get<UserAuthenticatedService>(UserAuthenticatedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
