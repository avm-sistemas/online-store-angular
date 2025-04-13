import { Test, TestingModule } from '@nestjs/testing';
import { MainController } from './main.controller';
import { MainService } from './main.service';

describe('MainController', () => {
  let mainController: MainController;
  let mainService: MainService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MainController],
      providers: [MainService],
    }).compile();

    mainController = app.get<MainController>(MainController);
    mainService = app.get<MainService>(MainService);
  });

  describe('root', () => {
    it('should return "Health"', () => {
      expect(mainService.getHealth()).toBe(true);
    });
  });
});
